(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(91)),a={sidebar_position:4},c={unversionedId:"accessibility",id:"accessibility",isDocsHomePage:!1,title:"Accesibilidad",description:"De acuerdo con la W3C specification,",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/accessibility.mdx",sourceDirName:".",slug:"/accessibility",permalink:"/es/accessibility",editUrl:"https://github.com/daacdev/fleet-icons/edit/main/site/docs/accessibility.mdx",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"siderbar",previous:{title:"Props",permalink:"/es/props"},next:{title:"Personalizaci\xf3n",permalink:"/es/customization"}},s=[{value:"Ejemplos",id:"ejemplos",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"De acuerdo con la ",Object(i.b)("a",{parentName:"p",href:"https://www.w3.org/TR/SVG-access/#Equivalent"},"W3C specification"),",\nsolo necesitas agregar el ",Object(i.b)("inlineCode",{parentName:"p"},"<title>")," y ",Object(i.b)("inlineCode",{parentName:"p"},"<desc>")," etiquetas al componente ",Object(i.b)("inlineCode",{parentName:"p"},"svg"),".\nCon esto en mente, el ",Object(i.b)("inlineCode",{parentName:"p"},"title")," y ",Object(i.b)("inlineCode",{parentName:"p"},"desc")," props se agregaron para admitir la accesibilidad de los \xedconos."),Object(i.b)("p",null,"Alternativamente, puede agregar accesibilidad de iconos como ",Object(i.b)("a",{parentName:"p",href:"https://icons.getbootstrap.com/#accessibility"},"lo sugiere Bootstrap Icons")),Object(i.b)("h2",{id:"ejemplos"},"Ejemplos"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Tools\n  // highlight-start\n  title="Tools Icon"\n  desc="Example of a tools icon"\n  // highlight-end\n/>\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Tools\n  // highlight-start\n  role="img"\n  aria-label="Tools Icon"\n  // highlight-end\n/>\n')))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);