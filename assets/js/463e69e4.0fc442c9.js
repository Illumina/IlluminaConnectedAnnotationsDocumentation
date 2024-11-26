"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[7337],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var a=t(6540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||i;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8406:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(8168),r=(t(6540),t(5680));const i={title:"Canonical Transcripts"},o=void 0,l={unversionedId:"core-functionality/canonical-transcripts",id:"core-functionality/canonical-transcripts",title:"Canonical Transcripts",description:"Overview",source:"@site/docs/core-functionality/canonical-transcripts.md",sourceDirName:"core-functionality",slug:"/core-functionality/canonical-transcripts",permalink:"/IlluminaConnectedAnnotationsDocumentation/core-functionality/canonical-transcripts",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/core-functionality/canonical-transcripts.md",tags:[],version:"current",frontMatter:{title:"Canonical Transcripts"},sidebar:"docs",previous:{title:"Custom Annotations",permalink:"/IlluminaConnectedAnnotationsDocumentation/file-formats/custom-annotations"},next:{title:"Gene Fusion Detection",permalink:"/IlluminaConnectedAnnotationsDocumentation/core-functionality/gene-fusions"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"Known Algorithms",id:"known-algorithms",children:[{value:"UCSC",id:"ucsc",children:[],level:3},{value:"Ensembl",id:"ensembl",children:[],level:3},{value:"ACMG",id:"acmg",children:[],level:3},{value:"ClinVar",id:"clinvar",children:[],level:3}],level:2},{value:"Unified Approach",id:"unified-approach",children:[],level:2}],c={toc:s},p="wrapper";function u(e){let{components:n,...i}=e;return(0,r.yg)(p,(0,a.A)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"One of the more polarizing topics within annotation is the notion of canonical transcripts. Because of alternative splicing, we often have several transcripts for each gene. In the human genome, there are an average of 3.4 transcripts per gene (Tung, 2020). As scientists, we seem to have a need for identifying a representative example of a gene - even if there's no biological basis for the motivation."),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(8219).A})),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Golden Helix Blog")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"A few years ago, the guys over at Golden Helix wrote an excellent post about the pitfalls and issues surrounding the identification of canonical transcripts: ",(0,r.yg)("a",{parentName:"p",href:"https://blog.goldenhelix.com/whats-in-a-name-the-intricacies-of-identifying-variants/"},"What\u2019s in a Name: The Intricacies of Identifying Variants"),"."))),(0,r.yg)("p",null,"In Illumina Connected Annotations, we wanted to identify an algorithm for determining the canonical transcript and apply it consistently to all of our transcript data sources."),(0,r.yg)("h2",{id:"known-algorithms"},"Known Algorithms"),(0,r.yg)("h3",{id:"ucsc"},"UCSC"),(0,r.yg)("p",null,"UCSC publishes a list of canonical transcripts in its ",(0,r.yg)("inlineCode",{parentName:"p"},"knownCanonical")," table which is available via the ",(0,r.yg)("a",{parentName:"p",href:"https://genome.ucsc.edu/cgi-bin/hgTables"},"TableBrowser"),". Of the RefSeq data sources, it was the only one we could find that provided canonical transcripts:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The canonical transcript is defined as either the longest CDS, if the gene has translated transcripts, or the longest cDNA.")),(0,r.yg)("p",null,"If you were to implement this and compare it with the knownCanonical table, you would see a lot of exceptions to the rule."),(0,r.yg)("h3",{id:"ensembl"},"Ensembl"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"http://uswest.ensembl.org/Help/Glossary"},"Ensembl glossary")," states:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The canonical transcript is used in the gene tree analysis in Ensembl and does not necessarily reflect the most biologically relevant transcript of a gene. For human, the canonical transcript for a gene is set according to the following hierarchy:"),(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"Longest CCDS translation with no stop codons."),(0,r.yg)("li",{parentName:"ol"},"If no (1), choose the longest Ensembl/Havana merged translation with no stop codons."),(0,r.yg)("li",{parentName:"ol"},"If no (2), choose the longest translation with no stop codons."),(0,r.yg)("li",{parentName:"ol"},"If no translation, choose the longest non-protein-coding transcript."))),(0,r.yg)("h3",{id:"acmg"},"ACMG"),(0,r.yg)("p",null,"From the ACMG Guidelines for the Interpretation of Sequence Variants:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"A reference transcript for each gene should be used and provided in the report when describing coding variants. The transcript should represent either the longest known transcript and/or the most clinically relevant transcript.")),(0,r.yg)("h3",{id:"clinvar"},"ClinVar"),(0,r.yg)("p",null,"From the ClinVar paper:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"When there are multiple transcripts for a gene, ClinVar selects one HGVS expression to construct a preferred name. By default, this selection is based on the first reference standard transcript identified by the RefSeqGene/LRG (Locus Reference Genomic) collaboration.")),(0,r.yg)("h2",{id:"unified-approach"},"Unified Approach"),(0,r.yg)("p",null,"Our approach is almost identical to the one Golden Helix discussed in their article:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"If we're looking at RefSeq, only consider NM & NR transcripts as candidates for canonical transcripts."),(0,r.yg)("li",{parentName:"ol"},"Sort the transcripts in the following order:",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("a",{parentName:"li",href:"https://www.lrg-sequence.org/"},"Locus Reference Genomic (LRG)")," entries occur before non-LRG entries"),(0,r.yg)("li",{parentName:"ol"},"Descending CDS length"),(0,r.yg)("li",{parentName:"ol"},"Descending transcript length"),(0,r.yg)("li",{parentName:"ol"},"Ascending accession number"))),(0,r.yg)("li",{parentName:"ol"},"Grab the first entry")))}u.isMDXComponent=!0},8219:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/hk1-transcripts-a5b85474d3b002553687715dbd004907.png"}}]);