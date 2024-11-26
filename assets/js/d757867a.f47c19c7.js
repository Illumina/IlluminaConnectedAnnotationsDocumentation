"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[5938],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<l;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5554:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(8168),o=(t(6540),t(5680));const l={title:"SAUtils"},r=void 0,i={unversionedId:"utilities/sautils",id:"version-3.23/utilities/sautils",title:"SAUtils",description:"Overview",source:"@site/versioned_docs/version-3.23/utilities/sautils.mdx",sourceDirName:"utilities",slug:"/utilities/sautils",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.23/utilities/sautils",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.23/utilities/sautils.mdx",tags:[],version:"3.23",frontMatter:{title:"SAUtils"},sidebar:"docs",previous:{title:"Jasix",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.23/utilities/jasix"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"The SAUtils Menu",id:"the-sautils-menu",children:[],level:2},{value:"Output File Formats",id:"output-file-formats",children:[],level:2},{value:"SAUtils AutoDownloadGenerate",id:"sautils-autodownloadgenerate",children:[{value:"AutoDownloadGenerate ClinVar",id:"autodownloadgenerate-clinvar",children:[],level:3},{value:"AutoDownloadGenerate ClinGen",id:"autodownloadgenerate-clingen",children:[],level:3},{value:"AutoDownloadGenerate dbSNP",id:"autodownloadgenerate-dbsnp",children:[],level:3},{value:"AutoDownloadGenerate OMIM",id:"autodownloadgenerate-omim",children:[],level:3},{value:"AutoDownloadGenerate COSMIC",id:"autodownloadgenerate-cosmic",children:[],level:3}],level:2}],d={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"SAUtils is a utility tool that creates binary supplementary annotation files (",(0,o.yg)("em",{parentName:"p"},".nsa, "),".gsa, ",(0,o.yg)("em",{parentName:"p"},".npd, "),".nsi, etc.) from original data files (e.g. VCFs, TSVs, XML, HTML, etc.) for various data sources (e.g. ClinVar, dbSNP, gnomAD, etc.). These binary files can be fed into the Illumina Connected Annotations Annotation engine to provide supplementary annotations in the output."),(0,o.yg)("h2",{id:"the-sautils-menu"},"The SAUtils Menu"),(0,o.yg)("p",null,"SAUtils supports building binary files for many data sources. The help menu lists them out in the form of sub-commands."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scss"},"dotnet SAUtils.dll\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2023 Illumina, Inc.\n                                                                     3.22.0\n---------------------------------------------------------------------------\n\nUtilities focused on supplementary annotation\n\nUSAGE: dotnet SAUtils.dll <command> [options]\n\nCOMMAND: AutoDownloadGenerate   auto download and generate Omim, Clinvar, Clingen\n         AaCon                  create AA conservation database\n         ancestralAllele        create Ancestral allele database from 1000Genomes data\n         ClinGen                create ClinGen database\n         Downloader             download ClinGen database\n         clinvar                create ClinVar database\n         concat                 merge multiple NSA files for the same data source having non-overlapping regions\n         Cosmic                 create COSMIC database\n         CosmicSv               create COSMIC SV database\n         CosmicFusion           create COSMIC gene fusion database\n         CosmicCGC              create COSMIC cancer gene census database\n         CustomGene             create custom gene annotation database\n         CustomVar              create custom variant annotation database\n         Dann                   create DANN database\n         Dbsnp                  create dbSNP database\n         Dgv                    create DGV database\n         DiseaseValidity        create disease validity database\n         DosageMapRegions       create dosage map regions\n         DosageSensitivity      create dosage sensitivity database\n         DownloadOmim           download OMIM database\n         ExtractMiniSA          extracts mini SA\n         ExtractMiniXml         extracts mini XML (ClinVar)\n         FilterSpliceNetTsv     filter SpliceNet predictions\n         FusionCatcher          create FusionCatcher database\n         Gerp                   create GERP conservation database\n         GlobalMinor            create global minor allele database\n         Gnomad                 create gnomAD database\n         Gnomad-lcr             create gnomAD low complexity region database\n         GnomadGeneScores       create gnomAD gene scores database\n         GnomadSV               create gnomAD structural variant database\n         Index                  edit an index file\n         MitoHet                create mitochondrial Heteroplasmy database\n         MitomapSvDb            create MITOMAP structural variants database\n         MitomapVarDb           create MITOMAP small variants database\n         Omim                   create OMIM database\n         OneKGen                create 1000 Genome small variants database\n         OneKGenSv              create 1000 Genomes structural variants database\n         OneKGenSvVcfToBed      convert 1000 Genomes structural variants VCF file into a BED-like file\n         PhyloP                 create PhyloP database\n         PrimateAi              create PrimateAI database\n         RefMinor               create Reference Minor database from 1000 Genome \n         RemapWithDbsnp         remap a VCF file given source and destination rsID mappings\n         Revel                  create REVEL database\n         SpliceAi               create SpliceAI database\n         TopMed                 create TOPMed database\n         Gme                    create GME Variome database\n         Decipher               create Decipher database\n")),(0,o.yg)("p",null,"You can get further detailed help for each sub-command by typing in the subcommand. For example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scss"},"dotnet SAUtils.dll clinvar\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2023 Illumina, Inc.\n                                                                     3.22.0\n---------------------------------------------------------------------------\n\nUSAGE: dotnet SAUtils.dll clinvar [options]\nCreates a supplementary database with ClinVar annotations\n\nOPTIONS:\n      --ref, -r <VALUE>      compressed reference sequence file\n      --rcv, -i <VALUE>      ClinVar Full release XML file\n      --vcv, -c <VALUE>      ClinVar Variation release XML file\n      --out, -o <VALUE>      output directory\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n")),(0,o.yg)("p",null,"More detailed instructions about each sub-command can be found in documentation of respective data sources."),(0,o.yg)("h2",{id:"output-file-formats"},"Output File Formats"),(0,o.yg)("p",null,"The format of the binary file SAUtils produce depend on the type of annotation data represented in that file (e.g. small variant vs. structural variants vs. genes)."),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"File Extension"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".nsa"),(0,o.yg)("td",{parentName:"tr",align:null},"Small variant annotations (e.g. SNV, insertions, deletions, etc.)")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".gsa"),(0,o.yg)("td",{parentName:"tr",align:null},"Compact variant annotations (e.g. SNV, insertions, deletions, etc.)")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".idx"),(0,o.yg)("td",{parentName:"tr",align:null},"Index file")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".nsi"),(0,o.yg)("td",{parentName:"tr",align:null},"Interval annotations (e.g. SV, CNVs, intervals)")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".nga"),(0,o.yg)("td",{parentName:"tr",align:null},"Gene annotations")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".npd"),(0,o.yg)("td",{parentName:"tr",align:null},"Conservation scores")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".rma"),(0,o.yg)("td",{parentName:"tr",align:null},"Reference Minor allele")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".gfs"),(0,o.yg)("td",{parentName:"tr",align:null},"Gene fusions source")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".gfj"),(0,o.yg)("td",{parentName:"tr",align:null},"Gene fusions JSON")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},".schema"),(0,o.yg)("td",{parentName:"tr",align:null},"JSON schema")))),(0,o.yg)("h2",{id:"sautils-autodownloadgenerate"},"SAUtils AutoDownloadGenerate"),(0,o.yg)("p",null,"To make generating supplementary annotation files easier, we have provided an easier command that can be use instead of more granular subcommands.\nThis subcommands basically integrate both download and generate subcommand. Currently, this subcommand support several data sources:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"ClinVar"),(0,o.yg)("li",{parentName:"ul"},"ClinGen"),(0,o.yg)("li",{parentName:"ul"},"dbSNP"),(0,o.yg)("li",{parentName:"ul"},"OMIM"),(0,o.yg)("li",{parentName:"ul"},"COSMIC")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"dotnet SAUtils.dll AutoDownloadGenerate\n---------------------------------------------------------------------------\nSAUtils                                             (c) 2024 Illumina, Inc.\n                                                                     3.23.0\n---------------------------------------------------------------------------\n\nUSAGE: dotnet SAUtils.dll autodownloadgenerate [options]\nDownloads and generates the Supplementary Database for Omim, ClinGen, ClinVar, dbSNP, and COSMIC\n\nOPTIONS:\n      --sources, -s <VALUE>  comma separated list of external data sources\n      --inputJson, -j <path> input JSON path\n      --downloadBaseFolder, -b <directory>\n                             base directory path external datasources\n                               downloaded to\n      --downloadDate, -d <directory>\n                             date directory name that external datasources\n                               downloaded to. Default is today's date in yyyy-\n                               MM-dd format (e.g. 2023-01-30).\n      --cache, -c <directory>\n                             input cache directory\n      --ref, -r <filename>   input reference filename\n      --out, -o <VALUE>      output SA directory\n      --actions, -a <VALUE>  comma separated list of action(s) to perform.\n                               action options: download, generate.\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n")),(0,o.yg)("p",null,"You can download only, generate only, or both download and generate supplementary files.\nTo use this subcommands, you have to prepare a json file that will be used as data sources information.\nBelow is tutorial to use this subcommand to generate each data source."),(0,o.yg)("h3",{id:"autodownloadgenerate-clinvar"},"AutoDownloadGenerate ClinVar"),(0,o.yg)("p",null,"Below is the command to use AutoDownloadGenerate for ClinVar to download and generate supplementary files."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"dotnet SAUtils.dll AutoDownloadGenerate -s ClinVar -a download,generate -j [path to json] -c [path to cache folder] -r [path to reference folder] -b [path to folder to store downloaded files] -o [path to output folder]\n")),(0,o.yg)("p",null,"The json file for ClinVar should be formatted like below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n"clinvar": {\n    "baseDirectory": "ClinVar",\n    "sourceFiles": [\n      {\n        "name": "ClinVar",\n        "description": "A freely accessible, public archive of reports of the relationships among human variations and phenotypes, with supporting evidence",\n        "files": [\n          {\n            "localFileName": "ClinVarFullRelease_00-latest.xml.gz",\n            "downloadUrl": "https://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/RCV_xml_old_format/ClinVarFullRelease_00-latest.xml.gz",\n            "md5Url": "https://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/RCV_xml_old_format/ClinVarFullRelease_00-latest.xml.gz.md5"\n          },\n          {\n            "localFileName": "ClinVarVariationRelease_00-latest.xml.gz",\n            "downloadUrl": "https://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/VCV_xml_old_format/ClinVarVariationRelease_00-latest.xml.gz",\n            "md5Url": "https://ftp.ncbi.nlm.nih.gov/pub/clinvar/xml/VCV_xml_old_format/ClinVarVariationRelease_00-latest.xml.gz.md5"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.yg)("p",null,"There is no need to modify the json entry for ClinVar and you can use as it is."),(0,o.yg)("h3",{id:"autodownloadgenerate-clingen"},"AutoDownloadGenerate ClinGen"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"dotnet SAUtils.dll AutoDownloadGenerate -s ClinGen -a download,generate -j [path to json] -c [path to cache folder] -r [path to reference folder] -b [path to folder to store downloaded files] -o [path to output folder]\n")),(0,o.yg)("p",null,"The json file for ClinGen should be formatted like below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n"clingen": {\n    "baseDirectory": "ClinGen",\n    "sourceFiles": [\n      {\n        "name": "ClinGen Dosage Sensitivity Map",\n        "subDirectory": "DosageSensitivity",\n        "description": "Dosage sensitivity map from ClinGen (dbVar)",\n        "files": [\n          {\n            "localFileName": "ClinGen_gene_curation_list_GRCh37.tsv",\n            "downloadUrl": "https://ftp.clinicalgenome.org/ClinGen_gene_curation_list_GRCh37.tsv"\n          },\n          {\n            "localFileName": "ClinGen_gene_curation_list_GRCh38.tsv",\n            "downloadUrl": "https://ftp.clinicalgenome.org/ClinGen_gene_curation_list_GRCh38.tsv"\n          },\n          {\n            "localFileName": "ClinGen_region_curation_list_GRCh37.tsv",\n            "downloadUrl": "https://ftp.clinicalgenome.org/ClinGen_region_curation_list_GRCh37.tsv"\n          },\n          {\n            "localFileName": "ClinGen_region_curation_list_GRCh38.tsv",\n            "downloadUrl": "https://ftp.clinicalgenome.org/ClinGen_region_curation_list_GRCh38.tsv"\n          }\n        ]\n      },\n      {\n        "name": "ClinGen disease validity curations",\n        "subDirectory": "GeneDiseaseValidity",\n        "description": "Disease validity curations from ClinGen (dbVar)",\n        "files": [\n          {\n            "localFileName": "Clingen-Gene-Disease-Summary.csv",\n            "downloadUrl": "https://search.clinicalgenome.org/kb/gene-validity/download"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.yg)("p",null,"There is no need to modify the json entry for ClinGen and you can use as it is."),(0,o.yg)("h3",{id:"autodownloadgenerate-dbsnp"},"AutoDownloadGenerate dbSNP"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"dotnet SAUtils.dll AutoDownloadGenerate -s dbSNP -a download,generate -j [path to json] -c [path to cache folder] -r [path to reference folder] -b [path to folder to store downloaded files] -o [path to output folder]\n")),(0,o.yg)("p",null,"The json file for dbSNP should be formatted like below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n  "dbsnp": {\n    "baseDirectory": "dbSNP",\n    "sourceFiles": [\n      {\n        "name": "dbSNP",\n        "description": "Identifiers for observed variants",\n        "version": "156",\n        "subDirectory": "GRCh37",\n        "files": [\n          {\n            "localFileName": "GCF_000001405.25.gz.tbi",\n            "downloadUrl": "https://ftp.ncbi.nih.gov/snp/latest_release/VCF/GCF_000001405.25.gz.tbi",\n            "md5Url": "https://ftp.ncbi.nih.gov/snp/latest_release/VCF/GCF_000001405.25.gz.tbi.md5"\n          },\n          {\n            "localFileName": "GCF_000001405.25.gz",\n            "downloadUrl": "https://ftp.ncbi.nih.gov/snp/latest_release/VCF/GCF_000001405.25.gz",\n            "md5Url": "https://ftp.ncbi.nih.gov/snp/latest_release/VCF/GCF_000001405.25.gz.md5"\n          }\n        ]\n      },\n      {\n        "name": "dbSNP",\n        "description": "Identifiers for observed variants",\n        "version": "156",\n        "subDirectory": "GRCh38",\n        "files": [\n          {\n            "localFileName": "GCF_000001405.40.gz.tbi",\n            "downloadUrl": "https://ftp.ncbi.nih.gov/snp/latest_release/VCF/GCF_000001405.40.gz.tbi",\n            "md5Url": "https://ftp.ncbi.nih.gov/snp/latest_release/VCF/GCF_000001405.40.gz.tbi.md5"\n          },\n          {\n            "localFileName": "GCF_000001405.40.gz",\n            "downloadUrl": "https://ftp.ncbi.nih.gov/snp/latest_release/VCF/GCF_000001405.40.gz",\n            "md5Url": "https://ftp.ncbi.nih.gov/snp/latest_release/VCF/GCF_000001405.40.gz.md5"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.yg)("p",null,"The json above is examplke for dbSNP version 156. If you want to use it for different version, adjust the version number and all entries in files to use the actual URL.\nIf you only want to generate GRCh38, just remove the GRCh37 entries in the sourceFiles."),(0,o.yg)("h3",{id:"autodownloadgenerate-omim"},"AutoDownloadGenerate OMIM"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"dotnet SAUtils.dll AutoDownloadGenerate -s OMIM -a download,generate -j [path to json] -c [path to cache folder] -r [path to reference folder] -b [path to folder to store downloaded files] -o [path to output folder]\n")),(0,o.yg)("p",null,"The json file for OMIM should be formatted like below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n"omim": {\n    "baseDirectory": "omim",\n    "sourceFiles": [\n      {\n        "name": "OMIM",\n        "description": "An Online Catalog of Human Genes and Genetic Disorders"\n      }\n    ]\n  }\n}\n')),(0,o.yg)("p",null,"There is no need to modify the json entry for OMIM and you can use as it is. You have to export OMIM API key as environment variable with name ",(0,o.yg)("inlineCode",{parentName:"p"},"OmimApiKey"),"."),(0,o.yg)("h3",{id:"autodownloadgenerate-cosmic"},"AutoDownloadGenerate COSMIC"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"dotnet SAUtils.dll AutoDownloadGenerate -s COSMIC -a download,generate -j [path to json] -c [path to cache folder] -r [path to reference folder] -b [path to folder to store downloaded files] -o [path to output folder]\n")),(0,o.yg)("p",null,"The json file for COSMIC should be formatted like below:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n  "Cosmic": {\n    "baseDirectory": "COSMIC",\n    "sourceFiles": [\n      {\n        "name": "COSMIC",\n        "version": "99",\n        "description": "the Catalogue Of Somatic Mutations In Cancer"\n      }\n    ]\n  }\n}\n')),(0,o.yg)("p",null,"You have to adjust the version entry according to which COSMIC version you want. You also need to have COSMIC credentials and export it as environment variable with name ",(0,o.yg)("inlineCode",{parentName:"p"},"Cosmic_Username")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"Cosmic_Password")))}u.isMDXComponent=!0}}]);