(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5755],{63713:function(e,A,i){Promise.resolve().then(i.t.bind(i,38173,23)),Promise.resolve().then(i.bind(i,95956)),Promise.resolve().then(i.t.bind(i,44193,23)),Promise.resolve().then(i.bind(i,97452)),Promise.resolve().then(i.bind(i,70762)),Promise.resolve().then(i.t.bind(i,52073,23)),Promise.resolve().then(i.bind(i,57337)),Promise.resolve().then(i.bind(i,72894)),Promise.resolve().then(i.bind(i,89928)),Promise.resolve().then(i.bind(i,60054)),Promise.resolve().then(i.bind(i,4588)),Promise.resolve().then(i.bind(i,55730)),Promise.resolve().then(i.bind(i,70403)),Promise.resolve().then(i.bind(i,79437)),Promise.resolve().then(i.bind(i,41420)),Promise.resolve().then(i.bind(i,7045)),Promise.resolve().then(i.bind(i,74442)),Promise.resolve().then(i.bind(i,55998)),Promise.resolve().then(i.bind(i,85847)),Promise.resolve().then(i.bind(i,5750)),Promise.resolve().then(i.bind(i,48517)),Promise.resolve().then(i.bind(i,25865)),Promise.resolve().then(i.bind(i,71434)),Promise.resolve().then(i.bind(i,90062)),Promise.resolve().then(i.bind(i,51332)),Promise.resolve().then(i.bind(i,9120)),Promise.resolve().then(i.bind(i,14441)),Promise.resolve().then(i.bind(i,99697)),Promise.resolve().then(i.bind(i,2565)),Promise.resolve().then(i.bind(i,86016)),Promise.resolve().then(i.bind(i,78932)),Promise.resolve().then(i.bind(i,4948)),Promise.resolve().then(i.bind(i,93159)),Promise.resolve().then(i.bind(i,679)),Promise.resolve().then(i.bind(i,19743)),Promise.resolve().then(i.bind(i,85794)),Promise.resolve().then(i.bind(i,94787)),Promise.resolve().then(i.bind(i,33665)),Promise.resolve().then(i.bind(i,48850)),Promise.resolve().then(i.bind(i,92045)),Promise.resolve().then(i.bind(i,23345)),Promise.resolve().then(i.bind(i,39295)),Promise.resolve().then(i.bind(i,4569)),Promise.resolve().then(i.bind(i,8081)),Promise.resolve().then(i.bind(i,57986)),Promise.resolve().then(i.bind(i,37835)),Promise.resolve().then(i.bind(i,26893)),Promise.resolve().then(i.bind(i,27880)),Promise.resolve().then(i.bind(i,50868)),Promise.resolve().then(i.bind(i,53913)),Promise.resolve().then(i.bind(i,77417)),Promise.resolve().then(i.bind(i,9503)),Promise.resolve().then(i.bind(i,12957)),Promise.resolve().then(i.bind(i,34734)),Promise.resolve().then(i.bind(i,94758)),Promise.resolve().then(i.bind(i,63979)),Promise.resolve().then(i.bind(i,84424)),Promise.resolve().then(i.bind(i,18494)),Promise.resolve().then(i.bind(i,20040)),Promise.resolve().then(i.bind(i,56418)),Promise.resolve().then(i.bind(i,7752)),Promise.resolve().then(i.bind(i,16701)),Promise.resolve().then(i.bind(i,32489)),Promise.resolve().then(i.bind(i,49460)),Promise.resolve().then(i.bind(i,61305)),Promise.resolve().then(i.bind(i,5501)),Promise.resolve().then(i.bind(i,39469)),Promise.resolve().then(i.bind(i,46018)),Promise.resolve().then(i.bind(i,59883)),Promise.resolve().then(i.bind(i,80246)),Promise.resolve().then(i.bind(i,56279)),Promise.resolve().then(i.bind(i,15325)),Promise.resolve().then(i.bind(i,13762)),Promise.resolve().then(i.bind(i,94662)),Promise.resolve().then(i.bind(i,35851)),Promise.resolve().then(i.bind(i,90437)),Promise.resolve().then(i.bind(i,71613)),Promise.resolve().then(i.bind(i,88847)),Promise.resolve().then(i.bind(i,55956)),Promise.resolve().then(i.bind(i,17232)),Promise.resolve().then(i.bind(i,17700)),Promise.resolve().then(i.bind(i,95995)),Promise.resolve().then(i.bind(i,59132)),Promise.resolve().then(i.bind(i,12715)),Promise.resolve().then(i.bind(i,1887)),Promise.resolve().then(i.bind(i,14493)),Promise.resolve().then(i.bind(i,45807)),Promise.resolve().then(i.bind(i,73744)),Promise.resolve().then(i.bind(i,49674))},70762:function(e,A,i){"use strict";var t=i(57437),n=i(38472),s=i(2265),r=i(52073),o=i.n(r),l=i(95956);A.default=function(){let[e,A]=(0,s.useState)({firstName:"",lastName:"",businessEmail:"",phoneNumber:"",companyName:"",jobTitle:""}),{firstName:i,lastName:r,businessEmail:a,phoneNumber:h,companyName:b,jobTitle:d}=e,m=i=>{let{name:t,value:n}=i.target;A({...e,[t]:n})},u=async()=>{i&&r&&a&&b&&""!==d?200===(await n.Z.post("https://9fuof3bpxc.execute-api.eu-west-1.amazonaws.com/Prod/webinarcontactform",{firstname:i,lastname:r,businessemail:a,companyname:b,phonenumber:h,jobtitle:d})).status?(l.Am.success("Form has been submitted",{position:"top-right",hideProgressBar:!0,closeOnClick:!0,transition:l.sm,theme:"colored",autoClose:2e3}),setTimeout(()=>{window.location.reload()},1e3)):l.Am.info("Form not submitted",{position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,theme:"colored",transition:l.sm}):l.Am.error("Please fill out all details",{position:"top-right",hideProgressBar:!0,closeOnClick:!0,autoClose:2e3,theme:"colored",transition:l.sm})};return(0,t.jsxs)("div",{className:o().inputContainer,children:[(0,t.jsx)("input",{name:"firstName",value:i,placeholder:"First Name",onChange:m,type:"text"}),(0,t.jsx)("input",{name:"lastName",value:r,placeholder:"Last Name",onChange:m,type:"text"}),(0,t.jsx)("input",{name:"businessEmail",value:a,placeholder:"Business Email",onChange:m,type:"text"}),(0,t.jsx)("input",{name:"companyName",value:b,placeholder:"Company Name",onChange:m,type:"text"}),(0,t.jsx)("input",{name:"phoneNumber",value:h,placeholder:"Phone Number",onChange:m,type:"text"}),(0,t.jsx)("input",{name:"jobTitle",value:d,placeholder:"Job Title",onChange:m,type:"text"}),(0,t.jsx)("button",{type:"button","aria-label":"view webinar",onClick:u,children:"Submit"})]})}},44193:function(){},52073:function(e){e.exports={placeholderPage:"styles_placeholderPage__O0hMT",placeholder:"styles_placeholder__atW2B",inputContainer:"styles_inputContainer__mLmRj",authorsSection:"styles_authorsSection__XZwQQ",authors:"styles_authors__Mc5PR"}},25865:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/events-video-thumbnail.c7f85d0d.webp",height:542,width:998,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAQAAkA4JQBOgB8xSdqQAPz/uR52V8wy/HkVx4f2nDZ3FmZK00QqbvEznWIp6gAAAA==",blurWidth:8,blurHeight:4}},12715:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Webinar1.126e709f.png",height:374,width:712,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEXg3hnr6u/l5uXks4Pg4jbS0q+JwNbq6rjP2CvoqXDX1Bbr69P08NTy0pjpsnbG2/Lb5Sv+/b7P46fp6kCUknEdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nAXBhwEAIAjAsKoguNf/v5qgamYtRATg9YC4b693kcos4+T8AQ5fAPYEoBGgAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},1887:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Webinar2.56ff8a7e.png",height:374,width:712,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAANlBMVEUfJWciIU4MDV4OEFUjLHcaJX8tLVQhLIMMF24THWEgIF49N1YMD0UcHT42LUZfXIlER3tDQWJ+VkyaAAAACnRSTlP6////+Pj/+Pz4ZsQ0SwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUeJwFwYcBACAIA7AWFBCc/z9rAjNmiiisSBUo5tr17gkMoHn3+A3dANbjFh4DAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},14493:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Webinar3.513a7f34.png",height:374,width:712,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEVUZMQ1WbU3iLRXZ+pfbbgtc7JMXK5ZbslvhvF8kfRsfNVcdOtjeu1IWLREh8lFdcxpeNQna9dDX9Q3n724Ve77AAAAC3RSTlP9/Pz4+/j4+/7++LXrSFgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVHicBcEJAgAQCATARSk29///agYMkvckeGseMhUYtrFeBqp1KaYfFfoBFBYPS6IAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},45807:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Webinar4.59a6fc9f.png",height:328,width:712,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAS1BMVEUXLnFDN3sxXakkS5YxTpMYJGQsMGhHYZ0uEEqMn8dfhrZ5bs8+a7Y1WKBUfrYzQaNLesRhc5swdbZUYrFjPpgrLZA+IWdWVK6lnvYGRN8zAAAACnRSTlP8+f//+fn5/Pz5u5kABQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACxJREFUeJxj4GRhYGVjZ+Rg4OFlZxCW4BZjYGJiFhIQ5xZhYObj4hLkF+UAABRoAVb9kXswAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},73744:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Webinar5.63e2a266.png",height:374,width:571,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAS1BMVEU4NYc3OaNELqhfYbTPzttHMqc+PaonJ2csM5pESqI4K6a8tsNJQ7JCJqPHvOd1VsKfl53Bw9Bqa3Rva7+ThM+lktVdS7GGhZeqorb2FHv4AAAACnRSTlP9/////////fv7+77GDAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUeJwVyLcRACAMBLAHbHLO+0/KoVKwQkc/a4BTauzcCH9S7gfGeE6LCIBkLjc8JI0BlNelZdEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}},49674:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Webinar6.52481947.png",height:374,width:712,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAUVBMVEVMTkIiJihQZlGToXZzcECkelj2+v81S0KctKehmJSbr7Bzh0ynkWrVwpOup4+EWT3BuqbBx72Gk5axub/k6uQSRDugybNkkoDDuG5BLB/X08BpwrawAAAADHRSTlP7+Pj++P74+Pj+/v4R2b3ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nAXBhQEAIAwDsKLD3f8/lAQ1hTj6O0CKyjrh0UrId68JbSQYcfof3gGOmAZrIQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}},90437:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Benjamin.e845c581.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEUPDw8gGxsaFhUoJStpQDAqHho9NkKCTj1KR1+gaVaIX1JdNi1KTSavAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nCXKUQ4AIAgCUAG1rPvft2n88DYw6xDo8hMDrvJBrPKY6Tr+hynCjNwJNbQB6QEUZQCdi+7ypQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},71613:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Ewere.8c5737ce.png",height:221,width:221,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVhSTqJXTR4V0aebDteQi6IVB9ROyymdEFtTzSpeUZ2TzmVXCOCWUNpUEF2V09IPDe4hE3BlmS2fENzU0A+ODaOaVVRQj2daTVIR0ZWVlc1MS9FbKs8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQklEQVR4nAXBBwLAIAgEsFNBwFFn5/8f2gRBNKqYwDQqkQQYlTNFl2EEXxMzukPx/maMWY9jzYzR0S44RnvejbW/H0k6An2Hj6pLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},88847:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Jaylynn.0912220c.png",height:240,width:241,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEV4eHZlZWVdXVxWQzlHSEYnJiQaHBlvb25+fnxpamkKDg1WV1d1UT6UZEwwLyxjPiuveV9+XUlINivAh2hzb2tGOTHYlnaZcF09PTvFqroEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nAXBhQHAIBAEsAPe8fr+kzaBq2ZKKUPhbQ9NgF39LK6AWV9HBWBeppABX8zGXJGjPLcIYcS7hJl+RrcCImhsNXoAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},55956:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Kehinde.b0bd2ed8.png",height:221,width:221,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEX+/v/6+v/GvcBwUUt+dXmtpq3LxMf5+P309PnOyM2LiJLs7PGMZV+aeHOHbWzh4eh+YV+gnqiLfH12ZGbv7/V8am1vcIKWlJ9wVFOZiI5rXmEgJj9JTmUnLklsVAPeAAAACnRSTlP+/////fr9/fv91ss+ygAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUeJwVxkUOwDAMBMANVA6jA6X/f7PqnAYGVh+GCCKnsCsIkCqWxuJPiN0CQqqSTk9g38dwHqCs3VpPxXRX43m/H1UeAvvhz3SuAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},17232:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Mayowa.a11426fe.png",height:240,width:241,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEXh2r+ueFCIlr/r599thcrCv7yDYU7b2tZ1jNB/lNLf3Mm5tq7Wzr10amKXj4CaaEmMcliJoeFle8CPocdkfs9cedBrcXuSp9lwcXZgX2XDxsHZ18Whi3Xb0LJZVkrDsp3g4d6mjneyr6ZpZ12no5lNU7zDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nAXBBQKAIBAEwCUPJO3AwPj/G53BEd8zfI8CfNTZEQHlZuyqBDR7YnkTQFl0WicHxWXQs+nBR6m8tS26QZKwxvyJ4gNjVrAPFQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},17700:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Michael.c6b11918.png",height:240,width:241,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX///9JLiByUkiXdE+GaV1wRCxUOCfMyMV7SzRQQjJ3XTuMWDxeRC/19fjg3NUqHRXCwL5uaGh7c26elIySg3j59/XX08s7LiTFvau6rJWqlnyAbEh0ak7h39q1taKhL8xgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nAXBhQGAMBAAsat+vbjD/mOSAMM4CYAUbc0GzMqFdACLDzmdgHUhmwtoXum7AWvs8Xmhyt5j+eoPSFsCYvo5OHIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},95995:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Simisola.5e1e7b5f.png",height:221,width:222,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAkFBMVEVojRadb2eydF9bPj5ESjWIj3Vzf1RdfA1cVktMXhSpa1K9fWKTq2lvRD8iMCENERR3midjfyzivLDLqaFfeQehsoDHjXeUfmVUag26nXkAISl9VElANjCDlGQLMENpiqtKNUFOebutdmUrXqrlm31DVn2ea1OLcFGYo8UuS2gwQTJTREZriEyopLlSbjejgIXHqs9/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAS0lEQVR4nAXBBQKAIAAEsENBQFTs7m7//zs3MMcSNICPhEUhERywslSNpuRoCsO2XRnD2eZRVV6OW6/ErUsPr77MfmkpzuP59mHqfoehBQGUmUVMAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},59132:function(e,A,i){"use strict";i.r(A),A.default={src:"/_next/static/media/Tosin.76141346.png",height:240,width:240,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX///8ZGRlOTk6EhITa2tqOjo40NDQ/Pz9iYmIrKyufn5+xsbF1dXW+vr5ubm5YWFjj4+Ps7OzT09Pv7+8VszIRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nCXGRw7AIAwEwLWNGzWB//81EpnTAHii4qpdy03r8mfE3ABenbw4GphS1N1hbuOsSGSaFCf6ADCBAYOwPflWAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[9466,5840,9247,5122,6051,7675,8173,231,2,8472,5956,4597,7452,2971,7023,1744],function(){return e(e.s=63713)}),_N_E=e.O()}]);