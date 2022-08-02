"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2627],{2627:function(e,t,r){r.r(t),r.d(t,{YearBuilt:function(){return u}});var n=r(85893),l=r(29323),a=r(46203),i=r(58119),o=r(69858),s=r(13539),u=(0,l.Pi)((function(){var e=(0,a.Rp)();return e.formModel?(0,n.jsxs)(i.d,{label:"Year Built",opened:!0,children:[(0,n.jsx)(o.o,{control:e.formModel.controls.yearBuilt,jitter:{type:"reactive"},className:"py-10"}),(0,n.jsxs)("div",{className:"flex items-center gap-2 pb-3",children:[(0,n.jsx)(s.w,{control:e.formModel.controls.yearBuiltMin,prepend:"Min",flexible:!0,alignInput:"right",className:"!w-full !h-11"}),(0,n.jsx)("span",{className:"text-xs text-gray-dark uppercase",children:"to"}),(0,n.jsx)(s.w,{control:e.formModel.controls.yearBuiltMax,prepend:"Max",flexible:!0,alignInput:"right",className:"!w-full !h-11"})]})]}):null}))},58119:function(e,t,r){r.d(t,{d:function(){return f}});var n=r(85893),l=r(67294),a=r(45697),i=r.n(a),o=r(94184),s=r.n(o),u=r(89262),f=function(e){var t=e.label,r=e.labelElement,a=e.opened,i=e.className,o=e.labelStyles,u=e.children,f=(0,l.useRef)(null),c=(0,l.useState)(a),d=c[0],p=c[1],b=(0,l.useState)(a),m=b[0],v=b[1];return(0,l.useEffect)((function(){p(a)}),[a]),(0,l.useEffect)((function(){var e,t=f.current;return d?(t.setAttribute("style","max-height:"+t.scrollHeight+"px;display:block"),e=function(){return t.setAttribute("style","max-height:none;overflow:visible")},t.addEventListener("transitionend",e),function(){return t.removeEventListener("transitionend",e)}):m?(t.setAttribute("style","max-height: "+t.scrollHeight+"px"),e=setTimeout((function(){return t.setAttribute("style","max-height: 0px")}),50),function(){return clearTimeout(e)}):v(!0)}),[d]),(0,n.jsxs)("div",{className:i,children:[(0,n.jsx)("div",{className:s()("relative flex justify-between items-center cursor-pointer select-none font-bold transition-colors duration-300 hover:text-blue [&_svg]:transition-transform [&_svg]:rotate-180 [&_svg]:duration-300 [&_svg]:fill-current",{"[&_svg]:rotate-0":d},o),role:"button",tabIndex:0,onClick:function(){return p(!d)},children:r(d,t)}),(0,n.jsx)("div",{className:s()("opacity-0 max-h-0 overflow-hidden transition-opacity-max-height duration-200",{"opacity-100":d}),ref:f,children:u})]})};f.propTypes={label:i().string,labelElement:i().func,opened:i().bool,className:i().string,labelStyles:i().string},f.defaultProps={label:"",labelElement:function(e,t){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"mr-2",children:t}),(0,n.jsx)(u.Q,{name:"smooth-arrow",width:12,height:12})]})},opened:!1,className:"",labelStyles:""}},69858:function(e,t,r){r.d(t,{o:function(){return v}});var n=r(85893),l=r(67294),a=r(94184),i=r.n(a),o=r(45697),s=r.n(o),u=r(74211),f=r(29323),c=r(20129),d=r(69345),p=1e3,b=function(e){return{target:"target [&_*]:target relative h-[5px] bg-gray-lightest rounded-full touch-none select-none box-border",base:"relative w-full h-full z-10",origin:"connect absolute top-0 left-0 right-auto w-full h-0 !z-10 will-change-transform origin-top-left",handle:i()("handle absolute -top-2.5 -right-3.5 w-6 h-6 rounded-full bg-blue active:bg-white active:after:bg-white border-[6px] border-white hover:border-blue-lightest active:border-blue transition-colors duration-200 shadow-slider-handle cursor-grab active:cursor-grabbing",{invisible:e.disabled,"visible !bg-gray-light active:border-blue-lightest !cursor-not-allowed":e.readonly}),touchArea:"w-full h-full",horizontal:"h-[18px]",connect:i()("connect absolute top-0 left-0 w-full h-full z-10 bg-blue will-change-transform origin-top-left",{"bg-gray-light":e.disabled||e.readonly}),connects:"relative w-full h-full overflow-hidden rounded-full",rtl:"rtl translate-x-1/2 translate-y-1/2",tap:"state-tap",valueHorizontal:"value-horizontal -translate-x-1/2 translate-y-1/2",valueSub:"text-xs text-gray-light"}},m=function(e){return Array.isArray(e)?e:[e]},v=(0,f.Pi)((function(e){var t=e.control,r=e.minOffset,a=e.maxOffset,o=e.ticks,s=e.tickAbsBuffer,f=e.jitter,c=e.className,v=(0,l.useRef)(null),h=(0,l.useState)(void 0),x=h[0],g=h[1],y=(0,l.useState)(!1),w=y[0],_=y[1],j=(0,l.useState)(!1),N=j[0],k=j[1],E=(0,d.P)(v,t,f).updateFn;return(0,l.useEffect)((function(){if(t&&!w){var e,n,l,i,f,c,d,h=function(e){var t=e.max-e.min;return function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abs";if("abs"===n)return[r,Math.round((r-e.min)/t*p)/p];if("pc"===n)return[Math.round((r*t+e.min)*p)/p,r];throw new Error("Cannot map values for the type: "+n)}}(t),x={min:null!==(e=t.min)&&void 0!==e?e:0,max:null!==(n=t.max)&&void 0!==n?n:100};o.map((function(e){var r=t.max-t.min;if(void 0!==e.absValue?e.__value=h(e.absValue,"abs"):e.__value=h(e.percValue,"pc"),e.__visualPercent=100*e.__value[1],void 0!==e.percBuffer)e.__buffer=h(e.percBuffer,"pc");else{var n=e.absBuffer||s;e.__buffer=[n,n/r]}var l=Math.abs(e.__value[0]-t.mapValueToSteps(e.__value[0]-e.__buffer[0])),a=Math.max(e.__buffer[0],l);return[{key:e.__value[1]-e.__buffer[1],value:[t.mapValueToSteps(e.__value[0]-e.__buffer[0]),a]},{key:e.__value[1],value:[e.__value[0],a]},{key:e.__value[1]+e.__buffer[1],value:[t.mapValueToSteps(e.__value[0]+e.__buffer[0]),t.step]}]})).flat().sort((function(e,t){return e.key-t.key})).filter((function(e,t,r){if(0===t)return!0;var n=r[t-1];return e.value[0]!==n.value[0]||(n.key=h(e.value[0],"abs")[1],!1)})).forEach((function(e){x[100*e.key+"%"]=e.value}));var y={start:m(null!==(f=null!==(i=null!==(l=t.rawValue)&&void 0!==l?l:t.defaultValue)&&void 0!==i?i:t.min)&&void 0!==f?f:0),step:null!==(c=t.step)&&void 0!==c?c:1,keyboardDefaultStep:null!==(d=t.step)&&void 0!==d?d:1,connect:t.rawValue&&t.rawValue.length>1?[!1,!0,!1]:[!0,!1],cssClasses:b(t),padding:[r,a],cssPrefix:"",range:x};"undefined"===typeof v.current.noUiSlider?g(u.create(v.current,y)):v.current.noUiSlider.updateOptions(y,!0),_(!0)}}),[t]),(0,l.useEffect)((function(){if(x){x.on("start",(function(){return k(!0)})),x.on("end",(function(){return k(!1)}));var e="blur"===f.type?"change":"slide";x.on(e,(function(e){var r=function(e){return 1===e.length?e[0]:e}(e.map((function(e){return+e})));E("number"===typeof r&&"percent"===t.subtype?100*r:r)}))}}),[x]),(0,l.useEffect)((function(){v.current&&(t.disabled?v.current.setAttribute("disabled",!0):v.current.removeAttribute("disabled"))}),[t.disabled,v]),(0,l.useEffect)((function(){v.current&&!t.disabled&&(t.readonly?(v.current.setAttribute("disabled",!0),v.current.setAttribute("readonly",!0)):(v.current.removeAttribute("disabled"),v.current.removeAttribute("readonly")))}),[t.readonly,t.disabled,v]),(0,l.useEffect)((function(){x&&(N||x.set(m(t.rawValue),!1,!0))}),[t.rawValue,x]),(0,n.jsxs)("div",{className:i()("relative w-full",c),children:[(0,n.jsx)("div",{ref:v}),o.map((function(e,t){var r=e.el;return(0,n.jsx)(r,{tick:e},t)}))]})}));v.propTypes={control:s().oneOfType([s().instanceOf(c.N)]).isRequired,minOffset:s().number,maxOffset:s().number,ticks:s().array,jitter:s().object,tickAbsBuffer:s().number,className:s().string},v.defaultProps={minOffset:0,maxOffset:0,ticks:[],tickAbsBuffer:10,jitter:{type:"debounce",delay:1},className:""}},13539:function(e,t,r){r.d(t,{w:function(){return m}});var n=r(26042),l=r(69396),a=r(99534),i=r(85893),o=r(29323),s=r(67294),u=r(94184),f=r.n(u),c=r(45697),d=r.n(c),p=r(20129),b=r(69345),m=(0,o.Pi)((function(e){var t=e.control,r=e.wrapperStyles,o=e.flexible,u=e.jitter,c=e.prepend,d=e.postpend,p=e.prefix,m=e.postfix,v=e.alignInput,h=e.vertical,x=e.placeholder,g=e.onChange,y=e.className,w=e.onKeyPress,_=(0,a.Z)(e,["control","wrapperStyles","flexible","jitter","prepend","postpend","prefix","postfix","alignInput","vertical","placeholder","onChange","className","onKeyPress"]),j=(0,s.useRef)(null),N=(0,b.P)(j,t,u),k=N.isFocused,E=N.internalValue,S=N.setInternalValue,A=N.onFocus,C=N.focus,M=N.onBlur;(0,s.useEffect)((function(){j&&j.current&&(j.current.value!==E&&(j.current.value="number"===t.type&&"number"===typeof E?parseFloat(parseFloat(E).toPrecision(5)):E),j.current.parentElement.setAttribute("data-value",""!==j.current.value?j.current.value:t.value))}),[E]);var O,P=(0,s.useId)(),V=(0,s.useCallback)((function(e){"number"===t.type&&["+","e"].includes(e.key)&&e.preventDefault(),w&&w(e)}),[t.type,w]),B=(0,s.useMemo)((function(){return"number"===t.type?{inputMode:"decimal",pattern:"[0-9]*"}:{}}),[t.type]),I=(0,s.useMemo)((function(){return"number"===t.type?k?"number":"text":null!==(e=t.type)&&void 0!==e?e:"text";var e}),[t.type,k]),T=(0,s.useCallback)((function(e){S(e.target.value),setTimeout((function(){if(void 0!==g)return g(e)}),10)}),[g]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:f()(r,y,"h-10 p-2 relative w-full max-w-full rounded border border-gray-lightest transition-colors flex content-center items-center justify-start",{"text-gray-dark":t.readonly,"bg-gray-lightest text-gray-dark":t.disabled,"w-[fit-content]":o,"flex-col h-auto":h,"border-gray-dark":k&&!t.readonly,"border-error":t.hasError&&t.ditry}),disabled:t.disabled,readOnly:t.readonly,onClick:function(){return!t.disabled&&C()},role:"cell",children:[void 0!==c&&(0,i.jsx)("span",{className:f()("flex whitespace-nowrap flex-none pr-1 text-gray-dark text-sm md:text-tiny",{"!pr-0 pb-2 w-full":h}),children:c}),(0,i.jsxs)("div",{className:f()("flex w-full items-stretch content-center h-full",{"flex flex-grow-0":o,"w-full":h,"justify-end":"right"===v,"justify-start":"left"===v,"justify-center":"center"===v}),children:[void 0!==p&&(0,i.jsx)("span",{className:f()("flex whitespace-nowrap flex-none pr-0.5 font-bold self-center"),children:p}),(0,i.jsxs)("div",{className:f()("font-bold w-full relative",{"after:overflow-hidden after:pr-[1px] after:whitespace-pre after:invisible after:content-[attr(data-value)] inline-grid align-top items-center w-auto after:w-auto after:min-w-[3px] after:max-w-full after:m-0 after:bg-none after:border-none after:p-0":o}),children:[!t.name.startsWith("input__")&&(0,i.jsx)("input",{tabIndex:-1,"aria-hidden":"true",className:"invisible absolute top-0 left-0 max-w-full",name:t.name,autoComplete:"off"}),(0,i.jsx)("input",(0,l.Z)((0,n.Z)({autoComplete:"off",size:1,id:P,className:f()("min-w-[3px] max-w-full m-0 bg-none border-none p-0 bg-transparent appearance-none absolute top-0 left-0 h-full w-full focus:outline-none focus:border-none placeholder:font-medium"),style:{textAlign:null!==v&&void 0!==v?v:"left"},type:I,name:null!==(O=t.name)&&void 0!==O?O:P,readOnly:t.readonly,disabled:t.disabled,step:"percent"===t.subtype?100*t.step:t.step,min:"percent"===t.subtype?100*t.min:t.min,max:"percent"===t.subtype?100*t.max:t.max,placeholder:x,onFocus:A,onBlur:M,onChange:T,onInput:function(e){T(e)},onKeyPress:function(e){return V(e)}},B,_),{ref:j}))]}),void 0!==m&&(0,i.jsx)("span",{className:f()("flex whitespace-nowrap flex-none pl-0.5 font-bold self-center"),children:m})]}),void 0!==d&&(0,i.jsx)("span",{className:f()("flex whitespace-nowrap flex-none pl-1 text-gray-dark text-sm md:text-tiny",{"!pl-0 pt-2 w-full":h}),children:d})]}),t.hasError&&t.dirty&&(0,i.jsx)("span",{className:"block mt-1 whitespace-nowrap overflow-hidden overflow-ellipsis text-error text-tiny font-semibold pl-3",children:t.getError})]})}));m.propTypes={control:d().oneOfType([d().instanceOf(p.N)]).isRequired,wrapperStyles:d().string,flexible:d().bool,jitter:d().object,prepend:d().string,postpend:d().string,prefix:d().string,postfix:d().string,placeholder:d().string,vertical:d().bool,onChange:d().func,alignInput:d().oneOf(["left","right","center"]),className:d().string},m.defaultProps={wrapperStyles:"",flexible:!1,jitter:{type:"debounce"},prepend:void 0,postpend:void 0,prefix:void 0,postfix:void 0,vertical:!1,placeholder:"",onChange:void 0,alignInput:"left",className:""}}}]);