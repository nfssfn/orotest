"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6746],{76746:function(a,t,e){e.d(t,{yr:function(){return P},JA:function(){return J},ZC:function(){return A}});var r=e(25987),o=e(71462),n=e(68921);function l(a,t){var e=n.lC.value.get()<n.lC.enum.sm;try{var l=a.marketCondition,i=l.meta._details._state_name,d=l.meta._details._agg_type,s=l.labels.map((function(a){return new Date(a).getFullYear()})),c=new Set(s).size-1,u=function(a,t){return a>2?t:void 0},b=function(a,t){return a<-2?t:void 0},p=function(a,t){return a>-2&&a<2?t:void 0};return{legendData:["state"!==d&&{label:"".concat((0,r.G)(l)," Trend"),style:{backgroundColor:"#666666",borderColor:"#666666"}},{label:"".concat(i," Trend"),style:{backgroundColor:"#E1E1E1",borderColor:"#E1E1E1"}},{label:"".concat("rent"===t?"Renter's":"Buyers"," market"),style:{backgroundColor:"#01D092",borderColor:"#01D092",borderRadius:"2px"}},{label:"Neutral market",style:{backgroundColor:"#FFFFFF",borderColor:"#E1E1E1",borderRadius:"2px"}},{label:"".concat("rent"===t?"Landlord's":"Sellers"," market"),style:{backgroundColor:"#F44336",borderColor:"#F44336",borderRadius:"2px"}}].filter(Boolean),chart:{type:"line",data:{labels:s,datasets:["state"!==d&&{label:"market",borderColor:"#666666",pointRadius:0,data:l.datasets[0].data},{label:"".concat(i," Trend"),borderColor:"#E1E1E1",pointRadius:0,data:l.datasets[1].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:e?1:3,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:c,maxRotation:0,minRotation:0}},y:{position:"left",min:-10,max:10,grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"}}},backgrounds:[{from:8,to:10,color:"rgba(244, 67, 54, 0.2)"},{from:6,to:8,color:"rgba(244, 67, 54, 0.15)"},{from:4,to:6,color:"rgba(244, 67, 54, 0.1)"},{from:2,to:4,color:"rgba(244, 67, 54, 0.05)"},{from:-2,to:-4,color:"rgba(0, 186, 130, 0.05)"},{from:-4,to:-6,color:"rgba(0, 186, 130, 0.1)"},{from:-8,to:-6,color:"rgba(0, 186, 130, 0.15)"},{from:-10,to:-8,color:"rgba(0, 186, 130, 0.2)"}],elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(l.labels[a[0].dataIndex])},labelColor:function(a){return"market"===a.dataset.label?{borderColor:u(a.raw,"#F54437")||b(a.raw,"#01D092")||p(a.raw,"#FFCC49"),backgroundColor:u(a.raw,"#F54437")||b(a.raw,"#01D092")||p(a.raw,"#FFCC49"),borderWidth:1}:{borderColor:a.dataset.borderColor,backgroundColor:a.dataset.borderColor,borderWidth:1}},label:function(a){var e;return"market"===a.dataset.label?(a.raw>2?e="rent"===t?"Landlord's":"Sellers":a.raw<-2?e="rent"===t?"Renter's":"Buyers":a.raw<2&&a.raw>-2&&(e="Neutral"),"".concat(e," market: ").concat(a.raw)):"".concat(a.dataset.label,": ").concat(a.raw)}}},datalabels:{display:!1}}}}}}catch(g){return null}}function i(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.medianHomePrice,l=e.meta._details._state_name,i=e.meta._details._agg_type,d=e.labels.map((function(a){return new Date(a).getFullYear()})),s=new Set(d).size-1;return{chart:{type:"combined",data:{labels:d,datasets:[{label:"".concat((0,r.G)(e)," Median"),borderColor:"rgba(100, 84, 195, 0.1)",backgroundColor:"rgba(100, 84, 195, 0.1)",hoverBackgroundColor:"rgba(100, 84, 195, 0.6)",pointRadius:0,data:e.datasets[0].data,type:"bar",borderRadius:4},"state"!==i&&{label:"".concat((0,r.G)(e)," Trend"),borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[1].data},{label:"".concat(l," Trend"),borderColor:"#6454C3",backgroundColor:"#6454C3",pointRadius:0,data:e.datasets[2].data}].filter(Boolean)},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:s,maxRotation:0,minRotation:0}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.USD_K(a)}}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])},label:function(a){return"".concat(a.dataset.label,": ").concat(o.J.USD_K(a.raw))}}},datalabels:{display:!1}}}}}}catch(c){return null}}function d(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.medianPricePerSqft,l=e.meta._details._state_name,i=e.meta._details._agg_type,d=e.labels.map((function(a){return new Date(a).getFullYear()})),s=new Set(d).size-1;return{chart:{type:"line",data:{labels:d,datasets:["state"!==i&&{label:(0,r.G)(e),borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[0].data},{label:l,borderColor:"#6454C3",backgroundColor:"#6454C3",pointRadius:0,data:e.datasets[1].data}].filter(Boolean)},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:s,maxRotation:0,minRotation:0}},y:{position:"left",min:0,grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.USD_K(a)}}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])},label:function(a){return"".concat(a.dataset.label,": ").concat(o.J.USD_K(a.raw))}}},datalabels:{display:!1}}}}}}catch(c){return null}}var s=function(a){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(e){var r=e.chart,o=e.tooltip,n=r.canvas.parentNode.querySelector("div");if(n||((n=document.createElement("div")).style.position="absolute",n.style.offsetPosition="center",n.style.opacity=1,n.style.pointerEvents="none",n.style.transform="translate(20%, 0)",n.style.transition="all .1s ease",r.canvas.parentNode.appendChild(n)),0!==o.opacity){if(o.dataPoints){for(var l=o.dataPoints.map((function(a){return{raw:a.raw,dataIndex:a.dataIndex}}));n.firstChild;)n.firstChild.remove();l.forEach((function(t){var e=document.createElement("span");e.style.fontSize="36px",e.style.fontStyle="Raleway",e.style.fontWeight="700",e.style.color="#6454C3",e.style.color=o.dataPoints[0].dataset.hoverBackgroundColor[t.dataIndex];var r=a?a(t.raw):t.raw;e.innerHTML=r,n.appendChild(e)}))}var i=r.canvas,d=i.offsetLeft,s=i.offsetTop,c=i.offsetHeight,u=i.offsetWidth,b=n.children[0].getBoundingClientRect(),p=b.width,g=b.height,C=t?d+u/2-p/2-10:d+u/2,m=t?s+c/2-g/2-6:s+c/2-15;n.style.opacity=1,n.style.left=C+"px",n.style.top=m+"px",n.style.font=o.options.bodyFont.string}else n.style.opacity=0}};function c(){var a,t=function(a){return n.lC.value.get()<n.lC.enum[a]},e=1.8;return t("2xl")&&(a="lg",n.lC.value.get()>n.lC.enum[a])&&(e=1.4),t("sm")&&(e=1),e}function u(a){try{var t=a.askingPrice;return{legendData:[{label:"Below Asking Price",style:{backgroundColor:"#01D092",borderColor:"#01D092"}},{label:"At Asking Price",style:{backgroundColor:"#6454C3",borderColor:"#6454C3"}},{label:"Above Asking Price",style:{backgroundColor:"#FFCC49",borderColor:"#FFCC49"}}],chart:{type:"doughnut",data:{labels:t.labels,datasets:[{backgroundColor:["#FFCC49","#6454C3","#01D092"],hoverBackgroundColor:["#FFA800","#594BAC","#009E6F"],shadowOffsetX:3,shadowOffsetY:3,shadowBlur:120,shadowColor:"rgba(100, 84, 195, 0.5)",hoverBorderColor:"#FFFFFF",offset:10,hoverOffset:20,cutout:"40%",data:t.datasets[0].data.filter((function(a){return a})),type:"doughnut"}]},options:{aspectRatio:c(),scales:{x:{display:!1},y:{display:!1}},layout:{padding:10},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:s((function(a){return o.J.PERCENT_INT(a)}),!0)},datalabels:{display:!1}}}}}}catch(e){return null}}var b=e(29815),p=e(36740);function g(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e,l,i=a.yearlyAppreciationRate,d=o.J.NUMBER((e=Math).min.apply(e,(0,b.Z)(i.datasets[0].data))),s=o.J.NUMBER((l=Math).max.apply(l,(0,b.Z)(i.datasets[0].data)));return{legendData:[{label:(0,r.G)(i),style:{backgroundColor:"#666666",borderColor:"#666666"}},{label:"High Appreciation",style:{backgroundColor:"#00BA82",borderColor:"#00BA82",borderRadius:"2px"}},{label:"Medium Appreciation",style:{backgroundColor:"#FECB48",borderColor:"#FECB48",borderRadius:"2px"}},{label:"Low Appreciation",style:{backgroundColor:"#F44336",borderColor:"#F44336",borderRadius:"2px"}}],chart:{type:"line",data:{labels:i.labels,datasets:[{borderColor:"#666666",pointRadius:0,data:i.datasets[0].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT_INT(a)}}}},backgrounds:(0,p.F)(d,s),elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{labelColor:function(a){var t=function(a,t){return a<-.02?t:void 0}(a.raw,"#F44336")||function(a,t){return a>.02?t:void 0}(a.raw,"#00BA82")||function(a,t){return a<.02&&a>-.02?t:void 0}(a.raw,"#FECB48");return{borderColor:t,backgroundColor:t,borderWidth:1}},label:function(a){var t;return a.raw>.02?t="High":a.raw<-.02?t="Low":a.raw<2&&a.raw>-.02&&(t="Medium"),"".concat(t," Appreciation: ").concat(o.J.PERCENT_INT(a.raw))}}},datalabels:{display:!1}}}}}}catch(c){return null}}function C(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e,l,i=a.yearlyAppreciationRate,d=o.J.NUMBER((e=Math).min.apply(e,(0,b.Z)(i.datasets[0].data))),s=o.J.NUMBER((l=Math).max.apply(l,(0,b.Z)(i.datasets[0].data)));return{legendData:[{label:(0,r.G)(i),style:{backgroundColor:"#666666",borderColor:"#666666"}},{label:"High Appreciation",style:{backgroundColor:"#00BA82",borderColor:"#00BA82",borderRadius:"2px"}},{label:"Medium Appreciation",style:{backgroundColor:"#FECB48",borderColor:"#FECB48",borderRadius:"2px"}},{label:"Low Appreciation",style:{backgroundColor:"#F44336",borderColor:"#F44336",borderRadius:"2px"}}],chart:{type:"line",data:{labels:i.labels,datasets:[{borderColor:"#666666",pointRadius:0,data:i.datasets[0].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:3,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT_INT(a)}}}},backgrounds:(0,p.F)(d,s),elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{labelColor:function(a){var t=function(a,t){return a<-.02?t:void 0}(a.raw,"#F44336")||function(a,t){return a>.02?t:void 0}(a.raw,"#00BA82")||function(a,t){return a<.02&&a>-.02?t:void 0}(a.raw,"#FECB48");return{borderColor:t,backgroundColor:t,borderWidth:1}},label:function(a){var t;return a.raw>.02?t="High":a.raw<-.02?t="Low":a.raw<2&&a.raw>-.02&&(t="Medium"),"".concat(t," Appreciation: ").concat(o.J.PERCENT_INT(a.raw))}}},datalabels:{display:!1}}}}}}catch(c){return null}}function m(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.averageMonthlyCapRate;return{chart:{type:"line",data:{labels:e.labels.map((function(a){return o.J.DATE_MONTH_YEAR(a)})),datasets:[{label:"Close Cap Rate",borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[0].data},{label:"Asking Cap Rate",borderColor:"#6454C3",backgroundColor:"#6454C3",pointRadius:0,data:e.datasets[1].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT_2DIG(a)}}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(a[0].label)},label:function(a){return"".concat(a.dataset.label,": ").concat(o.J.PERCENT_2DIG(a.raw))}}},datalabels:{display:!1}}}}}}catch(r){return null}}function y(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.homesSold,l=e.labels.map((function(a){return new Date(a).getFullYear()})),i=new Set(l).size-1;return{chart:{type:"combined",data:{labels:l,datasets:[{label:"".concat((0,r.G)(e)," Median"),borderColor:"rgba(100, 84, 195, 0.1)",backgroundColor:"rgba(100, 84, 195, 0.1)",hoverBackgroundColor:"rgba(100, 84, 195, 0.6)",pointRadius:0,data:e.datasets[0].data,type:"bar",borderRadius:4},{label:"".concat((0,r.G)(e)," Trend"),borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[1].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:i,maxRotation:0,minRotation:0}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])}}},datalabels:{display:!1}}}}}}catch(d){return null}}function f(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.homesSoldYearOverYear,r=e.labels.map((function(a){return new Date(a).getFullYear()})),l=new Set(r).size-1;return{chart:{type:"line",data:{labels:r,datasets:[{borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[0].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:l,maxRotation:0,minRotation:0}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT_INT(a)}}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])},label:function(a){return o.J.PERCENT_INT(a.raw)}}},datalabels:{display:!1}}}}}}catch(i){return null}}function h(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.soldHomesAndNewListings,r=e.labels.map((function(a){return new Date(a).getFullYear()})),l=new Set(r).size-1;return{title:"Sold Homes and New Listings",chart:{type:"line",data:{labels:r,datasets:[{label:"Sold Homes",borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[1].data},{label:"New Listings",borderColor:"#6454C3",backgroundColor:"#6454C3",pointRadius:0,data:e.datasets[2].data},{label:"Total Available Inventory",borderColor:"#E1E1E1",backgroundColor:"#E1E1E1",pointRadius:0,data:e.datasets[0].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:3,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:l,maxRotation:0,minRotation:0}},y:{position:"left",min:0,grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])}}},datalabels:{display:!1}}}}}}catch(i){return null}}function k(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.newListings,l=e.labels.map((function(a){return new Date(a).getFullYear()})),i=new Set(l).size-1;return{chart:{type:"combined",data:{labels:l,datasets:[{label:"".concat((0,r.G)(e)," New Listings"),backgroundColor:"rgba(100, 84, 195, 0.1)",borderColor:"rgba(100, 84, 195, 0.1)",hoverBackgroundColor:"rgba(100, 84, 195, 0.6)",pointRadius:0,data:e.datasets[0].data,type:"bar",borderRadius:4},{label:"".concat((0,r.G)(e)," Trend"),borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[1].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:i,maxRotation:0,minRotation:0}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])}}},datalabels:{display:!1}}}}}}catch(d){return null}}function R(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.newListingsYearOverYear,r=e.labels.map((function(a){return new Date(a).getFullYear()})),l=new Set(r).size-1;return{chart:{type:"line",data:{labels:r,datasets:[{borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[0].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:l,maxRotation:0,minRotation:0}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT_INT(a)}}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])},label:function(a){return o.J.PERCENT_INT(a.raw)}}},datalabels:{display:!1}}}}}}catch(i){return null}}function w(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.monthsOfSupply,l=e.meta._details._state_name,i=e.meta._details._agg_type,d=e.labels.map((function(a){return new Date(a).getFullYear()})),s=new Set(d).size-1;return{chart:{type:"line",data:{labels:d,datasets:["state"!==i&&{label:"".concat((0,r.G)(e)," Trend"),borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[0].data},{label:"".concat(l," Trend"),borderColor:"#6454C3",backgroundColor:"#6454C3",pointRadius:0,data:e.datasets[1].data}].filter(Boolean)},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:s,maxRotation:0,minRotation:0}},y:{position:"left",min:0,grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])}}},datalabels:{display:!1}}}}}}catch(c){return null}}function T(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.daysOnMarket,l=e.meta._details._state_name,i=e.meta._details._agg_type,d=e.labels.map((function(a){return new Date(a).getFullYear()})),s=new Set(d).size-1;return{chart:{type:"line",data:{labels:d,datasets:["state"!==i&&{label:"".concat((0,r.G)(e)," Trend"),borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[0].data},{label:"".concat(l," Trend"),borderColor:"#6454C3",backgroundColor:"#6454C3",pointRadius:0,data:e.datasets[1].data}].filter(Boolean)},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:s,maxRotation:0,minRotation:0}},y:{position:"left",min:0,grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])}}},datalabels:{display:!1}}}}}}catch(c){return null}}function v(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.medianCloseToListRatio,r=e.labels.map((function(a){return new Date(a).getFullYear()})),l=new Set(r).size-1,i=e.datasets[0].data.map((function(a){return o.J.PERCENT_INT(a)})),d=new Set(i).size+1;return{chart:{type:"line",data:{labels:r,datasets:[{borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[0].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:l,maxRotation:0,minRotation:0}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT(a)},maxTicksLimit:d>5?11:d}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])},label:function(a){return o.J.PERCENT_INT(a.raw)}}},datalabels:{display:!1}}}}}}catch(s){return null}}function B(a){var t=n.lC.value.get()<n.lC.enum.sm;try{var e=a.medianClosePriceVsListPrice,r=e.labels.map((function(a){return new Date(a).getFullYear()})),l=new Set(r).size-1;return{chart:{type:"line",data:{labels:r,datasets:[{label:"List price",borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:e.datasets[0].data},{label:"Close Price",borderColor:"#6454C3",backgroundColor:"#6454C3",pointRadius:0,data:e.datasets[1].data}]},options:{interaction:{intersect:!1,mode:"index"},aspectRatio:t?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:l,maxRotation:0,minRotation:0}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.USD_K(a)}}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(e.labels[a[0].dataIndex])},label:function(a){return"".concat(a.dataset.label,": ").concat(o.J.USD_K(a.raw))}}},datalabels:{display:!1}}}}}}catch(i){return null}}function E(a){try{var t=a.rentPace;return{legendData:[{label:"Below 30 days",style:{backgroundColor:"#01D092",borderColor:"#01D092"}},{label:"30-90 days",style:{backgroundColor:"#6454C3",borderColor:"#6454C3"}},{label:"Above 90 days",style:{backgroundColor:"#FFCC49",borderColor:"#FFCC49"}}],chart:{type:"doughnut",data:{labels:t.labels,datasets:[{backgroundColor:["#FFCC49","#6454C3","#01D092"],hoverBackgroundColor:["#FFA800","#594BAC","#009E6F"],shadowOffsetX:3,shadowOffsetY:3,shadowBlur:120,shadowColor:"rgba(100, 84, 195, 0.5)",hoverBorderColor:"#FFFFFF",offset:10,hoverOffset:20,cutout:"40%",data:t.datasets[0].data.filter((function(a){return a})),type:"doughnut"}]},options:{aspectRatio:c(),scales:{x:{display:!1},y:{display:!1}},layout:{padding:10},plugins:{legend:{display:!1},tooltip:{enabled:!1,external:s((function(a){return o.J.PERCENT_INT(a)}),!0)},datalabels:{display:!1}}}}}}catch(e){return null}}function x(a,t){var e=n.lC.value.get()<n.lC.enum.sm;try{var r=a.priceTrendByBedroomCount,l=r.labels.map((function(a){return new Date(a).getFullYear()})),i=new Set(l).size-1;return{chart:{type:"line",data:{labels:l,datasets:[{borderColor:"#01D092",backgroundColor:"#01D092",pointRadius:0,data:r.datasets[t.rawValue.$id].data}]},options:{spanGaps:!0,interaction:{intersect:!1,mode:"index"},aspectRatio:e?1:3,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{maxTicksLimit:i,maxRotation:0,minRotation:0}},y:{position:"left",min:0,grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.USD_K(a)}}}},elements:{line:{tension:.4}},plugins:{legend:{display:!1},tooltip:{callbacks:{title:function(a){return o.J.DATE_MONTH_YEAR(r.labels[a[0].dataIndex])},label:function(a){return o.J.USD_INT(a.raw)}}},datalabels:{display:!1}}}}}}catch(d){return null}}function _(a,t,e){var l=n.lC.value.get()<n.lC.enum.sm;try{for(var i=a.homesSoldByPriceRange,d="sale"===e?t.dto.data.price:t.dto.data.predictedRent,s=i.labels.findIndex((function(a){return a.min&&a.max?a.min<=d&&a.max>=d:a.min?a.min<=d:a.max>=d})),c=[],u=[],b=[],p=[],g=0;g<i.labels.length;g++)s===g?(c.push("rgba(0, 186, 130, 0.2)"),u.push("rgba(0, 186, 130, 0.6)"),b.push("rgba(0, 186, 130, 0.6)"),p.push("rgba(0, 186, 130, 0.6)")):(c.push("rgba(100, 84, 195, 0.1)"),u.push("rgba(100, 84, 195, 0.6)"),b.push("rgba(100, 84, 195, 1)"),p.push("rgba(100, 84, 195, 1)"));return{legendData:[{label:"Subject Property",style:{backgroundColor:"#01D092",borderColor:"#01D092"}},{label:(0,r.G)(i),style:{backgroundColor:"#6454C3",borderColor:"#6454C3"}}],chart:{type:"bar",data:{labels:i.labels.map((function(a){return o.J.RANGE_NAMED(a,"USD_INT")})),datasets:[{backgroundColor:c,hoverBackgroundColor:u,pointRadius:0,data:i.datasets[0].data,type:"bar",borderRadius:4}]},options:{interaction:{intersect:!1,mode:"index"},layout:{padding:{top:30}},aspectRatio:l?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT_INT(a)}}}},plugins:{legend:{display:!1},tooltip:{enabled:!1},datalabels:{formatter:function(a){return a<.01?"< 1%":o.J.PERCENT_INT(a)},display:!0,align:"end",anchor:"end",color:"#222222",font:{weight:700},offset:20,padding:function(a){var t=(a.chart.getDatasetMeta(0).data[0].width-9*o.J.PERCENT_INT(a.dataset.data[a.dataIndex]).length)/2;return{bottom:5,top:-19,left:t,right:t}},borderWidth:2,borderRadius:8,backgroundColor:p,borderColor:b}}}}}}catch(C){return null}}function D(a,t){var e=n.lC.value.get()<n.lC.enum.sm;try{for(var l=a.homesSoldByBedroomCount,i=["Studio","1 bed","2 beds","3 beds","4 beds","5+ beds"],d=t.dto.data.beds>5?5:t.dto.data.beds,s=l.labels.findIndex((function(a){return a===d})),c=[],u=[],b=[],p=[],g=0;g<l.labels.length;g++)s===g?(c.push("rgba(0, 186, 130, 0.2)"),u.push("rgba(0, 186, 130, 0.6)"),b.push("rgba(0, 186, 130, 0.6)"),p.push("rgba(0, 186, 130, 0.6)")):(c.push("rgba(100, 84, 195, 0.1)"),u.push("rgba(100, 84, 195, 0.6)"),b.push("rgba(100, 84, 195, 1)"),p.push("rgba(100, 84, 195, 1)"));return{legendData:[{label:"Subject Property",style:{backgroundColor:"#01D092",borderColor:"#01D092"}},{label:(0,r.G)(l),style:{backgroundColor:"#6454C3",borderColor:"#6454C3"}}],chart:{type:"bar",data:{labels:l.labels.map((function(a){return i[a]})),datasets:[{backgroundColor:c,hoverBackgroundColor:u,pointRadius:0,data:l.datasets[0].data,type:"bar",borderRadius:4}]},options:{interaction:{intersect:!1,mode:"index"},layout:{padding:{top:30}},aspectRatio:e?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},stacked:!0,ticks:{callback:function(a){return o.J.PERCENT_INT(a)}}}},plugins:{legend:{display:!1},tooltip:{enabled:!1},datalabels:{formatter:function(a){return a<.01?"< 1%":o.J.PERCENT_INT(a)},display:!0,align:"end",anchor:"end",color:"#222222",font:{weight:700},offset:20,padding:function(a){var t=(a.chart.getDatasetMeta(0).data[0].width-9*o.J.PERCENT_INT(a.dataset.data[a.dataIndex]).length)/2;return{bottom:5,top:-19,left:t,right:t}},borderWidth:2,borderRadius:8,backgroundColor:p,borderColor:b}}}}}}catch(C){return null}}function N(a,t){var e=n.lC.value.get()<n.lC.enum.sm;try{for(var l=a.homesSoldBySize,i=t.dto.data.buildingSize,d=l.labels.findIndex((function(a){return a.min&&a.max?a.min<=i&&a.max>=i:a.min?a.min<=i:a.max>=i})),s=[],c=[],u=[],b=[],p=0;p<l.labels.length;p++)d===p?(s.push("rgba(0, 186, 130, 0.2)"),c.push("rgba(0, 186, 130, 0.6)"),u.push("rgba(0, 186, 130, 0.6)"),b.push("rgba(0, 186, 130, 0.6)")):(s.push("rgba(100, 84, 195, 0.1)"),c.push("rgba(100, 84, 195, 0.6)"),u.push("rgba(100, 84, 195, 1)"),b.push("rgba(100, 84, 195, 1)"));return{legendData:[{label:"Subject Property",style:{backgroundColor:"#01D092",borderColor:"#01D092"}},{label:(0,r.G)(l),style:{backgroundColor:"#6454C3",borderColor:"#6454C3"}}],chart:{type:"bar",data:{labels:l.labels.map((function(a){return o.J.RANGE(a,(function(a){return"".concat(o.J.NUMBER(a)," ft\xb2")}))})),datasets:[{backgroundColor:s,hoverBackgroundColor:c,pointRadius:0,data:l.datasets[0].data,type:"bar",borderRadius:4}]},options:{interaction:{intersect:!1,mode:"index"},layout:{padding:{top:30}},aspectRatio:e?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT_INT(a)}}}},plugins:{legend:{display:!1},tooltip:{enabled:!1},datalabels:{formatter:function(a){return a<.01?"< 1%":o.J.PERCENT_INT(a)},display:!0,align:"end",anchor:"end",color:"#222222",font:{weight:700},offset:20,padding:function(a){var t=(a.chart.getDatasetMeta(0).data[0].width-9*o.J.PERCENT_INT(a.dataset.data[a.dataIndex]).length)/2;return{bottom:5,top:-19,left:t,right:t}},borderWidth:2,borderRadius:8,backgroundColor:b,borderColor:u}}}}}}catch(g){return null}}function S(a,t){var e=n.lC.value.get()<n.lC.enum.sm;try{for(var l=a.homesSoldByBathroomCount,i=t.dto.data.baths>4?4:t.dto.data.baths,d=l.labels.findIndex((function(a){return a===i})),s=[],c=[],u=[],b=[],p=0;p<l.labels.length;p++)d===p?(s.push("rgba(0, 186, 130, 0.2)"),c.push("rgba(0, 186, 130, 0.6)"),u.push("rgba(0, 186, 130, 0.6)"),b.push("rgba(0, 186, 130, 0.6)")):(s.push("rgba(100, 84, 195, 0.1)"),c.push("rgba(100, 84, 195, 0.6)"),u.push("rgba(100, 84, 195, 1)"),b.push("rgba(100, 84, 195, 1)"));return{legendData:[{label:"Subject Property",style:{backgroundColor:"#01D092",borderColor:"#01D092"}},{label:(0,r.G)(l),style:{backgroundColor:"#6454C3",borderColor:"#6454C3"}}],chart:{type:"bar",data:{labels:l.labels.map((function(a){return 1===a?"".concat(a," bath"):"".concat(a).concat(4===a?"+":""," baths")})),datasets:[{backgroundColor:s,hoverBackgroundColor:c,pointRadius:0,data:l.datasets[0].data,type:"bar",borderRadius:4}]},options:{interaction:{intersect:!1,mode:"index"},layout:{padding:{top:30}},aspectRatio:e?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT_INT(a)}}}},plugins:{legend:{display:!1},tooltip:{enabled:!1},datalabels:{formatter:function(a){return a<.01?"< 1%":o.J.PERCENT_INT(a)},display:!0,align:"end",anchor:"end",color:"#222222",font:{weight:700},offset:20,padding:function(a){var t=(a.chart.getDatasetMeta(0).data[0].width-9*o.J.PERCENT_INT(a.dataset.data[a.dataIndex]).length)/2;return{bottom:5,top:-19,left:t,right:t}},borderWidth:2,borderRadius:8,backgroundColor:b,borderColor:u}}}}}}catch(g){return null}}function F(a,t){var e=n.lC.value.get()<n.lC.enum.sm;try{for(var l=a.yearBuilt,i=t.dto.data.yearBuilt,d=0,s=0;s<l.labels.length;s++)i>l.labels[s].min&&i<l.labels[s].max&&(d=s);for(var c=[],u=[],b=[],p=[],g=0;g<l.labels.length;g++)d===g?(c.push("rgba(0, 186, 130, 0.2)"),u.push("rgba(0, 186, 130, 0.6)"),b.push("rgba(0, 186, 130, 0.6)"),p.push("rgba(0, 186, 130, 0.6)")):(c.push("rgba(100, 84, 195, 0.1)"),u.push("rgba(100, 84, 195, 0.6)"),b.push("rgba(100, 84, 195, 1)"),p.push("rgba(100, 84, 195, 1)"));var C={legendData:[{label:"Subject Property",style:{backgroundColor:"#01D092",borderColor:"#01D092"}},{label:(0,r.G)(l),style:{backgroundColor:"#6454C3",borderColor:"#6454C3"}}],chart:{type:"bar",data:{labels:l.labels.map((function(a,t){return 0===t?"< ".concat(a.max):t+1===l.labels.length?"> ".concat(a.min):"".concat(a.min," - ").concat(a.max)})),datasets:[{backgroundColor:c,hoverBackgroundColor:u,pointRadius:0,data:l.datasets[0].data,type:"bar",borderRadius:4}]},options:{interaction:{intersect:!1,mode:"index"},layout:{padding:{top:30}},aspectRatio:e?1:2,scales:{x:{grid:{display:!1,drawBorder:!1,drawTicks:!1}},y:{position:"left",grid:{drawBorder:!1,color:"rgba(0, 0, 0, 0.02)"},ticks:{callback:function(a){return o.J.PERCENT_INT(a)}}}},plugins:{legend:{display:!1},tooltip:{enabled:!1},datalabels:{formatter:o.J.PERCENT_INT,display:!0,align:"end",anchor:"end",color:"#222222",font:{weight:700},offset:20,padding:function(a){var t=(a.chart.getDatasetMeta(0).data[0].width-9*o.J.PERCENT_INT(a.dataset.data[a.dataIndex]).length)/2;return{bottom:5,top:-19,left:t,right:t}},borderWidth:2,borderRadius:8,backgroundColor:p,borderColor:b}}}}};return C}catch(m){return null}}function P(a,t,e){return{priceTrendByBedroomCount:x(e,t.marketChartControl),medianHomePrice:i(e),medianPricePerSqft:d(e),newListings:k(e),newListingsYearOverYear:R(e),homesSold:y(e),homesSoldYearOverYear:f(e),medianCloseToListRatio:v(e),medianClosePriceVsListPrice:B(e),homesSoldByPriceRange:_(e,a,"sale"),homesSoldByBedroomCount:D(e,a),homesSoldBySize:N(e,a),homesSoldByBathroomCount:S(e,a)}}function A(a,t){return{marketCondition:l(t,"sale"),medianHomePrice:i(t),medianPricePerSqft:d(t),askingPrice:u(t),yearlyAppreciationRate:g(t),averageMonthlyCapRate:m(t),homesSold:y(t),homesSoldYearOverYear:f(t),soldHomesAndNewListings:h(t),newListings:k(t),newListingsYearOverYear:R(t),monthsOfSupply:w(t),daysOnMarket:T(t),medianCloseToListRatio:v(t),medianClosePriceVsListPrice:B(t),rentPace:E(t),priceTrendByBedroomCount:x(t,a.saleChartControl),homesSoldByPriceRange:_(t,a.Basis,"sale"),homesSoldByBedroomCount:D(t,a.Basis),homesSoldBySize:N(t,a.Basis),homesSoldByBathroomCount:S(t,a.Basis),yearBuilt:F(t,a.Basis)}}function J(a,t){return{marketCondition:l(t,"rent"),medianHomePrice:i(t),medianPricePerSqft:d(t),askingPrice:u(t),yearlyAppreciationRate:C(t),priceTrendByBedroomCount:x(t,a.rentChartControl),homesSold:y(t),homesSoldYearOverYear:f(t),soldHomesAndNewListings:h(t),newListings:k(t),newListingsYearOverYear:R(t),monthsOfSupply:w(t),daysOnMarket:T(t),medianCloseToListRatio:v(t),medianClosePriceVsListPrice:B(t),rentPace:E(t),homesSoldByPriceRange:_(t,a.Basis,"rent"),homesSoldByBedroomCount:D(t,a.Basis),homesSoldBySize:N(t,a.Basis),homesSoldByBathroomCount:S(t,a.Basis),yearBuilt:F(t,a.Basis)}}},36740:function(a,t,e){e.d(t,{F:function(){return n}});var r=e(26042),o=e(69396);function n(a,t){var e=t-a,n=a-(e>.2?a%.05:a%.02),l=function(){var t,r=(t=n).toString().includes(".")?t.toString().split(".").pop().length:0;return a<0&&1!==r?e>.2?n-.05:n-.02:n};return[{from:1/0,to:-.04,color:"rgba(244, 67, 54, 0.2)"},{from:-.04,to:-.02,color:"rgba(244, 67, 54, 0.1)"},{from:-.02,to:.02,color:"rgba(254, 203, 72, 0.1)"},{from:.02,to:.04,color:"rgba(0, 186, 130, 0.1)"},{from:.04,to:1/0,color:"rgba(0, 186, 130, 0.2)"}].filter((function(t){return a<t.to})).map((function(a,t){return 0===t?(0,o.Z)((0,r.Z)({},a),{from:l()}):a}))}},25987:function(a,t,e){function r(a){switch(a.meta._details._agg_type){case"county":return a.meta._details._county;case"city":return a.meta._details._city;case"zip":return a.meta._details._zip_code;default:return a.meta._details._state_name}}e.d(t,{G:function(){return r}})}}]);