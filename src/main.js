import React from "react";

var Component = React.createClass({
    count: 0,
    runningTimerId: null,
    hidingTimerId: null,

    getInitialState() {
        return {
            state: "hidden"
        }
    },

    getDefaultProps() {
        return {
            cls: ""
        }
    },

    render() {
        var cls = "loader-60devs " + this.props.cls;

        return (
            <div className={cls} data-state={this.state.state} ref="element">
                <div className="loader-60devs-progress"></div>
            </div>
        );
    },

    show() {
        if(++ this.count > 1)
            return ;

        clearTimeout(this.hidingTimerId);

        var el = this.refs.element;

        el.setAttribute('data-state', 'hidden');
        el.offsetHeight;
        el.setAttribute('data-state', '');
        el.offsetHeight;
        el.setAttribute('data-state', 'running');
    },

    hide() {
        if(-- this.count > 0)
            return ;

        this.refs.element.setAttribute('data-state', "finishing");
        this.hidingTimerId = setTimeout(this.toHiddenState, 500);
    },

    hideAll() {
        this.count = 1;
        this.hide();
    },

    toHiddenState() {
        this.refs.element.setAttribute('data-state', "hidden");
    },

    componentWillMount() {
        Component.instance = this;
    },

    componentWillUnmount() {
        delete Component.instance;
    },

    isVisible() {
        return this.refs.element.getAttribute('data-state') != "hidden";
    }
});

export default {
    Component: Component,
    show() {
        Component.instance.show();
    },
    hide() {
        Component.instance.hide();
    },
    hideAll() {
        Component.instance.hideAll();
    },
    isVisible() {
        return Component.instance.isVisible();
    }
}