"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9817],{1310:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(87462),r=n(67294),l=n(86010),i=n(35281),c=n(53438),s=n(48596),o=n(39960),m=n(95999),d=n(44996);function u(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const h={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function b(){const e=(0,d.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(o.Z,{"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(u,{className:h.breadcrumbHomeIcon})))}const f={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function v(e){let{children:t,href:n,isLast:a}=e;const l="breadcrumbs__link";return a?r.createElement("span",{className:l,itemProp:"name"},t):n?r.createElement(o.Z,{className:l,href:n,itemProp:"item"},r.createElement("span",{itemProp:"name"},t)):r.createElement("span",{className:l},t)}function E(e){let{children:t,active:n,index:i,addMicrodata:c}=e;return r.createElement("li",(0,a.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,r.createElement("meta",{itemProp:"position",content:String(i+1)}))}function g(){const e=(0,c.s1)(),t=(0,s.Ns)();return e?r.createElement("nav",{className:(0,l.Z)(i.k.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,m.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(b,null),e.map(((t,n)=>{const a=n===e.length-1;return r.createElement(E,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(v,{href:t.href,isLast:a},t.label))})))):null}},47769:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(67294),r=n(10833),l=n(53438),i=n(44996),c=n(86010),s=n(39960),o=n(13919),m=n(95999),d=n(26112);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F"};function h(e){let{href:t,children:n,flaskOnly:r}=e;return a.createElement(s.Z,{href:t,className:(0,c.Z)("card padding--lg",u.cardContainer,{[d.Z.flaskOnly]:r})},n)}function b(e){let{href:t,icon:n,title:r,description:l,flaskOnly:i}=e;return a.createElement(h,{flaskOnly:i,href:t},a.createElement("h2",{className:(0,c.Z)("text--truncate",u.cardTitle),title:r},n," ",r),l&&a.createElement("p",{className:(0,c.Z)("text--truncate",u.cardDescription),title:l},l))}function f(e){let{item:t}=e;const n=(0,l.Wl)(t);return n?a.createElement(b,{flaskOnly:!!t.customProps?.flask_only,href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,l.xz)(t.docId??void 0);return a.createElement(b,{flaskOnly:!!t.customProps?.flask_only,href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function E(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(v,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,l.jA)();return a.createElement(p,{items:n.items,className:t})}function p(e){const{items:t,className:n}=e;if(!t)return a.createElement(g,e);const r=(0,l.MN)(t);return a.createElement("section",{className:(0,c.Z)("row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(E,{item:e})))))}const N=function(e){return null};var k=n(23120),Z=n(35281),y=n(74477);function _(e){let{className:t}=e;const n=(0,y.E)();return n.badge?a.createElement("span",{className:(0,c.Z)(t,Z.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(m.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}var L=n(1310),T=n(92503);const I={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function C(e){let{categoryGeneratedIndex:t}=e;return a.createElement(r.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.Z)(t.image)})}function w(e){let{categoryGeneratedIndex:t}=e;const n=(0,l.jA)();return a.createElement("div",{className:I.generatedIndexPage},a.createElement(k.Z,null),a.createElement(L.Z,null),a.createElement(_,null),a.createElement("header",null,a.createElement(T.Z,{as:"h1",className:I.title},t.title),t.description&&a.createElement("p",null,t.description)),a.createElement("article",{className:"margin-top--lg"},a.createElement(p,{items:n.items,className:I.list})),a.createElement("footer",{className:"margin-top--lg"},a.createElement(N,{previous:t.navigation.previous,next:t.navigation.next})))}function S(e){return a.createElement(a.Fragment,null,a.createElement(C,e),a.createElement(w,e))}},23120:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(67294),r=n(86010),l=n(52263),i=n(39960),c=n(95999),s=n(94104),o=n(35281),m=n(60373),d=n(74477);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(c.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return a.createElement(t,e)}function b(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(c.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(i.Z,{to:n,onClick:r},a.createElement(c.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,l.Z)(),{pluginId:c}=(0,s.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,m.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:f}=(0,s.Jo)(c),v=u??(E=f).docs.find((e=>e.id===E.mainDocId));var E;return a.createElement("div",{className:(0,r.Z)(t,o.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(h,{siteTitle:i,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(b,{versionLabel:f.label,to:v.path,onClick:()=>d(f.name)})))}function v(e){let{className:t}=e;const n=(0,d.E)();return n.banner?a.createElement(f,{className:t,versionMetadata:n}):null}},92503:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),i=n(95999),c=n(86668),s=n(39960);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},m,{id:void 0}));const u=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return r.createElement(t,(0,a.Z)({},m,{className:(0,l.Z)("anchor",d?o.anchorWithHideOnScrollNavbar:o.anchorWithStickyNavbar,m.className),id:n}),m.children,r.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},26112:(e,t,n)=>{n.d(t,{Z:()=>a});const a={cardContainer:"cardContainer_C0Dw",flaskOnly:"flaskOnly_ADUl",cardTitle:"cardTitle_ZNcV",cardIcon:"cardIcon_naep"}}}]);