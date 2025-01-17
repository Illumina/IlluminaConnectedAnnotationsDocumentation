"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[8257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7224:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Annotation Engine vs Data update"},i=void 0,l={unversionedId:"frequently-asked-questions/Annotator-vs-data-update",id:"version-3.25/frequently-asked-questions/Annotator-vs-data-update",title:"Annotation Engine vs Data update",description:"Background",source:"@site/versioned_docs/version-3.25/frequently-asked-questions/Annotator-vs-data-update.md",sourceDirName:"frequently-asked-questions",slug:"/frequently-asked-questions/Annotator-vs-data-update",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.25/frequently-asked-questions/Annotator-vs-data-update",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.25/frequently-asked-questions/Annotator-vs-data-update.md",tags:[],version:"3.25",frontMatter:{title:"Annotation Engine vs Data update"},sidebar:"docs",previous:{title:"Jist",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.25/utilities/jist"}},p=[{value:"Background",id:"background",children:[],level:2},{value:"Annotator update",id:"annotator-update",children:[],level:2},{value:"Data update",id:"data-update",children:[],level:2},{value:"Update scenarios",id:"update-scenarios",children:[],level:2}],d={toc:p},u="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Update to annotations can be broadly categorized into two categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Annotation engine (Annotator) update."),(0,r.kt)("li",{parentName:"ul"},"Annotation data update.")),(0,r.kt)("p",null,"Understanding the nature of these two types of updates is key when it comes to updating annotation."),(0,r.kt)("h2",{id:"annotator-update"},"Annotator update"),(0,r.kt)("p",null,"The annotator is the engine that contains logic for core annotations such as computing ",(0,r.kt)("inlineCode",{parentName:"p"},"variant consequences"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HGVS")," notations, mapped positions (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"CDNA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CDS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"protein")," positions), detecting ",(0,r.kt)("inlineCode",{parentName:"p"},"gene fusions"),", etc., and perform annotation lookups from external data sources such as ",(0,r.kt)("inlineCode",{parentName:"p"},"dbSNP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gnomAD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ClinVar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"OMIM"),", etc. also known as supplementary annotations (SA). Update to the annotator entails new features or bugfixes to the compute or lookup mechanism. This is completely independent of the data update such as updating ",(0,r.kt)("inlineCode",{parentName:"p"},"dbSNP")," from v154 to v155. In other words, the same annotator can annotate with ",(0,r.kt)("inlineCode",{parentName:"p"},"dbSNP v154")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dbSNP v155")," when provided with the appropriate data files."),(0,r.kt)("h2",{id:"data-update"},"Data update"),(0,r.kt)("p",null,"The annotator uses data from various sources (listed in ",(0,r.kt)("a",{parentName:"p",href:"/IlluminaConnectedAnnotationsDocumentation/3.25/"},"Introduction"),"). For example, gene models used for core annotations are obtained from ",(0,r.kt)("inlineCode",{parentName:"p"},"RefSeq")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ensembl"),". Supplementary annotations come from various sources such as ",(0,r.kt)("inlineCode",{parentName:"p"},"dbSNP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gnomAD"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ClinVar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"OMIM"),", etc. Any of these data can be updated without updating the annotator as long as the file formats are compatible."),(0,r.kt)("h2",{id:"update-scenarios"},"Update scenarios"),(0,r.kt)("p",null,"Let us look at a few update scenarios."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"What needs to be updated /added"),(0,r.kt)("th",{parentName:"tr",align:null},"Suggested action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New transcripts and gene symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache files from RefSeq and Ensembl"),(0,r.kt)("td",{parentName:"tr",align:null},"Run DataManager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update ClinVar"),(0,r.kt)("td",{parentName:"tr",align:null},"ClinVar SA files"),(0,r.kt)("td",{parentName:"tr",align:null},"Run DataManager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New external annotation"),(0,r.kt)("td",{parentName:"tr",align:null},"New SA files required"),(0,r.kt)("td",{parentName:"tr",align:null},"Submit feature request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"New annotation feature"),(0,r.kt)("td",{parentName:"tr",align:null},"Annotator"),(0,r.kt)("td",{parentName:"tr",align:null},"Submit feature request")))))}s.isMDXComponent=!0}}]);