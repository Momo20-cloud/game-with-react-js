(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),a=r(2),i=r.n(a),c=(r(13),r.p,r(14),r(0));var u=function(e){return Object(c.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})},o=r(3),l=r(4),h=r(6),d=r(5),j=function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(c.jsx)(u,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(c.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(s.a.Component),b=r(8),v=function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},n}return Object(l.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();x(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],s=x(n.squares),a=r.map((function(e,r){var n=r?"Go to move #"+r:"Go to game start";return Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:n})},r)}));return e=s?"Winner: "+s:"Next player: "+(this.state.xIsNext?"X":"O"),Object(c.jsxs)("div",{className:"game",children:[Object(c.jsx)("div",{className:"game-board",children:Object(c.jsx)(j,{squares:n.squares,onClick:function(e){return t.handleClick(e)}})}),Object(c.jsxs)("div",{className:"game-info",children:[Object(c.jsx)("div",{children:e}),Object(c.jsx)("ol",{children:a})]})]})}}]),r}(s.a.Component);function x(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(b.a)(t[r],3),s=n[0],a=n[1],i=n[2];if(e[s]&&e[s]===e[a]&&e[s]===e[i])return e[s]}return null}i.a.render(Object(c.jsx)(v,{}),document.getElementById("root"));var O=v;var p=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.becadbe6.chunk.js.map