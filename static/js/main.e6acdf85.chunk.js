(this["webpackJsonpweather-mui"]=this["webpackJsonpweather-mui"]||[]).push([[0],{72:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(14),o=a.n(c),i=(a(72),a(22)),s=a.n(i),l=a(35),d=a(17),u=a(130),j=a(132),h=a(120),p=a(88);var b=function(e){var t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()],a=e.getDate(),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()];return"".concat(t," ").concat(a," ").concat(r)},x=a(2);var m=function(e){var t=e.location,a=e.country;return Object(x.jsx)(j.a,{marginBottom:3,children:Object(x.jsxs)(h.a,{className:"location-container",children:[Object(x.jsxs)(p.a,{variant:"h2",align:"center",color:"primary",children:[t,", ",a]}),Object(x.jsx)(p.a,{variant:"h4",align:"center",color:"secondary",children:b(new Date)})]})})};var f=function(e){var t=e.variant,a=e.temp;return Object(x.jsx)(j.a,{marginBottom:2,children:Object(x.jsxs)(h.a,{className:"temp-container",children:[Object(x.jsxs)(p.a,{variant:t,align:"center",color:"primary",children:["Current: ",Math.round(a.feels_like),"\xb0 F"]}),Object(x.jsxs)(p.a,{variant:t,align:"center",color:"primary",children:["High: ",Math.round(a.temp_max),"\xb0F"]}),Object(x.jsxs)(p.a,{variant:t,align:"center",color:"primary",children:["Low: ",Math.round(a.temp_min),"\xb0F"]})]})})};var O=function(e){var t=e.variant,a=e.weather;return Object(x.jsx)(j.a,{children:Object(x.jsx)(h.a,{className:"weather-container",children:Object(x.jsx)(p.a,{variant:t,align:"center",color:"secondary",children:a})})})};var v=function(e){var t=e.weather;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m,{country:t.sys.country,location:t.name}),Object(x.jsx)(f,{variant:"h4",temp:t.main}),Object(x.jsx)(O,{variant:"h4",weather:t.weather[0].main})]})};var g=function(e){var t=e.queryError;return Object(x.jsx)(p.a,{variant:"h4",color:"primary",align:"center",children:t})},y=a(127),w=a(90),k=a(125),M=a(126),C=a(122),D=a(57),F=a(123),W=a(124),A=Object(C.a)({input:{"& .MuiInput-underline:before":{borderBottom:"2px solid white"},"& .MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:"2px solid white"},margin:"15px 0px",color:"white !important",fontSize:"24px !important"},cardWarm:{minWidth:"200px",width:"200px",backgroundColor:"rgba(255,255,255, 0.1)",color:"white"},cardCold:{minWidth:"200px",width:"200px",backgroundColor:"rgba(0,0,0, 0.3)",color:"white"},forecast:{position:"relative ",bottom:0}}),B=Object(D.a)({palette:{primary:{main:F.a[100]},secondary:{main:W.a[400]}}});var S=function(e){var t=e.weather,a=e.day,r=A(),n=b(new Date(1e3*a.dt));return Object(x.jsx)(k.a,{variant:"outlined",className:t.main.temp>"70"?r.cardWarm:r.cardCold,children:Object(x.jsxs)(M.a,{children:[Object(x.jsx)(p.a,{variant:"h6",align:"center",color:"secondary",children:n}),Object(x.jsx)("br",{}),Object(x.jsxs)(p.a,{variant:"h6",component:"p",align:"center",color:"primary",children:["High: ",Math.round(a.temp.max),"\xb0F"]}),Object(x.jsxs)(p.a,{variant:"h6",component:"p",align:"center",color:"primary",children:["Low: ",Math.round(a.temp.min),"\xb0F"]}),Object(x.jsx)(O,{variant:"h6",weather:a.weather[0].main})]})})},z=a(133);var T=function(e){var t=e.weather,a=e.hourData,r=A(),n=new Date(1e3*a.dt).getHours();return Object(x.jsx)(k.a,{variant:"outlined",className:t.main.temp>"70"?r.cardWarm:r.cardCold,children:Object(x.jsxs)(M.a,{children:[Object(x.jsxs)(p.a,{variant:"h6",align:"center",color:"secondary",children:[n>12?n-12:n," ",n<12?"AM":"PM"]}),Object(x.jsxs)(p.a,{variant:"h6",align:"center",color:"primary",children:[Math.round(a.temp),"\xb0F"]}),Object(x.jsx)(p.a,{variant:"h6",align:"center",color:"secondary",children:a.weather[0].main})]})})};var H=function(e){var t=e.weather,a=e.toggleDaily,r=e.toggleHourly,n=e.dailyActive,c=e.forecast;return Object(x.jsxs)(h.a,{sx:{marginBottom:100},children:[Object(x.jsx)(j.a,{sx:{display:"flex",justifyContent:"center",marginBottom:"20px"},children:Object(x.jsxs)(y.a,{children:[Object(x.jsx)(w.a,{variant:n?"contained":"outlined",color:n?"secondary":"primary",onClick:a,children:"Daily"}),Object(x.jsx)(w.a,{variant:n?"outlined":"contained",color:n?"primary":"secondary",onClick:r,children:"Hourly"})]})}),Object(x.jsx)(j.a,{sx:{display:"flex",overflow:"hidden",overflowX:"scroll",maxWidth:"90%",margin:"0 auto",gap:6},children:n?c.map((function(e){return Object(x.jsx)(S,{weather:t,day:e},Object(z.a)())})):c.map((function(e){return Object(x.jsx)(T,{weather:t,hourData:e},Object(z.a)())}))})]})},N=a(48);var L=function(e){var t=e.chartData,a=e.xAxisLabel,r=e.maxTempValue;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.a,{data:t,options:{responsive:!0,plugins:{legend:{labels:{font:{size:14,color:"#ffca28"}}}},scales:{x:{display:!0,title:{display:!0,text:a,font:{size:18}},ticks:{color:"#ffca28",font:{size:14}},grid:{color:"rgba(255,255,255,0.3)"}},y:{max:r,display:!0,title:{display:!0,text:"Temperature in Farenheit",font:{size:18}},ticks:{color:"#ffca28",font:{size:14}},grid:{color:"rgba(255,255,255,0.3)"}}}}})})};var P=function(e){var t=e.chartData,a=e.xAxisLabel,r=e.maxTempValue;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.a,{data:t,options:{responsive:!0,plugins:{legend:{labels:{font:{size:14,color:"#ffca28"}}}},scales:{x:{display:!0,title:{display:!0,text:a,font:{size:18}},ticks:{color:"#ffca28",font:{size:14}},grid:{color:"rgba(255,255,255,0.3)"}},y:{max:r,display:!0,title:{display:!0,text:"Temperature in Farenheit",font:{size:18}},ticks:{color:"#ffca28",font:{size:14}},grid:{color:"rgba(255,255,255,0.3)"}}}}})})};var E=function(e){var t,a,r=e.dailyActive,n=e.forecast,c="";if(r){c="Dates";var o=n.map((function(e){return"".concat(new Date(1e3*e.dt).getMonth()+1,"/").concat(new Date(1e3*e.dt).getDate())})),i=n.map((function(e){return Math.round(e.temp.max)})),s=n.map((function(e){return Math.round(e.temp.min)}));t=i.find((function(e){return e>100}))?120:100,a={labels:o,datasets:[{label:"Min Temp",data:s,backgroundColor:"rgba(207, 216, 220, 0.5)",borderColor:"rgba(207, 216, 220, 0.5)",borderWidth:1.5,fill:!0,pointBorderWidth:3,pointHoverBorderWidth:6,tension:.325},{label:"Max Temp",data:i,backgroundColor:"#ffca28",borderColor:"#ffca28",borderWidth:1.5,pointBorderWidth:3,pointHoverBorderWidth:6,tension:.325}]}}else{c="Time";var l=n.map((function(e){var t=new Date(1e3*e.dt).getHours();return t>12?"".concat(t-12," PM"):"".concat(t," AM")})),d=n.map((function(e){return Math.round(e.temp)}));t=d.find((function(e){return e>100}))?120:100,a={labels:l,datasets:[{label:"Temperature in Farenheit",data:d,backgroundColor:"#ffca28",borderColor:"#ffca28",borderWidth:1.5,pointBorderWidth:3,pointHoverBorderWidth:6,tension:.325}]}}return Object(x.jsx)(j.a,{sx:{backgroundColor:"rgba(0,0,0,0.5)",padding:"40px 0"},children:Object(x.jsx)(h.a,{children:r?Object(x.jsx)(L,{chartData:a,xAxisLabel:c,maxTempValue:t}):Object(x.jsx)(P,{chartData:a,xAxisLabel:c,maxTempValue:t})})})},I=a(131),J=a(128),V=a(129),q=a(56),_=a.n(q);var R=function(e){var t=e.handleSearch,a=e.onChange,r=e.value,n=A();return Object(x.jsx)(j.a,{marginBottom:3,children:Object(x.jsx)(h.a,{maxWidth:"sm",children:Object(x.jsx)(I.a,{variant:"standard",type:"text",fullWidth:!0,color:"secondary",placeholder:"  Enter Location...",onChange:a,value:r,onKeyPress:t,className:n.input,InputProps:{className:n.input,endAdornment:Object(x.jsx)(J.a,{position:"end",children:Object(x.jsx)(V.a,{style:{backgroundColor:"transparent"},disableRipple:!0,color:"secondary",onClick:t,children:Object(x.jsx)(_.a,{fontSize:"large"})})})}})})})},K="16b2610e501d52ee38643a371d47f57b",U="https://api.openweathermap.org/data/2.5/",X="https://api.openweathermap.org/data/2.5/onecall?",G=function(){var e=Object(l.a)(s.a.mark((function e(t){var a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(U,"weather?q=").concat(t,"&units=imperial&APPID=").concat(K));case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(X,"lat=").concat(t,"&lon=").concat(a,"&units=imperial&exclude=minutely&appid=").concat(K));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();var Y=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)({}),o=Object(d.a)(c,2),i=o[0],j=o[1],h=Object(r.useState)(""),p=Object(d.a)(h,2),b=p[0],m=p[1],f=Object(r.useState)([]),O=Object(d.a)(f,2),y=O[0],w=O[1],k=Object(r.useState)([]),M=Object(d.a)(k,2),C=M[0],D=M[1],F=Object(r.useState)(!0),W=Object(d.a)(F,2),S=W[0],z=W[1],T=A(),N=function(){var e=Object(l.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Enter"!==t.key&&"click"!==t.type){e.next=28;break}if(""!==a||0!==Object.keys(i).length){e.next=5;break}m("Please enter a location!"),e.next=28;break;case 5:if(""!==a||!i){e.next=9;break}return e.abrupt("return");case 9:return e.prev=9,e.next=12,G(a);case 12:if("404"!==(r=e.sent).cod){e.next=17;break}throw r;case 17:j(r),n(""),m(""),z(!0);case 21:e.next=28;break;case 23:e.prev=23,e.t0=e.catch(9),console.log(e.t0),m(e.t0.message.toUpperCase()),j("");case 28:case"end":return e.stop()}}),e,null,[[9,23]])})));return function(t){return e.apply(this,arguments)}}(),L=Object(r.useRef)(!0);return Object(r.useEffect)((function(){if(L.current)L.current=!1;else{if(0===Object.keys(i).length)return;Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(i.coord.lat,i.coord.lon);case 2:t=e.sent;try{w(t.daily),D(t.hourly)}catch(a){console.log(a)}case 4:case"end":return e.stop()}}),e)})))()}}),[i]),Object(x.jsx)(u.a,{theme:B,children:Object(x.jsx)("div",{className:"undefined"!==typeof i.main?i.main.temp>"70"?"app":"app cold":"app",children:Object(x.jsxs)("main",{children:[Object(x.jsx)(R,{handleSearch:N,value:a,onChange:function(e){return n(e.target.value)}}),"undefined"!==typeof i.main?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(v,{weather:i})}):Object(x.jsx)(x.Fragment,{}),""!==b?Object(x.jsx)(g,{queryError:b}):Object(x.jsx)(x.Fragment,{}),"undefined"!==typeof i.main&&y?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("section",{className:T.forecast,children:Object(x.jsx)(H,{weather:i,toggleDaily:function(){z(!0)},toggleHourly:function(){z(!1)},dailyActive:S,forecast:S?y.slice(1):C.slice(1,13)})}),Object(x.jsx)("section",{children:Object(x.jsx)(E,{dailyActive:S,forecast:S?y:C.slice(0,13)})})]}):Object(x.jsx)(x.Fragment,{})]})})})};o.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(Y,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.e6acdf85.chunk.js.map