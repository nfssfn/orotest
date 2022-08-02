"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{34726:function(e,t,n){n.d(t,{F:function(){return y}});var r=n(47568),a=n(34051),s=n.n(a),l=n(85893),i=n(67294),o=n(11163),u=n(29323),c=n(53343),d=n(94184),m=n.n(d),p=n(23754),h=n(89262),x=n(94201),f=n(68921),g=n(26793),v=(0,u.Pi)((function(e){var t=e.control,n=e.onSuggest;return t?(0,l.jsx)("div",{className:"border-b flex",children:t.enum.map((function(e,r){return(0,l.jsxs)("label",{className:"relative cursor-pointer select-none flex-1",htmlFor:"search-type-radio-".concat(r),children:[(0,l.jsx)("input",{type:"radio",name:t.name,checked:e.value===t.rawValue.value,onChange:function(){t.setValue(e.value),n()},className:"peer absolute w-0 h-0 opacity-0",id:"search-type-radio-".concat(r)}),(0,l.jsx)("div",{className:"p-3 relative text-center peer-checked:bg-gradient-green peer-checked:text-gray-darkest hover:text-gray-darkest text-gray transition-colors border-b-[3px] border-transparent peer-checked:border-green hover:border-gray-light",children:(0,l.jsx)("span",{className:"font-bold",children:e.label})})]},r)}))}):(0,l.jsx)(x.UDivider,{styleMargin:0})})),b=function(e){var t,n,r=e.inputRef,a=e.suggestions,s=e.onClear,i=e.onSelect,o=e.highlitedIndex;return(0,l.jsxs)("div",{children:[(null===(t=r.current)||void 0===t?void 0:t.value.length)<1&&a.length>0&&(0,l.jsxs)("div",{className:"p-4 pb-2 flex justify-between items-center text-tiny font-semibold text-gray",children:[(0,l.jsx)("span",{children:"Latest searches"}),(0,l.jsx)(p.g,{style:"btn-text-gray-light",onClick:s,className:"underline",children:"Clear"})]}),a.length<1&&(null===(n=r.current)||void 0===n?void 0:n.value.length)<3&&(0,l.jsx)("div",{className:"py-3 px-4 text-tiny",children:"Please type at least 3 characters"}),(0,l.jsx)("div",{children:a.map((function(e,t){return(0,l.jsxs)("div",{onClick:function(){return i(e)},role:"button",tabIndex:0,className:"py-2 px-4 group flex items-center gap-2.5 ".concat(o===t?"bg-gray-lightest":""),children:[(0,l.jsx)("span",{className:"text-sm uppercase text-gray font-semibold",children:e.type}),(0,l.jsx)("span",{className:"transition-colors group-hover:text-blue flex-1",children:e.label}),e.filters>0&&(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(h.Q,{name:"adjustments",width:16,height:16,className:"fill-blue"}),(0,l.jsx)("span",{className:"bg-blue text-sm text-center text-white rounded-full min-w-[18px] h-[18px] leading-[18px]",children:e.filters})]})]},t)}))})]})},y=(0,u.Pi)((function(e){var t,n=function(){T(!R),Z(null)},a=function(e){O.current.value=e.label,n(),V(null),j(e)},u=function(e){R&&($.length>0&&(O.current.blur(),a($[null!==B&&void 0!==B?B:0]),Z(null),T(!1)),e.stopPropagation(),e.preventDefault())},d=e.SearchButton,x=e.loadSearches,y=e.clearSearches,w=e.suggestSearches,j=e.onSearch,N=e.control,S=e.className,k=e.wrapperStyles,C=(0,o.useRouter)(),P=(0,i.useState)(null),E=P[0],V=P[1],I=f.lC.value.get()<f.lC.enum.sm,O=(0,i.useRef)(null),_=(0,i.useRef)(null),Q=(0,i.useState)(!1),R=Q[0],T=Q[1],L=(0,i.useState)([]),$=L[0],F=L[1],A=(0,i.useState)(null),B=A[0],Z=A[1],z=(0,i.useState)(0),M=z[0],D=z[1];function q(){return H.apply(this,arguments)}function H(){return(H=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z(null),!(O.current.value.length<1)){e.next=4;break}return F(x()),e.abrupt("return");case 4:return e.next=6,w(O.current.value);case 6:t=e.sent,F(t);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,i.useEffect)((function(){var e=C.asPath;e.indexOf("?viewport=")>0&&(O.current.value=""),0===e.indexOf("/p/")&&(O.current.value=""),0!==e.indexOf("/buy/")&&0!==e.indexOf("/rent/")&&0!==e.indexOf("/invest/")||0!==(null===E||void 0===E?void 0:E.indexOf("/p/"))||(O.current.value=""),0!==(null===E||void 0===E?void 0:E.indexOf("/buy/"))&&0!==(null===E||void 0===E?void 0:E.indexOf("/rent/"))&&0!==(null===E||void 0===E?void 0:E.indexOf("/invest/"))||E===e||(O.current.value=""),V(C.asPath)}),[C.query]),(0,i.useEffect)((function(){I&&(R?(D(document.documentElement.scrollTop),setTimeout((function(){document.documentElement.scrollTop=0}),100)):document.documentElement.scrollTop=M)}),[R]),(0,i.useEffect)((function(){if(R&&I)return g.H.lock()}),[R]),(0,i.useEffect)((function(){var e=function(e){R&&_.current&&!_.current.contains(e.target)&&(e.stopPropagation(),n())};if(!I)return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[R]);var U=(0,i.useMemo)((function(){return(0,c.P)({delay:500,trailing:!0},q)}),[q]);return(0,l.jsxs)("div",{ref:_,className:m()(S,"relative",{"z-[10015] sm:z-[10000]":R}),children:[(0,l.jsxs)("div",{className:m()("flex items-center gap-2 sm:gap-4 rounded cursor-text border border-transparent bg-gray-100 z-[9999] bg-gray-100 sm:relative",k,{"bg-white fixed sm:static top-0 left-0 w-full h-[56px] sm:h-auto pl-12 sm:pl-2.5":R,"!h-[60px] !max-h-full":R&&I}),onClick:function(){return O.current.focus()},role:"textbox",tabIndex:0,children:[(0,l.jsx)("input",{className:"focus:outline-none w-full bg-transparent placeholder-gray-dark font-semibold placeholder-shown:font-medium",onFocus:function(){T(!0),O.current.value.length<1&&q(),setTimeout((function(){O.current.value.length>0&&I&&O.current.select()}),10)},onChange:U,onKeyDown:function(e){"Enter"===e.code?$.length>0&&(O.current.blur(),a($[null!==B&&void 0!==B?B:0])):"ArrowUp"===e.code?(null!==B&&0!==B||Z($.length-1),null!==B&&B>0&&Z(B-1)):"ArrowDown"===e.code&&(null===B||B===$.length-1?Z(0):Z(B+1))},placeholder:"City, Address, Zip, or MLS #",type:"text",autoComplete:"autocomplete-search",ref:O}),(null===O||void 0===O||null===(t=O.current)||void 0===t?void 0:t.value.length)>0&&R&&(0,l.jsx)(p.g,{style:"btn-icon",onClick:function(){O.current.value=""},children:(0,l.jsx)(h.Q,{name:"cross",className:"fill-current"})}),void 0===d||I&&R?(0,l.jsx)(p.g,{style:"btn-icon",className:"p-1",onClick:u,children:(0,l.jsx)(h.Q,{name:"magnifier",width:14,height:14})}):(0,l.jsx)(d,{onClick:u})]}),I&&R&&(0,l.jsx)(p.g,{style:"btn-icon",className:"fixed top-5 left-5 !z-[10005]",onClick:n,children:(0,l.jsx)(h.Q,{name:"arrow",className:" rotate-90",width:20,height:20})}),(0,l.jsxs)("div",{className:m()("fixed sm:absolute sm:rounded z-[9998] w-screen h-screen sm:w-full sm:h-auto bg-white w-full top-0 left-0 pt-[60px] transition-visibility-opacity-transform duration-300 bg-gray-100 border-transparent shadow-md bg-white border border-gray-darkest/10",N?"sm:pt-[40px] mde:pt-[50px]":"sm:pt-[50px] md:pt-[70px]",{"invisible opacity-0 sm:-translate-y-10 sm:rotate-x-20":!R}),children:[(0,l.jsx)(v,{control:N,onSuggest:q}),(0,l.jsx)(b,{inputRef:O,suggestions:$,onClear:function(){y(),F([])},onSelect:function(e){return a(e)},highlitedIndex:B})]})]})}))},70508:function(e,t,n){n.d(t,{A:function(){return S}});var r=n(47568),a=n(26042),s=n(69396),l=n(34051),i=n.n(l),o=n(85893),u=n(67294),c=n(11163),d=n(29323),m=n(45697),p=n.n(m),h=n(67564),x=n(23754),f=n(89262),g=n(34726),v=n(49385),b=n(42355),y=n(68921),w=n(87025),j=n(71546),N=(0,d.Pi)((function(e){var t=y.lC.value.get()<y.lC.enum.md;return(0,o.jsx)(x.g,(0,s.Z)((0,a.Z)({style:"btn-green-dark",className:t?"min-w-[36px] min-h-[36px] p-0":"min-w-[200px] h-full"},e),{children:t?(0,o.jsx)(f.Q,{name:"magnifier",width:16,height:16,className:"fill-white"}):"Search"}))})),S=function(e){var t,n=e.wavePosition,a=e.background,s=e.title,l=e.subtitle,d=(0,c.useRouter)(),m=(0,w.Xg)(),p=(0,u.useState)(new v.f("search-type",{enum:[{label:"Buy",value:"buy",apiValue:"buy-prop",localStorage:j.B.buy,href:"/"},{label:"Rent",value:"rent",apiValue:"rent-prop",localStorage:j.B.rent,href:"/homes-for-rent"},{label:"Invest",value:"invest",apiValue:"invest-prop",localStorage:j.B.invest,href:"/investment-properties"},{label:"Rent Estimator",value:"rent-estimator",href:"/rent-estimator"}],initialEnumIndex:null!==(t={"/":0,"/homes-for-rent":1,"/investment-properties":2}[d.route])&&void 0!==t?t:0,defaultEnumIndex:0,type:"radio"}))[0];return(0,o.jsxs)(h.m,{className:"text-center",background:null!==a&&void 0!==a?a:"find-investment",wavePosition:n,children:[(0,o.jsxs)("div",{className:"relative",children:["bottom"===n?(0,o.jsx)("h1",{children:s}):(0,o.jsx)("span",{className:"block text-4xl sm:text-5xl font-extrabold",children:s}),(0,o.jsx)("span",{className:"block text-xl font-semibold my-6",children:l}),(0,o.jsx)(f.Q,{name:"rounded-arrow",className:"absolute hidden sm:block sm:-bottom-12 sm:-left-16 xl:-bottom-20 xl:left-24 2xl:left-56"})]}),(0,o.jsx)(b.r,{control:p,style:"green",className:"mx-auto p-1",labelStyles:"!py-1.5 md:!py-2.5"}),(0,o.jsx)(g.F,{className:"lg:max-w-[900px] mx-auto mt-5 !text-left text-gray-darkest",wrapperStyles:"h-[50px] max-h-13 md:h-[70px] md:max-h-[70px] bg-white p-2.5 md:p-2.5",SearchButton:N,loadSearches:function(){return m.loadSearches(p.rawValue.value)},clearSearches:function(){return m.clearSearches(p.rawValue.value)},suggestSearches:function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.suggestSearches(t,p.rawValue.apiValue));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onSearch:function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",m.onSearch(t,p.rawValue.value));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),(0,o.jsxs)("div",{className:"mt-6",children:[(0,o.jsx)(f.Q,{name:"ai-powered",className:"inline-block mr-1.5"}),(0,o.jsx)("span",{className:"uppercase text-sm font-bold opacity-70 select-none",children:"AI Powered"})]})]})};S.propTypes={wavePosition:p().string,background:p().string,title:p().string,subtitle:p().string},S.defaultProps={wavePosition:"bottom",background:void 0,title:"Find an Investment Property in Seconds",subtitle:"AI-powered solution to help you easily find the best deals"}},67564:function(e,t,n){n.d(t,{m:function(){return p}});var r=n(85893),a=n(45697),s=n.n(a),l=n(67294),i=n(25675),o=n.n(i),u=n(94184),c=n.n(u),d=n(89262),m={"find-investment":"/images/common/find-investment-header-bg.png","main-buy-header":"/images/common/main-buy-header-bg.png","main-buy-footer":"/images/common/main-buy-footer-bg.png","how-it-works":"/images/how-it-works/header-bg.png","about-us":"/images/about-us/header-bg.png","contact-us":"/images/contact-us/header-bg.png",rent:"/images/common/rent.png"},p=function(e){var t=e.wavePosition,n=e.className,a=e.background,s=e.children,i=(0,l.useMemo)((function(){return"bottom"===t?"!bottom-0":"!top-0 rotate-180"}),[t]),u=(0,l.useMemo)((function(){return"bottom"===t?"!bottom-[-0.5px]":"!top-[-0.5px]"}),[t]);return(0,r.jsxs)("div",{className:c()("relative text-white py-[10vh] bg-gray-500 sm:py-[15vh] bg-center bg-cover [&_div>h1]:text-4xl [&_div>h1]:sm:text-5xl [&_div>h1]:font-extrabold [&_div>h1]:sm:mb-6 [&_div>p]:text-xl [&_div>p]:font-semibold",n),children:[(0,r.jsx)(o(),{src:m[a],alt:"".concat(a,"-background-image"),layout:"fill",draggable:!1,objectFit:"cover",priority:"bottom"===t}),(0,r.jsx)(d.Q,{name:"wavy-line",className:c()("absolute min-h-0 h-auto inset-auto select-none",i)}),(0,r.jsx)("div",{className:c()("absolute w-full h-[1px] bg-white",u)}),(0,r.jsx)("div",{className:"wrapper",children:s})]})};p.propTypes={className:s().string,wavePosition:s().string},p.defaultProps={wavePosition:"bottom",className:""}},42355:function(e,t,n){n.d(t,{r:function(){return f}});var r=n(85893),a=n(45697),s=n.n(a),l=n(67294),i=n(29323),o=n(41664),u=n.n(o),c=n(94184),d=n.n(c),m=n(68921),p=n(49385),h=n(89262),x=function(e){var t=e.href,n=e.children;return t?(0,r.jsx)(u(),{href:t,passHref:!0,children:(0,r.jsx)("a",{children:n})}):n},f=(0,i.Pi)((function(e){var t=e.control,n=e.style,a=e.className,s=e.labelStyles,i=e.iconStyles,o=e.spanLabelStyles,u=m.lC.value.get()<m.lC.enum.sm,c=(0,l.useId)();return(0,r.jsx)("div",{className:d()("flex justify-start w-max rounded overflow-hidden bg-gray-100",a,{"opacity-50":t.disabled}),children:t.enum.map((function(e,a){var l,m,p,f,g=c+a;return(0,r.jsx)(x,{href:e.href,children:(0,r.jsxs)("label",{className:d()("gap-x-3 px-2 sm:px-5 py-3 cursor-pointer select-none rounded transition-colors duration-200 hover:bg-gray-200 text-gray hover:text-gray-darkest text-tiny font-semibold flex justify-center whitespace-nowrap",{"!bg-blue !text-white":e.$id===t.rawValue.$id},{"!bg-green-dark":e.$id===t.rawValue.$id&&"green"===n},{"cursor-not-allowed hover:!text-gray hover:bg-gray-100":t.disabled},{"hover:bg-blue hover:!text-white":e.$id===t.rawValue.$id&&t.disabled},s),htmlFor:g,title:null!==(l=e.label)&&void 0!==l?l:e.value,children:[e.icon?(0,r.jsx)(h.Q,{name:e.icon,className:d()("fill-current",i),width:20,height:20}):void 0,(0,r.jsx)("input",{type:"radio",id:g,name:t.name,className:"absolute w-0 h-0 invisible",checked:e.$id===t.rawValue.$id,disabled:t.disabled,onChange:function(){return t.setValue(e.value)}}),(0,r.jsx)("span",{className:o,children:u?null!==(p=null!==(m=e.mobileLabel)&&void 0!==m?m:e.label)&&void 0!==p?p:e.value:null!==(f=e.label)&&void 0!==f?f:e.value})]})},a)}))})}));f.propTypes={control:s().oneOfType([s().instanceOf(p.f)]).isRequired,style:s().string,className:s().string,labelStyles:s().string,spanLabelStyles:s().string,iconStyles:s().string},f.defaultProps={style:"default",className:"",labelStyles:"",spanLabelStyles:"",iconStyles:""}}}]);