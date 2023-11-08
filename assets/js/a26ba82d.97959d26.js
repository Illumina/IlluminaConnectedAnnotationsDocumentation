"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[7706,2865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4133:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const r={},i=void 0,l={unversionedId:"data-sources/phylop-json",id:"data-sources/phylop-json",title:"phylop-json",description:"| Field            | Type         | Notes                     |",source:"@site/docs/data-sources/phylop-json.md",sourceDirName:"data-sources",slug:"/data-sources/phylop-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/phylop-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/data-sources/phylop-json.md",tags:[],version:"current",frontMatter:{}},s=[],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"variants":[\n   {\n      "vid":"2:48010488:A",\n      "chromosome":"chr2",\n      "begin":48010488,\n      "end":48010488,\n      "refAllele":"G",\n      "altAllele":"A",\n      "variantType":"SNV",\n      "phylopScore":0.459\n  }\n]  \n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"phylopScore"),(0,a.kt)("td",{parentName:"tr",align:"center"},"float"),(0,a.kt)("td",{parentName:"tr",align:"left"},"range: -14.08 to 6.424")))))}d.isMDXComponent=!0},1702:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),r=n(4133);const i={title:"PhyloP"},l=void 0,s={unversionedId:"data-sources/phylop",id:"data-sources/phylop",title:"PhyloP",description:"Overview",source:"@site/docs/data-sources/phylop.mdx",sourceDirName:"data-sources",slug:"/data-sources/phylop",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/phylop",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/data-sources/phylop.mdx",tags:[],version:"current",frontMatter:{title:"PhyloP"},sidebar:"docs",previous:{title:"OMIM",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/omim"},next:{title:"Primate AI",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/primate-ai"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"WigFix File",id:"wigfix-file",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"PhyloP (phylogenetic p-values) conservation scores are obtained from the ","[PHAST package]"," (",(0,a.kt)("a",{parentName:"p",href:"http://compgen.bscb.cornell.edu/phast/"},"http://compgen.bscb.cornell.edu/phast/"),") for multiple alignments of vertebrate genomes to the human genome. For GRCh38, the multiple alignments are against 19 mammals and for GRCh37, it is against 45 vertebrate genomes."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Siepel A, Bejerano G, Pedersen JS, Hinrichs AS, Hou M, Rosenbloom K, Clawson H, Spieth J, Hillier LW, Richards S, et al. Evolutionarily conserved elements in vertebrate, insect, worm, and yeast genomes. ",(0,a.kt)("strong",{parentName:"p"},"Genome Res. 2005")," Aug;15(8):1034-50.  (",(0,a.kt)("a",{parentName:"p",href:"http://www.genome.org/cgi/doi/10.1101/gr.3715005"},"http://www.genome.org/cgi/doi/10.1101/gr.3715005"),")"))),(0,a.kt)("h2",{id:"wigfix-file"},"WigFix File"),(0,a.kt)("p",null,"The data is provided in WigFix files which is a text file that provides conservation scores for contiguous intervals in the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scss"},"fixedStep chrom=chr1 start=10918 step=1\n0.064\n0.058\n0.064\n0.058\n0.064\n0.064\nfixedStep chrom=chr1 start=34045 step=1\n0.111\n0.100\n0.111\n0.111\n0.100\n0.111\n0.111\n0.111\n0.100\n0.111\n-1.636\n")),(0,a.kt)("p",null,"We convert them to binary files with indexes for fast query. Note that these are scores for genomic positions and are reported only for SNVs."),(0,a.kt)("h2",{id:"download-url"},"Download URL"),(0,a.kt)("p",null,"GRCh37: ",(0,a.kt)("a",{parentName:"p",href:"http://hgdownload.cse.ucsc.edu/goldenpath/hg19/phyloP46way/vertebrate/"},"http://hgdownload.cse.ucsc.edu/goldenpath/hg19/phyloP46way/vertebrate/")),(0,a.kt)("p",null,"GRCh38: ",(0,a.kt)("a",{parentName:"p",href:"http://hgdownload.cse.ucsc.edu/goldenPath/hg38/phyloP20way/"},"http://hgdownload.cse.ucsc.edu/goldenPath/hg38/phyloP20way/")),(0,a.kt)("h2",{id:"json-output"},"JSON Output"),(0,a.kt)("p",null,"Unlike other supplemetary datasources, phyloP scores are reported in the variants section."),(0,a.kt)(r.default,{mdxType:"JSON"}))}u.isMDXComponent=!0}}]);