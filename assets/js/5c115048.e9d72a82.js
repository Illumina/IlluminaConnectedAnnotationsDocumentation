"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[434],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),s=u(n),m=r,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(g,o(o({ref:e},c),{},{components:n})):a.createElement(g,o({ref:e},c))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6850:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"data-sources/clingen-json",id:"version-3.23/data-sources/clingen-json",title:"clingen-json",description:"| Field                  | Type           | Notes                                                                                                                            |",source:"@site/versioned_docs/version-3.23/data-sources/clingen-json.md",sourceDirName:"data-sources",slug:"/data-sources/clingen-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/clingen-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.23/data-sources/clingen-json.md",tags:[],version:"3.23",frontMatter:{}},p=[],u={toc:p},c="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"clingen":[\n   {\n      "chromosome":"17",\n      "begin":525,\n      "end":14667519,\n      "variantType":"copy_number_gain",\n      "id":"nsv996083",\n      "clinicalInterpretation":"pathogenic",\n      "observedGains":1,\n      "validated":true,\n      "phenotypes":[\n         "Intrauterine growth retardation"\n      ],\n      "phenotypeIds":[\n         "HP:0001511",\n         "MedGen:C1853481"\n      ],\n      "reciprocalOverlap":0.00131\n   },\n   {\n      "chromosome":"17",\n      "begin":45835,\n      "end":7600330,\n      "variantType":"copy_number_loss",\n      "id":"nsv869419",\n      "clinicalInterpretation":"pathogenic",\n      "observedLosses":1,\n      "validated":true,\n      "phenotypes":[\n         "Developmental delay AND/OR other significant developmental or morphological phenotypes"\n      ],\n      "reciprocalOverlap":0.00254\n   }\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clingen"),(0,r.kt)("td",{parentName:"tr",align:null},"object array"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chromosome"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Ensembl-style chromosome names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"begin"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1-based position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variantType"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Any of the\xa0sequence alterations defined here.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Identifier from the data source. Alternatively a VID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clinicalInterpretation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"see possible values below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"observedGains"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Range: 0 - (2",(0,r.kt)("sup",null,"31"),"\xa0- 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"observedLosses"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Range: 0 - (2",(0,r.kt)("sup",null,"31"),"\xa0- 1). Only used if copy_number_variation, copy_number_loss, or copy_number_gain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"validated"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phenotypes"),(0,r.kt)("td",{parentName:"tr",align:null},"string array"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the phenotype.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phenotypeIds"),(0,r.kt)("td",{parentName:"tr",align:null},"string array"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the phenotype IDs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reciprocalOverlap"),(0,r.kt)("td",{parentName:"tr",align:null},"floating point"),(0,r.kt)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"clinicalInterpretation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"benign"),(0,r.kt)("li",{parentName:"ul"},"curated benign"),(0,r.kt)("li",{parentName:"ul"},"curated pathogenic"),(0,r.kt)("li",{parentName:"ul"},"likely benign"),(0,r.kt)("li",{parentName:"ul"},"likely pathogenic"),(0,r.kt)("li",{parentName:"ul"},"path gain"),(0,r.kt)("li",{parentName:"ul"},"path loss"),(0,r.kt)("li",{parentName:"ul"},"pathogenic"),(0,r.kt)("li",{parentName:"ul"},"uncertain")))}s.isMDXComponent=!0}}]);