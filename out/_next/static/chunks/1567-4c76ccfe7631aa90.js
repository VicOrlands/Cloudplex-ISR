(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1567],{21932:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(2265),a=i&&"object"==typeof i&&"default"in i?i:{default:i};!function(A){if(!A||"undefined"==typeof window)return;let e=document.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=A,document.head.appendChild(e)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');let l=i.forwardRef(function(A,e){let{style:t={},className:l="",autoFill:r=!1,play:n=!0,pauseOnHover:s=!1,pauseOnClick:o=!1,direction:d="left",speed:u=50,delay:c=0,loop:g=0,gradient:h=!1,gradientColor:b="white",gradientWidth:w=200,onFinish:p,onCycleComplete:f,onMount:Q,children:m}=A,[B,x]=i.useState(0),[U,v]=i.useState(0),[C,D]=i.useState(1),[R,k]=i.useState(!1),W=i.useRef(null),y=e||W,_=i.useRef(null),E=i.useCallback(()=>{if(_.current&&y.current){let A=y.current.getBoundingClientRect(),e=_.current.getBoundingClientRect(),t=A.width,i=e.width;("up"===d||"down"===d)&&(t=A.height,i=e.height),r&&t&&i?D(i<t?Math.ceil(t/i):1):D(1),x(t),v(i)}},[r,y,d]);i.useEffect(()=>{if(R&&(E(),_.current&&y.current)){let A=new ResizeObserver(()=>E());return A.observe(y.current),A.observe(_.current),()=>{A&&A.disconnect()}}},[E,y,R]),i.useEffect(()=>{E()},[E,m]),i.useEffect(()=>{k(!0)},[]),i.useEffect(()=>{"function"==typeof Q&&Q()},[]);let J=i.useMemo(()=>r?U*C/u:U<B?B/u:U/u,[r,B,U,C,u]),S=i.useMemo(()=>Object.assign(Object.assign({},t),{"--pause-on-hover":!n||s?"paused":"running","--pause-on-click":!n||s&&!o||o?"paused":"running","--width":"up"===d||"down"===d?"100vh":"100%","--transform":"up"===d?"rotate(-90deg)":"down"===d?"rotate(90deg)":"none"}),[t,n,s,o,d]),I=i.useMemo(()=>({"--gradient-color":b,"--gradient-width":"number"==typeof w?"".concat(w,"px"):w}),[b,w]),j=i.useMemo(()=>({"--play":n?"running":"paused","--direction":"left"===d?"normal":"reverse","--duration":"".concat(J,"s"),"--delay":"".concat(c,"s"),"--iteration-count":g?"".concat(g):"infinite","--min-width":r?"auto":"100%"}),[n,d,J,c,g,r]),P=i.useMemo(()=>({"--transform":"up"===d?"rotate(90deg)":"down"===d?"rotate(-90deg)":"none"}),[d]),L=i.useCallback(A=>[...Array(Number.isFinite(A)&&A>=0?A:0)].map((A,e)=>a.default.createElement(i.Fragment,{key:e},i.Children.map(m,A=>a.default.createElement("div",{style:P,className:"rfm-child"},A)))),[P,m]);return R?a.default.createElement("div",{ref:y,style:S,className:"rfm-marquee-container "+l},h&&a.default.createElement("div",{style:I,className:"rfm-overlay"}),a.default.createElement("div",{className:"rfm-marquee",style:j,onAnimationIteration:f,onAnimationEnd:p},a.default.createElement("div",{className:"rfm-initial-child-container",ref:_},i.Children.map(m,A=>a.default.createElement("div",{style:P,className:"rfm-child"},A))),L(C-1)),a.default.createElement("div",{className:"rfm-marquee",style:j},L(C))):null});e.default=l},52581:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return U}});var i=t(57437),a=t(44839),l=t(87138),r=t(2265),n=t(43153);t(9051),t(55291);var s=t(87891),o=t.n(s);t(91324);var d=t(16744),u=t(66648),c=t(71164),g=t(78084),h=t(61783),b=t(3382),w=t(62418),p=t(12912),f={src:"/_next/static/media/vector.fd58e001.webp",height:39,width:42,blurDataURL:"data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAk/ihAQGf+Zf5//0LC/v/+4T92wMBkP7QHP2HAAAp/nla/jYAAGj+KJvdBAAAqNECr3wAAAK4cQAAVlA4IEYAAADQAQCdASoIAAcAAkA4JaQAAwF/e6T0AAD++QnzAakTf3/TdyIy3Rz/6p/K4zaCiw9mCxRKE0zJf07qZ/s3OF7Cy0k+IAAA",blurWidth:8,blurHeight:7},Q={src:"/_next/static/media/vector1.13db5ef9.webp",height:39,width:42,blurDataURL:"data:image/webp;base64,UklGRq4AAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAJDbAgAAns8E3p4AAAjokDb/XQAAQ/9Ph/wiAACW+xbc/7cDBeb/qvj/+gsK+v/2bs11AAB4zWsAVlA4IE4AAADwAQCdASoIAAcAAkA4JaQAEPNJ9tPWAAAA/vyksfqlrSEE7b9a1v50uECTAOrf4fLGZvcIl/i5r/fxdUI5fdiGQ258FwDwIqqA/ZAAAAA=",blurWidth:8,blurHeight:7},m=t(87134),B={src:"/_next/static/media/testimonialbg.51494002.webp",height:902,width:2560,blurDataURL:"data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAABQAgCdASoIAAMAAkA4JagCdLoB+AADIQ588gAA/vMnXhc3rj/8Q1OEPpQ/770BvUoAAA==",blurWidth:8,blurHeight:3},x=t(43781),U=()=>{let[A,e]=(0,r.useState)(null),t={nextArrow:(0,i.jsx)(A=>{let{currentSlide:e,slideCount:t,...l}=A;return(0,i.jsx)("button",{...l,type:"button","aria-label":"button",className:(0,a.Z)(o().arrow,o().right),children:(0,i.jsx)(x.PxJ,{})})},{currentSlide:void 0,slideCount:void 0}),prevArrow:(0,i.jsx)(A=>{let{currentSlide:e,slideCount:t,...l}=A;return(0,i.jsx)("button",{type:"button","aria-label":"button",...l,className:(0,a.Z)(o().arrow,o().left),children:(0,i.jsx)(x.RVs,{})})},{currentSlide:void 0,slideCount:void 0}),infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},s=[{id:1,image:h.Z,link:"https://cloudplexo.com/Liveli-Customer-Sucess.mp4",quote:"“I would defintely advise anyone anybody to migrate their cloud services with a partner like Cloudplexo.”",company:null,title:null,logo:p.Z,speaker:"CTO Liveli",caselink:"/liveli-case-study"},{id:2,image:g.Z,link:"https://cloudplexo.com/ICAN_ONLINE_TUTORS_final.mp4 ",company:null,title:"CTO of Liveli",quote:"“We highly recommend Cloudplexo, if  you are having any challenges  with your website and mobile apps”",logo:w.Z,speaker:"Founder & CEO of IcanOnline Tutors",caselink:"/case-study-in-the-edtech-sector"},{id:3,image:b.Z,link:"https://cloudplexo.com/GT_Pension_Immersion+Day_Testimonial.mp4",company:"Guarantee Trust Pension Managers",title:"Cloudplexo Immersion Day",quote:'"I had a great time with the Cloudplexo team, learning more about AWS and the cloud"',logo:m.default,speaker:"Taiwo Owolabi",caselink:"#"}];return(0,i.jsxs)("div",{className:o().reviewContainer,children:[(0,i.jsx)("h2",{children:"With Cloudplexo, the possibilities for customer innovation are endless."}),(0,i.jsx)("div",{className:o().reviewVideo,children:(0,i.jsx)(n.Z,{ref:e,dots:!1,arrows:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,children:s.map((e,t)=>(0,i.jsxs)("div",{className:o().videoWrap,children:[(0,i.jsx)("div",{className:o().imageWrap,children:(0,i.jsx)(d.J5,{playsInline:!0,src:e.link,fluid:!0,poster:e.image.src,children:(0,i.jsx)(d.sT,{position:"center"})})}),(0,i.jsxs)("div",{className:o().contentWrap,children:[(0,i.jsx)(u.default,{loading:"lazy",priority:!1,src:e.logo,className:o().logoImage,alt:"Top Cloud Services providers with CloudPlexo's Innovative Solutions reviews"}),(0,i.jsx)("h6",{children:e.company}),(0,i.jsx)("p",{className:o().quote,children:e.quote}),(0,i.jsx)("p",{className:o().quoteSpeaker,children:e.speaker}),(0,i.jsx)(l.default,{href:e.caselink,children:"Read case study"}),(0,i.jsxs)("div",{className:o().controls,children:[(0,i.jsx)("button",{type:"button","aria-label":"button",onClick:null==A?void 0:A.slickPrev,children:(0,i.jsx)(x.And,{size:25,color:"#3E54AC"})}),(0,i.jsx)("button",{type:"button","aria-label":"button",onClick:null==A?void 0:A.slickNext,children:(0,i.jsx)(x.lzl,{size:25,color:"#3E54AC"})})]})]})]},t))})}),(0,i.jsx)(c.LazyBackgroundImage,{src:B,className:o().wordsReview,children:(0,i.jsx)("div",{className:o().reviewsCarouselContainer,children:(0,i.jsx)(n.Z,{...t,children:[{content:"CloudPlexo is the best in their league, providing top-notch services for our cloud-based enterprise. Their advanced software identifies vulnerabilities, optimizes cost efficiency, and streamlines resources",by:"CTO, PhastPay"},{content:"CloudPlexo provides good and quality assistance to IOT, and they are fast in providing solutions to technical problems.",by:"CEO, IoT"},{content:"CloudPlexo has helped us reduce our cloud cost by up to 30%; and the technical team are very experienced in providing solutions.",by:"CTO, Liveli.App"},{content:"Upskilling your team in developing data solutions or applications in the cloud leverging cloud native tools count on CloudPlexo. CloudPlexo upskilled our team in deploying a serverless data lake solution in the cloud.",by:"Data Manager, Accenture"},{content:"Building data driven applications, choosing the right technology, and following best practices in the cloud. CloudPlexo guided our team on the right direction for our data to cloud and pre-empting pitfalls.",by:"Senior Data Engineer, BP Oil"},{content:"CloudPlexo enables organisations using public clouds to visualize all their cloud spending in one place. The team at cloudPlexo are constantly innovating and we look forward to what they would release next to assist us further with our cloud strategy.",by:"CEO, Geria"},{content:"CloudPlexo is a tool both finance and developers can use. Having all our cloud environments managed in one consolidated, easy-to-use platform has helped us significantly reduce our AWS bill.",by:"Cloud Solutions Manager, Inttix"},{content:"CloudPlexo is a tool both finance and developers can use. Having all our cloud environments managed in one consolidated, easy-to-use platform has helped us significantly reduce our AWS bill.",by:"CEO, Sentaloe"}].map((A,e)=>(0,i.jsxs)("div",{className:o().reviewBox,children:[(0,i.jsx)(u.default,{loading:"lazy",priority:!1,src:f,className:o().quote1,alt:"Top Cloud Services providers with CloudPlexo's Innovative Solutions"}),(0,i.jsx)(u.default,{loading:"lazy",priority:!1,src:Q,className:o().quote2,alt:"Top Cloud Services providers with CloudPlexo's Innovative Solutions"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:o().reviewsPara,children:A.content}),(0,i.jsx)("p",{className:o().reviewsHeader,children:A.by})]})]},e))})})})]})}},90909:function(A,e,t){"use strict";t.r(e);var i=t(57437);t(2265);var a=t(87138),l=t(66648),r=t(43153);t(48105);var n=t(22783),s=t.n(n),o=t(43781),d=t(94211),u=t(44839);let c=A=>{let{className:e,style:t,onClick:a}=A;return(0,i.jsx)(o.lzl,{color:"#3E54AC",onClick:a,className:e,style:{...t,display:"block",background:"#fff",padding:"10px",borderRadius:"50%",height:"40px",width:"40px",boxShadow:"0px 6.39px 11.18px 0px #0000001A",marginRight:"-30px"}})},g=A=>{let{className:e,style:t,onClick:a}=A;return(0,i.jsx)(o.And,{color:"#3E54AC",onClick:a,className:e,style:{...t,display:"block",background:"#fff",padding:"10px",borderRadius:"50%",height:"40px",width:"40px",boxShadow:"0px 6.39px 11.18px 0px #0000001A",marginLeft:"-30px"}})};e.default=()=>{let A={lazyLoad:!0,slidesToShow:3,slidesToScroll:1,infinite:!1,nextArrow:(0,i.jsx)(c,{}),prevArrow:(0,i.jsx)(g,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2,nextArrow:!1,prevArrow:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,nextArrow:!1,prevArrow:!1}}]};return(0,i.jsxs)("section",{className:s().blogCatalog,children:[(0,i.jsx)("h2",{children:"Our Latest News Updates and Posts"}),(0,i.jsx)("div",{className:s().blogpageCarousel,children:(0,i.jsx)(r.Z,{...A,children:d.Z.slice(0,6).map((A,e)=>(0,i.jsxs)("div",{className:(0,u.Z)(s().blogpageParent,"blogpageParent"),children:[(0,i.jsx)("div",{className:s().blogpageCatalogImage,children:(0,i.jsx)(l.default,{loading:"lazy",src:A.image,alt:A.title,height:A.image.height,width:A.image.width})}),(0,i.jsxs)("div",{className:s().content,children:[(0,i.jsx)("h6",{children:A.date?A.date:"20 Jan 2024"}),(0,i.jsx)(a.default,{href:A.link,children:(0,i.jsxs)("div",{className:s().contentTitle,children:[(0,i.jsx)("h5",{children:A.title}),(0,i.jsx)(o.poN,{size:22,color:"#101828"})]})}),(0,i.jsx)("p",{className:s().textDesc,children:A.desc})]})]},e))})}),(0,i.jsx)(a.default,{href:"/blog",className:s().button,children:"View Our Blogs"})]})}},48105:function(){},87891:function(A){A.exports={reviewContainer:"reviews_reviewContainer__cr1ND",reviewVideo:"reviews_reviewVideo___XzJS",videoWrap:"reviews_videoWrap__QD6WV",imageWrap:"reviews_imageWrap__sOcT1",contentWrap:"reviews_contentWrap__Ttc5X",logoImage:"reviews_logoImage__1POPb",quote:"reviews_quote__U2hHK",quoteSpeaker:"reviews_quoteSpeaker__q7PuY",controls:"reviews_controls__DrHAu",wordsReview:"reviews_wordsReview__4kjaB",reviewsCarouselContainer:"reviews_reviewsCarouselContainer__bmtC4",reviewBox:"reviews_reviewBox__Y3o_U",quote1:"reviews_quote1__tuuSG",quote2:"reviews_quote2__lp5Qy",arrow:"reviews_arrow__IZWpN",left:"reviews_left__5hWYT",right:"reviews_right__Rr124",reviewsHeader:"reviews_reviewsHeader__nQTSF",reviewsPara:"reviews_reviewsPara__5EpV3"}},22783:function(A){A.exports={blogCatalog:"grid_blogCatalog__cpcDL",blogpageCarousel:"grid_blogpageCarousel__bU2_k",blogpageParent:"grid_blogpageParent__eSwV3",blogpageCatalogImage:"grid_blogpageCatalogImage__lGplH",content:"grid_content__jyo7s",contentTitle:"grid_contentTitle__NUVMc",textDesc:"grid_textDesc__gpQz0",button:"grid_button__Nahqf",blogpage:"grid_blogpage__Co_dl"}},1651:function(A){A.exports={partnersSection:"styles_partnersSection__8SGxn",imageWrapper:"styles_imageWrapper__YE4y_"}},65890:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Accenture.92d5c76c.webp",height:50,width:187,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAAAAAACsqAACFcHGIfHmBgABWUDggHgAAADABAJ0BKggAAgACQDglpAADcAD++6EeDtfX1aEAAA==",blurWidth:8,blurHeight:2}},21105:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/BR_logo.23d743c6.webp",height:50,width:94,blurDataURL:"data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAJL29rJy9vHEtfH3gLzJN332ueuq54fJ8eL22eKMSVmUAVlA4IDwAAABwAQCdASoIAAQAAkA4JagCdAF1AAD+4Sf/uH/8///z5H+/4Mp/qb/vXV/wZT/U3wA/8pX/xu/3ZcwgAAA=",blurWidth:8,blurHeight:4}},58284:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Crypto-Smart.4af2d693.webp",height:50,width:141,blurDataURL:"data:image/webp;base64,UklGRoAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAi9NiLUZKUkL47cZhlW+CVYHzbDFOTUAIAFZQOCBAAAAA0AEAnQEqCAADAAJAOCWoAnQA9IHQjAAA/pw4ogf/fs35KwJ27xXBKYd/n//RgXfSD8t/6MC7p99e6QY/G0ZgAA==",blurWidth:8,blurHeight:3}},41528:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Dukia.7ef84ef6.webp",height:50,width:152,blurDataURL:"data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAA2eZYGxkWGAD0/1RNUVRWEViCFxgjECMQAFZQOCAyAAAA0AEAnQEqCAADAAJAOCWoAnQBEBQFJcAA/vwMNZicobUnkEEO/+Sn/3lf67uSgjFDEAA=",blurWidth:8,blurHeight:3}},94740:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/GCP.97c74679.webp",height:50,width:319,blurDataURL:"data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAeUU7MkwjLioAVlA4IC4AAACwAQCdASoIAAEAAkA4JQBOgCHfwF2AAP76D9nE38wjDj+4n6OiS9q1BMVahyAA",blurWidth:8,blurHeight:1}},87134:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/GTCO_logo.9136dbb2.webp",height:50,width:259,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAA6yYqKiEnJCnlKistDgAAAABWUDggPgAAADACAJ0BKggAAgACQDgliAJ0RwBkgALNo0egAP7zZXgrEREJqN49U61kOpdX5tWqDRX8P+DVaPM8D/gfIAAA",blurWidth:8,blurHeight:2}},79698:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Ican.8a0fda47.webp",height:50,width:143,blurDataURL:"data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBgAAAABHyAQSPyhb42IiAUCAUKaXmmKIvofiA1WUDggOgAAANABAJ0BKggAAwACQDglqAJ0APSNQ+H0AP7uMSyKzrd8Cn+ArIRppgf/lWCw/+mP9+lkH7/ObvcxAAA=",blurWidth:8,blurHeight:3}},99468:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Kobo-logo.6feed64d.webp",height:50,width:140,blurDataURL:"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAYGVln114Y17////tx////2Blgm+lZmVgAFZQOCBIAAAA0AEAnQEqCAADAAJAOCWwAnQA9JAEG2AA/urGWQG/e07/w4vCDr2hDwNt+Jh/7/7hnf6FwfivyWf7DwLlJ/8m+5OLln8mtIAA",blurWidth:8,blurHeight:3}},68759:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/MaxFiles-logo.353db5af.webp",height:50,width:233,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAASSsoTEE3KC5EZFM2L09NXwBWUDggPgAAALACAJ0BKggAAgACQDglqAJ0twCjAVQBkgAKHdyZIAD+9vxYvGUWf10or4O56w+66//jtoYP/IM7vJEz48AA",blurWidth:8,blurHeight:2}},86414:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/Talent sync.8f081abc.webp",height:50,width:240,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAJh4eGyogDhoqUUNHO0dTOABWUDggHgAAAJABAJ0BKggAAgACQDglpAAC51m2AAD+/ixDxAAAAA==",blurWidth:8,blurHeight:2}},89198:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/asml.465d4537.webp",height:50,width:172,blurDataURL:"data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAZ29jRrWjcCSdomaQt7WWcQBWUDggKgAAAHABAJ0BKggAAgACQDgloAJ0AUAAAP76nQX/cIWUfCj8QhZQV3J+FQAAAA==",blurWidth:8,blurHeight:2}},95116:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/aws.b9f3c21d.webp",height:50,width:82,blurDataURL:"data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAKnVvO05keydTbWWbb1BoTkNXLldNFlw2QRoAAAAAOIICXY2TlIhRIwBWUDggVgAAAHACAJ0BKggABQACQDglsAJ0ugEmA/gAFtq2+AAA/vbsQyP/q+9HUtTL4MY2cdTjDOXRM/+U6PWPxPZ9wfwAw/g3/9yAfwn/1rfFm25OHdh7//uX3GAA",blurWidth:8,blurHeight:5}},37135:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/bitbarter.7701d7bf.webp",height:50,width:199,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAwtguSEMnMSjH2DNUTls6QABWUDggNgAAALABAJ0BKggAAgACQDgloAJ0AQ72o4AA/vb/NDlB7ZcMnzbnHj+4vUnd4re3R7j0z4C1xOAAAA==",blurWidth:8,blurHeight:2}},78411:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/bitsave.a675744a.webp",height:50,width:219,blurDataURL:"data:image/webp;base64,UklGRlAAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAaiw4PC4/MC1pLz8fSTk9MgBWUDggGAAAADABAJ0BKggAAgACQDglpAADcAD++5zAAA==",blurWidth:8,blurHeight:2}},18905:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/bp.ae23c63b.webp",height:50,width:37,blurDataURL:"data:image/webp;base64,UklGRsIAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAAAAAJzo8AAABFjxJAUSjpT0AP+3//+s/kf////+Ijf////+FM+X//+AwACOCgB8AAFZQOCBqAAAAkAIAnQEqBgAIAAJAOCWwAnS6AfgAgEQFpRXEjAAA/sHA5YLPgpDHeOx+P8HIGCt6AM6f+rxa5L8XgaqaasOm3T8I3/n9OSrafPwEfiMycr8MRHAv69f/GH5OyW9E1+nwGGTkX2V98AAAAA==",blurWidth:6,blurHeight:8}},54353:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/cerberus.2e4268a9.webp",height:50,width:71,blurDataURL:"data:image/webp;base64,UklGRoQAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAilpfnArCQABqS4AJaoEAER+UyVXZF8AsExlOHREshgRQGGEXk4VAAAATHpaAQAAAFZQOCAsAAAAcAEAnQEqCAAGAAJAOCWoAnQBdQAA/umxgePs4MYr//s7v/+nd//07v73wAA=",blurWidth:8,blurHeight:6}},69807:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/checkpoint.0119c9d5.webp",height:50,width:103,blurDataURL:"data:image/webp;base64,UklGRp4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAAAM08gAAAAAAC/fQAAAAEBAkYvAgECOVBjUz5ZXS0AVlA4IFYAAADQAQCdASoIAAQAAkA4JbACdAEXfofEXAD++yadqCcqJSou97fFd0nkEYNfowL8q7WZv/x2+suv9P+fv38w3l3Mf/9KHfe/7OTLN/6Y/49W/wb/14AAAA==",blurWidth:8,blurHeight:4}},87212:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/clinton.a95c5956.webp",height:50,width:94,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAADikqLCktBQBuDDEvJyoTAD5lIRkYFjhVACFfTWmBQwkAVlA4ICYAAABwAQCdASoIAAQAAkA4JZACdAFAAAD+9P4V8UPNb2DuTri5si0gAA==",blurWidth:8,blurHeight:4}},1453:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/convexity.39b7d4b6.webp",height:50,width:177,blurDataURL:"data:image/webp;base64,UklGRnYAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAakUkJh0jMR9fSC88Lzo1OgBWUDggPgAAABACAJ0BKggAAgACQDglkAJ0ugADO5h0oOAA/vTF5bUWSf+pPzktmPcwvuNn0UklysYe8vV7aQdUY9s9wAAA",blurWidth:8,blurHeight:2}},12788:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/geria.ee279ad9.webp",height:50,width:110,blurDataURL:"data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSCEAAAAAAAAAABZXAACZhU0vgpE7ALXIsbJamIYAERUXEAkWDQAAVlA4IDIAAADwAQCdASoIAAQAAkA4JZwCsAEW0/dBOAAA/voBm3WlNNfHAL85D+hdxYaa/B3yAAzAAA==",blurWidth:8,blurHeight:4}},12525:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/government.1e37a1ed.webp",height:50,width:95,blurDataURL:"data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSBUAAAABF3D//4iIgCDbpmiTONrdI/ofknYAVlA4IDAAAACwAQCdASoIAAQAAkA4JYwCdAEO+mBgAP78hKzLptdauf3U+F0+7XSl8BE5wIgAAAA=",blurWidth:8,blurHeight:4}},85953:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/ideyFind.e7f75d4d.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAEeAwAAAAAAd5iPAAAAAACLkaMAAAAAADT8UAAAAAA9VltLZAAAAFp+NGzQei8CAleQcTif7FYAAAAAAAAKBQBWUDggTgAAANABAJ0BKggACAACQDglAE6AHpbPkPQAAP6tOLfzupamXpHvdoz884Y53nTr9yei/lXZEnsNtDeEpZcbv613VyMrX4TYvc/xKP2xB/qgAA==",blurWidth:8,blurHeight:8}},2358:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/inttix.fa207946.webp",height:50,width:128,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAUzoianJiIBpYX1hVV1I2eWlnZ4F1eGY2AFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77nMAA",blurWidth:8,blurHeight:3}},4067:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/liveli.efa15448.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDUAAAABYBMAYJK5vrs25OajA8UIQQEaurtXiIgEb2cE5xwFw1wVRZlF237nYdMP67angEtt44SDXwBWUDggSAAAALABAJ0BKggACAACQDglAE6AHpKy6gAA/oe8bv12841vBoR4s06XFzTbD0b4PsWM/HKfC/CP7DMP95lJ3/kRqVldgrz9OQAAAA==",blurWidth:8,blurHeight:8}},6618:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/mediaagility.cee10e15.webp",height:50,width:118,blurDataURL:"data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAIB8LAAAYIykvIj0sCRQiIys3LSQPAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP714MAA",blurWidth:8,blurHeight:3}},3816:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/one.107bf593.webp",height:50,width:228,blurDataURL:"data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAA0zM8JSojIlPTKU49RVFGQgBWUDggPAAAAPABAJ0BKggAAgACQDgloAJ0ARD93BFUAAD+9+HwU8P1fciZOQ//6avv/8m/lW//LL9//k25tC0laNgAAA==",blurWidth:8,blurHeight:2}},20589:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/phastpay.d900160f.webp",height:50,width:135,blurDataURL:"data:image/webp;base64,UklGRpAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAWncMAAAAAACreoFZSGFyR11sCAAAAAAAAFZQOCBQAAAAcAIAnQEqCAADAAJAOCWYAnRMgF8AfoAC3ZmvAAD+q+Bp+tE8gmX4BuBBRHkY14Y2ren0zmMNv2shwxX/SxX2xQKJ9DLYcttGfYLDWfNyIAA=",blurWidth:8,blurHeight:3}},70134:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/qpay.0dfb3489.webp",height:50,width:197,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAlIA5RH5qQjx5gR5VPiRGWwBWUDggNgAAAJABAJ0BKggAAgACQDglkAAC51m2AAD+3jaX/nFPeEdDkf9k+Gb/730GPv/8kx1/jgff/5AAAA==",blurWidth:8,blurHeight:2}},94785:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/silicon_africa.6a9dbf04.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADQAQCdASoIAAgAAkA4JZQCdAEPD3DFJAD++te5RiHp3vQdZhQCO6T3e/MK0eoOAVouhcCOPgVImwAsgAA=",blurWidth:8,blurHeight:8}},37039:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/sophos.e8cb8d19.webp",height:50,width:75,blurDataURL:"data:image/webp;base64,UklGRogAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCEAAAABL6CgbRQ4dS/glogI3CcFQQBJEhtsMsH+PDlE9D/RuyAAVlA4IEAAAADwAgCdASoIAAUAAkA4JZgCdGuAwQD9APf/uwAGBot0QAD+2T6IkiM19CesQA3i/+DJPbFbvjafVG/eFHNAAAAA",blurWidth:8,blurHeight:5}},3967:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/staycon.6965394c.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAADQAQCdASoIAAgAAkA4JZwC7AEPC8IaAAD+/cZwlV4sp0tciwprDAAA",blurWidth:8,blurHeight:8}},85932:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/varscon.7d7046e2.webp",height:50,width:50,blurDataURL:"data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABYBrZtpNDdLGJaHNyqKhBMrSBx6EpC4tC0QM08HuIiEQcd4lthOhr8r8Gjvs6AYzndQBDd0OAdl2muUcEAFZQOCBUAAAAkAEAnQEqCAAIAAJAOCWwAnQA8bagAP7mJCNi3/cJa80fLuiC7Rx7Zz9jkZdkDKllt5QuYY6xXpqYT//R5en5iqXWmv8nY/7zkz+jf//q0P5JAAAA",blurWidth:8,blurHeight:8}},6301:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/venco.49b356cc.webp",height:50,width:213,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAATWNzd2dYV18ITUFOPUxMUwBWUDggNgAAALABAJ0BKggAAgACQDglmAJ0APRtG6AA/thtoJwR7JtnDsdw9Yyg52SnhH9zfoV9bXLC6AAAAA==",blurWidth:8,blurHeight:2}},3382:function(A,e){"use strict";e.Z={src:"/_next/static/media/Immersion day.1a17b41e.webp",height:1521,width:2433,blurDataURL:"data:image/webp;base64,UklGRlYAAABXRUJQVlA4IEoAAAAwAgCdASoIAAUAAkA4JbACdLoB+AACz3Md4AD9w3L/CDzOVe3gdXAdFeD5WcEjsFqb/ziXQNtfA//69LqXft8zZKBCfnpF38f4AA==",blurWidth:8,blurHeight:5}},62418:function(A,e){"use strict";e.Z={src:"/_next/static/media/ican.51e99c2a.webp",height:68,width:192,blurDataURL:"data:image/webp;base64,UklGRnQAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBgAAAABF6AQQADE37nRiIhYIBBIklxy4oj+x1NWUDggNgAAANABAJ0BKggAAwACQDglqAJ0AQ7+A44AAP70CfQPwDZKXEfjCzP/kTpjf+Pf8w7m9L5MducAAA==",blurWidth:8,blurHeight:3}},12912:function(A,e){"use strict";e.Z={src:"/_next/static/media/liveli.2275f81b.webp",height:450,width:450,blurDataURL:"data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDAAAAABYBsAQBKalbFhD/UIH/MKZ7/szhciYgLAuxIPbt7Hvu/buD92Yd5uDYCQyKrm4DdWUDggPgAAALABAJ0BKggACAACQDgllAAC5wq71QAA/vfXAkY+9eccrC/ZS+F27XpGoIhd/HpcUKcYFXwf9X33753v4AAA",blurWidth:8,blurHeight:8}},78084:function(A,e){"use strict";e.Z={src:"/_next/static/media/video1.33c6ef71.webp",height:297,width:526,blurDataURL:"data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSBQAAAABF/D+/4iIQSBAmDSpU0RE/7OYAlZQOCBEAAAA8AEAnQEqCAAFAAJAOCWMAnQBH24t//lAAP7rplHvyueU3sT3LO+AqFN+2Bm9spKS8uUMYTnREfjKGgYELtF2G4wAAAA=",blurWidth:8,blurHeight:5}},61783:function(A,e){"use strict";e.Z={src:"/_next/static/media/video2.74ad0892.webp",height:296,width:526,blurDataURL:"data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSAwAAAABD9D/iAjMf0T/AwJWUDggRgAAANABAJ0BKggABQACQDgljAJ0AQ77M00AAP75Z1GLia1/fvlhI/u4ClYqsRn3X+XX3uVlt//sM/TAxyxqFAFhqy+NGdJcAAA=",blurWidth:8,blurHeight:5}},44839:function(A,e,t){"use strict";e.Z=function(){for(var A,e,t=0,i="",a=arguments.length;t<a;t++)(A=arguments[t])&&(e=function A(e){var t,i,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e){if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(i=A(e[t]))&&(a&&(a+=" "),a+=i)}else for(i in e)e[i]&&(a&&(a+=" "),a+=i)}return a}(A))&&(i&&(i+=" "),i+=e);return i}}}]);