(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{18970:function(e,n,t){Promise.resolve().then(t.bind(t,29515))},21932:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2265),a=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let i=r.forwardRef(function(e,n){let{style:t={},className:i="",autoFill:o=!1,play:l=!0,pauseOnHover:c=!1,pauseOnClick:s=!1,direction:u="left",speed:d=50,delay:f=0,loop:m=0,gradient:v=!1,gradientColor:h="white",gradientWidth:p=200,onFinish:g,onCycleComplete:y,onMount:w,children:b}=e,[E,x]=r.useState(0),[k,N]=r.useState(0),[C,M]=r.useState(1),[_,q]=r.useState(!1),O=r.useRef(null),R=n||O,j=r.useRef(null),I=r.useCallback(()=>{if(j.current&&R.current){let e=R.current.getBoundingClientRect(),n=j.current.getBoundingClientRect(),t=e.width,r=n.width;("up"===u||"down"===u)&&(t=e.height,r=n.height),o&&t&&r?M(r<t?Math.ceil(t/r):1):M(1),x(t),N(r)}},[o,R,u]);r.useEffect(()=>{if(_&&(I(),j.current&&R.current)){let e=new ResizeObserver(()=>I());return e.observe(R.current),e.observe(j.current),()=>{e&&e.disconnect()}}},[I,R,_]),r.useEffect(()=>{I()},[I,b]),r.useEffect(()=>{q(!0)},[]),r.useEffect(()=>{"function"==typeof w&&w()},[]);let S=r.useMemo(()=>o?k*C/d:k<E?E/d:k/d,[o,E,k,C,d]),z=r.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!l||c?"paused":"running","--pause-on-click":!l||c&&!s||s?"paused":"running","--width":"up"===u||"down"===u?"100vh":"100%","--transform":"up"===u?"rotate(-90deg)":"down"===u?"rotate(90deg)":"none"}),[t,l,c,s,u]),A=r.useMemo(()=>({"--gradient-color":h,"--gradient-width":"number"==typeof p?"".concat(p,"px"):p}),[h,p]),B=r.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===u?"normal":"reverse","--duration":"".concat(S,"s"),"--delay":"".concat(f,"s"),"--iteration-count":m?"".concat(m):"infinite","--min-width":o?"auto":"100%"}),[l,u,S,f,m,o]),F=r.useMemo(()=>({"--transform":"up"===u?"rotate(90deg)":"down"===u?"rotate(-90deg)":"none"}),[u]),L=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,n)=>a.default.createElement(r.Fragment,{key:n},r.Children.map(b,e=>a.default.createElement("div",{style:F,className:"rfm-child"},e)))),[F,b]);return _?a.default.createElement("div",{ref:R,style:z,className:"rfm-marquee-container "+i},v&&a.default.createElement("div",{style:A,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:B,onAnimationIteration:y,onAnimationEnd:g},a.default.createElement("div",{className:"rfm-initial-child-container",ref:j},r.Children.map(b,e=>a.default.createElement("div",{style:F,className:"rfm-child"},e))),L(C-1)),a.default.createElement("div",{className:"rfm-marquee",style:B},L(C))):null});n.default=i},71164:function(e,n,t){"use strict";t.r(n),t.d(n,{LazyBackgroundImage:function(){return i}});var r=t(57437),a=t(2265);let i=e=>{let{src:n,className:t,children:i}=e,[o,l]=(0,a.useState)(!1),c=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=new IntersectionObserver((e,n)=>{e.forEach(e=>{e.isIntersecting&&(l(!0),n.disconnect())})},{rootMargin:"100px"});return c.current&&e.observe(c.current),()=>{e&&e.disconnect&&e.disconnect()}},[]),(0,r.jsx)("div",{ref:c,className:t,style:{backgroundImage:o?"url(".concat(n.src,")"):"none"},children:i})}}},function(e){e.O(0,[7578,1471,7119,7259,8173,231,2,9515,2971,7023,1744],function(){return e(e.s=18970)}),_N_E=e.O()}]);