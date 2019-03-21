module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		3: 0
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".chunk." + {"0":"c4d33","1":"af26d","2":"e04b8"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/tgm-bot-web/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "52CA":
/***/ (function(module, exports) {

module.exports = ["hola","buenosdias","buenastardes"]

/***/ }),

/***/ "6Fxg":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./buenastardes.json": [
		"FiC2",
		2
	],
	"./buenosdias.json": [
		"Y9EW",
		1
	],
	"./hola.json": [
		"9jCk",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "6Fxg";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./styles/tailwind.css
var tailwind = __webpack_require__("sb+0");
var tailwind_default = /*#__PURE__*/__webpack_require__.n(tailwind);

// CONCATENATED MODULE: ./img/telegram-plane-brands.svg




/* harmony default export */ var telegram_plane_brands = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_min["h"])('svg', Object.assign({"aria-hidden":"true","focusable":"false","data-prefix":"fab","data-icon":"telegram-plane","class":[styles && styles["svg-inline--fa"] || "svg-inline--fa",styles && styles["fa-telegram-plane"] || "fa-telegram-plane",styles && styles["fa-w-14"] || "fa-w-14"].join(' '),"role":"img","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512"}, rest), [Object(preact_min["h"])('path', {"fill":"currentColor","d":"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"}, [])]);
});;

        
// CONCATENATED MODULE: ./img/ellipsis-v-solid.svg




/* harmony default export */ var ellipsis_v_solid = (function (props) {
    var styles = props.styles;
    var rest = Object.assign({}, props);
    delete rest.styles;

    return Object(preact_min["h"])('svg', Object.assign({"aria-hidden":"true","focusable":"false","data-prefix":"fas","data-icon":"ellipsis-v","class":[styles && styles["svg-inline--fa"] || "svg-inline--fa",styles && styles["fa-ellipsis-v"] || "fa-ellipsis-v",styles && styles["fa-w-6"] || "fa-w-6"].join(' '),"role":"img","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 512"}, rest), [Object(preact_min["h"])('path', {"fill":"currentColor","d":"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"}, [])]);
});;

        
// EXTERNAL MODULE: ./json/comandos.json
var comandos = __webpack_require__("52CA");
var comandos_default = /*#__PURE__*/__webpack_require__.n(comandos);

// CONCATENATED MODULE: ./helpers.js


function commands() {
  return Promise.all(comandos_default.a.map(function (name) {
    return new Promise(function ($return, $error) {
      var module;
      var $Try_1_Post = function () {
        try {
          return $return();
        } catch ($boundEx) {
          return $error($boundEx);
        }
      };var $Try_1_Catch = function (error) {
        try {
          console.error("import " + name + ".json failed");
          return $Try_1_Post();
        } catch ($boundEx) {
          return $error($boundEx);
        }
      };
      try {
        return Promise.resolve(__webpack_require__("6Fxg")("./" + name + ".json")).then(function ($await_2) {
          try {
            module = $await_2;
            return $return({ name: name, messages: module });
          } catch ($boundEx) {
            return $Try_1_Catch($boundEx);
          }
        }, $Try_1_Catch);
      } catch (error) {
        $Try_1_Catch(error)
      }
    });
  }));
}
// EXTERNAL MODULE: ./json/user/1.json
var _ = __webpack_require__("KwU7");
var __default = /*#__PURE__*/__webpack_require__.n(_);

// EXTERNAL MODULE: ./json/user/2.json
var user_2 = __webpack_require__("OeaQ");
var user_2_default = /*#__PURE__*/__webpack_require__.n(user_2);

// CONCATENATED MODULE: ./components/App.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable react/prefer-stateless-function */







var welcome_message = {
  text: "Selecciona el comando que quieras saber la explicación.",
  user: 1
};

var delay = function delay(t, data) {
  return new Promise(function (resolve) {
    setTimeout(resolve.bind(null, data), t);
  });
};

var _ref4 = Object(preact_min["h"])(
  "span",
  { "class": "mr-6" },
  "\u2190"
);

