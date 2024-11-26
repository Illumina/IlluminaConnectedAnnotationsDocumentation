"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[4903,8468],{5680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,y=d["".concat(o,".").concat(c)]||d[c]||s[c]||l;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var g={};for(var o in t)hasOwnProperty.call(t,o)&&(g[o]=t[o]);g.originalType=e,g[d]="string"==typeof e?e:r,i[1]=g;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5746:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var n=a(8168),r=(a(6540),a(5680));const l={},i=void 0,g={unversionedId:"data-sources/fusioncatcher-json",id:"version-3.22/data-sources/fusioncatcher-json",title:"fusioncatcher-json",description:"| Field            | Type         | Notes                                  |",source:"@site/versioned_docs/version-3.22/data-sources/fusioncatcher-json.md",sourceDirName:"data-sources",slug:"/data-sources/fusioncatcher-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.22/data-sources/fusioncatcher-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.22/data-sources/fusioncatcher-json.md",tags:[],version:"3.22",frontMatter:{}},o=[{value:"genes",id:"genes",children:[],level:4},{value:"gene",id:"gene",children:[],level:4}],p={toc:o},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'   "fusionCatcher":[\n      {\n         "genes":{\n            "first":{\n               "hgnc":"ETV6",\n               "isOncogene":true\n            },\n            "second":{\n               "hgnc":"RUNX1"\n            },\n            "isParalogPair":true,\n            "isPseudogenePair":true,\n            "isReadthrough":true\n         },\n         "germlineSources":[\n            "1000 Genomes Project"\n         ],\n         "somaticSources":[\n            "COSMIC",\n            "TCGA oesophageal carcinomas"\n         ]\n      }\n   ]\n')),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"genes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"genes object"),(0,r.yg)("td",{parentName:"tr",align:"left"},"5' gene & 3' gene")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"germlineSources"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string array"),(0,r.yg)("td",{parentName:"tr",align:"left"},"matches in known germline data sources")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"somaticSources"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string array"),(0,r.yg)("td",{parentName:"tr",align:"left"},"matches in known somatic data sources")))),(0,r.yg)("h4",{id:"genes"},"genes"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"first"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gene object"),(0,r.yg)("td",{parentName:"tr",align:"left"},"5' gene")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"second"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gene object"),(0,r.yg)("td",{parentName:"tr",align:"left"},"3' gene")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"isParalogPair"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool"),(0,r.yg)("td",{parentName:"tr",align:"left"},"true when both genes are paralogs for each other")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"isPseudogenePair"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool"),(0,r.yg)("td",{parentName:"tr",align:"left"},"true when both genes are pseudogenes for each other")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"isReadthrough"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool"),(0,r.yg)("td",{parentName:"tr",align:"left"},"true when this fusion gene is a readthrough event (both are on the same strand and there are no genes between them)")))),(0,r.yg)("h4",{id:"gene"},"gene"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"hgnc"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string"),(0,r.yg)("td",{parentName:"tr",align:"left"},"gene symbol. e.g. MSH6")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"isOncogene"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool"),(0,r.yg)("td",{parentName:"tr",align:"left"},"true when this gene is an oncogene")))))}d.isMDXComponent=!0},2077:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>g,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(8168),r=(a(6540),a(5680)),l=a(5746);const i={title:"FusionCatcher"},g=void 0,o={unversionedId:"data-sources/fusioncatcher",id:"version-3.22/data-sources/fusioncatcher",title:"FusionCatcher",description:"Overview",source:"@site/versioned_docs/version-3.22/data-sources/fusioncatcher.mdx",sourceDirName:"data-sources",slug:"/data-sources/fusioncatcher",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.22/data-sources/fusioncatcher",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.22/data-sources/fusioncatcher.mdx",tags:[],version:"3.22",frontMatter:{title:"FusionCatcher"},sidebar:"docs",previous:{title:"DECIPHER",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.22/data-sources/decipher"},next:{title:"GERP",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.22/data-sources/gerp"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Supported Data Sources",id:"supported-data-sources",children:[{value:"Oncogenes",id:"oncogenes",children:[],level:3},{value:"Germline",id:"germline",children:[],level:3},{value:"Somatic",id:"somatic",children:[],level:3}],level:2},{value:"Gene Pair TSV File",id:"gene-pair-tsv-file",children:[{value:"Example",id:"example",children:[],level:3},{value:"Parsing",id:"parsing",children:[],level:3}],level:2},{value:"Gene TSV File",id:"gene-tsv-file",children:[{value:"Example",id:"example-1",children:[],level:3},{value:"Parsing",id:"parsing-1",children:[],level:3}],level:2},{value:"Known Issues",id:"known-issues",children:[],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],m={toc:p},d="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/ndaniel/fusioncatcher"},"FusionCatcher")," is a well-known tool that searches for somatic novel/known fusion genes, translocations, and/or chimeras in RNA-seq data. While FusionCatcher itself is not part of Illumina Connected Annotations, we have included a subset of their genomic databases in Illumina Connected Annotations."),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Daniel Nicorici, Mihaela \u015eatalan, Henrik Edgren, Sara Kangaspeska, Astrid Murum\xe4gi, Olli Kallioniemi, Sami Virtanen, Olavi Kilkku. (2014) ",(0,r.yg)("a",{parentName:"p",href:"https://www.biorxiv.org/content/10.1101/011650v1"},"FusionCatcher \u2013 a tool for finding somatic fusion genes in paired-end RNA-sequencing data"),". ",(0,r.yg)("em",{parentName:"p"},"bioRxiv")," 011650"))),(0,r.yg)("h2",{id:"supported-data-sources"},"Supported Data Sources"),(0,r.yg)("h3",{id:"oncogenes"},"Oncogenes"),(0,r.yg)("p",null,"The following data sources are aggregated and used to populate the ",(0,r.yg)("inlineCode",{parentName:"p"},"isOncogene")," field in the gene JSON object:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Reference"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Data"),(0,r.yg)("th",{parentName:"tr",align:"left"},"FusionCatcher filename"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Bushman"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://www.bushmanlab.org/links/genelists"},"bushmanlab.org")),(0,r.yg)("td",{parentName:"tr",align:"left"},"cancer_genes.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ONGENE"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.sciencedirect.com/science/article/pii/S1673852716302053"},"JGG")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://ongene.bioinfo-minzhao.org"},"bioinfo-minzhao.org")),(0,r.yg)("td",{parentName:"tr",align:"left"},"oncogenes_more.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"UniProt tumor genes"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/49/D1/D480/6006196"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.uniprot.org/downloads"},"uniprot.org")),(0,r.yg)("td",{parentName:"tr",align:"left"},"tumor_genes.txt")))),(0,r.yg)("h3",{id:"germline"},"Germline"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Illumina Connected Annotations label"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Reference"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Data"),(0,r.yg)("th",{parentName:"tr",align:"left"},"FusionCatcher filename"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"1000 Genomes Project"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0104567"},"PLOS ONE")),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"1000genomes.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Healthy (strong support)"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"banned.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Illumina Body Map 2.0"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-513"},"EBI")),(0,r.yg)("td",{parentName:"tr",align:"left"},"bodymap2.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"CACG"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.sciencedirect.com/science/article/pii/S0888754312000821"},"Genomics")),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"cacg.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ConjoinG"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0013284"},"PLOS ONE")),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"conjoing.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Healthy prefrontal cortex"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://bmcmedgenomics.biomedcentral.com/articles/10.1186/s12920-016-0164-y"},"BMC Medical Genomics")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE68719"},"NCBI GEO")),(0,r.yg)("td",{parentName:"tr",align:"left"},"cortex.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Duplicated Genes Database"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0050653"},"PLOS ONE")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"http://dgd.genouest.org/"},"genouest.org")),(0,r.yg)("td",{parentName:"tr",align:"left"},"dgd.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"GTEx healthy tissues"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://gtexportal.org/home/"},"gtexportal.org")),(0,r.yg)("td",{parentName:"tr",align:"left"},"gtex.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Healthy"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"healthy.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Human Protein Atlas"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.mcponline.org/article/S1535-9476(20)34633-8/fulltext"},"MCP")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.ebi.ac.uk/arrayexpress/experiments/E-MTAB-1733/"},"EBI")),(0,r.yg)("td",{parentName:"tr",align:"left"},"hpa.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Babiceanu non-cancer tissues"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/44/6/2859/2499453"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/44/6/2859/2499453#supplementary-data"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},"non-cancer_tissues.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"non-tumor cell lines"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"non-tumor_cells.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TumorFusions normal"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/46/D1/D1144/4584571"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/46/D1/D1144/4584571#supplementary-data"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},"tcga-normal.txt")))),(0,r.yg)("h3",{id:"somatic"},"Somatic"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Illumina Connected Annotations label"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Reference"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Data"),(0,r.yg)("th",{parentName:"tr",align:"left"},"FusionCatcher filename"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Alaei-Mahabadi 18 cancers"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.pnas.org/content/113/48/13768.long"},"PNAS")),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"18cancers.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"DepMap CCLE"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://depmap.org/portal/download/"},"depmap.org")),(0,r.yg)("td",{parentName:"tr",align:"left"},"ccle.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"CCLE Klijn"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.nature.com/articles/nbt.3080"},"Nature Biotechnology")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.nature.com/articles/nbt.3080#Sec27"},"Nature Biotechnology")),(0,r.yg)("td",{parentName:"tr",align:"left"},"ccle2.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"CCLE Vellichirammal"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.cell.com/molecular-therapy-family/nucleic-acids/fulltext/S2162-2531(20)30058-5"},"Molecular Therapy Nucleic Acids")),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"ccle3.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Cancer Genome Project"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://cancer.sanger.ac.uk/cosmic/download"},"COSMIC")),(0,r.yg)("td",{parentName:"tr",align:"left"},"cgp.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ChimerKB 4.0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/48/D1/D817/5611671"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.kobic.re.kr/chimerdb_mirror/download"},"kobic.re.kr")),(0,r.yg)("td",{parentName:"tr",align:"left"},"chimerdb4kb.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ChimerPub 4.0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/48/D1/D817/5611671"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.kobic.re.kr/chimerdb_mirror/download"},"kobic.re.kr")),(0,r.yg)("td",{parentName:"tr",align:"left"},"chimerdb4pub.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ChimerSeq 4.0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/48/D1/D817/5611671"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.kobic.re.kr/chimerdb_mirror/download"},"kobic.re.kr")),(0,r.yg)("td",{parentName:"tr",align:"left"},"chimerdb4seq.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"COSMIC"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/47/D1/D941/5146192"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://cancer.sanger.ac.uk/cosmic/download"},"COSMIC")),(0,r.yg)("td",{parentName:"tr",align:"left"},"cosmic.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Bao gliomas"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://genome.cshlp.org/content/24/11/1765"},"Genome Research")),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"gliomas.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Known"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"known.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Mitelman DB"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://mitelmandatabase.isb-cgc.org"},"ISB-CGC")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://storage.cloud.google.com/mitelman-data-files/prod/mitelman_db.zip"},"Google Cloud")),(0,r.yg)("td",{parentName:"tr",align:"left"},"mitelman.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TCGA oesophageal carcinomas"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.nature.com/articles/nature20805"},"Nature")),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"oesophagus.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Bailey pancreatic cancers"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.nature.com/articles/nature16965"},"Nature")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.nature.com/articles/nature16965#Sec44"},"Nature")),(0,r.yg)("td",{parentName:"tr",align:"left"},"pancreases.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"PCAWG"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://doi.org/10.1016/j.cell.2018.03.042"},"Cell")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://dcc.icgc.org/releases/PCAWG/transcriptome/fusion"},"ICGC")),(0,r.yg)("td",{parentName:"tr",align:"left"},"pcawg.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Robinson prostate cancers"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://doi.org/10.1016/j.cell.2015.05.001"},"Cell")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.cell.com/cell/fulltext/S0092-8674(15)00548-6?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS0092867415005486%3Fshowall%3Dtrue#supplementaryMaterial"},"Cell")),(0,r.yg)("td",{parentName:"tr",align:"left"},"prostate_cancer.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TCGA"),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.cancer.gov/about-nci/organization/ccg/research/structural-genomics/tcga"},"cancer.gov")),(0,r.yg)("td",{parentName:"tr",align:"left"},"tcga.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TumorFusions tumor"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/46/D1/D1144/4584571"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/46/D1/D1144/4584571#supplementary-data"},"NAR")),(0,r.yg)("td",{parentName:"tr",align:"left"},"tcga-cancer.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TCGA Gao"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://doi.org/10.1016/j.celrep.2018.03.050"},"Cell")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.cell.com/cell-reports/fulltext/S2211-1247(18)30395-4?_returnURL=https%3A%2F%2Flinkinghub.elsevier.com%2Fretrieve%2Fpii%2FS2211124718303954%3Fshowall%3Dtrue#supplementaryMaterial"},"Cell")),(0,r.yg)("td",{parentName:"tr",align:"left"},"tcga2.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TCGA Vellichirammal"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://www.cell.com/molecular-therapy-family/nucleic-acids/fulltext/S2162-2531(20)30058-5"},"Molecular Therapy Nucleic Acids")),(0,r.yg)("td",{parentName:"tr",align:"left"}),(0,r.yg)("td",{parentName:"tr",align:"left"},"tcga3.txt")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"TICdb"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://bmcgenomics.biomedcentral.com/articles/10.1186/1471-2164-8-33"},"BMC Genomics")),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"https://genetica.unav.edu/TICdb/allseqs_TICdb.txt"},"unav.edu")),(0,r.yg)("td",{parentName:"tr",align:"left"},"ticdb.txt")))),(0,r.yg)("h2",{id:"gene-pair-tsv-file"},"Gene Pair TSV File"),(0,r.yg)("p",null,"Most of the data files in FusionCatcher are two-column TSV files containing the Ensembl gene IDs that are paired together."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Here are the first few lines of the 1000genomes.txt file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ENSG00000006210 ENSG00000102962\nENSG00000006652 ENSG00000181016\nENSG00000014138 ENSG00000149798\nENSG00000026297 ENSG00000071242\nENSG00000035499 ENSG00000155959\nENSG00000055211 ENSG00000131013\nENSG00000055332 ENSG00000179915\nENSG00000062485 ENSG00000257727\nENSG00000065978 ENSG00000166501\nENSG00000066044 ENSG00000104980\n")),(0,r.yg)("h3",{id:"parsing"},"Parsing"),(0,r.yg)("p",null,"In Illumina Connected Annotations, we will only import a gene pair if both Ensembl gene IDs are recognized from either our GRCh37 or GRCh38 cache files."),(0,r.yg)("h2",{id:"gene-tsv-file"},"Gene TSV File"),(0,r.yg)("p",null,"Some of the data files are single-column files containing Ensembl gene IDs. This is commonly used in the data files representing oncogene data sources."),(0,r.yg)("h3",{id:"example-1"},"Example"),(0,r.yg)("p",null,"Here are the first few lines of the oncogenes_more.txt file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ENSG00000000938\nENSG00000003402\nENSG00000005469\nENSG00000005884\nENSG00000006128\nENSG00000006453\nENSG00000006468\nENSG00000007350\nENSG00000008294\nENSG00000008952\n")),(0,r.yg)("h3",{id:"parsing-1"},"Parsing"),(0,r.yg)("h2",{id:"known-issues"},"Known Issues"),(0,r.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"FusionCatcher also uses creates custom Ensembl genes (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"ENSG09000000002"),") to handle missing Ensembl genes. Illumina Connected Annotations will ignore these entries since we only include the gene IDs that are currently recognized by Illumina Connected Annotations."),(0,r.yg)("p",{parentName:"div"},"I suspect that these were originally RefSeq genes and if so, we can support those directly in Illumina Connected Annotations in the future."))),(0,r.yg)("h2",{id:"download-url"},"Download URL"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://sourceforge.net/projects/fusioncatcher/files/data"},"https://sourceforge.net/projects/fusioncatcher/files/data")),(0,r.yg)("h2",{id:"json-output"},"JSON Output"),(0,r.yg)(l.default,{mdxType:"JSON"}))}s.isMDXComponent=!0}}]);