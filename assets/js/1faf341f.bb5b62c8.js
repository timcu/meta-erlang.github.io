"use strict";(self.webpackChunkmeta_erlang_github_io=self.webpackChunkmeta_erlang_github_io||[]).push([[9495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:5,description:"Building your own SDKs."},i="Building SDKs",s={unversionedId:"guides/guides-development",id:"guides/guides-development",title:"Building SDKs",description:"Building your own SDKs.",source:"@site/docs/guides/guides-development.md",sourceDirName:"guides",slug:"/guides/guides-development",permalink:"/docs/guides/guides-development",draft:!1,editUrl:"https://github.com/meta-erlang/meta-erlang.github.io/tree/master/docs/guides/guides-development.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Building your own SDKs."},sidebar:"tutorialSidebar",previous:{title:"Hello World examples for meta-erlang",permalink:"/docs/guides/guides-hello-world"},next:{title:"BEAM Tools",permalink:"/docs/guides/guides-beamtools"}},l={},c=[{value:"SDK for Erlang and Elixir",id:"sdk-for-erlang-and-elixir",level:2},{value:"Standard SDK",id:"standard-sdk",level:3},{value:"Extensible SDK",id:"extensible-sdk",level:3},{value:"Development session example",id:"development-session-example",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-sdks"},"Building SDKs"),(0,o.kt)("h2",{id:"sdk-for-erlang-and-elixir"},"SDK for Erlang and Elixir"),(0,o.kt)("p",null,"The meta-erlang layers includes the possibility to generate development\ntoolchains enabling better and smooth experience for the developer."),(0,o.kt)("p",null,"One could easily generates a specific SDK with all tools and libraries needed.\nFor example: if your project needs Erlang 22.1.8 and Elixir 1.10, you can\ngenerate a SDK having these two dependencies. Then all the developers can share\nand use the same SDK during the development phase."),(0,o.kt)("p",null,"In order to use a specific Erlang and Elixir versions, configure the following\nvariables in the file\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.yoctoproject.org/ref-manual/terms.html?highlight=local%20conf#term-Configuration-File"},"conf/local.conf or in the distro configuration file"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'PREFERRED_VERSION_erlang = "23.0.4"\nPREFERRED_VERSION_erlang-native = "23.0.4"\nPREFERRED_VERSION_nativesdk-erlang = "23.0.4"\n\nPREFERRED_VERSION_elixir = "1.11.2"\nPREFERRED_VERSION_elixir-native = "1.11.2"\nPREFERRED_VERSION_nativesdk-elixir = "1.11.2"\n')),(0,o.kt)("p",null,"Maybe your team have special version of Erlang or Elixir with some in-house\npatches, using a SDK created by YP is a good approach to follow. You will have\ntotal control from the build until development SDK installation."),(0,o.kt)("p",null,"Also the SDK have all the dependencies to cross compile applications for target\nhardware. So the developer has just one installation to perform in order to\naccess all the tools."),(0,o.kt)("p",null,"The recipe\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/meta-erlang/meta-erlang/tree/master/recipes-core/meta/meta-erlang-toolchain.bb"},"meta-erlang-toolchain"),"\nis the main entry point when creating a generic toolchain with Erlang and\nElixir. And comes with Erlang, Elixir development modules as well rebar3 build\ntool."),(0,o.kt)("p",null,"!> The follow two sections are based on\n",(0,o.kt)("a",{parentName:"p",href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html"},"Yocto Project Application Development and the Extensible Software Development Kit (eSDK)"),'\nfor Yocto Project 3.1.3 LTS "Dunfell". To get an up-to-date documentation,\nplease, visit the\n',(0,o.kt)("a",{parentName:"p",href:"https://docs.yoctoproject.org/index.html"},"Yocto Project Documentation")),(0,o.kt)("h3",{id:"standard-sdk"},"Standard SDK"),(0,o.kt)("p",null,"Using the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-using-the-standard-sdk"},"Standard SDK"),"\nis simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bitbake meta-erlang-toolchain\n")),(0,o.kt)("p",null,"After finishing the SDK generation command, check the YP\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.yoctoproject.org/ref-manual/ref-variables.html#term-TMPDIR"},"TMPDIR"),".\nA new file has been created like this:\n",(0,o.kt)("em",{parentName:"p"},"poky-glibc-x86_64-meta-erlang-toolchain-armv7vet2hf-neon-qemuarm-toolchain-3.1.3.sh"),".\nThe file name depends on many factors like machine configuration and YP version."),(0,o.kt)("p",null,"The next step is run the toolchain installation script, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'~/work/opensource/build/tmp/deploy/sdk/poky-glibc-x86_64-meta-erlang-toolchain-armv7vet2hf-neon-qemuarm-toolchain-3.1.3.sh\nPoky (Yocto Project Reference Distro) SDK installer version 3.1.3\n=================================================================\nEnter target directory for SDK (default: /opt/poky/3.1.3): /opt/poky/3.1.3\nYou are about to install the SDK to "/opt/poky/3.1.3". Proceed [Y/n]?\nExtracting SDK.............................................done\nSetting it up...done\nSDK has been successfully set up and is ready to be used.\nEach time you wish to use the SDK in a new shell session, you need to source the environment setup script e.g.\n $ . /opt/poky/3.1.3/environment-setup-armv7vet2hf-neon-poky-linux-gnueabi\n')),(0,o.kt)("p",null,"As the last sentence says, just source the file\n",(0,o.kt)("em",{parentName:"p"},"environment-setup-armv7vet2hf-neon-poky-linux-gnueabi")," and we ready to use\nErlang and Elixir."),(0,o.kt)("p",null,"!> If you need to customize the toolchain, i.e: add or remove tools, YP supports\n",(0,o.kt)("a",{parentName:"p",href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-appendix-customizing-standard"},"customize the Standard SDK"),"."),(0,o.kt)("h3",{id:"extensible-sdk"},"Extensible SDK"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-extensible"},"Extensible SDK"),"\nis the newly way in order to create SDK with YP. It includes the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#using-devtool-in-your-sdk-workflow"},"devtool"),"\ntool to help the development workflow when working with new recipes or testing\nwith the target hardware."),(0,o.kt)("p",null,"The instructions for generating an eSDK is as follow:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bitbake core-image-minimal -c populate_sdk_ext\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"populate_sdk_ext")," works only with image recipes. After finishing the\ncommand, it is time to install the SDK like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'joaohf@porco:~/tmp/poky$ ~/work/opensource/build/tmp/deploy/sdk/poky-glibc-x86_64-core-image-minimal-armv7vet2hf-neon-qemuarm-toolchain-ext-3.1.3.sh\nPoky (Yocto Project Reference Distro) Extensible SDK installer version 3.1.3\n============================================================================\nEnter target directory for SDK (default: ~/poky_sdk):\nYou are about to install the SDK to "/home/joaohf/poky_sdk". Proceed [Y/n]?\nExtracting SDK..................................................done\nSetting it up...\nExtracting buildtools...\nPreparing build system...\nWARNING: /home/joaohf/poky_sdk/layers/poky/meta-axon/recipes-support/glfw/glfw_3.2.1.bb: distro_features_check.bbclass is deprecated, please use features_check.bbclass instead\nParsing recipes: 100% |#########################################################################################################################################| Time: 0:02:14\nInitialising tasks: 100% |######################################################################################################################################| Time: 0:00:01\nLoading cache: 100% |###########################################################################################################################################| Time: 0:00:00\nInitialising tasks: 100% |######################################################################################################################################| Time: 0:00:00\ndone\nSDK has been successfully set up and is ready to be used.\nEach time you wish to use the SDK in a new shell session, you need to source the environment setup script e.g.\n $ . /home/joaohf/poky_sdk/environment-setup-armv7vet2hf-neon-poky-linux-gnueabi\n')),(0,o.kt)("p",null,"Source the environment setup script for each new shell session that you want to\nuse the SDK."),(0,o.kt)("p",null,"!> Additional tools can also be included if needed, checkout the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#sdk-appendix-customizing"},"Customizing the Extensible SDK"),"\ndocumentation."),(0,o.kt)("h2",{id:"development-session-example"},"Development session example"),(0,o.kt)("p",null,"This section shows an example about how to use the SDK during a development\nsession and exploring how we can use the command\n",(0,o.kt)("a",{parentName:"p",href:"https://www.yoctoproject.org/docs/3.1.3/sdk-manual/sdk-manual.html#using-devtool-in-your-sdk-workflow"},"devtool"),"\nto help fixing a bug in an Erlang application."),(0,o.kt)("p",null,"We are going to perform the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"created a new bitbake recipe for an Erlang application"),(0,o.kt)("li",{parentName:"ul"},"build the recipe"),(0,o.kt)("li",{parentName:"ul"},"create an image and run it using QEMU"),(0,o.kt)("li",{parentName:"ul"},"execute the Erlang application on QEMU"),(0,o.kt)("li",{parentName:"ul"},"make a change in the application and use hot code swapping to change the\napplication, that is, without stop the running application or restart the QEMU\nmachine"),(0,o.kt)("li",{parentName:"ul"},"clean up the target QEMU"),(0,o.kt)("li",{parentName:"ul"},"finish up the recipe")),(0,o.kt)("p",null,"One can use the same approach when working with a real hardware."),(0,o.kt)("p",null,"!> This session is far from be generic steps in order to develop, build, test\nand deploy Erlang/Elixir projects using Yocto Project. The purpose here is just\nto demonstrate one of multiple workflows."),(0,o.kt)("p",null,"Let's start loading the SDK setup environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ~/poky_sdk\n$ source environment-setup-armv7vet2hf-neon-poky-linux-gnueabi\nSDK environment now set up; additionally you may now run devtool to perform development tasks.\nRun devtool --help for further details.\n")),(0,o.kt)("p",null,"For this experience we are going to use a small Erlang application called\n",(0,o.kt)("inlineCode",{parentName:"p"},"elock"),". Clone it and build using rebar3 build tool."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/joaohf/elock\n$ cd elock\n$ rebar3 compile\n")),(0,o.kt)("p",null,"Alright, the SDK is working as expected. The rebar3 tool is included into the\nSDK as well all the Erlang development requirements. The next step is create an\nelock bitbake recipe."),(0,o.kt)("p",null,"Still in the elock folder, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"devtool add")," in order to create a standard\nbitbake recipe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool add elock .\nNOTE: Starting bitbake server...\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nNOTE: Reconnecting to bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nNOTE: Retrying server connection (#1)...\nNOTE: Starting bitbake server...\nINFO: Using source tree as build directory since that would be the default for this recipe\nINFO: Recipe /home/joaohf/poky_sdk/workspace/recipes/elock/elock_git.bb has been automatically created; further editing may be required to make it fully functional\n")),(0,o.kt)("p",null,"devtool created a new recipe call elock_git.bb. This recipe does not work\nbecause Yocto Project doesn't know how to read an Erlang/Elixir project and\ngenerate a proper bitbake recipe. So we need to use a rebar3 plugin called\n",(0,o.kt)("a",{parentName:"p",href:"https://hex.pm/packages/rebar3_bitbake"},"rebar3_bitbake")," which knows how to\ncreate a proper recipe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ rebar3 bitbake\n$ cp elock_0.1.0.bb /home/joaohf/poky_sdk/workspace/recipes/elock/elock_git.bb\n")),(0,o.kt)("p",null,"Now, elock recipe is ready. As the last step before the build, let's fix the\nrecipe version because we want to build and release the version 0.1.0. So, still\nusing devtool to change the recipe name do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool rename -V 0.1.0 elock\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:00\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:01\nParsing of 1943 .bb files complete (1937 cached, 6 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nINFO: Renaming /home/joaohf/poky_sdk/workspace/appends/elock_git.bbappend to /home/joaohf/poky_sdk/workspace/appends/elock_0.1.0.bbappend\nINFO: Renaming /home/joaohf/poky_sdk/workspace/recipes/elock/elock_git.bb to /home/joaohf/poky_sdk/workspace/recipes/elock/elock_0.1.0.bb\n")),(0,o.kt)("p",null,"Finally, call devtool to build the elock recipe like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool build elock\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:00\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:04\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nNOTE: Resolving any missing task queue dependencies\nInitialising tasks: 100% |#############################################################################################################################################| Time: 0:00:00\nSstate summary: Wanted 13 Found 1 Missed 12 Current 137 (7% match, 92% complete)\nNOTE: Executing Tasks\nNOTE: elock: compiling from external source tree /home/joaohf/work/projetos/elock\nNOTE: Tasks Summary: Attempted 613 tasks of which 608 didn't need to be rerun and all succeeded.\n")),(0,o.kt)("p",null,"Awesome, everything works. Now we need to build an image which has a working\nLinux distro made with Yocto Project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool build-image core-image-minimal\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:00\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nINFO: Building image core-image-minimal with the following additional packages: elock\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:04\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1941 cached, 2 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nNOTE: Resolving any missing task queue dependencies\nInitialising tasks: 100% |#############################################################################################################################################| Time: 0:00:05\nSstate summary: Wanted 98 Found 1 Missed 97 Current 877 (1% match, 90% complete)\nNOTE: Executing Tasks\nNOTE: Tasks Summary: Attempted 2649 tasks of which 2423 didn't need to be rerun and all succeeded.\nINFO: Successfully built core-image-minimal. You can find output files in /home/joaohf/poky_sdk/tmp/deploy/images/qemuarm\n")),(0,o.kt)("p",null,"So far we build elock application as well the core-image-minimal. Now, it is\ntime to running the image using qemu."),(0,o.kt)("p",null,"Open a new shell session and source again the SDK environment variables. This is\nnecessary because QEMU will block the terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd ~/poky_sdk\n$ source environment-setup-armv7vet2hf-neon-poky-linux-gnueabi\n")),(0,o.kt)("p",null,"And then, start the QEMU:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool runqemu core-image-minimal\n")),(0,o.kt)("p",null,"QEMU will start its booting process and we can connect over ssh to the IP\naddress 192.168.7.2 using ",(0,o.kt)("em",{parentName:"p"},"root")," as ssh user."),(0,o.kt)("p",null,"But our main aim now is to install the elock application into the QEMU instance.\nThe core-image-minimal does not have the elock installed. So, let's install it\nright now calling devtool and the deploy-target subcommand, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool deploy-target elock root@192.168.7.2\nNOTE: Starting bitbake server...\nNOTE: Reconnecting to bitbake server...\nNOTE: Retrying server connection (#1)...\nLoading cache: 100% |##################################################################################################################################################| Time: 0:00:00\nLoaded 3037 entries from dependency cache.\nParsing recipes: 100% |################################################################################################################################################| Time: 0:00:00\nParsing of 1943 .bb files complete (1942 cached, 1 parsed). 3038 targets, 113 skipped, 0 masked, 0 errors.\nINFO: Successfully deployed /home/joaohf/poky_sdk/tmp/work/armv7vet2hf-neon-poky-linux-gnueabi/elock/0.1.0-r0/image\n")),(0,o.kt)("p",null,"elock has been installed, however it is not started yet. In order to start it\nfor the first time, open a new terminal, connect over ssh and start elock\napplication:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh root@192.168.7.2\nroot@qemuarm:~# cd /usr/lib/elock/bin\nroot@qemuarm:/usr/lib/elock/bin# ./elock\nErlang/OTP 23 [erts-11.1.3] [source] [smp:1:1] [ds:1:1:10] [async-threads:1]\n\n=WARNING REPORT==== 20-Nov-2020::20:14:43.909058 ===\nSetting Ranch options together with socket options is deprecated. Please use the new map syntax that allows specifying socket options separately from other options.\n\nEshell V11.1.3  (abort with ^G)\n1>\n")),(0,o.kt)("p",null,"Ok, elock is up and running. Back to the development terminal and let's test if\nelock is working:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ssh -p 4050 admin@192.168.7.2\nThe authenticity of host '[192.168.7.2]:4050 ([192.168.7.2]:4050)' can't be established.\nRSA key fingerprint is SHA256:VXMXRo0wQnsCC5rFxuOy4rT3NSc5NLjoxvtcLpa0OFI.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '[192.168.7.2]:4050' (RSA) to the list of known hosts.\nSSH server\nEnter password for \"admin\"\npassword:\nEnter command or `help`\nelock> get_code\n---\x3e {ok,<<\"12345\">>}\nelock> exit\n")),(0,o.kt)("p",null,"Nice, it works! But, we want to change the default code from ",(0,o.kt)("em",{parentName:"p"},"12345")," to ",(0,o.kt)("em",{parentName:"p"},"7777"),".\nWhat we are going to do is fix the default code, redeploy and verify if the hot\nswap code worked as expected:"),(0,o.kt)("p",null,"Change the elock application like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'diff --git a/src/elock_statem.erl b/src/elock_statem.erl\nindex fc0b10e..3f88dd4 100644\n--- a/src/elock_statem.erl\n+++ b/src/elock_statem.erl\n@@ -24,7 +24,7 @@ get_timeout() ->\n set_timeout(Tmo) -> ok.\n\n get_code() ->\n-    {ok, <<"12345">>}.\n+    {ok, <<"77777">>}.\n')),(0,o.kt)("p",null,"Build the recipe with the changes made."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool build elock\n")),(0,o.kt)("p",null,"And deploy elock. The deploy-target subcommand will take care about copying the\nfiles to the target directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool deploy-target elock root@192.168.7.2\n")),(0,o.kt)("p",null,"Switch to the ssh session and load the elock_statem code using\n",(0,o.kt)("inlineCode",{parentName:"p"},"code:load_file/1"),". This is the most basic way to perform hot code swapping."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"code:load_file(elock_statem).\n{module,elock_statem}\n")),(0,o.kt)("p",null,"Now, it is time to connect again over ssh 4050 port and check if the new pass\ncode takes effect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ssh -p 4050 admin@192.168.7.2\nThe authenticity of host '[192.168.7.2]:4050 ([192.168.7.2]:4050)' can't be established.\nRSA key fingerprint is SHA256:VXMXRo0wQnsCC5rFxuOy4rT3NSc5NLjoxvtcLpa0OFI.\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\nWarning: Permanently added '[192.168.7.2]:4050' (RSA) to the list of known hosts.\nSSH server\nEnter password for \"admin\"\npassword:\nEnter command or `help`\nelock> get_code\n---\x3e {ok,<<\"77777\">>}\n")),(0,o.kt)("p",null,"It works! We are very very happy with all these changes. Time to clean up the\ntarget hardware, that is, remove the elock files (this is not strict necessary,\nbut just to show that it is possible):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool undeploy-target elock root@192.168.7.2\n")),(0,o.kt)("p",null,"Now, the last step is to finish up all the recipe changes. The subcommand\n",(0,o.kt)("em",{parentName:"p"},"finish")," creates any patches corresponding to commits in the local repository,\nmoves the new recipe to a specific layer and resets the recipe moving it from\nthe workspace to the layer."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ devtool finish -f elock meta-axon\n")),(0,o.kt)("p",null,"Finally, just check the final recipe results:\n",(0,o.kt)("em",{parentName:"p"},"~/poky_sdk/layers/poky/meta-axon/recipes-elock/elock/elock_0.1.0.bb")),(0,o.kt)("p",null,"All done. We've created a recipe, change the Erlang application, deployed it on\nthe target hardware, applied a fix using hot code swapping without stopping the\napplication, checked the fix and finished up the recipe changes."))}u.isMDXComponent=!0}}]);