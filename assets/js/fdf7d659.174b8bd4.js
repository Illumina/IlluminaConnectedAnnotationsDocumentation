"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[7796],{5680:(r,a,t)=>{t.d(a,{xA:()=>E,yg:()=>L});var n=t(6540);function i(r,a,t){return a in r?Object.defineProperty(r,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[a]=t,r}function e(r,a){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),t.push.apply(t,n)}return t}function A(r){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?e(Object(t),!0).forEach((function(a){i(r,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):e(Object(t)).forEach((function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(t,a))}))}return r}function p(r,a){if(null==r)return{};var t,n,i=function(r,a){if(null==r)return{};var t,n,i={},e=Object.keys(r);for(n=0;n<e.length;n++)t=e[n],a.indexOf(t)>=0||(i[t]=r[t]);return i}(r,a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);for(n=0;n<e.length;n++)t=e[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(i[t]=r[t])}return i}var s=n.createContext({}),l=function(r){var a=n.useContext(s),t=a;return r&&(t="function"==typeof r?r(a):A(A({},a),r)),t},E=function(r){var a=l(r.components);return n.createElement(s.Provider,{value:a},r.children)},T="mdxType",_={inlineCode:"code",wrapper:function(r){var a=r.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(r,a){var t=r.components,i=r.mdxType,e=r.originalType,s=r.parentName,E=p(r,["components","mdxType","originalType","parentName"]),T=l(t),c=i,L=T["".concat(s,".").concat(c)]||T[c]||_[c]||e;return t?n.createElement(L,A(A({ref:a},E),{},{components:t})):n.createElement(L,A({ref:a},E))}));function L(r,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof r||i){var e=t.length,A=new Array(e);A[0]=c;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=r,p[T]="string"==typeof r?r:i,A[1]=p;for(var l=2;l<e;l++)A[l]=t[l];return n.createElement.apply(null,A)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},89:(r,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>A,default:()=>T,frontMatter:()=>e,metadata:()=>p,toc:()=>s});var n=t(8168),i=(t(6540),t(5680));const e={title:"Illumina Connected Annotations VCF File Format"},A=void 0,p={unversionedId:"file-formats/illumina-annotator-vcf-file-format",id:"file-formats/illumina-annotator-vcf-file-format",title:"Illumina Connected Annotations VCF File Format",description:"Overview",source:"@site/docs/file-formats/illumina-annotator-vcf-file-format.mdx",sourceDirName:"file-formats",slug:"/file-formats/illumina-annotator-vcf-file-format",permalink:"/IlluminaConnectedAnnotationsDocumentation/file-formats/illumina-annotator-vcf-file-format",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/file-formats/illumina-annotator-vcf-file-format.mdx",tags:[],version:"current",frontMatter:{title:"Illumina Connected Annotations VCF File Format"},sidebar:"docs",previous:{title:"Illumina Connected Annotations JSON File Format",permalink:"/IlluminaConnectedAnnotationsDocumentation/file-formats/illumina-annotator-json-file-format"},next:{title:"Custom Annotations",permalink:"/IlluminaConnectedAnnotationsDocumentation/file-formats/custom-annotations"}},s=[{value:"Overview",id:"overview",children:[{value:"VCF Output Format",id:"vcf-output-format",children:[{value:"Header",id:"header",children:[],level:4},{value:"VCF Lines",id:"vcf-lines",children:[],level:4}],level:3}],level:2}],l={toc:s},E="wrapper";function T(r){let{components:a,...t}=r;return(0,i.yg)(E,(0,n.A)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"While JSON output format is the default option, we support VCF file as our output too. The VCF output mode can be enabled by ",(0,i.yg)("inlineCode",{parentName:"p"},"--output-mode vcf")," as shown below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"dotnet Annotator.dll \\\n     -c Data/Cache \\\n     --output-format vcf \\\n     -r Data/References/Homo_sapiens.GRCh38.Nirvana.dat \\\n     -i HiSeq.10000.vcf.gz \\\n     -o HiSeq.10000.out\n# HiSeq.10000.out.vcf.gz file should be produced after processing.\n")),(0,i.yg)("h3",{id:"vcf-output-format"},"VCF Output Format"),(0,i.yg)("h4",{id:"header"},"Header"),(0,i.yg)("p",null,"The output VCF file should have headers similar as below, which indicates the IlluminaConnectedAnnotations's version, file creation time, assembly, and data sources used for producing the output:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-tsv"},'##fileformat=VCFv4.2\n##IlluminaConnectedAnnotations="3.24.0" time="2024-03-22 07:02:13" assembly="GRCh38" Ensembl="110" RefSeq="GCF_000001405.40-RS_2023_03"\n##FILTER=<ID=PASS,Description="All filters passed">\n##fileDate=20230110\n##INFO=<ID=IMPRECISE,Number=0,Type=Flag,Description="Imprecise structural variation">\n...\n##INFO=<ID=CTB,Number=1,Type=String,Description="Cytoband of the position">\n##INFO=<ID=CSQ,Number=.,Type=String,Description="Consequence annotations from Illumina Connected Annotations. Format: Allele|Consequence|GeneSymbol|FeatureType|Feature|Canonical|HGVSg|HGVSc|HGVSp|Impact|GeneNcbiId|BioType|ISCN|VariantId">\n...\n##FORMAT=<ID=ISCN,Number=1,Type=String,Description="ISCN of the sample">\n...\n#CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO    FORMAT  Novaseq_TSPF450-NA12878-1-HFHWJDMXX_S1_L001     Novaseq_TSPF450-NA12891-1-HFHWJDMXX_S3_L001\n')),(0,i.yg)("h4",{id:"vcf-lines"},"VCF Lines"),(0,i.yg)("p",null,"Core annotation for overlapping transcripts is enabled and no supplementary annotation is added in VCF mode. CSQ and CTB fields under INFO column and ISCN Sample field are added with following format:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'##INFO=<ID=CTB,Number=1,Type=String,Description="Cytoband of the position">\n##INFO=<ID=CSQ,Number=.,Type=String,Description="Consequence annotations from Illumina Connected Annotations. Format: Allele|Consequence|GeneSymbol|FeatureType|Feature|Canonical|HGVSg|HGVSc|HGVSp|Impact|GeneNcbiId|BioType|ISCN|VariantId">\n...\n##FORMAT=<ID=ISCN,Number=1,Type=String,Description="ISCN of the sample">\n')),(0,i.yg)("p",null,"Multiple transcripts are separated with ",(0,i.yg)("inlineCode",{parentName:"p"},","),". An example of produced VCF lines as below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"chr21   5316038 MantaDEL:1:11095:74644:0:4:0    G   <DEL>   999 MaxDepth    END=7246574;SVTYPE=DEL;SVLEN=-1930536;SVINSLEN=4;SVINSSEQ=TTCT;CSQ=<DEL>|transcript_ablation&transcript_variant|LINC01670|Transcript|ENST00000624261.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|105379487|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC01670|Transcript|ENST00000624859.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|105379487|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC01670|Transcript|ENST00000623227.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|105379487|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000619252.4|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000623449.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000623436.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000624627.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000624368.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000623914.3|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000624516.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000624412.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000622939.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000623050.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000624444.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000623887.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|ENST00000611026.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|Y_RNA|Transcript|ENST00000610788.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000279784|Transcript|ENST00000623587.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000279064|Transcript|ENST00000623723.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000288187|Transcript|ENST00000671789.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|Y_RNA|Transcript|ENST00000616522.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000275496|Transcript|ENST00000621924.4|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000275496|Transcript|ENST00000619488.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000275496|Transcript|ENST00000617746.4|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000275496|Transcript|ENST00000624446.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000275496|Transcript|ENST00000623405.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000275496|Transcript|ENST00000623575.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000275496|Transcript|ENST00000623506.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280019|Transcript|ENST00000624484.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000279709|Transcript|ENST00000623377.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000688828.2|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000688458.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000692898.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000689306.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000692318.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000624576.3|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000623738.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000701070.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000623989.4|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000701260.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000692046.2|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000692237.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000689354.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000624165.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278903|Transcript|ENST00000624847.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|Y_RNA|Transcript|ENST00000615262.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280145|Transcript|ENST00000623047.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280145|Transcript|ENST00000623106.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280145|Transcript|ENST00000625185.3|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280145|Transcript|ENST00000624846.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280145|Transcript|ENST00000623313.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280145|Transcript|ENST00000623950.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280145|Transcript|ENST00000624965.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278878|Transcript|ENST00000623225.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280145|Transcript|ENST00000623324.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278878|Transcript|ENST00000624181.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000279788|Transcript|ENST00000624266.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000279728|Transcript|ENST00000623809.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280164|Transcript|ENST00000623892.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000279998|Transcript|ENST00000623678.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|hsa-mir-8069-1|Transcript|ENST00000616627.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000279751|Transcript|ENST00000623720.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280018|Transcript|ENST00000623165.3|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280018|Transcript|ENST00000624519.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280018|Transcript|ENST00000623347.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000280018|Transcript|ENST00000624728.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000279477|Transcript|ENST00000623518.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000278884|Transcript|ENST00000625184.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000277067|Transcript|ENST00000623095.3|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000277067|Transcript|ENST00000622911.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000277067|Transcript|ENST00000621909.4|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000277067|Transcript|ENST00000623394.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000277067|Transcript|ENST00000624310.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|ENSG00000277067|Transcript|ENST00000615804.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|Y_RNA|Transcript|ENST00000617336.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high||True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|CTBP2P10|Transcript|ENST00000624153.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|107987305|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LINC03104|Transcript|NR_170984.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724219|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724354|Transcript|NR_136540.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724354|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|CH507-42P11.6|Transcript|NR_171776.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724398|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724428|Transcript|NM_001320643.3|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724428|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NM_001354012.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NM_001354009.3|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NR_148682.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NM_001354010.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NM_001354015.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NM_001354014.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NM_001321073.3|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NM_001354008.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NM_001354007.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724560|Transcript|NM_001354006.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724560|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724594|Transcript|NM_001320646.2|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724594|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724594|Transcript|NM_001320650.2|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724594|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724594|Transcript|NM_001320648.2|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724594|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724594|Transcript|NM_001320651.2|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724594|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724652|Transcript|NM_001314050.5|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724652|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC106780825|Transcript|NR_133678.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|106780825|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724652|Transcript|NM_001320719.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724652|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC110091777|Transcript|NR_146656.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|110091777|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC110091777|Transcript|NR_146655.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|110091777|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC110091777|Transcript|NR_146657.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|110091777|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|MIR8069-1|Transcript|NR_107036.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102466252|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC105379499|Transcript|NR_188605.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|105379499|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC105379499|Transcript|NR_188604.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|105379499|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC105379499|Transcript|NR_188606.1|False|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|105379499|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC105379499|Transcript|NR_188603.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|105379499|True||del(21)(p12p11.2),<DEL>|transcript_ablation&transcript_variant|LOC102724843|Transcript|NR_170986.1|True|NC_000021.9:g.5316039_7246574delins<DEL>|||21-5316038-7246574-G-<DEL>-DEL|high|102724843|True||del(21)(p12p11.2);CTB=21p12-p11.2    GT:FT:GQ:PL:PR:SR:DQ:DN:ISCN    0/1:PASS:999:999,0,999:58,5:69,63:.:.:del(21)(p12p11.2) 0/1:PASS:999:999,0,999:59,7:67,71:.:.:del(21)(p12p11.2) 0/1:PASS:999:999,0,999:118,4:140,79:.:.:del(21)(p12p11.2)\nchr21   6639699 MantaDEL:514264:0:0:0:7:0   AGAAAGAAAGAAAGAGAAAAAAAGAAGAAAGAAAGAAAGAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAG  AAA 537 MaxMQ0Frac  END=6639804;SVTYPE=DEL;SVLEN=-105;CIGAR=1M2I105D;CSQ=AA|upstream_gene_variant|ENSG00000280145|Transcript|ENST00000623047.1|False|NC_000021.9:g.6639700_6639804delinsAA|||21-6639700-GAAAGAAAGAAAGAGAAAAAAAGAAGAAAGAAAGAAAGAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAG-AA|modifier||False|lncRNA|,AA|intron_variant&non_coding_transcript_variant|ENSG00000280145|Transcript|ENST00000623106.3|False|NC_000021.9:g.6639700_6639804delinsAA|ENST00000623106.3:n.223-5036_223-4932delinsTT||21-6639700-GAAAGAAAGAAAGAGAAAAAAAGAAGAAAGAAAGAAAGAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAG-AA|modifier||False|lncRNA|,AA|intron_variant&non_coding_transcript_variant|ENSG00000280145|Transcript|ENST00000625185.3|True|NC_000021.9:g.6639700_6639804delinsAA|ENST00000625185.3:n.232-5036_232-4932delinsTT||21-6639700-GAAAGAAAGAAAGAGAAAAAAAGAAGAAAGAAAGAAAGAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAG-AA|modifier||False|lncRNA|,AA|intron_variant&non_coding_transcript_variant|ENSG00000280145|Transcript|ENST00000624846.3|False|NC_000021.9:g.6639700_6639804delinsAA|ENST00000624846.3:n.130-5036_130-4932delinsTT||21-6639700-GAAAGAAAGAAAGAGAAAAAAAGAAGAAAGAAAGAAAGAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAG-AA|modifier||False|lncRNA|,AA|intron_variant&non_coding_transcript_variant|ENSG00000280145|Transcript|ENST00000623313.1|False|NC_000021.9:g.6639700_6639804delinsAA|ENST00000623313.1:n.312-7367_312-7263delinsTT||21-6639700-GAAAGAAAGAAAGAGAAAAAAAGAAGAAAGAAAGAAAGAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAG-AA|modifier||False|lncRNA|,AA|upstream_gene_variant|ENSG00000280145|Transcript|ENST00000623950.1|False|NC_000021.9:g.6639700_6639804delinsAA|||21-6639700-GAAAGAAAGAAAGAGAAAAAAAGAAGAAAGAAAGAAAGAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAG-AA|modifier||False|lncRNA|,AA|intron_variant&non_coding_transcript_variant|ENSG00000280145|Transcript|ENST00000624965.1|False|NC_000021.9:g.6639700_6639804delinsAA|ENST00000624965.1:n.151-5036_151-4932delinsTT||21-6639700-GAAAGAAAGAAAGAGAAAAAAAGAAGAAAGAAAGAAAGAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAGAAAGAAGAAAGAAAGAAAG-AA|modifier||False|lncRNA|;CTB=21p12GT:FT:GQ:PL:PR:SR:DQ:DN:ISCN   0/1:PASS:8:205,0,4:1,0:11,5:.:.:.   0/1:PASS:86:431,0,83:0,0:16,13:.:.:.    0/0:HomRef:61:0,11,66:2,0:7,0:.:.:.\nchr21   8811598 MantaBND:514412:0:1:0:0:0:0 G   G[chr21:8854301[    999 NoPairSupport   SVTYPE=BND;MATEID=MantaBND:514412:0:1:0:0:0:1;CIPOS=0,4;HOMLEN=4;HOMSEQ=TGCA;BND_DEPTH=300;MATE_BND_DEPTH=213;CSQ=G[chr21:8854301[|transcript_variant|ENSG00000286033|Transcript|ENST00000651312.1|True|NC_000021.9:g.8811598delinsG[chr21:8854301[|||21-8811598-G-G[chr21:8854301[|modifier||False|lncRNA|;CTB=21p11.2 GT:FT:GQ:PL:PR:SR:DQ:DN:ISCN    0/1:PASS:253:303,0,999:9,0:89,12:.:.:.  0/1:PASS:999:999,0,999:0,0:99,39:.:.:.  0/0:HomRef:410:0,360,999:17,0:141,0:.:.:.\nchr21   8813774 MantaINS:514450:0:0:0:1:0   T   TATATATACATATATATATATACATATATATATATGTATATATATATATATAC   487 MaxMQ0Frac  END=8813774;SVTYPE=INS;SVLEN=52;CIGAR=1M52I;CIPOS=0,7;HOMLEN=7;HOMSEQ=ATATATA;CSQ=ATATATACATATATATATATACATATATATATATGTATATATATATATATAC|intron_variant&non_coding_transcript_variant|ENSG00000286033|Transcript|ENST00000651312.1|True|NC_000021.9:g.8813781_8813782insCATATATATATATACATATATATATATGTATATATATATATATACATATATA|ENST00000651312.1:n.40-6603_40-6602insGTATATATATATATATACATATATATATATGTATATATATATATGTATATAT||21-8813774-T-TATATATACATATATATATATACATATATATATATGTATATATATATATATAC|modifier||False|lncRNA|;CTB=21p11.2   GT:FT:GQ:PL:PR:SR:DQ:DN:ISCN    0/1:PASS:29:128,0,26:0,0:8,4:.:.:.  1/1:PASS:6:335,8,0:0,0:6,8:.:.:.    0/1:PASS:21:176,0,18:0,0:3,6:.:.:.\n")))}T.isMDXComponent=!0}}]);