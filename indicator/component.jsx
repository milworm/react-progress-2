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
            <div className={cls} data-state={this.state.state}>
                <div className="loader-60devs-progress"></div>
            </div>
        );
    },

    show: function() {
        clearTimeout(this.state.hidingTimerId);

        this.setState({
            count: this.state.count + 1
        });

        if(this.state.count > 1)
            return ;

        this.setState({
            state: ""
        });

        var timerId = setTimeout(this.toRunningState, 1);

        this.setState({
            runningTimerId: timerId
        });
    },

    toRunningState: function() {
        this.setState({
            state: "running"
        });
    },

    hide: function() {
        clearTimeout(this.state.runningTimerId);

        if(-- this.state.count > 0)
            return ;

        this.setState({
            state: "finishing"
        });

        var timerId = setTimeout(this.toHiddenState, 500);

        this.setState({
            hidingTimerId: timerId
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