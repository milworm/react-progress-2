import React from "react";
import ReactDOM from "react-dom";
import LoadingIndicator from "indicator/component.jsx!";

var Layout = React.createClass({
    render: function() {
        return (
            <div className="layout">
                <input type="button" onClick={this.start} value="Start loading" />
                <LoadingIndicator/>
            </div>
        );
    },

    start: function() {
        $(window).trigger("loader.show");

        setTimeout(function() {
            $(window).trigger("loader.hide");            
        }, 1000);
    }
});

ReactDOM.render(<Layout/>, document.getElementById("root"));
