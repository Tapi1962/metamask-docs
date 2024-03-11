"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2350],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),l=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),u=l(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:e},p),{},{components:r})):a.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67828:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={description:"Integrate your React dapp with MetaMask.",sidebar_position:2},i="React quickstart",c={unversionedId:"quickstart/react",id:"quickstart/react",title:"React quickstart",description:"Integrate your React dapp with MetaMask.",source:"@site/wallet/quickstart/react.md",sourceDirName:"quickstart",slug:"/quickstart/react",permalink:"/update-snaps-tutorial/wallet/quickstart/react",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/quickstart/react.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Integrate your React dapp with MetaMask.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"JavaScript quickstart",permalink:"/update-snaps-tutorial/wallet/quickstart/javascript"},next:{title:"How to",permalink:"/update-snaps-tutorial/wallet/how-to"}},s={},l=[],p={toc:l},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"react-quickstart"},"React quickstart"),(0,n.kt)("p",null,"This page provides a code sample to quickly connect to your users' MetaMask accounts from a\nReact dapp."),(0,n.kt)("p",null,"Connect to the MetaMask browser extension directly using the ",(0,n.kt)("a",{parentName:"p",href:"/update-snaps-tutorial/wallet/concepts/wallet-api"},"Wallet API"),".\nThis example uses the ",(0,n.kt)("a",{parentName:"p",href:"https://v3.vitejs.dev/guide/"},"Vite")," build tool with React and Typescript, so\nyou can get started quickly with an optimized dapp."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow Step 1 in the ",(0,n.kt)("a",{parentName:"p",href:"/update-snaps-tutorial/wallet/tutorials/react-dapp-local-state"},"React dapp tutorial")," to set up a\nVite project.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the following code to your project file:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="App.tsx"',title:'"App.tsx"'},"import './App.css'\nimport { useState, useEffect } from 'react'\nimport detectEthereumProvider from '@metamask/detect-provider'\n\n// Detect the MetaMask Ethereum provider\n\nconst App = () => {\n  const [hasProvider, setHasProvider] = useState<boolean | null>(null)\n  const initialState = { accounts: [] } \n  const [wallet, setWallet] = useState(initialState) \n\n  useEffect(() => {\n    const getProvider = async () => {\n      const provider = await detectEthereumProvider({ silent: true })\n      setHasProvider(Boolean(provider))\n    }\n    getProvider()\n  }, [])\n\n// Prompt users to connect to MetaMask\n\n  const updateWallet = async (accounts:any) => {\n    setWallet({ accounts })\n  }  \n\n  const handleConnect = async () => {  \n    let accounts = await window.ethereum.request({  method: \"eth_requestAccounts\" })  \n    updateWallet(accounts)   \n  }  \n\n  return (\n    <div className=\"App\">\n      <div>Injected Provider {hasProvider ? 'DOES' : 'DOES NOT'} Exist</div>\n      { hasProvider && \n        <button onClick={handleConnect}>Connect MetaMask</button>\n      }\n      { wallet.accounts.length > 0 &&  \n        <div>Wallet Accounts: { wallet.accounts[0] }</div>\n      }\n    </div>\n  )\n}\nexport default App\n")))))}d.isMDXComponent=!0}}]);