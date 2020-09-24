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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dori_table.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dori_table.js":
/*!***************************!*\
  !*** ./src/dori_table.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _test_component = __webpack_require__(/*! ./test_component */ "./src/test_component.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getFieldsFromItemKeys(items) {
  // assuming all items of same object type so fields extracted from first item only
  if (items && items.length > 0) {
    return Object.keys(items[0]).map(function (f) {
      return {
        key: f,
        label: f
      };
    });
  }
}

function ATable(props) {
  // if (!props.items || props.items.length == 0) {
  // 	return <h4>No Items</h4>;
  // }
  var fields = props.fields || getFieldsFromItemKeys(props.items);
  var items = props.items || false;
  var apiURL = props.apiURL;
  var currentPage = 1;
  var perPage = props.pageCount || 10;
  var filter = '';
  var sortBy = '';
  var sortDesc = false;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, " ", " Hello Table "), /*#__PURE__*/React.createElement(_test_component.TestComponent, null), /*#__PURE__*/React.createElement("table", {
    "class": "table table-striped  table-bordered"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ' ', fields.map(function (f) {
    return /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, " ", f.label, " ");
  }))), /*#__PURE__*/React.createElement("tbody", null, ' ', !items && /*#__PURE__*/React.createElement("h4", null, " No items "), ' ', items && items.map(function (i) {
    return /*#__PURE__*/React.createElement("tr", null, ' ', fields.map(function (f) {
      return /*#__PURE__*/React.createElement("td", {
        scope: "col"
      }, " ", i[f.key], " ");
    }), ' ');
  }), ' '), ' '), ' ');

  function myProvider(_x) {
    return _myProvider.apply(this, arguments);
  }

  function _myProvider() {
    _myProvider = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.isBusy = true;
              _context.prev = 1;
              _context.next = 4;
              return axios.get("/some/url?page=".concat(ctx.currentPage, "&size=").concat(ctx.perPage));

            case 4:
              response = _context.sent;
              this.isBusy = false;
              return _context.abrupt("return", response.items);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              this.isBusy = false;
              return _context.abrupt("return", []);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 9]]);
    }));
    return _myProvider.apply(this, arguments);
  }
}

var fields = [{
  key: 'id',
  label: 'User Id'
}, {
  key: 'name',
  label: 'Name '
}, {
  key: 'age',
  label: 'Age '
}, {
  key: 'value',
  label: 'Value '
}];
var items = [{
  id: 1,
  name: 'mohamed ',
  age: 26
}, {
  id: 2,
  name: 'ahmed  ',
  age: 22
}, {
  id: 3,
  name: 'Ali  ',
  age: 25
}, {
  id: 4,
  name: 'hossam  ',
  age: 28
}, {
  id: 33,
  name: 'kamal   ',
  age: 18
}, {
  id: 33,
  name: 'kamal   ',
  age: 18
}, {
  id: 33,
  name: 'kamal Ahmed   ',
  age: 18
},,];
var domContainer = document.querySelector('#app');
ReactDOM.render( /*#__PURE__*/React.createElement(ATable, {
  items: items
}), domContainer);

/***/ }),

