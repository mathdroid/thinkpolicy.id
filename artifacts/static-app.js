(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/assertThisInitialized");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(48);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(50);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(33);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(34);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(51);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(23);

var _helpers = __webpack_require__(52);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(23);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(49)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(6);

// EXTERNAL MODULE: external "@rehooks/window-size"
var window_size_ = __webpack_require__(40);
var window_size_default = /*#__PURE__*/__webpack_require__.n(window_size_);

// EXTERNAL MODULE: external "react-particles-js"
var external_react_particles_js_ = __webpack_require__(41);
var external_react_particles_js_default = /*#__PURE__*/__webpack_require__.n(external_react_particles_js_);

// EXTERNAL MODULE: external "@reach/router"
var router_ = __webpack_require__(10);

// CONCATENATED MODULE: /Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/components/Router.js

// EXTERNAL MODULE: external "normalize.css"
var external_normalize_css_ = __webpack_require__(59);

// EXTERNAL MODULE: /Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/app.css
var app = __webpack_require__(60);

// CONCATENATED MODULE: /Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/App.js




 //





function App() {
  var _ref = typeof window !== "undefined" ? window_size_default()() : {
    outerWidth: 1280,
    outerHeight: 768,
    innerHeight: 768,
    innerWidth: 1280
  },
      width = _ref.innerWidth,
      height = _ref.innerHeight;

  var _useSiteData = Object(external_react_static_["useSiteData"])(),
      title = _useSiteData.title;

  var distance = Math.min(width, height) / 8;
  var amount = Math.floor(width * height * 80 / (1280 * 768));
  return Object(core_["jsx"])(external_react_static_["Root"], null, Object(core_["jsx"])(external_react_static_["Head"], null, Object(core_["jsx"])("title", null, title)), Object(core_["jsx"])("div", null, Object(core_["jsx"])(external_react_particles_js_default.a, {
    params: {
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          }
        },
        detect_on: "window"
      },
      particles: {
        number: {
          value: amount
        },
        color: {
          value: "#ffffff"
        },
        size: {
          value: 3
        },
        opacity: {
          value: 0.8
        },
        shape: {
          type: "circle",
          stroke: {
            color: "#000000",
            width: 8
          }
        },
        move: {
          enable: true,
          direction: "top-right",
          speed: 2,
          out_mode: "out"
        },
        line_linked: {
          color: "#000000",
          width: 2,
          opacity: 0.8,
          distance: distance
        }
      }
    },
    style: {
      width: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: -1
    }
  })), Object(core_["jsx"])("main", {
    className: "content"
  }, Object(core_["jsx"])(router_["Router"], null, Object(core_["jsx"])(external_react_static_["Routes"], {
    path: "*"
  }))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(16);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "/Users/odi/WORK/THINKPOLICY/thinkpolicy.id",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/node_modules/react-static/lib/browser");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4__);









Object(_Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404 */).then(__webpack_require__.bind(null, 35))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return "Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404";
  }
}), universalOptions);
t_0.template = '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404.js';
var t_1 = _Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/index */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/index";
  }
}), universalOptions);
t_1.template = '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/index.js';
var t_2 = _Users_odi_WORK_THINKPOLICY_thinkpolicy_id_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_4___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute";
  }
}), universalOptions);
t_2.template = '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404.js': t_0,
  '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/index.js': t_1,
  '/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute.js': t_2 // Not Found Template

});
var notFoundTemplate = "/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(10);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_11__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var signupSchema = yup__WEBPACK_IMPORTED_MODULE_9__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().email("Email does not seem valid.").required("We need your email address."),
  name: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().min(2).required("We'd love to know your name."),
  birthyear: yup__WEBPACK_IMPORTED_MODULE_9__["number"]().min(1900, "Not *that* old 🤔").max(2019, "🤔").required("We'd love to know your age"),
  organization: yup__WEBPACK_IMPORTED_MODULE_9__["string"]().required("What organization are you in? If not applicable, type 'Personal'"),
  contact_me_by_fax_only: yup__WEBPACK_IMPORTED_MODULE_9__["boolean"]()
});
var initialValues = {
  email: "",
  name: "",
  birthyear: "",
  organization: "",
  contact_me_by_fax_only: false
};

var encode = function encode(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }).join("&");
};

