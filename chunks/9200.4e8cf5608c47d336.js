"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9200],{35707:function(e,t,n){n.d(t,{f:function(){return c}});var r=n(85893),i=n(45697),l=n.n(i),s=n(11163),o=n(9374),a=n(89262),u=n(58119),c=function(e){var t=e.title,n=e.links,i=e.onClick,l=(0,s.useRouter)();return t&&n?(0,r.jsx)(u.d,{labelElement:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h3",{children:t}),(0,r.jsx)(a.Q,{name:"smooth-arrow",width:12,height:12})]})},className:"my-7",labelStyles:"border-b",opened:!0,children:(0,r.jsx)("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 mde:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-20 gap-y-2.5 pt-3",children:n.map((function(e,t){return(0,r.jsx)(o.r,{href:e.href,shallow:!0,children:(0,r.jsx)("a",{className:"ui-href-blue",onClick:function(t){return function(e,t){i(),t.preventDefault(),l.push(e,void 0,{shallow:!0})}(e.href,t)},role:"link",tabIndex:0,children:e.label})},t)}))})}):null};c.propTypes={title:l().string.isRequired,links:l().array.isRequired,onClick:l().func},c.defaultProps={onClick:function(){}}},39200:function(e,t,n){n.r(t),n.d(t,{Suggestions:function(){return a}});var r=n(85893),i=n(29323),l=n(46203),s=n(98985),o=n(35707),a=(0,i.Pi)((function(){var e,t=(0,l.Rp)();return(null===(e=t.dto)||void 0===e?void 0:e.meta)&&t.searchSuggestions?t.searchSuggestions.map((function(e,t){return(0,r.jsx)(o.f,{title:e.title,links:e.links,onClick:function(){return(0,s.X)(0)}},t)})):null}))},58119:function(e,t,n){n.d(t,{d:function(){return c}});var r=n(85893),i=n(67294),l=n(45697),s=n.n(l),o=n(94184),a=n.n(o),u=n(89262),c=function(e){var t=e.label,n=e.labelElement,l=e.opened,s=e.className,o=e.labelStyles,u=e.children,c=(0,i.useRef)(null),d=(0,i.useState)(l),f=d[0],h=d[1],m=(0,i.useState)(l),g=m[0],p=m[1];return(0,i.useEffect)((function(){h(l)}),[l]),(0,i.useEffect)((function(){var e,t=c.current;return f?(t.setAttribute("style","max-height:"+t.scrollHeight+"px;display:block"),e=function(){return t.setAttribute("style","max-height:none;overflow:visible")},t.addEventListener("transitionend",e),function(){return t.removeEventListener("transitionend",e)}):g?(t.setAttribute("style","max-height: "+t.scrollHeight+"px"),e=setTimeout((function(){return t.setAttribute("style","max-height: 0px")}),50),function(){return clearTimeout(e)}):p(!0)}),[f]),(0,r.jsxs)("div",{className:s,children:[(0,r.jsx)("div",{className:a()("relative flex justify-between items-center cursor-pointer select-none font-bold transition-colors duration-300 hover:text-blue [&_svg]:transition-transform [&_svg]:rotate-180 [&_svg]:duration-300 [&_svg]:fill-current",{"[&_svg]:rotate-0":f},o),role:"button",tabIndex:0,onClick:function(){return h(!f)},children:n(f,t)}),(0,r.jsx)("div",{className:a()("opacity-0 max-h-0 overflow-hidden transition-opacity-max-height duration-200",{"opacity-100":f}),ref:c,children:u})]})};c.propTypes={label:s().string,labelElement:s().func,opened:s().bool,className:s().string,labelStyles:s().string},c.defaultProps={label:"",labelElement:function(e,t){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"mr-2",children:t}),(0,r.jsx)(u.Q,{name:"smooth-arrow",width:12,height:12})]})},opened:!1,className:"",labelStyles:""}}}]);