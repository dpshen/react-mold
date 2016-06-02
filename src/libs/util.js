module.exports = {
    test: function () {
        console.log("util.test")
    },
    is:function(a, b, c){
        return a ? b : c
    },
    flat(str, param){
        for(var key in param){
            str += key+"="+param[key]+"&"
        }
        return str.slice(0,-1);
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
    moneyFormat: function (money) {
        if (!money || money == '0') {
            return '0.00'
        }

        var mStr = money.toString();
        var len = mStr.length;

        if (len <= 5) {
            return (money / 100).toFixed(2)
        }

        var decimal = mStr.slice(-2);
        var num = [];
        for (var i = -5; i > -len - 3; i = i - 3) {
            var part = [];
            part[0] = mStr.slice(i, i + 3);
            num = part.concat(num);
        }
        var round = num.join(",");
        return (round + '.' + decimal);
    },
    //获取标准时差
    getTimezoneOffset: function () {
        var now = new Date();
        return now.getTimezoneOffset() * 60 * 1000;
    },
    getDayOfWeek: function (dateStr) {
        var date = new Date(dateStr);
        var obj = {"date": date};
        var dayOfWeekList = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        obj.dayOfWeek = dayOfWeekList[date.getDay()];
        return obj;
    },
    toDate: function (dateStr) {
        // IE浏览器不支持Date("yyyy-MM-dd") , 如果在IE浏览器且传入参数为字符串,做特殊处理
        if (navigator.userAgent.indexOf("MSIE") > 0 && typeof(dateStr) == 'string'){
            var isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/,
                date = new Date(NaN),
                month,
                parts = isoExp.exec(dateStr);

            if (parts) {
                month = +parts[2];
                date.setFullYear(parts[1], month - 1, parts[3]);
                if (month != date.getMonth() + 1) {
                    date.setTime(NaN);
                }
            }
            return date;
        } else {
            return new Date(dateStr);
        }
    }
}