var ErrorComponent = function ErrorComponent(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("span", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({}, props, {
    style: {
      color: "#e55"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useSiteData = Object(react_static__WEBPACK_IMPORTED_MODULE_7__["useSiteData"])(),
      headline = _useSiteData.headline,
      subheadline = _useSiteData.subheadline,
      cta = _useSiteData.cta;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      hasSubmitted = _useState2[0],
      setHasSubmitted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      submittedName = _useState4[0],
      setSubmittedName = _useState4[1];

  var handleSubmit = function handleSubmit(values) {
    var encoded = encode(_objectSpread({
      "form-name": "signup"
    }, values));
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encoded
    }).then(function () {
      setSubmittedName(values.name);
      setHasSubmitted(true);
    })["catch"](function (error) {
      return alert(error);
    }); // e.preventDefault();
  };

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("img", {
    src: "/logo.jpg",
    className: "logo",
    alt: "Think Policy logo"
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h1", null, headline), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("p", null, subheadline), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_reach_router__WEBPACK_IMPORTED_MODULE_11__["Link"], {
    to: "/rute"
  }, ">> ", "Daftar Ruang Tengah"), hasSubmitted ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h2", null, "Thanks for submitting, ", submittedName, "! We will reach out to you.") : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["Formik"], {
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(values, actions) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return handleSubmit(values);

              case 2:
                actions.setSubmitting(false);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    render: function render(formikProps) {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("form", {
        name: "signup" // netlify-honeypot="contact_me_by_fax_only"
        ,
        "data-netlify": "true",
        onReset: formikProps.handleReset,
        onSubmit: formikProps.handleSubmit
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
        name: "email",
        render: function render(_ref2) {
          var field = _ref2.field,
              _ref2$form = _ref2.form,
              touched = _ref2$form.touched,
              errors = _ref2$form.errors;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", {
            style: {
              marginBottom: 0
            }
          }, "Email: "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({
            className: touched[field.name] && errors[field.name] && "error",
            type: "text"
          }, field, {
            placeholder: "saya@perusahaan.com"
          })));
        }
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"], {
        name: "email",
        component: ErrorComponent
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
        name: "name",
        render: function render(_ref3) {
          var field = _ref3.field,
              _ref3$form = _ref3.form,
              touched = _ref3$form.touched,
              errors = _ref3$form.errors;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", {
            style: {
              marginBottom: 0
            }
          }, "Nama: "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({
            className: touched[field.name] && errors[field.name] && "error",
            type: "text"
          }, field, {
            placeholder: "Odi"
          })));
        }
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"], {
        name: "name",
        component: ErrorComponent
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
        name: "birthyear",
        render: function render(_ref4) {
          var field = _ref4.field,
              _ref4$form = _ref4.form,
              touched = _ref4$form.touched,
              errors = _ref4$form.errors;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", {
            style: {
              marginBottom: 0
            }
          }, "Tahun Kelahiran: "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({
            className: touched[field.name] && errors[field.name] && "error",
            type: "text"
          }, field, {
            placeholder: "1990"
          })));
        }
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"], {
        name: "birthyear",
        component: ErrorComponent
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["Field"], {
        name: "organization",
        render: function render(_ref5) {
          var field = _ref5.field,
              _ref5$form = _ref5.form,
              touched = _ref5$form.touched,
              errors = _ref5$form.errors;
          return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("label", null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", {
            style: {
              marginBottom: 0
            }
          }, "Organisasi: "), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_4___default()({
            className: touched[field.name] && errors[field.name] && "error",
            type: "text"
          }, field, {
            placeholder: "Badan Kebijakan Publik"
          })));
        }
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_8__["ErrorMessage"], {
        name: "organization",
        component: ErrorComponent
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("br", null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
        type: "submit",
        disabled: formikProps.isSubmitting
      }, cta));
    }
  }));
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(13);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(4);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(9);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(2);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__(0);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(6);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(3);

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(18);
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "@emotion/css"
var css_ = __webpack_require__(42);
var css_default = /*#__PURE__*/__webpack_require__.n(css_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/toConsumableArray"
var toConsumableArray_ = __webpack_require__(43);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/objectWithoutProperties"
var objectWithoutProperties_ = __webpack_require__(17);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(25);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(26);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(27);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(28);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/assertThisInitialized"
var assertThisInitialized_ = __webpack_require__(8);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(29);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__(19);
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "@emotion/styled-base"
var styled_base_ = __webpack_require__(15);
var styled_base_default = /*#__PURE__*/__webpack_require__.n(styled_base_);

// EXTERNAL MODULE: external "match-sorter"
var external_match_sorter_ = __webpack_require__(44);
var external_match_sorter_default = /*#__PURE__*/__webpack_require__.n(external_match_sorter_);

// CONCATENATED MODULE: /Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/components/shared.js









var issues = ["Environment & Natural Resource Management", "Human Rights", "Law & Constitution", "Labor", "Women Rights", "Children & Youth", "Research & Education", "Disability", "Poverty", "Economics", "Public Finance & Fiscal Policy", "Trade, Industry & Investment", "Security & Foreign Affairs ", "Natural Resources Management ", "Infrastructure Development", "Governance", "Culture & Society", "Population & Demographics", "Public Health"];
var allItems = issues.map(function (s) {
  return {
    name: s,
    id: s.toLowerCase()
  };
});

var Item =
/*#__PURE__*/
styled_base_default()("li", {
  target: "efj1520"
})("position:relative;cursor:pointer;display:block;border:none;height:auto;text-align:left;border-top:none;line-height:1em;color:rgba(0,0,0,.87);font-size:1rem;text-transform:none;font-weight:400;box-shadow:none;padding:.8rem 1.1rem;white-space:normal;word-wrap:normal;", function (_ref) {
  var isActive = _ref.isActive,
      isSelected = _ref.isSelected;
  var styles = [];

  if (isActive) {
    styles.push({
      color: "rgba(0,0,0,.95)",
      background: "rgba(0,0,0,.03)"
    });
  }

  if (isSelected) {
    styles.push({
      color: "rgba(0,0,0,.95)",
      fontWeight: "700"
    });
  }

  return styles;
},  true ? "" : undefined);

var onAttention = "&:hover, &:focus";

var Input =
/*#__PURE__*/
styled_base_default()("input", {
  target: "efj1521"
})(defineProperty_default()({
  width: "100%",
  // full width `,`icon width/2 `,`border
  fontSize: 14,
  wordWrap: "break-word",
  lineHeight: "1em",
  outline: 0,
  whiteSpace: "normal",
  minHeight: "2em",
  background: "#fff",
  display: "inline-block",
  padding: "1em 2em 1em 1em",
  color: "rgba(0,0,0,.87)",
  boxShadow: "none",
  border: "1px solid rgba(34,36,38,.15)",
  borderRadius: ".30rem",
  transition: "box-shadow .1s ease,width .1s ease"
}, onAttention, {
  borderColor: "#96c8da",
  boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)"
}), function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? defineProperty_default()({
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0"
  }, onAttention, {
    boxShadow: "none"
  }) : null;
},  true ? "" : undefined);

