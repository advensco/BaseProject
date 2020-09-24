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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, " ", " "), "sa", ' ', /*#__PURE__*/React.createElement("table", {
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
  name: 'kamal   ',
  age: 18
},,];
var domContainer = document.querySelector('#app');
ReactDOM.render( /*#__PURE__*/React.createElement(ATable, {
  items: items
}), domContainer);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvcmlfdGFibGUuanMiXSwibmFtZXMiOlsiZ2V0RmllbGRzRnJvbUl0ZW1LZXlzIiwiaXRlbXMiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiZiIsImtleSIsImxhYmVsIiwiQVRhYmxlIiwicHJvcHMiLCJmaWVsZHMiLCJhcGlVUkwiLCJjdXJyZW50UGFnZSIsInBlclBhZ2UiLCJwYWdlQ291bnQiLCJmaWx0ZXIiLCJzb3J0QnkiLCJzb3J0RGVzYyIsImkiLCJteVByb3ZpZGVyIiwiY3R4IiwiaXNCdXN5IiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImlkIiwibmFtZSIsImFnZSIsImRvbUNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFFQSxTQUFTQSxxQkFBVCxDQUFnQ0MsS0FBaEMsRUFBdUM7QUFDckM7QUFDQSxNQUFJQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlLENBQTVCLEVBQStCO0FBQzdCLFdBQU9DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxLQUFLLENBQUMsQ0FBRCxDQUFqQixFQUFzQkksR0FBdEIsQ0FBMEIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3BDLGFBQU87QUFBRUMsV0FBRyxFQUFFRCxDQUFQO0FBQVVFLGFBQUssRUFBRUY7QUFBakIsT0FBUDtBQUNELEtBRk0sQ0FBUDtBQUdEO0FBQ0Y7O0FBRUQsU0FBU0csTUFBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsTUFBSUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQU4sSUFBZ0JYLHFCQUFxQixDQUFDVSxLQUFLLENBQUNULEtBQVAsQ0FBbEQ7QUFDQSxNQUFJQSxLQUFLLEdBQUdTLEtBQUssQ0FBQ1QsS0FBTixJQUFlLEtBQTNCO0FBQ0EsTUFBSVcsTUFBTSxHQUFHRixLQUFLLENBQUNFLE1BQW5CO0FBRUEsTUFBSUMsV0FBVyxHQUFHLENBQWxCO0FBQ0EsTUFBSUMsT0FBTyxHQUFHSixLQUFLLENBQUNLLFNBQU4sSUFBbUIsRUFBakM7QUFDQSxNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEtBQWY7QUFFQSxzQkFDRSw4Q0FDRSwyQ0FERixRQUVLLEdBRkwsZUFHRTtBQUFPLGFBQU07QUFBYixrQkFDRSxnREFDRSxnQ0FDRyxHQURILEVBRUdQLE1BQU0sQ0FBQ04sR0FBUCxDQUFXLFVBQUFDLENBQUM7QUFBQSx3QkFDWDtBQUFJLFdBQUssRUFBQztBQUFWLFlBQWtCQSxDQUFDLENBQUNFLEtBQXBCLE1BRFc7QUFBQSxHQUFaLENBRkgsQ0FERixDQURGLGVBU0UsbUNBQ0csR0FESCxFQUVHLENBQUNQLEtBQUQsaUJBQVUsNkNBRmIsRUFFa0MsR0FGbEMsRUFHR0EsS0FBSyxJQUNKQSxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFBYyxDQUFDO0FBQUEsd0JBQ1QsZ0NBQ0csR0FESCxFQUVHUixNQUFNLENBQUNOLEdBQVAsQ0FBVyxVQUFBQyxDQUFDO0FBQUEsMEJBQ1g7QUFBSSxhQUFLLEVBQUM7QUFBVixjQUFrQmEsQ0FBQyxDQUFDYixDQUFDLENBQUNDLEdBQUgsQ0FBbkIsTUFEVztBQUFBLEtBQVosQ0FGSCxFQUlNLEdBSk4sQ0FEUztBQUFBLEdBQVgsQ0FKSixFQVdRLEdBWFIsQ0FURixFQXFCVyxHQXJCWCxDQUhGLEVBMEJpQixHQTFCakIsQ0FERjs7QUFkc0IsV0E2Q1BhLFVBN0NPO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDBFQTZDdEIsaUJBQTJCQyxHQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxtQkFBS0MsTUFBTCxHQUFjLElBQWQ7QUFERjtBQUFBO0FBQUEscUJBRzJCQyxLQUFLLENBQUNDLEdBQU4sMEJBQ0hILEdBQUcsQ0FBQ1IsV0FERCxtQkFDcUJRLEdBQUcsQ0FBQ1AsT0FEekIsRUFIM0I7O0FBQUE7QUFHVVcsc0JBSFY7QUFNSSxtQkFBS0gsTUFBTCxHQUFjLEtBQWQ7QUFOSiwrQ0FPV0csUUFBUSxDQUFDeEIsS0FQcEI7O0FBQUE7QUFBQTtBQUFBO0FBU0ksbUJBQUtxQixNQUFMLEdBQWMsS0FBZDtBQVRKLCtDQVVXLEVBVlg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0E3Q3NCO0FBQUE7QUFBQTtBQTBEdkI7O0FBRUQsSUFBSVgsTUFBTSxHQUFHLENBQ1g7QUFBRUosS0FBRyxFQUFFLElBQVA7QUFBYUMsT0FBSyxFQUFFO0FBQXBCLENBRFcsRUFFWDtBQUFFRCxLQUFHLEVBQUUsTUFBUDtBQUFlQyxPQUFLLEVBQUU7QUFBdEIsQ0FGVyxFQUdYO0FBQUVELEtBQUcsRUFBRSxLQUFQO0FBQWNDLE9BQUssRUFBRTtBQUFyQixDQUhXLEVBSVg7QUFBRUQsS0FBRyxFQUFFLE9BQVA7QUFBZ0JDLE9BQUssRUFBRTtBQUF2QixDQUpXLENBQWI7QUFNQSxJQUFJUCxLQUFLLEdBQUcsQ0FDVjtBQUFFeUIsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFVBQWY7QUFBMkJDLEtBQUcsRUFBRTtBQUFoQyxDQURVLEVBRVY7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFNBQWY7QUFBMEJDLEtBQUcsRUFBRTtBQUEvQixDQUZVLEVBR1Y7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLE9BQWY7QUFBd0JDLEtBQUcsRUFBRTtBQUE3QixDQUhVLEVBSVY7QUFBRUYsSUFBRSxFQUFFLENBQU47QUFBU0MsTUFBSSxFQUFFLFVBQWY7QUFBMkJDLEtBQUcsRUFBRTtBQUFoQyxDQUpVLEVBS1Y7QUFBRUYsSUFBRSxFQUFFLEVBQU47QUFBVUMsTUFBSSxFQUFFLFVBQWhCO0FBQTRCQyxLQUFHLEVBQUU7QUFBakMsQ0FMVSxFQU1WO0FBQUVGLElBQUUsRUFBRSxFQUFOO0FBQVVDLE1BQUksRUFBRSxVQUFoQjtBQUE0QkMsS0FBRyxFQUFFO0FBQWpDLENBTlUsRUFPVjtBQUFFRixJQUFFLEVBQUUsRUFBTjtBQUFVQyxNQUFJLEVBQUUsVUFBaEI7QUFBNEJDLEtBQUcsRUFBRTtBQUFqQyxDQVBVLEdBQVo7QUFXQSxJQUFJQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFuQjtBQUVBQyxRQUFRLENBQUNDLE1BQVQsZUFBZ0Isb0JBQUMsTUFBRDtBQUFRLE9BQUssRUFBRWhDO0FBQWYsRUFBaEIsRUFBMEM0QixZQUExQyxFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2RvcmlfdGFibGUuanNcIik7XG4iLCIndXNlIHN0cmljdCdcclxuXHJcbmZ1bmN0aW9uIGdldEZpZWxkc0Zyb21JdGVtS2V5cyAoaXRlbXMpIHtcclxuICAvLyBhc3N1bWluZyBhbGwgaXRlbXMgb2Ygc2FtZSBvYmplY3QgdHlwZSBzbyBmaWVsZHMgZXh0cmFjdGVkIGZyb20gZmlyc3QgaXRlbSBvbmx5XHJcbiAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhpdGVtc1swXSkubWFwKGYgPT4ge1xyXG4gICAgICByZXR1cm4geyBrZXk6IGYsIGxhYmVsOiBmIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBBVGFibGUgKHByb3BzKSB7XHJcbiAgLy8gaWYgKCFwcm9wcy5pdGVtcyB8fCBwcm9wcy5pdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gIC8vIFx0cmV0dXJuIDxoND5ObyBJdGVtczwvaDQ+O1xyXG4gIC8vIH1cclxuICBsZXQgZmllbGRzID0gcHJvcHMuZmllbGRzIHx8IGdldEZpZWxkc0Zyb21JdGVtS2V5cyhwcm9wcy5pdGVtcylcclxuICBsZXQgaXRlbXMgPSBwcm9wcy5pdGVtcyB8fCBmYWxzZVxyXG4gIGxldCBhcGlVUkwgPSBwcm9wcy5hcGlVUkxcclxuXHJcbiAgbGV0IGN1cnJlbnRQYWdlID0gMVxyXG4gIGxldCBwZXJQYWdlID0gcHJvcHMucGFnZUNvdW50IHx8IDEwXHJcbiAgbGV0IGZpbHRlciA9ICcnXHJcbiAgbGV0IHNvcnRCeSA9ICcnXHJcbiAgbGV0IHNvcnREZXNjID0gZmFsc2VcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxzcGFuPiB7fSA8L3NwYW4+XHJcbiAgICAgIHNheycgJ31cclxuICAgICAgPHRhYmxlIGNsYXNzPSd0YWJsZSB0YWJsZS1zdHJpcGVkICB0YWJsZS1ib3JkZXJlZCc+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICB7ZmllbGRzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICA8dGggc2NvcGU9J2NvbCc+IHtmLmxhYmVsfSA8L3RoPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgeyFpdGVtcyAmJiA8aDQ+IE5vIGl0ZW1zIDwvaDQ+fXsnICd9XHJcbiAgICAgICAgICB7aXRlbXMgJiZcclxuICAgICAgICAgICAgaXRlbXMubWFwKGkgPT4gKFxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICB7ZmllbGRzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPSdjb2wnPiB7aVtmLmtleV19IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICApKX17JyAnfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICkpfXsnICd9XHJcbiAgICAgICAgPC90Ym9keT57JyAnfVxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICB7LyogcGFnaW5nICovfXsnICd9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG15UHJvdmlkZXIgKGN0eCkge1xyXG4gICAgdGhpcy5pc0J1c3kgPSB0cnVlXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICBgL3NvbWUvdXJsP3BhZ2U9JHtjdHguY3VycmVudFBhZ2V9JnNpemU9JHtjdHgucGVyUGFnZX1gXHJcbiAgICAgIClcclxuICAgICAgdGhpcy5pc0J1c3kgPSBmYWxzZVxyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuaXRlbXNcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuaXNCdXN5ID0gZmFsc2VcclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgZmllbGRzID0gW1xyXG4gIHsga2V5OiAnaWQnLCBsYWJlbDogJ1VzZXIgSWQnIH0sXHJcbiAgeyBrZXk6ICduYW1lJywgbGFiZWw6ICdOYW1lICcgfSxcclxuICB7IGtleTogJ2FnZScsIGxhYmVsOiAnQWdlICcgfSxcclxuICB7IGtleTogJ3ZhbHVlJywgbGFiZWw6ICdWYWx1ZSAnIH1cclxuXVxyXG5sZXQgaXRlbXMgPSBbXHJcbiAgeyBpZDogMSwgbmFtZTogJ21vaGFtZWQgJywgYWdlOiAyNiB9LFxyXG4gIHsgaWQ6IDIsIG5hbWU6ICdhaG1lZCAgJywgYWdlOiAyMiB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdBbGkgICcsIGFnZTogMjUgfSxcclxuICB7IGlkOiA0LCBuYW1lOiAnaG9zc2FtICAnLCBhZ2U6IDI4IH0sXHJcbiAgeyBpZDogMzMsIG5hbWU6ICdrYW1hbCAgICcsIGFnZTogMTggfSxcclxuICB7IGlkOiAzMywgbmFtZTogJ2thbWFsICAgJywgYWdlOiAxOCB9LFxyXG4gIHsgaWQ6IDMzLCBuYW1lOiAna2FtYWwgICAnLCBhZ2U6IDE4IH0sXHJcbiAgLFxyXG5dXHJcblxyXG5sZXQgZG9tQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcCcpXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoPEFUYWJsZSBpdGVtcz17aXRlbXN9IC8+LCBkb21Db250YWluZXIpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=