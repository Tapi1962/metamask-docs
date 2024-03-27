"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),s=a(86010),o=a(12466),i=a(70989),l=a(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(d(t),l(n))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:k,onClick:m},o,{className:(0,s.Z)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function c(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",p.tabList)},r.createElement(u,(0,n.Z)({},e,t)),r.createElement(c,(0,n.Z)({},e,t)))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>d});var n=a(67294),r=a(16550),s=a(91980),o=a(67392),i=a(50012);function l(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??l(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:a}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,m]=c({queryString:a,groupId:r}),[k,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=d??k;return u({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),h(e)}),[m,h,s]),tabValues:s}}},51828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(65488),o=a(85162);const i={description:"Learn about MetaMask SDK.",sidebar_position:3,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},l="About MetaMask SDK",p={unversionedId:"concepts/sdk/index",id:"concepts/sdk/index",title:"About MetaMask SDK",description:"Learn about MetaMask SDK.",source:"@site/wallet/concepts/sdk/index.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/",permalink:"/1226-snaps-image-support/wallet/concepts/sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/index.md",tags:[{label:"JavaScript SDK",permalink:"/1226-snaps-image-support/wallet/tags/java-script-sdk"},{label:"iOS SDK",permalink:"/1226-snaps-image-support/wallet/tags/i-os-sdk"},{label:"Android SDK",permalink:"/1226-snaps-image-support/wallet/tags/android-sdk"},{label:"Unity SDK",permalink:"/1226-snaps-image-support/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about MetaMask SDK.",sidebar_position:3,tags:["JavaScript SDK","iOS SDK","Android SDK","Unity SDK"]},sidebar:"walletSidebar",previous:{title:"About the Wallet API",permalink:"/1226-snaps-image-support/wallet/concepts/wallet-api"},next:{title:"SDK connections",permalink:"/1226-snaps-image-support/wallet/concepts/sdk/connections"}},u={},c=[{value:"Benefits of MetaMask SDK",id:"benefits-of-metamask-sdk",level:2},{value:"User experience",id:"user-experience",level:2}],d={toc:c},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-metamask-sdk"},"About MetaMask SDK"),(0,r.kt)("p",null,"MetaMask SDK is a library that provides a reliable, secure, and seamless connection from your dapp\nto the MetaMask browser extension and MetaMask Mobile.\nYou can install the SDK in existing dapps, and call any ",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/wallet/concepts/wallet-api"},"Wallet API")," methods from\nyour dapp.\nGet started ",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/"},"using the SDK"),"."),(0,r.kt)("h2",{id:"benefits-of-metamask-sdk"},"Benefits of MetaMask SDK"),(0,r.kt)("p",null,"MetaMask SDK enables your dapp to provide a seamless user experience for MetaMask users, from\nmultiple dapp platforms, without relying on third-party libraries.\nBy integrating your dapp using the SDK, millions of MetaMask Mobile users can connect to their\npreferred MetaMask client.\nThe SDK uses the ",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/wallet/concepts/wallet-api#ethereum-provider-api"},"MetaMask Ethereum provider"),", so existing\ndapps work out of the box with the SDK."),(0,r.kt)("p",null,"The following table outlines some of the features available when you integrate your dapp with\nMetaMask using the SDK.\nMost of these features are not available if you only integrate your dapp directly using the\n",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/wallet/concepts/wallet-api"},"Wallet API"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Wallet API only"),(0,r.kt)("th",{parentName:"tr",align:"center"},"MetaMask SDK"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connect from a web dapp to the MetaMask extension"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connect from a web dapp to MetaMask Mobile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connect from desktop, mobile, and gaming dapps to MetaMask Mobile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use custom RPC methods such as ",(0,r.kt)("a",{parentName:"td",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/javascript/connect-and-sign"},(0,r.kt)("inlineCode",{parentName:"a"},"connectAndSign"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/javascript/display-custom-modals"},"Display custom modals")," in MetaMask"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/javascript/make-read-only-requests"},"Make read-only requests")," using the Infura API"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/javascript/batch-json-rpc-requests"},"Batch multiple RPC requests")),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,r.kt)("h2",{id:"user-experience"},"User experience"),(0,r.kt)("p",null,"The following are examples of how a user experiences a dapp with the SDK installed, on various platforms."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Desktop browser",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your web dapp on a desktop browser that doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"100%",controls:!0},(0,r.kt)("source",{src:"/sdk-desktop.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))),(0,r.kt)(o.Z,{value:"Mobile browser",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your web dapp on a mobile browser, the SDK automatically deeplinks to MetaMask\nMobile (or if the user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"300",controls:!0},(0,r.kt)("source",{src:"/sdk-mobile-browser.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"example JavaScript dapps"),"\nin the JavaScript SDK GitHub repository for advanced use cases.")))),(0,r.kt)(o.Z,{value:"iOS",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your iOS dapp, the SDK automatically deeplinks to MetaMask Mobile (or if the\nuser doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"300",controls:!0},(0,r.kt)("source",{src:"/sdk-ios.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/mobile/ios"},"setting up the SDK in your iOS dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-ios-sdk"},"example iOS dapp")," in the iOS SDK GitHub\nrepository for advanced use cases.")))),(0,r.kt)(o.Z,{value:"Android",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Android dapp, the SDK automatically deeplinks to MetaMask Mobile (or if\nthe user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"300",controls:!0},(0,r.kt)("source",{src:"/sdk-android.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/mobile/android"},"setting up the SDK in your Android dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"example Android dapp")," in\nthe Android SDK GitHub repository and the ",(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/wallet/concepts/sdk/android"},"Android SDK architecture")," for more information.")))),(0,r.kt)(o.Z,{value:"Node.js",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"625",controls:!0},(0,r.kt)("source",{src:"/sdk-nodejs.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/javascript/nodejs"},"setting up the SDK in your Node.js dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs"},"example Node.js dapp"),"\nin the Node.js SDK GitHub repository for advanced use cases.")))),(0,r.kt)(o.Z,{value:"Unity",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Unity game, the SDK renders a QR code in the game UI using a dedicated\nprefab which players can scan with their MetaMask Mobile app.\nIt also supports deeplinking on mobile platforms, as demonstrated in the following screen recording."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"300",controls:!0},(0,r.kt)("source",{src:"/sdk-unity.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/wallet/how-to/use-sdk/gaming/unity/"},"setting up the SDK in your Unity game"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/decentralization/demo-game-dragon-crasher-with-metamask-sdk-infura-and-truffle-249789"},"Unity demo game with the SDK installed"),"\nfor advanced use cases."))))),(0,r.kt)("p",null,"You can read more about the ",(0,r.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/wallet/concepts/sdk/connections"},"connection flow between the SDK and MetaMask"),"."))}k.isMDXComponent=!0}}]);