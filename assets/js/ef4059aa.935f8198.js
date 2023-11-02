"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[3790],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=c(n),p=r,g=u["".concat(s,".").concat(p)]||u[p]||m[p]||l;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63427:(t,e,n)=>{n.d(e,{Z:()=>r});var a=n(67294);function r(t){let{className:e,name:n,children:r,githubUrl:l,twitterUrl:o}=t;return a.createElement("div",{className:e},a.createElement("div",{className:"card card--full-height"},a.createElement("div",{className:"card__header"},a.createElement("div",{className:"avatar avatar--vertical"},a.createElement("img",{className:"avatar__photo avatar__photo--xl",src:l+".png"}),a.createElement("div",{className:"avatar__intro"},a.createElement("h3",{className:"avatar__name"},n)))),a.createElement("div",{className:"card__body"},r),a.createElement("div",{className:"card__footer"},a.createElement("div",{className:"button-group button-group--block"},l&&a.createElement("a",{className:"button button--secondary",href:l},"GitHub"),o&&a.createElement("a",{className:"button button--secondary",href:o},"Twitter")))))}},668:(t,e,n)=>{n.r(e),n.d(e,{TeamProfileCardCol:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(63427);const o={id:"introduction",title:"Introduction",description:"Clinical-grade variant annotation",hide_title:!0,slug:"/"},i=void 0,s={unversionedId:"introduction/introduction",id:"introduction/introduction",title:"Introduction",description:"Clinical-grade variant annotation",source:"@site/docs/introduction/introduction.mdx",sourceDirName:"introduction",slug:"/",permalink:"/IlluminaConnectedAnnotationsDocumentation/",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/introduction/introduction.mdx",tags:[],version:"current",frontMatter:{id:"introduction",title:"Introduction",description:"Clinical-grade variant annotation",hide_title:!0,slug:"/"},sidebar:"docs",next:{title:"Dependencies",permalink:"/IlluminaConnectedAnnotationsDocumentation/introduction/dependencies"}},c=[{value:"What does Illumina Connected Annotations annotate?",id:"what-does-illumina-connected-annotations-annotate",children:[],level:2},{value:"Download",id:"download",children:[],level:2}];function d(t){return(0,r.kt)(l.Z,(0,a.Z)({},t,{className:"col col--6 margin-bottom--lg",mdxType:"TeamProfileCard"}))}const u={toc:c,TeamProfileCardCol:d},m="wrapper";function p(t){let{components:e,...l}=t;return(0,r.kt)(m,(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(87951).Z})),(0,r.kt)("p",null,"Illumina Connected Annotations provides translational research-grade annotation of genomic variants (SNVs, MNVs, insertions, deletions, indels, STRs, gene fusions, and SVs (including CNVs). It can be run as a stand-alone package, or integrated into larger software tools that require variant annotation."),(0,r.kt)("p",null,"The input to Illumina Connected Annotations are VCFs and the output is a structured JSON representation of all annotation and sample information (as extracted from the VCF). Illumina Connected Annotations handles multiple alternate alleles and multiple samples with ease."),(0,r.kt)("p",null,"The software is being developed under a rigorous SDLC and testing process to ensure accuracy of the results and enable embedding in other software. Illumina Connected Annotations uses a continuous integration pipeline where millions of variant annotations are monitored against baseline values daily."),(0,r.kt)("h2",{id:"what-does-illumina-connected-annotations-annotate"},"What does Illumina Connected Annotations annotate?"),(0,r.kt)("p",null,"We use Sequence Ontology consequences to describe how each variant impacts a given transcript:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(98812).Z})),(0,r.kt)("p",null,"The transcript and gene models are obtained from ",(0,r.kt)("a",{parentName:"p",href:"https://ftp.ncbi.nlm.nih.gov/genomes/all/annotation_releases/9606/"},"RefSeq")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ftp.ensembl.org/pub/"},"Ensembl"),"."),(0,r.kt)("p",null,"In addition, it uses external data sources to provide additional context for each variant.\nIllumina Connected Annotations provides annotations from the following sources divided into 2 tiers: Professional and basic.\nThe basic tier can be accessed free of charge. The professional tier requires a license. For access, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:annotation_support@illumina.com."},"annotation_support@illumina.com.")," "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Data Source"),(0,r.kt)("th",{parentName:"tr",align:null},"Availability"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Primate AI-3D"),(0,r.kt)("td",{parentName:"tr",align:null},"Professional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Splice AI"),(0,r.kt)("td",{parentName:"tr",align:null},"Professional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"COSMIC"),(0,r.kt)("td",{parentName:"tr",align:null},"Professional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OMIM"),(0,r.kt)("td",{parentName:"tr",align:null},"Professional")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ClinVar"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1000 Genomes Project"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DANN"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dbSNP"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIPHER"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GERP"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GME Variome"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gnomAD"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MITOMAP"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"REVEL"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TOPMed"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cancer Hotspots"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FusionCatcher"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ClinGen"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MultiZ 100 way"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic")))),(0,r.kt)("h2",{id:"download"},"Download"),(0,r.kt)("p",null,"Please visit ",(0,r.kt)("a",{parentName:"p",href:"https://developer.illumina.com/IlluminaConnectedAnnotations"},"Illumina Connected Annotations"),"."))}p.isMDXComponent=!0},87951:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/ICAnnotations-966475fab8adae0519d1667d592ad4b2.png"},98812:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/TranscriptConsequences-60ca1c43a36dacf896fecdabf09ce02c.svg"}}]);