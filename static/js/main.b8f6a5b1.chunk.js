(this["webpackJsonpweather-mui"]=this["webpackJsonpweather-mui"]||[]).push([[0],{49:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),i=n.n(c),o=(n(49),n(11)),s=n(97),l=n(99),j=n(88),u=n(90);var h=function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];return"".concat(t," ").concat(n," ").concat(a)},d=n(3);var m=function(e){var t=e.location,n=e.country;return Object(d.jsx)(l.a,{marginBottom:3,children:Object(d.jsxs)(j.a,{className:"location-container",children:[Object(d.jsxs)(u.a,{variant:"h2",align:"center",color:"primary",children:[t,", ",n]}),Object(d.jsx)(u.a,{variant:"h4",align:"center",color:"secondary",children:h(new Date)})]})})};var b=function(e){var t=e.variant,n=e.temp;return Object(d.jsx)(l.a,{marginBottom:2,children:Object(d.jsxs)(j.a,{className:"temp-container",children:[Object(d.jsxs)(u.a,{variant:t,align:"center",color:"primary",children:["Current: ",Math.round(n.feels_like),"\xb0 F"]}),Object(d.jsxs)(u.a,{variant:t,align:"center",color:"primary",children:["High: ",Math.round(n.temp_max),"\xb0F"]}),Object(d.jsxs)(u.a,{variant:t,align:"center",color:"primary",children:["Low: ",Math.round(n.temp_min),"\xb0F"]})]})})};var p=function(e){var t=e.variant,n=e.weather;return Object(d.jsx)(l.a,{children:Object(d.jsx)(j.a,{className:"weather-container",children:Object(d.jsx)(u.a,{variant:t,align:"center",color:"secondary",children:n})})})};var x=function(e){var t=e.weather;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{country:t.sys.country,location:t.name}),Object(d.jsx)(b,{variant:"h4",temp:t.main}),Object(d.jsx)(p,{variant:"h4",weather:t.weather[0].main})]})};var O=function(e){var t=e.queryError;return Object(d.jsx)(u.a,{variant:"h4",color:"primary",align:"center",children:t})},f=n(94),v=n(95),g=n(96),y=n(91),w=n(38),F=n(92),M=n(93),S=Object(y.a)({input:{"& .MuiInput-underline:before":{borderBottom:"2px solid white"},"& .MuiInput-underline:hover:not(.Mui-disabled):before":{borderBottom:"2px solid white"},margin:"15px 0px",color:"white",fontSize:"24px"},card:{minWidth:"200px",backgroundColor:"rgba(0,0,0, 0.3)",color:"white"},forecast:{position:"relative ",bottom:0}}),C=Object(w.a)({palette:{primary:{main:F.a[100]},secondary:{main:M.a[400]}}});var N=function(e){var t=e.forecast,n=S();return Object(d.jsx)(f.a,{sx:{width:"100%"},container:!0,spacing:1,justifyContent:"center",columns:7,children:t.map((function(e){var t=h(new Date(1e3*e.dt));return Object(d.jsx)(f.a,{item:!0,xs:9,sm:4,md:4,lg:3,children:Object(d.jsx)(v.a,{variant:"outlined",className:n.card,children:Object(d.jsxs)(g.a,{children:[Object(d.jsx)(u.a,{variant:"h6",align:"center",color:"secondary",children:t}),Object(d.jsx)("br",{}),Object(d.jsxs)(u.a,{variant:"h6",component:"p",align:"center",color:"primary",children:["High: ",Math.round(e.temp.max),"\xb0F"]}),Object(d.jsxs)(u.a,{variant:"h6",component:"p",align:"center",color:"primary",children:["Low: ",Math.round(e.temp.min),"\xb0F"]}),Object(d.jsx)(p,{variant:"h6",weather:e.weather[0].main})]})})})}))})},P=n(98);var k=function(e){var t=S();return Object(d.jsx)(l.a,{marginBottom:3,children:Object(d.jsx)(j.a,{maxWidth:"sm",children:Object(d.jsx)(P.a,{variant:"standard",type:"text",placeholder:"Search...",fullWidth:!0,color:"secondary",onChange:e.onChange,value:e.value,onKeyPress:e.keyPress,InputProps:{className:t.input},className:t.input})})})},B="16b2610e501d52ee38643a371d47f57b",D="http://api.openweathermap.org/data/2.5/",I="https://api.openweathermap.org/data/2.5/onecall?";var E=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),i=Object(o.a)(c,2),l=i[0],j=i[1],u=Object(a.useState)(""),h=Object(o.a)(u,2),m=h[0],b=h[1],p=Object(a.useState)([]),f=Object(o.a)(p,2),v=f[0],g=f[1],y=Object(a.useRef)(!0),w=S();return Object(a.useEffect)((function(){if(y.current)y.current=!1;else{if(!l)return;fetch("".concat(I,"lat=").concat(l.coord.lat,"&lon=").concat(l.coord.lon,"&units=imperial&exclude=minutely&appid=").concat(B)).then((function(e){return e.json()})).then((function(e){g(e.daily)})).catch((function(e){return console.log(e)}))}}),[l]),Object(d.jsx)(s.a,{theme:C,children:Object(d.jsx)("div",{className:"undefined"!==typeof l.main?l.main.temp>"70"?"app":"app cold":"app",children:Object(d.jsxs)("main",{children:[Object(d.jsx)(k,{keyPress:function(e){"Enter"===e.key&&fetch("".concat(D,"weather?q=").concat(n,"&units=imperial&APPID=").concat(B)).then((function(e){return e.json()})).then((function(e){if("404"===e.cod)throw e;j(e),r(""),b("")})).catch((function(e){b(e.message.toUpperCase()),j("")}))},value:n,onChange:function(e){return r(e.target.value)}}),"undefined"!==typeof l.main?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(x,{weather:l})}):Object(d.jsx)(d.Fragment,{}),""!==m?Object(d.jsx)(O,{queryError:m}):Object(d.jsx)(d.Fragment,{}),"undefined"!==typeof l.main&&v?Object(d.jsx)("section",{className:w.forecast,children:Object(d.jsx)(N,{forecast:v.slice(1)})}):Object(d.jsx)(d.Fragment,{})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,101)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),J()}},[[56,1,2]]]);
//# sourceMappingURL=main.b8f6a5b1.chunk.js.map