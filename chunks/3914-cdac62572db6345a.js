"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3914,523],{83914:function(e,a,r){r.d(a,{p:function(){return I}});var s,t=r(26042),n=r(69396),i=r(85893),l=r(9008),o=r.n(l),c=r(67294),m=r(29323),d=r(68949),h=r(11163),f=r(94184),u=r.n(f),x=r(9374),p=r(68921),g=r(9189),j=r(32414),b=r(41629),N=r(10523),k=r(11554),w=r(94201),v=r(89262),y=r(23754),C=[{href:"/favorites",iconName:"heart",text:"Favorites"},{href:"/reports",iconName:"graph",text:"Reports"},{href:"",iconName:"gear",text:"Account settings",textMobile:"Account"},{href:"/email-settings",iconName:"mail-setup",text:"Email settings",textMobile:"Email set."}].map((function(e){return(0,n.Z)((0,t.Z)({},e),{href:"".concat("/account").concat(e.href)})})),_=(0,m.Pi)((function(){var e,a,r,s=(0,g.c7)(),t=s.Profile;return s.is.loggedIn?(0,i.jsx)(k.w,{fullName:(null===(e=t.dto)||void 0===e?void 0:e.fullName)||"Hello!",email:null===(a=t.dto)||void 0===a?void 0:a.email,status:null===(r=t.dto)||void 0===r?void 0:r.access.accessLevel}):null})),O=function(e){var a=e.router,r=e.logout,s=e.children;return(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsxs)("div",{className:"w-72 flex-shrink-0 shadow-container z-10 min-h-screen-no-header relative",children:[(0,i.jsx)("div",{className:"m-7",children:(0,i.jsx)(_,{})}),(0,i.jsx)(w.UDivider,{stylePadding:30,styleMargin:30}),(0,i.jsxs)("div",{className:"mb-12 ml-7 sticky top-[100px]",children:[C.map((function(e){return(0,i.jsx)(x.r,{href:e.href,children:(0,i.jsx)("a",{children:(0,i.jsxs)("span",{className:u()("flex items-center mt-6 pr-2 group",{"border-r-4 border-solid border-green":a.pathname===e.href}),role:"menuitem",tabIndex:0,children:[(0,i.jsx)("span",{className:u()("w-11 h-11 mr-4 rounded-full group-hover:bg-green/10",{"bg-green/10":a.pathname===e.href}),children:(0,i.jsx)(v.Q,{className:u()("mt-2.5 mx-auto sm:my-2.5 lg:mx-2.5",a.pathname===e.href?"gear"===e.iconName?"fill-[transparent] stroke-2 stroke-green":"fill-green":"gear"===e.iconName?"fill-[transparent] stroke-2 stroke-gray":"fill-gray"),width:24,height:24,name:e.iconName})}),(0,i.jsx)("span",{className:u()("text-2xs leading-2.5 uppercase whitespace-nowrap sm:text-base sm:leading-5 sm:font-bold sm:normal-case sm:whitespace-normal",a.pathname===e.href?"text-black":"text-gray"),children:e.text})]})})},e.href)})),(0,i.jsx)(y.g,{style:"btn-text",className:"mt-10 ml-[60px] font-bold text-gray whitespace-nowrap normal-case",onClick:r,children:"Log Out"})]})]}),(0,i.jsx)("div",{className:"w-full bg-gray-100 h-full",children:s})]})},A=function(e){var a=e.router,r=e.children;return(0,i.jsxs)("div",{className:"pb-[72px] sm:pb-[82px] lg:pb-0",children:[r,(0,i.jsx)("div",{className:"fixed bottom-0 left-0 flex justify-around w-full px-3 py-2 bg-white shadow-footer-navigation z-[5000]",children:C.map((function(e){return(0,i.jsx)(x.r,{href:e.href,children:(0,i.jsx)("a",{children:(0,i.jsxs)("span",{className:"items-center mr-1",role:"menuitem",tabIndex:0,children:[(0,i.jsx)(v.Q,{className:u()("mt-2.5 mx-auto sm:my-2.5 lg:mx-2.5",a.pathname===e.href?"gear"===e.iconName?"fill-[transparent] stroke-2 stroke-green":"fill-green":"gear"===e.iconName?"fill-[transparent] stroke-2 stroke-gray":"fill-gray"),width:22,height:22,name:e.iconName}),(0,i.jsx)("span",{className:u()("text-2xs leading-2.5 uppercase whitespace-nowrap sm:text-base sm:leading-5 sm:font-bold sm:normal-case sm:whitespace-normal",a.pathname===e.href?"text-black":"text-gray"),children:null!==(s=e.textMobile)&&void 0!==s?s:e.text})]})})},e.href)}))})]})},I=(0,m.Pi)((function(e){var a=e.children,r=(0,c.useState)("arrow-in-circle"),s=r[0],l=r[1],m=(0,g.c7)(),f=(0,j.j1)(),u=(0,h.useRouter)(),x={router:u,navigationCurrentItem:s,setNavigationCurrentItem:l,logout:function(){m.Auth.logout()}},k=A;return p.lC.value.get()>p.lC.enum.md&&(k=O),(0,c.useEffect)((function(){m.Profile.fetched&&!m.is.loggedIn&&((0,d.z)((function(){f.popups.auth="sign-in"})),u.push("/"))}),[m.Profile.fetched]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Ofirio - Account"}),(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"}),(0,i.jsx)("meta",{property:"og:title",content:"Ofirio - Account"},"title")]}),(0,i.jsx)(b.Header,{}),(0,i.jsxs)(k,(0,n.Z)((0,t.Z)({},x),{children:[(0,i.jsx)("div",{className:"max-w-[1700px]",children:m.is.loggedIn&&a}),(0,i.jsx)(N.Footer,{})]}))]})}))},10523:function(e,a,r){r.r(a),r.d(a,{Footer:function(){return i}});var s=r(85893),t=r(9374),n=r(89262),i=function(){return(0,s.jsxs)("footer",{className:"bg-gray-darkest text-white py-10",children:[(0,s.jsxs)("div",{className:"flex flex-wrap wrapper justify-around text-tiny",children:[(0,s.jsxs)("div",{className:"w-1/2 sm:w-auto",children:[(0,s.jsx)("span",{className:"font-bold",children:"About Us"}),(0,s.jsx)(t.r,{href:"/about-us",children:(0,s.jsx)("a",{target:"_blank",className:"text-gray block mt-3",children:"About Us"})})]}),(0,s.jsxs)("div",{className:"w-1/2 sm:w-auto",children:[(0,s.jsx)("span",{className:"font-bold",children:"Learn"}),(0,s.jsx)(t.r,{href:"/how-it-works",children:(0,s.jsx)("a",{target:"_blank",className:"text-gray block mt-3",children:"How it Works"})})]}),(0,s.jsxs)("div",{className:"w-1/2 mt-6 sm:w-auto sm:m-0",children:[(0,s.jsx)("span",{className:"font-bold",children:"Services"}),(0,s.jsx)(t.r,{href:"/invest/florida",children:(0,s.jsx)("a",{target:"_blank",className:"text-gray block mt-3",children:"Investment Finder"})}),(0,s.jsx)(t.r,{href:"/rent-estimator",children:(0,s.jsx)("a",{target:"_blank",className:"text-gray block mt-3",children:"Rent Estimator"})})]}),(0,s.jsxs)("div",{className:"w-1/2 mt-6 sm:w-auto sm:m-0",children:[(0,s.jsx)("span",{className:"font-bold",children:"Contact Us"}),(0,s.jsx)(t.r,{href:"/contact-us",children:(0,s.jsx)("a",{target:"_blank",className:"text-gray block mt-3",children:"Contact Us"})}),(0,s.jsx)("a",{href:"tel:+18885505978",className:"text-gray block mt-3",children:"+1 888-550-5978"}),(0,s.jsx)("a",{href:"mailto:help@ofirio.com",className:"text-gray block mt-3",children:"help@ofirio.com"})]})]}),(0,s.jsxs)("div",{className:"wrapper text-gray text-tiny font-normal mt-10 text-center",children:[(0,s.jsxs)("span",{className:"block",children:["Updated ",(0,s.jsx)("b",{children:"July 1, 2021"}),": By searching, you agree to the ",(0,s.jsx)(t.r,{href:"/terms-of-use",children:(0,s.jsx)("a",{target:"_blank",className:"ui-href-dark",children:"Terms of Use"})})," and ",(0,s.jsx)(t.r,{href:"/privacy-policy",children:(0,s.jsx)("a",{target:"_blank",className:"ui-href-dark",children:"Privacy Policy"})}),"."]}),(0,s.jsxs)("span",{className:"block mt-2",children:["Ofirio inc. and its subsidiaries fully support the principles of the ",(0,s.jsxs)("a",{href:"https://www.hud.gov/program_offices/fair_housing_equal_opp",target:"_blank",rel:"noreferrer",className:"ui-href-dark",children:["Fair Housing Act. ",(0,s.jsx)(n.Q,{className:"inline-block ml-1 fill-white",width:28,height:28,name:"equal-housing-opportunity"})]})]}),(0,s.jsxs)("span",{className:"block mt-2",children:["New York: ",(0,s.jsx)("a",{href:"https://ofirio-disclosures.s3.amazonaws.com/OFI+NY+Signed.pdf",download:!0,target:"_blank",className:"ui-href-dark",rel:"noopener nofollow noreferrer",children:"442-H Standard Operating Procedures"})]}),(0,s.jsxs)("span",{className:"block",children:["TREC: ",(0,s.jsx)("a",{href:"https://ofirio-disclosures.s3.amazonaws.com/TREC-Information+About+Brokerage.pdf",target:"_blank",className:"ui-href-dark",rel:"nofollow noreferrer",children:"Info About Brokerage Services"}),", ",(0,s.jsx)("a",{href:"https://ofirio-disclosures.s3.amazonaws.com/TREC+Consumer-protection.pdf",target:"_blank",className:"ui-href-dark",rel:"nofollow noreferrer",children:"Consumer Protection Notice"})]}),(0,s.jsx)("span",{className:"block mt-2",children:"The Ofirio inc. main office is located in Wilmington, Delaware. Ofirio FL LLC, Ofirio GA LLC, Ofirio Austin LLC, Ofirio New York LLC, Ofirio CA inc., and Ofirio Washington LLC are separate operating subsidiaries of Ofirio Inc. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation and applicable legal and regulatory requirements."}),(0,s.jsx)("span",{className:"block mt-2",children:"Florida #CQ1063299"}),(0,s.jsx)("span",{className:"block",children:"California DRE #02167671"}),(0,s.jsxs)("span",{className:"block",children:["A list of our real estate licenses is available ",(0,s.jsx)(t.r,{href:"/real-estate-licenses",children:(0,s.jsx)("a",{target:"_blank",className:"ui-href-dark",children:"here"})}),"."]}),(0,s.jsxs)("span",{className:"block",children:[(0,s.jsx)("a",{href:"mailto:brokers@ofirio.com",className:"ui-href-dark",children:"Contact Ofirio, Inc. Brokerages"})," regarding IDX questions"]}),(0,s.jsxs)("span",{className:"block mt-2",children:["If you are using a screen-reader or having trouble reading this website, please contact Ofirio Customer Support to seek accommodation at ",(0,s.jsx)("a",{href:"mailto:help@ofirio.com",className:"ui-href-dark",children:"help@ofirio.com"})]}),(0,s.jsx)("span",{className:"block mt-2",children:"\xa9 2022 All rights reserved."})]})]})}}}]);