/***/ "./src/test_component.js":
/*!*******************************!*\
  !*** ./src/test_component.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestComponent = TestComponent;

function TestComponent() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Test Component 123"));
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvcmlfdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlc3RfY29tcG9uZW50LmpzIl0sIm5hbWVzIjpbImdldEZpZWxkc0Zyb21JdGVtS2V5cyIsIml0ZW1zIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImYiLCJrZXkiLCJsYWJlbCIsIkFUYWJsZSIsInByb3BzIiwiZmllbGRzIiwiYXBpVVJMIiwiY3VycmVudFBhZ2UiLCJwZXJQYWdlIiwicGFnZUNvdW50IiwiZmlsdGVyIiwic29ydEJ5Iiwic29ydERlc2MiLCJpIiwibXlQcm92aWRlciIsImN0eCIsImlzQnVzeSIsImF4aW9zIiwiZ2V0IiwicmVzcG9uc2UiLCJpZCIsIm5hbWUiLCJhZ2UiLCJkb21Db250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJSZWFjdERPTSIsInJlbmRlciIsIlRlc3RDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hE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LCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZG9yaV90YWJsZS5qc1wiKTtcbiIsIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IHsgVGVzdENvbXBvbmVudCB9IGZyb20gJy4vdGVzdF9jb21wb25lbnQnXHJcbmZ1bmN0aW9uIGdldEZpZWxkc0Zyb21JdGVtS2V5cyAoaXRlbXMpIHtcclxuICAvLyBhc3N1bWluZyBhbGwgaXRlbXMgb2Ygc2FtZSBvYmplY3QgdHlwZSBzbyBmaWVsZHMgZXh0cmFjdGVkIGZyb20gZmlyc3QgaXRlbSBvbmx5XHJcbiAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhpdGVtc1swXSkubWFwKGYgPT4ge1xyXG4gICAgICByZXR1cm4geyBrZXk6IGYsIGxhYmVsOiBmIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBVGFibGUgKHByb3BzKSB7XHJcbiAgLy8gaWYgKCFwcm9wcy5pdGVtcyB8fCBwcm9wcy5pdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gIC8vIFx0cmV0dXJuIDxoND5ObyBJdGVtczwvaDQ+O1xyXG4gIC8vIH1cclxuICBsZXQgZmllbGRzID0gcHJvcHMuZmllbGRzIHx8IGdldEZpZWxkc0Zyb21JdGVtS2V5cyhwcm9wcy5pdGVtcylcclxuICBsZXQgaXRlbXMgPSBwcm9wcy5pdGVtcyB8fCBmYWxzZVxyXG4gIGxldCBhcGlVUkwgPSBwcm9wcy5hcGlVUkxcclxuXHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gMVxyXG4gIGxldCBwZXJQYWdlID0gcHJvcHMucGFnZUNvdW50IHx8IDEwXHJcbiAgbGV0IGZpbHRlciA9ICcnXHJcbiAgbGV0IHNvcnRCeSA9ICcnXHJcbiAgbGV0IHNvcnREZXNjID0gZmFsc2VcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzcGFuPiB7fSBIZWxsbyBUYWJsZSA8L3NwYW4+XHJcbiAgICAgIDxUZXN0Q29tcG9uZW50PjwvVGVzdENvbXBvbmVudD5cclxuICAgICAgPHRhYmxlIGNsYXNzPSd0YWJsZSB0YWJsZS1zdHJpcGVkICB0YWJsZS1ib3JkZXJlZCc+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICB7ZmllbGRzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+IHtmLmxhYmVsfSA8L3RoPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgeyFpdGVtcyAmJiA8aDQ+IE5vIGl0ZW1zIDwvaDQ+fXsnICd9XHJcbiAgICAgICAgICB7aXRlbXMgJiZcclxuICAgICAgICAgICAgaXRlbXMubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICB7ZmllbGRzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPSdjb2wnPiB7aVtmLmtleV19IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICApKX17JyAnfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfXsnICd9XHJcbiAgICAgICAgPC90Ym9keT57JyAnfVxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICB7LyogcGFnaW5nICovfXsnICd9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG15UHJvdmlkZXIgKGN0eCkge1xyXG4gICAgdGhpcy5pc0J1c3kgPSB0cnVlXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgL3NvbWUvdXJsP3BhZ2U9JHtjdHguY3VycmVudFBhZ2V9JnNpemU9JHtjdHgucGVyUGFnZX1gXHJcbiAgICAgIClcclxuICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuaXRlbXNcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2VcclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZmllbGRzID0gW1xyXG4gIHsga2V5OiAnaWQnLCBsYWJlbDogJ1VzZXIgSWQnIH0sXHJcbiAgeyBrZXk6ICduYW1lJywgbGFiZWw6ICdOYW1lICcgfSxcclxuICB7IGtleTogJ2FnZScsIGxhYmVsOiAnQWdlICcgfSxcclxuICB7IGtleTogJ3ZhbHVlJywgbGFiZWw6ICdWYWx1ZSAnIH1cclxuXVxyXG5sZXQgaXRlbXMgPSBbXHJcbiAgeyBpZDogMSwgbmFtZTogJ21vaGFtZWQgJywgYWdlOiAyNiB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6ICdhaG1lZCAgJywgYWdlOiAyMiB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdBbGkgICcsIGFnZTogMjUgfSxcclxuICB7IGlkOiA0LCBuYW1lOiAnaG9zc2FtICAnLCBhZ2U6IDI4IH0sXHJcbiAgeyBpZDogMzMsIG5hbWU6ICdrYW1hbCAgICcsIGFnZTogMTggfSxcclxuICB7IGlkOiAzMywgbmFtZTogJ2thbWFsICAgJywgYWdlOiAxOCB9LFxyXG4gIHsgaWQ6IDMzLCBuYW1lOiAna2FtYWwgQWhtZWQgICAnLCBhZ2U6IDE4IH0sXHJcbiAgLFxyXG5dXHJcblxyXG5sZXQgZG9tQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcblJlYWN0RE9NLnJlbmRlcig8QVRhYmxlIGl0ZW1zPXtpdGVtc30gLz4sIGRvbUNvbnRhaW5lcilcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIFRlc3RDb21wb25lbnQgKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDM+VGVzdCBDb21wb25lbnQgMTIzPC9oMz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9