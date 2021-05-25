(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?i.a.createElement(b,a(a({ref:t},s),{},{components:n})):i.a.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<o;s++)c[s]=n[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(21);t.default=function(){var e=Object(r.useContext)(i.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},120:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(119),i=n(123);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,c=o.forcePrependBaseUrl,a=void 0!==c&&c,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(a)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(o,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},123:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(118)),c=n(120),a={id:"intro",title:"Introducci\xf3n",slug:"/"},u={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introducci\xf3n",description:"Las siguientes secciones muestran documentaci\xf3n t\xe9cnica de cada uno de los componentes del sistema. En general cada servicio define:",source:"@site/servicios/intro.mdx",slug:"/",permalink:"/servicios/",editUrl:"https://github.com/bookBnB/bookBnB.github.io/edit/doc/servicios/intro.mdx",version:"current",sidebar:"servicios",next:{title:"Aplicaci\xf3n",permalink:"/servicios/app"}},s=[{value:"Arquitectura",id:"arquitectura",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Las siguientes secciones muestran documentaci\xf3n t\xe9cnica de cada uno de los componentes del sistema. En general cada servicio define:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Instalaci\xf3n y configuraci\xf3n"),Object(o.b)("li",{parentName:"ul"},"Definici\xf3n de arquitectura"),Object(o.b)("li",{parentName:"ul"},"Especificaci\xf3n de API REST (OpenApi) para los servicios de back-end.")),Object(o.b)("p",null,"A su vez todos los repositorios de c\xf3digo se encuentran en ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/bookBnB/"}),"github.com/bookBnB"),"."),Object(o.b)("h2",{id:"arquitectura"},"Arquitectura"),Object(o.b)("p",null,"Los componentes del sistema interact\xfaan de la siguiente forma:"),Object(o.b)("img",{alt:"Arquitectura",src:Object(c.a)("img/servicios/Arquitectura.png"),style:{margin:"15px auto",display:"flex"}}),Object(o.b)("p",null,"Para algunas funciones el servicio Core delega en los otros dos microservicios (Usuarios y Pagos) y tambi\xe9n algunos componentes interact\xfaan con servicios externos como Google Firebase y Algolia. A su vez cada microservicio tiene su propia base de datos que no se muestra en el diagrama por claridad."))}p.isMDXComponent=!0}}]);