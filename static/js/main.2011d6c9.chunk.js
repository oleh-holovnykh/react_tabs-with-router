(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{11:function(e){e.exports=JSON.parse('[{"id":1,"title":"Home","url":"/"},{"id":2,"title":"Tabs","url":"/tabs"}]')},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var c=a(10),n=a.n(c),s=a(4),i=(a(16),a(17),a(18),a(2)),b=a(6),r=a.n(b),j=a(0),l=a.n(j),d=a(1),o=l.a.memo((function(e){var t=e.navItems;return Object(d.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"navbar-brand",children:t.map((function(e){var t=e.id,a=e.url,c=e.title;return Object(d.jsx)(s.c,{to:a,className:function(e){var t=e.isActive;return r()("navbar-item",{"is-active":t})},children:c},t)}))})})})})),m=l.a.memo((function(){return Object(d.jsx)("h1",{className:"title",children:"Home page"})})),x=l.a.memo((function(e){var t=e.tab,a=e.selectedTabId,c=t.id,n=t.title,i=a===c;return Object(d.jsx)("li",{"data-cy":"Tab",className:r()({"is-active":i}),children:Object(d.jsx)(s.b,{to:"/tabs/".concat(c),children:n})})})),h=l.a.memo((function(e){var t=e.tabs,a=Object(i.h)().tabId,c=void 0===a?"":a,n=function(e,t){var a=e.find((function(e){return e.id===t}));return(null===a||void 0===a?void 0:a.content)||"Please select a tab"}(t,c);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"title",children:"Tabs page"}),Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:t.map((function(e){return Object(d.jsx)(x,{tab:e,selectedTabId:c},e.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:n})]})})),u=l.a.memo((function(){return Object(d.jsx)("h1",{className:"title",children:"Page not found"})})),O=a(9),v=a(11),p=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{navItems:v}),Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(i.d,{children:[Object(d.jsx)(i.b,{path:"/",element:Object(d.jsx)(m,{})}),Object(d.jsx)(i.b,{path:"home",element:Object(d.jsx)(i.a,{to:"/",replace:!0})}),Object(d.jsxs)(i.b,{path:"/tabs",children:[Object(d.jsx)(i.b,{index:!0,element:Object(d.jsx)(h,{tabs:O})}),Object(d.jsx)(i.b,{path:":tabId",element:Object(d.jsx)(h,{tabs:O})})]}),Object(d.jsx)(i.b,{path:"*",element:Object(d.jsx)(u,{})})]})})})]})};n.a.render(Object(d.jsx)(s.a,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":"tab-1","title":"Tab 1","content":"Some text 1"},{"id":"tab-2","title":"Tab 2","content":"Some text 2"},{"id":"tab-3","title":"Tab 3","content":"Some text 3"}]')}},[[20,1,2]]]);
//# sourceMappingURL=main.2011d6c9.chunk.js.map