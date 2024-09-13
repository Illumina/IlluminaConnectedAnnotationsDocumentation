"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[8103],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3277:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Canonical Transcripts"},o=void 0,l={unversionedId:"core-functionality/canonical-transcripts",id:"version-3.23/core-functionality/canonical-transcripts",title:"Canonical Transcripts",description:"Overview",source:"@site/versioned_docs/version-3.23/core-functionality/canonical-transcripts.md",sourceDirName:"core-functionality",slug:"/core-functionality/canonical-transcripts",permalink:"/IlluminaConnectedAnnotationsDocumentation/core-functionality/canonical-transcripts",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.23/core-functionality/canonical-transcripts.md",tags:[],version:"3.23",frontMatter:{title:"Canonical Transcripts"},sidebar:"docs",previous:{title:"Custom Annotations",permalink:"/IlluminaConnectedAnnotationsDocumentation/file-formats/custom-annotations"},next:{title:"Transcript Consequence Impact",permalink:"/IlluminaConnectedAnnotationsDocumentation/core-functionality/transcript-consequence-impacts"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Known Algorithms",id:"known-algorithms",children:[{value:"UCSC",id:"ucsc",children:[],level:3},{value:"Ensembl",id:"ensembl",children:[],level:3},{value:"ACMG",id:"acmg",children:[],level:3},{value:"ClinVar",id:"clinvar",children:[],level:3}],level:2},{value:"Unified Approach",id:"unified-approach",children:[],level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"One of the more polarizing topics within annotation is the notion of canonical transcripts. Because of alternative splicing, we often have several transcripts for each gene. In the human genome, there are an average of 3.4 transcripts per gene (Tung, 2020). As scientists, we seem to have a need for identifying a representative example of a gene - even if there's no biological basis for the motivation."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8722).Z})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Golden Helix Blog")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A few years ago, the guys over at Golden Helix wrote an excellent post about the pitfalls and issues surrounding the identification of canonical transcripts: ",(0,r.kt)("a",{parentName:"p",href:"https://blog.goldenhelix.com/whats-in-a-name-the-intricacies-of-identifying-variants/"},"What\u2019s in a Name: The Intricacies of Identifying Variants"),"."))),(0,r.kt)("p",null,"In Illumina Connected Annotations, we wanted to identify an algorithm for determining the canonical transcript and apply it consistently to all of our transcript data sources."),(0,r.kt)("h2",{id:"known-algorithms"},"Known Algorithms"),(0,r.kt)("h3",{id:"ucsc"},"UCSC"),(0,r.kt)("p",null,"UCSC publishes a list of canonical transcripts in its ",(0,r.kt)("inlineCode",{parentName:"p"},"knownCanonical")," table which is available via the ",(0,r.kt)("a",{parentName:"p",href:"https://genome.ucsc.edu/cgi-bin/hgTables"},"TableBrowser"),". Of the RefSeq data sources, it was the only one we could find that provided canonical transcripts:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The canonical transcript is defined as either the longest CDS, if the gene has translated transcripts, or the longest cDNA.")),(0,r.kt)("p",null,"If you were to implement this and compare it with the knownCanonical table, you would see a lot of exceptions to the rule."),(0,r.kt)("h3",{id:"ensembl"},"Ensembl"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"http://uswest.ensembl.org/Help/Glossary"},"Ensembl glossary")," states:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The canonical transcript is used in the gene tree analysis in Ensembl and does not necessarily reflect the most biologically relevant transcript of a gene. For human, the canonical transcript for a gene is set according to the following hierarchy:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Longest CCDS translation with no stop codons."),(0,r.kt)("li",{parentName:"ol"},"If no (1), choose the longest Ensembl/Havana merged translation with no stop codons."),(0,r.kt)("li",{parentName:"ol"},"If no (2), choose the longest translation with no stop codons."),(0,r.kt)("li",{parentName:"ol"},"If no translation, choose the longest non-protein-coding transcript."))),(0,r.kt)("h3",{id:"acmg"},"ACMG"),(0,r.kt)("p",null,"From the ACMG Guidelines for the Interpretation of Sequence Variants:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A reference transcript for each gene should be used and provided in the report when describing coding variants. The transcript should represent either the longest known transcript and/or the most clinically relevant transcript.")),(0,r.kt)("h3",{id:"clinvar"},"ClinVar"),(0,r.kt)("p",null,"From the ClinVar paper:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When there are multiple transcripts for a gene, ClinVar selects one HGVS expression to construct a preferred name. By default, this selection is based on the first reference standard transcript identified by the RefSeqGene/LRG (Locus Reference Genomic) collaboration.")),(0,r.kt)("h2",{id:"unified-approach"},"Unified Approach"),(0,r.kt)("p",null,"Our approach is almost identical to the one Golden Helix discussed in their article:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If we're looking at RefSeq, only consider NM & NR transcripts as candidates for canonical transcripts."),(0,r.kt)("li",{parentName:"ol"},"Sort the transcripts in the following order:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.lrg-sequence.org/"},"Locus Reference Genomic (LRG)")," entries occur before non-LRG entries"),(0,r.kt)("li",{parentName:"ol"},"Descending CDS length"),(0,r.kt)("li",{parentName:"ol"},"Descending transcript length"),(0,r.kt)("li",{parentName:"ol"},"Ascending accession number"))),(0,r.kt)("li",{parentName:"ol"},"Grab the first entry")))}d.isMDXComponent=!0},8722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hk1-transcripts-a5b85474d3b002553687715dbd004907.png"}}]);