var Label =
/*#__PURE__*/
styled_base_default()("label", {
  target: "efj1522"
})( true ? {
  name: "5ilmf3",
  styles: "font-weight:bold;display:block;margin-bottom:10px;"
} : undefined);

var BaseMenu =
/*#__PURE__*/
styled_base_default()("ul", {
  target: "efj1523"
})("padding:0;margin-top:0;position:absolute;background-color:white;width:100%;max-height:20rem;overflow-y:auto;overflow-x:hidden;outline:0;transition:opacity .1s ease;border-radius:0 0 .28571429rem .28571429rem;box-shadow:0 2px 3px 0 rgba(34,36,38,.15);border-color:#96c8da;border-top-width:0;border-right-width:1px;border-bottom-width:1px;border-left-width:1px;border-style:solid;", function (_ref4) {
  var isOpen = _ref4.isOpen;
  return {
    border: isOpen ? null : "none"
  };
},  true ? "" : undefined);

var Menu = external_react_default.a.forwardRef(function (props, ref) {
  return Object(core_["jsx"])(BaseMenu, extends_default()({
    ref: ref
  }, props));
});

var ControllerButton =
/*#__PURE__*/
styled_base_default()("button", {
  target: "efj1524"
})( true ? {
  name: "1jn69zd",
  styles: "background-color:transparent;border:none;position:absolute;right:0;top:0;cursor:pointer;width:47px;display:flex;flex-direction:column;height:100%;justify-content:center;align-items:center;"
} : undefined);

