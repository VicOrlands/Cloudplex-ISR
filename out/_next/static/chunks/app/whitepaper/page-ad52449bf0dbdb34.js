(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9464],{36681:function(e,t,r){Promise.resolve().then(r.t.bind(r,65878,23)),Promise.resolve().then(r.t.bind(r,72972,23)),Promise.resolve().then(r.t.bind(r,36975,23)),Promise.resolve().then(r.bind(r,44956)),Promise.resolve().then(r.bind(r,4296)),Promise.resolve().then(r.bind(r,10721))},10721:function(e,t,r){"use strict";var n=r(57437),o=r(2265),a=r(83464),i=r(60369),s=r.n(i),l=r(37780);t.default=()=>{let[e,t]=(0,o.useState)(""),r=async()=>{let r=RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,"gm").test(e);""!==e?r?200===(await a.Z.post("https://enr95mz778.execute-api.eu-west-1.amazonaws.com/Prod/newsletter-cloudplexo",{email:e})).status?(alert("Email address submitted successfully"),t("")):alert("Form not submitted"):alert("Invalid format"):alert("Empty input! Fill in your email address")};return(0,n.jsxs)("div",{className:s().heroCta,children:[(0,n.jsx)(l.qgt,{size:32,color:"#667085"}),(0,n.jsx)("input",{type:"text",placeholder:"Enter your work email address",value:e,onChange:e=>{t(e.target.value)}}),(0,n.jsx)("button",{"aria-label":"submit",onClick:r,className:s().button,children:"Subscribe"})]})}},36975:function(e){e.exports={whitepaper:"styles_whitepaper__Vl6pO","whitepaper-card":"styles_whitepaper-card__cSF8e","whitepaper-content":"styles_whitepaper-content__bhz2J"}},60369:function(e){e.exports={heroCta:"cta_heroCta__Lv2FX",button:"cta_button__PV4Wl",footerCta:"cta_footerCta__G_MBz",container:"cta_container__k1prP",innerContainer:"cta_innerContainer__Y0sTF"}},44956:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/Image.d441f473.png",height:280,width:381,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAM1BMVEUYPIe+xtsbQIhZbrL9/f4nSo9EYKEgQ4oNM4JOY64xT5ppe7ru8PS1uOzo6fTW2u7T2ejzl+FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nCXGSQ4AIAgDwIJiAdf/v9YY5zSgUWkE1EgZO9FLhNTaUCLaeXF3yJqJz3EBH0QBEqkfYQ4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:6}},4296:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/Image1.45d74003.png",height:280,width:381,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAKlBMVEUZPogkRoxVarERNoH///8tTJcHMHyLnMKTo8R7j7hpe7rU3OjQwdVqZJt3pO9yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nDXGyQ0AIAwDsKTpQTn2XxcJCb8MkmAEgWCWe2OaxXAv2E9K2WsfPJIuE9IAyJayXmkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6}},46231:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(A,s({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function A(e){var t=t=>{var r,{attr:o,size:a,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,i),A=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:A,width:A,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(o)}}},function(e){e.O(0,[4753,2516,5878,2972,3464,2971,2117,1744],function(){return e(e.s=36681)}),_N_E=e.O()}]);