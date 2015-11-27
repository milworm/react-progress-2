import React from "react";
import ReactDOM from "react-dom";
import Progress from "indicator/component.jsx!";

var Layout = React.createClass({
    render: function() {
        return (
            <div className="layout">
                <input type="button" onClick={this.start.bind(this, 1)} value="Start loading 1s" />
                <input type="button" onClick={this.start.bind(this, 5)} value="Start loading 5s" />
                <input type="button" onClick={this.start.bind(this, 10)} value="Start loading 10s" />
                <Progress.Component />
            </div>
        );
    },

    start: function(delay) {
        Progress.show();
        setTimeout(function() {
            Progress.hide();
        }, delay * 1000);
    }
});

ReactDOM.render(<Layout/>, document.getElementById("root"));