var _ref5 = Object(preact_min["h"])(
  "span",
  null,
  "bot"
);

var _ref6 = Object(preact_min["h"])(ellipsis_v_solid, { "class": "h-6" });

var App_App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.senUserdMessage = function (text) {
      if (text.length > 0) {
        _this.addMessages({ user: 2, text: text });
      }
    };

    _this.handleKeyPress = function (e) {
      if (e.key === "Enter") {
        _this.senUserdMessage(_this.state.text);
      }
    };

    _this.showAllComands = function () {
      var commands = _this.state.commands;

      _this.setState({
        suggestions: commands
      });
    };

    _this.updateText = function (e) {
      var value = e.target.value;

      var search = value.toLowerCase();
      _this.setState({ text: value });
      if (value.length > 2) {
        var suggestions = _this.state.commands.filter(function (command) {
          return command.name.toLowerCase().includes(search);
        });
        _this.setState({
          suggestions: suggestions.length > 0 ? suggestions : [{ name: "no se encontraron comandos" }]
        });
      } else {
        _this.setState({ suggestions: [] });
      }
    };

    commands().then(function (commands) {
      return _this.setState({ commands: commands });
    });
    _this.setState({
      messages: [welcome_message],
      suggestions: []
    });
    _this.commandLauch = _this.commandLauch.bind(_this);
    return _this;
  }

  App.prototype.commandLauch = function commandLauch(command) {
    return new Promise(function ($return, $error) {
      return Promise.resolve(delay(150)).then(function ($await_3) {
        try {
          this.setState({
            messages: [welcome_message],
            suggestions: []
          });
          this.addMessages.apply(this, command.messages);
          return $return();
        } catch ($boundEx) {
          return $error($boundEx);
        }
      }.bind(this), $error);
    }.bind(this));
  };

  App.prototype.addMessages = function addMessages() {
    var $args = arguments;return new Promise(function ($return, $error) {
      var _len, new_messages, _key, messages, _iterator, _isArray, _i, _ref, message;

      this.setState({ text: "" });

      for (_len = $args.length, new_messages = Array(_len), _key = 0; _key < _len; _key++) {
        new_messages[_key] = $args[_key];
      }

      messages = new_messages.map(function (message) {
        var username = user_2_default.a.username;

        var text = message.text.replace("{{username}}", username);
        return _extends({}, message, { text: text });
      });

      _iterator = messages, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();
      var $Loop_1_trampoline;

      function $Loop_1() {
        if (true) {
          if (_isArray) {
            if (_i >= _iterator.length) return [1];
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) return [1];
            _ref = _i.value;
          }

          message = _ref;
          return Promise.resolve(delay(150)).then(function ($await_4) {
            try {
              this.setState({
                messages: this.state.messages.concat(message)
              });
              return $Loop_1;
            } catch ($boundEx) {
              return $error($boundEx);
            }
          }.bind(this), $error);
        } else return [1];
      }

      return ($Loop_1_trampoline = function (q) {
        while (q) {
          if (q.then) return void q.then($Loop_1_trampoline, $error);try {
            if (q.pop) {
              if (q.length) return q.pop() ? $Loop_1_exit.call(this) : q;else q = $Loop_1;
            } else q = q.call(this);
          } catch (_exception) {
            return $error(_exception);
          }
        }
      }.bind(this))($Loop_1);

      function $Loop_1_exit() {

        this.messagesElement.scrollTop = this.messagesElement.scrollHeight;
        return $return();
      }
    }.bind(this));
  };

  App.prototype.render = function render(_ref2, _ref3) {
    var _this2 = this;

    var text = _ref3.text,
        messages = _ref3.messages,
        suggestions = _ref3.suggestions;

    _objectDestructuringEmpty(_ref2);

    return Object(preact_min["h"])(
      "div",
      { "class": "font-sans relative flex flex-col h-screen shadow leading-normal w-full text-grey-darkest" },
      Object(preact_min["h"])(
        "div",
        { "class": "bg-blue w-inherit fixed pin-t z-10 text-white p-4 flex items-center justify-between cc-box" },
        Object(preact_min["h"])(
          "div",
          { "class": "text-white flex items-center" },
          _ref4,
          Object(preact_min["h"])("img", { src: __default.a.img, "class": "rounded-full w-10 h-10 mr-4" }),
          Object(preact_min["h"])(
            "div",
            { "class": "flex flex-col justify-between" },
            Object(preact_min["h"])(
              "span",
              null,
              __default.a.username
            ),
            _ref5
          )
        ),
        _ref6
      ),
      Object(preact_min["h"])(App_MessageList, { messages: messages, messagesRef: function messagesRef(el) {
          return _this2.messagesElement = el;
        } }),
      Object(preact_min["h"])(
        "button",
        {
          "class": "p-4 z-20 rounded-full border-blue border focus:outline-none text-xs fixed pin-b pin-r mb-16 mr-4 bg-white hover:bg-blue text-blue hover:text-white cursor",
          onClick: suggestions.length > 0 ? function () {
            return _this2.setState({ suggestions: [] });
          } : this.showAllComands
        },
        suggestions.length > 0 ? "Ocultar" : "Comandos"
      ),
      Object(preact_min["h"])(
        "div",
        { "class": "bg-white fixed w-inherit pin-b cc-box" },
        Object(preact_min["h"])(
          "div",
          null,
          Object(preact_min["h"])(App_SuggestionList, {
            clickHandler: this.commandLauch,
            suggestions: suggestions
          })
        ),
        Object(preact_min["h"])(
          "div",
          { "class": "relative" },
          Object(preact_min["h"])("input", {
            value: text,
            onInput: this.updateText,
            onKeyPress: function onKeyPress(e) {
              return _this2.handleKeyPress(e);
            },
            placeholder: "Escribe el comando",
            type: "text",
            "class": "p-4 cc-box w-full h-full outline-none"
          }),
          Object(preact_min["h"])(telegram_plane_brands, {
            onClick: function onClick() {
              return _this2.senUserdMessage(text);
            },
            "class": "chat__send " + (text ? "text-blue cursor-pointer" : "")
          })
        )
      )
    );
  };

  return App;
}(preact_min["Component"]);




