(this["webpackJsonpreact-hooks-news-feed"]=this["webpackJsonpreact-hooks-news-feed"]||[]).push([[0],{77:function(e,t,n){},78:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(10),o=n.n(s),i=(n(77),n(78),n(59)),a=n(60),j=n(30),d={posts:[]},l=function(e,t){switch(t.type){case"add":return Object(j.a)(Object(j.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[t.post])});case"delete":var n=e.posts.filter((function(e){return e.id!==t.post.id}));return Object(j.a)(Object(j.a)({},e),{},{posts:n});case"toggleFavorite":var c=e.posts.filter((function(e){return e.id===t.post.id})),r=c[0].favorite;return c[0].favorite=!r,Object(j.a)({},e);default:return e}},u=n(6),b=Object(c.createContext)(null),p=function(e){var t=e.children,n=Object(c.useReducer)(l,d),r=Object(i.a)(n,2),s={feedState:r[0],feedDispatch:r[1]};return Object(u.jsx)(b.Provider,{value:s,children:t})},f=n(125),h=n(123),O=n(113),x=function(){var e=Object(c.useContext)(b).feedDispatch,t=Object(c.createRef)();return Object(u.jsx)(f.a,{my:2,children:Object(u.jsxs)("form",{ref:t,onSubmit:function(n){return function(n){n.preventDefault(),e({type:"add",post:{id:Date.now(),content:n.target[0].value,favorite:!1}}),t.current.reset()}(n)},children:[Object(u.jsx)(h.a,{multiline:!0,variant:"outlined",rows:4,fullWidth:!0}),Object(u.jsxs)(f.a,{mt:1,display:"flex",justifyContent:"flex-end",children:[Object(u.jsx)(O.a,{color:"primary",type:"reset",children:"Reset"}),Object(u.jsx)(O.a,{color:"primary",variant:"contained",type:"submit",disableElevation:!0,children:"Publish"})]})]})})},m=n(56),v=n.n(m),g=n(58),y=n.n(g),C=n(57),w=n.n(C),k=n(114),F=n(115),S=n(116),D=n(117),B=n(118),P=n(34),R=n(119),E=n(120),T=function(e){var t=Object(c.useContext)(b).feedDispatch,n=e.post.content,r=Object(u.jsx)(k.a,{onClick:function(){return t({type:"delete",post:e.post})},children:Object(u.jsx)(v.a,{})});return Object(u.jsx)(F.a,{item:!0,children:Object(u.jsxs)(S.a,{variant:"outlined",children:[Object(u.jsx)(D.a,{action:r}),Object(u.jsx)(B.a,{children:Object(u.jsx)(P.a,{align:"left",children:n})}),Object(u.jsx)(R.a,{}),Object(u.jsx)(E.a,{children:Object(u.jsx)(k.a,{onClick:function(){return t({type:"toggleFavorite",post:e.post})},children:e.post.favorite?Object(u.jsx)(w.a,{}):Object(u.jsx)(y.a,{})})})]})})},I=function(){var e=Object(c.useContext)(b).feedState;return Object(u.jsx)(F.a,{spacing:2,container:!0,direction:"column",children:e.posts.length>0&&e.posts.sort((function(e,t){return t.id-e.id})).map((function(e,t){return Object(u.jsx)(T,{post:e},t)}))})},J=n(121),L=n(122),N=function(){return Object(u.jsx)(J.a,{maxWidth:"sm",children:Object(u.jsxs)(p,{children:[Object(u.jsx)(f.a,{mt:2,children:Object(u.jsx)(P.a,{align:"center",variant:"h4",component:"h1",gutterBottom:!0,children:"News Feed Example"})}),Object(u.jsx)(P.a,{align:"center",color:"textSecondary",component:"p",gutterBottom:!0,children:"This project uses React Hooks in order to render and manage the state of a simple news feed and its posts."}),Object(u.jsxs)(P.a,{align:"center",color:"textSecondary",variant:"overline",component:"p",gutterBottom:!0,children:["Visit my"," ",Object(u.jsx)(L.a,{href:"https://github.com/stebsnusch",target:"_blank",children:"Github"})," ","for more projects."]}),Object(u.jsx)(x,{}),Object(u.jsx)(I,{})]})})};var W=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(N,{})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,128)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(W,{})}),document.getElementById("root")),A()}},[[86,1,2]]]);
//# sourceMappingURL=main.ac3461a2.chunk.js.map