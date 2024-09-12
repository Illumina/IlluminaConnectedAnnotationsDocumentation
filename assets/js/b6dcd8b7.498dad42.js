"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[6458],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),c=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(m.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(n),u=r,f=s["".concat(m,".").concat(u)]||s[u]||d[u]||i;return n?a.createElement(f,l(l({ref:e},p),{},{components:n})):a.createElement(f,l({ref:e},p))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[s]="string"==typeof t?t:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},525:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,o={unversionedId:"data-sources/cosmic-json",id:"data-sources/cosmic-json",title:"cosmic-json",description:"| Field            | Type        | Notes                      |",source:"@site/docs/data-sources/cosmic-json.md",sourceDirName:"data-sources",slug:"/data-sources/cosmic-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/next/data-sources/cosmic-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/data-sources/cosmic-json.md",tags:[],version:"current",frontMatter:{}},m=[],c={toc:m},p="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "id":"COSV58272668",\n   "numSamples":8,\n   "refAllele":"-",\n   "altAllele":"CCT",\n   "histologies":[\n      {\n         "name":"carcinoma (serous carcinoma)",\n         "numSamples":2\n      },\n      {\n         "name":"meningioma (fibroblastic)",\n         "numSamples":1\n      },\n      {\n         "name":"carcinoma",\n         "numSamples":1\n      },\n      {\n         "name":"carcinoma (squamous cell carcinoma)",\n         "numSamples":1\n      },\n      {\n         "name":"meningioma (transitional)",\n         "numSamples":1\n      },\n      {\n         "name":"carcinoma (adenocarcinoma)",\n         "numSamples":1\n      },\n      {\n         "name":"other (neoplasm)",\n         "numSamples":1\n      }\n   ],\n   "sites":[\n      {\n         "name":"ovary",\n         "numSamples":2\n      },\n      {\n         "name":"meninges",\n         "numSamples":2\n      },\n      {\n         "name":"thyroid",\n         "numSamples":2\n      },\n      {\n         "name":"cervix",\n         "numSamples":1\n      },\n      {\n         "name":"large intestine (colon)",\n         "numSamples":1\n      }\n   ],\n   "pubMedIds":[\n      25738363,\n      27548314\n   ],\n   "confirmedSomatic":true,\n   "drugResistance":true, /* not in this particular COSMIC variant */\n   "isAlleleSpecific":true\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"COSMIC Genomic Mutation ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"refAllele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"altAllele"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"histologies"),(0,r.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"phenotypic descriptions")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sites"),(0,r.kt)("td",{parentName:"tr",align:"center"},"count array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"tissue types")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int array"),(0,r.kt)("td",{parentName:"tr",align:"left"},"PubMed IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"confirmedSomatic"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true when the variant is a confirmed somatic variant")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"drugResistance"),(0,r.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true when the variant has been associated with drug resistance")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Count")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"name"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"numSamples"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}s.isMDXComponent=!0}}]);