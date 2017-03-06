module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(13);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var storage = new Map();

var BaseComponent = function (_React$Component) {
  _inherits(BaseComponent, _React$Component);

  function BaseComponent(props) {
    _classCallCheck(this, BaseComponent);

    var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

    _this.state = {};
    _this.util = _util2.default;
    _this.storage = storage;
    return _this;
  }

  _createClass(BaseComponent, [{
    key: 'onSendBefore',
    value: function onSendBefore() {
      this.setState({
        loading: true
      });
    }
  }, {
    key: 'onComplete',
    value: function onComplete() {
      this.setState({
        loading: false
      });
    }
  }]);

  return BaseComponent;
}(_react2.default.Component);

exports.default = BaseComponent;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pathList = exports.appName = undefined;

var _reactRouter = __webpack_require__(1);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _IndexScreen = __webpack_require__(8);

var _IndexScreen2 = _interopRequireDefault(_IndexScreen);

var _newsScreen = __webpack_require__(9);

var _newsScreen2 = _interopRequireDefault(_newsScreen);

var _reactRouterToArray = __webpack_require__(16);

var _reactRouterToArray2 = _interopRequireDefault(_reactRouterToArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appName = exports.appName = __webpack_require__(15).name;

var route = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/' },
  _react2.default.createElement(_reactRouter.IndexRedirect, { to: appName }),
  _react2.default.createElement(
    _reactRouter.Route,
    { path: appName },
    _react2.default.createElement(_reactRouter.IndexRedirect, { to: 'index' }),
    _react2.default.createElement(_reactRouter.Route, { path: 'index', component: _IndexScreen2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'news', component: _newsScreen2.default })
  )
);

var pathList = exports.pathList = (0, _reactRouterToArray2.default)(route);

exports.default = route;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// server 的配置
var config = {
  "API_DOMAIN": "http://fbi.yuantutech.com:3100",
  "PROTOCOL": ""
};

if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
  var href = window.location.href;

  if (href.indexOf("http://192.168") != -1 || href.indexOf("http://127.0") != -1 || href.indexOf("http://0.0") != -1) {

    //测试环境使用 uat 的 server
    // config = {
    //   API_DOMAIN: "http://127.0.0.1",
    // }
  }
}

exports.default = config;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _UserCenter = __webpack_require__(14);

var _UserCenter2 = _interopRequireDefault(_UserCenter);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexScreen = function (_BaseComponent) {
  _inherits(IndexScreen, _BaseComponent);

  function IndexScreen(props) {
    _classCallCheck(this, IndexScreen);

    var _this = _possibleConstructorReturn(this, (IndexScreen.__proto__ || Object.getPrototypeOf(IndexScreen)).call(this, props));

    _this.state = {
      result: { data: "no" }
    };
    _this.util.ev.on("test", function (a) {
      _this.setState({
        msg: 'IndexScreen on test event: ' + a + ' \n IndexScreen test in storage: ' + _this.storage.get("test")
      });
      console.log("IndexScreen on test:", a);
      console.log("IndexScreen test in storage:", _this.storage.get("test"));
    });
    return _this;
  }

  _createClass(IndexScreen, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.get();
    }
  }, {
    key: 'get',
    value: function get() {
      _UserCenter2.default.cameraBlackList(1).subscribe(this).fetch();
    }
  }, {
    key: 'onSuccess',
    value: function onSuccess(result) {
      this.storage.set("test", result);
      this.setState({
        result: result
      });
      this.util.ev.emit('test', result);
    }
  }, {
    key: 'render',
    value: function render() {
      var msg = this.state.msg;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Index'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/react-mold/news' },
          '\u65B0\u95FB'
        ),
        _react2.default.createElement(
          'div',
          null,
          msg
        )
      );
    }
  }]);

  return IndexScreen;
}(_BaseComponent3.default);

exports.default = IndexScreen;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _BaseComponent2 = __webpack_require__(2);

var _BaseComponent3 = _interopRequireDefault(_BaseComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsScreen = function (_BaseComponent) {
  _inherits(NewsScreen, _BaseComponent);

  function NewsScreen(props) {
    _classCallCheck(this, NewsScreen);

    var _this = _possibleConstructorReturn(this, (NewsScreen.__proto__ || Object.getPrototypeOf(NewsScreen)).call(this, props));

    _this.state.msg = 'NewsScreen test in storage: ' + _this.storage.get("test");
    console.log("NewsScreen test in storage:", _this.storage.get("test"));
    return _this;
  }

  _createClass(NewsScreen, [{
    key: 'render',
    value: function render() {
      var msg = this.state.msg;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'News'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/react-mold/index' },
          '\u9996\u9875'
        ),
        _react2.default.createElement(
          'span',
          null,
          msg
        )
      );
    }
  }]);

  return NewsScreen;
}(_BaseComponent3.default);

