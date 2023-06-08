"use strict";(self.webpackChunkvckit_website=self.webpackChunkvckit_website||[]).push([[3778],{5318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var n=r(5318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&s(e,r,t[r]);return e};const d={id:"quickstart",title:"Quick Start"},f=void 0,m={unversionedId:"cli/quickstart",id:"version-1.0.0-beta/cli/quickstart",title:"Quick Start",description:"TODO: explanatory content",source:"@site/versioned_docs/version-1.0.0-beta/cli/quickstart.md",sourceDirName:"cli",slug:"/cli/quickstart",permalink:"/vckit/docs/cli/quickstart",draft:!1,editUrl:"https://github.com/uncefact/vckit/blob/main/website/../docs/cli/quickstart.md",tags:[],version:"1.0.0-beta",lastUpdatedAt:1686200975,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{id:"quickstart",title:"Quick Start"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/vckit/docs/overview/roadmap"},next:{title:"Identifiers",permalink:"/vckit/docs/cli/identifiers"}},b={},v=[],k={toc:v};function g(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},k),s),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"TODO: explanatory content")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npm i @vckit/cli -g\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"yarn global add @vckit/cli\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"vckit -v\n\n# Output\n1.0.0-beta\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'vckit --help\n\nOptions:\n  -v, --version      output the version number\n  --config <path>    Configuration file (default: "./agent.yml")\n  -h, --help         display help for command\n\nCommands:\n  did                Decentralized identifiers\n  credential         W3C Verifiable Credential\n  presentation       W3C Verifiable Presentation\n  explore            launch Verifiable Data explorer\n  sdr                Selective Disclosure Request\n  message            Messages\n  execute [options]  Executes agent method\n  server [options]   Launch OpenAPI server\n  config             Agent configuration\n  dev                Plugin developer tools\n  help [command]     display help for command\n\n')),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"vckit config create\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"vckit config create --template client\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"vckit did create --config ./myagent/agent.yml\n\nvckit did create\n")))}g.isMDXComponent=!0}}]);