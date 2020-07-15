/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./libs.js":
/*!*****************!*\
  !*** ./libs.js ***!
  \*****************/
/*! exports provided: Text, Wrapper, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./utils/index.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Text = /*#__PURE__*/function () {\n  function Text(text) {\n    _classCallCheck(this, Text);\n\n    this.root = document.createTextNode(text);\n    this.text = text;\n  }\n\n  _createClass(Text, [{\n    key: \"mount\",\n    value: function mount(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return Text;\n}();\nvar Wrapper = /*#__PURE__*/function () {\n  function Wrapper(tagName) {\n    _classCallCheck(this, Wrapper);\n\n    this.root = document.createElement(tagName);\n    this.children = [];\n  } // attribute\n\n\n  _createClass(Wrapper, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      if (typeof value === \"string\") {\n        this.root.setAttribute(name, value);\n      } else if (name === 'style' && Array.isArray(value)) {\n        // style 的数组语法\n        var styles = [];\n        value.forEach(function (item) {\n          if (_typeof(item) !== \"object\") {\n            styles.push(String(item));\n          } else {\n            // 遍历对象\n            for (var k in item) {\n              styles.push(\"\".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKebabCase\"])(k), \":\").concat(item[k]));\n            }\n          }\n        });\n        this.root.setAttribute('style', styles.join(';'));\n      } else if (name === 'style' && _typeof(value) === \"object\") {\n        // style 的对象语法\n        var _styles = [];\n\n        for (var k in value) {\n          _styles.push(\"\".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getKebabCase\"])(k), \":\").concat(value[k]));\n        }\n\n        this.root.setAttribute(name, _styles.join(';'));\n      } else if (name === 'class' && Array.isArray(value)) {\n        // class 的数组语法\n        var cls = [];\n        value.forEach(function (item) {\n          if (_typeof(item) !== \"object\") {\n            cls.push(String(item));\n          } else {\n            // 遍历对象\n            for (var _k in item) {\n              if (item[_k]) {\n                cls.push(_k);\n              }\n            }\n          }\n        });\n        this.root.setAttribute('class', cls.join(' '));\n      } else if (name === 'class' && _typeof(value) === \"object\") {\n        // class 的对象语法\n        var _cls = []; // 遍历对象\n\n        for (var _k2 in value) {\n          if (value[_k2]) {\n            _cls.push(_k2);\n          }\n        }\n\n        this.root.setAttribute('class', _cls.join(' '));\n      }\n    }\n  }, {\n    key: \"appendChild\",\n    // children\n    value: function appendChild(child) {\n      this.children.push(child);\n    }\n  }, {\n    key: \"addEventListener\",\n    value: function addEventListener() {\n      var _this$root;\n\n      (_this$root = this.root).addEventListener.apply(_this$root, arguments);\n    }\n  }, {\n    key: \"mount\",\n    value: function mount(parent) {\n      parent.appendChild(this.root);\n\n      var _iterator = _createForOfIteratorHelper(this.children),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var child = _step.value;\n          // 不能直接使用下面这样\n          // this.root.appendChild(child)\n          // 因为 child 有可能是一个 Wrapper，并不是真正的 DOM Node\n          child.mount(this.root);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }\n  }, {\n    key: \"style\",\n    get: function get() {\n      return this.root.style;\n    }\n  }]);\n\n  return Wrapper;\n}();\nfunction createElement(Cls, attributes) {\n  var o;\n\n  if (typeof Cls === \"string\") {\n    o = new Wrapper(Cls);\n  } else {\n    o = new Cls();\n  } // 处理 attributes\n\n\n  for (var name in attributes) {\n    o.setAttribute(name, attributes[name]);\n  } // 处理 children\n\n\n  function visit(children) {\n    var _iterator2 = _createForOfIteratorHelper(children),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var child = _step2.value;\n\n        if (typeof child === \"string\") {\n          // child 为字符串时，表示文本节点\n          o.appendChild(new Text(child));\n        } else if (Array.isArray(child)) {\n          // child 为数组的处理\n          visit(child);\n        } else if (typeof child === \"function\") {\n          // child 是函数的处理\n          o.appendChild(child());\n        } else {\n          o.appendChild(child);\n        }\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  }\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  visit(children);\n  return o;\n}\n\n//# sourceURL=webpack:///./libs.js?");

/***/ }),

/***/ "./main.jsx":
/*!******************!*\
  !*** ./main.jsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs */ \"./libs.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Carousel = /*#__PURE__*/function () {\n  function Carousel() {\n    _classCallCheck(this, Carousel);\n\n    this.children = [];\n  }\n\n  _createClass(Carousel, [{\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      this.children.push(child);\n    }\n  }, {\n    key: \"mount\",\n    value: function mount(parent) {\n      this.render().mount(parent);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      // 禁用子元素的拖拽事件\n      this.children.forEach(function (child) {\n        child.addEventListener(\"dragstart\", function (e) {\n          return e.preventDefault();\n        });\n      });\n      var root = Object(_libs__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        \"class\": \"carousel\"\n      }, this.children);\n      var position = 0;\n      var mousedown = false;\n\n      var nextPic = function nextPic() {\n        if (mousedown) {\n          setTimeout(nextPic, 2000);\n          return;\n        }\n\n        var nextPosition = (position + 1) % _this.children.length;\n        var current = _this.children[position];\n        var next = _this.children[nextPosition]; // 把 next 移到右边位置，禁用动画\n\n        next.style.transition = \"none\";\n        next.style.transform = \"translateX(\".concat(100 - 100 * nextPosition, \"%)\");\n        setTimeout(function () {\n          // 开启动画\n          next.style.transition = \"\";\n          current.style.transform = \"translateX(\".concat(-100 - 100 * position, \"%)\");\n          next.style.transform = \"translateX(\".concat(-100 * nextPosition, \"%)\");\n          position = nextPosition;\n        }, 16);\n        setTimeout(nextPic, 2000);\n      };\n\n      setTimeout(nextPic, 4000);\n      root.addEventListener('mousedown', function (e) {\n        var startX = e.clientX;\n        var nextPosition = (position + 1) % _this.children.length;\n        var prevPosition = (position - 1 + _this.children.length) % _this.children.length;\n        var current = _this.children[position];\n        var next = _this.children[nextPosition];\n        var prev = _this.children[prevPosition]; // 拖拽之前，把 prev 和 next 元素分别放置在当前元素的左边和右边位置，不需要动画\n\n        prev.style.transition = \"none\";\n        current.style.transition = \"none\";\n        next.style.transition = \"none\";\n        prev.style.transform = \"translateX(\".concat(-100 - 100 * prevPosition, \"%)\");\n        current.style.transform = \"translateX(\".concat(-100 * position, \"%)\");\n        next.style.transform = \"translateX(\".concat(100 - 100 * nextPosition, \"%)\");\n\n        var move = function move(evt) {\n          // 获取最新的元素\n          current = _this.children[position];\n          next = _this.children[nextPosition];\n          prev = _this.children[prevPosition];\n          var offset = evt.clientX - startX;\n          prev.style.transform = \"translateX(calc(\".concat(-100 - 100 * prevPosition, \"% + \").concat(offset, \"px))\");\n          current.style.transform = \"translateX(calc(\".concat(-100 * position, \"% + \").concat(offset, \"px))\");\n          next.style.transform = \"translateX(calc(\".concat(100 - 100 * nextPosition, \"% + \").concat(offset, \"px))\");\n\n          if (offset / 500 >= 1) {\n            // 向右滑动超过1屏，更换 prev next current\n            nextPosition = position;\n            position = prevPosition;\n            prevPosition = (position - 1 + _this.children.length) % _this.children.length; // 把 prev 的动画关掉\n\n            _this.children[prevPosition].style.transition = \"none\"; // 更新 startX\n\n            startX += Math.floor(offset / 500) * 500;\n          } else if (offset / 500 <= -1) {\n            // 向左滑动超过1屏，更换 prev next current\n            prevPosition = position;\n            position = nextPosition;\n            nextPosition = (position + 1) % _this.children.length; // 把 prev 的动画关掉\n\n            _this.children[nextPosition].style.transition = \"none\"; // 更新 startX\n            // 这里需要注意 Math.floor(-1.5) == -2，所以对 offset 取反，最后 startX 减去偏移量\n\n            startX -= Math.floor(-offset / 500) * 500;\n          }\n        };\n\n        var up = function up(evt) {\n          var offset = 0;\n\n          if (evt.clientX - startX > 250) {\n            offset = 1;\n          } else if (evt.clientX - startX < -250) {\n            offset = -1;\n          } // 打开动画\n\n\n          prev.style.transition = \"\";\n          current.style.transition = \"\";\n          next.style.transition = \"\";\n          prev.style.transform = \"translateX(\".concat(offset * 500 - 500 - 500 * prevPosition, \"px)\");\n          current.style.transform = \"translateX(\".concat(offset * 500 - 500 * position, \"px)\");\n          next.style.transform = \"translateX(\".concat(offset * 500 + 500 - 500 * nextPosition, \"px)\");\n          position = (position - offset + _this.children.length) % _this.children.length;\n          document.removeEventListener('mousemove', move);\n          document.removeEventListener('mouseup', up);\n          mousedown = false;\n        };\n\n        document.addEventListener('mousemove', move);\n        document.addEventListener('mouseup', up);\n        mousedown = true;\n      });\n      return root;\n    }\n  }]);\n\n  return Carousel;\n}();\n\nvar component = Object(_libs__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Carousel, null, Object(_libs__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n  src: \"https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg\"\n}), Object(_libs__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n  src: \"https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg\"\n}), Object(_libs__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n  src: \"https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg\"\n}), Object(_libs__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n  src: \"https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg\"\n}));\nconsole.log(\"component: \", component);\ncomponent.mount(document.body);\n\n//# sourceURL=webpack:///./main.jsx?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: sleep, getKebabCase, getCamelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sleep\", function() { return sleep; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getKebabCase\", function() { return getKebabCase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCamelCase\", function() { return getCamelCase; });\nfunction sleep(duration) {\n  return new Promise(function (resolve, reject) {\n    setTimeout(resolve, duration);\n  });\n} // backgroundColor => background-color\n\nfunction getKebabCase(name) {\n  //return name.replace(/([A-Z])/g, \"-$1\").toLowerCase()\n  return name.replace(/([A-Z])/g, function (c) {\n    return '-' + c.toLowerCase();\n  });\n} // background-color => backgroundColor\n\nfunction getCamelCase(name) {\n  return name.replace(/-([a-z])/g, function (_, c) {\n    return c.toUpperCase();\n  });\n}\n\n//# sourceURL=webpack:///./utils/index.js?");

/***/ })

/******/ });