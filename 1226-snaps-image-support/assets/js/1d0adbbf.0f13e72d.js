"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4332],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>k});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var r=n.createContext({}),o=function(e){var a=n.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},m=function(e){var a=o(e.components);return n.createElement(r.Provider,{value:a},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=o(t),u=s,k=d["".concat(r,".").concat(u)]||d[u]||c[u]||i;return t?n.createElement(k,p(p({ref:a},m),{},{components:t})):n.createElement(k,p({ref:a},m))}));function k(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,p=new Array(i);p[0]=u;var l={};for(var r in a)hasOwnProperty.call(a,r)&&(l[r]=a[r]);l.originalType=e,l[d]="string"==typeof e?e:s,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87870:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=t(87462),s=(t(67294),t(3905));const i={description:"Display custom user interface components.",sidebar_position:1},p="Custom UI",l={unversionedId:"features/custom-ui",id:"features/custom-ui",title:"Custom UI",description:"Display custom user interface components.",source:"@site/snaps/features/custom-ui.md",sourceDirName:"features",slug:"/features/custom-ui",permalink:"/1226-snaps-image-support/snaps/features/custom-ui",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Display custom user interface components.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Features",permalink:"/1226-snaps-image-support/snaps/features"},next:{title:"Localization",permalink:"/1226-snaps-image-support/snaps/features/localization"}},r={},o=[{value:"Components",id:"components",level:2},{value:"<code>address</code>",id:"address",level:3},{value:"Example",id:"example",level:4},{value:"<code>copyable</code>",id:"copyable",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>divider</code>",id:"divider",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>heading</code>",id:"heading",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>image</code>",id:"image",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>panel</code>",id:"panel",level:3},{value:"Example",id:"example-5",level:4},{value:"<code>row</code>",id:"row",level:3},{value:"Example",id:"example-6",level:4},{value:"<code>spinner</code>",id:"spinner",level:3},{value:"Example",id:"example-7",level:4},{value:"<code>text</code>",id:"text",level:3},{value:"Example",id:"example-8",level:4},{value:"Markdown",id:"markdown",level:2},{value:"Example",id:"example-9",level:4},{value:"Links",id:"links",level:2},{value:"Example",id:"example-10",level:4},{value:"Emojis",id:"emojis",level:2},{value:"Example",id:"example-11",level:4},{value:"Examples",id:"examples",level:2}],m={toc:o},d="wrapper";function c(e){let{components:a,...i}=e;return(0,s.kt)(d,(0,n.Z)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"custom-ui"},"Custom UI"),(0,s.kt)("p",null,"You can display custom user interface (UI) components using the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/snaps-sdk"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/snaps-sdk"))," module with\nthe following methods and entry points:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/snaps/reference/snaps-api#snap_dialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/snaps/reference/entry-points#ontransaction"},(0,s.kt)("inlineCode",{parentName:"a"},"onTransaction"))," "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/1226-snaps-image-support/snaps/reference/entry-points#onhomepage"},(0,s.kt)("inlineCode",{parentName:"a"},"onHomePage")))),(0,s.kt)("p",null,"To use custom UI, first install ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/snaps-sdk"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/snaps-sdk")),"\nusing the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/snaps-sdk\n")),(0,s.kt)("p",null,"Then, whenever you're required to return a custom UI component, import the components from the\nSDK and build your UI with them.\nFor example, to display a ",(0,s.kt)("a",{parentName:"p",href:"#panel"},(0,s.kt)("inlineCode",{parentName:"a"},"panel"))," using ",(0,s.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/snaps/reference/snaps-api#snap_dialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog")),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { panel, heading, text } from "@metamask/snaps-sdk";\n\nawait snap.request({\n    method: "snap_dialog",\n    params: {\n        type: "alert",\n        content: panel([\n            heading("Alert heading"),\n            text("Something happened in the system."),\n        ]),\n    },\n});\n')),(0,s.kt)("h2",{id:"components"},"Components"),(0,s.kt)("p",null,"The following custom UI components are available:"),(0,s.kt)("h3",{id:"address"},(0,s.kt)("inlineCode",{parentName:"h3"},"address")),(0,s.kt)("p",null,"Outputs a formatted text field for an Ethereum address.\nThe address is automatically displayed with a jazzicon and truncated value.\nHovering the address shows the full value in a tooltip."),(0,s.kt)("h4",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { panel, heading, address } from "@metamask/snaps-sdk";\n\nawait snap.request({\n    method: "snap_dialog",\n    params: {\n        type: "alert",\n        content: panel([\n            heading("Are you sure you want to send tokens to this address?"),\n            address("0x000000000000000000000000000000000000dEaD"),\n        ]),\n    },\n});\n')),(0,s.kt)("div",{class:"row"},(0,s.kt)("div",{class:"column"},(0,s.kt)("img",{src:t(66595).Z,alt:"Address UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("div",{class:"column"},(0,s.kt)("img",{src:t(2557).Z,alt:"Address tooltip UI example",width:"450px",style:{border:"1px solid #DCDCDC"}}))),(0,s.kt)("h3",{id:"copyable"},(0,s.kt)("inlineCode",{parentName:"h3"},"copyable")),(0,s.kt)("p",null,"Outputs a read-only text field with a copy-to-clipboard shortcut."),(0,s.kt)("h4",{id:"example-1"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { text, copyable } from "@metamask/snaps-sdk";\n\nawait snap.request({\n    method: "snap_dialog",\n    params: {\n        type: "alert",\n        content: panel([\n            text("Your address:"),\n            copyable("0x000000000000000000000000000000000000dEaD"),\n        ]),\n    },\n});\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(22098).Z,alt:"Copyable UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h3",{id:"divider"},(0,s.kt)("inlineCode",{parentName:"h3"},"divider")),(0,s.kt)("p",null,"Outputs a horizontal divider."),(0,s.kt)("h4",{id:"example-2"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, divider, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n    return {\n        content: panel([\n            heading("Hello world!"),\n            divider(),\n            text("Welcome to my Snap home page!"),\n        ]),\n    };\n};\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(57757).Z,alt:"Divider UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h3",{id:"heading"},(0,s.kt)("inlineCode",{parentName:"h3"},"heading")),(0,s.kt)("p",null,"Outputs a heading.\nThis is useful for ",(0,s.kt)("a",{parentName:"p",href:"#panel"},(0,s.kt)("inlineCode",{parentName:"a"},"panel"))," titles."),(0,s.kt)("h4",{id:"example-3"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n    return {\n        content: panel([\n            heading("Hello world!"),\n            text("Welcome to my Snap home page!"),\n        ]),\n    };\n};\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(61224).Z,alt:"Divider UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h3",{id:"image"},(0,s.kt)("inlineCode",{parentName:"h3"},"image")),(0,s.kt)("p",null,"Outputs an image.\nThis component takes an inline SVG.\nIt does not support remote URLs."),(0,s.kt)("p",null,"You can import SVG, PNG, and JPEG files using an import statement.\nThese files are automatically imported as SVG strings, so you can pass them directly to the ",(0,s.kt)("inlineCode",{parentName:"p"},"image")," component."),(0,s.kt)("p",null,"The SVG is rendered within an ",(0,s.kt)("inlineCode",{parentName:"p"},"<img>")," tag, which prevents JavaScript or interaction events from\nbeing supported."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"To disable image support, set the ",(0,s.kt)("a",{parentName:"p",href:"/1226-snaps-image-support/snaps/reference/cli/options#featuresimages"},(0,s.kt)("inlineCode",{parentName:"a"},"features.images")),"\nconfiguration option to ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),".\nThe default is ",(0,s.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,s.kt)("h4",{id:"example-4"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text, image } from "@metamask/snaps-sdk";\nimport svgIcon from "./path/to/icon.svg";\n\nmodule.exports.onHomePage = async () => {\n    return {\n        content: panel([\n            heading("Hello world!"),\n            text("Welcome to my Snap home page!"),\n            image(svgIcon),\n        ]),\n    };\n};\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(73785).Z,alt:"Divider UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"See the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/images"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/images-example-snap")),"\npackage for a full example of implementing images.")),(0,s.kt)("h3",{id:"panel"},(0,s.kt)("inlineCode",{parentName:"h3"},"panel")),(0,s.kt)("p",null,"Outputs a panel, which can be used as a container for other components.\nThis component takes an array of custom UI components."),(0,s.kt)("h4",{id:"example-5"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onTransaction = async ({ transaction }) => {\n    const gasFeesPercentage = /* Calculate gas fees percentage */;\n    return {\n        content: panel([\n            heading("Transaction insights"),\n            text(\n                `As set up, you are paying **${gasFeesPercentage.toFixed(\n                    2,\n                )}%** in gas fees for this transaction.`,\n            ),\n        ]),\n    };\n};\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(12968).Z,alt:"Panel UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h3",{id:"row"},(0,s.kt)("inlineCode",{parentName:"h3"},"row")),(0,s.kt)("p",null,"Outputs a row with a label and value, which can be used for key-value data.\nThe label must be a string. The value can be a child component of type\n",(0,s.kt)("a",{parentName:"p",href:"#text"},(0,s.kt)("inlineCode",{parentName:"a"},"text"))," or ",(0,s.kt)("a",{parentName:"p",href:"#address"},(0,s.kt)("inlineCode",{parentName:"a"},"address")),"."),(0,s.kt)("h4",{id:"example-6"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { panel, row, text, address } from "@metamask/snaps-sdk";\n\nawait snap.request({\n    method: "snap_dialog",\n    params: {\n        type: "alert",\n        content: panel([\n            row("Address", address("0x000000000000000000000000000000000000dEaD")),\n            row("Balance", text("1.78 ETH")),\n        ]),\n    },\n});\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(27312).Z,alt:"Row UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h3",{id:"spinner"},(0,s.kt)("inlineCode",{parentName:"h3"},"spinner")),(0,s.kt)("p",null,"Outputs a loading indicator."),(0,s.kt)("h4",{id:"example-7"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { panel, heading, spinner } from "@metamask/snaps-sdk";\n\nawait snap.request({\n    method: "snap_dialog",\n    params: {\n        type: "alert",\n        content: panel([\n            heading("Please wait..."),\n            spinner(),\n        ]),\n    },\n});\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(38608).Z,alt:"Spinner UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h3",{id:"text"},(0,s.kt)("inlineCode",{parentName:"h3"},"text")),(0,s.kt)("p",null,"Outputs text. "),(0,s.kt)("h4",{id:"example-8"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n    return {\n        content: panel([\n            heading("Hello world!"),\n            text("Welcome to my Snap home page!"),\n        ]),\n    };\n};\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(61224).Z,alt:"Spinner UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h2",{id:"markdown"},"Markdown"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"#text"},(0,s.kt)("inlineCode",{parentName:"a"},"text"))," components accept bold and italic inline Markdown."),(0,s.kt)("h4",{id:"example-9"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { panel, heading, text } from "@metamask/snaps-sdk";\n\nawait snap.request({\n    method: "snap_dialog",\n    params: {\n        type: "alert",\n        content: panel([\n            heading("Hello world!"),\n            text("This is **bold** and this is _italic_."),\n        ]),\n    },\n});\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(88639).Z,alt:"Markdown UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h2",{id:"links"},"Links"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"#text"},(0,s.kt)("inlineCode",{parentName:"a"},"text"))," components accept inline links."),(0,s.kt)("h4",{id:"example-10"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n    return {\n        content: panel([\n            heading("Hello world!"),\n            text("Download [MetaMask](https://metamask.io)."),\n            text("Read the MetaMask docs at [](https://docs.metamask.io)."),\n        ]),\n    };\n};\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(12310).Z,alt:"Spinner UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h2",{id:"emojis"},"Emojis"),(0,s.kt)("p",null,"Text-based components (such as ",(0,s.kt)("a",{parentName:"p",href:"#heading"},(0,s.kt)("inlineCode",{parentName:"a"},"heading"))," and ",(0,s.kt)("a",{parentName:"p",href:"#text"},(0,s.kt)("inlineCode",{parentName:"a"},"text")),") accept emojis."),(0,s.kt)("h4",{id:"example-11"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.js"',title:'"index.js"'},'import { panel, heading, text } from "@metamask/snaps-sdk";\n\nawait snap.request({\n    method: "snap_dialog",\n    params: {\n        type: "alert",\n        content: panel([\n            heading("Hello world!"),\n            text("This is an apple \ud83c\udf4e and this is an orange \ud83c\udf4a."),\n        ]),\n    },\n});\n')),(0,s.kt)("p",{align:"center"},(0,s.kt)("img",{src:t(34373).Z,alt:"Emojis UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"See the following packages for full examples of implementing custom UI:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/dialogs"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/dialog-example-snap"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/transaction-insights"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/transaction-insight-example-snap"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/home-page"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/home-page-example-snap"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/images"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/images-example-snap")))))}c.isMDXComponent=!0},2557:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-address-tooltip-c0b648ad133522ae5df738c778ce607c.png"},66595:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-address-ba820915e5b30a4fa2444c0218775d79.png"},22098:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-copyable-7a43ac4224f0c82ed081a124e26f4b36.png"},57757:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-divider-bcab9f6e1e050f4816d965cfe4f635e0.png"},34373:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-emojis-7c8bfebfdc0f15a054279edb40b4570e.png"},61224:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-heading-39190ca0fc87ce734cecc2d1da3ff561.png"},73785:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-image-d5d912daf08c5a0e45291974baf662bd.png"},12310:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-links-8190eead9124615dd2a4388492bd8144.png"},88639:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-markdown-9f23c69906bf2052570b625c0a005ca7.png"},12968:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-panel-81c6419831b577f87f2dc974e4073777.png"},27312:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-row-c12f694fc1db2e08563d0a6d0b8891f9.png"},38608:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/custom-ui-spinner-a8fe5ebf65de1dda20bc58e3fcf31e52.gif"}}]);