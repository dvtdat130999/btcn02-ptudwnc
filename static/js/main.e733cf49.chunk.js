(this["webpackJsonpbtcn02-ptudwnc"]=this["webpackJsonpbtcn02-ptudwnc"]||[]).push([[0],[,,,,,,,function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},,function(e,t,r){e.exports=r(16)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(1),s=r(2),i=r(4),o=r(3),c=r(0),u=r.n(c),l=r(6),m=r.n(l);r(14),r(7),r(15);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e){return u.a.createElement("button",{className:"square",onClick:e.onClick},e.value)}var d=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"renderSquare",value:function(e){var t=this;return u.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),u.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),u.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(u.a.Component),v=function(e){Object(i.a)(r,e);var t=Object(o.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},a}return Object(s.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();f(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],n=f(a.squares),s=r.map((function(e,r){var a=r?"Go to move #"+r:"Go to game start";return u.a.createElement("li",{key:r},u.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},a))}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),u.a.createElement("div",{className:"game"},u.a.createElement("div",{className:"game-board"},u.a.createElement(d,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),u.a.createElement("div",{className:"game-info"},u.a.createElement("div",null,e),u.a.createElement("ol",null,s)))}}]),r}(u.a.Component);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(a.a)(t[r],3),s=n[0],i=n[1],o=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[o])return e[s]}return null}m.a.render(u.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e733cf49.chunk.js.map