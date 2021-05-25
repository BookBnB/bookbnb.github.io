(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{118:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var r=t(0),o=t.n(r);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var a=o.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return o.a.createElement(s.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},m=o.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||n;return t?o.a.createElement(d,i(i({ref:a},s),{},{components:t})):o.a.createElement(d,i({ref:a},s))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,c=new Array(n);c[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<n;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},69:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return p}));var r=t(3),o=t(7),n=(t(0),t(118)),c={slug:"tecnologias-back",title:"Tecnolog\xedas del Back-end",author:"Seblaz",author_url:"https://github.com/seblaz",author_image_url:"https://avatars3.githubusercontent.com/u/19474368?s=460&=04b3d3d551094a7c62c6cf3aa30653f56bb2d60c&v=4",tags:["node","tecnologias","python"]},i={permalink:"/bitacora/tecnologias-back",editUrl:"https://github.com/bookBnB/bookBnB.github.io/edit/doc/bitacora/2020-09-14-tecnologias-back.mdx",source:"@site/bitacora/2020-09-14-tecnologias-back.mdx",description:"Microservicios",date:"2020-09-14T00:00:00.000Z",tags:[{label:"node",permalink:"/bitacora/tags/node"},{label:"tecnologias",permalink:"/bitacora/tags/tecnologias"},{label:"python",permalink:"/bitacora/tags/python"}],title:"Tecnolog\xedas del Back-end",readingTime:1.48,truncated:!1,prevItem:{title:"Checkpoint 1",permalink:"/bitacora/checkpoint-1"},nextItem:{title:"Welcome",permalink:"/bitacora/welcome"}},l=[{value:"Microservicios",id:"microservicios",children:[]},{value:"Tecnlog\xedas",id:"tecnlog\xedas",children:[]},{value:"Frameworks",id:"frameworks",children:[{value:"Node.js",id:"nodejs",children:[]},{value:"Python",id:"python",children:[]}]}],s={rightToc:l};function p(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"microservicios"},"Microservicios"),Object(n.b)("p",null,"Luego de nuestra propuesta inicial sobre la arquitectura a utilizar y la charla con ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/equipo"}),"Gonzalo")," decidimos desarrollar los siguientes microservicios:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/BookBnB/users-service"}),"Usuarios"),": para manejar la autenticaci\xf3n de los usuarios de la aplicaci\xf3n y los del back-end"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/BookBnB/payments-service"}),"Pagos"),": para manejar la interacci\xf3n con el Smart Contract."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/BookBnB/core"}),"Core"),": con la l\xf3gica de negocio principal de la aplicaci\xf3n.")),Object(n.b)("h2",{id:"tecnlog\xedas"},"Tecnlog\xedas"),Object(n.b)("p",null,"En principio era un requisito desarrollar los microservicios Back-end con Python y Node.js. Dado que la mayor parte del equipo se encontraba m\xe1s familiarizado con Node.js, decidimos que el microservicio principal (Core) se desarrolle en dicho lenguaje."),Object(n.b)("p",null,"A su vez ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/equipo"}),"Martin")," ten\xeda una buena experiencia utilizando Smart Contracts en Node.js, con lo cual tambi\xe9n decidimos que el microservicio de Pagos sea en dicho Lenguaje."),Object(n.b)("p",null,"Por \xfaltimo, para cumplir con los requisitos propuestos resolvimos desarrollar el servicio de Usuarios en Python."),Object(n.b)("h2",{id:"frameworks"},"Frameworks"),Object(n.b)("h3",{id:"nodejs"},"Node.js"),Object(n.b)("p",null,"En principio decidimos armar un template en Node.js para utilizarlo en ambos microservicios (Core y Pagos). Para ello determinamos utilizar ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," dado que nos proporciona un chequeo est\xe1tico de tipos en tiempo de compilaci\xf3n atrapando algunos errores comunes al programar. Luego para el protocolo HTTP utilizamos un framework simple como ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://expressjs.com"}),"Express.js")," lo que nos permite implementar una ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://alistair.cockburn.us/hexagonal-architecture/"}),"arquitectura hexagonal")," f\xe1cilmente."),Object(n.b)("p",null,"Por otro lado, para facilitar la conexi\xf3n con la base de datos investigamos varios ORMs y finalmente nos decidimos por ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://typeorm.io/#/"}),"TypeORM")," dado que es el framework que menos ensucia las entidades del modelo de dominio con cuestiones de la base de datos."),Object(n.b)("p",null,"Finalmente, para crear los controladores utilizamos la biblioteca ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/routing-controllers"}),"routing-controllers")," que en conjunto con ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/routing-controllers-openapi"}),"routing-controllers-openapi")," nos permiti\xf3 generar de forma automatizada la especificaci\xf3n OpenApi."),Object(n.b)("h3",{id:"python"},"Python"),Object(n.b)("p",null,"Dado que el microservicio a desarrollar era relativamente peque\xf1o optamos por un framework sencillo como ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://flask.palletsprojects.com/"}),"Flask")," en lugar de otros m\xe1s complejos como ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.djangoproject.com/"}),"Django"),"."))}p.isMDXComponent=!0}}]);