function ArrowIcon(_ref5) {
  var isOpen = _ref5.isOpen;
  return Object(core_["jsx"])("svg", {
    viewBox: "0 0 20 20",
    preserveAspectRatio: "none",
    width: 16,
    fill: "transparent",
    stroke: "#979797",
    strokeWidth: "1.1px",
    transform: isOpen ? "rotate(180)" : undefined
  }, Object(core_["jsx"])("path", {
    d: "M1,6 L10,15 L19,6"
  }));
}

function XIcon() {
  return Object(core_["jsx"])("svg", {
    viewBox: "0 0 20 20",
    preserveAspectRatio: "none",
    width: 12,
    fill: "transparent",
    stroke: "#979797",
    strokeWidth: "1.1px"
  }, Object(core_["jsx"])("path", {
    d: "M1,1 L19,19"
  }), Object(core_["jsx"])("path", {
    d: "M19,1 L1,19"
  }));
}

function getItems(filter) {
  return filter ? external_match_sorter_default()(allItems, filter, {
    keys: ["name"]
  }) : allItems;
}

function getStringItems(filter) {
  return getItems(filter).map(function (_ref6) {
    var name = _ref6.name;
    return name;
  });
}

function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function getItemsAsync(_x, _x2) {
  return _getItemsAsync.apply(this, arguments);
}

