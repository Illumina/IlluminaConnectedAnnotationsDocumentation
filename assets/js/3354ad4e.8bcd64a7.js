"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[9161,6596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>N});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,N=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(N,o(o({ref:t},d),{},{components:n})):a.createElement(N,o({ref:t},d))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3064:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"data-sources/primate-ai-json",id:"version-3.25/data-sources/primate-ai-json",title:"primate-ai-json",description:"| Field               |  Type  | Notes                               |",source:"@site/versioned_docs/version-3.25/data-sources/primate-ai-json.md",sourceDirName:"data-sources",slug:"/data-sources/primate-ai-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.25/data-sources/primate-ai-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.25/data-sources/primate-ai-json.md",tags:[],version:"3.25",frontMatter:{}},s=[],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"primateAI-3D": [\n  {\n    "aminoAcidPosition": 2,\n    "refAminoAcid": "V",\n    "altAminoAcid": "M",\n    "score": 0.616944,\n    "scorePercentile": 0.52,\n    "genePercentile": 0.7,\n    "classification": "pathogenic",    \n    "ensemblTranscriptId": "ENST00000335137.4",\n    "refSeqTranscriptId": "NM_001005484.1",\n    "geneSymbol":"OR4F5" \n  }\n]\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"aminoAcidPosition"),(0,r.kt)("td",{parentName:"tr",align:"center"},"int"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Amino Acid Position (1-based)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"refAminoAcid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reference Amino Acid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"altAminoAcid"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Alternate Amino Acid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ensemblTranscriptId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transcript ID (Ensembl)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"refSeqTranscriptId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transcript ID (RefSeq)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"scorePercentile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"genePercentile"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"score"),(0,r.kt)("td",{parentName:"tr",align:"center"},"float"),(0,r.kt)("td",{parentName:"tr",align:"left"},"range: 0 - 1.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"classification"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"pathogenic or benign classification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"geneSymbol"),(0,r.kt)("td",{parentName:"tr",align:"center"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HGNC gene symbol")))))}m.isMDXComponent=!0},9221:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(3064);const o={title:"Primate AI-3D"},l=void 0,s={unversionedId:"data-sources/primate-ai",id:"version-3.25/data-sources/primate-ai",title:"Primate AI-3D",description:"Overview",source:"@site/versioned_docs/version-3.25/data-sources/primate-ai.mdx",sourceDirName:"data-sources",slug:"/data-sources/primate-ai",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.25/data-sources/primate-ai",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.25/data-sources/primate-ai.mdx",tags:[],version:"3.25",frontMatter:{title:"Primate AI-3D"},sidebar:"docs",previous:{title:"PhyloP",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.25/data-sources/phylop"},next:{title:"REVEL",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.25/data-sources/revel"}},p=[{value:"Overview",id:"overview",children:[],level:2},{value:"Parsing",id:"parsing",children:[{value:"TSV File",id:"tsv-file",children:[],level:3},{value:"Pre-processing",id:"pre-processing",children:[],level:3},{value:"SA Generation",id:"sa-generation",children:[],level:3},{value:"Known Issues",id:"known-issues",children:[],level:3},{value:"Download URL",id:"download-url",children:[],level:3}],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Primate AI is a deep residual neural network for classifying the pathogenicity of missense mutations."),(0,r.kt)("p",null,"The newer version, PrimateAI-3D, uses a 3D convolutional neural network, to predict protein variant pathogenicity using structural information.\nThe model's innovative use of primate sequencing and structural data offers promising insights into variant interpretation and disease gene identification.\nThe predictive score range between 0 and 1, with 0 being benign and 1 being most pathogenic."),(0,r.kt)("p",null,"For more details, refer to these publications:"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Publication")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"Hong Gao et al. ,The landscape of tolerated genetic variation in humans and primates. ",(0,r.kt)("em",{parentName:"li"},"Science")," ",(0,r.kt)("strong",{parentName:"li"},"380"),", eabn8153 (2023). ",(0,r.kt)("a",{parentName:"li",href:"https://doi.org/10.1126/science.abn8197"},"https://doi.org/10.1126/science.abn8197")),(0,r.kt)("li",{parentName:"ol"},"Sundaram, L., Gao, H., Padigepati, S.R. et al. Predicting the clinical impact of human mutation with deep neural networks. ",(0,r.kt)("em",{parentName:"li"},"Nat Genet")," ",(0,r.kt)("strong",{parentName:"li"},"50"),", 1161\u20131170 (2018). ",(0,r.kt)("a",{parentName:"li",href:"https://doi.org/10.1038/s41588-018-0167-z"},"https://doi.org/10.1038/s41588-018-0167-z"))))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Professional data source")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This is a Professional data source and is not available freely. Please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:annotation_support@illumina.com"},"annotation_support@illumina.com")," if you would like to obtain it."))),(0,r.kt)("h2",{id:"parsing"},"Parsing"),(0,r.kt)("h3",{id:"tsv-file"},"TSV File"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"chr pos non_flipped_ref non_flipped_alt gene_name   change_position_1based  ref_aa  alt_aa  score_PAI3D percentile_PAI3D     refseq prediction   per_gene_percentile_PAI3D  hgnc\nchr1    69094   G   A   ENST00000335137.4   2   V   M   0.6169436463713646   0.5200308441794135  NM_001005484.1 pathogenic   0.699207135777998  OR4F5\nchr1    69094   G   C   ENST00000335137.4   2   V   L   0.5557043975591658   0.4271457250214688  NM_001005484.1 benign  0.6053022794846382   OR4F5\nchr1    69094   G   T   ENST00000335137.4   2   V   L   0.5557043975591658   0.4271457391722522  NM_001005484.1 benign  0.6053022794846382   OR4F5\nchr1    69095   T   A   ENST00000335137.4   2   V   E   0.8063537482917307   0.8032228720356267  NM_001005484.1 pathogenic   0.9202180376610506  OR4F5\nchr1    69095   T   C   ENST00000335137.4   2   V   A   0.5795628190040587   0.4631329075815453  NM_001005484.1 benign  0.6442021803766105   OR4F5\nchr1    69095   T   G   ENST00000335137.4   2   V   G   0.7922330142557621   0.7834049546930125  NM_001005484.1 pathogenic   0.900396432111001  OR4F5\n")),(0,r.kt)("p",null,"From the file, all columns are parsed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chr")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"non_flipped_ref")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"non_flipped_alt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gene_name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"change_position_1based")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ref_aa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alt_aa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"score_PAI3D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"percentile_PAI3D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refseq")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prediction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"per_gene_percentile_PAI3D")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hgnc"))),(0,r.kt)("p",null,"The fields ",(0,r.kt)("inlineCode",{parentName:"p"},"gene_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"refseq")," define the Ensembl and RefSeq transcript IDs respectively.\nThese transcripts are passed as-is and some of them might be unrecognized/deprecated by RefSeq/Ensembl."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"GRCh37")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that for GRCh37, a lifted over file is provided.\nThe file is not sorted, therefore it must first be sorted.\nAlso note that certain RefSeq transcripts appear not to have been mapped during the lift-over process."))),(0,r.kt)("h3",{id:"pre-processing"},"Pre-processing"),(0,r.kt)("p",null,"Sorting"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gzcat PrimateAI-3D.hg19.txt.gz | sort -t $'\\t'  -k1,1 -k2,2n | gzip > PrimateAI-3D.hg19_sorted.tsv.gz\n")),(0,r.kt)("h3",{id:"sa-generation"},"SA Generation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'dotnet SAUtils.dll \\\nPrimateAi \\\n--r "${References}/Homo_sapiens.GRCh38.Nirvana.dat" \\\n--i "${ExternalDataSources}/PrimateAI/3D/PrimateAI-3D.hg38.txt.gz" \\\n--o "${SaUtilsOutput]"\n')),(0,r.kt)("h3",{id:"known-issues"},"Known Issues"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some transcript IDs defined in the data file are obsolete, retired, or updated.\nThey are not removed or modified by Illumina Connected Annotations, and are passed as-is from the PrimateAI-3D data source."),(0,r.kt)("h4",{parentName:"div",id:"example"},"Example:"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"ENST00000643905.1")," transcript is retired according to ",(0,r.kt)("a",{parentName:"p",href:"https://useast.ensembl.org/Homo_sapiens/Transcript/Idhistory?db=core;t=ENST00000643905"},"Ensembl")),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"NM_182838.2")," transcript is removed because it is a pseudo-gene according to ",(0,r.kt)("a",{parentName:"p",href:"https://www.ncbi.nlm.nih.gov/nuccore/NM_182838.3"},"RefSeq")))),(0,r.kt)("h3",{id:"download-url"},"Download URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://primad.basespace.illumina.com/"},"https://primad.basespace.illumina.com/")),(0,r.kt)("h2",{id:"json-output"},"JSON Output"),(0,r.kt)(i.default,{mdxType:"JSON"}))}c.isMDXComponent=!0}}]);