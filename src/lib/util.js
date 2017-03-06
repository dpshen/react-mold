
import url from 'url';
import {EventEmitter} from 'events'
// import event from 'events'
let ev = new EventEmitter();

let util = {
  ev: ev,
  query:function(){
    return url.parse(window.location.href, true).query;
  },
  pad: function (string, length, pad) {
    var len = length - String(string).length
    if (len < 0) {
      return string;
    }
    var arr = new Array(length - String(string).length || 0)
    arr.push(string);
    return arr.join(pad || '0');
  },
  flat: function (param) {
    var str = ""
    for (var key in param) {
      str += key + "=" + (param[key] != undefined ? param[key] : "") + "&"
    }
    return str.slice(0, -1);
  },
  https:function(a){
    return  String(a).replace("http://", "//");
  },
  //可视化object把假值转换为 ""
  vis:function(json){
    for(var key in json){
      // || isNaN(json[key])
      if(json[key] === undefined || json[key] === null){
        json[key] = "";
      }
    }
    return json;
  },
  forEach(object, callback){
    var list = []
    for(var key in object){
      list.push(callback(object[key], key))
    }
    return list;
  },
  flatStr:function(str, param){
    return str + this.flat( param );
  },

  is:function(is, str){
    return is ? str : null
  },
  dateFormatGMT:function( source, pattern){
    let time = new Date(source);
    time.setUTCHours(time.getUTCHours() + ((time.getTimezoneOffset() + 8*60)/60));
    return this.dateFormat(time, pattern);
  },
  dateFormat: function (source, pattern) {
    // Jun.com.format(new Date(),"yyyy-MM-dd hh:mm:ss");
    //Jun.com.format(new Date(),"yyyy年MM月dd日 hh时:mm分:ss秒");
    if (!source) {
      return "";
    }

    source = new Date(source);
    var pad = this.pad,
      date = {
        yy: String(source.getFullYear()).slice(-2),
        yyyy: source.getFullYear(),
        M: source.getMonth() + 1,
        MM: pad(source.getMonth() + 1, 2, '0'),
        d: source.getDate(),
        dd: pad(source.getDate(), 2, '0'),
        h: source.getHours(),
        hh: pad(source.getHours(), 2, '0'),
        m: source.getMinutes(),
        mm: pad(source.getMinutes(), 2, '0'),
        s: source.getSeconds(),
        ss: pad(source.getSeconds(), 2, '0')
      };
    return (pattern || "yyyy-MM-dd hh:mm:ss").replace(/yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s/g, function (v) {
      return date[v];
    });

  },
  //将金额*100的整数转换成 千分位金额 1,234.00
  moneyFormat: function (money, fixed) {
    if (!fixed) {
      fixed = 2
    }
    if (!money || Number(money) == 0) {
      return 0;//(0).toFixed(fixed)
    }
    var negative = false;

    var mStr = money.toString().split(".");
    mStr[1] = Number('0.00' + (mStr[1] || ""));

    if (mStr[0].indexOf('-') == 0) {
      negative = true;
      mStr[0] = mStr[0].replace("-", '');
    }

    var len = mStr[0].length;

    if (len <= 5) {
      if (negative) {
        return '-' + (mStr[0] / 100 + mStr[1]).toFixed(fixed)
      } else {
        return (mStr[0] / 100 + mStr[1]).toFixed(fixed)
      }
    }

    var decimal = (Number('0.' + mStr[0].slice(-2)) + mStr[1]).toFixed(fixed).replace("0.", "");
    var num = [];
    for (var i = -5; i > -len - 3; i = i - 3) {
      var part = [];
      part[0] = mStr[0].slice(i, i + 3);
      num = part.concat(num);
    }
    var round = num.join(",");
    //return (round + '.' + decimal );
    if (negative) {
      return ('-' + round + '.' + decimal );
    } else {
      return (round + '.' + decimal );
    }
  },

  //获取标准时差
  getTimezoneOffset: function () {
    var now = new Date();
    return now.getTimezoneOffset() * 60 * 1000;
  },
  isLogin: function () {
    return /sid\=\w+/.test(document.cookie);
  },

  waitAlert: function (text, delay) {
    /**
     700 毫秒以上才弹出加载动画
     */
    var self = this;
    this.waitHide();
    timeout = setTimeout(function () {
      self.alertDialog({
        text: text,
        time: 120000,
        isWait: true
      });
    }, delay === undefined ? 700 : delay);
  },
  waitHide: function () {
    timeout && clearTimeout(timeout);
    if (alerts) {
      alerts.remove();
    }
  },
  alert: function (text, callback) {
    this.alertDialog({
      text: text,
      time: Math.max(String(text).length * 250, 2000)
    }, callback);
  },
  /**
   * text
   * param {
				text:"",
				time:"", //显示时间
				isWait:true //是否显示等待
			}
   */
  alertDialog: function (param, callback) {

    timeout && clearTimeout(timeout);

    var text = param.text;
    var time = param.time;
    var isWait = param.isWait;
    // console.log( param )
    if (alerts) {
      alerts.remove();
      alerts = null;
    }

    alerts = $('<div class="ui-alert"><div  class="text">' + (isWait ? '<div class="loading-icon"></div>' : '') + text + '</div></div>');

    alerts.appendTo(document.body);

    setTimeout(function () {
      callback && callback();
      alerts && (alerts.remove());
    }, time || text.length * 200);

    return alerts;
  },
  dialog: function (content, callback, option) {
    option = $.extend({
      cancel:true,
      cancelText:"取消",
      ok:true,
      okText:"确定"
    }, option || {})

    var tmpl = '<div class="ui-dialog show">' +
      '<div class="ui-dialog-cnt">' +
      '<div class="ui-dialog-bd">' +
      '<div style="text-align:center;">' + content + '</div>' +
      '</div>'+
      '<div class="ui-dialog-ft">' +
      (option.cancel ? '<button type="button" class="J_Btn" data-role="0">'+option.cancelText+'</button>' : '') +
      (option.ok ?'<button type="button" class="J_Btn" data-role="1">'+option.okText+'</button>' : '') +
      '</div>' +
      '</div>' +
      '</div>';

    var dialog = $(tmpl);
    dialog.appendTo(document.body).find(".J_Btn").click(function () {
      var role = $(this).attr("data-role");
      dialog.remove();
      callback && callback(role == "1");
    });

  },
}

module.exports = util;
