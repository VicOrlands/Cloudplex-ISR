(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6151],{51772:function(A,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(2265),i=a&&"object"==typeof a&&"default"in a?a:{default:a};!function(A){if(!A||"undefined"==typeof window)return;let t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=A,document.head.appendChild(t)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let n=a.forwardRef(function(A,t){let{style:e={},className:n="",autoFill:r=!1,play:l=!0,pauseOnHover:s=!1,pauseOnClick:u=!1,direction:d="left",speed:g=50,delay:o=0,loop:c=0,gradient:b=!1,gradientColor:Q="white",gradientWidth:h=200,onFinish:w,onCycleComplete:f,onMount:m,children:B}=A,[U,p]=a.useState(0),[D,R]=a.useState(0),[C,W]=a.useState(1),[x,E]=a.useState(!1),J=a.useRef(null),k=t||J,v=a.useRef(null),y=a.useCallback(()=>{if(v.current&&k.current){let A=k.current.getBoundingClientRect(),t=v.current.getBoundingClientRect(),e=A.width,a=t.width;("up"===d||"down"===d)&&(e=A.height,a=t.height),r&&e&&a?W(a<e?Math.ceil(e/a):1):W(1),p(e),R(a)}},[r,k,d]);a.useEffect(()=>{if(x&&(y(),v.current&&k.current)){let A=new ResizeObserver(()=>y());return A.observe(k.current),A.observe(v.current),()=>{A&&A.disconnect()}}},[y,k,x]),a.useEffect(()=>{y()},[y,B]),a.useEffect(()=>{E(!0)},[]),a.useEffect(()=>{"function"==typeof m&&m()},[]);let _=a.useMemo(()=>r?D*C/g:D<U?U/g:D/g,[r,U,D,C,g]),S=a.useMemo(()=>Object.assign(Object.assign({},e),{"--pause-on-hover":!l||s?"paused":"running","--pause-on-click":!l||s&&!u||u?"paused":"running","--width":"up"===d||"down"===d?"100vh":"100%","--transform":"up"===d?"rotate(-90deg)":"down"===d?"rotate(90deg)":"none"}),[e,l,s,u,d]),H=a.useMemo(()=>({"--gradient-color":Q,"--gradient-width":"number"==typeof h?"".concat(h,"px"):h}),[Q,h]),X=a.useMemo(()=>({"--play":l?"running":"paused","--direction":"left"===d?"normal":"reverse","--duration":"".concat(_,"s"),"--delay":"".concat(o,"s"),"--iteration-count":c?"".concat(c):"infinite","--min-width":r?"auto":"100%"}),[l,d,_,o,c,r]),V=a.useMemo(()=>({"--transform":"up"===d?"rotate(90deg)":"down"===d?"rotate(-90deg)":"none"}),[d]),L=a.useCallback(A=>[...Array(Number.isFinite(A)&&A>=0?A:0)].map((A,t)=>i.default.createElement(a.Fragment,{key:t},a.Children.map(B,A=>i.default.createElement("div",{style:V,className:"rfm-child"},A)))),[V,B]);return x?i.default.createElement("div",{ref:k,style:S,className:"rfm-marquee-container "+n},b&&i.default.createElement("div",{style:H,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:X,onAnimationIteration:f,onAnimationEnd:w},i.default.createElement("div",{className:"rfm-initial-child-container",ref:v},a.Children.map(B,A=>i.default.createElement("div",{style:V,className:"rfm-child"},A))),L(C-1)),i.default.createElement("div",{className:"rfm-marquee",style:X},L(C))):null});t.default=n},93430:function(A){A.exports={solutions:"styles_solutions__8VJkb",hero:"styles_hero___ky6S","hero-button":"styles_hero-button__Y_PWq",btn:"styles_btn__d9c95",btn2:"styles_btn2__JH_V8","solutions-list":"styles_solutions-list__jjFQ5","service-row":"styles_service-row__UhL1f","why-choose-us":"styles_why-choose-us__C3y7U","aws-managed-image":"styles_aws-managed-image__o0yHs","aws-managed-cloud":"styles_aws-managed-cloud__mM59O"}},41109:function(A){A.exports={button:"button_button__TIoc7",transparentButton:"button_transparentButton__qL6i0"}},2047:function(A){A.exports={partnersSection:"styles_partnersSection__8SGxn",imageWrapper:"styles_imageWrapper__YE4y_"}},52557:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/Accenture.92d5c76c.webp",height:50,width:187,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAAAAAACsqAACFcHGIfHmBgABWUDggHgAAADABAJ0BKggAAgACQDglpAADcAD++6EeDtfX1aEAAA==",blurWidth:8,blurHeight:2}},83807:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/BR_logo.23d743c6.webp",height:50,width:94,blurDataURL:"data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAJL29rJy9vHEtfH3gLzJN332ueuq54fJ8eL22eKMSVmUAVlA4IDwAAABwAQCdASoIAAQAAkA4JagCdAF1AAD+4Sf/uH/8///z5H+/4Mp/qb/vXV/wZT/U3wA/8pX/xu/3ZcwgAAA=",blurWidth:8,blurHeight:4}},89377:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/Crypto-Smart.4af2d693.webp",height:50,width:141,blurDataURL:"data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAi9NiLUZKUkL47cZhlW+CVYHzbDFOTUAIAFZQOCBAAAAA0AEAnQEqCAADAAJAOCWoAnQA9IHQjAAA/pw4ogf/fs35KwJ27xXBKYd/n//RgXfSD8t/6MC7p99e6QY/G0ZgAA==",blurWidth:8,blurHeight:3}},35145:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/Dukia.7ef84ef6.webp",height:50,width:152,blurDataURL:"data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAA2eZYGxkWGAD0/1RNUVRWEViCFxgjECMQAFZQOCAyAAAA0AEAnQEqCAADAAJAOCWoAnQBEBQFJcAA/vwMNZicobUnkEEO/+Sn/3lf67uSgjFDEAA=",blurWidth:8,blurHeight:3}},69051:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/GCP.97c74679.webp",height:50,width:319,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAeUU7MkwjLioAVlA4IC4AAACwAQCdASoIAAEAAkA4JQBOgCHfwF2AAP76D9nE38wjDj+4n6OiS9q1BMVahyAA",blurWidth:8,blurHeight:1}},27930:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/GTCO_logo.9136dbb2.webp",height:50,width:259,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAA6yYqKiEnJCnlKistDgAAAABWUDggPgAAADACAJ0BKggAAgACQDgliAJ0RwBkgALNo0egAP7zZXgrEREJqN49U61kOpdX5tWqDRX8P+DVaPM8D/gfIAAA",blurWidth:8,blurHeight:2}},57837:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/Ican.8a0fda47.webp",height:50,width:143,blurDataURL:"data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBgAAAABHyAQSPyhb42IiAUCAUKaXmmKIvofiA1WUDggOgAAANABAJ0BKggAAwACQDglqAJ0APSNQ+H0AP7uMSyKzrd8Cn+ArIRppgf/lWCw/+mP9+lkH7/ObvcxAAA=",blurWidth:8,blurHeight:3}},11642:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/Kobo-logo.6feed64d.webp",height:50,width:140,blurDataURL:"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAYGVln114Y17////tx////2Blgm+lZmVgAFZQOCBIAAAA0AEAnQEqCAADAAJAOCWwAnQA9JAEG2AA/urGWQG/e07/w4vCDr2hDwNt+Jh/7/7hnf6FwfivyWf7DwLlJ/8m+5OLln8mtIAA",blurWidth:8,blurHeight:3}},25697:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/MaxFiles-logo.353db5af.webp",height:50,width:233,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAASSsoTEE3KC5EZFM2L09NXwBWUDggPgAAALACAJ0BKggAAgACQDglqAJ0twCjAVQBkgAKHdyZIAD+9vxYvGUWf10or4O56w+66//jtoYP/IM7vJEz48AA",blurWidth:8,blurHeight:2}},95921:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/Talent sync.8f081abc.webp",height:50,width:240,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAJh4eGyogDhoqUUNHO0dTOABWUDggHgAAAJABAJ0BKggAAgACQDglpAAC51m2AAD+/ixDxAAAAA==",blurWidth:8,blurHeight:2}},16331:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/asml.465d4537.webp",height:50,width:172,blurDataURL:"data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAZ29jRrWjcCSdomaQt7WWcQBWUDggKgAAAHABAJ0BKggAAgACQDgloAJ0AUAAAP76nQX/cIWUfCj8QhZQV3J+FQAAAA==",blurWidth:8,blurHeight:2}},69430:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/aws.b9f3c21d.webp",height:50,width:82,blurDataURL:"data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAKnVvO05keydTbWWbb1BoTkNXLldNFlw2QRoAAAAAOIICXY2TlIhRIwBWUDggVgAAAHACAJ0BKggABQACQDglsAJ0ugEmA/gAFtq2+AAA/vbsQyP/q+9HUtTL4MY2cdTjDOXRM/+U6PWPxPZ9wfwAw/g3/9yAfwn/1rfFm25OHdh7//uX3GAA",blurWidth:8,blurHeight:5}},15674:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/bitbarter.7701d7bf.webp",height:50,width:199,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAwtguSEMnMSjH2DNUTls6QABWUDggNgAAALABAJ0BKggAAgACQDgloAJ0AQ72o4AA/vb/NDlB7ZcMnzbnHj+4vUnd4re3R7j0z4C1xOAAAA==",blurWidth:8,blurHeight:2}},77904:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/bitsave.a675744a.webp",height:50,width:219,blurDataURL:"data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAaiw4PC4/MC1pLz8fSTk9MgBWUDggGAAAADABAJ0BKggAAgACQDglpAADcAD++5zAAA==",blurWidth:8,blurHeight:2}},39348:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/bp.ae23c63b.webp",height:50,width:37,blurDataURL:"data:image/webp;base64,UklGRsIAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAAAAJzo8AAABFjxJAUSjpT0AP+3//+s/kf////+Ijf////+FM+X//+AwACOCgB8AAFZQOCBqAAAAkAIAnQEqBgAIAAJAOCWwAnS6AfgAgEQFpRXEjAAA/sHA5YLPgpDHeOx+P8HIGCt6AM6f+rxa5L8XgaqaasOm3T8I3/n9OSrafPwEfiMycr8MRHAv69f/GH5OyW9E1+nwGGTkX2V98AAAAA==",blurWidth:6,blurHeight:8}},42504:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/cerberus.2e4268a9.webp",height:50,width:71,blurDataURL:"data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAilpfnArCQABqS4AJaoEAER+UyVXZF8AsExlOHREshgRQGGEXk4VAAAATHpaAQAAAFZQOCAsAAAAcAEAnQEqCAAGAAJAOCWoAnQBdQAA/umxgePs4MYr//s7v/+nd//07v73wAA=",blurWidth:8,blurHeight:6}},8893:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/checkpoint.0119c9d5.webp",height:50,width:103,blurDataURL:"data:image/webp;base64,UklGRp4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAAAM08gAAAAAAC/fQAAAAEBAkYvAgECOVBjUz5ZXS0AVlA4IFYAAADQAQCdASoIAAQAAkA4JbACdAEXfofEXAD++yadqCcqJSou97fFd0nkEYNfowL8q7WZv/x2+suv9P+fv38w3l3Mf/9KHfe/7OTLN/6Y/49W/wb/14AAAA==",blurWidth:8,blurHeight:4}},67794:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/clinton.a95c5956.webp",height:50,width:94,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAADikqLCktBQBuDDEvJyoTAD5lIRkYFjhVACFfTWmBQwkAVlA4ICYAAABwAQCdASoIAAQAAkA4JZACdAFAAAD+9P4V8UPNb2DuTri5si0gAA==",blurWidth:8,blurHeight:4}},41801:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/convexity.39b7d4b6.webp",height:50,width:177,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAakUkJh0jMR9fSC88Lzo1OgBWUDggPgAAABACAJ0BKggAAgACQDglkAJ0ugADO5h0oOAA/vTF5bUWSf+pPzktmPcwvuNn0UklysYe8vV7aQdUY9s9wAAA",blurWidth:8,blurHeight:2}},43048:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/geria.ee279ad9.webp",height:50,width:110,blurDataURL:"data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAAAABZXAACZhU0vgpE7ALXIsbJamIYAERUXEAkWDQAAVlA4IDIAAADwAQCdASoIAAQAAkA4JZwCsAEW0/dBOAAA/voBm3WlNNfHAL85D+hdxYaa/B3yAAzAAA==",blurWidth:8,blurHeight:4}},52731:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/government.1e37a1ed.webp",height:50,width:95,blurDataURL:"data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSBUAAAABF3D//4iIgCDbpmiTONrdI/ofknYAVlA4IDAAAACwAQCdASoIAAQAAkA4JYwCdAEO+mBgAP78hKzLptdauf3U+F0+7XSl8BE5wIgAAAA=",blurWidth:8,blurHeight:4}},58169:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/ideyFind.e7f75d4d.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAEeAwAAAAAAd5iPAAAAAACLkaMAAAAAADT8UAAAAAA9VltLZAAAAFp+NGzQei8CAleQcTif7FYAAAAAAAAKBQBWUDggTgAAANABAJ0BKggACAACQDglAE6AHpbPkPQAAP6tOLfzupamXpHvdoz884Y53nTr9yei/lXZEnsNtDeEpZcbv613VyMrX4TYvc/xKP2xB/qgAA==",blurWidth:8,blurHeight:8}},73950:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/inttix.fa207946.webp",height:50,width:128,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAUzoianJiIBpYX1hVV1I2eWlnZ4F1eGY2AFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77nMAA",blurWidth:8,blurHeight:3}},21959:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/liveli.efa15448.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDUAAAABYBMAYJK5vrs25OajA8UIQQEaurtXiIgEb2cE5xwFw1wVRZlF237nYdMP67angEtt44SDXwBWUDggSAAAALABAJ0BKggACAACQDglAE6AHpKy6gAA/oe8bv12841vBoR4s06XFzTbD0b4PsWM/HKfC/CP7DMP95lJ3/kRqVldgrz9OQAAAA==",blurWidth:8,blurHeight:8}},12796:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/mediaagility.cee10e15.webp",height:50,width:118,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAIB8LAAAYIykvIj0sCRQiIys3LSQPAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP714MAA",blurWidth:8,blurHeight:3}},58063:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/one.107bf593.webp",height:50,width:228,blurDataURL:"data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAA0zM8JSojIlPTKU49RVFGQgBWUDggPAAAAPABAJ0BKggAAgACQDgloAJ0ARD93BFUAAD+9+HwU8P1fciZOQ//6avv/8m/lW//LL9//k25tC0laNgAAA==",blurWidth:8,blurHeight:2}},90407:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/phastpay.d900160f.webp",height:50,width:135,blurDataURL:"data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAWncMAAAAAACreoFZSGFyR11sCAAAAAAAAFZQOCBQAAAAcAIAnQEqCAADAAJAOCWYAnRMgF8AfoAC3ZmvAAD+q+Bp+tE8gmX4BuBBRHkY14Y2ren0zmMNv2shwxX/SxX2xQKJ9DLYcttGfYLDWfNyIAA=",blurWidth:8,blurHeight:3}},11153:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/qpay.0dfb3489.webp",height:50,width:197,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAlIA5RH5qQjx5gR5VPiRGWwBWUDggNgAAAJABAJ0BKggAAgACQDglkAAC51m2AAD+3jaX/nFPeEdDkf9k+Gb/730GPv/8kx1/jgff/5AAAA==",blurWidth:8,blurHeight:2}},81923:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/silicon_africa.6a9dbf04.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAgAAkA4JZQCdAEPD3DFJAD++te5RiHp3vQdZhQCO6T3e/MK0eoOAVouhcCOPgVImwAsgAA=",blurWidth:8,blurHeight:8}},8342:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/sophos.e8cb8d19.webp",height:50,width:75,blurDataURL:"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCEAAAABL6CgbRQ4dS/glogI3CcFQQBJEhtsMsH+PDlE9D/RuyAAVlA4IEAAAADwAgCdASoIAAUAAkA4JZgCdGuAwQD9APf/uwAGBot0QAD+2T6IkiM19CesQA3i/+DJPbFbvjafVG/eFHNAAAAA",blurWidth:8,blurHeight:5}},93819:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/staycon.6965394c.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoIAAgAAkA4JZwC7AEPC8IaAAD+/cZwlV4sp0tciwprDAAA",blurWidth:8,blurHeight:8}},44471:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/varscon.7d7046e2.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABYBrZtpNDdLGJaHNyqKhBMrSBx6EpC4tC0QM08HuIiEQcd4lthOhr8r8Gjvs6AYzndQBDd0OAdl2muUcEAFZQOCBUAAAAkAEAnQEqCAAIAAJAOCWwAnQA8bagAP7mJCNi3/cJa80fLuiC7Rx7Zz9jkZdkDKllt5QuYY6xXpqYT//R5en5iqXWmv8nY/7zkz+jf//q0P5JAAAA",blurWidth:8,blurHeight:8}},79569:function(A,t,e){"use strict";e.r(t),t.default={src:"/_next/static/media/venco.49b356cc.webp",height:50,width:213,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAATWNzd2dYV18ITUFOPUxMUwBWUDggNgAAALABAJ0BKggAAgACQDglmAJ0APRtG6AA/thtoJwR7JtnDsdw9Yyg52SnhH9zfoV9bXLC6AAAAA==",blurWidth:8,blurHeight:2}}}]);