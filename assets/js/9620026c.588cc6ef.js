"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[1103],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>u});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),g=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=g(e.components);return a.createElement(i.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),y=g(n),f=r,u=y["".concat(i,".").concat(f)]||y[f]||c[f]||l;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[y]="string"==typeof e?e:r,o[1]=p;for(var g=2;g<l;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2016:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var a=n(8168),r=(n(6540),n(5680));const l={},o=void 0,p={unversionedId:"data-sources/1000Genomes-snv-json",id:"data-sources/1000Genomes-snv-json",title:"1000Genomes-snv-json",description:"| Field            | Type         | Notes                     |",source:"@site/docs/data-sources/1000Genomes-snv-json.md",sourceDirName:"data-sources",slug:"/data-sources/1000Genomes-snv-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/1000Genomes-snv-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/data-sources/1000Genomes-snv-json.md",tags:[],version:"current",frontMatter:{}},i=[],g={toc:i},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"oneKg":{\n   "allAf":0.200879,\n   "afrAf":0.210287,\n   "amrAf":0.139769,\n   "easAf":0.275794,\n   "eurAf":0.181909,\n   "sasAf":0.173824,\n   "allAn":5008,\n   "afrAn":1322,\n   "amrAn":694,\n   "easAn":1008,\n   "eurAn":1006,\n   "sasAn":978,\n   "allAc":1006,\n   "afrAc":278,\n   "amrAc":97,\n   "easAc":278,\n   "eurAc":183,\n   "sasAc":170\n}\n')),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"allAf"),(0,r.yg)("td",{parentName:"tr",align:"center"},"float"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele frequency for all populations. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"allAc"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele count for all populations. Integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"allAn"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele number for all populations. Non-zero integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"afrAf"),(0,r.yg)("td",{parentName:"tr",align:"center"},"float"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele frequency for the African super population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"afrAc"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele count for the African super population. Integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"afrAn"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele number for the African super population. Non-zero integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"amrAf"),(0,r.yg)("td",{parentName:"tr",align:"center"},"float"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele frequency for the Ad Mixed American super population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"amrAc"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele count for the Ad Mixed American super population. Integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"amrAn"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele number for the Ad Mixed American super population. Non-zero integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"easAf"),(0,r.yg)("td",{parentName:"tr",align:"center"},"float"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele frequency for the East Asian super population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"easAc"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele count for the East Asian super population. Integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"easAn"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele number for the East Asian super population. Non-zero integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"eurAf"),(0,r.yg)("td",{parentName:"tr",align:"center"},"float"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele frequency for the European super population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"eurAc"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele count for the European super population. Integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"eurAn"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele number for the European super population. Non-zero integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"sasAf"),(0,r.yg)("td",{parentName:"tr",align:"center"},"float"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele frequency for the South Asian super population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"sasAc"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele count for the South Asian super population. Integer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"sasAn"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"left"},"allele number for the South Asian super population. Non-zero integer.")))))}y.isMDXComponent=!0}}]);