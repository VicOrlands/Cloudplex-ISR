(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6771],{51772:function(e,t,n){"use strict";var i=n(2265),r=i&&"object"==typeof i&&"default"in i?i:{default:i};!function(e){if(!e||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let a=i.forwardRef(function(e,t){let{style:n={},className:a="",autoFill:o=!1,play:s=!0,pauseOnHover:c=!1,pauseOnClick:l=!1,direction:d="left",speed:u=50,delay:A=0,loop:f=0,gradient:h=!1,gradientColor:m="white",gradientWidth:g=200,onFinish:v,onCycleComplete:p,onMount:y,children:w}=e,[b,x]=i.useState(0),[_,E]=i.useState(0),[q,U]=i.useState(1),[R,S]=i.useState(!1),C=i.useRef(null),V=t||C,j=i.useRef(null),F=i.useCallback(()=>{if(j.current&&V.current){let e=V.current.getBoundingClientRect(),t=j.current.getBoundingClientRect(),n=e.width,i=t.width;("up"===d||"down"===d)&&(n=e.height,i=t.height),o&&n&&i?U(i<n?Math.ceil(n/i):1):U(1),x(n),E(i)}},[o,V,d]);i.useEffect(()=>{if(R&&(F(),j.current&&V.current)){let e=new ResizeObserver(()=>F());return e.observe(V.current),e.observe(j.current),()=>{e&&e.disconnect()}}},[F,V,R]),i.useEffect(()=>{F()},[F,w]),i.useEffect(()=>{S(!0)},[]),i.useEffect(()=>{"function"==typeof y&&y()},[]);let M=i.useMemo(()=>o?_*q/u:_<b?b/u:_/u,[o,b,_,q,u]),N=i.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!s||c?"paused":"running","--pause-on-click":!s||c&&!l||l?"paused":"running","--width":"up"===d||"down"===d?"100vh":"100%","--transform":"up"===d?"rotate(-90deg)":"down"===d?"rotate(90deg)":"none"}),[n,s,c,l,d]),k=i.useMemo(()=>({"--gradient-color":m,"--gradient-width":"number"==typeof g?"".concat(g,"px"):g}),[m,g]),H=i.useMemo(()=>({"--play":s?"running":"paused","--direction":"left"===d?"normal":"reverse","--duration":"".concat(M,"s"),"--delay":"".concat(A,"s"),"--iteration-count":f?"".concat(f):"infinite","--min-width":o?"auto":"100%"}),[s,d,M,A,f,o]),z=i.useMemo(()=>({"--transform":"up"===d?"rotate(90deg)":"down"===d?"rotate(-90deg)":"none"}),[d]),B=i.useCallback(e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map((e,t)=>r.default.createElement(i.Fragment,{key:t},i.Children.map(w,e=>r.default.createElement("div",{style:z,className:"rfm-child"},e)))),[z,w]);return R?r.default.createElement("div",{ref:V,style:N,className:"rfm-marquee-container "+a},h&&r.default.createElement("div",{style:k,className:"rfm-overlay"}),r.default.createElement("div",{className:"rfm-marquee",style:H,onAnimationIteration:p,onAnimationEnd:v},r.default.createElement("div",{className:"rfm-initial-child-container",ref:j},i.Children.map(w,e=>r.default.createElement("div",{style:z,className:"rfm-child"},e))),B(q-1)),r.default.createElement("div",{className:"rfm-marquee",style:H},B(q))):null});t.Z=a},14558:function(e,t,n){"use strict";n.r(t);var i=n(57437),r=n(2265),a=n(40844),o=n.n(a),s=n(86317),c=n(24617),l=n(68425),d=n(63400),u=n(27648),A=n(33145);t.default=e=>{let{title:t,subtitle:n,questions:a}=e,[f,h]=(0,r.useState)([]),m=e=>{f.includes(e)?h(f.filter(t=>t!==e)):h([...f,e])};return(0,i.jsxs)("section",{className:o()["faq-section"],children:[a.length>0&&(0,i.jsx)("h2",{children:"Frequently asked questions"}),a.length>0&&a.map(e=>(0,i.jsxs)("div",{className:o().faq,children:[(0,i.jsxs)("section",{children:[(0,i.jsx)("h4",{children:e.question}),f.includes(e.id)?(0,i.jsx)(d._nT,{id:o().icon,onClick:()=>m(e.id)}):(0,i.jsx)(d.dEn,{id:o().icon,onClick:()=>m(e.id)})]}),f.includes(e.id)&&(0,i.jsx)("p",{children:e.answer})]},e.id)),(0,i.jsxs)("section",{className:o()["faq-avatars"],children:[(0,i.jsx)(A.default,{src:s.Z,alt:"iLearnCloud"}),(0,i.jsx)(A.default,{src:c.Z,alt:"iLearnCloud"}),(0,i.jsx)(A.default,{src:l.Z,alt:"iLearnCloud"})]}),(0,i.jsx)("h4",{id:o()["faq-h2"],children:t}),(0,i.jsx)("p",{id:o()["faq-p"],children:n}),(0,i.jsx)(u.default,{href:"/contact-us",children:"Get in touch"})]})}},91821:function(e){e.exports={"cloud-migration":"styles_cloud-migration__UhYIE","cloud-migration-hero-section":"styles_cloud-migration-hero-section__Wnr47","partnership-hero-btn":"styles_partnership-hero-btn__E5Ht0","partnership-hero-img":"styles_partnership-hero-img__ZUrxr","cloud-migration-cost":"styles_cloud-migration-cost__Yp7b6","cloud-migration-success":"styles_cloud-migration-success__4MWvQ","success-h2":"styles_success-h2__VMfd4","p-header":"styles_p-header__icF9S","cloud-migration-product":"styles_cloud-migration-product__b16Dn","cloud-migration-product-data":"styles_cloud-migration-product-data__R2ZGO"}},40844:function(e){e.exports={"faq-section":"faq_faq-section__tT9Gt",faq:"faq_faq__nJSwy","faq-h2":"faq_faq-h2__xcpJx","faq-p":"faq_faq-p__2vvM2",icon:"faq_icon__3fFrk","faq-avatars":"faq_faq-avatars__QdimA"}},86317:function(e,t){"use strict";t.Z={src:"/_next/static/media/Avatar.d3108d0c.png",height:103,width:103,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEWmsHTAyZjz+fbCy5pibGN0TT/EzZ36+vvP169MaXFHVEF2fHW+xpmSZla6w6XJzq24o5GhqoiUk2qggVn09O5KT0w+MiGfZEJlYVYlLyS6iHq1xHyvunZtWjvcvJRdaUa1wX3TimmynXN5iWGuu3cHXmVeAAAAGXRSTlP+7yzx5vvhI6oA+6Lh/qid/vD+/i/e+P39SeV+1QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAEZJREFUeJwFwQcCgCAMBLBj2RbcG3Dr/99oAqG6U6wFVO6uz2oEw6UWF6NAlY4PBkUe7gebQXPOi/cvg6a4xmg1hIK1geQHedUDf5qp4uQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},24617:function(e,t){"use strict";t.Z={src:"/_next/static/media/Avatar1.bb1b2c9f.png",height:119,width:119,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEXd0+ne1eqRi56FjZP09PbQ1tzVyeTs6vFMaXHXzObg0/C2pLx7fYuzkn5MRkmgnrGjmLFkbm7KysoxRU6/zdjY4N7o7euivdFVXV1SXWLGudnLveHZyvCBUz0pMS+GW0ze4enCrcCecVpxNKoFAAAAGnRSTlOvn/z+LPv0JADj6/7y/v3w+OAi/e3pq/6k63UeARUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABFSURBVHicBcEFAoAwDASwm7bDXToD/v9IEjBh7GAZFOJQdGOh0pR7nYAQ2/y94hGi1CrioZwzxj0AzWU9n92Cl+veDuIffgcDy6QkaooAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},68425:function(e,t){"use strict";t.Z={src:"/_next/static/media/Avatar2.79253d55.png",height:103,width:103,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEX9+/vlzs+2mZnu2drn1Nbp0NJWS0vIqqtMaXHvz9HMnX7O2Nfjy8724ePcxcju7u758/N2WU5wcHRSQzv52sU/SE/JuK1FJxs2IhmYjodscHT/2Lemh36Ib2N5Vkfdu73mwsS7kH3iwcTcn4m8o6YGEBjDgmyF40qQAAAAHHRSTlMi4f6vpu/8/QD6/irgnfIvLPne/eXopv74453+Q2613gAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAEdJREFUeJwFwQUCgCAQBMBF4g6wOwDb/z/RGTCULmXNgLBZJF1BWQquuSTETuedMo38oPRNwaJ4TOdmo4D2NVscPBjr0o+ef3VZA7WdoXNpAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},9016:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/codecollaboration.6506cd84.png",height:686,width:915,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEVMaXHGxjgZf8xvj++9xN+3pqoxNT90X1d2d5JobXAziMx+h5xOUHJ5gKFYXoalr8xHSVCioqZSUlaxuc5/g46kmEfLAAAAFHRSTlMACQoQqydfDzIjHrXEbee6pKpKqJP09nIAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAxSURBVHicPcHHAcAgDACxIxgXIIWy/6z5IcGR/F31AsxFPAN3D30CaHvMT4Eoxcz4ARgYARlJNEapAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},28819:function(e,t,n){"use strict";n.d(t,{YD:function(){return l}});var i=n(2265),r=Object.defineProperty,a=new Map,o=new WeakMap,s=0,c=void 0;function l(){var e;let{threshold:t,delay:n,trackVisibility:r,rootMargin:l,root:d,triggerOnce:u,skip:A,initialInView:f,fallbackInView:h,onChange:m}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[g,v]=i.useState(null),p=i.useRef(),[y,w]=i.useState({inView:!!f,entry:void 0});p.current=m,i.useEffect(()=>{let e;if(!A&&g)return e=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if(void 0===window.IntersectionObserver&&void 0!==i){let r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),()=>{}}let{id:r,observer:l,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return"".concat(t,"_").concat("root"===t?(n=e.root)?(o.has(n)||(s+=1,o.set(n,s.toString())),o.get(n)):"0":e[t])}).toString(),n=a.get(t);if(!n){let i;let r=new Map,o=new IntersectionObserver(t=>{t.forEach(t=>{var n;let a=t.isIntersecting&&i.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=r.get(t.target))||n.forEach(e=>{e(a,t)})})},e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},a.set(t,n)}return n}(n),u=d.get(e)||[];return d.has(e)||d.set(e,u),u.push(t),l.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(d.delete(e),l.unobserve(e)),0===d.size&&(l.disconnect(),a.delete(r))}}(g,(t,n)=>{w({inView:t,entry:n}),p.current&&p.current(t,n),n.isIntersecting&&u&&e&&(e(),e=void 0)},{root:d,rootMargin:l,threshold:t,trackVisibility:r,delay:n},h),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,g,d,l,u,A,r,h,n]);let b=null==(e=y.entry)?void 0:e.target,x=i.useRef();g||!b||u||A||x.current===b||(x.current=b,w({inView:!!f,entry:void 0}));let _=[v,y.inView,y.entry];return _.ref=_[0],_.inView=_[1],_.entry=_[2],_}i.Component}}]);