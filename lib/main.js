"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Component = _react2["default"].createClass({
    displayName: "Component",

    getInitialState: function getInitialState() {
        return {
            state: "hidden",
            count: 0
        };
    },

    getDefaultProps: function getDefaultProps() {
        return {
            cls: ""
        };
    },

    render: function render() {
        var cls = "loader-60devs " + this.props.cls;

        return _react2["default"].createElement(
            "div",
            { className: cls, "data-state": this.state.state, ref: "element" },
            _react2["default"].createElement("div", { className: "loader-60devs-progress" })
        );
    },

    show: function show() {
        this.setState({
            count: this.state.count + 1
        });

        if (this.state.count > 1) return;

        clearTimeout(this.state.hidingTimerId);

        this.refs.element.dataset.state = "hidden";
        this.refs.element.offsetTop;

        this.setState({
            state: "",
            runningTimerId: setTimeout(this.toRunningState, 10)
        });
    },

    hide: function hide() {
        this.setState({
            count: this.state.count - 1
        });

        if (this.state.state == "hidden") return;

        if (this.state.count > 0) return;

        clearTimeout(this.state.runningTimerId);
        this.setState({
            state: "finishing",
            hidingTimerId: setTimeout(this.toHiddenState, 500)
        });
    },

    toRunningState: function toRunningState() {
        this.setState({
            state: "running"
        });
    },

    toHiddenState: function toHiddenState() {
        this.setState({
            state: "hidden"
        });
    },

    componentWillMount: function componentWillMount() {
        Component.instance = this;
    },

    componentWillUnmount: function componentWillUnmount() {
        delete Component.instance;
    }
});

exports["default"] = {
    Component: Component,
    show: function show() {
        Component.instance.show();
    },
    hide: function hide() {
        Component.instance.hide();
    }
};
module.exports = exports["default"];