exports.default = NewsScreen;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = __webpack_require__(3);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * onSendBefore
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * onSendAfter
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * onSuccess
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * onComplete
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * onError
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * */


var AsyncData = function (_events$EventEmitter) {
  _inherits(AsyncData, _events$EventEmitter);

  function AsyncData(url, param) {
    _classCallCheck(this, AsyncData);

    var _this = _possibleConstructorReturn(this, (AsyncData.__proto__ || Object.getPrototypeOf(AsyncData)).call(this));

    _this.SEND_BEFORE = "sendBefore";
    _this.COMPLETE = "complete";
    _this.IO_ERROR = "ioError";
    _this.url = url;
    _this.param = param;
    // this.data = {};
    return _this;
  }

  /**
   *
   * Observer
   * **/


  _createClass(AsyncData, [{
    key: "subscribe",
    value: function subscribe(observer) {
      observer.onSendBefore && this.on(this.SEND_BEFORE, observer.onSendBefore);
      observer.onComplete && this.on(this.COMPLETE, observer.onComplete);
      observer.onIOError && this.on(this.IO_ERROR, observer.onIOError);

      return this;
    }

    //返回promise对象

  }, {
    key: "fetch",
    value: function fetch() {
      var _this2 = this;

      //emit SEND_BEFORE
      this.emit(this.SEND_BEFORE, this.url, this.param);

      this.loadData().then(function (result) {
        //完成
        _this2.emit(_this2.COMPLETE, result, _this2.param);
      }, function (e) {
        _this2.emit(_this2.COMPLETE, e);
        //错误
        _this2.emit(_this2.IO_ERROR, e);
      });

      return this;
    }

    //请求数据

  }, {
    key: "loadData",
    value: function loadData() {
      return new Promise(function (reslove, reject) {
        setTimeout(function () {
          reslove(1);
        }, 3000);
      });
    }
  }]);

  return AsyncData;
}(_events2.default.EventEmitter);

exports.default = AsyncData;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * JSONP sets up and allows you to execute a JSONP request
 * @param {String} url  The URL you are requesting with the JSON data
 * @param {Object} data The Data object you want to generate the URL params from
 * @param {String} method  The method name for the callback function. Defaults to callback (for example, flickr's is "jsoncallback")
 * @param {Function} callback  The callback you want to execute as an anonymous function. The first parameter of the anonymous callback function is the JSON
 *
 * @example
 * JSONP('http://twitter.com/users/oscargodson.json',function(json){
 *  document.getElementById('avatar').innerHTML = '<p>Twitter Pic:</p><img src="'+json.profile_image_url+'">';
 * });
 *
 * @example
 * JSONP('http://api.flickr.com/services/feeds/photos_public.gne',{'id':'12389944@N03','format':'json'},'jsoncallback',function(json){
 *  document.getElementById('flickrPic').innerHTML = '<p>Flickr Pic:</p><img src="'+json.items[0].media.m+'">';
 * });
 *
 * @example
 * JSONP('http://graph.facebook.com/FacebookDevelopers', 'callback', function(json){
 *  document.getElementById('facebook').innerHTML = json.about;
 * });
 */

var JSONP = function JSONP(url, data, successCallback, errorCallback) {
  //Set the defaults
  var method = "callback";
  url = url || '';
  data = data || {};
  var callback = successCallback || function () {};

  //Gets all the keys that belong
  //to an object
  var getKeys = function getKeys(obj) {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  };

  //Turn the data object into a query string.
  //Add check to see if the second parameter is indeed
  //a data object. If not, keep the default behaviour
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object') {
    var queryString = '';
    var keys = getKeys(data);
    for (var i = 0; i < keys.length; i++) {
      queryString += encodeURIComponent(keys[i]) + '=' + encodeURIComponent(data[keys[i]]);
      if (i != keys.length - 1) {
        queryString += '&';
      }
    }
    url += '?' + queryString;
  } else if (typeof data == 'function') {
    method = data;
    callback = method;
  }

  //If no method was set and they used the callback param in place of
  //the method param instead, we say method is callback and set a
  //default method of "callback"
  if (typeof method == 'function') {
    callback = method;
    method = 'callback';
  }

  //Check to see if we have Date.now available, if not shim it for older browsers
  if (!Date.now) {
    Date.now = function () {
      return new Date().getTime();
    };
  }

  //Use timestamp + a random factor to account for a lot of requests in a short time
  //e.g. jsonp1394571775161
  var timestamp = Date.now();
  var generatedFunction = 'jsonp' + Math.round(timestamp + Math.random() * 1000001);

  //Generate the temp JSONP function using the name above
  //First, call the function the user defined in the callback param [callback(json)]
  //Then delete the generated function from the window [delete window[generatedFunction]]
  window[generatedFunction] = function (json) {
    callback(json);

    // IE8 throws an exception when you try to delete a property on window
    // http://stackoverflow.com/a/1824228/751089
    try {
      delete window[generatedFunction];
    } catch (e) {
      window[generatedFunction] = undefined;
    }
  };

  //Check if the user set their own params, and if not add a ? to start a list of params
  //If in fact they did we add a & to add onto the params
  //example1: url = http://url.com THEN http://url.com?callback=X
  //example2: url = http://url.com?example=param THEN http://url.com?example=param&callback=X
  if (url.indexOf('?') === -1) {
    url = url + '?';
  } else {
    url = url + '&';
  }

  //This generates the <script> tag
  var jsonpScript = document.createElement('script');
  jsonpScript.setAttribute("src", url + method + '=' + generatedFunction);
  jsonpScript.onerror = function () {
    errorCallback && errorCallback();
  };
  document.getElementsByTagName("head")[0].appendChild(jsonpScript);
};

