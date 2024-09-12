"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[9767],{3905:(t,n,e)=>{e.d(n,{Zo:()=>d,kt:()=>N});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var m=a.createContext({}),o=function(t){var n=a.useContext(m),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},d=function(t){var n=o(t.components);return a.createElement(m.Provider,{value:n},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=o(e),k=r,N=u["".concat(m,".").concat(k)]||u[k]||g[k]||l;return e?a.createElement(N,i(i({ref:n},d),{},{components:e})):a.createElement(N,i({ref:n},d))}));function N(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=e[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},1062:(t,n,e)=>{e.r(n),e.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=e(7462),r=(e(7294),e(3905));const l={title:"Transcript Consequence Impact"},i=void 0,p={unversionedId:"core-functionality/transcript-consequence-impacts",id:"core-functionality/transcript-consequence-impacts",title:"Transcript Consequence Impact",description:"Overview",source:"@site/docs/core-functionality/transcript-consequence-impacts.md",sourceDirName:"core-functionality",slug:"/core-functionality/transcript-consequence-impacts",permalink:"/IlluminaConnectedAnnotationsDocumentation/next/core-functionality/transcript-consequence-impacts",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/core-functionality/transcript-consequence-impacts.md",tags:[],version:"current",frontMatter:{title:"Transcript Consequence Impact"},sidebar:"docs",previous:{title:"Junction Preserving Annotation",permalink:"/IlluminaConnectedAnnotationsDocumentation/next/core-functionality/junction-preserving"},next:{title:"Variant IDs",permalink:"/IlluminaConnectedAnnotationsDocumentation/next/core-functionality/variant-ids"}},m=[{value:"Overview",id:"overview",children:[],level:2},{value:"Sources",id:"sources",children:[],level:2},{value:"Consequence Impacts",id:"consequence-impacts",children:[{value:"Known Issues",id:"known-issues",children:[],level:3}],level:2},{value:"Example Transcript",id:"example-transcript",children:[],level:2}],o={toc:m},d="wrapper";function u(t){let{components:n,...e}=t;return(0,r.kt)(d,(0,a.Z)({},o,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Illumina Connected Annotations provides transcript consequence impacts from ",(0,r.kt)("a",{parentName:"p",href:"https://pcingola.github.io/SnpEff"},"SnpEff"),"."),(0,r.kt)("p",null,"Following definitions are used for the impact ratings as obtained from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pcingola/SnpEff/blob/master/src/docs/se_inputoutput.md#impact-prediction"},"SnpEff"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Impact"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"The variant is assumed to have high (disruptive) impact in the protein, probably causing protein truncation, loss of function or triggering nonsense mediated decay.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"A non-disruptive variant that might change protein effectiveness.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"Assumed to be mostly harmless or unlikely to change protein behavior.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"Usually non-coding variants or variants affecting non-coding genes, where predictions are difficult or there is no evidence of impact.")))),(0,r.kt)("h2",{id:"sources"},"Sources"),(0,r.kt)("p",null,"Not all consequences are rated by SnpEff, therefore Illumina Connected Annotations combines the ratings from SnpEff with those from VEP."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SnpEff ",(0,r.kt)("a",{parentName:"li",href:"https://pcingola.github.io/SnpEff/se_inputoutput/"},"Documentation")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/pcingola/SnpEff/blob/001b947893b616e3af082e6c565e253eef59db98/src/main/java/org/snpeff/snpEffect/EffectType.java#L54"},"Codebase")),(0,r.kt)("li",{parentName:"ol"},"VEP ",(0,r.kt)("a",{parentName:"li",href:"https://useast.ensembl.org/info/genome/variation/prediction/predicted_data.html"},"Documentation"))),(0,r.kt)("h2",{id:"consequence-impacts"},"Consequence Impacts"),(0,r.kt)("p",null,"Following table gives the combined rating for all consequences recognized by Illumina Connected Annotations."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Consequence"),(0,r.kt)("th",{parentName:"tr",align:null},"SnpEff Impact"),(0,r.kt)("th",{parentName:"tr",align:null},"VEP Impact"),(0,r.kt)("th",{parentName:"tr",align:null},"Illumina Connected Annotations Impact"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bidirectional_gene_fusion"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"coding_sequence_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"low, modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"Based on CDS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy_number_change"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy_number_decrease"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copy_number_increase"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"downstream_gene_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feature_elongation"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"feature_truncation"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"five_prime_duplicated_transcript"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"five_prime_UTR_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frameshift_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gene_fusion"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incomplete_terminal_codon_variant"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inframe_deletion"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inframe_insertion"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"intron_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mature_miRNA_variant"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"missense_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NMD_transcript_variant"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non_coding_transcript_exon_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"non_coding_transcript_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protein_altering_variant"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate"),(0,r.kt)("td",{parentName:"tr",align:null},"VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regulatory_region_ablation"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regulatory_region_amplification"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"regulatory_region_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short_tandem_repeat_change"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short_tandem_repeat_contraction"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"short_tandem_repeat_expansion"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"splice_acceptor_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"splice_donor_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"splice_region_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"moderate, low"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"Based on SPLICE_SITE_REGION in SnpEff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_lost"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_retained_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stop_gained"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stop_lost"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stop_retained_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"synonymous_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"low"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"three_prime_duplicated_transcript"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"three_prime_UTR_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transcript_ablation"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transcript_amplification"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"VEP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transcript_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unidirectional_gene_fusion"),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"high"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream_gene_variant"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"modifier"),(0,r.kt)("td",{parentName:"tr",align:null},"SnpEff + VEP")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note: ")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"For transcripts with multiple consequences, the most severe impact rating is chosen."),(0,r.kt)("li",{parentName:"ol"},"In case of consequences that do not have any impact rating from SnpEff or VEP, Illumina Connected Annotations provides ",(0,r.kt)("inlineCode",{parentName:"li"},"modifier"),".")))),(0,r.kt)("h3",{id:"known-issues"},"Known Issues"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Known Issues")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The consequence ",(0,r.kt)("inlineCode",{parentName:"p"},"splice_polypyrimidine_tract_variant"),", is rated as ",(0,r.kt)("inlineCode",{parentName:"p"},"low")," by VEP.\nHowever, this consequence is not annotated by Illumina Connected Annotations, therefore the impact will also not be provided."))),(0,r.kt)("h2",{id:"example-transcript"},"Example Transcript"),(0,r.kt)("p",null,"The key ",(0,r.kt)("inlineCode",{parentName:"p"},"impact")," for each transcript gives the impact rating for the ",(0,r.kt)("inlineCode",{parentName:"p"},"consequence"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{20-24}","{20-24}":!0},'{\n  "variants": [\n    {\n      "vid": "1-1623412-T-C",\n      "chromosome": "1",\n      "begin": 1623412,\n      "end": 1623412,\n      "refAllele": "T",\n      "altAllele": "C",\n      "variantType": "SNV",\n      "hgvsg": "NC_000001.11:g.1623412T>C",\n      "transcripts": [\n        {\n          "transcript": "ENST00000479659.5",\n          "source": "Ensembl",\n          "bioType": "lncRNA",\n          "introns": "2/18",\n          "geneId": "ENSG00000197530",\n          "hgnc": "MIB2",\n          "consequence": [\n            "intron_variant",\n            "non_coding_transcript_variant"\n          ],\n          "impact": "modifier",\n          "hgvsc": "ENST00000479659.5:n.288-19T>C"\n        },\n        {\n          "transcript": "ENST00000489635.5",\n          "source": "VEP",\n          "bioType": "mRNA",\n          "codons": "aTg/aCg",\n          "aminoAcids": "M/T",\n          "cdnaPos": "269",\n          "cdsPos": "134",\n          "exons": "3/20",\n          "proteinPos": "45",\n          "geneId": "ENSG00000197530",\n          "hgnc": "MIB2",\n          "consequence": [\n            "missense_variant"\n          ],\n          "impact": "moderate",\n          "hgvsc": "ENST00000489635.5:c.134T>C",\n          "hgvsp": "ENSP00000426007.1:p.(Met45Thr)",\n          "proteinId": "ENSP00000426007.1"\n        }\n      ]\n    }\n  ]\n}\n')))}u.isMDXComponent=!0}}]);