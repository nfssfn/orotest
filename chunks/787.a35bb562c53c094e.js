"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[787],{30787:function(e,t,n){n.r(t),n.d(t,{MarketRelatedBuy:function(){return i}});var l=n(85893),r=n(29323),o=n(46203),s=n(58119),a=n(88136),i=(0,r.Pi)((function(){var e=(0,o.Rp)();return e.formModel?(0,l.jsx)(s.d,{label:"Market-related",opened:!0,children:(0,l.jsxs)("div",{className:"pt-5",children:[(0,l.jsx)(a.b,{control:e.formModel.controls.priceReduced,label:"Recently Price Reduced"}),(0,l.jsx)(a.b,{control:e.formModel.controls.aboveMedian,label:"Above Median Price",className:"my-2.5"}),(0,l.jsx)(a.b,{control:e.formModel.controls.belowMedian,label:"Below Median Price",className:"my-2.5"}),(0,l.jsx)(a.b,{control:e.formModel.controls.goodDeal,label:"Good Deal",className:"my-2.5"})]})}):null}))},58119:function(e,t,n){n.d(t,{d:function(){return u}});var l=n(85893),r=n(67294),o=n(45697),s=n.n(o),a=n(94184),i=n.n(a),c=n(89262),u=function(e){var t=e.label,n=e.labelElement,o=e.opened,s=e.className,a=e.labelStyles,c=e.children,u=(0,r.useRef)(null),d=(0,r.useState)(o),m=d[0],f=d[1],b=(0,r.useState)(o),h=b[0],v=b[1];return(0,r.useEffect)((function(){f(o)}),[o]),(0,r.useEffect)((function(){var e,t=u.current;return m?(t.setAttribute("style","max-height:"+t.scrollHeight+"px;display:block"),e=function(){return t.setAttribute("style","max-height:none;overflow:visible")},t.addEventListener("transitionend",e),function(){return t.removeEventListener("transitionend",e)}):h?(t.setAttribute("style","max-height: "+t.scrollHeight+"px"),e=setTimeout((function(){return t.setAttribute("style","max-height: 0px")}),50),function(){return clearTimeout(e)}):v(!0)}),[m]),(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("div",{className:i()("relative flex justify-between items-center cursor-pointer select-none font-bold transition-colors duration-300 hover:text-blue [&_svg]:transition-transform [&_svg]:rotate-180 [&_svg]:duration-300 [&_svg]:fill-current",{"[&_svg]:rotate-0":m},a),role:"button",tabIndex:0,onClick:function(){return f(!m)},children:n(m,t)}),(0,l.jsx)("div",{className:i()("opacity-0 max-h-0 overflow-hidden transition-opacity-max-height duration-200",{"opacity-100":m}),ref:u,children:c})]})};u.propTypes={label:s().string,labelElement:s().func,opened:s().bool,className:s().string,labelStyles:s().string},u.defaultProps={label:"",labelElement:function(e,t){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"mr-2",children:t}),(0,l.jsx)(c.Q,{name:"smooth-arrow",width:12,height:12})]})},opened:!1,className:"",labelStyles:""}}}]);