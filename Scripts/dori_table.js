var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 'use strict';

var LikeButton = function (_React$Component) {
	_inherits(LikeButton, _React$Component);

	function LikeButton(props) {
		_classCallCheck(this, LikeButton);

		var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

		_this.state = { liked: false };
		return _this;
	}

	_createClass(LikeButton, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (this.state.liked) {
				return 'You liked this.';
			}

			return React.createElement(
				'button',
				{ onClick: function onClick() {
						return _this2.setState({ liked: true });
					} },
				' Like '
			);
		}
	}]);

	return LikeButton;
}(React.Component);

var DoriTable = function (_React$Component2) {
	_inherits(DoriTable, _React$Component2);

	function DoriTable(props) {
		_classCallCheck(this, DoriTable);

		var _this3 = _possibleConstructorReturn(this, (DoriTable.__proto__ || Object.getPrototypeOf(DoriTable)).call(this, props));

		_this3.state = { title: props.title || 'Dori Table Created ' };
		return _this3;
	}

	_createClass(DoriTable, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'h4',
				null,
				'T: ',
				this.state.title,
				' - ',
				this.props.title,
				' '
			);
		}
	}]);

	return DoriTable;
}(React.Component);

function ATable(props) {
	return React.createElement(
		'h3',
		null,
		' A Table: ',
		props.title,
		' Updateds '
	);
}

var domContainer1 = document.querySelector('#app');
ReactDOM.render(React.createElement(ATable, null), domContainer1);

var domContainer2 = document.querySelector('#app-1');
ReactDOM.render(React.createElement(DoriTable, { title: 'Custom' }), domContainer2);