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
                <br/>
                <br/>
                <input type="button" onClick={this.consecutive.bind(this, 2)} value="2 consecutive calls" />
                <input type="button" onClick={this.consecutive.bind(this, 3)} value="3 consecutive calls" />

                <Progress.Component />
            </div>
        );
    },

    start: function(delay) {
        Progress.show();
        setTimeout(function() {
            Progress.hide();
        }, delay * 1000);
    },

    consecutive: function(calls) {
        for(var i=0; i<calls; i++)
            setTimeout(function() {
                Progress.show();
                console.log("show");
            }, i * 500);

        setTimeout(function() {
            for(var i=0; i<calls; i++) {
                Progress.hide();
                console.log("hide");
            }
        }, calls * 500 + 500);
    }
});

ReactDOM.render(<Layout/>, document.getElementById("root"));