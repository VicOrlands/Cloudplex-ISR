(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{9603:function(e,A,t){Promise.resolve().then(t.t.bind(t,65878,23)),Promise.resolve().then(t.t.bind(t,72972,23)),Promise.resolve().then(t.bind(t,81523)),Promise.resolve().then(t.bind(t,70049)),Promise.resolve().then(t.bind(t,51772)),Promise.resolve().then(t.bind(t,90302)),Promise.resolve().then(t.bind(t,17224)),Promise.resolve().then(t.bind(t,73605)),Promise.resolve().then(t.t.bind(t,50916,23)),Promise.resolve().then(t.bind(t,52416)),Promise.resolve().then(t.bind(t,47637)),Promise.resolve().then(t.bind(t,94743)),Promise.resolve().then(t.bind(t,36091)),Promise.resolve().then(t.bind(t,65799)),Promise.resolve().then(t.bind(t,98191)),Promise.resolve().then(t.bind(t,38007)),Promise.resolve().then(t.bind(t,96410)),Promise.resolve().then(t.bind(t,77068)),Promise.resolve().then(t.bind(t,47520)),Promise.resolve().then(t.bind(t,76392)),Promise.resolve().then(t.bind(t,70516)),Promise.resolve().then(t.bind(t,6142)),Promise.resolve().then(t.bind(t,35440)),Promise.resolve().then(t.bind(t,98309)),Promise.resolve().then(t.bind(t,86629)),Promise.resolve().then(t.bind(t,439)),Promise.resolve().then(t.bind(t,28755)),Promise.resolve().then(t.bind(t,44555)),Promise.resolve().then(t.bind(t,30827)),Promise.resolve().then(t.bind(t,71079)),Promise.resolve().then(t.bind(t,53359)),Promise.resolve().then(t.bind(t,4765)),Promise.resolve().then(t.bind(t,64312)),Promise.resolve().then(t.bind(t,94081)),Promise.resolve().then(t.bind(t,51377)),Promise.resolve().then(t.bind(t,56286)),Promise.resolve().then(t.bind(t,52557)),Promise.resolve().then(t.bind(t,16331)),Promise.resolve().then(t.bind(t,69430)),Promise.resolve().then(t.bind(t,15674)),Promise.resolve().then(t.bind(t,77904)),Promise.resolve().then(t.bind(t,39348)),Promise.resolve().then(t.bind(t,83807)),Promise.resolve().then(t.bind(t,42504)),Promise.resolve().then(t.bind(t,8893)),Promise.resolve().then(t.bind(t,67794)),Promise.resolve().then(t.bind(t,41801)),Promise.resolve().then(t.bind(t,89377)),Promise.resolve().then(t.bind(t,35145)),Promise.resolve().then(t.bind(t,69051)),Promise.resolve().then(t.bind(t,43048)),Promise.resolve().then(t.bind(t,52731)),Promise.resolve().then(t.bind(t,27930)),Promise.resolve().then(t.bind(t,57837)),Promise.resolve().then(t.bind(t,58169)),Promise.resolve().then(t.bind(t,73950)),Promise.resolve().then(t.bind(t,11642)),Promise.resolve().then(t.bind(t,21959)),Promise.resolve().then(t.bind(t,25697)),Promise.resolve().then(t.bind(t,12796)),Promise.resolve().then(t.bind(t,58063)),Promise.resolve().then(t.bind(t,90407)),Promise.resolve().then(t.bind(t,11153)),Promise.resolve().then(t.bind(t,81923)),Promise.resolve().then(t.bind(t,8342)),Promise.resolve().then(t.bind(t,93819)),Promise.resolve().then(t.bind(t,95921)),Promise.resolve().then(t.bind(t,44471)),Promise.resolve().then(t.bind(t,79569)),Promise.resolve().then(t.bind(t,88528)),Promise.resolve().then(t.t.bind(t,2047,23))},55775:function(e,A,t){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"default",{enumerable:!0,get:function(){return s}});let i=t(47043);t(57437),t(2265);let a=i._(t(15602));function s(e,A){var t;let i={loading:e=>{let{error:A,isLoading:t,pastDelay:i}=e;return null}};"function"==typeof e&&(i.loader=e);let s={...i,...A};return(0,a.default)({...s,modules:null==(t=s.loadableGenerated)?void 0:t.modules})}("function"==typeof A.default||"object"==typeof A.default&&null!==A.default)&&void 0===A.default.__esModule&&(Object.defineProperty(A.default,"__esModule",{value:!0}),Object.assign(A.default,A),e.exports=A.default)},81523:function(e,A,t){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let i=t(18993);function a(e){let{reason:A,children:t}=e;if("undefined"==typeof window)throw new i.BailoutToCSRError(A);return t}},15602:function(e,A,t){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"default",{enumerable:!0,get:function(){return o}});let i=t(57437),a=t(2265),s=t(81523),r=t(70049);function n(e){return{default:e&&"default"in e?e.default:e}}let l={loader:()=>Promise.resolve(n(()=>null)),loading:null,ssr:!0},o=function(e){let A={...l,...e},t=(0,a.lazy)(()=>A.loader().then(n)),o=A.loading;function d(e){let n=o?(0,i.jsx)(o,{isLoading:!0,pastDelay:!0,error:null}):null,l=A.ssr?(0,i.jsxs)(i.Fragment,{children:["undefined"==typeof window?(0,i.jsx)(r.PreloadCss,{moduleIds:A.modules}):null,(0,i.jsx)(t,{...e})]}):(0,i.jsx)(s.BailoutToCSR,{reason:"next/dynamic",children:(0,i.jsx)(t,{...e})});return(0,i.jsx)(a.Suspense,{fallback:n,children:l})}return d.displayName="LoadableComponent",d}},70049:function(e,A,t){"use strict";Object.defineProperty(A,"__esModule",{value:!0}),Object.defineProperty(A,"PreloadCss",{enumerable:!0,get:function(){return s}});let i=t(57437),a=t(20544);function s(e){let{moduleIds:A}=e;if("undefined"!=typeof window)return null;let t=(0,a.getExpectedRequestStore)("next/dynamic css"),s=[];if(t.reactLoadableManifest&&A){let e=t.reactLoadableManifest;for(let t of A){if(!e[t])continue;let A=e[t].files.filter(e=>e.endsWith(".css"));s.push(...A)}}return 0===s.length?null:(0,i.jsx)(i.Fragment,{children:s.map(e=>(0,i.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:t.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},73605:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return c}});var i=t(57437),a=t(61994),s=t(2265),r=t(50916),n=t.n(r),l=t(11140),o=t(33145);let d=[{name:"Wendu - Cloud Security and Cost Management Platform",desc:"Insights for both developers and management to run a secured, efficient, lean, cost-optimized and reliable cloud.",image:{src:"/_next/static/media/wendu.93024b6b.webp",height:686,width:800,blurDataURL:"data:image/webp;base64,UklGRrAAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAABoJCw8ACgAAfSl4Ta96AABEnv955NcAALb////8vAAN+f/////5DQLE/////8QCAAVWi4tWBQAAVlA4IFAAAADwAQCdASoIAAcAAkA4JZwC7AEYHsBewAAA/tJtfuLug7ftITFpf64hfI+zhNuuqbPWXi67/fwS9rv+Fv9+WmDwP+p1fdDbfm/iCc3XAmgAAA==",blurWidth:8,blurHeight:7},link:"https://wendu.io",width:199},{name:"AI Scan",desc:"360 Degree Approach Where We Analyse How Your Data Can Be Recycled To Be Beneficial To Your Business.",image:{src:"/_next/static/media/aiscan.247053cb.webp",height:686,width:801,blurDataURL:"data:image/webp;base64,UklGRrQAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDkAAAAAAAMAACAGAAAAJzqs/iIAAABP9f//JwAAAIf////qTAAK9v/////2CQHD/////8IBAAZYjo5YBQAAVlA4IFQAAADwAQCdASoIAAcAAkA4JZwADrIylSIj/AAA/q3G7h5Vv2KlvW+TeDvevIbp89uh7lyuNu7vgZf85Zs9suJ+Nj9Flx988LVf/DrVOq03QGv2zR4oAAA=",blurWidth:8,blurHeight:7},link:"/aws-partnership/data-analytics",width:200},{name:"AWS Managed Service",desc:"Experience unparalleled scalability and reliability with AWS Managed service, a cloud service designed to simplify your cloud infrastructure management.",image:{src:"/_next/static/media/managedcloud.dea88807.webp",height:589,width:801,blurDataURL:"data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAAAAAAAAYS8DQl9fbEpss2bCzryUcKE+Qbz7/8vNbQAFRIbixlcNAAAAAAAAAAAAAFZQOCBCAAAAEAIAnQEqCAAGAAJAOCWcAA+AEPfur7NgAAD+2G40ClgqqvC7hbLFV7LBmy9KYVXvrWNMHgtUoaTfiZ3jaYTuVogA",blurWidth:8,blurHeight:6},link:"/aws-managed-cloud",width:233},{name:"Backup & Restore",desc:"Prevent data loss from anywhere with CloudPlexo Cloud-Native Backup and Restore product.",image:{src:"/_next/static/media/backup.e469d492.webp",height:601,width:800,blurDataURL:"data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSBMAAAABD6AQQADE37nRiIgYzH9E/yMAAFZQOCBAAAAAMAIAnQEqCAAGAAJAOCWcAsQvABcfb2OE6QAA/vz+KFsfWo58M9orSpV3pE4w1e+uGa/jn5UWsM0iB1xr8kAAAA==",blurWidth:8,blurHeight:6},link:"/backup-and-restore",width:228},{name:"Cloud Migration Factory",desc:"Automates the coordination of large migrations to Amazon Web Services, including multiple servers, by automating the use of several tools",image:{src:"/_next/static/media/cloudmigration.cadff837.webp",height:171,width:119,blurDataURL:"data:image/webp;base64,UklGRqoAAABXRUJQVlA4WAoAAAAQAAAABQAABwAAQUxQSDEAAAAAFNT//8oIk/////9yV/f//O4/AAE2KAAAAGaKg3AAAOj///wAAOj///wAF5KVlZUgAFZQOCBSAAAA8AEAnQEqBgAIAAJAOCWYAnQBDukvJ6MAAP7eLV9j/tQvqrWh/Lb/6er69dwO1Fbw2x8ru6FpBVg6Vjsm9+CpnO1Se5NyCcpkq7FvQ9bBCJYAAA==",blurWidth:6,blurHeight:8},link:"/aws-partnership/cloud-migration",width:119},{name:"AWS Maturity Service",desc:"A transformative solution designed to propel your cloud operations towards enhanced efficiency, optimal performance, and strategic growth. ",image:{src:"/_next/static/media/maturity.26fee4d8.webp",height:171,width:167,blurDataURL:"data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAAP1sDAAAAFrj//9Q0AAAb6///+0UAACXt///5VAIAKvb///1fBAADWtPmdQ8DAAABCg8CAgMAAAMEAAAAAABWUDggVAAAALABAJ0BKggACAACQDgloAJ0APN3uIAA/ubnHnX8isdv8svMxEs54Ec4jQA6v1QeQjTs9ntA5foBfMg0Vh3/k4mr+2DjWz2Dop/rrOdhbBHJWgAAAA==",blurWidth:8,blurHeight:8},link:"/aws-maturity-service",width:167},{name:"Security Compliance",desc:"Ensure the highest level of security with AWS Config, empowering you to proactively assess, audit, and monitor your infrastructure for compliance with industry standards, mitigating risks and ensuring a robust security posture.",image:{src:"/_next/static/media/security.0c5dc8ec.webp",height:171,width:170,blurDataURL:"data:image/webp;base64,UklGRrgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDgAAAABYFNbW5tHW5HBjgNWLJDsOciMh6zdQNt78RAREwBYBUAxb3WAdD4z5J/qFcHv59kYoGwnx6cGAFZQOCBaAAAAMAIAnQEqCAAIAAJAOCWYAnQGKAdmT/w5zYAA/rHzowzUbsh8NH8dGBa/eB50d6T/2Xg6V860KxyxgrjX+mJg+/f1Nf9WDw8a+c88BFVFBUA/GugpTUKAwEgA",blurWidth:8,blurHeight:8},link:"/aws-partnership/security-compliance",width:170},{name:"Microsoft on AWS",desc:"Seamlessly run Microsoft workloads on AWS, leveraging the power of cloud computing to achieve unmatched scalability, flexibility, and reliability. Uncover the full potential of your Microsoft applications with AWS's robust and tailored infrastructure support.",image:{src:"/_next/static/media/microsoft.e5d952ae.webp",height:171,width:193,blurDataURL:"data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABgAAQUxQSDcAAAABYFpbe5OXIqMSxxB9teqQdQcco+BZBCy4DjNExATw06WV9yiXtX/k214DZjqO2YLyhzHRAEIAAFZQOCBeAAAAcAIAnQEqCAAHAAJAOCWwAnRHAH6AXyaCskJLgAD+zsXrvBhginKov6CUIUU70utz0uh+pHem/7i3y+TtQdOph/+TkzRv814X/pB6HvuPLFH4WqMy+Mo//no+GwAAAA==",blurWidth:8,blurHeight:7},link:"/microsoft-on-aws",width:193},{name:"Cloud Resource Management",desc:"Streamline operational tasks and enhance efficiency with AWS Systems Manager, a comprehensive solution that simplifies resource and application management, enabling you to automate tasks, deploy software, and gain valuable insights for optimal performance.",image:{src:"/_next/static/media/cloud.98785065.webp",height:171,width:160,blurDataURL:"data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSDMAAAABYBPbVpy/GsABmrYOE/RrjSQMYCMyUv0qEwsRkfAn+9wCEl6zKrrsyarkm2MhQBZG+AAAVlA4IGYAAAAQAgCdASoHAAgAAkA4JbACdLoAAwxNUZasAPz0e0hYUJkfPRdyeYtoymUAJhjUB9uULp/rDXvzCQnMIb/+CcOf46yedsLKBf+bNNUtlffx3/tgn9W9R4bNfM+f/5UNx0r9f/qAAAA=",blurWidth:7,blurHeight:8},link:"/aws-partnership/cloud-resource-managament",width:160}],h=[{name:"Data Analytics",desc:"With real-time data processing and clear visualizations, CloudPlexo enables you to make smart decisions that drive growth.",image:{src:"/_next/static/media/data-analytics.c1df403d.webp",height:171,width:171,blurDataURL:"data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAAH/F1BwAAAABX///aTAAAAJD////TABCI8f///5ww5P//////ZBFv3v///7cSBhcPe81QBwMAAAAHBwUAAABWUDggUgAAALABAJ0BKggACAACQDgloAJ0APN7uFgA/hjkmNkfjCsz7BTE4Kn9X4FNyvXz4Y9R80oGcomjHg8OispeFqMF/P92ycovsoXYPJAQt5STbSIwAAA=",blurWidth:8,blurHeight:8},link:"/data-analytics"},{name:"Database as a Service",desc:"We provide tailored architecture design, migration, and optimization services to ensure robust, secure, and cost-effective database operations for your business.",image:{src:"/_next/static/media/database-as-a-service.feebff51.webp",height:171,width:182,blurDataURL:"data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAAckEYAAAAPhvX//7oxAN////////1C8///////whr////////TI9b///////g9Bm/r//6mIQAAAA96NAAAAABWUDggUgAAADACAJ0BKggACAACQDglsAJ0bX8Cf+shsHgAAP7ci53IaYj3hC2NLG7uISG2dQeiv5e0K5wKuICHQC7owbv3g/vNwVfPoRLN+Wo3yuqQmP8KAAA=",blurWidth:8,blurHeight:8},link:"/database-as-a-service"},{name:"Omni-Channel Contact Center",desc:"Cloud-based contact-centre service that makes it easy for any business to deliver better customer service at lower cost. ",image:{src:"/_next/static/media/omni-channel.1938eb21.webp",height:171,width:139,blurDataURL:"data:image/webp;base64,UklGRqoAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSDkAAAAAAAAWHSkgAAAAQY1WDgAARur/0wUAAD/p/70EAAAneoJBDwAc+s6X/L0ALP/////SAA9YWFhYSAAAVlA4IEoAAADQAQCdASoHAAgAAkA4JZgCdAD0sD9uwAD+/HJIe28LwQf/gbsUXlFzwC488C43gMr+wm2GBNxO8dk8ZImSVj7VPT0ORCSZ8gAAAA==",blurWidth:7,blurHeight:8},link:"/technologies"},{name:"Cloud Training",desc:"Our highly experienced Professionals are recognised in the industry to have the highest-rated technical skills by employers. ",image:{src:"/_next/static/media/cloud training.bbd49bf7.webp",height:171,width:257,blurDataURL:"data:image/webp;base64,UklGRooAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAAAAAAAAAAAAAWq/NtK9KAACF/////24AAIX/////bgAARnV1dXVCAABWUDggOgAAAJABAJ0BKggABQACQDglnAJ0AIGFgADieR5e9waTFJ/M2mmH/VmXDO3wHs+EtmVfPQ4BmIa9G4IAAAA=",blurWidth:8,blurHeight:5},link:"/training"},{name:"DevOps as a Service",desc:"Streamline your software development lifecycle with CloudPlexo's DevOps solutions on the cloud.",image:{src:"/_next/static/media/devops.c679905a.webp",height:142,width:131,blurDataURL:"data:image/webp;base64,UklGRsQAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSDkAAAAAAAAHOxQAAApeYX0mAgBK/+P/vG8bmYS6/v+mOH7P///+vAJ2m/n/65YcazVbZKn9lEglARMZNwIAVlA4IGQAAADwAQCdASoHAAgAAkA4JagCdAEWUNV/OAAA+Xcm21NuP2JbtI/n89Bd5gwAaLsE/MDIEvlqLJt8MO7iNLl5eft6I/YVvCrrYQ3KL2CAPAxhjlmV6IOivIhRmT0WJtDopCW5AAAA",blurWidth:7,blurHeight:8},link:"/devops-as-a-service"}];function c(){let[e,A]=(0,s.useState)(!0),[t,r]=(0,s.useState)(6);return(0,i.jsx)("div",{className:n().serviceContainer,id:"product-services",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h5",{children:"Solutions"}),(0,i.jsx)("h2",{children:"Achieve Peak Efficiency with Our Innovative Products and Services"}),(0,i.jsx)("div",{className:n().servicesTabNavigation,children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:(0,a.Z)(n().tabsTab,{[n().tabsTabActive]:e,[n().slideLeft]:e}),onClick:()=>A(!0),children:"Solutions & Offerings"}),(0,i.jsx)("li",{className:(0,a.Z)(n().tabsTab,{[n().tabsTabActive]:!e,[n().slideRight]:!e}),onClick:()=>A(!1),children:"Professional Services"})]})}),e?(0,i.jsx)("div",{className:n().tabContent,children:d.slice(0,t).map(e=>(0,i.jsxs)("div",{children:[(0,i.jsx)(o.default,{loading:"lazy",priority:!1,src:e.image,alt:"Achieve Peak Efficiency with Our Innovative Products and Services",height:171,width:e.width}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h3",{children:e.name}),(0,i.jsx)("p",{children:e.desc}),(0,i.jsxs)("a",{href:e.link,children:["Explore ",(0,i.jsx)(l.lzl,{id:n().icon})]})]})]},e.name))}):(0,i.jsx)("div",{className:n().tabContent,children:h.map(e=>(0,i.jsxs)("div",{children:[(0,i.jsx)(o.default,{loading:"lazy",priority:!1,src:e.image,height:171,width:e.image.width,alt:"Achieve Peak Efficiency with Our Innovative Products and Services"}),(0,i.jsxs)("section",{children:[(0,i.jsx)("h3",{children:e.name}),(0,i.jsx)("p",{children:e.desc}),(0,i.jsxs)("a",{href:e.link,children:["Explore ",(0,i.jsx)(l.lzl,{id:"icon"})]})]})]},e.name))}),e&&(0,i.jsx)("div",{className:n().btnViewMore,children:(0,i.jsx)("button",{type:"button",onClick:()=>{r(6===t?d.length:6)},"aria-label":6===t?"View More":"View less",children:6===t?"View More":"View less"})})]})})}},90302:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return ee}});var i=t(57437),a=t(2265),s=t(27648),r=t(33145),n=t(55775),l=t.n(n),o=t(23695),d=t.n(o),h={src:"/_next/static/media/awsLogo.87959426.webp",height:40,width:128,blurDataURL:"data:image/webp;base64,UklGRqAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAABAMAAIZHhtMZ2RaGTRCSQwNBgwGESscAFZQOCBgAAAA8AEAnQEqCAADAAJAOCWwAnQwSUGQfj3wAP72kj8RZQDnuX+2qX4qbNxm3Zht9/0a1+a/T5/J//k+/0j+jkxUfT/+Du/fxJ/s9OuTVxTe8f+4q5//JyZZtz72L47+lgAA",blurWidth:8,blurHeight:3},c=t(11143),u=t(9864),g=t(15776),b=t(36052),m=t(24536),w=t(68784),f=t(73861),p=t(48539),Q=t(76694),v=t(31654),B=t(95573),x={src:"/_next/static/media/CloudPlexo logo.38694aef.webp",height:24,width:101,blurDataURL:"data:image/webp;base64,UklGRmQAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAKhQvPGVMHAFNeWyOY4KQgABWUDggLAAAANABAJ0BKggAAgACQDgljAJ0APSqOvAAAP73hffSZ99LzescWygT1uIwzrAA",blurWidth:8,blurHeight:2},C=t(61283),U=t(91951),D=t(71945),R=t(17507),k=t(99750),W=t(92256),y=t(35799),S=t(52394),P=t(76774),E=t(65440),j=t(21696),_=t(93198),I=t(29096),J=t(87781),H=t(44504),L=t(58207),N=t(7924),G=t(44946),V=t(21133),T=t(42269),X=t(8125),M=t(71298),O=t(10153),z=t(6869),Y=t(85845),F=t(45495);let q=[{img:{src:"/_next/static/media/Digital-Journal.eda1ecad.webp",height:40,width:307,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAAAAQUxQSAkAAAAAM0tHN8LCvbwAVlA4ID4AAAAwAgCdASoIAAEAAkA4JaACdEcAZIACh3cmSAD+9c/m43UxqqcQAWVGO1X++b2J/9jf9T/2vvYn/2N8XAAAAA==",blurWidth:8,blurHeight:1},imgHeader:!0,imgText:'We were thrilled to co-host & sponsor the BusinessDay Economic Club\'s "C-Suite Executives Roundtable Dinner." It was an evening of insightful discussions and valuable connections.',text:"We were thrilled to co-host & sponsor the BusinessDay Economic Club's \"C-Suite Executives Roundtable Dinner.\" It was an evening of insightful discussions and valuable connections. <br/><br/> Thank you to all who attended and made it a success! <br/><br/>We're excited to see the future collaborations and innovations sparked by this event!",images:[u.default,c.default,g.default,b.default,m.default,w.default,f.default,p.default,Q.default,v.default,B.default],width:307},{img:x,imgText:"Nairobi Founders Brunch",imgHeader:!1,text:'Join us for Nairobi Founders\' Brunch Next Monday!\uD83E\uDD42 <a href="https://www.linkedin.com/company/cloudplexo/mycompany/" target="blank">CloudPlexo</a> and <a href="https://www.linkedin.com/company/amazon-web-services/" target="blank">Amazon Web Services (AWS)</a> Startups will be bringing the amazing founders and leaders together to connect, learn, and build with fellow innovators on',images:[H.default,L.default,N.default,G.default,V.default],width:307},{img:x,imgHeader:!1,imgText:"Unlocking Digital Transformation in Nigeria's Public Sector",text:"Thank you to all of our speakers and panelists for their candid contributions and honest discussions. Thank you to our attendees for bringing your energy and ideas. Thank you to our partners for making this possible, and especially to our team for flawless execution.<br/><br/>Together, we're driving Nigeria's digital future!",images:[T.default,X.default,{src:"/_next/static/media/3.e178a0e0.webp",height:601,width:900,blurDataURL:"data:image/webp;base64,UklGRoYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSB8AAAABHyAgIYzw/6nciIjghEI2kiCqfVkW8TAPIqL/cR0+AFZQOCBAAAAA0AEAnQEqCAAFAAJAOCWcAsOxHwfXhXAA/ubw7M+r//XjJUNz4O5l9T/7memD5bQ37DYQ5DwPHl9sH3rw0yAkAA==",blurWidth:8,blurHeight:5},M.default,O.default,z.default,Y.default,F.default],width:307},{img:{src:"/_next/static/media/logo.f98d89f3.webp",height:40,width:175,blurDataURL:"data:image/webp;base64,UklGRmoAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAGhoP9/f39+81MS37+/v78gBWUDggMgAAALABAJ0BKggAAgACQDgllAJ0APSBtKAA/k/3/o+8LPMs4LD5nTRUXTizHZZLps5T7sAA",blurWidth:8,blurHeight:2},imgHeader:!0,imgText:"The Fintechfusion Summit Was an incredible day of insights, innovation, unparalled networking and limitless opportunities.",text:"From startups to industry giants, the Fintechfusion Summit had it all. It was a knowledge feast, an incredible day of insights, innovation, unparalled networking and limitless opportunities at the Fintech Summit 2023!",images:[k.default,{src:"/_next/static/media/DSC_0158.5669c3b1.webp",height:1346,width:1950,blurDataURL:"data:image/webp;base64,UklGRkgAAABXRUJQVlA4IDwAAADwAQCdASoIAAYAAkA4JYwCdAEfbj4m0HwA/vGoW8+tfwU7tlfvmDoeEb2h4w/9z6Y1/jPP4d1OS4gMAAA=",blurWidth:8,blurHeight:6},{src:"/_next/static/media/DSC_0171.3e7fa68a.webp",height:1424,width:2144,blurDataURL:"data:image/webp;base64,UklGRkAAAABXRUJQVlA4IDQAAADQAQCdASoIAAUAAkA4JZQAAxU/pTv1wAD+T3hF2o37or8XpQiXKTHlWUAPxK8wbd2GmAAA",blurWidth:8,blurHeight:5},{src:"/_next/static/media/DSC_0196.adf2f523.webp",height:1424,width:2144,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAUAAkA4JZQCdADze7mIAP70xavxk4lSStrMuh0lA0X+BDQktO3sDIYG6d5NAAA=",blurWidth:8,blurHeight:5},{src:"/_next/static/media/DSC_0212.ba27f6e3.webp",height:1424,width:2144,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAACwAQCdASoIAAUAAkA4JYwCdADzes/gAP70v4PVqbRk8hEFrwHYgOEOpZYY3GWSLZ2ywYgxj2qAAA==",blurWidth:8,blurHeight:5}],width:128},{img:h,imgText:"",imgHeader:!1,text:'Just concluded an enriching AWS Immersion Day with the GT Pension Manager\'s team, and immense appreciation to the AWS team <a href="https://www.linkedin.com/in/kayode-ranger/">Kayode A. Akomolafe (Tech Ranger)</a>, <a href="https://www.linkedin.com/in/ousintkd/">Ousseynou khadim BEYE</a>, <a href="https://www.linkedin.com/in/onaopemipo-osunyomi-45a73244/">Onaopemipo Osunyomi</a>, and <a href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> for their invaluable insights and guidance!',images:[C.default,U.default,D.default,R.default],width:128},{img:h,imgText:"",imgHeader:!1,text:'Heartfelt appreciation to the incredible members of the AWS team <a href="https://www.linkedin.com/in/eberenkoro/">Ebere Nkoro</a> and <a href="https://www.linkedin.com/in/osaretin-j-63692093/">Osaretin J</a> for their unparalleled support and seamless organisation, which contributed immensely to the success of this event.',images:[W.default,y.default],width:128},{img:h,imgText:"",imgHeader:!1,text:'Kigali Mixer Event. Watch a recap of the event <a href="https://cloudplexo.com/Kigali-mixer.mp4">here</a>',images:[S.default,P.default,E.default,j.default,_.default,I.default,J.default],width:128}];var Z=t(22744),K=t(32348);let $=l()(()=>Promise.resolve().then(t.bind(t,6406)),{loadableGenerated:{webpack:()=>[6406]},ssr:!1});var ee=function(){let[e,A]=(0,a.useState)(0),[t,n]=(0,a.useState)(0),l=q[e],o=K.Q.filter(e=>"Register"===e.linkText);return(0,i.jsx)("div",{className:d().events,children:(0,i.jsxs)("div",{className:d()["events-grid"],children:[(0,i.jsxs)("section",{className:d()["upcoming-events"],children:[(0,i.jsx)("h2",{id:d()["header-h2"],children:"Upcoming Events"}),o.slice(0,2).map(e=>(0,i.jsxs)("div",{className:d()["upcoming-events-grid"],children:[(0,i.jsx)(r.default,{loading:"lazy",src:e.img,alt:e.title,priority:!1,placeholder:"blur"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h4",{children:e.date}),(0,i.jsx)("h3",{children:e.title}),(0,i.jsx)("p",{children:e.text}),(0,i.jsx)(s.default,{href:e.link,target:"blank",children:"Register"})]})]},e.title))]}),(0,i.jsxs)("section",{className:d()["past-events"],children:[(0,i.jsx)("h2",{children:"Celebrating Thought Leadership Successes"}),(0,i.jsx)(s.default,{href:"/events",children:"Go to event gallery"}),(0,i.jsxs)("div",{className:d()["slider-container"],children:[(0,i.jsx)("div",{className:d().slider,children:(0,i.jsx)($,{dots:!0,speed:500,arrows:!1,infinite:!0,autoplay:!0,slidesToShow:1,slidesToScroll:1,autoplaySpeed:4e3,beforeChange:(e,A)=>n(A),customPaging:e=>(0,i.jsx)("div",{style:{width:"12px",height:"4px",backgroundColor:"#fff",opacity:e===t?1:.3}}),appendDots:e=>(0,i.jsx)("ul",{style:{marginBottom:30},children:e}),children:l.images.map((e,A)=>(0,i.jsxs)("div",{children:[(0,i.jsx)(r.default,{loading:"lazy",src:e,alt:"Event Image ".concat(A+1),priority:!1,placeholder:"blur"}),l.imgHeader||l.imgText?(0,i.jsx)("div",{className:d().sliderText,children:(0,i.jsxs)("div",{className:l.imgHeader?d().textContent:d().textContentWithoutHeader,children:[l.imgHeader&&(0,i.jsx)("h3",{children:"Business Day Event"}),(0,i.jsx)("p",{children:l.imgText})]})}):null]},A))})}),(0,i.jsxs)("section",{className:d().btngroup,children:[(0,i.jsx)("button",{type:"button","aria-label":"Arrow pointing left",onClick:()=>{A(e=>0===e?q.length-1:e-1)},children:(0,i.jsx)(Z.KYK,{})}),(0,i.jsx)("button",{type:"button","aria-label":"Arrow pointing right",onClick:()=>{A(e=>e===q.length-1?0:e+1)},children:(0,i.jsx)(Z.hdK,{})})]})]})]})]})})}},17224:function(e,A,t){"use strict";t.d(A,{default:function(){return d}});var i=t(57437),a=t(27648),s=t(33145),r=t(48832),n=t.n(r),l=t(94295),o={src:"/_next/static/media/heroimage-xl.2684fff2.webp",height:700,width:1200,blurDataURL:"data:image/webp;base64,UklGRmgAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSAwAAAABD9D/iAjMf0T/IwBWUDggNgAAAJABAJ0BKggABQACQDglpAACmmKbgAD+7SUMtHndN8Jvylk2//RqWhDP9YhdIyYm/CYmfgAAAA==",blurWidth:8,blurHeight:5},d=()=>(0,i.jsxs)("section",{className:n().heroTopSection,children:[(0,i.jsxs)("div",{className:n().heroTextContainer,children:[(0,i.jsx)(a.default,{href:"/events",children:(0,i.jsxs)("h4",{children:[(0,i.jsx)("span",{children:"Latest News"}),"Founders’ Mixer",(0,i.jsx)(l.fNt,{size:20,color:"#3E54AC",style:{marginLeft:5}})]})}),(0,i.jsx)("h1",{children:"Modernise and Secure All Processes"}),(0,i.jsx)("p",{children:"Cloud Native strategies that enable business agility, flexibility, scalability and data security of the cloud to solve the challenges in today's business world through digital transformation."}),(0,i.jsxs)("div",{className:n().buttonGroup,children:[(0,i.jsx)("a",{href:"/contact-us",children:"Contact Sales"}),(0,i.jsx)("a",{href:"#product-services",children:"Learn More"})]})]}),(0,i.jsx)("div",{className:n().heroImgContainer,children:(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{media:"(max-width: 900px)",srcSet:"/_next/static/media/mobile-sm.df7be5f8.webp",height:490,width:600}),(0,i.jsx)("source",{media:"(max-width: 1024px)",srcSet:"/_next/static/media/mobile-md.88a98025.webp",height:735,width:900}),(0,i.jsx)("source",{media:"(max-width: 1200px)",srcSet:"/_next/static/media/heroimage-lg.ceaeb607.webp",height:952,width:900}),(0,i.jsx)(s.default,{src:o,alt:"Top Cloud Services providers with CloudPlexo's Innovative Solutions",priority:!0,height:o.height,width:o.width,quality:85,placeholder:"blur",blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkiAMAAGQAYG61VcsAAAAASUVORK5CYII="})]})})]})},23695:function(e){e.exports={events:"events_events__Rbpcu","header-h2":"events_header-h2__pvs9M","past-events":"events_past-events__t35pk","events-grid":"events_events-grid__0WHHe","upcoming-events":"events_upcoming-events__so1JI","upcoming-events-grid":"events_upcoming-events-grid__jptg3","slider-container":"events_slider-container__CmOyK",slider:"events_slider__vgo_9",sliderText:"events_sliderText__WYpyM",btngroup:"events_btngroup__oIenC"}},48832:function(e){e.exports={heroTopSection:"hero_heroTopSection__8jHhv",heroTextContainer:"hero_heroTextContainer__u3Zcm",buttonGroup:"hero_buttonGroup__959Rs",heroImgContainer:"hero_heroImgContainer__38EBr"}},50916:function(e){e.exports={serviceContainer:"styles_serviceContainer__404jx",tabsTab:"styles_tabsTab__jU_dq",servicesTabNavigation:"styles_servicesTabNavigation__Yv_Ta",tabsTabActive:"styles_tabsTabActive__CJJCz",slideLeft:"styles_slideLeft__HAC4X",sliderLeft:"styles_sliderLeft__V55sy",slideRight:"styles_slideRight__u9kBQ",sliderRight:"styles_sliderRight__EYazP",tabContent:"styles_tabContent__G8taV",icon:"styles_icon__GXnEH",btnViewMore:"styles_btnViewMore__zLXSA",badgesContainer:"styles_badgesContainer__BrbZL",partnerBadges:"styles_partnerBadges__oxbp_",otherBadges:"styles_otherBadges__ETMNN",clientsSection:"styles_clientsSection__M_Ntf",clientsImages:"styles_clientsImages__rizOE",gtcoSection:"styles_gtcoSection__5Ru3G",imageWrapper:"styles_imageWrapper__Mb4vw"}},94743:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/Fox-News-Onboarding-Logo.d3688dcf.webp",height:150,width:150,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAACwAQCdASoIAAgAAkA4JaQAAsf5HbKAAP78QqXT/Mj1DB/r6f4nPZ0qHW7I867ZkV7mpbGR3BHRsAAA",blurWidth:8,blurHeight:8}},36091:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/International-Business-Times-Logo.a6921f95.webp",height:50,width:172,blurDataURL:"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACwAQCdASoIAAIAAkA4JZwCdAEO/gLsAP77WHpUEcRLKFWKob4+f7AA",blurWidth:8,blurHeight:2}},65799:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/InvestoresPlace.cb095963.webp",height:150,width:150,blurDataURL:"data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAAAwAQCdASoIAAgAAkA4JaQAA3AA/vrr6AGEW1XMVSi777y6JDEvIAAA",blurWidth:8,blurHeight:8}},47637:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/digital-journal-logo.d90bbb11.webp",height:150,width:150,blurDataURL:"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoIAAgAAkA4JaQAAtzhe+mgAP78krfF3tyMjEsOzk6CM16z1+JvBma3XEqa6N2AAAA=",blurWidth:8,blurHeight:8}},98191:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/marketwatch-vector-logo.d2439bac.webp",height:150,width:150,blurDataURL:"data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAACwAQCdASoIAAgAAkA4JZwAAuda8JkAAP79/u/eSwAebpBCKbRDk0JsAAA=",blurWidth:8,blurHeight:8}},38007:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/striblogo_large.7ee48fd7.webp",height:150,width:150,blurDataURL:"data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAADQAQCdASoIAAgAAkA4JaQAAu0dzNtbAAD+/caecbt0zMn1qbowaPXXSV0AAA==",blurWidth:8,blurHeight:8}},96410:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/50 Certified Light English.d81dc8b2.webp",height:150,width:150,blurDataURL:"data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCsAAAABN6CQjSRoP4v15ziyy2pERGDN7WEoEdM42OBgGXzbxQSL6H/QwaIAweMCAFZQOCBIAAAA0AEAnQEqCAAIAAJAOCWkAAMTw8sJd1gA/vtXlBgMfWTTbMu4JgeetvgvnrfYSUjeJBfv6MX8/z9onzr/Y4WldDHChkIxrCAA",blurWidth:8,blurHeight:8}},76392:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/AWS RDS delivery.72f13660.webp",height:1920,width:1920,blurDataURL:"data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCoAAAABL6CQkSTmisX5e5zYF42ICHzcgaFETONgg4NV8G8HEyyi/0EHiwIEjwtWUDggSgAAABACAJ0BKggACAACQDglpAAOsANJwbZ04AAA/vtXlBgMfWdhriD2a+Oyr0+VjaH99kFbmcrEXzfmz/P2hpozDaXFTIMJ6S54QAAA",blurWidth:8,blurHeight:8}},98309:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/AWS-Badge AWS API Gateway.6c103751.webp",height:129,width:129,blurDataURL:"data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDkAAAABV6AgAMjGi6B/Jmk+W42ICPgqll73Aqpq24YMCY6ZLykkGGuoIIvGSkT0P3Z/2kPzcDzwC3CBGgEAVlA4IEYAAADQAQCdASoIAAgAAkA4JaQAAxPBQsREAAD++lN88Nd/bg/TA58eWZbhuxOvyvNaE10NBRX/fxh/f9FNxNBRxXS8lhcBLwAA",blurWidth:8,blurHeight:8}},35440:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/AWS-Badge Amazon CloudFront Delivery.ca6e6407.webp",height:129,width:129,blurDataURL:"data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD0AAAABZ6AmANCEEjSj/0EEt0mNiAj4T+Ldz3MJgSi2bQT4q/v+R47XgTbK6CCEpZgR/Y81bwie4Ags8ABv8O8YAFZQOCBIAAAA0AEAnQEqCAAIAAJAOCWcAAMTwULwLgAA/vrXq+QoQg5fSM2RsTDs/W3wP/qhR/U29N3X0nOluna/PxRav/KHfsekDSJeAAAA",blurWidth:8,blurHeight:8}},439:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/AWS-Consulting-Partner-Badge 1.e60a60ed.webp",height:413,width:434,blurDataURL:"data:image/webp;base64,UklGRnAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBsAAAABHyAWTPyJ65tGRIQMgmybzd9k9zxDRP9jyQcAVlA4IC4AAACQAQCdASoIAAgAAkA4JaQAAuUuKoAA/vw4Tfv1MYwPV//uWvPMjDih4yu2AAAA",blurWidth:8,blurHeight:8}},86629:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/AWS-badge-lambda.e7034436.webp",height:130,width:129,blurDataURL:"data:image/webp;base64,UklGRq4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEAAAAABf6AmANAEPgLSv4PLtEZEBPz1lth59ZKREGxi22pkgJzrXGMBD2ADTYhADN1qeWsiov+x5iVGyoeD/gdsfC0OVlA4IEgAAAAwAgCdASoIAAgAAkA4JaQADrEDY2MvwGV0sAD++lN1Y1sMtzdNnjvm+1twhlQQWnO3+N3QpEenlhWj3kIS+YdPF6IUph5AAAA=",blurWidth:8,blurHeight:8}},28755:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/AWS-dynamo-Badge.1ada9850.webp",height:129,width:129,blurDataURL:"data:image/webp;base64,UklGRqoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD8AAAABZ6AYkiRmERZt/R0uvLNGRAR+KvfOpkSoiSQpMnA8U7UR4afgIuRgARuYQQXGMBHR/xh1m+AJloBfgAPc6Q4AVlA4IEQAAADQAQCdASoIAAgAAkA4JZwAAxPDxNwf4AD++lNGOsLRjJzrLL5B9l3GEigkeiBTysK2E8+ptJVqPb6Z1KD7qu0InDyAAA==",blurWidth:8,blurHeight:8}},51377:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/WAFR-Partner-Badge.df73f6f4.webp",height:129,width:130,blurDataURL:"data:image/webp;base64,UklGRq4AAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAi8LCwsKYBQC3//////+qBLf///////+gt////////9u3////////25P////////bBav//////9sABaTf39/fwABWUDggRgAAALABAJ0BKggACAACQDglpAACnZeBIHAA/vhE188sBEU6eMHdUI7kK/v6PmEY7MTbZoZFe8+7lgYBGHoFBfI6iV9Oiol4AAA=",blurWidth:8,blurHeight:8}},77068:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/amazonrdsserviceready.42108e89.webp",height:129,width:129,blurDataURL:"data:image/webp;base64,UklGRqAAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDQAAAABR6CgbRumKr/y51AVwS6NiAi8M7Ui0DSSVE3l13MfDIAJWqygAQFE9D/WvBVeOEEwsPEbVlA4IEYAAADQAQCdASoIAAgAAkA4JaQAAxPDxs69KAD++t/y+NbDPP3XKeeloxiX5QL84qNs5XeU2E8+pveb/noHxmC055ZWSnGw8gAA",blurWidth:8,blurHeight:8}},47520:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/aws config delivery.a1b89238.webp",height:375,width:375,blurDataURL:"data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCoAAAABL6CQkSTmCsb5c5zYF42ICHzcgaFETONgg4NV8G8HEyyi/0EHiwIEjwtWUDggPAAAANABAJ0BKggACAACQDglpAAC93uQNQgAAP77V5QYDH1krRO0STQxQ5Kl0e3H7cpZBZfF2YzbJgCxrCAAAA==",blurWidth:8,blurHeight:8}},70516:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/aws systems manager delivery.3fc1e31b.webp",height:375,width:375,blurDataURL:"data:image/webp;base64,UklGRooAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCoAAAABL6CQkSTmCsb5c5zYF42ICHzcgaFETONgg4NV8G8HEyyi/0EHiwIEjwtWUDggOgAAALABAJ0BKggACAACQDglpAAC93b+4AAA/vtXlBgMfWStE7RJNDFCvvecBnhWviE4XAvcnl8PzXgQAAA=",blurWidth:8,blurHeight:8}},6142:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/aws transfer family delivery badge.bc0a3a3c.webp",height:675,width:675,blurDataURL:"data:image/webp;base64,UklGRpgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDAAAAABYFXbViIisOifxd0KsPiEcWvg0yEiJiAPfVcxBNv5dvDrFD/Hn/lB6QsgNU3TVABWUDggQgAAANABAJ0BKggACAACQDglpAADE8FC8C4AAP764CPh62GhaDB0Nh5TltvaqB8H282EZYvIfLdLf5sLKBgu2h2shLwAAA==",blurWidth:8,blurHeight:8}},44555:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/aws-partner-immersion-day-program-v1.470f1c41.webp",height:129,width:129,blurDataURL:"data:image/webp;base64,UklGRqgAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDoAAAABX6CokSRln+tu/atgOD4bERHwPy+76xUh1ESSFOWXNW+MFwoTqMEDIgiRG9H/WPNG5mVORkbHxq8GVlA4IEgAAADQAQCdASoIAAgAAkA4JaQAAxPBQvAuAAD++knpe6FDj51NMfPHksg+Ggt7xghX1k+Zr7f5iX0+wGKE1OjajNgDxjGULh5AAAA=",blurWidth:8,blurHeight:8}},30827:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/badge.9322a88b.webp",height:375,width:375,blurDataURL:"data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCoAAAABL6CQkSTmCsb5c5zYF42ICHzcgaFETONgg4NV8G8HEyyi/0EHiwIEjwtWUDggPAAAALABAJ0BKggACAACQDglpAAC93uOSaAA/vtXlBgMfWStE7RJNDFDYTI73AGv72afWyq4ED1BC4HPXgQAAA==",blurWidth:8,blurHeight:8}},71079:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/busineesbadge.cc2252ea.webp",height:120,width:120,blurDataURL:"data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSCoAAAABL6CQbQTochznz3Fgn0ZEBC46MJSIaRxscLAK/u1ggkX0P+hgUYDgcQFWUDggQgAAALABAJ0BKggACAACQDglpAAC93uOSaAA/vtXlBgMfWXVfrd104ndOSBboD140gaJfpW7+W6W98xp2ifLQiisawgAAA==",blurWidth:8,blurHeight:8}},53359:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/g8.71fd2eec.webp",height:129,width:129,blurDataURL:"data:image/webp;base64,UklGRqQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABV6Agkg3qPdTTv4QR4F8jIgIfl19bblATSVIUE/bxCQE1ZGjBAzFeMRHR/5jjpOAGO/A7Fl4FAFZQOCBGAAAA0AEAnQEqCAAIAAJAOCWcAAMTw8ach3gA/vrf8vjWwz0NtAD1yXygrHXvfliNKwiJVLuXlvTlKuSmprkZOky3fibw8gAAAA==",blurWidth:8,blurHeight:8}},4765:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/public sector badge.79abbf67.webp",height:129,width:129,blurDataURL:"data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDUAAAABR6AoABlIC/0jaeLNjhoREXhq3BxYRZLsVFHVc9AvfwZAQfIBVojofzznHzJH5s3I6PgwCgBWUDggUAAAABACAJ0BKggACAACQDglAE6Nr+BeANkuO8AA/vwkxSEzuCczvT7dMDzz79o+umke+qPdjAWCzjku3uDZUu6ZMjk5fuu96rtSoyS/xRLMAAAA",blurWidth:8,blurHeight:8}},64312:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/qualified software.47f1b504.webp",height:129,width:129,blurDataURL:"data:image/webp;base64,UklGRqYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDgAAAABX6AmANAEj0f/EHzMtUZEBPw4uc/vbghFtW1TY8P9/IJYUkghiw7GuioR0f+Y46TgBjvwOxZeAVZQOCBIAAAAMAIAnQEqCAAIAAJAOCWkAA6xA2NjMKIG0AAA/vrgI+HrYZ5+Bn+qKLkitL+YSIJbaHvxEAyMfzyiYrE0ez9+5CG07uSFGBAA",blurWidth:8,blurHeight:8}},94081:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/techbadge.ebd835a0.webp",height:421,width:436,blurDataURL:"data:image/webp;base64,UklGRmoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSBcAAAABH/D7/4iIBUG2zdDGO7SDnCGi/9HwAwBWUDggLAAAAJABAJ0BKggACAACQDglpAAC50XDQAD++7h3RtzWgVjlZG7bnEkM6gKeFMAA",blurWidth:8,blurHeight:8}},56286:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/gtco.a63bb0f6.webp",height:481,width:608,blurDataURL:"data:image/webp;base64,UklGRq4AAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSDEAAAAAAKT6+vr6pQAAqP////+pAACo/////6kAAKj/////qQAAqP////+pAAApOyQjHQsAAFZQOCBWAAAAUAIAnQEqCAAGAAJAOCWwAnS6AfgAAouHS9uAAP7CScEjSV9OT9v8fp+82GMfdm+dlZL8LRiAdZpIeijPtSzX/i0WecI9qTVf/PTdcxyEmnI8adNAAAA=",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[1177,284,4753,4478,6051,1779,5452,5878,2972,3705,2416,8917,305,5986,3839,2971,2117,1744],function(){return e(e.s=9603)}),_N_E=e.O()}]);