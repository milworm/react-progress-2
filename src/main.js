import React from "react";

var Component = React.createClass({
    count: 0,
    runningTimerId: null,
    hidingTimerId: null,

    getInitialState: function() {
        return {
            state: "hidden"
        }
    },

    getDefaultProps: function() {
        return {
            cls: ""
        }
    },

    render: function() {
        var cls = "loader-60devs " + this.props.cls;

        return (
            <div className={cls} data-state={this.state.state} ref="element">
                <div className="loader-60devs-progress"></div>
            </div>
        );
    },

    show: function() {
        if(++ this.count > 1)
            return ;

        clearTimeout(this.hidingTimerId);

        var el = this.refs.element;

        el.dataset.state = "hidden";
        el.offsetHeight;
        el.dataset.state = "";
        el.offsetHeight;
        el.dataset.state = "running";
    },

    hide: function() {
        if(-- this.count > 0)
            return ;

        this.refs.element.dataset.state = "finishing";
        this.hidingTimerId = setTimeout(this.toHiddenState, 500);
    },

    toHiddenState: function() {
        this.refs.element.dataset.state = "hidden";
    },

    componentWillMount: function() {
        Component.instance = this;
    },

    componentWillUnmount: function() {
        delete Component.instance;
    },

    hideAll: function() {
        this.count = 1;
        this.hide();
    },

    isVisible: function() {
        return this.refs.element.dataset.state != "hidden";
    }
});

export default {
    Component: Component,
    show: () => {
        Component.instance.show();
    },
    hide: () => {
        Component.instance.hide();
    },
    hideAll: () => {
        Component.instance.hideAll();
    },
    isVisible: () => {
        return Component.instance.isVisible();
    }
}