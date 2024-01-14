"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[1069],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(a),g=n,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||l;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},6674:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={title:"BEAM Tools",description:"BEAM Tools releases",hide_table_of_contents:!0},o="BEAM Tools",i={type:"mdx",permalink:"/beamtools/",source:"@site/src/pages/beamtools/index.md",title:"BEAM Tools",description:"BEAM Tools releases",frontMatter:{title:"BEAM Tools",description:"BEAM Tools releases",hide_table_of_contents:!0}},s=[{value:"Releases",id:"releases",level:2},{value:"How to use",id:"how-to-use",level:2}],m={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"beam-tools"},"BEAM Tools"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/guides/guides-beamtools/"},"Beam Tools")," is a tarball having Erlang/OTP and Elixir plus\nrebar3, erlfmt, elvis, erlang_ls and wrangler; ready to run on any Linux host without\nneeded other software requirements (wxWidgets or ssl libraries)."),(0,n.kt)("p",null,"It allows you to compile and run any Erlang and Elixir source code. The main purpose is to\nmake meta-erlang generating useful toolchains to be run on linux hosts (beamtools does not provide any\npackage for cross compilation to any target)."),(0,n.kt)("h2",{id:"releases"},"Releases"),(0,n.kt)("p",null,"Each relase represents a specific combination of Erlang/OTP and Elixir for each meta-erlang branches. Usually\nthe latest Erlang/OTP and Elixir are used."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"meta-erlang branch"),(0,n.kt)("th",{parentName:"tr",align:null},"BEAM Tools version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"honister"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.1.0"},"3.4.1 Erlang/OTP 24.1.7 Elixir 1.12.3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"honister"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.2.0"},"3.4.1 Erlang/OTP 24.2 Elixir 1.12.3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"honister"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.3.0"},"3.4.2 Erlang/OTP 24.3.3 Elixir 1.12.3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"kirkstone"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.4.0"},"4.0.1 Erlang/OTP 25.0 Elixir 1.13.3"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"langdale"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.5.0"},"4.1.1 Erlang/OTP 25.1.2 Elixir 1.14.2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"langdale"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.6.0"},"4.1.3 Erlang/OTP 25.2.3 Elixir 1.14.4-dev"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mickledore"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.7.1"},"4.2.1 Erlang/OTP 26.0.2 Elixir 1.15.2"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"nanbield"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/meta-erlang/meta-erlang/releases/tag/beamtools-0.8.0"},"4.3.2 Erlang/OTP 26.2.1 Elixir 1.16.0"))))),(0,n.kt)("h2",{id:"how-to-use"},"How to use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Locate and download the ","*",".sh at\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/releases"},"https://github.com/meta-erlang/meta-erlang/releases"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute the installation script. Here is an example for the traditional\ninstaller:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sh ~/Downloads/x86_64-beamtools-nativesdk-standalone-3.4.1-erlang-24.1.7-elixir-1.12.3.sh -y -d <local installation folder>\n")),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("em",{parentName:"p"},"local installation folder")," could be any folder that you want. The recommendation is to create\ninside your $HOME folder, for example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$HOME/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Source the tools environment setup script by using a command like the\nfollowing:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"source /home/your_username/beamtools/3.4.1-erlang-24.1.7-elixir-1.12.3/environment-setup-x86_64-pokysdk-linux\n")))),(0,n.kt)("p",null,"After you have sourced the setup script, the tools are added to PATH and any\nother environment variables required to run the tools are initialized. The\nresults are working versions versions of rebar3, Erlang/OTP and Elixir."))}u.isMDXComponent=!0}}]);