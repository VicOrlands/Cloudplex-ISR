(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5386],{7785:function(A,e,t){Promise.resolve().then(t.t.bind(t,38173,23)),Promise.resolve().then(t.t.bind(t,231,23)),Promise.resolve().then(t.bind(t,21932)),Promise.resolve().then(t.t.bind(t,48135,23)),Promise.resolve().then(t.bind(t,62835)),Promise.resolve().then(t.bind(t,67465)),Promise.resolve().then(t.bind(t,65890)),Promise.resolve().then(t.bind(t,89198)),Promise.resolve().then(t.bind(t,95116)),Promise.resolve().then(t.bind(t,37135)),Promise.resolve().then(t.bind(t,78411)),Promise.resolve().then(t.bind(t,18905)),Promise.resolve().then(t.bind(t,21105)),Promise.resolve().then(t.bind(t,54353)),Promise.resolve().then(t.bind(t,69807)),Promise.resolve().then(t.bind(t,87212)),Promise.resolve().then(t.bind(t,1453)),Promise.resolve().then(t.bind(t,58284)),Promise.resolve().then(t.bind(t,41528)),Promise.resolve().then(t.bind(t,94740)),Promise.resolve().then(t.bind(t,12788)),Promise.resolve().then(t.bind(t,12525)),Promise.resolve().then(t.bind(t,87134)),Promise.resolve().then(t.bind(t,79698)),Promise.resolve().then(t.bind(t,85953)),Promise.resolve().then(t.bind(t,2358)),Promise.resolve().then(t.bind(t,99468)),Promise.resolve().then(t.bind(t,4067)),Promise.resolve().then(t.bind(t,68759)),Promise.resolve().then(t.bind(t,6618)),Promise.resolve().then(t.bind(t,3816)),Promise.resolve().then(t.bind(t,20589)),Promise.resolve().then(t.bind(t,70134)),Promise.resolve().then(t.bind(t,94785)),Promise.resolve().then(t.bind(t,37039)),Promise.resolve().then(t.bind(t,3967)),Promise.resolve().then(t.bind(t,86414)),Promise.resolve().then(t.bind(t,85932)),Promise.resolve().then(t.bind(t,6301)),Promise.resolve().then(t.bind(t,97787)),Promise.resolve().then(t.t.bind(t,1651,23))},21932:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(2265),a=i&&"object"==typeof i&&"default"in i?i:{default:i};!function(A){if(!A||"undefined"==typeof window)return;let e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=A,document.head.appendChild(e)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let n=i.forwardRef(function(A,e){let{style:t={},className:n="",autoFill:r=!1,play:l=!0,pauseOnHover:s=!1,pauseOnClick:d=!1,direction:o="left",speed:u=50,delay:c=0,loop:g=0,gradient:h=!1,gradientColor:b="white",gradientWidth:f=200,onFinish:m,onCycleComplete:Q,onMount:w,children:U}=A,[B,p]=i.useState(0),[v,R]=i.useState(0),[C,D]=i.useState(1),[x,E]=i.useState(!1),W=i.useRef(null),J=e||W,k=i.useRef(null),S=i.useCallback(()=>{if(k.current&&J.current){let A=J.current.getBoundingClientRect(),e=k.current.getBoundingClientRect(),t=A.width,i=e.width;("up"===o||"down"===o)&&(t=A.height,i=e.height),r&&t&&i?D(i<t?Math.ceil(t/i):1):D(1),p(t),R(i)}},[r,J,o]);i.useEffect(()=>{if(x&&(S(),k.current&&J.current)){let A=new ResizeObserver(()=>S());return A.observe(J.current),A.observe(k.current),()=>{A&&A.disconnect()}}},[S,J,x]),i.useEffect(()=>{S()},[S,U]),i.useEffect(()=>{E(!0)},[]),i.useEffect(()=>{"function"==typeof w&&w()},[]);let P=i.useMemo(()=>r?v*C/u:v<B?B/u:v/u,[r,B,v,C,u]),H=i.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!l||s?"paused":"running","--pause-on-click":!l||s&&!d||d?"paused":"running","--width":"up"===o||"down"===o?"100vh":"100%","--transform":"up"===o?"rotate(-90deg)":"down"===o?"rotate(90deg)":"none"}),[t,l,s,d,o]),V=i.useMemo(()=>({"--gradient-color":b,"--gradient-width":"number"==typeof f?"".concat(f,"px"):f}),[b,f]),y=i.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===o?"normal":"reverse","--duration":"".concat(P,"s"),"--delay":"".concat(c,"s"),"--iteration-count":g?"".concat(g):"infinite","--min-width":r?"auto":"100%"}),[l,o,P,c,g,r]),_=i.useMemo(()=>({"--transform":"up"===o?"rotate(90deg)":"down"===o?"rotate(-90deg)":"none"}),[o]),X=i.useCallback(A=>[...Array(Number.isFinite(A)&&A>=0?A:0)].map((A,e)=>a.default.createElement(i.Fragment,{key:e},i.Children.map(U,A=>a.default.createElement("div",{style:_,className:"rfm-child"},A)))),[_,U]);return x?a.default.createElement("div",{ref:J,style:H,className:"rfm-marquee-container "+n},h&&a.default.createElement("div",{style:V,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:y,onAnimationIteration:Q,onAnimationEnd:m},a.default.createElement("div",{className:"rfm-initial-child-container",ref:k},i.Children.map(U,A=>a.default.createElement("div",{style:_,className:"rfm-child"},A))),X(C-1)),a.default.createElement("div",{className:"rfm-marquee",style:y},X(C))):null});e.default=n},97787:function(A,e,t){"use strict";t.r(e);var i=t(57437),a=t(2265),n=t(1399),r=t.n(n),l=t(49066),s=t(99509),d=t(51673),o=t(49690),u=t(87138),c=t(66648);e.default=A=>{let{title:e,subtitle:t,questions:n}=A,[g,h]=(0,a.useState)([]),b=A=>{g.includes(A)?h(g.filter(e=>e!==A)):h([...g,A])};return(0,i.jsxs)("section",{className:r()["faq-section"],children:[n.length>0&&(0,i.jsx)("h2",{children:"Frequently asked questions"}),n.length>0&&n.map(A=>(0,i.jsxs)("div",{className:r().faq,children:[(0,i.jsxs)("section",{children:[(0,i.jsx)("h4",{children:A.question}),g.includes(A.id)?(0,i.jsx)(o._nT,{id:r().icon,onClick:()=>b(A.id)}):(0,i.jsx)(o.dEn,{id:r().icon,onClick:()=>b(A.id)})]}),g.includes(A.id)&&(0,i.jsx)("p",{children:A.answer})]},A.id)),(0,i.jsxs)("section",{className:r()["faq-avatars"],children:[(0,i.jsx)(c.default,{src:l.Z,alt:"iLearnCloud"}),(0,i.jsx)(c.default,{src:s.Z,alt:"iLearnCloud"}),(0,i.jsx)(c.default,{src:d.Z,alt:"iLearnCloud"})]}),(0,i.jsx)("h4",{id:r()["faq-h2"],children:e}),(0,i.jsx)("p",{id:r()["faq-p"],children:t}),(0,i.jsx)(u.default,{href:"/contact-us",children:"Get in touch"})]})}},48135:function(A){A.exports={"cloud-migration":"styles_cloud-migration__UhYIE","cloud-migration-hero-section":"styles_cloud-migration-hero-section__Wnr47","partnership-hero-btn":"styles_partnership-hero-btn__E5Ht0","partnership-hero-img":"styles_partnership-hero-img__ZUrxr","cloud-migration-cost":"styles_cloud-migration-cost__Yp7b6","cloud-migration-success":"styles_cloud-migration-success__4MWvQ","success-h2":"styles_success-h2__VMfd4","p-header":"styles_p-header__icF9S","cloud-migration-product":"styles_cloud-migration-product__b16Dn","cloud-migration-product-data":"styles_cloud-migration-product-data__R2ZGO"}},1399:function(A){A.exports={"faq-section":"faq_faq-section__tT9Gt",faq:"faq_faq__nJSwy","faq-h2":"faq_faq-h2__xcpJx","faq-p":"faq_faq-p__2vvM2",icon:"faq_icon__3fFrk","faq-avatars":"faq_faq-avatars__QdimA"}},1651:function(A){A.exports={partnersSection:"styles_partnersSection__8SGxn",imageWrapper:"styles_imageWrapper__YE4y_"}},49066:function(A,e){"use strict";e.Z={src:"/_next/static/media/Avatar.d3108d0c.png",height:103,width:103,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEWmsHTAyZjz+fbCy5pibGN0TT/EzZ36+vvP169MaXFHVEF2fHW+xpmSZla6w6XJzq24o5GhqoiUk2qggVn09O5KT0w+MiGfZEJlYVYlLyS6iHq1xHyvunZtWjvcvJRdaUa1wX3TimmynXN5iWGuu3cHXmVeAAAAGXRSTlP+7yzx5vvhI6oA+6Lh/qid/vD+/i/e+P39SeV+1QAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAEZJREFUeJwFwQcCgCAMBLBj2RbcG3Dr/99oAqG6U6wFVO6uz2oEw6UWF6NAlY4PBkUe7gebQXPOi/cvg6a4xmg1hIK1geQHedUDf5qp4uQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},99509:function(A,e){"use strict";e.Z={src:"/_next/static/media/Avatar1.bb1b2c9f.png",height:119,width:119,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEXd0+ne1eqRi56FjZP09PbQ1tzVyeTs6vFMaXHXzObg0/C2pLx7fYuzkn5MRkmgnrGjmLFkbm7KysoxRU6/zdjY4N7o7euivdFVXV1SXWLGudnLveHZyvCBUz0pMS+GW0ze4enCrcCecVpxNKoFAAAAGnRSTlOvn/z+LPv0JADj6/7y/v3w+OAi/e3pq/6k63UeARUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABFSURBVHicBcEFAoAwDASwm7bDXToD/v9IEjBh7GAZFOJQdGOh0pR7nYAQ2/y94hGi1CrioZwzxj0AzWU9n92Cl+veDuIffgcDy6QkaooAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},51673:function(A,e){"use strict";e.Z={src:"/_next/static/media/Avatar2.79253d55.png",height:103,width:103,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEX9+/vlzs+2mZnu2drn1Nbp0NJWS0vIqqtMaXHvz9HMnX7O2Nfjy8724ePcxcju7u758/N2WU5wcHRSQzv52sU/SE/JuK1FJxs2IhmYjodscHT/2Lemh36Ib2N5Vkfdu73mwsS7kH3iwcTcn4m8o6YGEBjDgmyF40qQAAAAHHRSTlMi4f6vpu/8/QD6/irgnfIvLPne/eXopv74453+Q2613gAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAEdJREFUeJwFwQUCgCAQBMBF4g6wOwDb/z/RGTCULmXNgLBZJF1BWQquuSTETuedMo38oPRNwaJ4TOdmo4D2NVscPBjr0o+ef3VZA7WdoXNpAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},67465:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/codecollaboration.6506cd84.png",height:686,width:915,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEVMaXHGxjgZf8xvj++9xN+3pqoxNT90X1d2d5JobXAziMx+h5xOUHJ5gKFYXoalr8xHSVCioqZSUlaxuc5/g46kmEfLAAAAFHRSTlMACQoQqydfDzIjHrXEbee6pKpKqJP09nIAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAxSURBVHicPcHHAcAgDACxIxgXIIWy/6z5IcGR/F31AsxFPAN3D30CaHvMT4Eoxcz4ARgYARlJNEapAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},65890:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Accenture.92d5c76c.webp",height:50,width:187,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAAAAAACsqAACFcHGIfHmBgABWUDggHgAAADABAJ0BKggAAgACQDglpAADcAD++6EeDtfX1aEAAA==",blurWidth:8,blurHeight:2}},21105:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/BR_logo.23d743c6.webp",height:50,width:94,blurDataURL:"data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAJL29rJy9vHEtfH3gLzJN332ueuq54fJ8eL22eKMSVmUAVlA4IDwAAABwAQCdASoIAAQAAkA4JagCdAF1AAD+4Sf/uH/8///z5H+/4Mp/qb/vXV/wZT/U3wA/8pX/xu/3ZcwgAAA=",blurWidth:8,blurHeight:4}},58284:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Crypto-Smart.4af2d693.webp",height:50,width:141,blurDataURL:"data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAi9NiLUZKUkL47cZhlW+CVYHzbDFOTUAIAFZQOCBAAAAA0AEAnQEqCAADAAJAOCWoAnQA9IHQjAAA/pw4ogf/fs35KwJ27xXBKYd/n//RgXfSD8t/6MC7p99e6QY/G0ZgAA==",blurWidth:8,blurHeight:3}},41528:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Dukia.7ef84ef6.webp",height:50,width:152,blurDataURL:"data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAA2eZYGxkWGAD0/1RNUVRWEViCFxgjECMQAFZQOCAyAAAA0AEAnQEqCAADAAJAOCWoAnQBEBQFJcAA/vwMNZicobUnkEEO/+Sn/3lf67uSgjFDEAA=",blurWidth:8,blurHeight:3}},94740:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/GCP.97c74679.webp",height:50,width:319,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAeUU7MkwjLioAVlA4IC4AAACwAQCdASoIAAEAAkA4JQBOgCHfwF2AAP76D9nE38wjDj+4n6OiS9q1BMVahyAA",blurWidth:8,blurHeight:1}},79698:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Ican.8a0fda47.webp",height:50,width:143,blurDataURL:"data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBgAAAABHyAQSPyhb42IiAUCAUKaXmmKIvofiA1WUDggOgAAANABAJ0BKggAAwACQDglqAJ0APSNQ+H0AP7uMSyKzrd8Cn+ArIRppgf/lWCw/+mP9+lkH7/ObvcxAAA=",blurWidth:8,blurHeight:3}},99468:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Kobo-logo.6feed64d.webp",height:50,width:140,blurDataURL:"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAYGVln114Y17////tx////2Blgm+lZmVgAFZQOCBIAAAA0AEAnQEqCAADAAJAOCWwAnQA9JAEG2AA/urGWQG/e07/w4vCDr2hDwNt+Jh/7/7hnf6FwfivyWf7DwLlJ/8m+5OLln8mtIAA",blurWidth:8,blurHeight:3}},68759:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/MaxFiles-logo.353db5af.webp",height:50,width:233,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAASSsoTEE3KC5EZFM2L09NXwBWUDggPgAAALACAJ0BKggAAgACQDglqAJ0twCjAVQBkgAKHdyZIAD+9vxYvGUWf10or4O56w+66//jtoYP/IM7vJEz48AA",blurWidth:8,blurHeight:2}},86414:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Talent sync.8f081abc.webp",height:50,width:240,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAJh4eGyogDhoqUUNHO0dTOABWUDggHgAAAJABAJ0BKggAAgACQDglpAAC51m2AAD+/ixDxAAAAA==",blurWidth:8,blurHeight:2}},89198:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/asml.465d4537.webp",height:50,width:172,blurDataURL:"data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAZ29jRrWjcCSdomaQt7WWcQBWUDggKgAAAHABAJ0BKggAAgACQDgloAJ0AUAAAP76nQX/cIWUfCj8QhZQV3J+FQAAAA==",blurWidth:8,blurHeight:2}},95116:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/aws.b9f3c21d.webp",height:50,width:82,blurDataURL:"data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAKnVvO05keydTbWWbb1BoTkNXLldNFlw2QRoAAAAAOIICXY2TlIhRIwBWUDggVgAAAHACAJ0BKggABQACQDglsAJ0ugEmA/gAFtq2+AAA/vbsQyP/q+9HUtTL4MY2cdTjDOXRM/+U6PWPxPZ9wfwAw/g3/9yAfwn/1rfFm25OHdh7//uX3GAA",blurWidth:8,blurHeight:5}},37135:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/bitbarter.7701d7bf.webp",height:50,width:199,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAwtguSEMnMSjH2DNUTls6QABWUDggNgAAALABAJ0BKggAAgACQDgloAJ0AQ72o4AA/vb/NDlB7ZcMnzbnHj+4vUnd4re3R7j0z4C1xOAAAA==",blurWidth:8,blurHeight:2}},78411:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/bitsave.a675744a.webp",height:50,width:219,blurDataURL:"data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAaiw4PC4/MC1pLz8fSTk9MgBWUDggGAAAADABAJ0BKggAAgACQDglpAADcAD++5zAAA==",blurWidth:8,blurHeight:2}},18905:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/bp.ae23c63b.webp",height:50,width:37,blurDataURL:"data:image/webp;base64,UklGRsIAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAAAAJzo8AAABFjxJAUSjpT0AP+3//+s/kf////+Ijf////+FM+X//+AwACOCgB8AAFZQOCBqAAAAkAIAnQEqBgAIAAJAOCWwAnS6AfgAgEQFpRXEjAAA/sHA5YLPgpDHeOx+P8HIGCt6AM6f+rxa5L8XgaqaasOm3T8I3/n9OSrafPwEfiMycr8MRHAv69f/GH5OyW9E1+nwGGTkX2V98AAAAA==",blurWidth:6,blurHeight:8}},54353:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/cerberus.2e4268a9.webp",height:50,width:71,blurDataURL:"data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAilpfnArCQABqS4AJaoEAER+UyVXZF8AsExlOHREshgRQGGEXk4VAAAATHpaAQAAAFZQOCAsAAAAcAEAnQEqCAAGAAJAOCWoAnQBdQAA/umxgePs4MYr//s7v/+nd//07v73wAA=",blurWidth:8,blurHeight:6}},69807:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/checkpoint.0119c9d5.webp",height:50,width:103,blurDataURL:"data:image/webp;base64,UklGRp4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAAAM08gAAAAAAC/fQAAAAEBAkYvAgECOVBjUz5ZXS0AVlA4IFYAAADQAQCdASoIAAQAAkA4JbACdAEXfofEXAD++yadqCcqJSou97fFd0nkEYNfowL8q7WZv/x2+suv9P+fv38w3l3Mf/9KHfe/7OTLN/6Y/49W/wb/14AAAA==",blurWidth:8,blurHeight:4}},87212:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/clinton.a95c5956.webp",height:50,width:94,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAADikqLCktBQBuDDEvJyoTAD5lIRkYFjhVACFfTWmBQwkAVlA4ICYAAABwAQCdASoIAAQAAkA4JZACdAFAAAD+9P4V8UPNb2DuTri5si0gAA==",blurWidth:8,blurHeight:4}},1453:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/convexity.39b7d4b6.webp",height:50,width:177,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAakUkJh0jMR9fSC88Lzo1OgBWUDggPgAAABACAJ0BKggAAgACQDglkAJ0ugADO5h0oOAA/vTF5bUWSf+pPzktmPcwvuNn0UklysYe8vV7aQdUY9s9wAAA",blurWidth:8,blurHeight:2}},12788:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/geria.ee279ad9.webp",height:50,width:110,blurDataURL:"data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAAAABZXAACZhU0vgpE7ALXIsbJamIYAERUXEAkWDQAAVlA4IDIAAADwAQCdASoIAAQAAkA4JZwCsAEW0/dBOAAA/voBm3WlNNfHAL85D+hdxYaa/B3yAAzAAA==",blurWidth:8,blurHeight:4}},12525:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/government.1e37a1ed.webp",height:50,width:95,blurDataURL:"data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSBUAAAABF3D//4iIgCDbpmiTONrdI/ofknYAVlA4IDAAAACwAQCdASoIAAQAAkA4JYwCdAEO+mBgAP78hKzLptdauf3U+F0+7XSl8BE5wIgAAAA=",blurWidth:8,blurHeight:4}},85953:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/ideyFind.e7f75d4d.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAEeAwAAAAAAd5iPAAAAAACLkaMAAAAAADT8UAAAAAA9VltLZAAAAFp+NGzQei8CAleQcTif7FYAAAAAAAAKBQBWUDggTgAAANABAJ0BKggACAACQDglAE6AHpbPkPQAAP6tOLfzupamXpHvdoz884Y53nTr9yei/lXZEnsNtDeEpZcbv613VyMrX4TYvc/xKP2xB/qgAA==",blurWidth:8,blurHeight:8}},2358:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/inttix.fa207946.webp",height:50,width:128,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAUzoianJiIBpYX1hVV1I2eWlnZ4F1eGY2AFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77nMAA",blurWidth:8,blurHeight:3}},4067:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/liveli.efa15448.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDUAAAABYBMAYJK5vrs25OajA8UIQQEaurtXiIgEb2cE5xwFw1wVRZlF237nYdMP67angEtt44SDXwBWUDggSAAAALABAJ0BKggACAACQDglAE6AHpKy6gAA/oe8bv12841vBoR4s06XFzTbD0b4PsWM/HKfC/CP7DMP95lJ3/kRqVldgrz9OQAAAA==",blurWidth:8,blurHeight:8}},6618:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/mediaagility.cee10e15.webp",height:50,width:118,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAIB8LAAAYIykvIj0sCRQiIys3LSQPAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP714MAA",blurWidth:8,blurHeight:3}},3816:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/one.107bf593.webp",height:50,width:228,blurDataURL:"data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAA0zM8JSojIlPTKU49RVFGQgBWUDggPAAAAPABAJ0BKggAAgACQDgloAJ0ARD93BFUAAD+9+HwU8P1fciZOQ//6avv/8m/lW//LL9//k25tC0laNgAAA==",blurWidth:8,blurHeight:2}},20589:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/phastpay.d900160f.webp",height:50,width:135,blurDataURL:"data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAWncMAAAAAACreoFZSGFyR11sCAAAAAAAAFZQOCBQAAAAcAIAnQEqCAADAAJAOCWYAnRMgF8AfoAC3ZmvAAD+q+Bp+tE8gmX4BuBBRHkY14Y2ren0zmMNv2shwxX/SxX2xQKJ9DLYcttGfYLDWfNyIAA=",blurWidth:8,blurHeight:3}},70134:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/qpay.0dfb3489.webp",height:50,width:197,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAlIA5RH5qQjx5gR5VPiRGWwBWUDggNgAAAJABAJ0BKggAAgACQDglkAAC51m2AAD+3jaX/nFPeEdDkf9k+Gb/730GPv/8kx1/jgff/5AAAA==",blurWidth:8,blurHeight:2}},94785:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/silicon_africa.6a9dbf04.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAgAAkA4JZQCdAEPD3DFJAD++te5RiHp3vQdZhQCO6T3e/MK0eoOAVouhcCOPgVImwAsgAA=",blurWidth:8,blurHeight:8}},37039:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/sophos.e8cb8d19.webp",height:50,width:75,blurDataURL:"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCEAAAABL6CgbRQ4dS/glogI3CcFQQBJEhtsMsH+PDlE9D/RuyAAVlA4IEAAAADwAgCdASoIAAUAAkA4JZgCdGuAwQD9APf/uwAGBot0QAD+2T6IkiM19CesQA3i/+DJPbFbvjafVG/eFHNAAAAA",blurWidth:8,blurHeight:5}},3967:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/staycon.6965394c.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoIAAgAAkA4JZwC7AEPC8IaAAD+/cZwlV4sp0tciwprDAAA",blurWidth:8,blurHeight:8}},85932:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/varscon.7d7046e2.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABYBrZtpNDdLGJaHNyqKhBMrSBx6EpC4tC0QM08HuIiEQcd4lthOhr8r8Gjvs6AYzndQBDd0OAdl2muUcEAFZQOCBUAAAAkAEAnQEqCAAIAAJAOCWwAnQA8bagAP7mJCNi3/cJa80fLuiC7Rx7Zz9jkZdkDKllt5QuYY6xXpqYT//R5en5iqXWmv8nY/7zkz+jf//q0P5JAAAA",blurWidth:8,blurHeight:8}},6301:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/venco.49b356cc.webp",height:50,width:213,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAATWNzd2dYV18ITUFOPUxMUwBWUDggNgAAALABAJ0BKggAAgACQDglmAJ0APRtG6AA/thtoJwR7JtnDsdw9Yyg52SnhH9zfoV9bXLC6AAAAA==",blurWidth:8,blurHeight:2}}},function(A){A.O(0,[2986,5289,1659,6051,7259,8173,231,7956,3153,2835,2971,7023,1744],function(){return A(A.s=7785)}),_N_E=A.O()}]);