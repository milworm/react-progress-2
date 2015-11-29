import React from "react";

var Component = React.createClass({
    getInitialState: function() {
        return {
            state: "hidden",
            count: 0
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
        this.setState({
            count: this.state.count + 1
        });

        if(this.state.count > 1)
            return ;

        clearTimeout(this.state.hidingTimerId);

        this.refs.element.dataset.state = "hidden";
        this.refs.element.offsetTop;

        this.setState({
            state: "",
            runningTimerId: setTimeout(this.toRunningState, 10)
        });
    },

    hide: function() {
        this.setState({
            count: this.state.count - 1
        });

        if(this.state.state == "hidden")
            return ;

        if(this.state.count > 0)
            return ;

        clearTimeout(this.state.runningTimerId);
        this.setState({
            state: "finishing",
            hidingTimerId: setTimeout(this.toHiddenState, 500)
        });
    },

    toRunningState: function() {
        this.setState({
            state: "running"
        });
    },

    toHiddenState: function() {
        this.setState({
            state: "hidden"
        });
    },

    componentWillMount: function() {
        Component.instance = this;
    },

    componentWillUnmount: function() {
        delete Component.instance;
    }
});

export default {
    Component: Component,
    show: function() {
        Component.instance.show();
    },
    hide: function() {
        Component.instance.hide();
    }
}