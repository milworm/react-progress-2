import React from "react";
import ReactDOM from "react-dom";
import LoadingIndicator from "indicator/component.jsx!";

var Layout = React.createClass({
    render: function() {
        return (
            <div className="layout">
                <input type="button" onClick={this.start.bind(this, 1)} value="Start loading 1s" />
                <input type="button" onClick={this.start.bind(this, 5)} value="Start loading 5s" />
                <input type="button" onClick={this.start.bind(this, 10)} value="Start loading 10s" />
                <LoadingIndicator/>
            </div>
        );
    },

    start: function(delay) {
        $(window).trigger("loader.show");
        setTimeout(function() {
            $(window).trigger("loader.hide");            
        }, delay * 1000);
    }
});

ReactDOM.render(<Layout/>, document.getElementById("root"));
