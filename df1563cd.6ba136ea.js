(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{169:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),c=(n(0),n(176)),o={id:"doc_web",title:"Web Development",sidebar_label:"Web"},i={id:"doc_web",title:"Web Development",description:"## Web",source:"@site/docs/doc_web.md",permalink:"/docs/doc_web",editUrl:"https://github.com/pfongkye/cheat-sheets-docs/edit/master/docs/doc_web.md",sidebar_label:"Web",sidebar:"someSidebar",next:{title:"Languages",permalink:"/docs/doc_languages"}},l=[{value:"Web",id:"web",children:[]},{value:"Links",id:"links",children:[]},{value:"CSS",id:"css",children:[{value:"Houdini",id:"houdini",children:[]}]},{value:"React",id:"react",children:[]},{value:"Service Workers",id:"service-workers",children:[]},{value:"Application Holotypes",id:"application-holotypes",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"web"},"Web"),Object(c.b)("p",null,"A cheat sheet on Web."),Object(c.b)("h2",{id:"links"},"Links"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://web.dev/"}),"web.dev")),Object(c.b)("h2",{id:"css"},"CSS"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://howtocenterincss.com/"}),"How to center in CSS")),Object(c.b)("h3",{id:"houdini"},"Houdini"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Houdini"}),"Houdini")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://ishoudinireadyyet.com/"}),"Is Houdini ready yet?")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://googlechromelabs.github.io/houdini-samples/"}),"Houdini Samples")),Object(c.b)("h2",{id:"react"},"React"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://indepth.dev/react"}),"React in depth")),Object(c.b)("h2",{id:"service-workers"},"Service Workers"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://philipwalton.com/articles/smaller-html-payloads-with-service-workers/"}),"Small HTML payloads with service workers")),Object(c.b)("h2",{id:"application-holotypes"},"Application Holotypes"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://jasonformat.com/application-holotypes/"}),"Some tips to build types of web apps")),Object(c.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(c.b)("p",null,"You can write content using ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.github.com/gfm/"}),"GitHub-flavored Markdown syntax"),"."))}b.isMDXComponent=!0},176:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,h=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return n?a.a.createElement(h,i({ref:t},p,{components:n})):a.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);