function _getItemsAsync() {
  _getItemsAsync = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(filter, _ref7) {
    var reject;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            reject = _ref7.reject;
            _context.next = 3;
            return sleep(Math.random() * 2000);

          case 3:
            if (!reject) {
              _context.next = 5;
              break;
            }

            throw new Error({
              error: "request rejected"
            });

          case 5:
            return _context.abrupt("return", getItems(filter));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getItemsAsync.apply(this, arguments);
}

var itemToString = function itemToString(i) {
  return i ? i.name : "";
};


// CONCATENATED MODULE: /Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/components/MultiSelect.js













function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// You'll find that downshift is a primitive component and
// you'll be most successful wrapping it with another component
// like the MultiSelect one you see here:
//



var MultiSelect_MultiSelect =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(MultiSelect, _React$Component);

  function MultiSelect() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, MultiSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(MultiSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "stateReducer", function (state, changes) {
      switch (changes.type) {
        case external_downshift_default.a.stateChangeTypes.keyDownEnter:
        case external_downshift_default.a.stateChangeTypes.clickItem:
          return _objectSpread({}, changes, {
            highlightedIndex: state.highlightedIndex,
            isOpen: true,
            inputValue: ""
          });

        default:
          return changes;
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleSelection", function (selectedItem, downshift) {
      var selectedItems = _this.props.selectedItems;

      var callOnChange = function callOnChange() {
        var _this$props = _this.props,
            onSelect = _this$props.onSelect,
            onChange = _this$props.onChange,
            selectedItems = _this$props.selectedItems;

        if (onSelect) {
          onSelect(selectedItems, _this.getStateAndHelpers(downshift));
        }

        if (onChange) {
          onChange(selectedItems, _this.getStateAndHelpers(downshift));
        }
      };

      if (selectedItems.includes(selectedItem)) {
        _this.removeItem(selectedItem, callOnChange);
      } else {
        _this.addSelectedItem(selectedItem, callOnChange);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "removeItem", function (item, cb) {
      var _this$props2 = _this.props,
          selectedItems = _this$props2.selectedItems,
          setSelectedItems = _this$props2.setSelectedItems;
      setSelectedItems(selectedItems.filter(function (i) {
        return i !== item;
      }));
      cb();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getRemoveButtonProps", function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _onClick = _ref.onClick,
          item = _ref.item,
          props = objectWithoutProperties_default()(_ref, ["onClick", "item"]);

      return _objectSpread({
        onClick: function onClick(e) {
          // TODO: use something like downshift's composeEventHandlers utility instead
          _onClick && _onClick(e);
          e.stopPropagation();

          _this.removeItem(item);
        }
      }, props);
    });

    return _this;
  }

  createClass_default()(MultiSelect, [{
    key: "addSelectedItem",
    value: function addSelectedItem(item, cb) {
      var _this$props3 = this.props,
          selectedItems = _this$props3.selectedItems,
          setSelectedItems = _this$props3.setSelectedItems;
      setSelectedItems([].concat(toConsumableArray_default()(selectedItems), [item]));
      cb();
    }
  }, {
    key: "getStateAndHelpers",
    value: function getStateAndHelpers(downshift) {
      var selectedItems = this.props.selectedItems;
      var getRemoveButtonProps = this.getRemoveButtonProps,
          removeItem = this.removeItem;
      return _objectSpread({
        getRemoveButtonProps: getRemoveButtonProps,
        removeItem: removeItem,
        selectedItems: selectedItems
      }, downshift);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          render = _this$props4.render,
          _this$props4$children = _this$props4.children,
          children = _this$props4$children === void 0 ? render : _this$props4$children,
          props = objectWithoutProperties_default()(_this$props4, ["render", "children"]); // TODO: compose together props (rather than overwriting them) like downshift does


      return Object(core_["jsx"])(external_downshift_default.a, extends_default()({}, props, {
        stateReducer: this.stateReducer,
        onChange: this.handleSelection,
        selectedItem: null
      }), function (downshift) {
        return children(_this2.getStateAndHelpers(downshift));
      });
    }
  }]);

  return MultiSelect;
}(external_react_default.a.Component);

var MultiSelect_ref2 =  true ? {
  name: "j7qwjs",
  styles: "display:flex;flex-direction:column;"
} : undefined;

var MultiSelect_ref4 =  true ? {
  name: "xxdqwu",
  styles: "display:flex;flex-wrap:wrap;align-items:center;"
} : undefined;

var MultiSelect_ref5 =  true ? {
  name: "1fxap94",
  styles: "margin:0.5rem;margin-left:0;padding-left:8px;padding-right:8px;display:inline-block;word-wrap:none;background-color:#ccc;border-radius:2px;"
} : undefined;

var _ref6 =  true ? {
  name: "xdkicx",
  styles: "display:grid;grid-gap:6px;grid-auto-flow:column;align-items:center;"
} : undefined;

var MultiSelect_ref7 =  true ? {
  name: "1mnx8h9",
  styles: "cursor:pointer;line-height:0.8;border:none;background-color:transparent;padding:0;font-size:16px;"
} : undefined;

var _ref8 =  true ? {
  name: "dn67gg",
  styles: "border:none;margin:0;margin-left:6px;padding:0;flex:1;font-size:14px;"
} : undefined;

var MultiSelect_App =
/*#__PURE__*/
function (_React$Component2) {
  inherits_default()(App, _React$Component2);

  function App() {
    var _getPrototypeOf3;

    var _this3;

    classCallCheck_default()(this, App);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = possibleConstructorReturn_default()(this, (_getPrototypeOf3 = getPrototypeOf_default()(App)).call.apply(_getPrototypeOf3, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this3), "input", external_react_default.a.createRef());

    defineProperty_default()(assertThisInitialized_default()(_this3), "itemToString", function (item) {
      return item ? item.name : "";
    });

    defineProperty_default()(assertThisInitialized_default()(_this3), "handleChange", function (selectedItems) {
      console.log({
        selectedItems: selectedItems
      });
    });

    return _this3;
  }

  createClass_default()(App, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props5 = this.props,
          selectedItems = _this$props5.selectedItems,
          setSelectedItems = _this$props5.setSelectedItems;
      return Object(core_["jsx"])("div", {
        css: MultiSelect_ref2
      }, Object(core_["jsx"])("h3", null, "Interest"), Object(core_["jsx"])(MultiSelect_MultiSelect, {
        onChange: this.handleChange,
        itemToString: this.itemToString,
        selectedItems: selectedItems,
        setSelectedItems: setSelectedItems
      }, function (_ref3) {
        var getInputProps = _ref3.getInputProps,
            getToggleButtonProps = _ref3.getToggleButtonProps,
            getMenuProps = _ref3.getMenuProps,
            getRemoveButtonProps = _ref3.getRemoveButtonProps,
            removeItem = _ref3.removeItem,
            isOpen = _ref3.isOpen,
            inputValue = _ref3.inputValue,
            selectedItems = _ref3.selectedItems,
            getItemProps = _ref3.getItemProps,
            highlightedIndex = _ref3.highlightedIndex,
            toggleMenu = _ref3.toggleMenu;
        return Object(core_["jsx"])("div", {
          className: "multiselect",
          style: {
            width: "calc(100% - 2rem)",
            position: "relative"
          }
        }, Object(core_["jsx"])("div", {
          css:
          /*#__PURE__*/
          css_default()({
            cursor: "pointer",
            position: "relative",
            borderRadius: "none",
            borderTopRadius: 0,
            borderBottomRightRadius: isOpen ? 0 : 0,
            borderBottomLeftRadius: isOpen ? 0 : 0,
            boxShadow: "0 2px 3px 0 rgba(34,36,38,.15)",
            borderColor: "black",
            borderTopWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderStyle: "solid",
            padding: "0.5rem 1rem"
          },  true ? "" : undefined),
          onClick: function onClick() {
            toggleMenu();
            !isOpen && _this4.input.current.focus();
          }
        }, Object(core_["jsx"])("div", {
          css: MultiSelect_ref4
        }, selectedItems.length > 0 ? selectedItems.map(function (item) {
          return Object(core_["jsx"])("div", {
            key: item.id,
            css: MultiSelect_ref5
          }, Object(core_["jsx"])("div", {
            css: _ref6
          }, Object(core_["jsx"])("span", null, item.name), Object(core_["jsx"])("button", extends_default()({}, getRemoveButtonProps({
            item: item
          }), {
            css: MultiSelect_ref7
          }), "\uD835\uDE05")));
        }) : "Select interests", Object(core_["jsx"])("input", extends_default()({
          css: _ref8
        }, getInputProps({
          ref: _this4.input,
          onKeyDown: function onKeyDown(event) {
            if (event.key === "Backspace" && !inputValue) {
              removeItem(selectedItems[selectedItems.length - 1]);
            }
          }
        })))), Object(core_["jsx"])(ControllerButton, getToggleButtonProps({
          // prevents the menu from immediately toggling
          // closed (due to our custom click handler above).
          onClick: function onClick(event) {
            event.stopPropagation();
          }
        }), Object(core_["jsx"])(ArrowIcon, {
          isOpen: isOpen
        }))), Object(core_["jsx"])(Menu, getMenuProps({
          isOpen: isOpen
        }), isOpen ? getItems(inputValue).map(function (item, index) {
          return Object(core_["jsx"])(Item, extends_default()({
            key: item.id
          }, getItemProps({
            item: item,
            index: index,
            isActive: highlightedIndex === index,
            isSelected: selectedItems.includes(item)
          })), item.name);
        }) : null));
      }));
    }
  }]);

  return App;
}(external_react_default.a.Component);

