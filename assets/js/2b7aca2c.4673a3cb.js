"use strict";(self.webpackChunkvckit_website=self.webpackChunkvckit_website||[]).push([[516],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>u,metadata:()=>f,toc:()=>v});var a=n(5318),i=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&d(e,n,t[n]);return e};const u={id:"roadmap",title:"Roadmap"},m=void 0,f={unversionedId:"overview/roadmap",id:"version-1.0.0-beta/overview/roadmap",title:"Roadmap",description:"Please note that the roadmap is provided for informational purposes only and does not represent a binding commitment. We appreciate your feedback and encourage you to actively engage with us as we progress through this phase.",source:"@site/versioned_docs/version-1.0.0-beta/overview/roadmap.md",sourceDirName:"overview",slug:"/overview/roadmap",permalink:"/vckit/docs/overview/roadmap",draft:!1,editUrl:"https://github.com/uncefact/vckit/blob/main/website/../docs/overview/roadmap.md",tags:[],version:"1.0.0-beta",lastUpdatedAt:1686307752,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id:"roadmap",title:"Roadmap"},sidebar:"docs",previous:{title:"Features by Status",permalink:"/vckit/docs/overview/features"},next:{title:"Quick Start",permalink:"/vckit/docs/cli/quickstart"}},h={},v=[],g={toc:v};function y(e){var t,n=e,{components:i}=n,d=((e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},g),d),r(t,o({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note that the roadmap is provided for informational purposes only and does not represent a binding commitment. We appreciate your feedback and encourage you to actively engage with us as we progress through this phase.")),(0,a.kt)("p",null,"This document outlines our vision and planned milestones for the future development and enhancement of vc-kit. This roadmap provides a high-level overview of our strategic direction and key features we aim to deliver. Please note that this roadmap is subject to change based on user feedback and evolving industry standards."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phase 1: Foundation (Current Release)"),"\nOur initial phase focuses on establishing a solid foundation for vc-kit. We have developed a set of core libraries and reference implementations that adhere to the latest verifiable credential standards. Key features in this phase include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verifiable Credential Creation: The ability to create and issue verifiable credentials using standardized schemas."),(0,a.kt)("li",{parentName:"ul"},"Credential Storage: A secure and reliable storage mechanism for managing and storing verifiable credentials."),(0,a.kt)("li",{parentName:"ul"},"Credential Verification: The capability to verify the authenticity and integrity of verifiable credentials using cryptographic proofs."),(0,a.kt)("li",{parentName:"ul"},"Documentation and Examples: Extensive documentation and code examples to assist developers in implementing vc-kit within their applications.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phase 2: Enhancements and Interoperability"),"\nIn this phase, we aim to enhance the capabilities of vc-kit and focus on improving interoperability with other verifiable credential solutions. Key features planned for this phase include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Credential Revocation: Introducing support for credential revocation mechanisms, enabling the management and revocation of compromised or expired credentials."),(0,a.kt)("li",{parentName:"ul"},"Credential Manifest implementation to support issuer configuration"),(0,a.kt)("li",{parentName:"ul"},"Presentation Exchange"),(0,a.kt)("li",{parentName:"ul"},"Extended Credential Schemas: Expansion of the supported credential schemas to cover a wider range of use cases and industries."),(0,a.kt)("li",{parentName:"ul"},"Interoperability Frameworks: Integration with existing interoperability frameworks and standardization efforts to ensure seamless interaction with other verifiable credential systems."),(0,a.kt)("li",{parentName:"ul"},"Developer Tools and SDKs: Additional developer tools, software development kits (SDKs), and code libraries to simplify the integration of vc-kit into various programming languages and environments.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phase 3: Usability and User Experience"),"\nBuilding upon the foundation and interoperability enhancements, this phase aims to improve the overall usability and user experience of vc-kit. Key features planned for this phase include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User Interface Enhancements: Streamlining the user interface and providing intuitive workflows for managing verifiable credentials."),(0,a.kt)("li",{parentName:"ul"},"Mobile Integration: Developing mobile SDKs and applications for convenient verifiable credential management on smartphones and tablets."),(0,a.kt)("li",{parentName:"ul"},"User-Friendly Credential Issuance: Simplifying the process of issuing and managing verifiable credentials for non-technical users, such as business administrators and end-users."),(0,a.kt)("li",{parentName:"ul"},"Privacy and Consent Management: Introducing features to enhance user control over data privacy and consent when sharing verifiable credentials with relying parties.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phase 4: Ecosystem Expansion and Adoption"),"\nIn this phase, our focus shifts to expanding the vc-kit ecosystem and driving adoption among organizations involved in cross-border trade. Key features planned for this phase include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integration Partnerships: Collaborating with industry partners and technology providers to enable seamless integration of vc-kit with existing supply chain and trade platforms."),(0,a.kt)("li",{parentName:"ul"},"Machine Readable Governance to facilitate interoperability between agents operating within a regulated community."),(0,a.kt)("li",{parentName:"ul"},"Certification and Compliance: Pursuing relevant certifications and compliance frameworks to ensure vc-kit meets industry standards and regulatory requirements."),(0,a.kt)("li",{parentName:"ul"},"Developer Community Engagement: Encouraging developer engagement through forums, hackathons, and educational resources to foster innovation and the exchange of ideas."),(0,a.kt)("li",{parentName:"ul"},"Continuous Improvement: Ongoing updates, bug fixes, and performance optimizations based on user feedback and emerging best practices.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phase 5: Industry-Specific Demos"),"\nIn this phase, we aim to showcase the value and applicability of vc-kit in specific industries and use cases. We will develop industry-specific demos that highlight how verifiable credentials can address unique challenges and streamline processes. Key activities in this phase include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Identifying Target Industries: Conducting market research and engaging with industry stakeholders to identify industries where verifiable credentials can provide significant benefits."),(0,a.kt)("li",{parentName:"ul"},"Use Case Development: Creating industry-specific use cases that demonstrate how vc-kit can enhance efficiency, trust, and transparency within those industries."),(0,a.kt)("li",{parentName:"ul"},"Demo Development: Building interactive demos that simulate real-world scenarios and showcase the practical implementation of vc-kit within industry contexts."),(0,a.kt)("li",{parentName:"ul"},"Collaboration and Feedback: Collaborating with industry partners, organizations, and users to gather feedback and refine the demos for maximum effectiveness.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Phase 6: Interoperability Test Suite"),"\nTo ensure seamless interoperability between different implementations, we will develop an interoperability test suite for implementers to validate their systems against vc-kit standards. Key objectives of this phase include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test Case Development: Defining a comprehensive set of test cases that cover various aspects of verifiable credential issuance, verification, and interoperability."),(0,a.kt)("li",{parentName:"ul"},"Test Suite Implementation: Developing a user-friendly and automated test suite that allows implementers to validate their systems' adherence to vc-kit standards."),(0,a.kt)("li",{parentName:"ul"},"Compliance Verification: Providing a mechanism for implementers to verify their system's compliance with the interoperability standards set by vc-kit."),(0,a.kt)("li",{parentName:"ul"},"Documentation and Support: Offering detailed documentation and support resources to assist implementers in successfully conducting interoperability tests and resolving any issues that may arise.")),(0,a.kt)("p",null,"The addition of these two phases to our roadmap reflects our commitment to industry-specific adoption and ensuring seamless interoperability across different verifiable credential systems. By showcasing the value of vc-kit through industry-specific demos and providing an interoperability test suite, we aim to facilitate broader adoption and collaboration within the verifiable credentials ecosystem."),(0,a.kt)("p",null,"This roadmap outlines our planned trajectory for vc-kit, with a focus on delivering robust features, improving interoperability, enhancing user experience, and expanding adoption. We are committed to continually iterating and refining vc-kit to meet the evolving needs of organizations involved in cross-border trade and the verifiable credentials landscape."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note that the roadmap is provided for informational purposes only and does not represent a binding commitment. We appreciate your feedback and encourage you to actively engage with us as we progress through this phase.")))}y.isMDXComponent=!0}}]);