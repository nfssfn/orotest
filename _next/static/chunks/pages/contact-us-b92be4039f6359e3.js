(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8455],{84407:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return n(56130)}])},56130:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var r=n(85893),o=n(29323),a=n(9008),s=n.n(a),i=n(50259),l=n(62881),c=n(85630),u=n(67564),d=n(70508),p=n(67294),m=n(41664),f=n.n(m),h=n(9189),y=n(32414),g=n(47568),x=n(51438),v=n(52951),b=n(14924),w=n(26042),j=n(10253),N=n(70655),C=n(34051),k=n.n(C),S=n(68949),P=n(26140),O=n(9669),E=n.n(O),A=n(87339),_=function(){function e(){(0,x.Z)(this,e)}return(0,v.Z)(e,[{key:"sendMessage",value:function(e){return E().post("/api/contact_us",e)}}]),e}();(0,N.gn)([(0,A.B)("ContactUs:sendMessage",[]),(0,N.w6)("design:type",Function),(0,N.w6)("design:paramtypes",[void 0])],_.prototype,"sendMessage",null);var M=new _,R=n(74231),L=n(20129),T=n(66136),$=n(29022);function F(e){var t={fullName:new L.N("full-name",{initialValue:(null===e||void 0===e?void 0:e.fullName)||"",defaultValue:"",validators:[$.L.FULLNAME],type:"text"}),email:new L.N("email",{initialValue:(null===e||void 0===e?void 0:e.email)||"",defaultValue:"",validators:[$.L.EMAIL],type:"text"}),message:new L.N("message",{initialValue:"",defaultValue:"",validators:[R.Z_().typeError("Request text cannot be empty").min(1,"Request text may not be blank").max(4096,"Maximum Request length is 4096")],type:"text"})};return new T.a({controls:t})}var q=function(){function e(t,n){(0,x.Z)(this,e),(0,b.Z)(this,"Account",null),(0,b.Z)(this,"globalState",null),(0,b.Z)(this,"formModel",null),(0,b.Z)(this,"inited",!1),(0,b.Z)(this,"state",{busy:(0,P.M)()}),(0,S.rC)(this),this.Account=t,this.globalState=n}return(0,v.Z)(e,[{key:"init",value:function(){var e=this;return(0,g.Z)(k().mark((function t(){var n;return k().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.inited){t.next=2;break}return t.abrupt("return");case 2:e.Account.Profile&&(e.formModel=F(e.Account.Profile.dto)),n=(0,S.U5)((function(){return e.Account.Profile.dto}),(function(){e.formModel.patch({fullName:e.Account.Profile.dto.fullName,email:e.Account.Profile.dto.email}),n()})),e.inited=!0;case 5:case"end":return t.stop()}}),t)})))()}},{key:"send",value:function(e){var t=this;return(0,g.Z)(k().mark((function n(){var r,o,a,s,i,l,c,u;return k().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=(0,j.Z)(t.state.busy.lock(),2),o=r[0],a=r[1],o&&e){n.next=3;break}return n.abrupt("return");case 3:if(!t.formModel.hasErrors){n.next=8;break}return a(),t.formModel.getErrorList(!0),n.abrupt("return",null);case 8:return d=t.formModel,s={full_name:d.controls.fullName.internalValue,email:d.controls.email.internalValue,message:d.controls.message.internalValue},n.next=11,e("contact_us_request");case 11:return i=n.sent,n.t0=j.Z,n.next=15,M.sendMessage((0,w.Z)({recaptcha:i},s));case 15:if(n.t1=n.sent,l=(0,n.t0)(n.t1,2),c=l[1],a(),!c){n.next=22;break}return n.abrupt("return",t.globalState.messages.push(null!==(u=null===c||void 0===c?void 0:c.message)&&void 0!==u?u:{type:"error",text:"An error occurred"}));case 22:window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"lead",user_id:t.Account.is.loggedIn?t.Account.Profile.dto.id:void 0,source:"contact-us",email:s.email}),t.globalState.messages.push({type:"success",text:"Your message was successfully sent"});case 25:case"end":return n.stop()}var d}),n)})))()}}]),e}();(0,N.gn)([S.aD,(0,N.w6)("design:type",Function),(0,N.w6)("design:paramtypes",[void 0])],q.prototype,"send",null);var I=n(23754),V=n(60307),Z=n(26317),z=(0,o.Pi)((function(){var e=(0,h.c7)(),t=(0,y.j1)(),n=(0,i.xX)().executeRecaptcha,o=(0,p.useState)(function(e,t){return new q(e,t)}(e,t)),a=o[0];return a.init(),(0,r.jsxs)("div",{className:"w-full max-w-2xl",children:[(0,r.jsx)("h2",{className:"mb-7 text-2.5xl sm:text-4xl leading-tight font-extrabold text-center sm:text-left",children:"Send Us a Message"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-5",children:[(0,r.jsx)("div",{className:"col-span-2 lg:col-span-1",children:(0,r.jsx)(V.V,{control:a.formModel.controls.fullName,label:"Your Name"})}),(0,r.jsx)("div",{className:"col-span-2 lg:col-span-1",children:(0,r.jsx)(V.V,{control:a.formModel.controls.email,label:"Email"})}),(0,r.jsx)("div",{className:"col-span-2",children:(0,r.jsx)(Z.y,{control:a.formModel.controls.message,label:"Message"})})]}),(0,r.jsxs)("div",{className:"text-tiny font-normal text-gray text-center sm:text-left",children:[(0,r.jsxs)("span",{className:"block my-2",children:["This site is protected by reCAPTCHA and the Google\xa0",(0,r.jsx)(f(),{href:"https://policies.google.com/privacy",children:(0,r.jsx)("a",{target:"_blank",children:"Privacy Policy"})})," and ",(0,r.jsx)(f(),{href:"https://policies.google.com/terms",children:(0,r.jsx)("a",{target:"_blank",children:"Terms of Service"})})," apply."]}),(0,r.jsxs)("span",{children:["By sending message you agree to Ofirio's ",(0,r.jsx)("br",{className:"sm:hidden"}),(0,r.jsx)(f(),{href:"/terms-of-use",children:(0,r.jsx)("a",{className:"ui-href text-gray-dark underline",target:"_blank",children:"Terms of Use"})})," and ",(0,r.jsx)(f(),{href:"/privacy-policy",children:(0,r.jsx)("a",{className:"ui-href text-gray-dark underline",target:"_blank",children:"Privacy Policy"})})]})]}),(0,r.jsx)(I.g,{onClick:function(){return a.send(n)},busy:a.state.busy.locked.get(),style:"btn-green",className:"text-lg mt-5 mx-auto sm:mx-0 py-3.5 px-16",children:"Send Message"})]})})),U=n(76643),H=n(94201),D=n(89262),B=[{title:"help@ofirio.com",href:"mailto:help@ofirio.com",iconName:"mail"},{title:"+1 888-550-5978",href:"tel:+18885505978",iconName:"phone"}],G=[{title:"facebook",href:"https://www.facebook.com/ofirio.official/"},{title:"instagram",href:"https://www.instagram.com/ofirio.official/"},{title:"youtube",href:"https://www.youtube.com/channel/UCrDHpDOIN6KAAsw5tKtsPNw"}];var K=(0,o.Pi)((function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"Contact Us - Ofirio | Real Estate Deal Finder"}),(0,r.jsx)("meta",{name:"robots",content:"index, follow"}),(0,r.jsx)("meta",{name:"description",content:"Ofirio contact details - send us a message at help@ofirio.com or call our helpline: +1 888-550-5978."}),(0,r.jsx)("meta",{property:"og:title",content:"Contact Us - Ofirio | Real Estate Deal Finder"},"title"),(0,r.jsx)("meta",{property:"og:description",content:"Ofirio contact details - send us a message at help@ofirio.com or call our helpline: +1 888-550-5978."},"description")]}),(0,r.jsxs)(u.m,{background:"contact-us",children:[(0,r.jsx)("h1",{children:"Contact Us"}),(0,r.jsx)("p",{children:"Want to get in touch? We\u2019d love to hear from you."})]}),(0,r.jsxs)(i.pm,{reCaptchaKey:"6Le8qAEhAAAAAGIoj0s_hTBpO50FHZ6fo5YIpgKP",children:[(0,r.jsxs)("div",{className:"wrapper flex flex-col items-center md:items-start md:flex-row justify-between gap-14 md:gap-8 mt-8 mb-16 sm:mt-16 sm:mb-24",children:[(0,r.jsx)(z,{}),(0,r.jsxs)("div",{className:"max-w-sm text-lg font-normal bg-blue text-white py-7 px-8 sm:px-12 rounded-md",children:[(0,r.jsx)("h3",{className:"mb-7 text-2.5xl sm:text-4xl leading-tight font-bold",children:"Contact Information"}),B.map((function(e){var t=e.title,n=e.href,o=e.iconName;return(0,r.jsxs)("span",{className:"flex gap-4 mb-7",children:[(0,r.jsx)(D.Q,{width:28,height:28,name:o,className:"fill-white"}),(0,r.jsx)("a",{href:n,className:"underline",children:t})]},t)})),(0,r.jsx)("div",{className:"flex gap-4",children:G.map((function(e){var t=e.title,n=e.href;return(0,r.jsx)("a",{href:n,"aria-label":t,target:"_blank",rel:"noreferrer",className:"block p-2 bg-white/25 rounded-full",children:(0,r.jsx)(D.Q,{width:20,height:20,name:"".concat(t,"-transparent"),className:"fill-white"})},t)}))})]})]}),(0,r.jsx)(H.UDivider,{}),(0,r.jsx)(U.Z,{}),(0,r.jsx)(d.A,{wavePosition:"top"}),(0,r.jsx)(l.V,{data:c.u})]})]})}))},76643:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),o=n(9374),a=n(25675),s=n.n(a),i=n(68949),l=n(32414),c=n(9189),u=n(58119),d=n(89262),p=[{question:"What is Ofirio?",answer:"Ofirio provides comprehensive tools to easily find and invest in high-return properties tailored to your needs. Learn more",answerLd:"Ofirio provides comprehensive tools to easily find and invest in high-return properties tailored to your needs. Learn more <a href='".concat("https://portal.ofirio.com","/about-us'>about us</a>")},{question:"How does Ofirio help me find great deals on properties?",answer:"Ofirio utilizes machine learning to show you the best investment opportunities and provide you with the ability to filter by advanced investment criteria such as Cap Rate, Cash on Cash Return, IRR, and more."},{question:"What geographical areas does Ofirio analyze?",answer:"Ofirio analyzes properties throughout the United States."},{question:"How much money do I need to start investing?",answer:"The amount that you need to start investing varies depending on the property and whether you plan to pay in cash or with financing. Ofirio makes things easy - use our investment calculator to see how much money will be needed upfront."},{question:"Can Ofirio evaluate rent prices?",answer:"Ofirio uses artificial intelligence to review, analyze and compare millions of current and historical data points providing you with the most accurate rent estimates."},{question:"Can Ofirio calculate property expenses?",answer:"Ofirio takes into account property taxes, HOA fees, insurance, vacancy, and other expenses - allowing you to calculate and personalize based on your investment needs."},{question:"How to get started?",answer:"To get started",answerLd:"To get started create a free account"}],m=n(62881),f=function(e,t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Q,{name:e?"minus":"plus",width:12,height:12,className:"text-green absolute -left-7"}),(0,r.jsx)("span",{className:"text-lg transition-colors duration-200 ".concat(e?"text-green":"text-gray-darkest"),children:t})]})},h=function(){var e,t=function(){a.is.loggedIn?(0,i.z)((function(){n.messages.push({type:"warning",text:"You\u2019ve already created an account"})})):(0,i.z)((function(){n.popups.auth="sign-up"}))},n=(0,l.j1)(),a=(0,c.c7)();return(0,r.jsxs)("div",{className:"wrapper sm:flex justify-between my-[50px] sm:my-[90px]",children:[(0,r.jsxs)("div",{className:"sm:w-1/3 text-center sm:text-left",children:[(0,r.jsxs)("div",{className:"mx-auto w-max",children:[(0,r.jsx)("span",{className:"font-extrabold text-gray-light",children:"FAQ"}),(0,r.jsxs)("h2",{className:"text-2xl sm:text-4xl font-extrabold mt-4",children:["Questions & ",(0,r.jsx)("br",{className:"hidden sm:block 2xl:hidden"})," Answers"]})]}),(0,r.jsx)("div",{className:"hidden sm:block mt-11",children:(0,r.jsx)(s(),{src:"/svgo/people-holding-question-colored.svg",alt:"People holding question mark",layout:"responsive",width:380,height:240})})]}),(0,r.jsx)("div",{className:"pl-7 sm:p-0 sm:w-1/2 mt-8 sm:mt-0",children:p.map((function(e,n){return(0,r.jsx)(u.d,{label:e.question,labelElement:f,className:"mb-7 xl:mb-12 font-normal text-gray-dark",children:(0,r.jsxs)("p",{className:"pt-4",children:[e.answer,"\xa0","What is Ofirio?"===e.question&&(0,r.jsxs)("span",{children:[(0,r.jsx)(o.r,{href:"/about-us",children:(0,r.jsx)("a",{className:"ui-href-blue-underline",children:"about us"})}),"."]}),"How to get started?"===e.question&&(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"ui-href-blue-underline",onClick:t,role:"link",tabIndex:0,children:"create a free account"}),"!"]})]})},n)}))}),(0,r.jsx)(m.V,{data:{"@context":"https://schema.org","@type":"FAQPage",mainEntity:p.map((function(t){return{"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:null!==(e=t.answerLd)&&void 0!==e?e:t.answer}}}))}})]})}},62881:function(e,t,n){"use strict";n.d(t,{V:function(){return s}});var r=n(85893),o=n(45697),a=n.n(o),s=function(e){var t=e.data;return(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})};s.propTypes={data:a().object.isRequired}},58119:function(e,t,n){"use strict";n.d(t,{d:function(){return u}});var r=n(85893),o=n(67294),a=n(45697),s=n.n(a),i=n(94184),l=n.n(i),c=n(89262),u=function(e){var t=e.label,n=e.labelElement,a=e.opened,s=e.className,i=e.labelStyles,c=e.children,u=(0,o.useRef)(null),d=(0,o.useState)(a),p=d[0],m=d[1],f=(0,o.useState)(a),h=f[0],y=f[1];return(0,o.useEffect)((function(){m(a)}),[a]),(0,o.useEffect)((function(){var e,t=u.current;return p?(t.setAttribute("style","max-height:"+t.scrollHeight+"px;display:block"),e=function(){return t.setAttribute("style","max-height:none;overflow:visible")},t.addEventListener("transitionend",e),function(){return t.removeEventListener("transitionend",e)}):h?(t.setAttribute("style","max-height: "+t.scrollHeight+"px"),e=setTimeout((function(){return t.setAttribute("style","max-height: 0px")}),50),function(){return clearTimeout(e)}):y(!0)}),[p]),(0,r.jsxs)("div",{className:s,children:[(0,r.jsx)("div",{className:l()("relative flex justify-between items-center cursor-pointer select-none font-bold transition-colors duration-300 hover:text-blue [&_svg]:transition-transform [&_svg]:rotate-180 [&_svg]:duration-300 [&_svg]:fill-current",{"[&_svg]:rotate-0":p},i),role:"button",tabIndex:0,onClick:function(){return m(!p)},children:n(p,t)}),(0,r.jsx)("div",{className:l()("opacity-0 max-h-0 overflow-hidden transition-opacity-max-height duration-200",{"opacity-100":p}),ref:u,children:c})]})};u.propTypes={label:s().string,labelElement:s().func,opened:s().bool,className:s().string,labelStyles:s().string},u.defaultProps={label:"",labelElement:function(e,t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"mr-2",children:t}),(0,r.jsx)(c.Q,{name:"smooth-arrow",width:12,height:12})]})},opened:!1,className:"",labelStyles:""}},26317:function(e,t,n){"use strict";n.d(t,{y:function(){return p}});var r=n(85893),o=n(29323),a=n(67294),s=n(94184),i=n.n(s),l=n(45697),c=n.n(l),u=n(20129),d=n(69345),p=(0,o.Pi)((function(e){var t=e.control,n=e.label,o=e.jitter,s=(0,a.useRef)(null),l=(0,d.P)(s,t,o),c=l.isFocused,u=l.internalValue,p=l.setInternalValue,m=l.onFocus,f=l.onBlur;(0,a.useEffect)((function(){s&&s.current&&s.current.value!==u&&(s.current.value=u)}),[u]);var h,y,g=(0,a.useId)();return(0,r.jsxs)("div",{className:"relative inline-block min-w-[100px] mt-2 font-semibold w-full",disabled:t.disabled,readOnly:t.readonly,children:[!t.name.startsWith("input__")&&(0,r.jsx)("input",{tabIndex:-1,"aria-hidden":"true",className:"invisible absolute top-0 left-0",name:t.name,autoComplete:"off"}),(0,r.jsx)("textarea",{autoComplete:"off",id:g,className:i()("w-full min-h-[104px] leading-6 p-4 rounded-sm shadow-input transition-shadow outline-none appearance-none focus:shadow-input-focused hover:shadow-input-hover",{"!shadow-input-invalid":t.dirty&&t.hasError,"text-gray-dark !shadow-input-disabled":t.readonly||t.disabled,"bg-gray-lightest cursor-not-allowed resize-none [&:placeholder-shown+label]:visible":t.disabled}),type:null!==(h=t.type)&&void 0!==h?h:"text",name:null!==(y=t.name)&&void 0!==y?y:g,readOnly:t.readonly,disabled:t.disabled,step:t.step,placeholder:" ",onFocus:m,onBlur:f,onInput:function(e){p(e.target.value)},ref:s}),(0,r.jsx)("label",{htmlFor:g,className:i()("block absolute top-2.5 left-2.5 h-[30px] leading-[30px] bg-white text-gray-dark rounded-sm px-1.5 origin-left will-change-transform translate-y-0 scale-100 transition-all ease-in-out duration-200",{"invisible bg-transparent":t.disabled,"-translate-y-6 scale-[0.8] [&]:leading-6":c||!t.disabled&&u}),"data-label":n,children:n}),t.dirty&&t.hasError&&(0,r.jsx)("span",{className:"block mt-1 whitespace-nowrap overflow-hidden overflow-ellipsis text-error text-tiny font-semibold pl-5",children:t.getError})]})}));p.propTypes={control:c().oneOfType([c().instanceOf(u.N)]).isRequired,label:c().string},p.defaultProps={label:"Floating label"}},85630:function(e,t,n){"use strict";n.d(t,{u:function(){return r}});var r={"@context":"http://schema.org","@type":"Organization",name:"Ofirio",alternateName:"Ofirio LLC",taxID:"",foundingDate:"",foundingLocation:{"@type":"Place",name:"Miami, FL"},founder:{"@type":"Person",name:"Mike",givenName:"",familyName:"Koshatko",jobTitle:"CEO",sameAs:"https://www.linkedin.com/in/mike-koshatko-2b538a54/"},url:"".concat("https://portal.ofirio.com","/"),description:"Browse real estate and homes for sale available on Ofirio. Search by city or post code, compare rentals and find your perfect new home.",sameAs:["https://www.facebook.com/ofirio.official/","https://www.instagram.com/ofirio.official/","https://www.youtube.com/channel/UCrDHpDOIN6KAAsw5tKtsPNw","https://www.google.com/maps/place/Ofirio/@45.1575501,-128.1448585,3z/data=!4m5!3m4!1s0x0:0x5d7716161fed9fa7!8m2!3d45.1575501!4d-128.1448585"],address:{"@type":"PostalAddress",addressRegion:"FL",postalCode:"33162",addressCountry:"USA",addressLocality:"Miami",streetAddress:"2035 NE 151st St"},email:"help@ofirio.com",image:"".concat("https://portal.ofirio.com","/images/common/find-investment-header-bg.png"),logo:"".concat("https://portal.ofirio.com","/svgo/logo-full.svg"),telephone:"+1 888-550-5978",areaServed:{"@type":"geoShape",addressCountry:"US"}}},50259:function(e,t,n){"use strict";n.d(t,{pm:function(){return u},xX:function(){return d}});var r=n(67294),o=n(34155),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var s,i=function(e,t){(function(e){var t;e?function(e){if(e)for(;e.lastChild;)e.lastChild.remove()}("string"==typeof e?document.getElementById(e):e):(t=document.querySelector(".grecaptcha-badge"))&&t.parentNode&&document.body.removeChild(t.parentNode)})(t),window.___grecaptcha_cfg=void 0;var n=document.querySelector("#"+e);n&&n.remove(),function(){var e=document.querySelector('script[src^="https://www.gstatic.com/recaptcha/releases"]');e&&e.remove()}()},l=function(e){"undefined"!=typeof o&&o.env,console.warn(e)};!function(e){e.SCRIPT_NOT_AVAILABLE="Recaptcha script is not available"}(s||(s={}));var c=(0,r.createContext)({executeRecaptcha:function(){throw Error("GoogleReCaptcha Context has not yet been implemented, if you are using useGoogleReCaptcha hook, make sure the hook is called inside component wrapped by GoogleRecaptchaProvider")}});c.Consumer;function u(e){var t=e.reCaptchaKey,n=e.useEnterprise,o=void 0!==n&&n,u=e.useRecaptchaNet,d=void 0!==u&&u,p=e.scriptProps,m=e.language,f=e.container,h=e.children,y=(0,r.useState)(null),g=y[0],x=y[1],v=(0,r.useRef)(t),b=JSON.stringify(p),w=JSON.stringify(null==f?void 0:f.parameters);(0,r.useEffect)((function(){if(t){var e=(null==p?void 0:p.id)||"google-recaptcha-v3",n=(null==p?void 0:p.onLoadCallbackName)||"onRecaptchaLoadCallback";return window[n]=function(){var e=o?window.grecaptcha.enterprise:window.grecaptcha,n=a({badge:"inline",size:"invisible",sitekey:t},(null==f?void 0:f.parameters)||{});v.current=e.render(null==f?void 0:f.element,n)},function(e){var t=e.render,n=e.onLoadCallbackName,r=e.language,o=e.onLoad,a=e.useRecaptchaNet,s=e.useEnterprise,i=e.scriptProps,l=void 0===i?{}:i,c=l.nonce,u=void 0===c?"":c,d=l.defer,p=void 0!==d&&d,m=l.async,f=void 0!==m&&m,h=l.id,y=void 0===h?"":h,g=l.appendTo,x=y||"google-recaptcha-v3";if(function(e){return!!document.querySelector("#"+e)}(x))o();else{var v=function(e){return"https://www."+(e.useRecaptchaNet?"recaptcha.net":"google.com")+"/recaptcha/"+(e.useEnterprise?"enterprise.js":"api.js")}({useEnterprise:s,useRecaptchaNet:a}),b=document.createElement("script");b.id=x,b.src=v+"?render="+t+("explicit"===t?"&onload="+n:"")+(r?"&hl="+r:""),u&&(b.nonce=u),b.defer=!!p,b.async=!!f,b.onload=o,("body"===g?document.body:document.getElementsByTagName("head")[0]).appendChild(b)}}({render:(null==f?void 0:f.element)?"explicit":t,onLoadCallbackName:n,useEnterprise:o,useRecaptchaNet:d,scriptProps:p,language:m,onLoad:function(){if(window&&window.grecaptcha){var e=o?window.grecaptcha.enterprise:window.grecaptcha;e.ready((function(){x(e)}))}else l("<GoogleRecaptchaProvider /> "+s.SCRIPT_NOT_AVAILABLE)},onError:function(){l("Error loading google recaptcha script")}}),function(){i(e,null==f?void 0:f.element)}}l("<GoogleReCaptchaProvider /> recaptcha key not provided")}),[o,d,b,w,m,t,null==f?void 0:f.element]);var j=(0,r.useCallback)((function(e){if(!g||!g.execute)throw new Error("<GoogleReCaptchaProvider /> Google Recaptcha has not been loaded");return g.execute(v.current,{action:e})}),[g,v]),N=(0,r.useMemo)((function(){return{executeRecaptcha:g?j:void 0,container:null==f?void 0:f.element}}),[j,g,null==f?void 0:f.element]);return r.createElement(c.Provider,{value:N},h)}var d=function(){return(0,r.useContext)(c)};function p(e,t){return e(t={exports:{}},t.exports),t.exports}var m="function"==typeof Symbol&&Symbol.for,f=m?Symbol.for("react.element"):60103,h=m?Symbol.for("react.portal"):60106,y=m?Symbol.for("react.fragment"):60107,g=m?Symbol.for("react.strict_mode"):60108,x=m?Symbol.for("react.profiler"):60114,v=m?Symbol.for("react.provider"):60109,b=m?Symbol.for("react.context"):60110,w=m?Symbol.for("react.async_mode"):60111,j=m?Symbol.for("react.concurrent_mode"):60111,N=m?Symbol.for("react.forward_ref"):60112,C=m?Symbol.for("react.suspense"):60113,k=m?Symbol.for("react.suspense_list"):60120,S=m?Symbol.for("react.memo"):60115,P=m?Symbol.for("react.lazy"):60116,O=m?Symbol.for("react.block"):60121,E=m?Symbol.for("react.fundamental"):60117,A=m?Symbol.for("react.responder"):60118,_=m?Symbol.for("react.scope"):60119;function M(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case f:switch(e=e.type){case w:case j:case y:case x:case g:case C:return e;default:switch(e=e&&e.$$typeof){case b:case N:case P:case S:case v:return e;default:return t}}case h:return t}}}function R(e){return M(e)===j}var L={AsyncMode:w,ConcurrentMode:j,ContextConsumer:b,ContextProvider:v,Element:f,ForwardRef:N,Fragment:y,Lazy:P,Memo:S,Portal:h,Profiler:x,StrictMode:g,Suspense:C,isAsyncMode:function(e){return R(e)||M(e)===w},isConcurrentMode:R,isContextConsumer:function(e){return M(e)===b},isContextProvider:function(e){return M(e)===v},isElement:function(e){return"object"==typeof e&&null!==e&&e.$$typeof===f},isForwardRef:function(e){return M(e)===N},isFragment:function(e){return M(e)===y},isLazy:function(e){return M(e)===P},isMemo:function(e){return M(e)===S},isPortal:function(e){return M(e)===h},isProfiler:function(e){return M(e)===x},isStrictMode:function(e){return M(e)===g},isSuspense:function(e){return M(e)===C},isValidElementType:function(e){return"string"==typeof e||"function"==typeof e||e===y||e===j||e===x||e===g||e===C||e===k||"object"==typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===S||e.$$typeof===v||e.$$typeof===b||e.$$typeof===N||e.$$typeof===E||e.$$typeof===A||e.$$typeof===_||e.$$typeof===O)},typeOf:M},T=p((function(e,t){})),$=(T.AsyncMode,T.ConcurrentMode,T.ContextConsumer,T.ContextProvider,T.Element,T.ForwardRef,T.Fragment,T.Lazy,T.Memo,T.Portal,T.Profiler,T.StrictMode,T.Suspense,T.isAsyncMode,T.isConcurrentMode,T.isContextConsumer,T.isContextProvider,T.isElement,T.isForwardRef,T.isFragment,T.isLazy,T.isMemo,T.isPortal,T.isProfiler,T.isStrictMode,T.isSuspense,T.isValidElementType,T.typeOf,p((function(e){e.exports=L}))),F={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},q={};q[$.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},q[$.Memo]=F;Object.defineProperty,Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype}},function(e){e.O(0,[5675,508,9774,2888,179],(function(){return t=84407,e(e.s=t);var t}));var t=e.O();_N_E=t}]);