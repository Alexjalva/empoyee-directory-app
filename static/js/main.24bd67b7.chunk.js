(this["webpackJsonpempoyee-directory-app"]=this["webpackJsonpempoyee-directory-app"]||[]).push([[0],{41:function(t,e,n){"use strict";n.r(e);var r=n(2),s=n(12),a=n.n(s),c=n(13),u=n(14),o=n(17),i=n(16),l=n(1);var p=function(t){return Object(l.jsx)("ul",{className:"list-group",children:t.results})},h=n(15),j=n.n(h),d=function(){return j.a.get("https://randomuser.me/api/?results=200&nat=us")},b=function(t){Object(o.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(c.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={search:"",results:{}},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;d().then((function(e){return t.setState({results:e.data.data})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return Object(l.jsx)("div",{children:Object(l.jsx)(p,{results:this.state.results})})}}]),n}(r.Component);var f=function(){return Object(l.jsx)(b,{})};a.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.24bd67b7.chunk.js.map