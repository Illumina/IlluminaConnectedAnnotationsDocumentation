"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[3612],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var r=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=a,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(g,c(c({ref:n},u),{},{components:t})):r.createElement(g,c({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9054:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(8168),a=(t(6540),t(5680));const o={},c=void 0,i={unversionedId:"data-sources/cosmic-cancer-gene-census",id:"version-3.23/data-sources/cosmic-cancer-gene-census",title:"cosmic-cancer-gene-census",description:"| Field        |     Type     | Notes                   |",source:"@site/versioned_docs/version-3.23/data-sources/cosmic-cancer-gene-census.md",sourceDirName:"data-sources",slug:"/data-sources/cosmic-cancer-gene-census",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.23/data-sources/cosmic-cancer-gene-census",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.23/data-sources/cosmic-cancer-gene-census.md",tags:[],version:"3.23",frontMatter:{}},s=[],l={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'   {\n  "name": "PRDM16",\n  "ensemblGeneId": "ENSG00000142611",\n  "ncbiGeneId": "63976",\n  "hgncId": 14000,\n  "cosmic": {\n    "tier": 1,\n    "roleInCancer": [\n      "oncogene",\n      "fusion"\n    ]\n  }\n}\n')),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,a.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"roleInCancer"),(0,a.yg)("td",{parentName:"tr",align:"center"},"string array"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Possible roles in caner")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},"tier"),(0,a.yg)("td",{parentName:"tr",align:"center"},"number"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Cosmic tiers ","[1, 2]")))))}p.isMDXComponent=!0}}]);