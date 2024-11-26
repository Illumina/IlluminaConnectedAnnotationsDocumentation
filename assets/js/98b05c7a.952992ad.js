"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[6426],{5680:(t,e,n)=>{n.d(e,{xA:()=>u,yg:()=>N});var a=n(6540);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):g(g({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},m="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,N=m["".concat(i,".").concat(d)]||m[d]||y[d]||l;return n?a.createElement(N,g(g({ref:e},u),{},{components:n})):a.createElement(N,g({ref:e},u))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,g=new Array(l);g[0]=d;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[m]="string"==typeof t?t:r,g[1]=o;for(var p=2;p<l;p++)g[p]=n[p];return a.createElement.apply(null,g)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9693:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(8168),r=(n(6540),n(5680));const l={},g=void 0,o={unversionedId:"data-sources/gnomad-structural-variants-json",id:"version-3.22/data-sources/gnomad-structural-variants-json",title:"gnomad-structural-variants-json",description:"| Field             | Type            | Notes                                                                             |",source:"@site/versioned_docs/version-3.22/data-sources/gnomad-structural-variants-json.md",sourceDirName:"data-sources",slug:"/data-sources/gnomad-structural-variants-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.22/data-sources/gnomad-structural-variants-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.22/data-sources/gnomad-structural-variants-json.md",tags:[],version:"3.22",frontMatter:{}},i=[],p={toc:i},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.yg)(u,(0,a.A)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"gnomAD-preview": [\n  {\n    "chromosome": "1",\n    "begin": 40001,\n    "end": 47200,\n    "variantId": "gnomAD-SV_v2.1_DUP_1_1",\n    "variantType": "duplication",\n    "failedFilter": true,\n    "allAf": 0.068963,\n    "afrAf": 0.135694,\n    "amrAf": 0.022876,\n    "easAf": 0.01101,\n    "eurAf": 0.007846,\n    "othAf": 0.017544,\n    "femaleAf": 0.065288,\n    "maleAf": 0.07255,\n    "allAc": 943,\n    "afrAc": 866,\n    "amrAc": 21,\n    "easAc": 17,\n    "eurAc": 37,\n    "othAc": 2,\n    "femaleAc": 442,\n    "maleAc": 499,\n    "allAn": 13674,\n    "afrAn": 6382,\n    "amrAn": 918,\n    "easAn": 1544,\n    "eurAn": 4716,\n    "othAn": 114,\n    "femaleAn": 6770,\n    "maleAn": 6878,\n    "allHc": 91,\n    "afrHc": 90,\n    "amrHc": 1,\n    "easHc": 0,\n    "eurHc": 0,\n    "othHc": 55,\n    "femaleHc": 44,\n    "maleHc": 47,\n    "reciprocalOverlap": 0.01839,\n    "annotationOverlap": 0.16667\n  }\n]\n\n')),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"chromosome"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"chromosome number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"begin"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"position interval start")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"end"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"position internal end")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"variantType"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"structural variant type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"variantId"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"gnomAD ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"allAf"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"allele frequency for all populations. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"afrAf"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"allele frequency for the African super population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amrAf"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"allele frequency for the Ad Mixed American super population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"easAf"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"allele frequency for the East Asian super population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eurAf"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"allele frequency for the European super population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"othAf"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"allele frequency for all other populations. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"femaleAf"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"allele frequency for female population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maleAf"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"allele frequency for male population. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"allAc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele count for all populations.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"afrAc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele count for the African super population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amrAc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele count for the Ad Mixed American super population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"easAc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele count for the East Asian super population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eurAc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele count for the European super population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"othAc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele count for all other populations.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maleAc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele count for male population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"femaleAc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele count for female population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"allAn"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele number for all populations.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"afrAn"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele number for the African super population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amrAn"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele number for the Ad Mixed American super population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"easAn"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele number for the East Asian super population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eurAn"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele number for the European super population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"othAn"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele number for all other populations.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"femaleAn"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele number for female population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maleAn"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"allele number for male population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"allHc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"count of homozygous individuals for all populations.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"afrHc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"count of homozygous individuals for the African / African American population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amrHc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"count of homozygous individuals for the Latino population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"easHc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"count of homozygous individuals for the East Asian population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eurAc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"count of homozygous individuals for the European super population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"othHc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"count of homozygous individuals for all other populations.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maleHc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"count of homozygous individuals for male population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"femaleHc"),(0,r.yg)("td",{parentName:"tr",align:null},"integer"),(0,r.yg)("td",{parentName:"tr",align:null},"count of homozygous individuals for female population.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"failedFilter"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"True if this variant failed any filters (Note: we do not list the failed filters)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"reciprocalOverlap"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"Reciprocal overlap. Range: 0 - 1.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"annotationOverlap"),(0,r.yg)("td",{parentName:"tr",align:null},"floating point"),(0,r.yg)("td",{parentName:"tr",align:null},"Reciprocal overlap. Range: 0 - 1.0")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Note:")," Following fields are not available in ",(0,r.yg)("em",{parentName:"p"},"GRCh38")," because the source file does not contain this information:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Field"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"femaleAf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maleAf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maleAc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"femaleAc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"femaleAn")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maleAn")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"allHc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"afrHc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"amrHc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"easHc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"eurAc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"othHc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maleHc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"femaleHc")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"failedFilter")))))}m.isMDXComponent=!0}}]);