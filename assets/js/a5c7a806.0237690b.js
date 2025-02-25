"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[9040],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),p=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),m=p(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,i(i({ref:e},s),{},{components:r})):n.createElement(f,i({ref:e},s))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[m]="string"==typeof t?t:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5818:(t,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i=void 0,c={unversionedId:"data-sources/promoterai-json",id:"data-sources/promoterai-json",title:"promoterai-json",description:"| Field           |  Type   | Notes                                                                     |",source:"@site/docs/data-sources/promoterai-json.md",sourceDirName:"data-sources",slug:"/data-sources/promoterai-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/promoterai-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/data-sources/promoterai-json.md",tags:[],version:"current",frontMatter:{}},l=[],p={toc:l},s="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"promoterAI": [\n    {\n      "strand": 1,\n      "distanceFromTss": -292,\n      "geneId": "ENSG00000274391",\n      "transcriptId": "ENST00000618007.5",\n      "score": 0.032\n    }\n]\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"strand"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Strand location of the transcript")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"distanceFromTss"),(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of nucleotides calculated from TSS of teh corresponding transcript")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"geneId"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Gene ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"transcriptId"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Transcript ID (Ensembl)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"score"),(0,a.kt)("td",{parentName:"tr",align:"center"},"decimal"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Calculated Promoter AI score")))))}m.isMDXComponent=!0}}]);