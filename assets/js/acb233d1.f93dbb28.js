"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[4064],{5788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>m});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||s;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(5072),a=(n(1504),n(5788));const s={sidebar_position:4.6,sidebar_label:"tsung",sidebar_class_name:"green",description:"Shows how to set up and install tsung."},i="tsung",o={unversionedId:"applications/guides-tsung",id:"version-kirkstone/applications/guides-tsung",title:"tsung",description:"Shows how to set up and install tsung.",source:"@site/versioned_docs/version-kirkstone/applications/guides-tsung.md",sourceDirName:"applications",slug:"/applications/guides-tsung",permalink:"/docs/kirkstone/applications/guides-tsung",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-kirkstone/applications/guides-tsung.md",tags:[],version:"kirkstone",sidebarPosition:4.6,frontMatter:{sidebar_position:4.6,sidebar_label:"tsung",sidebar_class_name:"green",description:"Shows how to set up and install tsung."},sidebar:"tutorialSidebar",previous:{title:"ejabberd",permalink:"/docs/kirkstone/applications/guides-ejabberd"},next:{title:"yaws",permalink:"/docs/kirkstone/applications/guides-yaws"}},l={},u=[],p={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tsung"},"tsung"),(0,a.yg)("p",null,"In this guide we are using the plain meta-erlang layer to include a distributed\ntest tool called ",(0,a.yg)("a",{parentName:"p",href:"http://tsung.erlang-projects.org/"},"tsung"),"."),(0,a.yg)("p",null,"The recipe\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-tests/tsung/tsung_1.7.0.bb"},"tsung_1.7.0.bb"),"\nbuilds the tsung tool using a crosscompile approach."),(0,a.yg)("p",null,"As a final result, we are able to run the command ",(0,a.yg)("inlineCode",{parentName:"p"},"tsung"),"."),(0,a.yg)("p",null,"Follow the quickstart guide to get a basic working environment and then:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"tsung")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"tsung-doc")," packages to ",(0,a.yg)("inlineCode",{parentName:"li"},"IMAGE_INSTAL")," in ",(0,a.yg)("em",{parentName:"li"},"conf/local.conf"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"echo 'IMAGE_INSTALL:append = \" tsung tsung-doc\"' >> conf/local.conf\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Now its time to build the image:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bitbake core-image-minimal\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"And check the results with qemu:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"runqemu core-image-minimal\n")),(0,a.yg)("p",null,"The package tsung-doc provides a set of working examples which can be used as a\nbase. The below command will start tsung using a basic scenario:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"tsung -f /usr/share/doc/tsung/examples/http_simple.xml start\n")),(0,a.yg)("p",null,"Tsung has a pretty\n",(0,a.yg)("a",{parentName:"p",href:"http://tsung.erlang-projects.org/user_manual/"},"decent documentation")," showing\nhow to configure more advanced scenarios."))}g.isMDXComponent=!0}}]);