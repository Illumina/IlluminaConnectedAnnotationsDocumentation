"use strict";(self.webpackChunknirvana_documentation=self.webpackChunknirvana_documentation||[]).push([[5590],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,u=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6325:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={title:"Mitochondrial Heteroplasmy"},o=void 0,l={unversionedId:"data-sources/mito-heteroplasmy",id:"version-3.24/data-sources/mito-heteroplasmy",title:"Mitochondrial Heteroplasmy",description:"Overview",source:"@site/versioned_docs/version-3.24/data-sources/mito-heteroplasmy.md",sourceDirName:"data-sources",slug:"/data-sources/mito-heteroplasmy",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.24/data-sources/mito-heteroplasmy",editUrl:"https://github.com/Illumina/IlluminaConnectedAnnotationsDocumentation/edit/master/versioned_docs/version-3.24/data-sources/mito-heteroplasmy.md",tags:[],version:"3.24",frontMatter:{title:"Mitochondrial Heteroplasmy"},sidebar:"docs",previous:{title:"gnomAD",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.24/data-sources/gnomad"},next:{title:"MITOMAP",permalink:"/IlluminaConnectedAnnotationsDocumentation/3.24/data-sources/mitomap"}},s=[{value:"Overview",id:"overview",children:[],level:2},{value:"JSON File",id:"json-file",children:[{value:"Example",id:"example",children:[],level:3},{value:"Parsing",id:"parsing",children:[{value:"Binning VRF Data",id:"binning-vrf-data",children:[],level:4},{value:"Pre-processing the Data",id:"pre-processing-the-data",children:[],level:4},{value:"Algorithm",id:"algorithm",children:[],level:4}],level:3}],level:2},{value:"Download URL",id:"download-url",children:[],level:2},{value:"JSON Output",id:"json-output",children:[],level:2}],d={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Mitochondrial Heteroplasmy is an aggregate population data set that characterizes the amount of heteroplasmy observed for each variant. The latest version of this data set is based on re-processed 1000 Genomes Project data using the Illumina DRAGEN pipeline."),(0,i.kt)("h2",{id:"json-file"},"JSON File"),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "T:C":{\n      "ad":[\n         1,\n         1,\n         1,\n         1,\n         1,\n         1\n      ],\n      "allele_type":"alt",\n      "vrf":[\n         0.002369668246445498,\n         0.0024937655860349127,\n         0.0016129032258064516,\n         0.0025188916876574307,\n         0.0022935779816513763,\n         0.002008032128514056\n      ],\n      "vrf_stats":{\n         "kurtosis":38.889891511122556,\n         "max":0.0025188916876574307,\n         "mean":5.4052190471990743e-05,\n         "min":0.0,\n         "nobs":246,\n         "skewness":6.346664692283075,\n         "stdev":0.0003461416264750575,\n         "variance":1.1981402557879823e-07\n      }\n   }\n}\n\n')),(0,i.kt)("h3",{id:"parsing"},"Parsing"),(0,i.kt)("p",null,"From the JSON file, we're mainly interested in the following keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variant")," (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"T:C"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ad")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vrf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nobs")," (number of observations)")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Adjusting for null observations")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nobs")," value indicates how many observations were made. Ideally this would have been represented in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ad")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"vrf")," arrays, but it's left as an exercise for the reader."))),(0,i.kt)("h4",{id:"binning-vrf-data"},"Binning VRF Data"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"vrf")," (variant read frequency) array in the JSON object above is paired with with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ad")," array (allele depths) shown above."),(0,i.kt)("p",null,"The data in the JSON object has a crazy number of significant digits. This means that as the number of samples increase, this array will grow. To make this more future-proof, Illumina Connected Annotations bins everything according to 0.1% increments."),(0,i.kt)("p",null,"With the binned data, we end up having 775 distinct ",(0,i.kt)("inlineCode",{parentName:"p"},"vrf")," values in the entire JSON file. This also means that the variant with the largest number of VRFs would originally have 246 entries, but due to binning this will decrease to 143."),(0,i.kt)("h4",{id:"pre-processing-the-data"},"Pre-processing the Data"),(0,i.kt)("p",null,"The JSON file is converted into a small TSV file that is embedded in Illumina Connected Annotations. Here is an example of the TSV file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scss"},"#CHROM  POS REF ALT VRF_BINS    VRF_COUNTS\nchrM    1   G   .   0.981,0.987,0.988,0.989,0.99,0.991,0.992,0.993,0.994,0.995,0.996,0.997,0.998,0.999  1,2,2,4,7,8,11,19,43,60,48,64,499,1736\nchrM    2   A   .   0.981,0.987,0.988,0.989,0.99,0.991,0.992,0.993,0.994,0.995,0.996,0.997,0.998,0.999  1,2,2,4,7,8,11,19,43,60,48,64,499,1736\n")),(0,i.kt)("h4",{id:"algorithm"},"Algorithm"),(0,i.kt)("p",null,"Illumina Connected Annotations will calculate mitochondrial heteroplasmy data for every sample in the VCF. Using the computed VRF for each sample, we compute where in the empirical mitochondrial heteroplasmy distribution that VRF occurs and express that as a percentile."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Percentiles")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Illumina Connected Annotations uses the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Percentile"},"statistical definition of percentile")," (indicating the value below which a given percentage of observations in a group of observations falls). Unless the sample's VRF is higher than all the VRFs represented in the distribution, the range will be [0, 1)."))),(0,i.kt)("h2",{id:"download-url"},"Download URL"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Unavailable")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The original data set is only available internally at Illumina at the moment."))),(0,i.kt)("h2",{id:"json-output"},"JSON Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"{14-17}","{14-17}":!0},'"samples":[\n   {\n      "genotype":"0/1",\n      "variantFrequencies":[\n         0.333,\n         0.5\n      ],\n      ],\n      "alleleDepths":[\n         10,\n         20,\n         30\n      ],\n      "heteroplasmyPercentile":[\n         23.13,\n         12.65\n      ]\n   }\n]\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"heteroplasmyPercentile"),(0,i.kt)("td",{parentName:"tr",align:"center"},"float array"),(0,i.kt)("td",{parentName:"tr",align:"left"},"one percentile for each variant frequency (each alternate allele)")))))}p.isMDXComponent=!0}}]);