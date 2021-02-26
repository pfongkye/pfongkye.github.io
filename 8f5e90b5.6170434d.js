(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{159:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(9),c=(r(0),r(176)),i={id:"doc_interactive_learning",title:"Interactive Learning"},o={id:"doc_interactive_learning",title:"Interactive Learning",description:"## Practice makes perfect",source:"@site/docs/doc_interactive_learning.md",permalink:"/docs/doc_interactive_learning",editUrl:"https://github.com/pfongkye/cheat-sheets-docs/edit/master/docs/doc_interactive_learning.md",sidebar:"someSidebar",previous:{title:"Miscellaneous",permalink:"/docs/doc_misc"},next:{title:"Test Driven Development",permalink:"/docs/practices/doc_tdd"}},p=[{value:"Practice makes perfect",id:"practice-makes-perfect",children:[]},{value:"Live Training",id:"live-training",children:[{value:"Creating Robust React Applications with Redux",id:"creating-robust-react-applications-with-redux",children:[]}]}],l={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"practice-makes-perfect"},"Practice makes perfect"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.katacoda.com/"}),"katacoda playground")),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.codingame.com/"}),"Coding game")," "),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.freecodecamp.org/"}),"Free code camp")," "),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.codewars.com/dashboard"}),"Code Wars")," "),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://codelabs.developers.google.com/"}),"Google codelabs")),Object(c.b)("h2",{id:"live-training"},"Live Training"),Object(c.b)("h3",{id:"creating-robust-react-applications-with-redux"},"Creating Robust React Applications with Redux"),Object(c.b)("p",null,"The source code ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/shaunwa/redux-todos-example"}),"example")),Object(c.b)("p",null,"Some ideas :"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"react-persist to keep state in local storage for example"),Object(c.b)("li",{parentName:"ul"},"reselect for selectors"),Object(c.b)("li",{parentName:"ul"},"react-testing library"),Object(c.b)("li",{parentName:"ul"},"Context and useReducer instead of redux library?")))}u.isMDXComponent=!0},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||c;return r?a.a.createElement(m,o({ref:t},l,{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);