(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[240],{876:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3701:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(7560),o=n(8283),a=(n(2784),n(876)),i=["components"],c={sidebar_position:6},s={unversionedId:"list-icons",id:"list-icons",isDocsHomePage:!1,title:"Lista de iconos",description:"Puede obtener una lista de los iconos completos en Bootstrap Icons.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/list-icons.md",sourceDirName:".",slug:"/list-icons",permalink:"/fleet-icons/es/list-icons",editUrl:"https://github.com/daacdev/fleet-icons/edit/documentation/docs/list-icons.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"siderbar",previous:{title:"Personalizaci\xf3n",permalink:"/fleet-icons/es/customization"}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Puede obtener una lista de los iconos completos en ",(0,a.kt)("a",{parentName:"p",href:"https://icons.getbootstrap.com/#icons"},"Bootstrap Icons"),"."),(0,a.kt)("p",null,"Para agregar a su aplicaci\xf3n, todos los nombres de los \xedconos se transformaron en ",(0,a.kt)("inlineCode",{parentName:"p"},"camel case")," usando ",(0,a.kt)("a",{parentName:"p",href:"https://lodash.com/docs/#camelCase"},"lodash"),",\nsiempre comenzando con la primera letra en may\xfasculas."),(0,a.kt)("p",null,"Por ejemplo, para usar el icono ",(0,a.kt)("a",{parentName:"p",href:"https://icons.getbootstrap.com/icons/bell-fill/"},"bell-fill"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { BellFill } from 'fleet-icons/icon/BellFill';\n\nconst App = () => {\n  return (\n    <BellFill />\n  )\n}\n")))}u.isMDXComponent=!0}}]);