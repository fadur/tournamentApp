var React = require('react');
var ReactDOM = require('react-dom');

var PageTitle = React.createClass({
    displayName: 'title',
    render: function(){
        return(
            React.createElement('body', {key: 'body'},
                    React.DOM.div({key: 'scoreboard', className: "scoreboard"}, 
                        React.DOM.div({key: 'logo', className:'logo__holder upper__logo'}, 
                            React.DOM.img({key: 'logo__image', src : "http://s3-eu-west-1.amazonaws.com/unisport-forever-paths/campaign/graphics/logo.png", className: "logo__image"})
                        ),
                        React.DOM.div({key: 'teams', className: "team__holder"}, 
                            React.DOM.div({key: 'team1', className: "team"},
                                React.DOM.div({key: 'home', className: "team__name"}, "home"),
                                React.DOM.div({key: 'homescore', className: "score"}, "0")
                            ),
                            React.DOM.div({key: 'team2', className: "team"},
                                React.DOM.div({key: 'away', className: "team__name"}, "away"),
                                React.DOM.div({key: 'awayscore', className: "score"}, "0"))
                            ),
                         React.DOM.div({key: 'timer', className: "timer"}, "10:00"),
                         React.DOM.div({key: 'unisportlife', className:'logo__holder'}, 
                            React.DOM.img({key: 'logo__image', src : "http://s3-eu-west-1.amazonaws.com/unisport-forever-paths/campaign/graphics/unisportlife.png", className: "logo__image"})
                        )
                    )
            )
        )    
    }
})

var title = function(){
    return React.createElement(PageTitle);
};

module.exports = {
    title: title        
}