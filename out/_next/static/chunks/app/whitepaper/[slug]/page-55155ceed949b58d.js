(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8365],{57873:function(e,t,n){Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.bind(n,95956)),Promise.resolve().then(n.bind(n,70762)),Promise.resolve().then(n.t.bind(n,76893,23)),Promise.resolve().then(n.t.bind(n,44193,23)),Promise.resolve().then(n.bind(n,37866)),Promise.resolve().then(n.bind(n,50132))},70762:function(e,t,n){"use strict";var a=n(57437),s=n(38472),o=n(2265),i=n(52073),r=n.n(i),l=n(95956);t.default=function(){let[e,t]=(0,o.useState)({firstName:"",lastName:"",businessEmail:"",phoneNumber:"",companyName:"",jobTitle:""}),{firstName:n,lastName:i,businessEmail:A,phoneNumber:u,companyName:h,jobTitle:m}=e,p=n=>{let{name:a,value:s}=n.target;t({...e,[a]:s})},c=async()=>{n&&i&&A&&h&&""!==m?200===(await s.Z.post("https://9fuof3bpxc.execute-api.eu-west-1.amazonaws.com/Prod/webinarcontactform",{firstname:n,lastname:i,businessemail:A,companyname:h,phonenumber:u,jobtitle:m})).status?(l.Am.success("Form has been submitted",{position:"top-right",hideProgressBar:!0,closeOnClick:!0,transition:l.sm,theme:"colored",autoClose:2e3}),setTimeout(()=>{window.location.reload()},1e3)):l.Am.info("Form not submitted",{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,theme:"colored",transition:l.sm}):l.Am.error("Please fill out all details",{position:"top-right",hideProgressBar:!0,closeOnClick:!0,autoClose:2e3,theme:"colored",transition:l.sm})};return(0,a.jsxs)("div",{className:r().inputContainer,children:[(0,a.jsx)("input",{name:"firstName",value:n,placeholder:"First Name",onChange:p,type:"text"}),(0,a.jsx)("input",{name:"lastName",value:i,placeholder:"Last Name",onChange:p,type:"text"}),(0,a.jsx)("input",{name:"businessEmail",value:A,placeholder:"Business Email",onChange:p,type:"text"}),(0,a.jsx)("input",{name:"companyName",value:h,placeholder:"Company Name",onChange:p,type:"text"}),(0,a.jsx)("input",{name:"phoneNumber",value:u,placeholder:"Phone Number",onChange:p,type:"text"}),(0,a.jsx)("input",{name:"jobTitle",value:m,placeholder:"Job Title",onChange:p,type:"text"}),(0,a.jsx)("button",{type:"button","aria-label":"view webinar",onClick:c,children:"Submit"})]})}},44193:function(){},52073:function(e){e.exports={placeholderPage:"styles_placeholderPage__O0hMT",placeholder:"styles_placeholder__atW2B",inputContainer:"styles_inputContainer__mLmRj",authorsSection:"styles_authorsSection__XZwQQ",authors:"styles_authors__Mc5PR"}},76893:function(e){e.exports={whitepaper:"styles_whitepaper__u2hnj","header-parent":"styles_header-parent__5UbeV","flex-ends":"styles_flex-ends__ndO9Q","text-container":"styles_text-container__VbzQR"}},37866:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/Image.d441f473.png",height:280,width:381,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAM1BMVEUYPIe+xtsbQIhZbrL9/f4nSo9EYKEgQ4oNM4JOY64xT5ppe7ru8PS1uOzo6fTW2u7T2ejzl+FXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nCXGSQ4AIAgDwIJiAdf/v9YY5zSgUWkE1EgZO9FLhNTaUCLaeXF3yJqJz3EBH0QBEqkfYQ4AAAAASUVORK5CYII=",blurWidth:8,blurHeight:6}},50132:function(e,t,n){"use strict";n.r(t),t.default={src:"/_next/static/media/Image1.45d74003.png",height:280,width:381,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAKlBMVEUZPogkRoxVarERNoH///8tTJcHMHyLnMKTo8R7j7hpe7rU3OjQwdVqZJt3pO9yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nDXGyQ0AIAwDsKTpQTn2XxcJCb8MkmAEgWCWe2OaxXAv2E9K2WsfPJIuE9IAyJayXmkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[1471,7119,8173,8472,5956,2971,7023,1744],function(){return e(e.s=57873)}),_N_E=e.O()}]);