var React = require('react');
var ReactDOM = require('react-dom');
var fs = require('fs');

var homeSub = React.createElement('div', {className: 'a', id : 'test__Id'}, '-');
var awayAdd = React.createElement('div', {className: 'a', id : 'test__Id'}, '+');
var awaySub = React.createElement('div', {className: 'a', id : 'test__Id'}, '-');

var BtnTest = React.createClass({
    getInitialState: function() {
        return { trying: 0};
    },
    handleClick: function(event){
        console.log(event);
    },
    componentDidMount: function(){
         console.log('mount test');
    },
    render : function(){
        console.log('test');
        return(
            React.DOM.div({className: 'referee__btn referee_add', id : 's', onClick : this.handleClick}, '+')
            );
    }
});

var RefPage = React.createClass({
    displayName: 'refPage',
    render: function(){
        return(
            React.createElement('body', {key: 'body'},
                React.DOM.div({key: 'scoreboard', className: "referee"}, 
                React.createElement(BtnTest)
                )   
        ) );    
    }
});

var ref = function(){
    return React.createElement(RefPage);
};

module.exports = {
    ref: ref        
}