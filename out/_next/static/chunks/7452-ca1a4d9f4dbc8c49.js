(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7452],{97452:function(A,e,t){"use strict";t.d(e,{default:function(){return b}});var s=t(57437),i=t(2265),n=t(87138),a=t(66648),l=t(86873),r=t.n(l);t(91324);var c=t(16744),o=t(16356),d=t(71164),g={src:"/_next/static/media/events_description_background_pattern.bcb74c79.png",height:1536,width:1536,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAABlBMVEXV1d/n6+/5JH5eAAAAAnRSTlMBBobrWUwAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAaSURBVHicY2BAAoyMjDAazADRYBacAZdCBwADxgAYwNiK+AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},u=t(19675),h=t(11445),m=t.n(h),x=t(44839);function p(A){let{currentImg:e,selectImg:t,close:n,imgArray:l}=A,[r,c]=(0,i.useState)(0),d=(0,i.useRef)(null),g=l.find((A,t)=>t===e),h=A=>{if(d.current){let e="left"===A?r-165:r+165;d.current.scrollTo({left:e,behavior:"smooth"}),c(e)}};return(0,i.useEffect)(()=>{d.current&&(d.current.scrollTo({left:165*e,behavior:"smooth"}),c(165*e))},[e]),(0,s.jsx)("section",{className:m().modal,children:(0,s.jsxs)("section",{className:m()["modal-content"],children:[(0,s.jsxs)("div",{className:m()["close-div"],onClick:n,children:[(0,s.jsx)(u.v8y,{size:24,color:"#475467"}),(0,s.jsx)("h4",{children:"Close"})]}),(0,s.jsx)("h2",{children:"Unlocking Digital Transformation in Nigeria's Public Sector\xa0"}),(0,s.jsx)("section",{className:m().img,children:(0,s.jsx)(a.default,{src:(null==g?void 0:g.src)||"",alt:"placeholder",width:null==g?void 0:g.width,height:null==g?void 0:g.height})}),(0,s.jsxs)("section",{className:m().footer,children:[(0,s.jsx)(o.sG8,{className:m().icon,onClick:()=>h("left")}),(0,s.jsx)("section",{ref:d,className:l.length<=5?(0,x.Z)(m()["image-scroll-container"],m()["flex-center"]):m()["image-scroll-container"],children:l.map((A,e)=>(0,s.jsx)("div",{onClick:()=>t(e),children:(0,s.jsx)(a.default,{src:A,alt:"placeholder"})},e))}),(0,s.jsx)(o.AeI,{className:(0,x.Z)(m().icon,m()["icon-right"]),onClick:()=>h("right")})]})]})})}var f=t(94798),b=A=>{let{event:e}=A,[t,l]=(0,i.useState)(!1),[u,h]=(0,i.useState)(!1),[m,x]=(0,i.useState)(0),[b,_]=(0,i.useState)({open:!1,id:0});(0,i.useEffect)(()=>{l(!0)},[]),(0,i.useEffect)(()=>{let A=()=>{window.innerWidth<=768&&h(!0)};return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);let U=A=>{_({open:!0,id:A})},v=e.eventImages.find((A,e)=>0===e),E=u?1:6,C=e.eventImages.slice(m*E,m*E+E),w=Math.ceil(e.eventImages.length/E);return t?(0,s.jsxs)("main",{className:r()["events-description"],children:[(0,s.jsxs)("section",{className:r()["top-section"],children:[(0,s.jsx)(d.LazyBackgroundImage,{src:g,className:r().bgImg,children:(0,s.jsx)("div",{className:r()["left-side"],children:(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.eventDescription||e.text}})})}),(0,s.jsxs)("div",{className:r()["right-side"],children:[(0,s.jsx)(a.default,{src:(null==v?void 0:v.src)||"",alt:"Array",height:null==v?void 0:v.height,width:null==v?void 0:v.width}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:e.title}),(0,s.jsx)("h4",{children:e.date}),(0,s.jsx)("p",{children:e.eventLocation})]})]})]}),(0,s.jsxs)("section",{className:r()["about-section"],children:[e.about&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"About"}),(0,s.jsx)("p",{dangerouslySetInnerHTML:{__html:e.about}}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}),e.guestSpeakers&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{children:"Special Guests"}),(0,s.jsx)("p",{children:e.guestSpeakers}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{})]}),(0,s.jsxs)("div",{className:r()["flex-header"],children:[(0,s.jsx)("h2",{children:"Gallery"}),(0,s.jsx)(n.default,{href:"/events",children:(0,s.jsx)("button",{type:"button",children:"View upcoming events"})})]}),e.videoLink&&(0,s.jsx)("div",{className:r()["video-player"],children:(0,s.jsx)(c.J5,{playsInline:!0,aspectRatio:"2.5:1",src:e.videoLink,poster:null==v?void 0:v.src,children:(0,s.jsx)(c.sT,{position:"center"})})}),(0,s.jsx)("div",{className:r()["img-collage"],children:C.map((A,e)=>(0,s.jsx)("div",{onClick:()=>U(e),children:(0,s.jsx)(a.default,{src:A,alt:""})},e))}),(0,s.jsxs)("div",{className:r().pagination,children:[(0,s.jsx)("button",{onClick:()=>{m>0&&x(m-1)},disabled:0===m,"aria-label":"Previous Page",children:(0,s.jsx)(o.KYK,{})}),(0,s.jsx)("span",{children:"Page ".concat(m+1," of ").concat(w)}),(0,s.jsx)("button",{onClick:()=>{m<w-1&&x(m+1)},disabled:m===w-1,"aria-label":"Next Page",children:(0,s.jsx)(o.hdK,{})})]})]}),(0,s.jsx)(f.default,{}),b.open&&(0,s.jsx)(p,{currentImg:b.id,selectImg:U,close:()=>{_({...b,open:!1})},imgArray:e.eventImages})]}):(0,s.jsx)("div",{className:r()["top-section"],children:(0,s.jsx)("p",{children:"Loading..."})})}},94798:function(A,e,t){"use strict";t.r(e);var s=t(57437),i=t(2265),n=t(87138),a=t(66648),l=t(28976),r=t.n(l),c=t(38472),o=t(13027),d=t(65589),g=t(75653),u=t(75389),h=t(31986),m=t(49976),x=t(71653),p=t(15407),f=t(75512),b=t(51126);let _=[o.Z,d.Z,g.Z,u.Z,h.Z,m.Z,x.Z,p.Z,f.Z,b.Z];e.default=function(){let[A,e]=(0,i.useState)(""),t=async()=>{let t=RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,"gm").test(A);""!==A?t?200===(await c.Z.post("https://enr95mz778.execute-api.eu-west-1.amazonaws.com/Prod/newsletter-cloudplexo",{email:A})).status?(alert("Email address submitted successfully"),e("")):alert("Form not submitted"):alert("Invalid format"):alert("Empty input! Fill in your email address")};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("section",{className:r().eventPartners,children:[(0,s.jsx)("h2",{children:"Join 4,000+ companies already growing"}),(0,s.jsx)("div",{className:r().eventPartnersLogos,children:_.map((A,e)=>(0,s.jsx)("div",{className:r().partnersLogo,children:(0,s.jsx)(a.default,{src:A,alt:"Ready to supercharge your startup journey"})},e))})]}),(0,s.jsxs)("footer",{className:r().footer,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Sign up for our newsletter"}),(0,s.jsx)("p",{children:"Be the first to know about releases and industry news and insights."})]}),(0,s.jsxs)("div",{className:r()["input-section"],children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("input",{type:"text",placeholder:"Enter your email",value:A,onChange:A=>{e(A.target.value)}}),(0,s.jsxs)("p",{children:["We care about your data in our"," ",(0,s.jsx)(n.default,{href:"/privacy-policy",children:"privacy policy."})]})]}),(0,s.jsx)("button",{"aria-label":"submit",onClick:t,className:r().button,children:"Subscribe"})]})]})]})}},71164:function(A,e,t){"use strict";t.r(e),t.d(e,{LazyBackgroundImage:function(){return n}});var s=t(57437),i=t(2265);let n=A=>{let{src:e,className:t,children:n}=A,[a,l]=(0,i.useState)(!1),r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let A=new IntersectionObserver((A,e)=>{A.forEach(A=>{A.isIntersecting&&(l(!0),e.disconnect())})},{rootMargin:"100px"});return r.current&&A.observe(r.current),()=>{A&&A.disconnect&&A.disconnect()}},[]),(0,s.jsx)("div",{ref:r,className:t,style:{backgroundImage:a?"url(".concat(e.src,")"):"none"},children:n})}},11445:function(A){A.exports={modal:"modal_modal__5GCdw","modal-content":"modal_modal-content__skpQZ","close-div":"modal_close-div___ruwS",img:"modal_img__Uv4ZQ",footer:"modal_footer__ZgoWb",icon:"modal_icon__Zu1y_","icon-right":"modal_icon-right__RTiuD","image-scroll-container":"modal_image-scroll-container__jwT9o","flex-center":"modal_flex-center__AYuFJ"}},86873:function(A){A.exports={"events-description":"styles_events-description__eE37X",bgImg:"styles_bgImg__ZNmFd","top-section":"styles_top-section__pPpl7","left-side":"styles_left-side__HWFdJ","right-side":"styles_right-side__yaHu1","about-section":"styles_about-section__fNs03","flex-header":"styles_flex-header___CRfl","video-player":"styles_video-player__vMgKE","img-collage":"styles_img-collage__YkolY",pagination:"styles_pagination__s8CDV"}},28976:function(A){A.exports={eventPartners:"styles_eventPartners__ULa_a",footer:"styles_footer__jB3On",eventPartnersLogos:"styles_eventPartnersLogos__9p6KO",partnersLogo:"styles_partnersLogo__ANDlW","input-section":"styles_input-section__TlZ1w"}},13027:function(A,e){"use strict";e.Z={src:"/_next/static/media/MaxFiles-logo.376e6e00.png",height:148,width:213,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAALVBMVEX+/v/+/f/n0vhMaXHSrfH//////P/XtfL+/v/u1v7////59Pz04f7////VsfM61xMAAAAADHRSTlN6+fYA+319+2/94+Kc2DYNAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nCXJyREAIAgEsOVQQIH+y3UYvwlQlFRbgOLmWgKkqeVIaGtiKn45XT7k8gAgLAEuuFt7RQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},65589:function(A,e){"use strict";e.Z={src:"/_next/static/media/borderless.0ff6c949.png",height:68,width:149,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAElBMVEUJLjEAGRYFJCsFIisOKyoEJCvINRsfAAAABnRSTlMIAUYnVG8/Mh9RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNghAIGZgYGZhDBwMTCxMrEwsLEABZmYGAAAANcAC/zv/zFAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},49976:function(A,e){"use strict";e.Z={src:"/_next/static/media/cafe_one.35f5cd0e.png",height:129,width:223,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEVWVlZVVVUAAABMaXFSUlJPT09RUVF/f39PT09FRUVQUFBTU1NkWP0LAAAAC3RSTlMdKgEAFKlfAkALfMxrqR8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAApSURBVHicFcbJEQAwCAMxmwVy9d9vBr2kQHcTaNGvJoGrJ6SkBHFsCz4NkwCHaveI1gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},75389:function(A,e){"use strict";e.Z={src:"/_next/static/media/hub_one.d138a8e5.png",height:131,width:131,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEX///+SbZR3RWrs5vCuk8L////39v3///+gg7mojr6sksGghbn49fn////k2urKu9nz8Pa8p8vDs9O2ire9cqjDm8hbLIZ9VaCzn8ytOnJwRZWYd7MArharAAAAEXRSTlPr/v7l/tX+8f3m2eb+/////rDmJekAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABASURBVHicHcEHEoAgDATAU1CCmkK3/P+fzrCLg8KEOEglqyEO330tCed39fbUG5HspVYynJjouuwAM3MSxhYw/XXwAvtNLTuXAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},31986:function(A,e){"use strict";e.Z={src:"/_next/static/media/ibadan_startup.bbfa4e42.png",height:142,width:405,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAGFBMVEU5oJmBSkxtYV4+lZI/opVMaXHMjT/lpT+DgIpsAAAACHRSTlMRIDgbPgA4KAWM4kgAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAfSURBVHicBcGHAQAwDMMgeTX/f1wg74ANW20ZlpKwDwPPAEMWKgvKAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3}},75653:function(A,e){"use strict";e.Z={src:"/_next/static/media/logo1.2de3875f.png",height:61,width:116,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEVMaXH13dtiFtl6J8HkiIDwycVcFupkGP3/1b7tj4S1SZ6QvP20AAAACXRSTlMAWlN1/XjUuvopvce0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAIUlEQVR4nGNgYGBgZGQAA0YOFiYwg5WTix0ixMzGxMAAAAOBADzK2QdTAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},75512:function(A,e){"use strict";e.Z={src:"/_next/static/media/root.925df0aa.png",height:129,width:140,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAJFBMVEVMaXEAAGQAAGEAAGcAAGYAAGUAAGkAAGMAAGYAAGoAAGYAAGao0y8XAAAADHRSTlMAQghpUXr6JtfB5qU8yC0/AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMUlEQVR4nC3KwREAIAgDwYQACvbfrzPKve6xMEy14786CcPCyU13FypaiySE0HB7+AITpACVyY4A1QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7}},71653:function(A,e){"use strict";e.Z={src:"/_next/static/media/sdc.c96e7e48.png",height:129,width:223,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEV/MsqCM85+MsmANMt/MsqCM81/M8uEMc5/Msp/M8uCM81/MsushxzHAAAADHRSTlNL7HVTr6QsGGKfwkWwndKSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJ0lEQVR4nBXBgQ0AMAgCMEQU3f8HL7Zw4xgs7UrCFGfIACvOQ3cefw1rAJqyTMlfAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},15407:function(A,e){"use strict";e.Z={src:"/_next/static/media/start_innovation_hub.317527da.png",height:129,width:223,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAG1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACUUeIgAAAACXRSTlMBPFkNlRkjboM9naoVAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJUlEQVR4nGNgZoACDiZWRkYQj4WFkZ2JkZGJgYWJlZENJAVTAwAGbgBDVTJz1QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5}},51126:function(A,e){"use strict";e.Z={src:"/_next/static/media/vatebra_logo.c34a7d10.png",height:141,width:300,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAKlBMVEVfPBoDBARHPg6NYRUAAAAFBQUFBQUDAwMFBQUGCQamCRcMAAiqqhy6uhCPgkxfAAAADnRSTlMBRR40Cm5ZTWVUNzsSPxgT/SsAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAkSURBVHicY+BhgAJeZm5ONnZGJgZmLkY2DlZWRgYmkDALCwMACMwAchSzs+IAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}}}]);