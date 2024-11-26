"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[2238],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var a=t(6540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),g=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=g(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=g(t),y=i,d=p["".concat(s,".").concat(y)]||p[y]||u[y]||r;return t?a.createElement(d,l(l({ref:n},c),{},{components:t})):a.createElement(d,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var g=2;g<r;g++)l[g]=t[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8969:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(8168),i=(t(6540),t(5680));const r={},l=void 0,o={unversionedId:"data-sources/clingen-dosage-json",id:"data-sources/clingen-dosage-json",title:"clingen-dosage-json",description:"| Field                       | Type           | Notes                                                                                                                            |",source:"@site/docs/data-sources/clingen-dosage-json.md",sourceDirName:"data-sources",slug:"/data-sources/clingen-dosage-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/clingen-dosage-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/data-sources/clingen-dosage-json.md",tags:[],version:"current",frontMatter:{}},s=[],g={toc:s},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'"clingenDosageSensitivityMap": [{\n    "chromosome": "15",\n    "begin": 30900686,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "little evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 0.33994\n},\n{\n    "chromosome": "15",\n    "begin": 31727418,\n    "end": 32153204,\n    "haploinsufficiency": "sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype",\n    "triplosensitivity": "dosage sensitivity unlikely",\n    "reciprocalOverlap": 0.00147,\n    "annotationOverlap": 1\n}]\n')),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Field"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"clingenDosageSensitivityMap"),(0,i.yg)("td",{parentName:"tr",align:null},"object array"),(0,i.yg)("td",{parentName:"tr",align:null})),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"chromosome"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"Ensembl-style chromosome names")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"begin"),(0,i.yg)("td",{parentName:"tr",align:null},"integer"),(0,i.yg)("td",{parentName:"tr",align:null},"1-based position")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"end"),(0,i.yg)("td",{parentName:"tr",align:null},"integer"),(0,i.yg)("td",{parentName:"tr",align:null},"1-based position")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"haploinsufficiency"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"see possible values below")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"triplosensitivity"),(0,i.yg)("td",{parentName:"tr",align:null},"string"),(0,i.yg)("td",{parentName:"tr",align:null},"(same as haploinsufficiency)\xa0")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"reciprocalOverlap"),(0,i.yg)("td",{parentName:"tr",align:null},"floating point"),(0,i.yg)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"annotationOverlap"),(0,i.yg)("td",{parentName:"tr",align:null},"floating point"),(0,i.yg)("td",{parentName:"tr",align:null},"Range: 0 - 1. E.g. 0.57 would indicate a 57% reciprocal overlap. Specified up to 5 decimal places (Not reported for Insertions).")))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"haploinsufficiency and triplosensitivity")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"no evidence to suggest that dosage sensitivity is associated with clinical phenotype"),(0,i.yg)("li",{parentName:"ul"},"little evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,i.yg)("li",{parentName:"ul"},"emerging evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,i.yg)("li",{parentName:"ul"},"sufficient evidence suggesting dosage sensitivity is associated with clinical phenotype"),(0,i.yg)("li",{parentName:"ul"},"gene associated with autosomal recessive phenotype"),(0,i.yg)("li",{parentName:"ul"},"dosage sensitivity unlikely")))}p.isMDXComponent=!0}}]);