'use strict';

import _regeneratorRuntime from 'babel-runtime/regenerator';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getFieldsFromItemKeys(items) {
	// assuming all items of same object type so fields extracted from first item only
	if (items && items.length > 0) {
		return Object.keys(items[0]).map(function (f) {
			return { key: f, label: f };
		});
	}
}

function ATable(props) {
	var myProvider = function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(ctx) {
			var response;
			return _regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							this.isBusy = true;
							_context.prev = 1;
							_context.next = 4;
							return axios.get('/some/url?page=' + ctx.currentPage + '&size=' + ctx.perPage);

						case 4:
							response = _context.sent;

							this.isBusy = false;
							return _context.abrupt('return', response.items);

						case 9:
							_context.prev = 9;
							_context.t0 = _context['catch'](1);

							this.isBusy = false;
							return _context.abrupt('return', []);

						case 13:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[1, 9]]);
		}));

		return function myProvider(_x) {
			return _ref.apply(this, arguments);
		};
	}();

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

	return React.createElement(
		'div',
		null,
		React.createElement('span', null),
		React.createElement(
			'table',
			{ 'class': 'table table-striped  table-bordered' },
			React.createElement(
				'thead',
				null,
				React.createElement(
					'tr',
					null,
					fields.map(function (f) {
						return React.createElement(
							'th',
							{ scope: 'col' },
							f.label
						);
					})
				)
			),
			React.createElement(
				'tbody',
				null,
				!items && React.createElement(
					'h4',
					null,
					'No items '
				),
				items && items.map(function (i) {
					return React.createElement(
						'tr',
						null,
						fields.map(function (f) {
							return React.createElement(
								'td',
								{ scope: 'col' },
								i[f.key]
							);
						})
					);
				})
			)
		)
	);
}

var fields = [{ key: 'id', label: 'User Id' }, { key: 'name', label: 'Name ' }, { key: 'age', label: 'Age ' }, { key: 'value', label: 'Value ' }];
var items = [{ id: 1, name: 'mohamed ', age: 26 }, { id: 2, name: 'ahmed  ', age: 22 }, { id: 3, name: 'Ali  ', age: 25 }, { id: 4, name: 'hossam  ', age: 28 }, { id: 33, name: 'kamal   ', age: 18 }, { id: 54, name: 'kasasdmal   ', age: 18 }, { id: 54, name: 'kasasdmal   ', age: 18 }, { id: 54, name: 'kasasdmal   ', age: 18 }];

var domContainer = document.querySelector('#app');

ReactDOM.render(React.createElement(ATable, { items: items }), domContainer);