"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[3389],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),c=p(n),u=a,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(g,i(i({ref:e},m),{},{components:n})):r.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60299:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,l={unversionedId:"data-sources/cosmic-json",id:"version-3.16/data-sources/cosmic-json",title:"cosmic-json",description:"| Field       | Type         | Notes                     |",source:"@site/versioned_docs/version-3.16/data-sources/cosmic-json.md",sourceDirName:"data-sources",slug:"/data-sources/cosmic-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.16/data-sources/cosmic-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.16/data-sources/cosmic-json.md",tags:[],version:"3.16",frontMatter:{}},s=[],p={toc:s},m="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'   "cosmicGeneFusions":[\n      {\n         "id":"COSF881",\n         "numSamples":6,\n         "geneSymbols":[\n            "MYB",\n            "NFIB"\n         ],\n         "hgvsr":"ENST00000341911.5(MYB):r.1_2368::ENST00000397581.2(NFIB):r.2592_3318",\n         "histologies":[\n            {\n               "name":"adenoid cystic carcinoma",\n               "numSamples":6\n            }\n         ],\n         "sites":[\n            {\n               "name":"salivary gland (submandibular)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (parotid)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (nasal cavity)",\n               "numSamples":1\n            },\n            {\n               "name":"breast",\n               "numSamples":3\n            }\n         ],\n         "pubMedIds":[\n            19841262\n         ]\n      }\n   ]\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"id"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"COSMIC fusion ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"geneSymbols"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"hgvsr"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"HGVS RNA translocation fusion notation")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"histologies"),(0,a.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"phenotypic descriptions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"sites"),(0,a.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"tissue types")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int array"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Count")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"name"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"description")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"})))))}c.isMDXComponent=!0}}]);