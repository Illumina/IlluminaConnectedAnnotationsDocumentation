"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[2585],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>h});var a=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=a.createContext({}),c=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},d=function(n){var e=c(n.components);return a.createElement(s.Provider,{value:e},n.children)},m="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,o=n.originalType,s=n.parentName,d=r(n,["components","mdxType","originalType","parentName"]),m=c(t),p=i,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return t?a.createElement(h,l(l({ref:e},d),{},{components:t})):a.createElement(h,l({ref:e},d))}));function h(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=t.length,l=new Array(o);l[0]=p;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=n,r[m]="string"==typeof n?n:i,l[1]=r;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3125:(n,e,t)=>{t.r(e),t.d(e,{contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const o={title:"Getting Started"},l=void 0,r={unversionedId:"introduction/getting-started",id:"version-3.25/introduction/getting-started",title:"Getting Started",description:"Illumina Connected Annotations is written in C# using .NET Core (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files.",source:"@site/versioned_docs/version-3.25/introduction/getting-started.md",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.25/introduction/getting-started",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.25/introduction/getting-started.md",tags:[],version:"3.25",frontMatter:{title:"Getting Started"},sidebar:"docs",previous:{title:"Prerequisite",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.25/introduction/prerequisite"},next:{title:"Parsing Illumina Connected Annotations JSON",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.25/introduction/parsing-json"}},s=[{value:"Getting Illumina Connected Annotations",id:"getting-illumina-connected-annotations",children:[{value:"Latest Release",id:"latest-release",children:[],level:3},{value:"Quick Start",id:"quick-start",children:[],level:3},{value:"Docker",id:"docker",children:[],level:3}],level:2},{value:"Downloading the data files",id:"downloading-the-data-files",children:[],level:2},{value:"Download a test VCF file",id:"download-a-test-vcf-file",children:[],level:2},{value:"Running Illumina Connected Annotations",id:"running-illumina-connected-annotations",children:[],level:2},{value:"The Illumina Connected Annotations command line",id:"the-illumina-connected-annotations-command-line",children:[{value:"Specifying annotation sources",id:"specifying-annotation-sources",children:[],level:3}],level:2}],c={toc:s},d="wrapper";function m(n){let{components:e,...o}=n;return(0,i.kt)(d,(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Illumina Connected Annotations is written in C# using ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/net/download/core"},".NET Core")," (an amazing runtime environment that currently runs on Windows, Linux, Mac OS X, and in Docker images). Once .NET Core has been downloaded, all you need to do is grab the source, compile it, and grab the data files."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Illumina Connected Annotations currently uses .NET6.0. Please make sure that you have the most current runtime from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.microsoft.com/net/download/core"},".NET Core downloads")," page."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please read ",(0,i.kt)("a",{parentName:"p",href:"../introduction/prerequisite"},"Prerequisite")," section to generate necessary credential file to run Illumina Connector Annotations."))),(0,i.kt)("h2",{id:"getting-illumina-connected-annotations"},"Getting Illumina Connected Annotations"),(0,i.kt)("h3",{id:"latest-release"},"Latest Release"),(0,i.kt)("p",null,"Please visit ",(0,i.kt)("a",{parentName:"p",href:"https://developer.illumina.com/illumina-connected-annotations"},"Illumina Connected Annotations")," to obtain the latest release. Download and place the zip file in the IlluminaConnectedAnnotations folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p IlluminaConnectedAnnotations/Data\ncd IlluminaConnectedAnnotations\nunzip IlluminaConnectedAnnotations-3.25.0-0-g101034c3-net6.0.zip\n")),(0,i.kt)("h3",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"If you want to get started right away, we've created ",(0,i.kt)("a",{target:"_blank",href:t(648).Z},"a script")," that unzips the Illumina Connected Annotations build, downloads the annotation data, and starts annotating a test file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bash ./TestIlluminaConnectedAnnotations.sh IlluminaConnectedAnnotationsBuild.zip\n")),(0,i.kt)("p",null,"We have verified that this script works on Windows (using Git Bash or WSL), Linux, and Mac OS X."),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"Obtain the docker image in a zip file (e.g. IlluminaConnectedAnnotations-3.25.0-0-g101034c3-net6.0-docker.tar.gz), and load it as follows"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker load < IlluminaConnectedAnnotations-3.25.0-0-g101034c3-net6.0-docker.tar.gz\n")),(0,i.kt)("p",null,"If you want to build your own docker image, it is really easy to do. You just need to have Illumina Connected Annotations zip file and then download the ",(0,i.kt)("a",{parentName:"p",href:"https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/Dockerfile"},"Dockerfile")," and ",(0,i.kt)("a",{parentName:"p",href:"https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/create_docker_image.sh"},"this script"),"."),(0,i.kt)("p",null,"Put both files (",(0,i.kt)("inlineCode",{parentName:"p"},"create_docker_image.sh")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),") inside the same folder."),(0,i.kt)("p",null,"In terminal, execute command below inside the folder where you put those scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x create_docker_image.sh\n./create_docker_image.sh [path to zip file] [image tag]\n")),(0,i.kt)("p",null,"After you run the script, the docker image will be available in your local machine with image name ",(0,i.kt)("inlineCode",{parentName:"p"},"illumina-connected-annotations:[image tag specified]"),"."),(0,i.kt)("p",null,"We have special instructions for running IlluminaConnectedAnnotations (Here's ",(0,i.kt)("a",{parentName:"p",href:"https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/HiSeq.10000.vcf.gz"},"a toy VCF")," in case you need it):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -it -v local/data/folder:/scratch illumina-connected-annotations:v3.25.0 Annotator -c /scratch/Cache/ \\\n     -r /scratch/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     --sd /scratch/SupplementaryAnnotation/GRCh37 \\\n     -i /scratch/HiSeq.10000.vcf.gz -o /scratch/HiSeq\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please note that since our data files are usually accessed through a Docker volume, there is a noticeable performance penalty when running Illumina Connected Annotations in Docker."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For convenience, the user is encouraged to create aliases for the docker commands. For example:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'alias IlluminaConnectedAnnotations="docker run --rm -it -v local/data/folder:/scratch illumina-connected-annotations:v3.25.0 IlluminaConnectedAnnotations"\n')))),(0,i.kt)("h2",{id:"downloading-the-data-files"},"Downloading the data files"),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"/IlluminaConnectedAnnotationsDocumentation/3.25/introduction/prerequisite"},"Prerequisite")," for more details on creating Illumina API key to use Illumina Connected Annotation and its utilities."),(0,i.kt)("p",null,"To download the latest data sources (or update the ones that you already have), use the following command to automate the download from S3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet DataManager.dll make-config -r GRCh37\n\ndotnet DataManager.dll download \\\n-r GRCh37 \\\n--dir Data\n")),(0,i.kt)("p",null,"Check ",(0,i.kt)("a",{parentName:"p",href:"/IlluminaConnectedAnnotationsDocumentation/3.25/utilities/data-manager"},"Data Manager")," for more details on controlling data sources and their versions."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Glitches in the Matrix")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Every once in a while, the download process does not go smoothly. Perhaps the internet connection cut out or you ran out of disk space. The DataManager attempts to detect these\nsituations by checking the file sizes at the very end. If you see that a file was marked ",(0,i.kt)("inlineCode",{parentName:"p"},"truncated"),", try fixing the root cause and running the DataManager again."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"From time to time, you can re-run the DataManager to get the latest annotation files. It will only download the files that changed."))),(0,i.kt)("h2",{id:"download-a-test-vcf-file"},"Download a test VCF file"),(0,i.kt)("p",null,"Here's ",(0,i.kt)("a",{parentName:"p",href:"https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/HiSeq.10000.vcf.gz"},"a toy VCF file")," you can play around with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/HiSeq.10000.vcf.gz\n")),(0,i.kt)("h2",{id:"running-illumina-connected-annotations"},"Running Illumina Connected Annotations"),(0,i.kt)("p",null,"Once you have downloaded the data sets, use the following command to annotate your VCF:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet Annotator.dll \\\n     -c Data/Cache \\\n     --sd Data/SupplementaryAnnotation/GRCh37 \\\n     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     -i HiSeq.10000.vcf.gz \\\n     -o HiSeq.10000\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-c")," argument specifies the cache directory"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"--sd")," argument specifies the supplementary annotation directory"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-r")," argument specifies the compressed reference path"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-i")," argument specifies the input VCF path"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-o")," argument specifies the output filename prefix")),(0,i.kt)("p",null,"When running Illumina Connected Annotations, performance metrics are shown as it evaluates each chromosome in the input VCF file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"---------------------------------------------------------------------------\nIllumina Connected Annotations                      (c) 2024 Illumina, Inc.\n                                                                     3.25.0\n---------------------------------------------------------------------------\n\nInitialization                                         Time     Positions/s\n---------------------------------------------------------------------------\nCache                                               00:00:00.0\nSA Position Scan                                    00:00:00.0      153,634\n\nReference                                Preload    Annotation   Variants/s\n---------------------------------------------------------------------------\nchr1                                    00:00:00.2  00:00:00.8       11,873\n\nSummary                                                Time         Percent\n---------------------------------------------------------------------------\nInitialization                                      00:00:00.0        1.5 %\nPreload                                             00:00:00.2        4.9 %\nAnnotation                                          00:00:00.8       18.5 %\n\nTime: 00:00:04.4\n")),(0,i.kt)("p",null,"The output will be a JSON file called ",(0,i.kt)("inlineCode",{parentName:"p"},"HiSeq.10000.json.gz"),". Here's ",(0,i.kt)("a",{parentName:"p",href:"https://illumina.github.io/IlluminaConnectedAnnotationsDocumentation/files/HiSeq.10000.json.gz"},"the full JSON file"),"."),(0,i.kt)("h2",{id:"the-illumina-connected-annotations-command-line"},"The Illumina Connected Annotations command line"),(0,i.kt)("p",null,"The full command line options can be viewed by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-h")," option or no options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet Annotator.dll\n---------------------------------------------------------------------------\nIllumina Connected Annotations                      (c) 2024 Illumina, Inc.\n                                                                     3.25.0\n---------------------------------------------------------------------------\n\nUSAGE: dotnet Annotator.dll -i <vcf path> -c <cache dir> --sd <sa dir> -r <ref path> -o <base output filename>\nAnnotates a set of variants\n\nOPTIONS:\n      --cache, -c <directory>\n                             input cache directory\n      --in, -i <path>        input VCF path\n      --tsv <path>           input VCF path\n      --out, -o <file path>  output file path\n      --ref, -r <path>       input compressed reference sequence path\n      --sd <directory>       input supplementary annotation directory\n      --sources, -s <VALUE>  annotation data sources to be used (comma\n                               separated list of supported tags)\n      --credentials-file, -l <VALUE>\n                             File path to user credentials, default is set to ~\n                               /.ilmnAnnotations/credentials.json\n      --versions-config <assembly>\n                             Annotation version config file. By default, it\n                               will use file ~/.ilmnAnnotation/assembly_\n                               annotation_config.json\n      --ignore-license-error ignore error due to invalid license and skip\n                               related data sources\n      --force-mt             forces to annotate mitochondrial variants\n      --legacy-vids          enables support for legacy VIDs\n      --enable-dq            report DQ from VCF samples field\n      --enable-bidirectional-fusions\n                             enables support for bidirectional gene fusions\n      --disable-junction-preservation\n                             disable junction preserving functional annotation\n      --str <VALUE>          user provided STR annotation TSV file\n      --vcf-info <VALUE>     additional vcf info field keys (comma separated)\n                               desired in the output\n      --vcf-sample-info <VALUE>\n                             additional vcf format field keys (comma separated)\n                                desired in the output\n      --sa-cutoff <VALUE>    Any SV larger than or equal to this value will\n                               not have any supplementary annotations\n      --simple-nomenclature-cutoff-length <VALUE>\n                             Any SV larger than or equal to this value will\n                               not have any simple nomenclature annotation.\n                             Default is 1000.\n      --output-format <VALUE>\n                             output file format, available options: json, vcf.\n      --help, -h             displays the help menu\n      --version, -v          displays the version\n\n##### Supported Annotation Sources #####\nBasic Tier: DECIPHER, GME, GERP, DANN, REVEL, ClinGen, gnomAD, phyloP, TOPMed, DGV, 1000 Genomes, CliinVar, dbSNP, FusionCatcher, MITOMAP, MultiZ100Way\n\nProfessional Tier: PrimateAI(GRCh37), PrimateAI-3D(GRCh38), SpliceAI, COSMIC, OMIM.\n\n##### Contact #####\nProfessional content licensing, feedback and technical support: annotation_support@illumina.com.\n")),(0,i.kt)("h3",{id:"specifying-annotation-sources"},"Specifying annotation sources"),(0,i.kt)("p",null,"By default, Illumina Connected Annotations will use all available data sources. However, the user can customize the set of sources with their versions using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--versions-config"),"\noption."),(0,i.kt)("p",null,"An Example of versions config json file below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Ensembl":\n    {\n        "GeneModels": "110"\n    },\n    "GenomeAssembly":\n    {\n        "GenomeAssembly": "GRCh37.p13"\n    },\n    "HGNC":\n    {\n        "GeneModels": "20240603"\n    },\n    "RefSeq":\n    {\n        "GeneModels": "105.20220307"\n    },\n    "clinvar":\n    {\n        "SmallVariant": "99999999"\n    },\n    "gnomad":\n    {\n        "LowComplexityRegions": "2.1",\n        "SmallVariant": "2.1"\n    }\n}\n')),(0,i.kt)("p",null,"If an unknown source is specified, a warning message will be printed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet Annotator.dll \\\n     -c Data/Cache/GRCh37 \\\n     --sd Data/SupplementaryAnnotation/GRCh37 \\\n     -r Data/References/Homo_sapiens.GRCh37.Nirvana.dat \\\n     -i HiSeq.10000.vcf.gz \\\n     -o HiSeq.10000 \\\n     --versions-config /Users/bob/.ilmnAnnotations/customised_GRCh37_annotation_config.json\n ---------------------------------------------------------------------------\n Illumina Connected Annotations                      (c) 2024 Illumina, Inc.\n                                                                     3.25.0\n ---------------------------------------------------------------------------\n\n Some requested data sources are not loaded.\n Data Source              Type                     Status    Comments\n ---------------------------------------------------------------------------\n GenomeAssembly           GenomeAssembly           Loaded    GRCh37.p13\n RefSeq                   GeneModels               Loaded    105.20220307\n Ensembl                  GeneModels               Loaded    110\n HGNC                     GeneModels               Loaded    20240603\n gnomad                   SmallVariant             Loaded    2.1\n gnomad                   LowComplexityRegions     Loaded    2.1\n clinvar                  SmallVariant             Skipped   Version 99999999 not available\n\n Initialization                                         Time     Positions/s\n ---------------------------------------------------------------------------\n SA Position Scan                                    00:00:00.3      307,966\n ....\n ..\n")),(0,i.kt)("p",null,"The list of available values is compiled from the files provided (using ",(0,i.kt)("inlineCode",{parentName:"p"},"-c")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--sd")," options)."))}m.isMDXComponent=!0},648:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/files/TestIlluminaConnectedAnnotations-4d46ca15f7ddb4df4aee3efecf8fad52.sh"}}]);