module.exports = JSONP;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AsyncData2 = __webpack_require__(10);

var _AsyncData3 = _interopRequireDefault(_AsyncData2);

var _JSONP = __webpack_require__(11);

var _JSONP2 = _interopRequireDefault(_JSONP);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * JSONP('http://api.flickr.com/services/feeds/photos_public.gne',{'id':'12389944@N03','format':'json'},'jsoncallback',function(json){
 *  document.getElementById('flickrPic').innerHTML = '<p>Flickr Pic:</p><img src="'+json.items[0].media.m+'">';
 * });
 *
 * */

//jsonp的异步请求
//增加了一个 SUCCESS 事件
var JSONPAsyncData = function (_AsyncData) {
  _inherits(JSONPAsyncData, _AsyncData);

  //增加一个异步success
  // SUCCESS = "success"
  // ERROR = "error2"
  function JSONPAsyncData(url, param) {
    _classCallCheck(this, JSONPAsyncData);

    param = param || {};
    param.t = parseInt(Math.random() * 100000);

    var _this = _possibleConstructorReturn(this, (JSONPAsyncData.__proto__ || Object.getPrototypeOf(JSONPAsyncData)).call(this, url, param));

    _this.SUCCESS = "success";
    _this.ERROR = "error2";
    return _this;
  }

  _createClass(JSONPAsyncData, [{
    key: 'subscribe',
    value: function subscribe(observer) {
      var onSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      observer.onSendBefore && this.on(this.SEND_BEFORE, function () {
        observer.onSendBefore.apply(observer, arguments);
      });

      observer.onComplete && this.on(this.COMPLETE, function () {
        observer.onComplete.apply(observer, arguments);
      });

      observer.onIOError && this.on(this.IO_ERROR, function () {
        observer.onIOError.apply(observer, arguments);
      });

      if (onSuccess) {
        this.on(this.SUCCESS, function () {
          options.onSuccess.apply(observer, arguments);
        });
      } else if (observer.onSuccess) {
        observer.onSuccess && this.on(this.SUCCESS, function () {
          observer.onSuccess.apply(observer, arguments);
        });
      }

      if (onError) {
        this.on(this.ERROR, function () {
          onError.apply(observer, arguments);
        });
      } else {
        observer.onError && this.on(this.ERROR, function () {
          observer.onError.apply(observer, arguments);
        });
      }

      return this;
    }
  }, {
    key: 'fetch',
    value: function fetch(event) {
      var _this2 = this;

      return new Promise(function (reslove, reject) {
        //监听异步完成事件
        _this2.on(_this2.COMPLETE, function (result) {
          //验证返回数据是否正确
          if (result && result.success) {
            _this2.emit(_this2.SUCCESS, result);
            reslove(result);
          } else if (result && !result.success) {
            console.log("result error", result);
            _this2.emit(_this2.ERROR, result);
            reject(result);
          } else {
            console.log("请求无效，ioerror会处理");
          }
        });

        //把io错误
        _this2.on(_this2.IO_ERROR, function (e) {
          // console.log("this.IO_ERROR")
          _this2.emit(_this2.COMPLETE, { msg: "网络错误,请稍后再试" });
          // this.emit(this.ERROR, {msg:"网络错误，请稍后再试", resultCode:404})
          reject({ msg: "网络错误，请稍后再试", resultCode: 404 });
        });

        //发送请求之前
        _this2.emit(_this2.SEND_BEFORE, _this2.url, _this2.param);

        _this2.loadData().then(function (result) {
          //完成
          _this2.emit(_this2.COMPLETE, result, _this2.param);
        }, function (e) {
          //错误
          _this2.emit(_this2.IO_ERROR, e);
        });
      });
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this3 = this;

      return new Promise(function (reslove, reject) {
        var param = {};
        console.log(_this3.param);
        for (var key in _this3.param) {

          if (_this3.param[key] !== "" && _this3.param[key] !== "undefined" && _this3.param[key] !== undefined && _this3.param[key] !== null) {
            param[key] = _this3.param[key];
          }
        }
        (0, _JSONP2.default)(_this3.url, param, reslove, function (e) {
          reject({ msg: "请求错误" });
        });
      });
    }
  }, {
    key: 'onSuccess',
    value: function onSuccess(callback) {
      this.on(this.SUCCESS, callback);
      return this;
    }
  }, {
    key: 'onError',
    value: function onError(callback) {
      this.on(this.ERROR, callback);
      return this;
    }
  }]);

  return JSONPAsyncData;
}(_AsyncData3.default);

