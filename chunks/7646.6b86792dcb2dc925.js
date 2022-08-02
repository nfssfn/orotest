"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7646],{14338:function(e,a,t){t.d(a,{Q:function(){return i}});var s=t(85893),l=t(45697),r=t.n(l),i=function(e){var a=e.legendData,t=e.CustomEl,l=e.className;return(0,s.jsx)("div",{className:"flex flex-wrap gap-5 ".concat(l),children:a.map((function(e,a){var l;return(0,s.jsx)("div",{className:"flex items-center",children:t?t(e):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{className:"rounded-full w-2.5 h-2.5 border-2 border-transparent bg-transparent mr-2",style:e.style}),(0,s.jsx)("span",{className:"text-tiny font-medium text-gray-dark leading-none",children:e.label})]})},e.label+((null===(l=e.style)||void 0===l?void 0:l.backgroundColor)||a))}))})};i.propTypes={legendData:r().array.isRequired,CustomEl:r().elementType,className:r().string},i.defaultProps={CustomEl:null,className:""}},97646:function(e,a,t){t.r(a),t.d(a,{Insights:function(){return x}});var s=t(85893),l=t(29323),r=t(46203),i=t(67294),n=t(94201),c=t(89103),o=t(71462),d=(0,l.Pi)((function(e){var a,t=e.insights,l=(0,i.useContext)(r.VL);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center gap-5",children:[(0,s.jsxs)("h2",{id:"insights",className:"whitespace-nowrap text-xl xl:text-1.5xl font-bold",children:["Insights ",(null===l||void 0===l||null===(a=l.meta)||void 0===a?void 0:a.$loc)?"for ".concat(l.meta.$loc):""]}),(0,s.jsx)(n.UDivider,{})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 mt-5",children:[t.askingPrice&&(0,s.jsx)(c.t,{title:"Asking Price",dto:t.charts.askingPrice,description:[{label:"Median asking Price",value:t.askingPrice.meta.median,formatter:"USD_INT_K"},{label:"Average asking Price",value:t.askingPrice.meta.average,formatter:"USD_INT_K"}],className:"sm:col-span-2"}),t.pricePerSqft&&(0,s.jsx)(c.t,{title:"Price per Square Footage",dto:t.charts.pricePerSqft,description:[{label:"Median price per Square Footage",value:t.pricePerSqft.meta.median,formatter:"USD_INT"},{label:"Average price per Square Footage",value:t.pricePerSqft.meta.average,formatter:"USD_INT"}],className:"sm:col-span-2"}),t.marketSnapshot&&(0,s.jsxs)("div",{className:"mde:col-span-2 xl:col-span-1",children:[(0,s.jsx)("h3",{className:"text-1.5xl font-bold",children:"Market Snapshot"}),(0,s.jsxs)("table",{className:"mt-5 w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{className:"border-b-2 text-left text-sm text-gray",children:["Type","Act. Listings","List Price"].map((function(e,a){return(0,s.jsx)("th",{className:"font-medium py-1.5 px-2",children:e},a)}))})}),(0,s.jsx)("tbody",{children:t.marketSnapshot.labels.map((function(e,a){return(0,s.jsxs)("tr",{className:"text-tiny even:bg-gray-100",children:[(0,s.jsx)("td",{className:"py-1.5 px-2",children:0==e?"Studio":"".concat(e," ").concat(1==e?"bed":"beds")}),(0,s.jsx)("td",{className:"font-bold py-1.5 px-2",children:o.J.NUMBER(t.marketSnapshot.datasets[1].data[a])}),(0,s.jsx)("td",{className:"font-bold py-1.5 px-2",children:o.J.USD_INT(t.marketSnapshot.datasets[0].data[a])})]},a)}))})]})]}),t.activeListings&&(0,s.jsx)(c.t,{title:"Active listings",displayLegend:!0,dto:t.charts.activeListings,className:"mde:col-span-2 xl:col-span-1"}),t.countByBeds&&(0,s.jsx)(c.t,{title:"Active listings by Bedroom Count",dto:t.charts.countByBeds,className:"mde:col-span-2 xl:col-span-1"}),t.countByBaths&&(0,s.jsx)(c.t,{title:"Active listings by Bathroom Count",dto:t.charts.countByBaths,className:"mde:col-span-2 xl:col-span-1"}),t.sqft&&(0,s.jsx)(c.t,{title:"Square Footage",dto:t.charts.sqft,description:[{label:"Median Square Footage",value:t.sqft.meta.median,formatter:"NUMBER"},{label:"Average Square Footage",value:t.sqft.meta.average,formatter:"NUMBER"}],className:"sm:col-span-2"}),t.yearBuilt&&(0,s.jsx)(c.t,{title:"Year Built",dto:t.charts.yearBuilt,description:[{label:"Median Year built",value:t.yearBuilt.meta.median},{label:"Average Year built",value:t.yearBuilt.meta.average}],className:"sm:col-span-2"})]})]})})),m=(0,l.Pi)((function(e){var a,t=e.insights,l=(0,i.useContext)(r.VL);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center gap-5",children:[(0,s.jsxs)("h2",{id:"insights",className:"whitespace-nowrap text-xl xl:text-1.5xl font-bold",children:["Insights ",(null===l||void 0===l||null===(a=l.meta)||void 0===a?void 0:a.$loc)?"for ".concat(l.meta.$loc):""]}),(0,s.jsx)(n.UDivider,{})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 mt-5",children:[t.askingPrice&&(0,s.jsx)(c.t,{title:"Rent Price",dto:t.charts.askingPrice,description:[{label:"Median rent Price",value:t.askingPrice.meta.median,formatter:"USD_INT"},{label:"Average rent Price",value:t.askingPrice.meta.average,formatter:"USD_INT"}],className:"sm:col-span-2"}),t.pricePerSqft&&(0,s.jsx)(c.t,{title:"Price per Square Footage",dto:t.charts.pricePerSqft,description:[{label:"Median price per Square Footage",value:t.pricePerSqft.meta.median,formatter:"USD"},{label:"Average price per Square Footage",value:t.pricePerSqft.meta.average,formatter:"USD"}],className:"sm:col-span-2"}),t.marketSnapshot&&(0,s.jsxs)("div",{className:"mde:col-span-2 xl:col-span-1",children:[(0,s.jsx)("h3",{className:"text-1.5xl font-bold",children:"Market Snapshot"}),(0,s.jsxs)("table",{className:"mt-5 w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{className:"border-b-2 text-left text-sm text-gray",children:["Type","Act. Listings","List Price"].map((function(e,a){return(0,s.jsx)("th",{className:"font-medium py-1.5 px-2",children:e},a)}))})}),(0,s.jsx)("tbody",{children:t.marketSnapshot.labels.map((function(e,a){return(0,s.jsxs)("tr",{className:"text-tiny even:bg-gray-100",children:[(0,s.jsx)("td",{className:"py-1.5 px-2",children:0==e?"Studio":"".concat(e," ").concat(1==e?"bed":"beds")}),(0,s.jsx)("td",{className:"font-bold py-1.5 px-2",children:o.J.NUMBER(t.marketSnapshot.datasets[1].data[a])}),(0,s.jsx)("td",{className:"font-bold py-1.5 px-2",children:o.J.USD_INT(t.marketSnapshot.datasets[0].data[a])})]},a)}))})]})]}),t.activeListings&&(0,s.jsx)(c.t,{title:"Active listings",displayLegend:!0,dto:t.charts.activeListings,className:"mde:col-span-2 xl:col-span-1"}),t.countByBeds&&(0,s.jsx)(c.t,{title:"Active listings by Bedroom Count",dto:t.charts.countByBeds,className:"mde:col-span-2 xl:col-span-1"}),t.countByBaths&&(0,s.jsx)(c.t,{title:"Active listings by Bathroom Count",dto:t.charts.countByBaths,className:"mde:col-span-2 xl:col-span-1"}),t.sqft&&(0,s.jsx)(c.t,{title:"Square Footage",dto:t.charts.sqft,description:[{label:"Median Square Footage",value:t.sqft.meta.median,formatter:"NUMBER"},{label:"Average Square Footage",value:t.sqft.meta.average,formatter:"NUMBER"}],className:"sm:col-span-2"}),t.yearBuilt&&(0,s.jsx)(c.t,{title:"Year Built",dto:t.charts.yearBuilt,description:[{label:"Median Year built",value:t.yearBuilt.meta.median},{label:"Average Year built",value:t.yearBuilt.meta.average}],className:"sm:col-span-2"})]})]})})),p=(0,l.Pi)((function(e){var a,t=e.insights,l=(0,i.useContext)(r.VL);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center gap-5",children:[(0,s.jsxs)("h2",{id:"insights",className:"whitespace-nowrap text-xl xl:text-1.5xl font-bold",children:["Insights ",(null===l||void 0===l||null===(a=l.meta)||void 0===a?void 0:a.$loc)?"for ".concat(l.meta.$loc):""]}),(0,s.jsx)(n.UDivider,{})]}),(0,s.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 mt-5",children:[t.askingPrice&&(0,s.jsx)(c.t,{title:"Asking Price",dto:t.charts.askingPrice,description:[{label:"Median asking Price",value:t.askingPrice.meta.median,formatter:"USD_INT_K"},{label:"Average asking Price",value:t.askingPrice.meta.average,formatter:"USD_INT_K"}],className:"sm:col-span-2"}),t.estimatedRent&&(0,s.jsx)(c.t,{title:"Estimated Rent Distribution",dto:t.charts.estimatedRent,description:[{label:"Median Rent",value:t.estimatedRent.meta.median,formatter:"USD_INT"},{label:"Average Rent",value:t.estimatedRent.meta.average,formatter:"USD_INT"}],className:"sm:col-span-2"}),t.capRate&&(0,s.jsx)(c.t,{title:"Cap Rate Distribution",dto:t.charts.capRate,description:[{label:"Median Cap Rate",value:t.capRate.meta.median,formatter:"PERCENT_2DIG"},{label:"Average Cap Rate",value:t.capRate.meta.average,formatter:"PERCENT_2DIG"}],className:"sm:col-span-2"}),t.capRateByBeds&&(0,s.jsxs)("div",{className:"mde:col-span-2 xl:col-span-1",children:[(0,s.jsx)("h3",{className:"text-1.5xl font-bold",children:"Cap Rate & Monthly Rent by Bedroom Count"}),(0,s.jsxs)("table",{className:"mt-5 w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{className:"border-b-2 text-left text-sm text-gray",children:["Beds","Cap Rate","Monthly Rent"].map((function(e,a){return(0,s.jsx)("th",{className:"font-medium py-1.5 px-2",children:e},a)}))})}),(0,s.jsx)("tbody",{children:t.capRateByBeds.labels.map((function(e,a){return(0,s.jsxs)("tr",{className:"text-tiny even:bg-gray-100",children:[(0,s.jsx)("td",{className:"py-1.5 px-2",children:0==e?"Studio":"".concat(e," ").concat(1==e?"bed":"beds")}),(0,s.jsx)("td",{className:"font-bold py-1.5 px-2",children:o.J.PERCENT_2DIG(t.capRateByBeds.datasets[1].data[a])}),(0,s.jsx)("td",{className:"font-bold py-1.5 px-2",children:o.J.USD_INT(t.capRateByBeds.datasets[0].data[a])})]},a)}))})]})]}),t.capRateByBaths&&(0,s.jsxs)("div",{className:"mde:col-span-2 xl:col-span-1",children:[(0,s.jsx)("h3",{className:"text-1.5xl font-bold",children:"Cap Rate & Monthly Rent by Bathroom Count"}),(0,s.jsxs)("table",{className:"mt-5 w-full",children:[(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{className:"border-b-2 text-left text-sm text-gray",children:["Bath","Cap Rate","Monthly Rent"].map((function(e,a){return(0,s.jsx)("th",{className:"font-medium py-1.5 px-2",children:e},a)}))})}),(0,s.jsx)("tbody",{children:t.capRateByBaths.labels.map((function(e,a){return(0,s.jsxs)("tr",{className:"text-tiny even:bg-gray-100",children:[(0,s.jsx)("td",{className:"py-1.5 px-2",children:"".concat(e," ").concat(1==e?"bath":"baths")}),(0,s.jsx)("td",{className:"font-bold py-1.5 px-2",children:o.J.PERCENT_2DIG(t.capRateByBaths.datasets[1].data[a])}),(0,s.jsx)("td",{className:"font-bold py-1.5 px-2",children:o.J.USD_INT(t.capRateByBaths.datasets[0].data[a])})]},a)}))})]})]}),t.activeListings&&(0,s.jsx)(c.t,{title:"Active listings",displayLegend:!0,dto:t.charts.activeListings,className:"mde:col-span-2 xl:col-span-1"}),t.medianCapRate&&(0,s.jsx)(c.t,{title:"Median Cap Rate",dto:t.charts.medianCapRate,chartStyles:"!mt-14",className:"mde:col-span-2 xl:col-span-1"}),t.pricePerSqft&&(0,s.jsx)(c.t,{title:"Price per Square Footage",dto:t.charts.pricePerSqft,description:[{label:"Median price per Square Footage",value:t.pricePerSqft.meta.median,formatter:"USD_INT"},{label:"Average price per Square Footage",value:t.pricePerSqft.meta.average,formatter:"USD_INT"}],className:"sm:col-span-2"}),t.countByBeds&&(0,s.jsx)(c.t,{title:"Active listings by Bedroom Count",dto:t.charts.countByBeds,className:"mde:col-span-2 xl:col-span-1"}),t.countByBaths&&(0,s.jsx)(c.t,{title:"Active listings by Bathroom Count",dto:t.charts.countByBaths,className:"mde:col-span-2 xl:col-span-1"}),t.sqft&&(0,s.jsx)(c.t,{title:"Square Footage",dto:t.charts.sqft,description:[{label:"Median Square Footage",value:t.sqft.meta.median,formatter:"NUMBER"},{label:"Average Square Footage",value:t.sqft.meta.average,formatter:"NUMBER"}],className:"sm:col-span-2"}),t.yearBuilt&&(0,s.jsx)(c.t,{title:"Year Built",dto:t.charts.yearBuilt,description:[{label:"Median Year built",value:t.yearBuilt.meta.median},{label:"Average Year built",value:t.yearBuilt.meta.average}],className:"sm:col-span-2"})]})]})})),x=(0,l.Pi)((function(){var e=(0,r.Rp)();return e.Insights.fetched&&null!==e.Insights.dto?"search-buy"===e.index?(0,s.jsx)(d,{insights:e.Insights.dto}):"search-rent"===e.index?(0,s.jsx)(m,{insights:e.Insights.dto}):"search-invest"===e.index?(0,s.jsx)(p,{insights:e.Insights.dto}):void 0:null}))},89103:function(e,a,t){t.d(a,{t:function(){return g}});var s=t(26042),l=t(69396),r=t(85893),i=t(45697),n=t.n(i),c=t(29323),o=t(32414),d=t(31877),m=t(53328),p=t(55376),x=t(28278),u=t(14338),h=t(71462);d.Z.register(m.uw);var g=(0,c.Pi)((function(e){var a=e.title,t=e.dto,i=e.description,n=e.displayLegend,c=e.className,d=e.chartStyles,m=(0,o.j1)();return(0,r.jsxs)("div",{className:c,children:[a&&(0,r.jsx)("h3",{className:"text-1.5xl font-bold mb-5",children:a}),i.length>0&&(0,r.jsx)("div",{className:"flex gap-3",children:i.map((function(e,a){return(0,r.jsxs)("div",{className:"bg-gray-100 px-4 py-2.5 rounded xl:min-w-[210px]",children:[(0,r.jsx)("span",{className:"block text-sm text-gray mb-1",children:e.label}),(0,r.jsx)("span",{className:"block text-2xl font-bold",children:e.formatter?h.J[e.formatter](e.value):e.value})]},a)}))}),n&&(0,r.jsx)(u.Q,{className:"my-5",legendData:t.legendData||t.chart.data.datasets.map((function(e){return{label:e.label,style:{borderColor:e.borderColor,backgroundColor:e.backgroundColor}}}))}),m.loaded?(0,r.jsx)(p.x1,(0,l.Z)((0,s.Z)({},t.chart),{className:"mt-5 ".concat(d),plugins:[x.Z]})):(0,r.jsx)("div",{style:{paddingBottom:"calc(100%/".concat(t.chart.options.aspectRatio,")")},className:"mt-5 ".concat(d," rounded-md bg-gray-200 w-full")})]})}));g.propTypes={title:n().string,dto:n().object.isRequired,description:n().array,displayLegend:n().bool,className:n().string,chartStyles:n().string},g.defaultProps={title:"",description:[],displayLegend:!1,className:"",chartStyles:""}}}]);