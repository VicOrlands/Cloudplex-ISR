(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5746],{98043:function(e,t,n){Promise.resolve().then(n.bind(n,11529))},11529:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n(57437),a=n(38472),o=n(2265),l=n(95956),c={src:"/_next/static/media/contactbg.fdcea311.png",height:927,width:560,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAFVBMVEVjd9Zxg9qjreeBkN6Sn+KZpOSyu+vahVxEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nBXKsREAMAgEIHw1+4+cs6HClKKrdjEb+iXUvGgyXDj5B+8ASKoOW8AAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8},i=n(28869),r=n.n(i),m=n(71164),u=()=>{let[e,t]=(0,o.useState)({firstName:"",lastName:"",businessEmail:"",companyname:"",jobtitle:"",phone:"",comments:""}),n=e=>{let{name:n,value:s}=e.target;t(e=>({...e,[n]:s}))},i=async()=>{if(Object.keys(e).every(t=>""!==e[t])){let n={fname:e.firstName,lname:e.lastName,companyname:e.companyname,phone:e.phone,email:e.businessEmail,desc:e.comments};200===(await a.Z.post("https://a6h3k55vh7.execute-api.eu-west-1.amazonaws.com/Stag/contactcust",n)).status?(l.Am.success("Details received successfully",{position:"top-right",hideProgressBar:!0,closeOnClick:!0,transition:l.sm,theme:"colored",autoClose:2e3}),t({firstName:"",lastName:"",businessEmail:"",companyname:"",jobtitle:"",phone:"",comments:""})):l.Am.info("Form not submitted",{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,theme:"colored",transition:l.sm})}else l.Am.error("Please enter all fields",{position:"top-right",hideProgressBar:!0,closeOnClick:!0,autoClose:2e3,theme:"colored",transition:l.sm})};return(0,s.jsxs)("section",{className:r()["contact-page"],children:[(0,s.jsxs)("div",{className:r()["form-section"],children:[(0,s.jsx)("h1",{children:"Let's Talk About your Cloud"}),(0,s.jsxs)("p",{children:["You can reach us anytime via ",(0,s.jsx)("span",{children:"contact@cloudplexo.com"}),(0,s.jsx)("br",{}),"or give us a call @ ",(0,s.jsx)("span",{children:"+234 901 226 2543,"})," ",(0,s.jsx)("span",{children:"+234 707 049 4845"})]}),(0,s.jsxs)("label",{children:["Full Name",(0,s.jsx)("input",{name:"firstName",value:e.firstName,placeholder:"First Name",onChange:n,type:"text"})]}),(0,s.jsxs)("label",{children:["Last Name",(0,s.jsx)("input",{name:"lastName",value:e.lastName,placeholder:"Last Name",onChange:n,type:"text"})]}),(0,s.jsxs)("label",{children:["Work Email",(0,s.jsx)("input",{name:"businessEmail",value:e.businessEmail,placeholder:"you@company.com",onChange:n,type:"text"})]}),(0,s.jsxs)("label",{children:["Phone number",(0,s.jsx)("input",{name:"phone",value:e.phone,onChange:n,placeholder:"+1 (555) 000-0000",type:"text"})]}),(0,s.jsxs)("label",{children:["Job Title",(0,s.jsx)("input",{name:"jobtitle",value:e.jobtitle,placeholder:"Your Job title",onChange:n,type:"text"})]}),(0,s.jsxs)("label",{children:["Company",(0,s.jsx)("input",{name:"companyname",placeholder:"Your Company",onChange:n,value:e.companyname,type:"text"})]}),(0,s.jsxs)("label",{children:["How can we help?",(0,s.jsx)("textarea",{name:"comments",value:e.comments,onChange:n,placeholder:"Tell us a how we can help..."})]}),(0,s.jsx)("button",{type:"submit","aria-label":"submit",onClick:i,children:"Submit"}),(0,s.jsxs)("h3",{children:["Nigeria: ",(0,s.jsx)("span",{children:"+234 901 226 2543, +234 707 049 4845"})]}),(0,s.jsxs)("h3",{children:["United Kingdom: ",(0,s.jsx)("span",{children:"+447776447637"})]}),(0,s.jsxs)("h3",{children:["You can reach us anytime via ",(0,s.jsx)("span",{children:"contact@cloudplexo.com"})]})]}),(0,s.jsx)(m.LazyBackgroundImage,{src:c,className:r()["contact-bg"],children:(0,s.jsx)("div",{className:r()["contact-bg"]})})]})}},71164:function(e,t,n){"use strict";n.r(t),n.d(t,{LazyBackgroundImage:function(){return o}});var s=n(57437),a=n(2265);let o=e=>{let{src:t,className:n,children:o}=e,[l,c]=(0,a.useState)(!1),i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(c(!0),t.disconnect())})},{rootMargin:"100px"});return i.current&&e.observe(i.current),()=>{e&&e.disconnect&&e.disconnect()}},[]),(0,s.jsx)("div",{ref:i,className:n,style:{backgroundImage:l?"url(".concat(t.src,")"):"none"},children:o})}},28869:function(e){e.exports={"contact-page":"styles_contact-page__OozNH","form-section":"styles_form-section__oavd5","contact-bg":"styles_contact-bg__dFblV"}}},function(e){e.O(0,[430,8472,5956,2971,7023,1744],function(){return e(e.s=98043)}),_N_E=e.O()}]);