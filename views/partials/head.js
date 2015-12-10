var React = require('react');
var ReactDOM = require('react-dom');
var bootstrap = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
var styles = 'public/css/css.css';

var elements = [
    React.createElement('title', {key: 'title'}, 'Scoreboard'),
    React.createElement('link', {key: 'link', 'rel': 'stylesheet', 'href': bootstrap}),
    React.createElement('link', {key: 'styles', 'rel': 'stylesheet', 'href': styles})
]

var Domhead = React.createClass({
    displayName: 'Head',
    render: function(){
        return (
            React.createElement('head', {key: 'head'}, 
                elements                       
            )
        )    
    }
})

var head = function(){
    return React.createElement(Domhead);    
}
module.exports = {
    head: head
}