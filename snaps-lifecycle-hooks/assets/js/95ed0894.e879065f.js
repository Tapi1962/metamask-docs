"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[8360],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Introduction"},s="Integrate your dapp with the MetaMask wallet",l={unversionedId:"index",id:"index",title:"Introduction",description:"Integrate your dapp with MetaMask to interact with your dapp users' Ethereum accounts.",source:"@site/wallet/index.md",sourceDirName:".",slug:"/",permalink:"/snaps-lifecycle-hooks/wallet/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/index.md",tags:[],version:"current",frontMatter:{title:"Introduction"},sidebar:"walletSidebar",next:{title:"How to",permalink:"/snaps-lifecycle-hooks/wallet/how-to"}},i={},p=[{value:"New to dapp development?",id:"new-to-dapp-development",level:2},{value:"Want to use advanced features?",id:"want-to-use-advanced-features",level:2},{value:"Questions?",id:"questions",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrate-your-dapp-with-the-metamask-wallet"},"Integrate your dapp with the MetaMask wallet"),(0,o.kt)("p",null,"Integrate your dapp with MetaMask to interact with your dapp users' Ethereum accounts.\nYou can enable users to connect to their MetaMask wallets from the following dapp platforms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/snaps-lifecycle-hooks/wallet/how-to/connect/set-up-sdk/javascript/"},"Web dapps")," on desktop and mobile browsers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/snaps-lifecycle-hooks/wallet/how-to/connect/set-up-sdk/javascript/"},"Desktop")," and\n",(0,o.kt)("a",{parentName:"li",href:"/snaps-lifecycle-hooks/wallet/how-to/connect/set-up-sdk/mobile/"},"mobile")," dapps"),(0,o.kt)("li",{parentName:"ul"},"Games built on platforms such as ",(0,o.kt)("a",{parentName:"li",href:"/snaps-lifecycle-hooks/wallet/how-to/connect/set-up-sdk/gaming/unity"},"Unity"))),(0,o.kt)("admonition",{title:"Integrate using MetaMask SDK",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/snaps-lifecycle-hooks/wallet/how-to/connect/set-up-sdk/"},"Set up MetaMask SDK")," to start integrating your dapp with MetaMask.\n",(0,o.kt)("a",{parentName:"p",href:"/snaps-lifecycle-hooks/wallet/concepts/sdk/"},"MetaMask SDK")," is a library that provides a reliable, secure, and seamless\nconnection from your dapp to the MetaMask browser extension and MetaMask Mobile."),(0,o.kt)("p",{parentName:"admonition"},"With the SDK installed, your dapp can use the ",(0,o.kt)("a",{parentName:"p",href:"/snaps-lifecycle-hooks/wallet/concepts/apis"},"MetaMask Ethereum provider API"),"\nto request users' Ethereum accounts, read data from blockchains the user is connected to, suggest\nthat the user sign messages and transactions, and more.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"This documentation assumes intermediate knowledge of JavaScript, HTML, and CSS."),(0,o.kt)("li",{parentName:"ul"},"To learn how to extend the functionality of MetaMask, visit the\n",(0,o.kt)("a",{parentName:"li",href:"../snaps"},"MetaMask Snaps developer documentation"),"."))),(0,o.kt)("h2",{id:"new-to-dapp-development"},"New to dapp development?"),(0,o.kt)("p",null,"If you're new to dapp development or want to refresh your knowledge, we recommend starting with the\nfollowing guides:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"how-to/get-started-building"},"Get started building a dapp")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"how-to/connect"},"Connect to MetaMask"))),(0,o.kt)("p",null,"For an end-to-end example, you can also follow the\n",(0,o.kt)("a",{parentName:"p",href:"/snaps-lifecycle-hooks/wallet/tutorials/react-dapp-local-state"},"Create a simple React dapp")," tutorial."),(0,o.kt)("h2",{id:"want-to-use-advanced-features"},"Want to use advanced features?"),(0,o.kt)("p",null,"If you're a developer looking to optimize your dapp for MetaMask, you can\n",(0,o.kt)("a",{parentName:"p",href:"how-to/connect"},"connect to MetaMask")," from an existing dapp and implement MetaMask-specific\nfunctions, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"how-to/sign-data"},"Sign data")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"how-to/display"},"Display tokens, contract methods, and icons in MetaMask")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/snaps-lifecycle-hooks/wallet/how-to/interact-with-smart-contracts/"},"Interact with smart contracts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/snaps-lifecycle-hooks/wallet/how-to/access-provider"},"Access a user's MetaMask provider"))),(0,o.kt)("h2",{id:"questions"},"Questions?"),(0,o.kt)("p",null,"If you have questions about integrating your dapp with MetaMask, you can interact with the MetaMask\nteam and community on the MetaMask channels on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/consensys"},"Consensys Discord"),"."))}d.isMDXComponent=!0}}]);