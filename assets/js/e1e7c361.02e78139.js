"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[2264],{5680:(n,e,o)=>{o.d(e,{xA:()=>p,yg:()=>m});var t=o(6540);function i(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function r(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}function a(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){i(n,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(o,e))}))}return n}function s(n,e){if(null==n)return{};var o,t,i=function(n,e){if(null==n)return{};var o,t,i={},r=Object.keys(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(i[o]=n[o]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(i[o]=n[o])}return i}var c=t.createContext({}),l=function(n){var e=t.useContext(c),o=e;return n&&(o="function"==typeof n?n(e):a(a({},e),n)),o},p=function(n){var e=l(n.components);return t.createElement(c.Provider,{value:e},n.children)},d="mdxType",g={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(n,e){var o=n.components,i=n.mdxType,r=n.originalType,c=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),d=l(o),u=i,m=d["".concat(c,".").concat(u)]||d[u]||g[u]||r;return o?t.createElement(m,a(a({ref:e},p),{},{components:o})):t.createElement(m,a({ref:e},p))}));function m(n,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=o.length,a=new Array(r);a[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s[d]="string"==typeof n?n:i,a[1]=s;for(var l=2;l<r;l++)a[l]=o[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},766:(n,e,o)=>{o.r(e),o.d(e,{contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=o(8168),i=(o(6540),o(5680));const r={title:"Parsing Illumina Connected Annotations JSON"},a=void 0,s={unversionedId:"introduction/parsing-json",id:"introduction/parsing-json",title:"Parsing Illumina Connected Annotations JSON",description:"Parsing JSON",source:"@site/docs/introduction/parsing-json.md",sourceDirName:"introduction",slug:"/introduction/parsing-json",permalink:"/IlluminaConnectedAnnotationsDocumentation/introduction/parsing-json",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/docs/introduction/parsing-json.md",tags:[],version:"current",frontMatter:{title:"Parsing Illumina Connected Annotations JSON"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/IlluminaConnectedAnnotationsDocumentation/introduction/getting-started"},next:{title:"1000 Genomes",permalink:"/IlluminaConnectedAnnotationsDocumentation/data-sources/1000Genomes"}},c=[{value:"Parsing JSON",id:"parsing-json",children:[{value:"Organization",id:"organization",children:[],level:3},{value:"JASIX",id:"jasix",children:[],level:3}],level:2}],l={toc:c},p="wrapper";function d(n){let{components:e,...r}=n;return(0,i.yg)(p,(0,t.A)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"parsing-json"},"Parsing JSON"),(0,i.yg)("p",null,"Our JSON files are organized similarly to original VCF variants:"),(0,i.yg)("p",null,(0,i.yg)("img",{src:o(6001).A})),(0,i.yg)("p",null,"Illumina Connected Annotations JSON files can get very large and sometimes we receive feedback that a bioinformatician tried to read the JSON file into Python or R resulting in a program that ran out of available RAM. This happens because those parsers try to load everything into memory all at once."),(0,i.yg)("p",null,"To get around those issues, we play some clever tricks with newlines that enables our users to parse our JSON files quickly and efficiently."),(0,i.yg)("h3",{id:"organization"},"Organization"),(0,i.yg)("p",null,"Our JSON file is arranged as follows:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"the header section is located on the first line"),(0,i.yg)("li",{parentName:"ul"},"each line after that corresponds to a position (same as a row in a VCF file)",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"until you reach the genes section ",(0,i.yg)("inlineCode",{parentName:"li"},'],"genes":[')))),(0,i.yg)("li",{parentName:"ul"},"each line after that corresponds to a gene",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"until you reach the end ",(0,i.yg)("inlineCode",{parentName:"li"},"]}"))))),(0,i.yg)("p",null,"Knowing this, you can load each position line as an independent JSON object and extract the information you need. "),(0,i.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Jupyter Notebook")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"To demonstrate this, we have put together a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/blob/master/static/files/parse-json-python.ipynb"},"Jupyter notebook demonstrating how to do this in Python")," and a ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/blob/master/static/files/parse-json-r.ipynb"},"R version")," as well."))),(0,i.yg)("h3",{id:"jasix"},"JASIX"),(0,i.yg)("p",null,"One of the tools that we really like in the VCF ecosystem is ",(0,i.yg)("a",{parentName:"p",href:"https://dx.doi.org/10.1093%2Fbioinformatics%2Fbtq671"},"tabix"),". Unfortunately, tabix only works for tab-delimited file formats. As a result, we created a similar tool for Illumina Connected Annotations JSON files called JASIX."),(0,i.yg)("p",null,"Here's an example of how you might use JASIX:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"dotnet bin/Release/net6.0/Jasix.dll -i dragen.json.gz -q chr1:942450-942455\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"the ",(0,i.yg)("inlineCode",{parentName:"li"},"-i")," argument specifies the Illumina Connected Annotations JSON path"),(0,i.yg)("li",{parentName:"ul"},"the ",(0,i.yg)("inlineCode",{parentName:"li"},"-q")," argument specifies a genomic range ",(0,i.yg)("em",{parentName:"li"},"(you can use as many of these as you want)"))),(0,i.yg)("p",null,"JASIX also includes additional options for showing the Illumina Connected Annotations header or for extracting different sections (like the genes section)."),(0,i.yg)("p",null,"The output from JASIX is compliant JSON object shown in pretty-printed form:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{"positions":[\n{\n  "chromosome": "chr1",\n  "position": 942451,\n  "refAllele": "T",\n  "altAlleles": [\n    "C"\n  ],\n  "quality": 484.23,\n  "filters": [\n    "PASS"\n  ],\n  "cytogeneticBand": "1p36.33",\n  "samples": [\n    {\n      "genotype": "1/1",\n      "variantFrequencies": [\n        1\n      ],\n      "totalDepth": 21,\n      "genotypeQuality": 60,\n      "alleleDepths": [\n        0,\n        21\n      ]\n    },\n    {\n      "genotype": "1/1",\n      "variantFrequencies": [\n        1\n      ],\n      "totalDepth": 32,\n      "genotypeQuality": 93,\n      "alleleDepths": [\n        0,\n        32\n      ]\n    },\n    {\n      "genotype": "1/1",\n      "variantFrequencies": [\n        1\n      ],\n      "totalDepth": 36,\n      "genotypeQuality": 105,\n      "alleleDepths": [\n        0,\n        36\n      ]\n    }\n  ],\n  "variants": [\n    {\n      "vid": "1-942451-T-C",\n      "chromosome": "chr1",\n      "begin": 942451,\n      "end": 942451,\n      "refAllele": "T",\n      "altAllele": "C",\n      "variantType": "SNV",\n      "hgvsg": "NC_000001.11:g.942451T>C",\n      "phylopScore": -0.1,\n      "clinvar": [\n        {\n          "id": "VCV000836156.1",\n          "reviewStatus": "criteria provided, single submitter",\n          "significance": [\n            "uncertain significance"\n          ],\n          "refAllele": "T",\n          "altAllele": "T",\n          "lastUpdatedDate": "2020-08-20"\n        },\n        {\n          "id": "RCV001037211.1",\n          "variationId": 836156,\n          "reviewStatus": "criteria provided, single submitter",\n          "alleleOrigins": [\n            "germline"\n          ],\n          "refAllele": "T",\n          "altAllele": "T",\n          "phenotypes": [\n            "not provided"\n          ],\n          "medGenIds": [\n            "CN517202"\n          ],\n          "significance": [\n            "uncertain significance"\n          ],\n          "lastUpdatedDate": "2020-08-20",\n          "pubMedIds": [\n            "28492532"\n          ]\n        }\n      ],\n      "dbsnp": [\n        "rs6672356"\n      ],\n      "gnomad": {\n        "coverage": 25,\n        "allAf": 0.999855,\n        "allAn": 123742,\n        "allAc": 123724,\n        "allHc": 61853,\n        "afrAf": 0.999416,\n        "afrAn": 10278,\n        "afrAc": 10272,\n        "afrHc": 5133,\n        "amrAf": 0.99995,\n        "amrAn": 20008,\n        "amrAc": 20007,\n        "amrHc": 10003,\n        "easAf": 1,\n        "easAn": 6054,\n        "easAc": 6054,\n        "easHc": 3027,\n        "finAf": 1,\n        "finAn": 8696,\n        "finAc": 8696,\n        "finHc": 4348,\n        "nfeAf": 0.999899,\n        "nfeAn": 49590,\n        "nfeAc": 49585,\n        "nfeHc": 24790,\n        "asjAf": 1,\n        "asjAn": 7208,\n        "asjAc": 7208,\n        "asjHc": 3604,\n        "sasAf": 0.99967,\n        "sasAn": 18160,\n        "sasAc": 18154,\n        "sasHc": 9074,\n        "othAf": 1,\n        "othAn": 3748,\n        "othAc": 3748,\n        "othHc": 1874,\n        "maleAf": 0.9999,\n        "maleAn": 69780,\n        "maleAc": 69773,\n        "maleHc": 34883,\n        "femaleAf": 0.999796,\n        "femaleAn": 53962,\n        "femaleAc": 53951,\n        "femaleHc": 26970,\n        "controlsAllAf": 0.999815,\n        "controlsAllAn": 48654,\n        "controlsAllAc": 48645\n      },\n      "oneKg": {\n        "allAf": 1,\n        "afrAf": 1,\n        "amrAf": 1,\n        "easAf": 1,\n        "eurAf": 1,\n        "sasAf": 1,\n        "allAn": 5008,\n        "afrAn": 1322,\n        "amrAn": 694,\n        "easAn": 1008,\n        "eurAn": 1006,\n        "sasAn": 978,\n        "allAc": 5008,\n        "afrAc": 1322,\n        "amrAc": 694,\n        "easAc": 1008,\n        "eurAc": 1006,\n        "sasAc": 978\n      },\n      "primateAI": [\n        {\n          "hgnc": "SAMD11",\n          "scorePercentile": 0.87\n        }\n      ],\n      "revel": {\n        "score": 0.145\n      },\n      "topmed": {\n        "allAf": 0.999809,\n        "allAn": 125568,\n        "allAc": 125544,\n        "allHc": 62760\n      },\n      "transcripts": [\n        {\n          "transcript": "ENST00000420190.6",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "downstream_gene_variant"\n          ],\n          "proteinId": "ENSP00000411579.2"\n        },\n        {\n          "transcript": "ENST00000342066.7",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "1110",\n          "cdsPos": "1027",\n          "exons": "10/14",\n          "proteinPos": "343",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000342066.7:c.1027T>C",\n          "hgvsp": "ENSP00000342313.3:p.(Trp343Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000342313.3",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000618181.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "732",\n          "cdsPos": "652",\n          "exons": "7/11",\n          "proteinPos": "218",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000618181.4:c.652T>C",\n          "hgvsp": "ENSP00000480870.1:p.(Trp218Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000480870.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000622503.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "1110",\n          "cdsPos": "1030",\n          "exons": "10/14",\n          "proteinPos": "344",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000622503.4:c.1030T>C",\n          "hgvsp": "ENSP00000482138.1:p.(Trp344Arg)",\n          "isCanonical": true,\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000482138.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000618323.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "cTg/cCg",\n          "aminoAcids": "L/P",\n          "cdnaPos": "712",\n          "cdsPos": "632",\n          "exons": "8/12",\n          "proteinPos": "211",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000618323.4:c.632T>C",\n          "hgvsp": "ENSP00000480678.1:p.(Leu211Pro)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "unknown",\n          "proteinId": "ENSP00000480678.1",\n          "siftScore": 0.03,\n          "siftPrediction": "deleterious - low confidence"\n        },\n        {\n          "transcript": "ENST00000616016.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "ccT/ccC",\n          "aminoAcids": "P",\n          "cdnaPos": "944",\n          "cdsPos": "864",\n          "exons": "9/13",\n          "proteinPos": "288",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "synonymous_variant"\n          ],\n          "hgvsc": "ENST00000616016.4:c.864T>C",\n          "hgvsp": "ENST00000616016.4:c.864T>C(p.(Pro288=))",\n          "proteinId": "ENSP00000478421.1"\n        },\n        {\n          "transcript": "ENST00000618779.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "921",\n          "cdsPos": "841",\n          "exons": "9/13",\n          "proteinPos": "281",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000618779.4:c.841T>C",\n          "hgvsp": "ENSP00000484256.1:p.(Trp281Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000484256.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000616125.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "783",\n          "cdsPos": "703",\n          "exons": "8/12",\n          "proteinPos": "235",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000616125.4:c.703T>C",\n          "hgvsp": "ENSP00000484643.1:p.(Trp235Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000484643.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000620200.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "cTg/cCg",\n          "aminoAcids": "L/P",\n          "cdnaPos": "427",\n          "cdsPos": "347",\n          "exons": "5/9",\n          "proteinPos": "116",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000620200.4:c.347T>C",\n          "hgvsp": "ENSP00000484820.1:p.(Leu116Pro)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "unknown",\n          "proteinId": "ENSP00000484820.1",\n          "siftScore": 0.16,\n          "siftPrediction": "tolerated - low confidence"\n        },\n        {\n          "transcript": "ENST00000617307.4",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "867",\n          "cdsPos": "787",\n          "exons": "9/13",\n          "proteinPos": "263",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000617307.4:c.787T>C",\n          "hgvsp": "ENSP00000482090.1:p.(Trp263Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000482090.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "NM_152486.2",\n          "source": "RefSeq",\n          "bioType": "protein_coding",\n          "codons": "Cgg/Cgg",\n          "aminoAcids": "R",\n          "cdnaPos": "1107",\n          "cdsPos": "1027",\n          "exons": "10/14",\n          "proteinPos": "343",\n          "geneId": "148398",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "synonymous_variant"\n          ],\n          "hgvsc": "NM_152486.2:c.1027T>C",\n          "hgvsp": "NM_152486.2:c.1027T>C(p.(Arg343=))",\n          "isCanonical": true,\n          "proteinId": "NP_689699.2"\n        },\n        {\n          "transcript": "ENST00000341065.8",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "750",\n          "cdsPos": "751",\n          "exons": "8/12",\n          "proteinPos": "251",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000341065.8:c.750T>C",\n          "hgvsp": "ENSP00000349216.4:p.(Trp251Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000349216.4",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000455979.1",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "codons": "Tgg/Cgg",\n          "aminoAcids": "W/R",\n          "cdnaPos": "507",\n          "cdsPos": "508",\n          "exons": "4/7",\n          "proteinPos": "170",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "missense_variant"\n          ],\n          "hgvsc": "ENST00000455979.1:c.507T>C",\n          "hgvsp": "ENSP00000412228.1:p.(Trp170Arg)",\n          "polyPhenScore": 0,\n          "polyPhenPrediction": "benign",\n          "proteinId": "ENSP00000412228.1",\n          "siftScore": 1,\n          "siftPrediction": "tolerated"\n        },\n        {\n          "transcript": "ENST00000478729.1",\n          "source": "Ensembl",\n          "bioType": "processed_transcript",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "downstream_gene_variant"\n          ]\n        },\n        {\n          "transcript": "ENST00000474461.1",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "cdnaPos": "389",\n          "exons": "3/4",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "non_coding_transcript_exon_variant"\n          ],\n          "hgvsc": "ENST00000474461.1:n.389T>C"\n        },\n        {\n          "transcript": "ENST00000466827.1",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "cdnaPos": "191",\n          "exons": "2/2",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "non_coding_transcript_exon_variant"\n          ],\n          "hgvsc": "ENST00000466827.1:n.191T>C"\n        },\n        {\n          "transcript": "ENST00000464948.1",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "cdnaPos": "286",\n          "exons": "1/2",\n          "geneId": "ENSG00000187634",\n          "hgnc": "SAMD11",\n          "consequence": [\n            "non_coding_transcript_exon_variant"\n          ],\n          "hgvsc": "ENST00000464948.1:n.286T>C"\n        },\n        {\n          "transcript": "NM_015658.3",\n          "source": "RefSeq",\n          "bioType": "protein_coding",\n          "geneId": "26155",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ],\n          "isCanonical": true,\n          "proteinId": "NP_056473.2"\n        },\n        {\n          "transcript": "ENST00000483767.5",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "geneId": "ENSG00000188976",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ]\n        },\n        {\n          "transcript": "ENST00000327044.6",\n          "source": "Ensembl",\n          "bioType": "protein_coding",\n          "geneId": "ENSG00000188976",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ],\n          "isCanonical": true,\n          "proteinId": "ENSP00000317992.6"\n        },\n        {\n          "transcript": "ENST00000477976.5",\n          "source": "Ensembl",\n          "bioType": "retained_intron",\n          "geneId": "ENSG00000188976",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ]\n        },\n        {\n          "transcript": "ENST00000496938.1",\n          "source": "Ensembl",\n          "bioType": "processed_transcript",\n          "geneId": "ENSG00000188976",\n          "hgnc": "NOC2L",\n          "consequence": [\n            "downstream_gene_variant"\n          ]\n        }\n      ]\n    }\n  ]\n}\n]}\n')))}d.isMDXComponent=!0},6001:(n,e,o)=>{o.d(e,{A:()=>t});const t=o.p+"assets/images/JSON-Layout-fc8e5c0cf4c8428981cd206fe9b6feac.svg"}}]);