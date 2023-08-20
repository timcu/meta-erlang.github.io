"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[1069],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),m=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),g=n,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||l;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6674:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={title:"BEAM Tools",description:"BEAM Tools releases",hide_table_of_contents:!0},o="BEAM Tools",i={type:"mdx",permalink:"/beamtools/",source:"@site/src/pages/beamtools/index.md",title:"BEAM Tools",description:"BEAM Tools releases",frontMatter:{title:"BEAM Tools",description:"BEAM Tools releases",hide_table_of_contents:!0}},s=[{value:"Releases",id:"releases",level:2}],m={toc:s},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"beam-tools"},"BEAM Tools"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/guides/guides-beamtools/"},"Beam Tools")," is a tarball having Erlang/OTP and Elixir plus\nrebar3, erlfmt, elvis, erlang_ls and wrangler; ready to run on any Linux host without\nneeded other software requirements (wxWidgets or ssl libraries)."),(0,n.kt)("p",null,"It allows you to compile and run any Erlang and Elixir source code. The main purpose is to\nmake meta-erlang generating useful toolchains to be run on linux hosts (beamtools does not provide any\npackage to cross-compile to the target)."),(0,n.kt)("h2",{id:"releases"},"Releases"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"meta-erlang branch"),(0,n.kt)("th",{parentName:"tr",align:null},"BEAM Tools version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"honister"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.1.0"},"3.4.1 Erlang/OTP 24.1.7 Elixir 1.12.3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"honister"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.2.0"},"3.4.1 Erlang/OTP 24.2 Elixir 1.12.3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"honister"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.3.0"},"3.4.2 Erlang/OTP 24.3.3 Elixir 1.12.3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kirkstone"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.4.0"},"4.0.1 Erlang/OTP 25.0 Elixir 1.13.3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"langdale"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.5.0"},"4.1.1 Erlang/OTP 25.1.2 Elixir 1.14.2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"langdale"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.6.0"},"4.1.3 Erlang/OTP 25.2.3 Elixir 1.14.4-dev"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mickledore"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.7.1"},"4.2.1 Erlang/OTP 26.0.2 Elixir 1.15.2"))))))}u.isMDXComponent=!0}}]);