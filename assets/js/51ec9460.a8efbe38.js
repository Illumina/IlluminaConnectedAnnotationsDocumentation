"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[5697,4246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9819:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"data-sources/topmed-json",id:"data-sources/topmed-json",title:"topmed-json",description:"| Field        | Type  | Notes                                         |",source:"@site/docs/data-sources/topmed-json.md",sourceDirName:"data-sources",slug:"/data-sources/topmed-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/topmed-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/data-sources/topmed-json.md",tags:[],version:"current",frontMatter:{}},s=[],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"topmed":{ \n   "allAc":20,\n   "allAn":125568,\n   "allAf":0.000159,\n   "allHc":0,\n   "failedFilter":true\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allAc"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"TOPMed allele count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allAn"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"TOPMed allele number. Non-zero integer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allAf"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"TOPMed allele frequency (computed by Illumina Connected Annotations)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allHc"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"TOPMed homozygous count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"failedFilter"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True if this variant failed any filters")))))}p.isMDXComponent=!0},6891:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(9819);const i={title:"TOPMed"},l=void 0,s={unversionedId:"data-sources/topmed",id:"data-sources/topmed",title:"TOPMed",description:"Overview",source:"@site/docs/data-sources/topmed.mdx",sourceDirName:"data-sources",slug:"/data-sources/topmed",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/topmed",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/data-sources/topmed.mdx",tags:[],version:"current",frontMatter:{title:"TOPMed"},sidebar:"docs",previous:{title:"Splice AI",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/splice-ai"},next:{title:"Illumina Connected Annotations JSON File Format",permalink:"/IlluminaConnectedAnnotationsDocumentation/file-formats/illumina-annotator-json-file-format"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"VCF extraction",id:"vcf-extraction",children:[],level:2},{value:"GRCh37 liftover",id:"grch37-liftover",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON output",id:"json-output",children:[],level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.nhlbi.nih.gov/science/trans-omics-precision-medicine-topmed-program"},"Trans-Omics for Precision Medicine")," (TOPMed) program, sponsored by the National Institutes of Health (NIH) National Heart, Lung and Blood Institute (NHLBI), is part of a broader Precision Medicine Initiative, which aims to provide disease treatments tailored to an individual\u2019s unique genes and environment. TOPMed contributes to this Initiative through the integration of whole-genome sequencing (WGS) and other omics (e.g., metabolic profiles, epigenomics, protein and RNA expression patterns) data with molecular, behavioral, imaging, environmental, and clinical data."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Kowalski, M.H., Qian, H., Hou, Z., Rosen, J.D., Tapia, A.L., Shan, Y., Jain, D., Argos, M., Arnett, D.K., Avery, C. and Barnes, K.C., 2019. Use of> 100,000 NHLBI Trans-Omics for Precision Medicine (TOPMed) Consortium whole genome sequences improves imputation quality and detection of rare variant associations in admixed African and Hispanic/Latino populations. ",(0,r.kt)("em",{parentName:"p"},"PLoS genetics"),", ",(0,r.kt)("strong",{parentName:"p"},"15(12)"),", p.e1008500."))),(0,r.kt)("h2",{id:"vcf-extraction"},"VCF extraction"),(0,r.kt)("p",null,"We currently extract the following fields from TOPMed VCF file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},'##INFO=<ID=AN,Number=1,Type=Integer,Description="Number of Alleles in Samples with Coverage">\n##INFO=<ID=AC,Number=A,Type=Integer,Description="Alternate Allele Counts in Samples with Coverage">\n##INFO=<ID=AF,Number=A,Type=Float,Description="Alternate Allele Frequencies">\n##INFO=<ID=Het,Number=A,Type=Integer,Description="Number of samples with heterozygous genotype calls">\n##INFO=<ID=Hom,Number=A,Type=Integer,Description="Number of samples with homozygous alternate genotype calls">\n')),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"chr1    10132   TOPMed_freeze_5?chr1:10,132     T       C       255     SVM     VRT=1;NS=62784;AN=125568;AC=32;AF=0.000254842;Het=32;Hom=0      NA:FRQ  125568:0.000254842\n")),(0,r.kt)("h2",{id:"grch37-liftover"},"GRCh37 liftover"),(0,r.kt)("p",null,"The data is not available for GRCh37 on TOPMed website. We performed a liftover from GRCh38 to GRCh37 using dbSNP ids."),(0,r.kt)("h2",{id:"download-url"},"Download URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bravo.sph.umich.edu/freeze5/hg38/download"},"https://bravo.sph.umich.edu/freeze5/hg38/download")),(0,r.kt)("h2",{id:"json-output"},"JSON output"),(0,r.kt)(o.default,{mdxType:"JSON"}))}u.isMDXComponent=!0}}]);