exports.default = JSONPAsyncData;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _url = __webpack_require__(17);

var _url2 = _interopRequireDefault(_url);

var _events = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import event from 'events'
var ev = new _events.EventEmitter();

var util = {
  ev: ev,
  query: function query() {
    return _url2.default.parse(window.location.href, true).query;
  },
  pad: function pad(string, length, _pad) {
    var len = length - String(string).length;
    if (len < 0) {
      return string;
    }
    var arr = new Array(length - String(string).length || 0);
    arr.push(string);
    return arr.join(_pad || '0');
  },
  flat: function flat(param) {
    var str = "";
    for (var key in param) {
      str += key + "=" + (param[key] != undefined ? param[key] : "") + "&";
    }
    return str.slice(0, -1);
  },
  https: function https(a) {
    return String(a).replace("http://", "//");
  },
  //可视化object把假值转换为 ""
  vis: function vis(json) {
    for (var key in json) {
      // || isNaN(json[key])
      if (json[key] === undefined || json[key] === null) {
        json[key] = "";
      }
    }
    return json;
  },
  forEach: function forEach(object, callback) {
    var list = [];
    for (var key in object) {
      list.push(callback(object[key], key));
    }
    return list;
  },

  flatStr: function flatStr(str, param) {
    return str + this.flat(param);
  },

  is: function is(_is, str) {
    return _is ? str : null;
  },
  dateFormatGMT: function dateFormatGMT(source, pattern) {
    var time = new Date(source);
    time.setUTCHours(time.getUTCHours() + (time.getTimezoneOffset() + 8 * 60) / 60);
    return this.dateFormat(time, pattern);
  },
  dateFormat: function dateFormat(source, pattern) {
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
  moneyFormat: function moneyFormat(money, fixed) {
    if (!fixed) {
      fixed = 2;
    }
    if (!money || Number(money) == 0) {
      return 0; //(0).toFixed(fixed)
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
        return '-' + (mStr[0] / 100 + mStr[1]).toFixed(fixed);
      } else {
        return (mStr[0] / 100 + mStr[1]).toFixed(fixed);
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
      return '-' + round + '.' + decimal;
    } else {
      return round + '.' + decimal;
    }
  },

  //获取标准时差
  getTimezoneOffset: function getTimezoneOffset() {
    var now = new Date();
    return now.getTimezoneOffset() * 60 * 1000;
  },
  isLogin: function isLogin() {
    return (/sid\=\w+/.test(document.cookie)
    );
  },

  waitAlert: function waitAlert(text, delay) {
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
  waitHide: function waitHide() {
    timeout && clearTimeout(timeout);
    if (alerts) {
      alerts.remove();
    }
  },
  alert: function alert(text, callback) {
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
  alertDialog: function alertDialog(param, callback) {

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
      alerts && alerts.remove();
    }, time || text.length * 200);

    return alerts;
  },
  dialog: function dialog(content, callback, option) {
    option = $.extend({
      cancel: true,
      cancelText: "取消",
      ok: true,
      okText: "确定"
    }, option || {});

    var tmpl = '<div class="ui-dialog show">' + '<div class="ui-dialog-cnt">' + '<div class="ui-dialog-bd">' + '<div style="text-align:center;">' + content + '</div>' + '</div>' + '<div class="ui-dialog-ft">' + (option.cancel ? '<button type="button" class="J_Btn" data-role="0">' + option.cancelText + '</button>' : '') + (option.ok ? '<button type="button" class="J_Btn" data-role="1">' + option.okText + '</button>' : '') + '</div>' + '</div>' + '</div>';

    var dialog = $(tmpl);
    dialog.appendTo(document.body).find(".J_Btn").click(function () {
      var role = $(this).attr("data-role");
      dialog.remove();
      callback && callback(role == "1");
    });
  }
};

module.exports = util;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _JSONPAsyncData = __webpack_require__(12);

var _JSONPAsyncData2 = _interopRequireDefault(_JSONPAsyncData);

var _config = __webpack_require__(7);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//账单list

//无缓存数据
var API_BILL_LIST = "/user-web/restapi/pay/query/billlist";
//账单详情

//优先读取缓存数据
// import JSONPCacheAsyncData from '../lib/JSONPCacheAsyncData'
var API_BILL_DETAIL = "/user-web/restapi/pay/query/billdetail";

function getAPIUri(path) {
  return _config2.default.API_DOMAIN + path;
}

exports.default = {
  //获取预约详情
  cameraBlackList: function cameraBlackList(id) {
    return new _JSONPAsyncData2.default(getAPIUri("/mock/test/test"), { id: id });
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
	"name": "react-mold",
	"version": "1.0.0",
	"description": "",
	"main": "src/",
	"scripts": {
		"start": "npm run dev",
		"clear": "rm -rf build",
		"build": "cross-env NODE_ENV=Daily webpack && node singleCI/renderRoute.bundle.js",
		"dev": "cross-env NODE_ENV=dev webpack",
		"dll": "cross-env NODE_ENV=daily webpack --config webpack.dllPlugin.js"
	},
	"author": "dpshen",
	"license": "ISC",
	"dependencies": {
		"react": "^0.14.7",
		"react-dom": "^0.14.7",
		"react-router": "2.0.0"
	},
	"devDependencies": {
		"babel-core": "^6.3.15",
		"babel-loader": "^6.2.0",
		"babel-plugin-transform-decorators-legacy": "^1.3.4",
		"babel-plugin-transform-runtime": "^6.23.0",
		"babel-polyfill": "^6.23.0",
		"babel-preset-es2015": "^6.3.13",
		"babel-preset-react": "^6.3.13",
		"babel-preset-react-hmre": "^1.1.1",
		"babel-preset-stage-1": "^6.22.0",
		"babel-preset-stage-3": "^6.22.0",
		"cross-env": "^3.1.4",
		"es3ify-loader": "^0.2.0",
		"extract-text-webpack-plugin": "^2.0.0",
		"html-webpack-plugin": "^2.28.0",
		"react-hot-loader": "^1.3.0",
		"react-router-to-array": "^0.1.2",
		"webpack": "^2.2.1",
		"webpack-dev-server": "^1.14.1"
	}
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router-to-array");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _route = __webpack_require__(4);

var fs = __webpack_require__(5);
var path = __webpack_require__(6);

//  项目名称
var reg = new RegExp('^/' + _route.appName);
var indexSrc = path.join("build", "index.html");

var mkdirsSync = function mkdirsSync(dirpath, mode) {
    if (!fs.existsSync(dirpath)) {
        var pathtmp;
        dirpath.split(path.sep).forEach(function (dirname) {
            if (pathtmp) {
                pathtmp = path.join(pathtmp, dirname);
            } else {
                pathtmp = dirname;
            }
            if (!fs.existsSync(pathtmp)) {
                fs.mkdirSync(pathtmp, mode);
                var destSrc = path.join(pathtmp, "index.html");
                copyIndex(destSrc);
            }
        });
    }
    return true;
};

var copyIndex = function copyIndex(dest) {
    if (dest == indexSrc) {
        return false;
    }
    fs.writeFileSync(dest, fs.readFileSync(indexSrc));
};

_route.pathList.map(function (dir) {
    var dir = path.join("build", dir.replace(reg, ""));
    mkdirsSync(dir, null);
});

/***/ })
/******/ ]);