"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5084],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||s;return t?a.createElement(f,r(r({ref:n},m),{},{components:t})):a.createElement(f,r({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66806:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const s={description:"Resolve names to addresses and vice versa.",sidebar_position:6,sidebar_custom_props:{flask_only:!0}},r="Custom name resolution",i={unversionedId:"features/custom-name-resolution",id:"features/custom-name-resolution",title:"Custom name resolution",description:"Resolve names to addresses and vice versa.",source:"@site/snaps/features/custom-name-resolution.md",sourceDirName:"features",slug:"/features/custom-name-resolution",permalink:"/1226-snaps-image-support/snaps/features/custom-name-resolution",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-name-resolution.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Resolve names to addresses and vice versa.",sidebar_position:6,sidebar_custom_props:{flask_only:!0}},sidebar:"snapsSidebar",previous:{title:"Static files",permalink:"/1226-snaps-image-support/snaps/features/static-files"},next:{title:"Signature insights",permalink:"/1226-snaps-image-support/snaps/features/signature-insights"}},p={},l=[{value:"Steps",id:"steps",level:2},{value:"1. Request permission to provide name resolution",id:"1-request-permission-to-provide-name-resolution",level:3},{value:"2. Implement custom name resolution",id:"2-implement-custom-name-resolution",level:3},{value:"Example",id:"example",level:2}],m={toc:l},u="wrapper";function c(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-name-resolution"},"Custom name resolution"),(0,o.kt)("admonition",{type:"flaskOnly"}),(0,o.kt)("p",null,"You can implement custom domain resolution and reverse resolution using the following steps."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("h3",{id:"1-request-permission-to-provide-name-resolution"},"1. Request permission to provide name resolution"),(0,o.kt)("p",null,"Request the ",(0,o.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/snaps/reference/permissions#endowmentname-lookup"},(0,o.kt)("inlineCode",{parentName:"a"},"endowment:name-lookup"))," permission."),(0,o.kt)("p",null,"For example, to resolve Ethereum Mainnet domains, add the following to your Snap's manifest file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n    "endowment:name-lookup": {\n        "chains": ["eip155:1"]\n    }\n}\n')),(0,o.kt)("h3",{id:"2-implement-custom-name-resolution"},"2. Implement custom name resolution"),(0,o.kt)("p",null,"Expose an ",(0,o.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/snaps/reference/entry-points#onnamelookup"},(0,o.kt)("inlineCode",{parentName:"a"},"onNameLookup"))," entry point, which receives a\n",(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," and either a ",(0,o.kt)("inlineCode",{parentName:"p"},"domain")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),".\nThe following example implements a very basic resolution from Unstoppable Domains domain names to\nEthereum addresses in ",(0,o.kt)("inlineCode",{parentName:"p"},"onNameLookup"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},'import type { OnNameLookupHandler } from "@metamask/snaps-types";\n\nconst UNSTOPPABLE_API_KEY = "xxx";\n\nexport const onNameLookup: OnNameLookupHandler = async (request) => {\n    const { chainId, domain } = request;\n\n    if (domain && chainId === "eip155:1") {\n        const response = await fetch(`https://api.unstoppabledomains.com/resolve/domains/${domain}`, {\n            headers: {\n                accept: "application/json",\n                authorization: `Bearer ${UNSTOPPABLE_API_KEY}`,\n            },\n        });\n        const data = await response.json();\n        const resolvedAddress = data.records["crypto.ETH.address"];\n        if (address) {\n            return {\n                resolvedAddresses: [{ resolvedAddress, protocol: "Unstoppable Domains" }],\n            };\n        }\n    }\n\n    return null;\n};\n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/name-lookup"},(0,o.kt)("inlineCode",{parentName:"a"},"@metamask/name-lookup-example-snap")),"\npackage for a full example of implementing custom name resolution."))}c.isMDXComponent=!0}}]);