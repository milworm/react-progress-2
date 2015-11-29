# YouTube style progress bar for ReactJS

![Demo](https://raw.githubusercontent.com/milworm/react-progress-2/master/images/demo.gif)

## Installation

#### NPM
    npm install react-progress-2

#### JSPM
    jspm install npm:react-progress-2

## Usage

Include `react-progress-2/main.css` to your project. With [SystemJS CSS plugin](https://github.com/systemjs/plugin-css) you simply need to write this line:

    import "react-progress-2/main.css!"

Include `react-progress-2` and put it somewhere in the top-component, for example:

    import React from "react";
    import Progress from "react-progress-2";

    var Layout = React.createClass({
        render: function() {
            return (
                <div className="layout">
                    <Progress.Component/>
                    {/* other components go here*/}
                </div>
            );
        }
    });

Now, whenever you need to show an indicator, just call `Progress#show`, for example:

    loadFeed: function() {
        Progress.show();
        // do your ajax thing.
    },

    onLoadFeedCallback: function() {
        Progress.hide();
        // render feed.
    }


Please note, that `show` and `hide` calls are stacked, so after *n*-consecutive `show` calls, you need to do *n* `hide` calls to hide an indicator.

## Styling


    .loader-60devs .loader-60devs-progress {
        background: #ff6f00;
    }

## Examples
[Examples](http://milworm.github.io/react-progress-2/example.html)

## Authors and Contributors
Created in 2015 by Ruslan Prytula (@milworm).
