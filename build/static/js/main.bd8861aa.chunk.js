(this.webpackJsonpninjajoint=this.webpackJsonpninjajoint||[]).push([[0],{23:function(e,t,a){e.exports=a(34)},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),o=a.n(r),l=(a(28),a(22)),s=a(16),c=a(11),p=a(7),d=a(1),m={hidden:{rotate:-180},visible:{rotate:0,transition:{duration:1}}},u={hidden:{opacity:0,pathLength:0},visible:{opacity:1,pathLength:1,transition:{duration:2,ease:"easeInOut"}}},v=function(){return i.a.createElement("header",null,i.a.createElement(d.b.div,{className:"logo",drag:!0,dragConstraints:{left:0,top:0,right:0,bottom:0},dragElastic:1.2},i.a.createElement(d.b.svg,{className:"pizza-svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",variants:m,initial:"hidden",animate:"visible"},i.a.createElement(d.b.path,{variants:u,fill:"none",d:"M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"}),i.a.createElement(d.b.path,{variants:u,fill:"none",d:"M50 30 L50 -10 C50 -10 90 -10 90 30 Z"}))),i.a.createElement(d.b.div,{className:"title",intial:{y:-250},animate:{y:-10},transition:{delay:.2,type:"spring"}},i.a.createElement("h1",null,"Pizza Joint")))},b=a(5),h={animationOne:{x:[-20,20],y:[0,-30],transition:{x:{yoyo:1/0,duration:.5},y:{yoyo:1/0,duration:.25,ease:"easeOut"}}},animationTwo:{x:0,y:[0,-40],transition:{y:{yoyo:1/0,duration:.25,ease:"easeOut"}}}},E=function(){var e=Object(d.c)("animationOne","animationTwo"),t=Object(c.a)(e,2),a=t[0],n=t[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.b.div,{className:"loader",variants:h,animate:a}),i.a.createElement("div",{onClick:function(){return n()}}))},x={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.4,yoyo:10}}},y={hidden:{opacity:0},visible:{opacity:1,transition:{delay:1,duration:1.5}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},g=function(){return i.a.createElement(d.b.div,{className:"home container",variants:y,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h2",null,"Welcome to Pizza Joint"),i.a.createElement(b.b,{to:"/base"},i.a.createElement(d.b.button,{variants:x,whileHover:"hover"},"Create Your Pizza")),i.a.createElement(E,null))},f={hidden:{opacity:0,x:"100vw"},visible:{opacity:1,x:0,transition:{type:"spring",delay:.5}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},w={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.4,yoyo:10}}},z=function(e){var t=e.addBase,a=e.pizza;return i.a.createElement(d.b.div,{className:"base container",variants:f,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 1: Choose Your Base"),i.a.createElement("ul",null,["Classic","Thin & Crispy","Thick Crust"].map((function(e){var n=a.base===e?"active":"";return i.a.createElement(d.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,color:"#f8e112",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),a.base&&i.a.createElement(d.b.div,{className:"next",initial:{x:"-100vw"},animate:{x:0},transition:{type:"spring",stiffness:120}},i.a.createElement(b.b,{to:"/toppings"},i.a.createElement(d.b.button,{variants:w,whileHover:"hover"},"Next"))))},O={hidden:{opacity:0,x:"100vw",y:-45},visible:{opacity:1,x:0,y:-45,transition:{type:"spring",delay:.5}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},C={hover:{scale:1.1,textShadow:"0px 0px 8px rgb(255,255,255)",boxShadow:"0px 0px 8px rgb(255,255,255)",transition:{duration:.4,yoyo:10}}},j=function(e){var t=e.addTopping,a=e.pizza;return i.a.createElement(d.b.div,{className:"toppings container",variants:O,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h3",null,"Step 2: Choose Toppings"),i.a.createElement("ul",null,["mushrooms","peppers","onions","olives","extra cheese","tomatoes"].map((function(e){var n=a.toppings.includes(e)?"active":"";return i.a.createElement(d.b.li,{key:e,onClick:function(){return t(e)},whileHover:{scale:1.3,color:"#f8e112",originX:0},transition:{type:"spring",stiffness:300}},i.a.createElement("span",{className:n},e))}))),i.a.createElement(b.b,{to:"/order"},i.a.createElement(d.b.button,{variants:C,whileHover:"hover"},"Order")))},k={hidden:{opacity:0,x:"100vw",y:-45},visible:{opacity:1,x:0,y:-45,transition:{type:"spring",mass:.4,damping:8,when:"beforeChildren",staggerChildren:1}},exit:{x:"-100vw",transition:{ease:"easeInOut"}}},N={hidden:{opacity:0},visible:{opacity:1}},S=function(e){var t=e.pizza,a=e.setshowModal;return Object(n.useEffect)((function(){setTimeout((function(){a(!0)}),5e3)}),[a]),i.a.createElement(d.b.div,{className:"container order",variants:k,initial:"hidden",animate:"visible",exit:"exit"},i.a.createElement("h2",null,"Thank you for your order :)"),i.a.createElement(d.b.p,{variants:N},"You ordered a ",t.base," pizza with:"),i.a.createElement(d.b.div,{variants:N},t.toppings.map((function(e){return i.a.createElement("div",{key:e},e)}))))},M=function(e){var t=e.showModal;e.setshowModal;return i.a.createElement(d.a,{exitBeforeEnter:!0},t&&i.a.createElement(d.b.div,{className:"backdrop",variants:{visible:{opacity:1},hidden:{opacity:0}},animate:"visible",initial:"hidden",exit:"hidden"},i.a.createElement(d.b.div,{className:"modal",variants:{hidden:{y:"-100vh",opacity:0},visible:{y:"0px",opacity:1,transition:{delay:.5}}},initial:"hidden",animate:"visible"},i.a.createElement("p",null,"Want to make another Pizza!?"),i.a.createElement(b.b,{to:"/"},i.a.createElement("button",null,"Start Again")))))};var T=function(){var e=Object(p.f)(),t=Object(n.useState)({base:"",toppings:[]}),a=Object(c.a)(t,2),r=a[0],o=a[1],m=Object(n.useState)(!1),u=Object(c.a)(m,2),b=u[0],h=u[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(v,null),i.a.createElement(M,{showModal:b,setshowModal:h}),i.a.createElement(d.a,{exitBeforeEnter:!0,onExitComplete:function(){h(!1)}},i.a.createElement(p.c,{location:e,key:e.key},i.a.createElement(p.a,{path:"/base"},i.a.createElement(z,{addBase:function(e){o(Object(s.a)({},r,{base:e}))},pizza:r})),i.a.createElement(p.a,{path:"/toppings"},i.a.createElement(j,{addTopping:function(e){var t;t=r.toppings.includes(e)?r.toppings.filter((function(t){return t!==e})):[].concat(Object(l.a)(r.toppings),[e]),o(Object(s.a)({},r,{toppings:t}))},pizza:r})),i.a.createElement(p.a,{path:"/order"},i.a.createElement(S,{pizza:r,setshowModal:h})),i.a.createElement(p.a,{path:"/"},i.a.createElement(g,null)))))};o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b.a,null,i.a.createElement(T,null))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.bd8861aa.chunk.js.map