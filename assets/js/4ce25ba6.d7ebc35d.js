"use strict";(self.webpackChunkdesarrollo_web=self.webpackChunkdesarrollo_web||[]).push([[2993],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>v});var r=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),c=function(e){var a=r.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=t,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,l(l({ref:a},u),{},{components:n})):r.createElement(v,l({ref:a},u))}));function v(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:t,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6686:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),t=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"MODULO 3/Fundamentos de Javascript",id:"MODULO 3/Fundamentos de Javascript",title:"Fundamentos de Javascript",description:"Introducci\xf3n",source:"@site/docs/MODULO 3/00-Fundamentos de Javascript.md",sourceDirName:"MODULO 3",slug:"/MODULO 3/Fundamentos de Javascript",permalink:"/docs/MODULO 3/Fundamentos de Javascript",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/MODULO 3/00-Fundamentos de Javascript.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flexbox",permalink:"/docs/MODULO 2/Flexbox"},next:{title:"Operadores y expresiones",permalink:"/docs/MODULO 3/Operadores y expresiones"}},s={},c=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Mi primer &quot;Hola mundo&quot; en Javascript",id:"mi-primer-hola-mundo-en-javascript",level:2},{value:"Formas de implementar Javascript",id:"formas-de-implementar-javascript",level:3},{value:"Variables:",id:"variables",level:3},{value:"Diferencias entre <code>var</code>, <code>let</code> y <code>const</code>",id:"diferencias-entre-var-let-y-const",level:3},{value:"Cu\xe1ndo utilizar cada uno:",id:"cu\xe1ndo-utilizar-cada-uno",level:3},{value:"Tipos de datos:",id:"tipos-de-datos",level:3}],u={toc:c};function d(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"introducci\xf3n"},"Introducci\xf3n"),(0,t.kt)("p",null,"JavaScript es un lenguaje de programaci\xf3n de alto nivel, interpretado y orientado a objetos que se utiliza para crear aplicaciones web interactivas y din\xe1micas. Fue creado en 1995 por Brendan Eich mientras trabajaba en Netscape Communications Corporation."),(0,t.kt)("p",null,"Los fundamentos de JavaScript son los conceptos b\xe1sicos que debes entender para poder utilizar el lenguaje de manera efectiva. Estos incluyen:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Variables y tipos de datos"),": las variables se utilizan para almacenar valores en JavaScript, y existen varios tipos de datos que se pueden almacenar en ellas, como n\xfameros, cadenas de texto, booleanos, objetos y arreglos."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Operadores"),": los operadores se utilizan para realizar operaciones en JavaScript, como sumar n\xfameros, concatenar cadenas de texto, comparar valores y asignar valores a variables."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Estructuras de control de flujo"),": las estructuras de control de flujo se utilizan para controlar el flujo de ejecuci\xf3n de un programa JavaScript. Estas incluyen estructuras como if-else, while, for, switch y try-catch."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Funciones"),": las funciones se utilizan para encapsular un bloque de c\xf3digo que realiza una tarea espec\xedfica, lo que permite reutilizar ese bloque de c\xf3digo en diferentes partes de un programa. Las funciones pueden aceptar argumentos y devolver valores."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Objetos y clases"),": los objetos se utilizan para representar entidades del mundo real en un programa JavaScript, como usuarios, productos, pedidos, etc. Las clases son plantillas para crear objetos que comparten las mismas propiedades y m\xe9todos."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Manipulaci\xf3n del DOM"),": el Document Object Model (DOM) es una representaci\xf3n en forma de \xe1rbol de un documento HTML que se puede manipular con JavaScript para cambiar el contenido de una p\xe1gina web en tiempo real."),(0,t.kt)("h2",{id:"mi-primer-hola-mundo-en-javascript"},'Mi primer "Hola mundo" en Javascript'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'console.log("Hola, mundo!");\n')),(0,t.kt)("p",null,'Este c\xf3digo imprimir\xe1 "Hola, mundo!" en la consola del navegador o en la consola de desarrollo de tu entorno de ejecuci\xf3n de JavaScript.'),(0,t.kt)("h3",{id:"formas-de-implementar-javascript"},"Formas de implementar Javascript"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("strong",{parentName:"li"},"Etiqueta ",(0,t.kt)("inlineCode",{parentName:"strong"},"<script>")," en el archivo HTML:"),(0,t.kt)("br",null),"\nPuedes incluir tu c\xf3digo JavaScript directamente dentro de las etiquetas ",(0,t.kt)("inlineCode",{parentName:"li"},"<script>")," en el archivo HTML. Puedes colocar el c\xf3digo en la secci\xf3n ",(0,t.kt)("inlineCode",{parentName:"li"},"<head>")," o antes de cerrar el ",(0,t.kt)("inlineCode",{parentName:"li"},"<body>")," para asegurarte de que el c\xf3digo se ejecute despu\xe9s de que la p\xe1gina se haya cargado.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n  <title>Mi Sitio Web</title>\n  <script>\n    // Tu c\xf3digo JavaScript aqu\xed\n    alert("Hola, mundo!");\n  <\/script>\n</head>\n<body>\n  \x3c!-- Contenido de tu sitio web --\x3e\n</body>\n</html>\n\n')),(0,t.kt)("ol",{start:2},(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("strong",{parentName:"li"},"Archivo externo JavaScript:"),(0,t.kt)("br",null),"\nTambi\xe9n puedes colocar tu c\xf3digo JavaScript en un archivo externo con extensi\xf3n .js y luego enlazarlo en tu archivo HTML utilizando la etiqueta ",(0,t.kt)("inlineCode",{parentName:"li"},"<script>")," con el atributo ",(0,t.kt)("strong",{parentName:"li"},"src")," que especifica la ubicaci\xf3n del archivo externo.")),(0,t.kt)("p",null,"Archivo script.js:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'// Contenido del archivo script.js\nalert("Hola, mundo!");\n')),(0,t.kt)("p",null,"Archivo HTML:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n<head>\n  <title>Mi Sitio Web</title>\n  <script src="script.js"><\/script>\n</head>\n<body>\n  \x3c!-- Contenido de tu sitio web --\x3e\n</body>\n</html>\n')),(0,t.kt)("h3",{id:"variables"},"Variables:"),(0,t.kt)("p",null,"Las variables son como contenedores que se utilizan para almacenar valores en JavaScript. Se pueden declarar variables utilizando la palabra clave ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"var")),", ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"let"))," o ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"const")),", seguido de un nombre de variable y, opcionalmente, un valor inicial."),(0,t.kt)("p",null,'Por ejemplo, para declarar una variable llamada mensaje y asignarle el valor "Hola, mundo!", puedes usar la siguiente sintaxis:'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'var mensaje = "Hola, mundo!";\n')),(0,t.kt)("p",null,'En este ejemplo, la palabra clave var se utiliza para declarar la variable mensaje y se le asigna el valor de la cadena "Hola, mundo!".'),(0,t.kt)("h3",{id:"diferencias-entre-var-let-y-const"},"Diferencias entre ",(0,t.kt)("inlineCode",{parentName:"h3"},"var"),", ",(0,t.kt)("inlineCode",{parentName:"h3"},"let")," y ",(0,t.kt)("inlineCode",{parentName:"h3"},"const")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"var:"),(0,t.kt)("br",null),"\nvar es la forma m\xe1s antigua de declarar variables en JavaScript.\nLa declaraci\xf3n de una variable con var tiene un alcance de funci\xf3n o alcance global, dependiendo de si se declara dentro o fuera de una funci\xf3n.\nLas variables declaradas con var se elevan al inicio de su \xe1mbito, lo que significa que se pueden acceder antes de su declaraci\xf3n.\nUna variable declarada con var puede ser reasignada y su valor puede ser modificado.\nNo tiene restricciones en cuanto a la redeclaraci\xf3n de una variable dentro del mismo \xe1mbito."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"let:")," ",(0,t.kt)("br",null),"\nlet fue introducido en ECMAScript 6 (ES6) y es la forma recomendada de declarar variables en JavaScript a partir de esa versi\xf3n.\nLa declaraci\xf3n de una variable con let tiene un alcance de bloque, lo que significa que solo est\xe1 disponible dentro del bloque donde se declar\xf3.\nLas variables declaradas con let no se elevan al inicio de su \xe1mbito, por lo que no se pueden acceder a ellas antes de su declaraci\xf3n.\nUna variable declarada con let puede ser reasignada, lo que significa que su valor puede ser modificado.\nNo se permite la redeclaraci\xf3n de una variable dentro del mismo \xe1mbito utilizando let."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"const:"),(0,t.kt)("br",null),"\nconst tambi\xe9n fue introducido en ES6 y se utiliza para declarar variables cuyos valores no cambiar\xe1n una vez asignados.\nLa declaraci\xf3n de una variable con const tiene un alcance de bloque al igual que let.\nLas variables declaradas con const deben inicializarse con un valor en el momento de la declaraci\xf3n y no se pueden asignar a un nuevo valor posteriormente.\nAunque el valor de una variable const no puede cambiar, si es un objeto o un arreglo, las propiedades o elementos internos pueden ser modificados.\nAl igual que con let, no se permite la redeclaraci\xf3n de una variable utilizando const dentro del mismo \xe1mbito."),(0,t.kt)("h3",{id:"cu\xe1ndo-utilizar-cada-uno"},"Cu\xe1ndo utilizar cada uno:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"var")," se puede usar si se necesita una variable con alcance global o si se est\xe1 trabajando en un proyecto antiguo que a\xfan no ha adoptado las caracter\xedsticas de ES6.",(0,t.kt)("br",null),"\n",(0,t.kt)("strong",{parentName:"p"},"let")," se recomienda para la mayor\xeda de los casos, ya que proporciona un alcance m\xe1s estricto y evita problemas de reasignaci\xf3n accidental.",(0,t.kt)("br",null),"\n",(0,t.kt)("strong",{parentName:"p"},"const")," debe usarse cuando se desea asignar un valor que no cambiar\xe1 a lo largo del programa. Es especialmente \xfatil para valores constantes o referencias a objetos inmutables.",(0,t.kt)("br",null),"\n",(0,t.kt)("strong",{parentName:"p"},"En resumen, ",(0,t.kt)("em",{parentName:"strong"},'"var"')," tiene un alcance de funci\xf3n o global, ",(0,t.kt)("em",{parentName:"strong"},'"let"')," tiene un alcance de bloque y permite la reasignaci\xf3n, y ",(0,t.kt)("em",{parentName:"strong"},'"const"')," tambi\xe9n tiene un alcance de bloque pero no permite la reasignaci\xf3n.")),(0,t.kt)("h3",{id:"tipos-de-datos"},"Tipos de datos:"),(0,t.kt)("p",null,"En JavaScript, hay varios tipos de datos que se pueden utilizar para almacenar valores en variables. Estos incluyen:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"N\xfameros: se utilizan para almacenar valores num\xe9ricos, como 1, 2.5, -3, etc.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"let numeroEntero = 10;\nlet numeroDecimal = 3.14;\nlet numeroNegativo = -5;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'Cadenas de texto: se utilizan para almacenar valores de texto, como "Hola" o "Mundo".')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'let saludo = "Hola";\nlet nombre = "Mundo";\nlet frase = "Mi nombre es Carlos";\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Booleanos: se utilizan para almacenar valores verdaderos o falsos.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"let verdadero = true;\nlet falso = false;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Null: se utiliza para indicar que una variable no tiene un valor asignado..")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"let variableNula = null;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Undefined: se utiliza para indicar que una variable no est\xe1 definida.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"let variableIndefinida;\n")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Objetos: se utilizan para almacenar colecciones de valores relacionados y funciones.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'let persona = {\n  nombre: "Juan",\n  edad: 25,\n  pais: "Argentina"\n\n};\n\nlet libro = {\n  titulo: "El Gran Gatsby",\n  autor: "F. Scott Fitzgerald",\n  a\xf1o: 1925\n};\n')),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Arreglos: se utilizan para almacenar colecciones de valores relacionados en una lista ordenada.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'let numeros = [1, 2, 3, 4, 5];\nlet colores = ["rojo", "verde", "azul"];\nlet mezclado = [1, "dos", true, null];\n')))}d.isMDXComponent=!0}}]);