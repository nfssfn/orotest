"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8929],{18929:function(e,t,n){n.r(t),n.d(t,{MarketRelatedInvest:function(){return a}});var r=n(85893),l=n(29323),s=n(46203),o=n(58119),i=n(88136),a=(0,l.Pi)((function(){var e=(0,s.Rp)();return e.formModel?(0,r.jsx)(o.d,{label:"Market-related",opened:!0,children:(0,r.jsxs)("div",{className:"pt-5",children:[(0,r.jsx)(i.b,{control:e.formModel.controls.priceReduced,label:"Recently Price Reduced"}),(0,r.jsx)(i.b,{control:e.formModel.controls.aboveMedian,label:"Above Median Price",className:"my-2.5"}),(0,r.jsx)(i.b,{control:e.formModel.controls.belowMedian,label:"Below Median Price",className:"my-2.5"})]})}):null}))},58119:function(e,t,n){n.d(t,{d:function(){return u}});var r=n(85893),l=n(67294),s=n(45697),o=n.n(s),i=n(94184),a=n.n(i),c=n(89262),u=function(e){var t=e.label,n=e.labelElement,s=e.opened,o=e.className,i=e.labelStyles,c=e.children,u=(0,l.useRef)(null),d=(0,l.useState)(s),f=d[0],m=d[1],b=(0,l.useState)(s),h=b[0],v=b[1];return(0,l.useEffect)((function(){m(s)}),[s]),(0,l.useEffect)((function(){var e,t=u.current;return f?(t.setAttribute("style","max-height:"+t.scrollHeight+"px;display:block"),e=function(){return t.setAttribute("style","max-height:none;overflow:visible")},t.addEventListener("transitionend",e),function(){return t.removeEventListener("transitionend",e)}):h?(t.setAttribute("style","max-height: "+t.scrollHeight+"px"),e=setTimeout((function(){return t.setAttribute("style","max-height: 0px")}),50),function(){return clearTimeout(e)}):v(!0)}),[f]),(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)("div",{className:a()("relative flex justify-between items-center cursor-pointer select-none font-bold transition-colors duration-300 hover:text-blue [&_svg]:transition-transform [&_svg]:rotate-180 [&_svg]:duration-300 [&_svg]:fill-current",{"[&_svg]:rotate-0":f},i),role:"button",tabIndex:0,onClick:function(){return m(!f)},children:n(f,t)}),(0,r.jsx)("div",{className:a()("opacity-0 max-h-0 overflow-hidden transition-opacity-max-height duration-200",{"opacity-100":f}),ref:u,children:c})]})};u.propTypes={label:o().string,labelElement:o().func,opened:o().bool,className:o().string,labelStyles:o().string},u.defaultProps={label:"",labelElement:function(e,t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"mr-2",children:t}),(0,r.jsx)(c.Q,{name:"smooth-arrow",width:12,height:12})]})},opened:!1,className:"",labelStyles:""}}}]);