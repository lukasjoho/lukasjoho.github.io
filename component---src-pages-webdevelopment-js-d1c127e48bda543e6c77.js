(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"+Mn3":function(e,a,t){},"5bgd":function(e){e.exports=JSON.parse('{"data":{"code":{"childImageSharp":{"fluid":{"aspectRatio":1.152542372881356,"src":"/static/54809f43065fdd62e2c91b2119333f07/9db51/image-code.png","srcSet":"/static/54809f43065fdd62e2c91b2119333f07/0283b/image-code.png 68w,\\n/static/54809f43065fdd62e2c91b2119333f07/f3462/image-code.png 135w,\\n/static/54809f43065fdd62e2c91b2119333f07/9db51/image-code.png 270w,\\n/static/54809f43065fdd62e2c91b2119333f07/e95b4/image-code.png 405w,\\n/static/54809f43065fdd62e2c91b2119333f07/488ce/image-code.png 540w,\\n/static/54809f43065fdd62e2c91b2119333f07/d5468/image-code.png 800w","sizes":"(max-width: 270px) 100vw, 270px"}}},"screen":{"childImageSharp":{"fluid":{"aspectRatio":0.31797235023041476,"src":"/static/a7deb68b45e89809d6ca58e34b7e966a/5378e/screen.jpg","srcSet":"/static/a7deb68b45e89809d6ca58e34b7e966a/897db/screen.jpg 138w,\\n/static/a7deb68b45e89809d6ca58e34b7e966a/761ed/screen.jpg 275w,\\n/static/a7deb68b45e89809d6ca58e34b7e966a/5378e/screen.jpg 550w,\\n/static/a7deb68b45e89809d6ca58e34b7e966a/7fbe4/screen.jpg 825w,\\n/static/a7deb68b45e89809d6ca58e34b7e966a/7e598/screen.jpg 1100w,\\n/static/a7deb68b45e89809d6ca58e34b7e966a/6faa8/screen.jpg 1220w","sizes":"(max-width: 550px) 100vw, 550px"}}}}}')},IpuY:function(e,a,t){e.exports={container:"buttons-module--container--vNvYy",centerrow:"buttons-module--centerrow--GptYR",buttonContainer:"buttons-module--button-container--1B96K"}},Tr3j:function(e,a,t){e.exports={textblock:"textblock-module--textblock--VJN5b",iconsinline:"textblock-module--iconsinline--1SV_O",icon:"textblock-module--icon--UvRZW"}},W1Nv:function(e,a,t){e.exports={services:"services-module--services--3tf30",servicesWithIcons:"services-module--services-with-icons--3PFkj",serviceTitle:"services-module--service-title--1xYw2",row:"services-module--row--OZAjz",service:"services-module--service--2GM2J",budget:"services-module--budget--1GmbD",colMd6:"services-module--col-md-6--1aeVJ"}},b6Ke:function(e,a,t){},gOg7:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n);var c=function(e){var a,t;function n(a){var t,n=(t=e.call(this,a)||this).props,r=n.radius,c=n.stroke,i=n.text;return t.normalizedRadius=r-2*c,t.circumference=2*t.normalizedRadius*Math.PI,t.text=i,t}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){var e=this.props,a=e.radius,t=e.stroke,n=e.progress,c=e.text,i=this.circumference-n/100*this.circumference;return r.a.createElement("div",null,r.a.createElement("div",{className:"progressring"},r.a.createElement("svg",{height:2*a,width:2*a},r.a.createElement("circle",{stroke:"green",fill:"transparent",strokeWidth:t,strokeDasharray:this.circumference+" "+this.circumference,style:{strokeDashoffset:i},"stroke-width":t,r:this.normalizedRadius,cx:a,cy:a})),r.a.createElement("p",null,n)),r.a.createElement("p",{className:"circle-text"},c))},n}(r.a.Component);a.a=c},j34O:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),c=t("Tr3j"),i=t.n(c),l=t("NGwb"),s=t.n(l);var m=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return r.a.createElement("div",{class:i.a.textblock},r.a.createElement("div",{className:i.a.iconsinline},r.a.createElement("div",null,r.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:"true"},r.a.createElement("h2",null,this.props.title))),r.a.createElement(s.a,{animateIn:"animate__fadeInBottomLeft",delay:"200",animateOnce:"true"},r.a.createElement("img",{className:i.a.icon,src:this.props.icon,alt:""}))),r.a.createElement("div",null,r.a.createElement(s.a,{animateIn:"animate__fadeInUp",animateOnce:"true"},r.a.createElement("p",null,this.props.text))))},n}(r.a.Component);a.a=m},klmA:function(e,a,t){"use strict";t("9VmF");var n=t("q1tI"),r=t.n(n),c=(t("b6Ke"),t("Wbzz"));a.a=function(e){return e.to.startsWith("mailto")?r.a.createElement("a",{href:e.to,className:"button"},r.a.createElement("span",{className:"module"},e.text)):r.a.createElement(c.Link,{to:e.to,className:"button"},r.a.createElement("span",{className:"module"},e.text))}},q4sD:function(e,a,t){},xqyU:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("+qya"),i=t("rvhV"),l=t("vrFN"),s=t("7vrA"),m=t("3Z9Z"),o=t("JI6e"),d=t("W1Nv"),u=t.n(d),E=function(){return r.a.createElement("section",{id:u.a.services},r.a.createElement(c.ParallaxProvider,null,r.a.createElement(s.a,null,r.a.createElement(m.a,{className:u.a.row},r.a.createElement(o.a,{md:6,style:{paddingBottom:"2.5rem"}},r.a.createElement("div",{className:u.a.service},r.a.createElement("h3",null,"1. UX/UI Design"),r.a.createElement("p",null,"Vor dem Entwickeln einer Web Applikation oder Website sketchen und designen wir. So sind beide Seiten effizienter und agiler in der kreativen Phase bevor die Website tatsächlich entwickelt wird."))),r.a.createElement(o.a,{md:6,style:{paddingBottom:"2.5rem"}},r.a.createElement("div",{className:u.a.service},r.a.createElement("h3",null,"2. Prototyping"),r.a.createElement("p",null,"Wir erstellen einen Prototyp der geplanten Web App, um das zukünftige Ergebnis schonmal vorab auf User Experience zu testen."))),r.a.createElement(o.a,{md:6,className:u.a.budget},r.a.createElement("div",{className:u.a.service},r.a.createElement("h3",null,"3. Development"),r.a.createElement("p",null,"Damit unsere Web Applikationen bestmögliche Performance erzielen, basieren wir die Programmierung auf federleichtem Javascript. Wir bauen Content Management Systems manuell ein und behalten so maximale Kontrolle über das Produkt."))),r.a.createElement(o.a,{md:6},r.a.createElement("div",{className:u.a.service},r.a.createElement("h3",null,"4. Hosting / Deployment"),r.a.createElement("p",null,"Nicht zu vernachlässigen ist das richtige Hosting auf schnellen, sicheren und einfach zu wartenden Servern damit sowohl Du als auch deine User die bestmögliche User Experience erleben.")))))))},p=t("5bgd"),b=t("9eSz"),f=t.n(b),g=t("NGwb"),h=t.n(g),v=t("gOg7"),x=t("j34O"),w=t("33Fu"),N=t("IdFE"),y=(t("+Mn3"),t("d+3G"),function(){var e=p.data,a=e.code,t=e.screen;return r.a.createElement("section",{id:"linkedin"},r.a.createElement(s.a,null,r.a.createElement(m.a,null,r.a.createElement(o.a,null,r.a.createElement("div",{className:"web-heading"},r.a.createElement("h1",null,"State of the Art Website"),r.a.createElement("h2",null,"Für maximale Online Performance.")))),r.a.createElement(m.a,{className:"web-values"},r.a.createElement(o.a,{md:4,sm:6,xs:6},r.a.createElement(h.a,{animateIn:"animate__fadeInUp",duration:"1",delay:100,animateOnce:!0},r.a.createElement("div",null,r.a.createElement(w.i,{className:"icon"}),r.a.createElement("h4",null,"Responsive Design")))),r.a.createElement(o.a,{md:4,xs:6},r.a.createElement(h.a,{animateIn:"animate__fadeInUp",duration:"1",delay:200,animateOnce:!0},r.a.createElement("div",null,r.a.createElement(N.e,{className:"icon"}),r.a.createElement("h4",null,"Hohe Geschwindigkeit")))),r.a.createElement(o.a,{md:4,xs:6},r.a.createElement(h.a,{animateIn:"animate__fadeInUp",duration:"1",delay:300,animateOnce:!0},r.a.createElement("div",null,r.a.createElement(N.f,{className:"icon"}),r.a.createElement("h4",null,"Content Management System")))),r.a.createElement(o.a,{md:4,xs:6},r.a.createElement(h.a,{animateIn:"animate__fadeInUp",duration:"1",delay:400,animateOnce:!0},r.a.createElement("div",null,r.a.createElement(N.g,{className:"icon"}),r.a.createElement("h4",null,"Search Engine Optimization")))),r.a.createElement(o.a,{md:4,xs:6},r.a.createElement(h.a,{animateIn:"animate__fadeInUp",duration:"1",delay:500,animateOnce:!0},r.a.createElement("div",null,r.a.createElement(N.b,{className:"icon"}),r.a.createElement("h4",null,"Individuelle Gestaltung")))),r.a.createElement(o.a,{md:4,xs:6},r.a.createElement(h.a,{animateIn:"animate__fadeInUp",duration:"1",delay:600,animateOnce:!0},r.a.createElement("div",null,r.a.createElement(N.c,{className:"icon"}),r.a.createElement("h4",null,"Verschlüsselt"))))),r.a.createElement(m.a,null,r.a.createElement(o.a,{md:5,className:"centercol"},r.a.createElement(x.a,{title:"Moderne Webentwicklung",text:"Wir entwickeln dir deine Website nach den neusten Web-Technologie Standards. Responsives Design, hohe Geschwindigkeit und user-zentriertes Design resultieren in bester Performance und hohem Google Ranking. Genauso wichtig sind uns sicheres Hosting und einfaches Content Management, damit du die Kontrolle über deine Inhalte besitzt."})),r.a.createElement(o.a,{md:7},r.a.createElement("div",{className:"macbook"},r.a.createElement("div",{className:"screen"},r.a.createElement("div",{className:"viewport"},r.a.createElement(c.Parallax,{y:[0,-120],tagOuter:"figure"},r.a.createElement(f.a,{className:"screen-content",fluid:t.childImageSharp.fluid,imgStyle:{objectFit:"contain"}})))),r.a.createElement("div",{className:"base"}),r.a.createElement("div",{className:"notch"})))),r.a.createElement(m.a,null,r.a.createElement(o.a,{md:3}),r.a.createElement(o.a,{md:6},r.a.createElement(f.a,{className:"image-code",fluid:a.childImageSharp.fluid,alt:""})),r.a.createElement(o.a,{md:12,className:"ring-container"},r.a.createElement("div",{className:"ring"},r.a.createElement(h.a,{animateIn:"animate__fadeIn",duration:"1",delay:0,animateOnce:!0},r.a.createElement(v.a,{radius:"50",stroke:"6",progress:"94",text:"Performance"}))),r.a.createElement("div",{className:"ring"},r.a.createElement(h.a,{animateIn:"animate__fadeIn",duration:"1",delay:200,animateOnce:!0},r.a.createElement(v.a,{radius:"50",stroke:"6",progress:"92",text:"Accessibility"}))),r.a.createElement("div",{className:"ring"},r.a.createElement(h.a,{animateIn:"animate__fadeIn",duration:"1",delay:400,animateOnce:!0},r.a.createElement(v.a,{radius:"50",stroke:"6",progress:"100",text:"Best Practice"}))),r.a.createElement("div",{className:"ring"},r.a.createElement(h.a,{animateIn:"animate__fadeIn",duration:"1",delay:600,animateOnce:!0},r.a.createElement(v.a,{radius:"50",stroke:"6",progress:"100",text:"SEO"})))))))}),I=t("ITPJ"),_=t("klmA"),k=t("IpuY"),O=t.n(k);t("q4sD");var S=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return r.a.createElement(c.ParallaxProvider,null,r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Web Development",description:"Maximale Online Performance durch modernes Web Development."}),r.a.createElement(y,null),r.a.createElement(s.a,{className:O.a.container},r.a.createElement(m.a,{className:O.a.centerrow},r.a.createElement(o.a,{className:O.a.buttonContainer},r.a.createElement(I.a,{to:"/",text:"Zu excyted"}),r.a.createElement(_.a,{to:"mailto:info@excyted.io",text:"Sende uns eine Email"})))),r.a.createElement(E,null),r.a.createElement(s.a,{className:O.a.container},r.a.createElement(m.a,{className:O.a.centerrow},r.a.createElement(o.a,{className:O.a.buttonContainer},r.a.createElement(I.a,{to:"/",text:"Zu excyted"}),r.a.createElement(_.a,{to:"mailto:info@excyted.io",text:"Sende uns eine Email"}))))))},n}(r.a.Component);a.default=S}}]);
//# sourceMappingURL=component---src-pages-webdevelopment-js-d1c127e48bda543e6c77.js.map