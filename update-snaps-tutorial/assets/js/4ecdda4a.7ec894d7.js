"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2250],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),l=c(n),f=r,d=l["".concat(p,".").concat(f)]||l[f]||m[f]||i;return n?a.createElement(d,s(s({ref:t},u),{},{components:n})):a.createElement(d,s({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={description:"See the Keyring API reference.",sidebar_position:6,tags:["Keyring API"]},s="Keyring API",o={unversionedId:"reference/keyring-api/index",id:"reference/keyring-api/index",title:"Keyring API",description:"See the Keyring API reference.",source:"@site/snaps/reference/keyring-api/index.md",sourceDirName:"reference/keyring-api",slug:"/reference/keyring-api/",permalink:"/update-snaps-tutorial/snaps/reference/keyring-api/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/keyring-api/index.md",tags:[{label:"Keyring API",permalink:"/update-snaps-tutorial/snaps/tags/keyring-api"}],version:"current",sidebarPosition:6,frontMatter:{description:"See the Keyring API reference.",sidebar_position:6,tags:["Keyring API"]},sidebar:"snapsSidebar",previous:{title:"Snaps known errors",permalink:"/update-snaps-tutorial/snaps/reference/known-errors"},next:{title:"Account Management API",permalink:"/update-snaps-tutorial/snaps/reference/keyring-api/account-management/"}},p={},c=[],u={toc:c},l="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(l,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"keyring-api"},"Keyring API"),(0,r.kt)("p",null,"This section provides a detailed reference on the Keyring API methods, objects, and events that\nenable ",(0,r.kt)("a",{parentName:"p",href:"/update-snaps-tutorial/snaps/features/custom-evm-accounts/"},"custom EVM accounts"),".\nThe Keyring API consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/update-snaps-tutorial/snaps/reference/keyring-api/account-management/"},(0,r.kt)("strong",{parentName:"a"},"Account Management API"))," \u2013 An API for dapps to communicate with\naccount management Snaps.\nDapps can manage accounts and signature requests using this API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/update-snaps-tutorial/snaps/reference/keyring-api/chain-methods"},(0,r.kt)("strong",{parentName:"a"},"Chain Methods API"))," - An API that contains chain-specific EVM methods that\naccount management Snaps can choose to implement to support dapp requests from custom accounts.")),(0,r.kt)("admonition",{title:"See also",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/update-snaps-tutorial/snaps/features/custom-evm-accounts/create-account-snap"},"Create an account management Snap"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/update-snaps-tutorial/snaps/features/custom-evm-accounts/security"},"Account management Snap security guidelines")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/update-snaps-tutorial/snaps/features/custom-evm-accounts/create-companion-dapp"},"Create an account management companion dapp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/update-snaps-tutorial/snaps/features/custom-evm-accounts/"},"Custom EVM accounts")))))}m.isMDXComponent=!0}}]);