"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[7424],{5788:(e,n,r)=>{r.d(n,{Iu:()=>g,yg:()=>m});var t=r(1504);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),p=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},g=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,m=c["".concat(o,".").concat(u)]||c[u]||d[u]||i;return r?t.createElement(m,l(l({ref:n},g),{},{components:r})):t.createElement(m,l({ref:n},g))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7128:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var t=r(5072),a=(r(1504),r(5788));const i={sidebar_position:3,description:"How to integrate an application with meta-erlang."},l="My application example",s={unversionedId:"guides/guides-my-application",id:"version-kirkstone/guides/guides-my-application",title:"My application example",description:"How to integrate an application with meta-erlang.",source:"@site/versioned_docs/version-kirkstone/guides/guides-my-application.md",sourceDirName:"guides",slug:"/guides/guides-my-application",permalink:"/docs/kirkstone/guides/guides-my-application",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/versioned_docs/version-kirkstone/guides/guides-my-application.md",tags:[],version:"kirkstone",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"How to integrate an application with meta-erlang."},sidebar:"tutorialSidebar",previous:{title:"Bitbake classes",permalink:"/docs/kirkstone/guides/guides-bitbake-classes"},next:{title:"Hello World examples for meta-erlang",permalink:"/docs/kirkstone/guides/guides-hello-world"}},o={},p=[{value:"Erlang",id:"erlang",level:2},{value:"preparing the rebar.config file",id:"preparing-the-rebarconfig-file",level:3},{value:"inheriting rebar3 class",id:"inheriting-rebar3-class",level:3},{value:"Elixir",id:"elixir",level:2},{value:"release with distillery",id:"release-with-distillery",level:3},{value:"release with Elixir",id:"release-with-elixir",level:3}],g={toc:p},c="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.c)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"my-application-example"},"My application example"),(0,a.yg)("p",null,"When making Erlang or Elixir releases, usually the application run inside an\nembedded\n",(0,a.yg)("a",{parentName:"p",href:"https://erlang.org/doc/apps/erts/users_guide.html"},"Erlang Run Time System"),"\n(ERTS). The ERTS will be copied from Yocto build environment to the target\napplication."),(0,a.yg)("p",null,"The layer meta-erlang provides additional bitbake classes to handle this process\nwhen using rebar3 or mix tool. However the rebar.config and mix.exs\nconfiguration files need to be prepared in advanced to detected when special\nenvironment configuration are available in order to make the proper release."),(0,a.yg)("h2",{id:"erlang"},"Erlang"),(0,a.yg)("h3",{id:"preparing-the-rebarconfig-file"},"preparing the rebar.config file"),(0,a.yg)("p",null,"A basic rebar3 config looks like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-erlang"},'{erl_opts, [debug_info]}.\n{deps, []}.\n\n{relx, [{release, {\'axon\', "0.1.0"},\n         [axon,\n          sasl]},\n\n        {sys_config, "./config/sys.config"},\n        {vm_args, "./config/vm.args"},\n\n        {dev_mode, true},\n        {include_erts, true},\n        {system_libs, true},\n\n        {extended_start_script, true},\n        {generate_start_script, true}]\n}.\n\n{profiles, [{prod, [{relx, [{dev_mode, false}\n                            {include_erts, true},\n                            {system_libs, true}\n                           ]}]\n            }]\n}.\n')),(0,a.yg)("p",null,"In the above config, the ",(0,a.yg)("inlineCode",{parentName:"p"},"relx")," must have the ",(0,a.yg)("inlineCode",{parentName:"p"},"include_erts")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"system_libs"),"\nsetted to ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-erlang"},"{relx, ...\n        {include_erts, true},\n        {system_libs, true},\n...\n}.\n")),(0,a.yg)("h3",{id:"inheriting-rebar3-class"},"inheriting rebar3 class"),(0,a.yg)("p",null,"The meta-erlang class ",(0,a.yg)("em",{parentName:"p"},"rebar3")," provides everything needed in order to generate a\ncross compiled Erlang release. The rebar3 class uses the ",(0,a.yg)("inlineCode",{parentName:"p"},"rebar3 tar")," command\npassing the following arguments:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"rebar as ${REBAR_PROFILE} tar")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--system_libs ${REBAR3_TARGET_SYSTEM_LIBS}")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"--include-erts ${REBAR3_TARGET_INCLUDE_ERTS}")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"-n ${REBAR3_RELEASE_NAME}"))),(0,a.yg)("p",null,"While ",(0,a.yg)("em",{parentName:"p"},"REBAR3_TARGET_SYSTEM_LIBS")," and ",(0,a.yg)("em",{parentName:"p"},"REBAR3_TARGET_INCLUDE_ERTS")," are detected\nautomatically pointing to the correct target paths; the variables\n",(0,a.yg)("em",{parentName:"p"},"REBAR_PROFILE")," and ",(0,a.yg)("em",{parentName:"p"},"REBAR3_RELEASE_NAME")," must be defined in the application\nrecipe like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bitbake"},'inherit rebar3\n\nREBAR_PRODULE = "prod"\nREBAR3_RELEASE_NAME = "my-application"\n')),(0,a.yg)("p",null,"Calling ",(0,a.yg)("inlineCode",{parentName:"p"},"rebar3 tar")," command is necessary to avoid less changes in the\napplication rebar.config file. So, rebar3 (which delegates to relx) will use the\ncorrect target paths."),(0,a.yg)("p",null,"!> Remember: rebar3 supports independent release configurations."),(0,a.yg)("h2",{id:"elixir"},"Elixir"),(0,a.yg)("h3",{id:"release-with-distillery"},"release with distillery"),(0,a.yg)("p",null,"This approach uses ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/bitwalker/distillery"},"distillery")," to\nhandle the release generation. The usual config is documented\n",(0,a.yg)("a",{parentName:"p",href:"https://hexdocs.pm/distillery/introduction/installation.html"},"here"),". An extra\nstep is necessary to copy the crosscompile elixir and erlang libraries to the\nrelease package. The following code show the additional configuration:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-erlang"},'environment :prod do\n  # MIX_TARGET_INCLUDE_ERTS is set by meta-erlang/classes/mix.bbclass\n  set include_erts: System.get_env("MIX_TARGET_INCLUDE_ERTS")\n  set include_src: false\n  set cookie: :"d.K@rG|YpY`|?i&]Fsdljji)JMhk)%j)}f|Y6cquU!He<]u=sHp`.o2p[I3ee]gD"\n  set vm_args: "rel/vm.args"\nend\n')),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"include_erts")," distillery config will use the value from\nMIX_TARGET_INCLUDE_ERTS variable."),(0,a.yg)("h3",{id:"release-with-elixir"},"release with Elixir"),(0,a.yg)("p",null,"The mix.bbclass is prepare to handle Elixir releases by default. So, following\nthe procedures about how to configure an Elixir application with\n",(0,a.yg)("a",{parentName:"p",href:"https://hexdocs.pm/mix/Mix.Tasks.Release.html"},"mix release")," should be enough\nfor most of the cases."),(0,a.yg)("p",null,"Be aware that you need to configure the Elixir release parameter ",(0,a.yg)("inlineCode",{parentName:"p"},":include_erts"),"\nto get the value of ",(0,a.yg)("inlineCode",{parentName:"p"},"MIX_TARGET_INCLUDE_ERTS")," environment variable. Like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-elixir"},' releases: [\n          epad: [\n            applications: [\n              epad: :permanent\n            ],\n            steps: [\n              :assemble,\n              :tar\n            ],\n            include_erts: System.get_env("MIX_TARGET_INCLUDE_ERTS")\n          ]\n        ]\n')))}d.isMDXComponent=!0}}]);