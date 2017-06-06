'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Component = _react2['default'].createClass({
    displayName: 'Component',

    count: 0,
    runningTimerId: null,
    hidingTimerId: null,

    getInitialState: function getInitialState() {
        return {
            state: 'hidden'
        };
    },

    getDefaultProps: function getDefaultProps() {
        return {
            cls: '',
            style: {},
            thumbStyle: {}
        };
    },

    render: function render() {
        var _this = this;

        var _props = this.props;
        var cls = _props.cls;
        var style = _props.style;
        var thumbStyle = _props.thumbStyle;

        var className = 'loader-60devs ' + cls;

        return _react2['default'].createElement(
            'div',
            { className: className, style: style, 'data-state': this.state.state, ref: function (element) {
                    return _this.element = element;
                } },
            _react2['default'].createElement('div', { className: 'loader-60devs-progress', style: thumbStyle })
        );
    },

    show: function show() {
        if (++this.count > 1) return;

        clearTimeout(this.hidingTimerId);

        var element = this.element;

        var progressEl = element.querySelector('.loader-60devs-progress');

        element.setAttribute('data-state', 'hidden');
        // the only working way to restart a transition on firefox
        progressEl.outerHTML = progressEl.outerHTML;
        element.offsetHeight;
        element.setAttribute('data-state', '');
        element.offsetHeight;
        element.setAttribute('data-state', 'running');
    },

    hide: function hide() {
        if (--this.count > 0) return;

        this.element.setAttribute('data-state', 'finishing');
        this.hidingTimerId = setTimeout(this.toHiddenState, 500);
    },

    hideAll: function hideAll() {
        this.count = 1;
        this.hide();
    },

    toHiddenState: function toHiddenState() {
        this.element.setAttribute('data-state', 'hidden');
    },

    componentWillMount: function componentWillMount() {
        Component.instance = this;
    },

    componentWillUnmount: function componentWillUnmount() {
        delete Component.instance;
    },

    isVisible: function isVisible() {
        return this.element.getAttribute('data-state') != 'hidden';
    }
});

exports['default'] = {
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
module.exports = exports['default'];