"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[9446],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=g(n),y=a,d=m["".concat(s,".").concat(y)]||m[y]||c[y]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var g=2;g<o;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1959:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={},i=void 0,l={unversionedId:"data-sources/cosmic-gene-fusion-json",id:"version-3.22/data-sources/cosmic-gene-fusion-json",title:"cosmic-gene-fusion-json",description:"| Field       | Type         | Notes                     |",source:"@site/versioned_docs/version-3.22/data-sources/cosmic-gene-fusion-json.md",sourceDirName:"data-sources",slug:"/data-sources/cosmic-gene-fusion-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.22/data-sources/cosmic-gene-fusion-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.22/data-sources/cosmic-gene-fusion-json.md",tags:[],version:"3.22",frontMatter:{}},s=[],g={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'   "cosmicGeneFusions":[\n      {\n         "id":"COSF881",\n         "numSamples":6,\n         "geneSymbols":[\n            "MYB",\n            "NFIB"\n         ],\n         "hgvsr":"ENST00000341911.5(MYB):r.1_2368::ENST00000397581.2(NFIB):r.2592_3318",\n         "histologies":[\n            {\n               "name":"adenoid cystic carcinoma",\n               "numSamples":6\n            }\n         ],\n         "sites":[\n            {\n               "name":"salivary gland (submandibular)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (parotid)",\n               "numSamples":1\n            },\n            {\n               "name":"salivary gland (nasal cavity)",\n               "numSamples":1\n            },\n            {\n               "name":"breast",\n               "numSamples":3\n            }\n         ],\n         "pubMedIds":[\n            19841262\n         ]\n      }\n   ]\n')),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"id"),(0,a.yg)("td",{parentName:"tr",align:"center"},"string"),(0,a.yg)("td",{parentName:"tr",align:"left"},"COSMIC fusion ID")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"numSamples"),(0,a.yg)("td",{parentName:"tr",align:"center"},"int"),(0,a.yg)("td",{parentName:"tr",align:"left"})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"geneSymbols"),(0,a.yg)("td",{parentName:"tr",align:"center"},"string array"),(0,a.yg)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"hgvsr"),(0,a.yg)("td",{parentName:"tr",align:"center"},"string"),(0,a.yg)("td",{parentName:"tr",align:"left"},"HGVS RNA translocation fusion notation")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"histologies"),(0,a.yg)("td",{parentName:"tr",align:"center"},"count array"),(0,a.yg)("td",{parentName:"tr",align:"left"},"phenotypic descriptions")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"sites"),(0,a.yg)("td",{parentName:"tr",align:"center"},"count array"),(0,a.yg)("td",{parentName:"tr",align:"left"},"tissue types")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"pubMedIds"),(0,a.yg)("td",{parentName:"tr",align:"center"},"int array"),(0,a.yg)("td",{parentName:"tr",align:"left"},"PubMed IDs")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Count")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"name"),(0,a.yg)("td",{parentName:"tr",align:"center"},"string"),(0,a.yg)("td",{parentName:"tr",align:"left"},"description")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"numSamples"),(0,a.yg)("td",{parentName:"tr",align:"center"},"int"),(0,a.yg)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);