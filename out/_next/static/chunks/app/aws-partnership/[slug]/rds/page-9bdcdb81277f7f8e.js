(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1637],{95483:function(e,t,n){Promise.resolve().then(n.t.bind(n,65878,23)),Promise.resolve().then(n.t.bind(n,72972,23)),Promise.resolve().then(n.t.bind(n,63083,23)),Promise.resolve().then(n.t.bind(n,3128,23)),Promise.resolve().then(n.bind(n,1110)),Promise.resolve().then(n.bind(n,55485)),Promise.resolve().then(n.bind(n,39507)),Promise.resolve().then(n.bind(n,25896)),Promise.resolve().then(n.bind(n,8083)),Promise.resolve().then(n.bind(n,19872)),Promise.resolve().then(n.t.bind(n,41109,23)),Promise.resolve().then(n.bind(n,396))},51772:function(e,t,n){"use strict";var r=n(2265),i=r&&"object"==typeof r&&"default"in r?r:{default:r};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let a=r.forwardRef(function(e,t){let{style:n={},className:a="",autoFill:o=!1,play:s=!0,pauseOnHover:l=!1,pauseOnClick:c=!1,direction:u="left",speed:d=50,delay:A=0,loop:f=0,gradient:m=!1,gradientColor:g="white",gradientWidth:h=200,onFinish:v,onCycleComplete:p,onMount:b,children:w}=e,[y,E]=r.useState(0),[_,B]=r.useState(0),[R,M]=r.useState(1),[C,x]=r.useState(!1),S=r.useRef(null),P=t||S,k=r.useRef(null),N=r.useCallback(()=>{if(k.current&&P.current){let e=P.current.getBoundingClientRect(),t=k.current.getBoundingClientRect(),n=e.width,r=t.width;("up"===u||"down"===u)&&(n=e.height,r=t.height),o&&n&&r?M(r<n?Math.ceil(n/r):1):M(1),E(n),B(r)}},[o,P,u]);r.useEffect(()=>{if(C&&(N(),k.current&&P.current)){let e=new ResizeObserver(()=>N());return e.observe(P.current),e.observe(k.current),()=>{e&&e.disconnect()}}},[N,P,C]),r.useEffect(()=>{N()},[N,w]),r.useEffect(()=>{x(!0)},[]),r.useEffect(()=>{"function"==typeof b&&b()},[]);let O=r.useMemo(()=>o?_*R/d:_<y?y/d:_/d,[o,y,_,R,d]),V=r.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!s||l?"paused":"running","--pause-on-click":!s||l&&!c||c?"paused":"running","--width":"up"===u||"down"===u?"100vh":"100%","--transform":"up"===u?"rotate(-90deg)":"down"===u?"rotate(90deg)":"none"}),[n,s,l,c,u]),I=r.useMemo(()=>({"--gradient-color":g,"--gradient-width":"number"==typeof h?"".concat(h,"px"):h}),[g,h]),z=r.useMemo(()=>({"--play":s?"running":"paused","--direction":"left"===u?"normal":"reverse","--duration":"".concat(O,"s"),"--delay":"".concat(A,"s"),"--iteration-count":f?"".concat(f):"infinite","--min-width":o?"auto":"100%"}),[s,u,O,A,f,o]),U=r.useMemo(()=>({"--transform":"up"===u?"rotate(90deg)":"down"===u?"rotate(-90deg)":"none"}),[u]),X=r.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>i.default.createElement(r.Fragment,{key:t},r.Children.map(w,e=>i.default.createElement("div",{style:U,className:"rfm-child"},e)))),[U,w]);return C?i.default.createElement("div",{ref:P,style:V,className:"rfm-marquee-container "+a},m&&i.default.createElement("div",{style:I,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:z,onAnimationIteration:p,onAnimationEnd:v},i.default.createElement("div",{className:"rfm-initial-child-container",ref:k},r.Children.map(w,e=>i.default.createElement("div",{style:U,className:"rfm-child"},e))),X(R-1)),i.default.createElement("div",{className:"rfm-marquee",style:z},X(R))):null});t.Z=a},8083:function(e,t,n){"use strict";n.r(t),n.d(t,{LazyBackgroundImage:function(){return a}});var r=n(57437),i=n(2265);let a=e=>{let{src:t,className:n,children:a}=e,[o,s]=(0,i.useState)(!1),l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(s(!0),t.disconnect())})},{rootMargin:"100px"});return l.current&&e.observe(l.current),()=>{e&&e.disconnect&&e.disconnect()}},[]),(0,r.jsx)("div",{ref:l,className:n,style:{backgroundImage:o?"url(".concat(t.src,")"):"none"},children:a})}},63083:function(e){e.exports={"awslambda-page":"styles_awslambda-page__lewQo",hero:"styles_hero__3P8I8","grid-column":"styles_grid-column__eKctu",reviewSection:"styles_reviewSection__aw7sF","grid-img-bottom":"styles_grid-img-bottom__yIpFP"}},3128:function(e){e.exports={ctaSectionBg:"cta_ctaSectionBg__ptfOQ","call-to-action":"cta_call-to-action__3wkvc"}},41109:function(e){e.exports={button:"button_button__TIoc7",transparentButton:"button_transparentButton__qL6i0"}},55485:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/call-to-action.df51f023.png",height:321,width:1280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEUAAgYADyQAEzBIoAUBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEElEQVR4nGNggABGKMXEBAAAJQAH7DYpQQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:2}},39507:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/finance 1.28a03e3a.png",height:292,width:469,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAALVBMVEVeXXzP096tuOBHWJ7u8Pi9xOHs8PaZm6CXmZ3LzN2aocavsrzx7OeUmrL///9ajaFoAAAAD3RSTlMBHQwOspGZnH75lsw31u5W63GaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKElEQVR4nGNgYGDiYWRiYGBgYGTh4mSDMHi5+RhBLFZ2DlYQzcAMRgAL0AB7HKJXzwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},25896:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/planning-schedule 1.bc5727db.png",height:288,width:469,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEVMaXHKzdpDU5a7wMqlrMEmIUUwMG/t7vXs7++RnaLl6+u4vtXf4epeYW7JydiCiaz////msNfBAAAAEHRSTlMAjDE1JRsP+zQOKKfSktzP/eXebgAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJwVyMkRACAIALFFQcC7/2od8wzQIyKBcPddgZzXD4AOkVX+aDNrPBQuANjJA88SAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},28819:function(e,t,n){"use strict";n.d(t,{YD:function(){return c}});var r=n(2265),i=Object.defineProperty,a=new Map,o=new WeakMap,s=0,l=void 0;function c(){var e;let{threshold:t,delay:n,trackVisibility:i,rootMargin:c,root:u,triggerOnce:d,skip:A,initialInView:f,fallbackInView:m,onChange:g}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[h,v]=r.useState(null),p=r.useRef(),[b,w]=r.useState({inView:!!f,entry:void 0});p.current=g,r.useEffect(()=>{let e;if(!A&&h)return e=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if(void 0===window.IntersectionObserver&&void 0!==r){let i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:c,elements:u}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return"".concat(t,"_").concat("root"===t?(n=e.root)?(o.has(n)||(s+=1,o.set(n,s.toString())),o.get(n)):"0":e[t])}).toString(),n=a.get(t);if(!n){let r;let i=new Map,o=new IntersectionObserver(t=>{t.forEach(t=>{var n;let a=t.isIntersecting&&r.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=i.get(t.target))||n.forEach(e=>{e(a,t)})})},e);r=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:i},a.set(t,n)}return n}(n),d=u.get(e)||[];return u.has(e)||u.set(e,d),d.push(t),c.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(u.delete(e),c.unobserve(e)),0===u.size&&(c.disconnect(),a.delete(i))}}(h,(t,n)=>{w({inView:t,entry:n}),p.current&&p.current(t,n),n.isIntersecting&&d&&e&&(e(),e=void 0)},{root:u,rootMargin:c,threshold:t,trackVisibility:i,delay:n},m),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,h,u,c,d,A,i,m,n]);let y=null==(e=b.entry)?void 0:e.target,E=r.useRef();h||!y||d||A||E.current===y||(E.current=y,w({inView:!!f,entry:void 0}));let _=[v,b.inView,b.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}r.Component}},function(e){e.O(0,[4753,284,4478,6051,1779,5878,2972,3705,1110,1055,4606,2971,2117,1744],function(){return e(e.s=95483)}),_N_E=e.O()}]);