var App_MessageList = function MessageList(_ref7) {
  var messages = _ref7.messages,
      messagesRef = _ref7.messagesRef;
  return Object(preact_min["h"])(
    "ul",
    { "class": "chat-body cc-box", ref: messagesRef },
    messages.map(function (message) {
      return Object(preact_min["h"])(
        "li",
        { "class": "chat__message " + (message.user != 1 ? "user" : "") },
        Object(preact_min["h"])(
          "span",
          null,
          message.text
        )
      );
    })
  );
};

var App_SuggestionList = function SuggestionList(_ref8) {
  var suggestions = _ref8.suggestions,
      clickHandler = _ref8.clickHandler;
  return Object(preact_min["h"])(
    "ul",
    { "class": "list-reset px-2 flex z-10 flex-col border-grey-light border-b" },
    suggestions.map(function (suggestion) {
      return Object(preact_min["h"])(
        "li",
        {
          "class": "px-2 py-2 text-blue-light hover:text-blue cursor-pointer border-grey-light border-b",
          onClick: function onClick(e) {
            return clickHandler(suggestion);
          }
        },
        suggestion.name
      );
    })
  );
};
// CONCATENATED MODULE: ./index.js




var index__ref = Object(preact_min["h"])(App_App, null);

/* harmony default export */ var index = __webpack_exports__["default"] = (function () {
  return index__ref;
});

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    null != e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "KwU7":
/***/ (function(module, exports) {

module.exports = {"username":"Pilaricabot","img":"img/pilarica.jpg"}

/***/ }),

/***/ "OeaQ":
/***/ (function(module, exports) {

module.exports = {"username":"Karu","img":"img/User.jpg"}

/***/ }),

/***/ "sb+0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map