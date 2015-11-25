## Installation
#### JSPM
    jspm install npm:react-progress-2 --save


## Usage
Include `jspm_packages/react-progress-2/main.css` to your `html`-file, for instance:

    <html>
        <head>
            <meta charset="UTF-8">
            <title>React progress indicator example</title>
            <!-- progress indicator -->
            <link rel="stylesheet" href="/jspm_packages/react-progress-2/main.css" />
        </head>
        <body></body>
    </html>

Include `react-progress-2` and put it somewhere in the top-component, for example:

    import React from "react";
    import LoadingIndicator from "react-progress-2";

    var Layout = React.createClass({
        render: function() {
            return (
                <div className="layout">
                    <LoadingIndicator/>
                    {/* other components go here*/}
                </div>
            );
        }
    });

Now, whenever you need to show an indicator, trigger `loader.show`, for example:

    loadFeed: function() {
        $(window).trigger("loader.show");
        // do your ajax thing.
    },

    onLoadFeedCallback: function() {
        $(window).trigger("loader.hide");
        // render feed.
    }


## Styling


    .loader-60devs .loader-60devs-progress {
        background: #ff6f00;
    }

## Examples
[Examples](http://milworm.github.io/react-progress-2/example.html)

## Authors and Contributors
Created in 2015 by Ruslan Prytula (@milworm).