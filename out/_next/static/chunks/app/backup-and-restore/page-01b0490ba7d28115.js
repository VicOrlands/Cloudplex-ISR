(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6894],{55332:function(e,t,i){Promise.resolve().then(i.t.bind(i,38173,23)),Promise.resolve().then(i.t.bind(i,231,23)),Promise.resolve().then(i.bind(i,76247)),Promise.resolve().then(i.t.bind(i,95996,23)),Promise.resolve().then(i.bind(i,23033)),Promise.resolve().then(i.bind(i,57468)),Promise.resolve().then(i.bind(i,41318)),Promise.resolve().then(i.bind(i,58461)),Promise.resolve().then(i.bind(i,16235)),Promise.resolve().then(i.bind(i,33732)),Promise.resolve().then(i.bind(i,93651)),Promise.resolve().then(i.t.bind(i,8009,23))},66648:function(e,t,i){"use strict";i.d(t,{default:function(){return A.a}});var r=i(55601),A=i.n(r)},55601:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return s}});let r=i(99920),A=i(80497),n=i(38173),a=r._(i(21241));function s(e){let{props:t}=(0,A.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=n.Image},76247:function(e,t,i){"use strict";i.d(t,{default:function(){return g}});var r=i(57437),A=i(38472),n=i(66648),a=i(7476),s=i(95996),l=i.n(s),o=i(2265),c=i(37261),u=i(1109),d={src:"/_next/static/media/cloud-storage.73a89e7f.png",height:300,width:311,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXEoNEbU1/t/iqOkrsv2+v/R2f81Qljl6//U2vpyfJcpNUkdKjzT2/8kNkg1P1W6w+QFChC7wuLIz/Hb4f/R2f/a4f9daYHa3Nvm6O5/iKDEzfGLlbPX3v0cJC9mb4bq7v9gOOadAAAAHnRSTlMATSP9/v6KaP75/mRykw4Y/I/6/HI9r+T7/Gw5//7B6NsWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nBXGRxaAIAwFwA8EEpq9C+L9T+lzVgN0HJXqAYxhoMIAP2aeKP0JrZhdI7VavZcFkeQ8Xq9xiVhrN+DOzrm84gNqTgMYREjr7wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};function g(){let[e,t]=(0,o.useState)(""),[i,s]=(0,o.useState)(""),[g,h]=(0,o.useState)(""),[p,b]=(0,o.useState)(""),m=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,f=async()=>{if(i&&g&&p&&""!==e){if(i.match(m)){let t=await A.Z.post("https://vcbm2u7m7e.execute-api.eu-west-1.amazonaws.com/Prod/storageapi",{datatype:g,storagecapacity:p,term:e,email:i});console.log(t),200===t.status?window.location.reload():alert("Form not submitted")}else alert("Invalid email address")}else alert("Please enter all fields")};return(0,r.jsxs)("section",{className:l()["cloud-storage"],children:[(0,r.jsxs)("div",{className:l()["cloud-text"],children:[(0,r.jsx)("h2",{children:"Storage to Cloud"}),(0,r.jsx)("p",{children:"Cloud storage revolutionizes data management by providing secure access and seamless storage from anywhere, at any time, eliminating the limitations of physical devices and offering cost-effective scalability, enhanced collaboration, data protection, and seamless integration with other cloud-based services."}),(0,r.jsx)(n.default,{src:d,alt:"Storage to Cloud"})]}),(0,r.jsxs)("div",{className:l()["cloud-form"],children:[(0,r.jsxs)("label",{children:["Email",(0,r.jsxs)("div",{className:l()["input-field"],children:[(0,r.jsx)("i",{"aria-hidden":"true",children:(0,r.jsx)(u.qgt,{size:20})}),(0,r.jsx)("input",{type:"text",value:i,onChange:e=>{s(e.target.value)},placeholder:"name@email.com"})]})]}),(0,r.jsxs)("label",{children:["Data Type",(0,r.jsxs)("div",{className:l()["input-field"],children:[(0,r.jsx)("i",{"aria-hidden":"true",children:(0,r.jsx)(a.bGz,{size:20})}),(0,r.jsxs)("select",{value:g,onChange:e=>{h(e.target.value)},children:[(0,r.jsx)("option",{value:"",children:"Select Data Type"}),(0,r.jsx)("option",{value:"database",children:"Database"}),(0,r.jsx)("option",{value:"object storage",children:"Object Storage"}),(0,r.jsx)("option",{value:"file",children:"File"})]})]})]}),(0,r.jsxs)("label",{children:["Storage Capacity",(0,r.jsxs)("div",{className:l()["input-field"],children:[(0,r.jsx)("i",{"aria-hidden":"true",children:(0,r.jsx)(a.Wpg,{size:20})}),(0,r.jsxs)("select",{value:p,onChange:e=>{b(e.target.value)},children:[(0,r.jsx)("option",{value:"",children:"Select Storage Capacity "}),(0,r.jsx)("option",{value:"20TB",children:"20TB"}),(0,r.jsx)("option",{value:"80TB",children:"80TB"}),(0,r.jsx)("option",{value:"160TB",children:"160TB"}),(0,r.jsx)("option",{value:"320TB",children:"320TB"}),(0,r.jsx)("option",{value:"640TB",children:"640TB"}),(0,r.jsx)("option",{value:"Unlimited",children:"Unlimited"})]})]})]}),(0,r.jsxs)("label",{children:["Term",(0,r.jsxs)("div",{className:l()["input-field"],children:[(0,r.jsx)("i",{"aria-hidden":"true",children:(0,r.jsx)(c.ujk,{size:20})}),(0,r.jsxs)("select",{value:e,onChange:e=>{t(e.target.value)},children:[(0,r.jsx)("option",{value:"",children:"Select Term "}),(0,r.jsx)("option",{value:"hourly",children:"Hourly"}),(0,r.jsx)("option",{value:"monthly",children:"Monthly"}),(0,r.jsx)("option",{value:"24 Months",children:"24 Months"}),(0,r.jsx)("option",{value:"36 Months",children:"36 Months"}),(0,r.jsx)("option",{value:"Long term",children:"Long term"})]})]})]}),(0,r.jsx)("button",{type:"submit",onClick:f,"aria-label":"send request",children:"Send Request"})]})]})}},95996:function(e){e.exports={backup:"styles_backup__FjcN9","backup-hero":"styles_backup-hero__J9_Jj","btn-group":"styles_btn-group__pguVQ",btn:"styles_btn__naeVQ",modules:"styles_modules__e369p",whitepaper:"styles_whitepaper___VAWA","pricing-page":"styles_pricing-page__F4QXc","modules-heading":"styles_modules-heading__l_yiI","modules-cloud":"styles_modules-cloud__fxald","whitepaper-card":"styles_whitepaper-card__UP2fp","flex-module":"styles_flex-module__tYYEc","whitepaper-text":"styles_whitepaper-text__ucp_b","pricing-tab":"styles_pricing-tab__3Gl44","cloud-storage":"styles_cloud-storage__0NsIx","cloud-form":"styles_cloud-form__Nyya7","cloud-text":"styles_cloud-text__adXpc","input-field":"styles_input-field___8dH4"}},8009:function(e){e.exports={button:"button_button__TIoc7",transparentButton:"button_transparentButton__qL6i0"}},23033:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/aws.35f86e74.png",height:59,width:86,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEVMaXH8qAEjLz0xNDkdKUALIkbHcQD4lgEnLjv/owAnMDz3kQD/mQD/ogCGTB6bCzM1AAAAD3RSTlMAKxpTKjsETXdClCMKXg8/XMxyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nBXGyREAIAgEsF1uUPtv1yGvAGIiJgB0ako37m4bNtnvAsHME/gM1wCo0y08dAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},57468:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/azure.863f5880.png",height:63,width:109,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAPFBMVEUcn9s6yPwMXaQLTJESWJE8zPcxq+keiLwxr+MJYrIegL8HY7MEeNAAcswsnOUdjNcvqu8ytPUHasAJU55d6+hGAAAAEXRSTlMB4VLih4dSEfidtsXRb7bgpROijzMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAArSURBVHicY2BgYOFgZQABdmYORnYQg0mYS5ANxOAU4hEUADG4OXn5+RgYABAIAOgEZtb8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},41318:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/file.8cb81828.png",height:290,width:387,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEVMaXHJzc9tTjzi4unCv8XP0dfV19lIOUT////BxdKSlbTn5+cyLi5udo1SVm55fbhOUWe1ucr5QjvfAAAAEnRSTlMAlCpIpDpgDwR1q7hHn3/S+dsDKGP8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nD3Jxw0AIAzAQIeWhM7+yyI++HWS4ZeL5vhQ0vKggPscOwEivZ5mb6qacQESsQDh7iXyBwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},58461:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/google.9d5ba534.png",height:66,width:113,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAATlBMVEVMaXH/0gD/XQB5dMJDhPntbShBg/Mef9dCh/dEicjVS01EifvoNTvsPjP3iiFEivr6hx//ywH/xATrwQ7/wQM8lqX8vQUxqkl6rTlWdf9T8a7qAAAAGnRSTlMALkex5hVZFbUussSn5/h/qpp+wtjeWei5B3pavdgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicBcEBAkAgEEXBh/J3UZRU9z+pGYhXOgTw5HUzoLeyKOxQX7mfN8Q5vmDiBxtSAVx5du3OAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},16235:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/hero.7373e2ac.png",height:366,width:367,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXFNYaldbrAwTVx6j8bsxIBWbbQ6W7dZc8OntdI1UHMqSEw4UFJNZYWsuNeTotqZptFLY6H/zmBEU5iywed+jsj/8oJPZrlHYsCwwfVleshYcNF7DIKhAAAAGXRSTlMAsVGEL2TLFT0Ij/B/8nNh3nNFNKuNKfxymmlqhAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwli0kOgCAQwAoCM7jhhhv//6cBe2rSFJxGGqHcpwf0MrJVEbuzmprya8PUKxxPGodOYF4c0rb//gBCmgG7aiIjFgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},33732:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/note.d67ca170.png",height:290,width:387,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAJFBMVEVMaXGpsMianaK2uLvl6OuFiJSJiZNZa6+ksdxSYpw4TJ7z9fmPqqt9AAAAC3RSTlMAFUTU9CENVjs+pk3PjfkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAmSURBVHicY2BAAEZ2DgiDk4sdTLMxMzOzgmVYuFkgDCYmJjYGBgAJXABl+qSymgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},93651:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/whitepaper.4066cc84.png",height:357,width:485,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEUZO4dHXqn////09vknSY8hQ4gaQIgxUJLb4eswPYQLM4JXarVXb6nN0+RheqxrfbsPNoPX3OdYYp3u2OU2VJoylMYAAAAACnRSTlPs////////7P7s0JKUHwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADNJREFUeJwVxscRADAIAzATDOl9/11z0UswmpN0OM26asOsVXYIA01E0k9Zxbvegy/GjAchXAFCpdmcOQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},91810:function(e,t,i){"use strict";i.d(t,{w_:function(){return c}});var r=i(2265),A={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(A),a=["attr","size","title"];function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach(function(t){var r,A;r=t,A=i[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[r]=A}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function c(e){return t=>r.createElement(u,s({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,i)=>r.createElement(t.tag,o({key:i},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var i,{attr:A,size:n,title:l}=e,c=function(e,t){if(null==e)return{};var i,r,A=function(e,t){if(null==e)return{};var i={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;i[r]=e[r]}return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(A[i]=e[i])}return A}(e,a),u=n||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,A,c,{className:i,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==n?r.createElement(n.Consumer,null,e=>t(e)):t(A)}}},function(e){e.O(0,[6456,1471,7119,2516,9956,9212,8173,231,8472,2971,7023,1744],function(){return e(e.s=55332)}),_N_E=e.O()}]);