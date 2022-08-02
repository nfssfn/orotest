(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1640],{24877:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-it-works",function(){return n(38095)}])},38095:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var s=n(85893),r=n(67294),i=n(9008),a=n.n(i),o=n(23754),l=n(89262),c=n(45697),m=n.n(c),d=n(66253),h=function(e){var t=e.visible,n=e.onClose,i=e.src,a=e.title,o=(0,r.useRef)(null),l=(0,s.jsx)("iframe",{ref:o,title:a,className:"w-full sm:w-[640px] sm:h-[350px] lg:w-[900px] h-[calc(100vw/1.8)] lg:h-[500px]",src:i,frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0});return(0,r.useEffect)((function(){if(!t&&o.current){var e=o.current.src;o.current.src=e}}),[t]),(0,s.jsx)(d.E,{onClose:n,visible:t,viewIcon:!1,children:l})};h.propTypes={visible:m().bool.isRequired,onClose:m().func.isRequired,src:m().string.isRequired,title:m().string.isRequired};var p=n(67564),u=[{iconName:"search-property",text:"Investment Finder"},{iconName:"graph",text:"Rent Estimator"},{iconName:"estimate-calculator",text:"Investment Calculator"},{iconName:"order-history",text:"Investment Forecast"},{iconName:"contact-us",text:"Close the Deal"}],x=function(){return(0,s.jsxs)("div",{className:"wrapper my-[30px] sm:my-[60px]",children:[(0,s.jsxs)("div",{className:"w-full my-0 mx-[auto] text-center sm:w-3/6",children:[(0,s.jsx)("h2",{className:"text-3xl font-extrabold sm:text-4xl",children:"How It Works"}),(0,s.jsx)("span",{className:"block text-lg font-semibold mt-6 text-gray-dark sm:text-lg",children:"Turn months of difficult research into a few easy seconds"})]}),(0,s.jsx)("div",{className:"w-[fit-content] relative mt-10 mb-0 mx-auto sm:w-auto sm:m-0 sm:justify-between sm:mt-[60px] sm:flex after:content-[''] after:absolute after:h-[90%] after:top-0 after:left-[18px] after:border-l-2 after:border-dashed after:border-gray-lightest after:z-0 after:sm:w-[90%] after:sm:h-auto after:sm:top-[26px] after:sm:left-2/4 after:sm:-translate-x-2/4 after:sm:-translate-y-2/4 after:sm:border-l-0 after:sm:border-t-2",children:u.map((function(e,t){return(0,s.jsxs)("div",{className:"flex relative w-full items-center mt-6 first:mt-0 z-[1] text-center sm:block sm:static sm:items-stretch sm:mt-0 sm:w-[16%]",children:[(0,s.jsx)("div",{className:"w-[fit-content] bg-white py-3 sm:mx-[auto] sm:px-5 lg:px-10",children:(0,s.jsx)(l.Q,{className:"w-10 h-10 fill-green sm:w-12 sm:h-12",name:e.iconName})}),(0,s.jsx)("span",{className:"inline-block text-xl sm:text-xl font-extrabold ml-5 sm:m-0 sm:mt-5",children:"".concat(t+1,". ").concat(e.text)})]},t)}))})]})},f=n(11163),w=n(94184),g=n.n(w),b=n(62881),y=n(25675),v=n.n(y),j=function(e){var t=e.label,n=e.image,r=e.contentSide,i=e.children,a=e.onClick;return(0,s.jsxs)("li",{className:"flex flex-col sm:flex-row justify-between text-center sm:text-left mb-32 sm:mb-24 last:mb-0 items-center",children:[(0,s.jsxs)("div",{className:g()("relative sm:w-2/5 before:absolute before:top-[-70px] before:left-[calc(50%-30px)] before:sm:left-0 before:text-green before:text-2xl before:font-bold before:text-center before:border-green before:border-2 before:w-14 before:h-14 before:leading-[52px] before:rounded-full before:counter-result counter-increment",{"sm:order-1":"right"===r}),children:[(0,s.jsx)("h3",{className:"text-2xl sm:text-3xl font-extrabold mb-4",children:t}),(0,s.jsx)("p",{className:"text-lg font-normal mb-5 text-gray-dark",children:i}),(0,s.jsx)(o.g,{onClick:a,style:"btn-text-blue",className:"!hidden sm:!block",children:"Get Started"})]}),(0,s.jsx)("div",{className:"relative w-full sm:w-[55%] xl:w-2/5 h-[300px] sm:h-[400px]",children:(0,s.jsx)(v(),{src:"/images/how-it-works/".concat(n,".png"),alt:n,layout:"fill",objectFit:"contain"})}),(0,s.jsx)(o.g,{onClick:a,style:"btn-text-blue",className:"sm:!hidden order-2",children:"Get Started"})]})};j.propTypes={label:m().string.isRequired,image:m().string.isRequired,onClick:m().func.isRequired,contentSide:m().string},j.defaultProps={contentSide:"left"};var k=[{label:"Find a Property for Sale",image:"investment-finder",text:"Filter millions of properties in seconds. Search by advanced criteria such as Cash Flow, Cash on Cash Return, Capitalization Rate, Estimated Rent, and many other critical investment specifications.",contentSide:"left",route:"/invest/florida"},{label:"Rent Estimator",image:"rent-estimator",text:"Get accurate and detailed rent estimates for any address, city, or zip code to understand how much rental income a property can generate and how it compares to other surrounding properties.",contentSide:"right",route:"/rent-estimator"},{label:"Investment Calculator",image:"investment-calculator",text:"Tailor any income or expense to understand how the investment will perform. Edit assumptions such as vacancy allowance, property appreciation rate, rental income appreciation, management fees, and many more.",contentSide:"left",route:"/investment-properties"},{label:"Investment Forecast",image:"investment-forecast",text:"Get a detailed financial report that includes the full projected performance of the property over its lifetime. See how much wealth the property will generate taking everything into account, including property appreciation, cash flow, mortgage paydown, and much more.",contentSide:"right",route:"/investment-properties"},{label:"Close the Deal",image:"close-the-deal",text:"Once you select a property, contact an agent for assistance with the transaction.",contentSide:"left",route:"/investment-properties"}],N=function(){var e=(0,f.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("ol",{className:g()("wrapper mb-12 mt-32 sm:my-24 counter-reset"),children:k.map((function(t,n){return(0,s.jsx)(j,{onClick:function(){return e.push(t.route)},label:t.label,image:t.image,contentSide:t.contentSide,children:t.text},n)}))}),(0,s.jsx)(b.V,{data:{"@context":"https://schema.org","@type":"HowTo",name:"How to find your investment property?",step:k.map((function(e){return{"@type":"HowToStep",name:e.label,url:"".concat("https://localhost:8080").concat(e.route),text:e.text,image:"".concat("https://localhost:8080","/images/how-it-works/").concat(e.image,".png")}})),video:{"@type":"VideoObject",name:"See How It Works",description:"Find the best deals in seconds, maximize your return on investment, and grow your wealth quickly with Ofirio.",thumbnailUrl:"".concat("https://localhost:8080","/images/how-it-works/video-thumbnail.png"),contentUrl:"https://www.youtube.com/watch?v=Sfo6BuyOS-Y",embedUrl:"https://www.youtube.com/embed/Sfo6BuyOS-Y",uploadDate:"2021-07-20T12:46:23",duration:"PT1M53S"}}})]})},I=function(e){var t=e.onClick;return(0,s.jsxs)("div",{className:"wrapper-wide my-[50px] sm:my-[90px] relative pt-10 pb-12 bg-gray-lightest sm:rounded-md text-center sm:pt-12 sm:pb-20",children:[(0,s.jsx)("span",{className:"text-base font-extrabold uppercase text-gray-light",children:"Watch Video"}),(0,s.jsx)("h3",{className:"text-2xl font-extrabold sm:text-4xl",children:"See How It Works"}),(0,s.jsx)(o.g,{style:"btn-icon",className:"!absolute bottom-[-30px] left-[calc(50%-30px)] bg-white hover:!bg-white focus:!bg-white !rounded-full sm:bottom-[-50px] sm:left-[calc(50%-50px)]",onClick:t,children:(0,s.jsx)(l.Q,{className:"w-[60px] h-[60px] fill-green sm:w-[100px] sm:h-[100px]",name:"play-circle"})})]})};I.propTypes={onClick:m().func.isRequired};var S=n(8300),C=n(70508);function O(){var e=function(){i(!n)},t=(0,r.useState)(!1),n=t[0],i=t[1];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"How It Works - Ofirio | Real Estate Deal Finder"}),(0,s.jsx)("meta",{name:"robots",content:"index, follow"}),(0,s.jsx)("meta",{name:"description",content:"Find out how Ofirio works. Find the best deals in seconds, maximize your return on investment, and grow your wealth quickly."}),(0,s.jsx)("meta",{property:"og:title",content:"How It Works - Ofirio | Real Estate Deal Finder"},"title"),(0,s.jsx)("meta",{property:"og:description",content:"Find out how Ofirio works. Find the best deals in seconds, maximize your return on investment, and grow your wealth quickly."},"description")]}),(0,s.jsxs)(p.m,{background:"how-it-works",children:[(0,s.jsx)("h1",{children:"Investing Made Easy"}),(0,s.jsx)("p",{children:"Find the best deals in seconds, maximize your return on investment, and grow your wealth quickly"}),(0,s.jsxs)(o.g,{onClick:e,style:"btn-green",className:"items-center !font-extrabold mt-7 text sm:text-lg",children:[(0,s.jsx)(l.Q,{name:"play-circle",width:"30px",height:"30px",className:"fill-current"}),"See How It Works"]})]}),(0,s.jsx)(h,{visible:n,onClose:e,src:"https://player.vimeo.com/video/567390590?title=0&byline=0&portrait=0",title:"How Ofirio Works"}),(0,s.jsx)(x,{}),(0,s.jsx)(N,{}),(0,s.jsx)(I,{onClick:e}),(0,s.jsx)(S.l,{}),(0,s.jsx)(C.A,{wavePosition:"top"})]})}},62881:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var s=n(85893),r=n(45697),i=n.n(r),a=function(e){var t=e.data;return(0,s.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})};a.propTypes={data:i().object.isRequired}},8300:function(e,t,n){"use strict";n.d(t,{l:function(){return w}});var s=n(14924),r=n(10253),i=n(85893),a=n(67294),o=n(88494),l=n(71911),c=n(45697),m=n.n(c),d=n(25675),h=n.n(d),p=n(68921),u=n(89262),x=n(23754),f=[{name:"Janak B.",review:"I wish Ofirio were around sooner! It would\u2019ve made years of investing so much easier. I used to use heaps of tools to find properties to invest in and keep track of my findings in a spreadsheet. With Ofirio, everything is just a click away. It\u2019s simple and efficient."},{name:"Helen N.",review:"I don't usually leave reviews, but after using Ofirio I had to let everyone know how brilliant it is! I found so many great deals, and I couldn't believe that I can search for properties by cap rate and even cash on cash return. I highly recommend Ofirio for making well thought through investments."},{name:"Rebecca M.",review:"It\u2019s a pleasure to use Ofirio! The concept is so simple and the execution is flawless! Ofirio let\u2019s me search for properties based on how good the deal is - how brilliant! this is possibly the hardest part of real estate investing, actually finding a good deal. I will happily pay 10 times what they are charging."},{name:"Kim W.",review:"Now this is a full package! I\u2019m really happy with the overall experience and especially with the results. I double checked their numbers for myself and I\u2019m excited that everything matches up! They earned a loyal customer - I recommend Ofirio to anyone looking to invest into real estate, especially for renting."},{name:"Steven A.",review:"Ofirio is simple to use - I love that! The design is really nice and polished. I am new to real estate and I appreciate that they don\u2019t only provide the tools, but also teach you how to use their tools and how to build wealth. Ofirio makes what can be a very complicated process very simple."}],w=(n(30933),n(92),function(e){var t,n=e.margin,c=e.hideTitle,m=p.lC.enumPx,d=(0,r.Z)(Array.isArray(n)?n:[n,n],2),w={marginTop:d[0]+"px",marginBottom:d[1]+"px"},g=(0,a.useState)([]),b=g[0],y=g[1];return(0,a.useEffect)((function(){y(f)}),[]),(0,i.jsxs)("div",{className:"wrapper my-[50px] sm:my-[90px]",style:w,children:[c||(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h3",{className:"text-center text-4xl font-extrabold mb-6",children:"Investors Success Stories"}),(0,i.jsx)("span",{className:"block text-center text-lg text-gray-dark mb-12",children:"Was founded with the purpose to maximize your return on investment."})]}),(0,i.jsxs)(o.tq,{modules:[l.W_],slidesPerView:1,spaceBetween:30,loop:!0,navigation:{nextEl:".swiper-next",prevEl:".swiper-prev"},breakpoints:(t={},(0,s.Z)(t,m.xl,{slidesPerView:3,spaceBetween:40}),(0,s.Z)(t,m["2xl"],{slidesPerView:3,spaceBetween:60}),t),className:"!p-5 !relative select-none",children:[b.map((function(e,t){return(0,i.jsxs)(o.o5,{className:"px-8 py-5 rounded-md shadow-lg min-w-[260px] sm:min-w-[340px] !h-auto",children:[(0,i.jsxs)("div",{className:"flex items-start mb-6",children:[(0,i.jsx)(h(),{src:"/images/success-stories/investor-profile-photo-".concat(t+1,".png"),alt:"Investor profile photo",width:70,height:70,className:"rounded-full"}),(0,i.jsxs)("div",{className:"ml-5",children:[(0,i.jsx)("span",{className:"block font-bold",children:e.name}),(0,i.jsx)("span",{className:"block text-tiny font-bold text-gray uppercase",children:"Investor"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(u.Q,{name:"star",width:"16px",height:"16px",className:"fill-green inline-block"}),(0,i.jsx)(u.Q,{name:"star",width:"16px",height:"16px",className:"fill-green inline-block"}),(0,i.jsx)(u.Q,{name:"star",width:"16px",height:"16px",className:"fill-green inline-block"}),(0,i.jsx)(u.Q,{name:"star",width:"16px",height:"16px",className:"fill-green inline-block"}),(0,i.jsx)(u.Q,{name:"star",width:"16px",height:"16px",className:"fill-green inline-block"})]})]})]}),(0,i.jsx)("p",{className:"font-normal text-gray-dark",children:e.review})]},t)})),(0,i.jsx)(x.g,{style:"btn-icon",className:"swiper-prev !absolute top-[calc(50%-20px)] left-1 -rotate-90 !bg-white hover:!bg-gray-lightest active:!bg-gray-light !p-[14px] z-10 !rounded-full !shadow-btn",children:(0,i.jsx)(u.Q,{name:"smooth-arrow",width:12,height:12})}),(0,i.jsx)(x.g,{style:"btn-icon",className:"swiper-next !absolute top-[calc(50%-20px)] right-1 rotate-90 !bg-white hover:!bg-gray-lightest active:!bg-gray-light !p-[14px] z-10 !rounded-full !shadow-btn",children:(0,i.jsx)(u.Q,{name:"smooth-arrow",width:12,height:12})})]})]})});w.propTypes={margin:m().oneOfType([m().number,m().array]),hideTitle:m().bool},w.defaultProps={margin:void 0,hideTitle:!1}},66253:function(e,t,n){"use strict";n.d(t,{E:function(){return m}});var s=n(85893),r=n(45697),i=n.n(r),a=n(23754),o=n(89262),l=n(64701),c=n(31750),m=function(e){var t=e.onClose,n=e.children,r=e.visible,i=e.viewIcon;return(0,s.jsx)(l.R,{onClose:t,visible:r,children:(0,s.jsxs)("div",{className:c.M["ui-popup-content"],onClick:function(e){return e.stopPropagation()},role:"dialog",tabIndex:-1,children:[i&&(0,s.jsx)(a.g,{onClick:t,style:"btn-icon",className:c.M["btn-close"],children:(0,s.jsx)(o.Q,{name:"cross-thin",width:14,height:14})}),n]})})};m.propTypes={onClose:i().func.isRequired,visible:i().bool.isRequired,viewIcon:i().bool},m.defaultProps={viewIcon:!0}},92:function(){},30933:function(){}},function(e){e.O(0,[5675,8494,508,9774,2888,179],(function(){return t=24877,e(e.s=t);var t}));var t=e.O();_N_E=t}]);