/* harmony default export */ var components_MultiSelect = (MultiSelect_App);
// CONCATENATED MODULE: /Users/odi/WORK/THINKPOLICY/thinkpolicy.id/src/pages/rute.js







function rute_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function rute_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { rute_ownKeys(source, true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { rute_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var signupSchema = external_yup_["object"]().shape({
  email: external_yup_["string"]().email("Email does not seem valid.").required("We need your email address."),
  name: external_yup_["string"]().min(2).required("We'd love to know your name."),
  birthyear: external_yup_["number"]().min(1900, "Not *that* old 🤔").max(2019, "🤔").required("We'd love to know your age"),
  organization: external_yup_["string"]().required("What organization are you in? If not applicable, type 'Personal'")
});
var initialValues = {
  email: "",
  name: "",
  birthyear: "",
  organization: ""
};

var encode = function encode(data) {
  return Object.keys(data).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }).join("&");
};

var rute_ErrorComponent = function ErrorComponent(props) {
  return Object(core_["jsx"])("span", extends_default()({}, props, {
    style: {
      color: "#e55"
    }
  }));
};

/* harmony default export */ var rute = __webpack_exports__["default"] = (function () {
  var _useSiteData = Object(external_react_static_["useSiteData"])(),
      headlineRute = _useSiteData.headlineRute,
      subheadlineRute = _useSiteData.subheadlineRute,
      cta = _useSiteData.cta;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      hasSubmitted = _useState2[0],
      setHasSubmitted = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(""),
      _useState4 = slicedToArray_default()(_useState3, 2),
      submittedName = _useState4[0],
      setSubmittedName = _useState4[1];

  var _useState5 = Object(external_react_["useState"])([]),
      _useState6 = slicedToArray_default()(_useState5, 2),
      selectedItems = _useState6[0],
      setSelectedItems = _useState6[1];

  var handleSubmit = function handleSubmit(values) {
    var body = rute_objectSpread({
      "form-name": "rute"
    }, values);

    console.log(body);
    var encoded = encode(body);
    external_isomorphic_unfetch_default()("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encoded
    }).then(function () {
      setSubmittedName(values.name);
      setHasSubmitted(true);
    })["catch"](function (error) {
      return alert(error);
    });
  };

  return Object(core_["jsx"])(external_react_default.a.Fragment, null, Object(core_["jsx"])("img", {
    src: "/logo.jpg",
    className: "logo",
    alt: "Think Policy logo"
  }), Object(core_["jsx"])("h1", null, headlineRute), Object(core_["jsx"])("p", null, subheadlineRute), hasSubmitted ? Object(core_["jsx"])("h2", null, "Thanks for submitting, ", submittedName, "! We will reach out to you.") : Object(core_["jsx"])(external_formik_["Formik"], {
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit:
    /*#__PURE__*/
    function () {
      var _ref = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(values, actions) {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // alert(JSON.stringify(values));
                console.log(selectedItems);

                if (!(selectedItems.length > 0)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return handleSubmit(rute_objectSpread({}, values, {
                  interests: selectedItems.map(function (item) {
                    return item.name;
                  }).join(",")
                }));

              case 4:
                _context.next = 7;
                break;

              case 6:
                alert("Please fill out your interests");

              case 7:
                actions.setSubmitting(false);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }(),
    render: function render(formikProps) {
      return Object(core_["jsx"])("form", {
        name: "rute" // netlify-honeypot="contact_me_by_fax_only"
        ,
        "data-netlify": "true",
        onReset: formikProps.handleReset,
        onSubmit: formikProps.handleSubmit
      }, Object(core_["jsx"])(external_formik_["Field"], {
        name: "email",
        render: function render(_ref2) {
          var field = _ref2.field,
              _ref2$form = _ref2.form,
              touched = _ref2$form.touched,
              errors = _ref2$form.errors;
          return Object(core_["jsx"])("label", null, Object(core_["jsx"])("h3", {
            style: {
              marginBottom: 0
            }
          }, "Email: "), Object(core_["jsx"])("input", extends_default()({
            className: touched[field.name] && errors[field.name] && "error",
            type: "text"
          }, field, {
            placeholder: "saya@perusahaan.com"
          })));
        }
      }), Object(core_["jsx"])(external_formik_["ErrorMessage"], {
        name: "email",
        component: rute_ErrorComponent
      }), Object(core_["jsx"])(external_formik_["Field"], {
        name: "name",
        render: function render(_ref3) {
          var field = _ref3.field,
              _ref3$form = _ref3.form,
              touched = _ref3$form.touched,
              errors = _ref3$form.errors;
          return Object(core_["jsx"])("label", null, Object(core_["jsx"])("h3", {
            style: {
              marginBottom: 0
            }
          }, "Nama: "), Object(core_["jsx"])("input", extends_default()({
            className: touched[field.name] && errors[field.name] && "error",
            type: "text"
          }, field, {
            placeholder: "Odi"
          })));
        }
      }), " ", Object(core_["jsx"])("br", null), Object(core_["jsx"])(external_formik_["ErrorMessage"], {
        name: "name",
        component: rute_ErrorComponent
      }), Object(core_["jsx"])(external_formik_["Field"], {
        name: "birthyear",
        render: function render(_ref4) {
          var field = _ref4.field,
              _ref4$form = _ref4.form,
              touched = _ref4$form.touched,
              errors = _ref4$form.errors;
          return Object(core_["jsx"])("label", null, Object(core_["jsx"])("h3", {
            style: {
              marginBottom: 0
            }
          }, "Tahun Kelahiran: "), Object(core_["jsx"])("input", extends_default()({
            className: touched[field.name] && errors[field.name] && "error",
            type: "text"
          }, field, {
            placeholder: "1990"
          })));
        }
      }), " ", Object(core_["jsx"])("br", null), Object(core_["jsx"])(external_formik_["ErrorMessage"], {
        name: "birthyear",
        component: rute_ErrorComponent
      }), Object(core_["jsx"])(external_formik_["Field"], {
        name: "organization",
        render: function render(_ref5) {
          var field = _ref5.field,
              _ref5$form = _ref5.form,
              touched = _ref5$form.touched,
              errors = _ref5$form.errors;
          return Object(core_["jsx"])("label", null, Object(core_["jsx"])("h3", {
            style: {
              marginBottom: 0
            }
          }, "Organisasi: "), Object(core_["jsx"])("input", extends_default()({
            className: touched[field.name] && errors[field.name] && "error",
            type: "text"
          }, field, {
            placeholder: "Badan Kebijakan Publik"
          })));
        }
      }), " ", Object(core_["jsx"])("br", null), Object(core_["jsx"])(external_formik_["ErrorMessage"], {
        name: "organization",
        component: rute_ErrorComponent
      }), " ", Object(core_["jsx"])("input", {
        className: "hidden",
        name: "interests",
        tabIndex: "-1",
        autoComplete: "off"
      }), Object(core_["jsx"])(components_MultiSelect, {
        selectedItems: selectedItems,
        setSelectedItems: setSelectedItems
      }), " ", Object(core_["jsx"])("br", null), Object(core_["jsx"])("button", {
        type: "submit",
        disabled: formikProps.isSubmitting && selectedItems.length === 0
      }, cta));
    }
  }));
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactStatic = __webpack_require__(6);

var _router = __webpack_require__(10);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@rehooks/window-size");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@emotion/css");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("match-sorter");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(47);
module.exports = __webpack_require__(53);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(30)["default"];

var _require = __webpack_require__(31),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(30)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(31),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(32),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(32),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(21)(module)))

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(23);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 16,
	"./": 16,
	"./index": 16,
	"./index.js": 16
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 49;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(33);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(34);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(54);

var _interopRequireDefault = __webpack_require__(55);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(2));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(17));

