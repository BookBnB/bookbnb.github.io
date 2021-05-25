(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(d,c(c({ref:t},u),{},{components:n})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(118)),o={id:"back-office",title:"Back Office"},c={unversionedId:"back-office",id:"back-office",isDocsHomePage:!1,title:"Back Office",description:"El BackOffice fue desarrollado con React, e integrando librer\xedas muy \xfatiles.",source:"@site/servicios/back-office.mdx",slug:"/back-office",permalink:"/servicios/back-office",editUrl:"https://github.com/bookBnB/bookBnB.github.io/edit/doc/servicios/back-office.mdx",version:"current",sidebar:"servicios",previous:{title:"Aplicaci\xf3n",permalink:"/servicios/app"},next:{title:"Core",permalink:"/servicios/core"}},l=[{value:"Instalaci\xf3n",id:"instalaci\xf3n",children:[]},{value:"Ambientes",id:"ambientes",children:[]},{value:"Arquitectura e implementaci\xf3n",id:"arquitectura-e-implementaci\xf3n",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"El BackOffice fue desarrollado con React, e integrando librer\xedas muy \xfatiles."),Object(i.b)("p",null,"Algunas de estas librer\xedas son:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Material-ui: provee componentes predefinidos con estilos para varios elementos que fueron utilizados.\nEntre estos elementos se encuentran: inputs, mensajes de error en inputs, modales, header, botones, dropdowns, etc)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Recharts: provee componentes para realizar gr\xe1ficos. Fue utilizado para la secci\xf3n de m\xe9tricas"))),Object(i.b)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),Object(i.b)("p",null,"Al igual que los servicios backend, el BO tambi\xe9n est\xe1 dockerizado, por lo que para instalarlo se deben ejecutar\nlos siguientes comandos:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone git@github.com:BookBnB/react-app.git\n$ docker-compose up -d\n")),Object(i.b)("h2",{id:"ambientes"},"Ambientes"),Object(i.b)("p",null,"El Back Office se encuentra desplegado en un ambiente productivo y otro interno del equipo de desarrollo:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://bookbnb-react-master.herokuapp.com/"}),"Producci\xf3n")," con del\xedvery continuo a partir de la rama ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/BookBnB/react-app/tree/master"}),"master"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://bookbnb-react-develop.herokuapp.com/"}),"Desarrollo")," con del\xedvery continuo a partir de la rama ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/BookBnB/react-app/tree/develop"}),"develop"),".")),Object(i.b)("h2",{id:"arquitectura-e-implementaci\xf3n"},"Arquitectura e implementaci\xf3n"),Object(i.b)("p",null,"A continuaci\xf3n se destacan algunos puntos importantes en cuanto a la arquitectura e implementaci\xf3n:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Se utiliz\xf3 la api fetch para realizar requests al backend"),Object(i.b)("li",{parentName:"ul"},"Se utiliz\xf3 un router para redirigir una ruta en particular al componente correspondiente. A su vez,\ntambi\xe9n se agreg\xf3 un componente de redirecci\xf3n, para que si el token jwt no expir\xf3 redirija autom\xe1ticamente\na la Home, as\xed como tambi\xe9n que redirija al login en caso de que el token expire y el admin quiera realizar alguna acci\xf3n"),Object(i.b)("li",{parentName:"ul"},"Cada secci\xf3n se realiz\xf3 en un componente diferente, as\xed como tambi\xe9n cada subsecci\xf3n (info de un usuario, info de una publicaci\xf3n),\nde forma tal que el componente pueda ser reutilizado")))}p.isMDXComponent=!0}}]);