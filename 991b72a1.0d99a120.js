(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var s=n(1),a=n(6),c=(n(0),n(124)),r={id:"doc2",title:"Kubernetes And Friends",sidebar_label:"Ops"},o={id:"doc2",title:"Kubernetes And Friends",description:"## Kubernetes",source:"@site/docs\\doc2.md",permalink:"/docs/doc2",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc2.md",sidebar_label:"Ops",sidebar:"someSidebar",previous:{title:"Web Development",permalink:"/docs/doc1"},next:{title:"Miscellaneous",permalink:"/docs/doc3"}},i=[{value:"Kubernetes",id:"kubernetes",children:[{value:"Deleting by label",id:"deleting-by-label",children:[]},{value:"Listing env",id:"listing-env",children:[]},{value:"Refresh token",id:"refresh-token",children:[]}]},{value:"Docker",id:"docker",children:[]}],d={rightToc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(s.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(c.b)("p",null,"dashboard: ",Object(c.b)("a",Object(s.a)({parentName:"p"},{href:"http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/"}),"http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/")),Object(c.b)("h3",{id:"deleting-by-label"},"Deleting by label"),Object(c.b)("pre",null,Object(c.b)("code",Object(s.a)({parentName:"pre"},{className:"language-cmd"}),"kubectl --namespace=<namespace> get pod <pod> --show-labels\nkubectl --namespace=<namespace> delete pods -l app=<app-name>\n")),Object(c.b)("h3",{id:"listing-env"},"Listing env"),Object(c.b)("pre",null,Object(c.b)("code",Object(s.a)({parentName:"pre"},{className:"language-cmd"}),"kubectl --namespace=<namespace> exec <pod> env\n")),Object(c.b)("h3",{id:"refresh-token"},"Refresh token"),Object(c.b)("p",null,"Remove refresh token from .kube/config on password change. Remove also the lines ",Object(c.b)("inlineCode",{parentName:"p"},"expires-in")," and ",Object(c.b)("inlineCode",{parentName:"p"},"expires-on"),"."),Object(c.b)("h2",{id:"docker"},"Docker"),Object(c.b)("p",null,"On password change, restart docker for windows (to avoid issues with shared drives, mounting, etc.)"))}b.isMDXComponent=!0}}]);