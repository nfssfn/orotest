"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6809],{66809:function(e,t,n){n.r(t),n.d(t,{MaxHoa:function(){return c}});var l=n(85893),r=n(29323),a=n(46203),s=n(58119),o=n(42355),i=n(13539),u=n(88136),c=(0,r.Pi)((function(){var e=(0,a.Rp)();return e.formModel?(0,l.jsx)(s.d,{label:"Max HOA",opened:!0,children:(0,l.jsxs)("div",{className:"pt-5",children:[(0,l.jsx)(o.r,{control:e.formModel.controls.maxHoa,className:"!w-full",labelStyles:"flex-1"}),2===e.formModel.controls.maxHoa.rawValue.$id&&(0,l.jsx)(i.w,{control:e.formModel.controls.chooseMaxHoa,prepend:"Max",prefix:"$",flexible:!0,alignInput:"right",className:"!w-full my-5 !h-11"}),0!==e.formModel.controls.maxHoa.rawValue.$id&&(0,l.jsx)(u.b,{control:e.formModel.controls.showIncolmpleteHoa,label:"Show Homes with Incomplete HOA Data",value:"incomplete_hoa",className:"mt-5"})]})}):null}))},58119:function(e,t,n){n.d(t,{d:function(){return c}});var l=n(85893),r=n(67294),a=n(45697),s=n.n(a),o=n(94184),i=n.n(o),u=n(89262),c=function(e){var t=e.label,n=e.labelElement,a=e.opened,s=e.className,o=e.labelStyles,u=e.children,c=(0,r.useRef)(null),d=(0,r.useState)(a),p=d[0],f=d[1],m=(0,r.useState)(a),x=m[0],h=m[1];return(0,r.useEffect)((function(){f(a)}),[a]),(0,r.useEffect)((function(){var e,t=c.current;return p?(t.setAttribute("style","max-height:"+t.scrollHeight+"px;display:block"),e=function(){return t.setAttribute("style","max-height:none;overflow:visible")},t.addEventListener("transitionend",e),function(){return t.removeEventListener("transitionend",e)}):x?(t.setAttribute("style","max-height: "+t.scrollHeight+"px"),e=setTimeout((function(){return t.setAttribute("style","max-height: 0px")}),50),function(){return clearTimeout(e)}):h(!0)}),[p]),(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("div",{className:i()("relative flex justify-between items-center cursor-pointer select-none font-bold transition-colors duration-300 hover:text-blue [&_svg]:transition-transform [&_svg]:rotate-180 [&_svg]:duration-300 [&_svg]:fill-current",{"[&_svg]:rotate-0":p},o),role:"button",tabIndex:0,onClick:function(){return f(!p)},children:n(p,t)}),(0,l.jsx)("div",{className:i()("opacity-0 max-h-0 overflow-hidden transition-opacity-max-height duration-200",{"opacity-100":p}),ref:c,children:u})]})};c.propTypes={label:s().string,labelElement:s().func,opened:s().bool,className:s().string,labelStyles:s().string},c.defaultProps={label:"",labelElement:function(e,t){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"mr-2",children:t}),(0,l.jsx)(u.Q,{name:"smooth-arrow",width:12,height:12})]})},opened:!1,className:"",labelStyles:""}},42355:function(e,t,n){n.d(t,{r:function(){return h}});var l=n(85893),r=n(45697),a=n.n(r),s=n(67294),o=n(29323),i=n(41664),u=n.n(i),c=n(94184),d=n.n(c),p=n(68921),f=n(49385),m=n(89262),x=function(e){var t=e.href,n=e.children;return t?(0,l.jsx)(u(),{href:t,passHref:!0,children:(0,l.jsx)("a",{children:n})}):n},h=(0,o.Pi)((function(e){var t=e.control,n=e.style,r=e.className,a=e.labelStyles,o=e.iconStyles,i=e.spanLabelStyles,u=p.lC.value.get()<p.lC.enum.sm,c=(0,s.useId)();return(0,l.jsx)("div",{className:d()("flex justify-start w-max rounded overflow-hidden bg-gray-100",r,{"opacity-50":t.disabled}),children:t.enum.map((function(e,r){var s,p,f,h,b=c+r;return(0,l.jsx)(x,{href:e.href,children:(0,l.jsxs)("label",{className:d()("gap-x-3 px-2 sm:px-5 py-3 cursor-pointer select-none rounded transition-colors duration-200 hover:bg-gray-200 text-gray hover:text-gray-darkest text-tiny font-semibold flex justify-center whitespace-nowrap",{"!bg-blue !text-white":e.$id===t.rawValue.$id},{"!bg-green-dark":e.$id===t.rawValue.$id&&"green"===n},{"cursor-not-allowed hover:!text-gray hover:bg-gray-100":t.disabled},{"hover:bg-blue hover:!text-white":e.$id===t.rawValue.$id&&t.disabled},a),htmlFor:b,title:null!==(s=e.label)&&void 0!==s?s:e.value,children:[e.icon?(0,l.jsx)(m.Q,{name:e.icon,className:d()("fill-current",o),width:20,height:20}):void 0,(0,l.jsx)("input",{type:"radio",id:b,name:t.name,className:"absolute w-0 h-0 invisible",checked:e.$id===t.rawValue.$id,disabled:t.disabled,onChange:function(){return t.setValue(e.value)}}),(0,l.jsx)("span",{className:i,children:u?null!==(f=null!==(p=e.mobileLabel)&&void 0!==p?p:e.label)&&void 0!==f?f:e.value:null!==(h=e.label)&&void 0!==h?h:e.value})]})},r)}))})}));h.propTypes={control:a().oneOfType([a().instanceOf(f.f)]).isRequired,style:a().string,className:a().string,labelStyles:a().string,spanLabelStyles:a().string,iconStyles:a().string},h.defaultProps={style:"default",className:"",labelStyles:"",spanLabelStyles:"",iconStyles:""}},13539:function(e,t,n){n.d(t,{w:function(){return x}});var l=n(26042),r=n(69396),a=n(99534),s=n(85893),o=n(29323),i=n(67294),u=n(94184),c=n.n(u),d=n(45697),p=n.n(d),f=n(20129),m=n(69345),x=(0,o.Pi)((function(e){var t=e.control,n=e.wrapperStyles,o=e.flexible,u=e.jitter,d=e.prepend,p=e.postpend,f=e.prefix,x=e.postfix,h=e.alignInput,b=e.vertical,y=e.placeholder,v=e.onChange,g=e.className,w=e.onKeyPress,j=(0,a.Z)(e,["control","wrapperStyles","flexible","jitter","prepend","postpend","prefix","postfix","alignInput","vertical","placeholder","onChange","className","onKeyPress"]),N=(0,i.useRef)(null),S=(0,m.P)(N,t,u),k=S.isFocused,C=S.internalValue,E=S.setInternalValue,I=S.onFocus,M=S.focus,H=S.onBlur;(0,i.useEffect)((function(){N&&N.current&&(N.current.value!==C&&(N.current.value="number"===t.type&&"number"===typeof C?parseFloat(parseFloat(C).toPrecision(5)):C),N.current.parentElement.setAttribute("data-value",""!==N.current.value?N.current.value:t.value))}),[C]);var _,P=(0,i.useId)(),$=(0,i.useCallback)((function(e){"number"===t.type&&["+","e"].includes(e.key)&&e.preventDefault(),w&&w(e)}),[t.type,w]),O=(0,i.useMemo)((function(){return"number"===t.type?{inputMode:"decimal",pattern:"[0-9]*"}:{}}),[t.type]),V=(0,i.useMemo)((function(){return"number"===t.type?k?"number":"text":null!==(e=t.type)&&void 0!==e?e:"text";var e}),[t.type,k]),A=(0,i.useCallback)((function(e){E(e.target.value),setTimeout((function(){if(void 0!==v)return v(e)}),10)}),[v]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:c()(n,g,"h-10 p-2 relative w-full max-w-full rounded border border-gray-lightest transition-colors flex content-center items-center justify-start",{"text-gray-dark":t.readonly,"bg-gray-lightest text-gray-dark":t.disabled,"w-[fit-content]":o,"flex-col h-auto":b,"border-gray-dark":k&&!t.readonly,"border-error":t.hasError&&t.ditry}),disabled:t.disabled,readOnly:t.readonly,onClick:function(){return!t.disabled&&M()},role:"cell",children:[void 0!==d&&(0,s.jsx)("span",{className:c()("flex whitespace-nowrap flex-none pr-1 text-gray-dark text-sm md:text-tiny",{"!pr-0 pb-2 w-full":b}),children:d}),(0,s.jsxs)("div",{className:c()("flex w-full items-stretch content-center h-full",{"flex flex-grow-0":o,"w-full":b,"justify-end":"right"===h,"justify-start":"left"===h,"justify-center":"center"===h}),children:[void 0!==f&&(0,s.jsx)("span",{className:c()("flex whitespace-nowrap flex-none pr-0.5 font-bold self-center"),children:f}),(0,s.jsxs)("div",{className:c()("font-bold w-full relative",{"after:overflow-hidden after:pr-[1px] after:whitespace-pre after:invisible after:content-[attr(data-value)] inline-grid align-top items-center w-auto after:w-auto after:min-w-[3px] after:max-w-full after:m-0 after:bg-none after:border-none after:p-0":o}),children:[!t.name.startsWith("input__")&&(0,s.jsx)("input",{tabIndex:-1,"aria-hidden":"true",className:"invisible absolute top-0 left-0 max-w-full",name:t.name,autoComplete:"off"}),(0,s.jsx)("input",(0,r.Z)((0,l.Z)({autoComplete:"off",size:1,id:P,className:c()("min-w-[3px] max-w-full m-0 bg-none border-none p-0 bg-transparent appearance-none absolute top-0 left-0 h-full w-full focus:outline-none focus:border-none placeholder:font-medium"),style:{textAlign:null!==h&&void 0!==h?h:"left"},type:V,name:null!==(_=t.name)&&void 0!==_?_:P,readOnly:t.readonly,disabled:t.disabled,step:"percent"===t.subtype?100*t.step:t.step,min:"percent"===t.subtype?100*t.min:t.min,max:"percent"===t.subtype?100*t.max:t.max,placeholder:y,onFocus:I,onBlur:H,onChange:A,onInput:function(e){A(e)},onKeyPress:function(e){return $(e)}},O,j),{ref:N}))]}),void 0!==x&&(0,s.jsx)("span",{className:c()("flex whitespace-nowrap flex-none pl-0.5 font-bold self-center"),children:x})]}),void 0!==p&&(0,s.jsx)("span",{className:c()("flex whitespace-nowrap flex-none pl-1 text-gray-dark text-sm md:text-tiny",{"!pl-0 pt-2 w-full":b}),children:p})]}),t.hasError&&t.dirty&&(0,s.jsx)("span",{className:"block mt-1 whitespace-nowrap overflow-hidden overflow-ellipsis text-error text-tiny font-semibold pl-3",children:t.getError})]})}));x.propTypes={control:p().oneOfType([p().instanceOf(f.N)]).isRequired,wrapperStyles:p().string,flexible:p().bool,jitter:p().object,prepend:p().string,postpend:p().string,prefix:p().string,postfix:p().string,placeholder:p().string,vertical:p().bool,onChange:p().func,alignInput:p().oneOf(["left","right","center"]),className:p().string},x.defaultProps={wrapperStyles:"",flexible:!1,jitter:{type:"debounce"},prepend:void 0,postpend:void 0,prefix:void 0,postfix:void 0,vertical:!1,placeholder:"",onChange:void 0,alignInput:"left",className:""}}}]);