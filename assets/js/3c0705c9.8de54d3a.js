"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[632],{5788:(e,n,t)=>{t.d(n,{Iu:()=>d,yg:()=>g});var a=t(1504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9036:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(5072),r=(t(1504),t(5788));const i={sidebar_position:4.9,sidebar_label:"epmd",sidebar_class_name:"green",description:"Shows how to set up and install epmd."},o="epmd",l={unversionedId:"applications/guides-epmd",id:"version-nanbield/applications/guides-epmd",title:"epmd",description:"Shows how to set up and install epmd.",source:"@site/versioned_docs/version-nanbield/applications/guides-epmd.md",sourceDirName:"applications",slug:"/applications/guides-epmd",permalink:"/docs/nanbield/applications/guides-epmd",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-nanbield/applications/guides-epmd.md",tags:[],version:"nanbield",sidebarPosition:4.9,frontMatter:{sidebar_position:4.9,sidebar_label:"epmd",sidebar_class_name:"green",description:"Shows how to set up and install epmd."},sidebar:"tutorialSidebar",previous:{title:"wings3d",permalink:"/docs/nanbield/applications/guides-wings"},next:{title:"Distro",permalink:"/docs/nanbield/category/distro"}},p={},s=[],d={toc:s},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"epmd"},"epmd"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://erlang.org/doc/man/epmd.html"},"Erlang Port Mapper Daemon")," is a\nstandalone daemon that keeps track of all hosts involved in distributed Erlang\ncomputations. It is a fundamental piece when talking with other Erlang nodes.\nUsually the daemon is started automatically when run ",(0,r.yg)("inlineCode",{parentName:"p"},"erl")," and there is no epmd\ninstance present."),(0,r.yg)("p",null,"The recipe\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/blob/master/recipes-core/epmd/epmd.inc"},"epmd"),"\nis target to run epmd started by systemd or systemv where additional control and\nconfiguration can be passed to epmd daemon (see the epmd manual pages for\nadditional options). The purpose of the recipe is address some edge cases where\nyou don't want to ship a full ERTS or you have additional patches for the epmd\ndaemon."),(0,r.yg)("p",null,"Follow the quickstart guide to get a basic working environment and then:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add ",(0,r.yg)("inlineCode",{parentName:"li"},"epmd")," package to ",(0,r.yg)("inlineCode",{parentName:"li"},"IMAGE_INSTAL")," in ",(0,r.yg)("em",{parentName:"li"},"conf/local.conf"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"echo 'IMAGE_INSTALL:append = \" epmd\"' >> conf/local.conf\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Now its time to build the image:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bitbake core-image-minimal\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"And check the results with qemu:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"runqemu core-image-minimal\n")),(0,r.yg)("p",null,"Check if ",(0,r.yg)("inlineCode",{parentName:"p"},"epmd")," is up and running:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"ps | grep epmd\n")),(0,r.yg)("p",null,"Then, start erl with distributed enabled like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"erl -sname test\n")),(0,r.yg)("p",null,"Check again using ",(0,r.yg)("inlineCode",{parentName:"p"},"ps")," and there is still only one epmd daemon running. As the\nfinal check, lets ask epmd if its know any erlang node:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"/usr/sbin/epmd -names\nepmd: up and running on port 4369 with data:\nname test at port 46019\n")))}m.isMDXComponent=!0}}]);