'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
	_inherits(Component, _React$Component);

	function Component(props) {
		_classCallCheck(this, Component);

		var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

		_this.count = 0;
		_this.runningTimerId = null;
		_this.hidingTimerId = null;

		_this.initElement = function (el) {
			_this.element = el;
		};

		_this.toHiddenState = function () {
			_this.element.setAttribute('data-state', 'hidden');
		};

		_this.state = {
			state: 'hidden'
		};
		return _this;
	}

	_createClass(Component, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    cls = _props.cls,
			    style = _props.style,
			    thumbStyle = _props.thumbStyle;

			var className = 'loader-60devs ' + cls;

			return _react2.default.createElement(
				'div',
				{ className: className, style: style, 'data-state': this.state.state, ref: this.initElement },
				_react2.default.createElement('div', { className: 'loader-60devs-progress', style: thumbStyle })
			);
		}
	}, {
		key: 'show',
		value: function show() {
			if (++this.count > 1) return;

			clearTimeout(this.hidingTimerId);

			var element = this.element;

			var progressEl = element.querySelector('.loader-60devs-progress');

			element.setAttribute('data-state', 'hidden'
			// the only working way to restart a transition on firefox
			);progressEl.outerHTML = progressEl.outerHTML;
			element.offsetHeight;
			element.setAttribute('data-state', '');
			element.offsetHeight;
			element.setAttribute('data-state', 'running');
		}
	}, {
		key: 'hide',
		value: function hide() {
			if (--this.count > 0) return;

			this.element.setAttribute('data-state', 'finishing');
			this.hidingTimerId = setTimeout(this.toHiddenState, 500);
		}
	}, {
		key: 'hideAll',
		value: function hideAll() {
			this.count = 1;
			this.hide();
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			Component.instance = this;
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearTimeout(this.hidingTimerId);
			delete Component.instance;
		}
	}, {
		key: 'isVisible',
		value: function isVisible() {
			return this.element.getAttribute('data-state') != 'hidden';
		}
	}]);

	return Component;
}(_react2.default.Component);

Component.defaultProps = {
	cls: '',
	style: {},
	thumbStyle: {}
};
exports.default = {
	Component: Component,
	show: function show() {
		Component.instance.show();
	},
	hide: function hide() {
		Component.instance.hide();
	},
	hideAll: function hideAll() {
		Component.instance.hideAll();
	},
	isVisible: function isVisible() {
		return Component.instance.isVisible();
	}
};