var React = _interopRequireWildcard(__webpack_require__(1));

var _useStaticInfo = __webpack_require__(56);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(57)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("/Users/odi/WORK/THINKPOLICY/thinkpolicy.id/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);



 // Your top level component

 // import ReactGA from "react-ga";
// Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Render your app

if (typeof document !== "undefined") {
  var target = document.getElementById("root");
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render;

  var render = function render(Comp) {
    renderMethod(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Suspense, {
      fallback: Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])("em", null, "Hot Loader Fallback")
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__["AppContainer"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Comp, null))), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept("./App", function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  } // ReactGA.initialize();

}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(58)(module)))

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("normalize.css");

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(61)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\",\n    Helvetica, Arial, \"Lucida Grande\", sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\np {\n  margin-top: 2rem;\n}\n\ninput {\n  margin-bottom: 1rem;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 2rem;\n  max-width: 36rem;\n  padding-bottom: 8rem;\n}\n\nimg.logo {\n  width: 4rem;\n  height: auto;\n}\n\ninput {\n  margin-top: 0.5rem;\n  padding: 0.5rem 1rem;\n  border: solid 1px #000;\n  width: calc(100% - 2rem);\n  box-shadow: 0 4px 4px 0 rgba(50, 50, 50, 0.25);\n}\n\ninput.error {\n  border: solid 1px #e55;\n  box-shadow: 0 4px 4px 0 rgba(240, 80, 80, 0.25);\n}\n\nbutton {\n  padding: 0.5rem 1rem;\n  background-color: black;\n  color: white;\n  border: solid 1px #000;\n  width: calc(100% - 2rem);\n  max-width: 8rem;\n  box-shadow: 0 4px 4px 0 rgba(50, 50, 50, 0.25);\n  transition: all ease-in-out 0.075s;\n}\n\nbutton:hover {\n  opacity: 0.85;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 4px 0 rgba(50, 50, 50, 0.25);\n}\n\n.multiselect input,\n.multiselect button {\n  box-shadow: none;\n}\n\n.hidden {\n  display: none;\n}\n", ""]);



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});