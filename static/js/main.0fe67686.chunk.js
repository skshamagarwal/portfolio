(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e);var i,r,a=t(2),o=t(13),s=t.n(o),c=t(7),l=t(3),d=t(10),m=t(4),b=t(6),h=t(1),j=m.b.div(i||(i=Object(l.a)(['\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: var(--dark-bg);\n  \n  .navIcon {\n    display: none;\n    outline: none;\n    position: absolute;\n    margin: 3rem;\n    top: 0;\n    right: 0;\n    height: 4rem;\n    cursor: pointer;\n    transition: 0.5s ease;\n    z-index: 10;\n    * {\n      pointer-events: none;\n    }\n    &:hover {\n      background-color: var(--deep-dark);\n    }\n  }\n\n  .wrapper {\n    position: absolute;\n    padding: 2rem 2rem;\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n\n    .logo {\n      p {\n        font-size: 1.8rem;\n        letter-spacing: 2px;\n        font-family: "LilitaOne Regular";\n      }\n    }\n    .menu {\n      ul {\n        max-width: 1200px;\n        margin: 0 auto;\n        text-align: center;\n\n        li {\n          display: inline-block;\n          border-radius: 8px;\n          transition: 0.5s ease background-color;\n\n          &:hover {\n            background-color: var(--deep-dark);\n          }\n\n          a {\n            display: inline-block;\n            font-family: "RobotoMono Regular";\n            margin: 0 0.5em;\n            padding: 1rem 1rem;\n            font-size: 1.8rem;\n            letter-spacing: 2px;\n            color: var(--gray-1);\n            outline: none;\n          }\n\n          .active {\n            color: var(--white);\n          }\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .navIcon {\n      display: block;\n    }\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .wrapper {\n      position: absolute;\n      background-color: var(--deep-dark);\n      flex-direction: column;\n      height: 97.5vh;\n      width: 100vw;\n      justify-content: space-evenly;\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      top: var(--top);\n\n      .logo {\n        p {\n          font-size: 3rem;\n        }\n      }\n      .menu {\n        ul {\n          li {\n            display: block;\n            margin-bottom: 2rem;\n            a {\n              font-size: 3rem;\n            }\n          }\n        }\n      }\n    }\n  }\n'])));function p(){var n=Object(a.useState)(!1),e=Object(c.a)(n,2),t=e[0],i=e[1];return Object(h.jsxs)(j,{children:[Object(h.jsx)("div",{className:"navIcon",onClick:function(){return i(!t)},role:"button",children:t?Object(h.jsx)(b.c,{}):Object(h.jsx)(b.g,{})}),Object(h.jsxs)("div",{className:t?"wrapper":"wrapper hide-item",children:[Object(h.jsx)("div",{className:"logo",children:Object(h.jsxs)(d.c,{to:"/",children:[Object(h.jsx)("p",{children:"SAKSHAM"}),Object(h.jsx)("p",{children:"AGARWAL"})]})}),Object(h.jsx)("div",{className:"menu",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(d.c,{to:"/",onClick:function(){return i(!t)},role:"button",children:"HOME"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.c,{to:"/about",onClick:function(){return i(!t)},role:"button",children:"ABOUT"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.c,{to:"/projects",onClick:function(){return i(!t)},role:"button",children:"PROJECTS"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.c,{to:"/experience",onClick:function(){return i(!t)},role:"button",children:"EXPERIENCE"})}),Object(h.jsx)("li",{children:Object(h.jsx)(d.c,{to:"/contact",onClick:function(){return i(!t)},role:"button",children:"CONTACT"})})]})})]})]})}var g,u=m.b.div(r||(r=Object(l.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  ul {\n    li {\n      margin-bottom: 1rem;\n      a {\n        font-size: 1.8rem;\n        letter-spacing: 2px;\n        &:hover {\n            color: var(--white);\n        }\n    }\n    &:hover {\n        transform: scale(1.1);\n    }\n    }\n  }\n"])));function x(n){var e=n.heading,t=void 0===e?"col heading":e,i=n.links,r=void 0===i?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:i;return Object(h.jsxs)(u,{children:[Object(h.jsx)("h1",{className:"heading",children:t}),Object(h.jsx)("ul",{children:r.map((function(n,e){return Object(h.jsx)("li",{children:"Link"===n.type?Object(h.jsx)(d.b,{to:n.path,children:n.title}):Object(h.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrar noreferrer",children:n.title})},e)}))})]})}var f,v=m.b.div(g||(g=Object(l.a)(["\n    color: var(--white);\n    width: 100%;\n    max-width: 800px;\n    margin: 0 auto;\n    font-size: 2rem;\n    line-height: 1.3em;\n    @media only screen and (max-width: 768px) {\n        font-size: 1.6rem;\n    }\n"])));function O(n){return Object(h.jsx)(v,{children:Object(h.jsx)("p",{children:n.children})})}var _=m.b.div(f||(f=Object(l.a)(["\n  padding-top: 10rem;\n  background-color: var(--deep-dark);\n  .container {\n    display: flex;\n    gap: 3rem;\n    .footer__col1 {\n      flex: 2;\n      padding-right: 10rem;\n      .footer__c1__title {\n        font-size: 3.5rem;\n        margin-bottom: 2rem;\n      }\n      p {\n        font-size: 1.8rem;\n      }\n    }\n    .footer__col2,\n    .footer__col3 {\n      flex: 1;\n    }\n  }\n  .copyright {\n    background-color: var(--dark-bg);\n    margin-top: 3rem;\n    padding: 0.6rem 0;\n    text-align: center;\n    p {\n      display: inline-block;\n      font-size: 1.8rem;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n          margin-top: 5rem;\n      }\n      .footer__col1 {\n        padding: 0;\n      }\n    }\n  }\n"])));function y(){return Object(h.jsxs)(_,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"footer__col1",children:[Object(h.jsx)("h1",{className:"footer__c1__title",children:"Saksham Agarwal"}),Object(h.jsx)(O,{children:"I am a Computer Science Student who is looking forward to work with you... I love solving complex problems and bringing concepts to life. With every line of code that I write, I strive to make a new step to explore more."})]}),Object(h.jsx)("div",{className:"footer__col2",children:Object(h.jsx)(x,{heading:"Important Links",links:[{title:"- Home",path:"/",type:"Link"},{title:"- About",path:"/about",type:"Link"},{title:"- Projects",path:"/projects",type:"Link"},{title:"- Blogs",path:"/blogs",type:"Link"},{title:"- Contact",path:"/contact",type:"Link"}]})}),Object(h.jsx)("div",{className:"footer__col3",children:Object(h.jsx)(x,{heading:"Social Links",links:[{title:"- LinkedIn",path:"https://www.linkedin.com/in/skshamagarwal/"},{title:"- Github",path:"https://github.com/skshamagarwal"},{title:"- Instagram",path:"https://www.instagram.com/s_hivu_/"},{title:"- Twitter",path:"https://twitter.com/skshamagarwal"}]})})]}),Object(h.jsx)("div",{className:"copyright",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("p",{children:" \xa9 2021 - Portfolio | Saksham Agarwal"})})})]})}var k,w,N=t(5),S=m.b.div(k||(k=Object(l.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 1.8rem;\n    background-color: ",";\n    padding: 0.7em 1.5em;\n    border-radius: 8px;\n    border: 2px solid var(--gray-1);\n    color: ",";\n    transition: 1s ease;\n\n    &:hover {\n      background-color: ",";\n      color: ",";\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.4rem;\n    }\n  }\n"])),(function(n){return n.outline?"transparent":"var(--gray-1)"}),(function(n){return n.outline?"var(--gray-1)":"black"}),(function(n){return n.outline?"var(--gray-1)":"transparent"}),(function(n){return n.outline?"black":"var(--gray-1)"}));function z(n){var e=n.btnLink,t=void 0===e?"/":e,i=n.btnText,r=void 0===i?"Click Me":i,a=n.outline,o=void 0!==a&&a;return Object(h.jsx)(S,{outline:o,children:Object(h.jsx)(d.b,{to:t,className:"button",children:r})})}var C,M=m.b.div(w||(w=Object(l.a)(["\n    text-align: center;\n    p {\n        font-family: 'RobotoMono Regular';\n        font-size: 1.8rem;\n    }\n    h1 {\n        font-family: 'Montserrat Bold';\n        font-size: 6rem;\n        margin-top: 0.5rem;\n        text-transform: uppercase;\n    }\n    @media only screen and (max-width: 768px) {\n        p {\n            font-size: 1.2rem;\n        }\n        h1 {\n            font-size: 3.6rem;\n        }\n    }\n"])));function I(n){var e=n.heading,t=n.subheading;return Object(h.jsxs)(M,{children:[Object(h.jsx)("p",{children:t}),Object(h.jsx)("h1",{children:e})]})}var L=m.b.div(C||(C=Object(l.a)(['\n  text-align: center;\n  .services__item {\n    svg {\n      width: 3rem;\n    }\n    .services__item__title {\n      font-size: 2.5rem;\n      font-family: "Montserrat SemiBold";\n    }\n    p {\n      font-size: 1.6rem;\n      margin-top: 2rem;\n    }\n  }\n'])));function P(n){var e=n.icon,t=void 0===e?Object(h.jsx)(b.d,{}):e,i=n.title,r=void 0===i?"Web Design":i,a=n.desc,o=void 0===a?"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium minus, eos ullam omnis aliquid voluptate.":a;return Object(h.jsx)(L,{children:Object(h.jsxs)("div",{className:"services__item",children:[t,Object(h.jsx)("div",{className:"services__item__title",children:r}),Object(h.jsx)(O,{children:o})]})})}var R,A=t(25),E=t.p+"static/media/cv.d5632e93.pdf",B=m.b.div(R||(R=Object(l.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 1.8rem;\n    background-color: var(--gray-1);\n    padding: 0.7em 1.5em;\n    border-radius: 8px;\n    border: 2px solid var(--gray-1);\n    color: black;\n    transition: 1s ease;\n\n    &:hover {\n      background-color: transparent;\n      color: var(--gray-1);\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.4rem;\n    }\n  }\n"])));function D(){return Object(h.jsx)(B,{children:Object(h.jsx)("a",{className:"button",href:E,download:"Saksham's Resume",target:"_blank",rel:"noreferrer",children:"Download CV"})})}var T,H,F=t(41),G=t(42),q=[{id:1,name:"Mr. Soubhik Das",title:"CEO",org:"Manastik Pvt Ltd",desc:"Saksham maintained professionalism & discipline during the internship & managed to complete all the tasks as assigned. We enjoyed working with him in this short period."},{id:2,name:"Mr. Sharad Goel",title:"Managing Director",org:"Essential Services Outsource Pvt Ltd",desc:"Saksham is a quick learner and very deligent towards the work assigned to him. He finished all of his tasks on time with exceptional quality."}],J=m.b.div(T||(T=Object(l.a)(["\n  overflow-x: hidden;\n  padding: 10rem 0;\n  text-align: center;\n  .testimonial__wrapper {\n    position: relative;\n    max-width: 700px;\n    margin: 0 auto;\n  }\n  .testimonial__info {\n    width: 100%;\n    height: fit-content;\n    padding: 3rem;\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    margin-top: 5rem;\n  }\n  .testimonial__desc {\n    .para {\n      text-align: center;\n    }\n  }\n  .testimonial__name {\n    margin-top: 4rem;\n    font-family: 'Montserrat Bold';\n    font-size: 2.2rem;\n  }\n  .testimonial__title {\n    font-size: 1.6rem;\n    margin-top: 0.3rem;\n  }\n  .arrows {\n    margin-top: 2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg {\n      width: 30px;\n      pointer-events: none;\n    }\n    .next,\n    .prev {\n      margin: 0 0.5rem;\n      width: fit-content;\n      background-color: var(--deep-dark);\n      padding: 0.5rem 2rem;\n      border-radius: 8px;\n      cursor: pointer;\n    }\n  }\n  .fade-enter {\n    opacity: 0;\n    transform: scale(0.96);\n    z-index: 1;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: 250ms ease-in;\n    transition-property: transform, opacity;\n    z-index: 1;\n  }\n  .fade-exit {\n    transform: scale(1);\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transform: scale(0.96);\n    transition: 200ms ease-in;\n    transition-property: transform, opacity;\n  }\n"])));function Y(){var n=Object(a.useState)(0),e=Object(c.a)(n,2),t=e[0],i=e[1],r=q[t];return Object(h.jsx)(J,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(I,{subheading:"reviews recieved from work places",heading:"Testimonials"}),Object(h.jsx)("div",{className:"testimonial__wrapper",children:Object(h.jsx)(F.a,{component:null,children:Object(h.jsx)(G.a,{timeout:300,classNames:"fade",children:Object(h.jsxs)("div",{className:"testimonial__info",children:[Object(h.jsx)("div",{className:"testimonial__desc",children:Object(h.jsx)(O,{children:r.desc})}),Object(h.jsx)("h2",{className:"testimonial__name",children:r.name}),Object(h.jsxs)("p",{className:"testimonial__title",children:[r.title,", ",Object(h.jsx)("br",{})," ",r.org]})]})},r.id)})}),Object(h.jsxs)("div",{className:"arrows",children:[Object(h.jsx)("div",{className:"prev",onClick:function(){i(0===t?q.length-1:function(n){return n-1})},role:"button",children:Object(h.jsx)(b.a,{})}),Object(h.jsx)("div",{className:"next",onClick:function(){i(t>=q.length-1?0:function(n){return n+1})},role:"button",children:Object(h.jsx)(b.b,{})})]})]})})}var W,U=m.b.div(H||(H=Object(l.a)(['\n  .hero {\n    min-height: 500px;\n    height: 100vh;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n\n  .hero__heading {\n    font-size: 2rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-size: 7rem;\n      font-family: "Montserrat SemiBold";\n      color: var(--white);\n      text-shadow: 2px 2px #00000094;\n    }\n  }\n\n  .hero__info {\n    margin-top: 5rem;\n    p {\n      text-shadow: 1.5px 1.5px #00000094;\n      margin-bottom: 5rem;\n    }\n    .buttons {\n      width: 100%;\n      display: flex;\n      justify-content: center;\n      a {\n        margin: 1rem;\n      }\n    }\n  }\n\n  .scroll__icon {\n    text-align: center;\n    margin-top: -8rem;\n    svg {\n      width: 5rem;\n    }\n  }\n\n  .services__section {\n    padding: 10rem 0;\n    .services__items {\n      display: flex;\n      gap: 10rem;\n      justify-content: space-between;\n      margin-top: 5rem;\n    }\n  }\n\n  .contact__banner {\n    padding: 10rem 0;\n    .contact__wrapper {\n      background-color: var(--deep-dark);\n      border-radius: 12px;\n      padding: 5rem 0rem;\n      text-align: center;\n      p {\n        font-size: 1.8rem;\n      }\n      .contact__heading {\n        font-size: 4rem;\n        margin-bottom: 5rem;\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero__heading {\n      font-size: 1.5rem;\n      .hero__name {\n        font-size: 4rem;\n      }\n    }\n    .hero__info {\n      .buttons {\n        a {\n          margin: 0.5rem;\n        }\n      }\n    }\n\n    .scroll__icon {\n      margin-top: 0;\n    }\n\n    .services__section {\n      .services__items {\n        flex-direction: column;\n        max-width: 350px;\n        margin: 0 auto;\n        margin-top: 5rem;\n        gap: 5rem;\n      }\n    }\n\n    .contact__heading {\n      font-size: 1.8rem;\n    }\n  }\n'])));function X(){return Object(h.jsxs)(U,{children:[Object(h.jsx)("div",{className:"hero",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("h1",{className:"hero__heading",children:[Object(h.jsx)("span",{children:"Hello, This is"}),Object(h.jsx)("span",{className:"hero__name",children:"Saksham Agarwal"})]}),Object(h.jsxs)("div",{className:"hero__info",children:[Object(h.jsx)(O,{children:"I am a Computer Science Student who is looking forward to work with you... I love solving complex problems and bringing concepts to life. With every line of code that I write, I strive to make a new step to explore more."}),Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)(D,{}),Object(h.jsx)(z,{btnLink:"/contact",btnText:"Contact",outline:!0})]})]})]})}),Object(h.jsx)("div",{className:"scroll__icon",children:Object(h.jsx)(A.a,{})}),Object(h.jsx)("div",{className:"services__section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(I,{heading:"Services",subheading:"things I can do for you..."}),Object(h.jsxs)("div",{className:"services__items",children:[Object(h.jsx)(P,{icon:Object(h.jsx)(b.d,{}),title:"Web Development",desc:"I develop responsive and high performance websites asper requirements using React, Django or HTML & CSS only."}),Object(h.jsx)(P,{icon:Object(h.jsx)(b.d,{}),title:"Mobile App Dev",desc:"I also develop mobile applications asper requirements using Flutter & Dart."}),Object(h.jsx)(P,{icon:Object(h.jsx)(b.d,{}),title:"Web Crawling",desc:"I can scrape data from web and provide it in required formats using Python / NodeJS."})]})]})}),Object(h.jsx)(Y,{}),Object(h.jsx)("div",{className:"contact__banner",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"contact__wrapper",children:[Object(h.jsx)(O,{children:"Have a project in mind ?"}),Object(h.jsx)("h3",{className:"contact__heading",children:"Let me help you"}),Object(h.jsx)(z,{btnText:"Contact Now",btnLink:"/contact"})]})})})]})}var Q=m.b.div(W||(W=Object(l.a)(["\n  margin-bottom: 8rem;\n\n  .heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n    text-transform: uppercase;\n  }\n  .entries {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    margin-top: 2rem;\n    .title {\n      font-size: 2.4rem;\n    }\n    .items {\n      display: flex;\n      gap: 1.5rem;\n      margin-left: 3rem;\n      .item {\n        background-color: var(--deep-dark);\n        padding: 0.5rem 1rem;\n        border-radius: 8px;\n\n        p {\n          font-size: 1.6rem;\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .heading {\n      font-size: 3rem;\n    }\n    .entries {\n      flex-direction: column;\n      align-items: flex-start;\n      gap: 1rem;\n      .items {\n        position: initial;\n        gap: 1rem;\n        margin-left: 0;\n      }\n      .title {\n        font-size: 2rem;\n      }\n    }\n  }\n"])));function K(n){var e=n.heading,t=void 0===e?"Heading":e,i=n.entries,r=void 0===i?{title:"Title",items:["HTML","CSS"]}:i;return Object(h.jsxs)(Q,{children:[Object(h.jsx)("h1",{className:"heading",children:t}),r.map((function(n,e){return Object(h.jsxs)("div",{className:"entries",children:[Object(h.jsx)("h1",{className:"title",children:n.title}),Object(h.jsx)("div",{className:"items",children:n.items.map((function(n,e){return Object(h.jsx)("div",{className:"item",children:Object(h.jsx)(O,{children:n})},e)}))})]},e)}))]})}var V,Z,$=t.p+"static/media/img.2fb80eb5.jpg",nn=m.b.div(V||(V=Object(l.a)(["\n  padding: 16rem 0 10rem 0;\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n    .left {\n      flex: 3;\n      .about__subheading {\n        font-size: 2.2rem;\n        margin-bottom: 2rem;\n        span {\n          background-color: var(--deep-dark);\n          padding: 0.5rem 1rem;\n          border-radius: 8px;\n        }\n      }\n      .about__heading {\n        font-size: 3.6rem;\n        margin-bottom: 3rem;\n      }\n      .about__info {\n        margin-bottom: 5rem;\n        padding-right: 5rem;\n        p {\n          max-width: 100%;\n          font-size: 1.5rem;\n        }\n      }\n    }\n    .right {\n      flex: 2;\n      img {\n        border: 2px solid var(--gray-1);\n      }\n    }\n  }\n\n  .about__info__items {\n    margin-top: 15rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    padding: 10rem, 2rem;\n    .top-section {\n      flex-direction: column;\n      gap: 7rem;\n      .left {\n        flex: 3;\n        .about__subheading {\n          font-size: 1.8rem;\n        }\n        .about__heading {\n          font-size: 3rem;\n        }\n        .about__info {\n          margin-bottom: 3rem;\n        }\n      }\n    }\n  }\n"])));function en(){return Object(h.jsx)(nn,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"top-section",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsxs)("p",{className:"about__subheading",children:["Hi, I am ",Object(h.jsx)("span",{children:"Saksham Agarwal"})]}),Object(h.jsx)("h2",{className:"about__heading",children:"A Geek who thinks Coding is a Superpower"}),Object(h.jsx)("div",{className:"about__info",children:Object(h.jsxs)(O,{children:["I am from Mount Abu - A hill station in the Aravalli range of Rajasthan, Currently in Pune Pursuing my Bachelors. Alongside that, working at Frshr Technologies Pvt. Ltd. as an Python Developer Intern.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"I deveoped interest in coding because I hated all the other subjects during my schooling. Back then getting to know coding was my only option, and now, not getting to explore it is my greatest fear. I love learning & working with new technologies, and possess interest in Competetive Programming as well as contributing to Open Source."]})}),Object(h.jsx)(D,{})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsx)("img",{src:$,alt:"My Img"})})]}),Object(h.jsxs)("div",{className:"about__info__items",children:[Object(h.jsx)(K,{heading:"My Skills",entries:[{title:"FrontEnd",items:["HTML","CSS","SCSS","React JS"]},{title:"Databases",items:["MySQL","MongoDB"]},{title:"BackEnd",items:["Django","Node"]},{title:"App Development",items:["Flutter","Dart","Firebase"]},{title:"Languages",items:["Python","C++","JavaScript"]}]}),Object(h.jsx)(K,{heading:"Education",entries:[{title:"B.Tech - CSE *",items:["D.Y. Patil International University, Akurdi, Pune","UGC","CGPA: 8.9"]},{title:"HSC",items:["S.T. John's Senior Secondary School, Aburoad, Rajasthan","CBSE","CGPA: 7.2"]}]})]})]})})}var tn,rn=m.b.div(Z||(Z=Object(l.a)(["\n    padding-top: 10rem;\n    min-height: 100vh;\n    .error {\n        padding: 10rem;\n        text-align: center;\n    }\n"])));function an(){return Object(h.jsxs)(rn,{children:[Object(h.jsx)(I,{heading:"PROJECTS",subheading:"some of my works"}),Object(h.jsx)("h1",{className:"error",children:" Page under development "})]})}var on=m.b.div(tn||(tn=Object(l.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n      width: 3.5rem;\n  }\n"])));function sn(n){var e=n.icon,t=void 0===e?Object(h.jsx)(b.h,{}):e,i=n.text,r=void 0===i?"this is an info":i;return Object(h.jsxs)(on,{children:[Object(h.jsx)("div",{className:"icon",children:t}),Object(h.jsx)("div",{className:"info",children:Object(h.jsx)(O,{children:r})})]})}var cn,ln=t.p+"static/media/map.163c261a.JPG",dn=m.b.div(cn||(cn=Object(l.a)(["\n  background: url(",") no-repeat center / cover;\n  min-height: 400px;\n  .container {\n    position: relative;\n    min-height: 400px;\n    .map__card {\n      position: absolute;\n      right: 10%;\n      bottom: 10%;\n      padding: 2rem;\n      background: var(--deep-dark);\n      max-width: 300px;\n      width: 100%;\n      border-radius: 12px;\n\n      .heading {\n        font-size: 3rem;\n        margin-bottom: 1rem;\n      }\n\n      a {\n        display: inline-block;\n        font-size: 1.6rem;\n        margin-top: 3rem;\n        text-decoration: underline;\n      }\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    background-position: 80% center;\n  }\n  @media only screen and (max-width: 400px) {\n    .container{\n        .map__card {\n            left: 1rem;\n            max-width: none;\n            right: 2rem;\n        }\n    }\n  } \n"])),ln);function mn(){return Object(h.jsx)(dn,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"map__card",children:[Object(h.jsx)("h3",{className:"heading",children:"Here is Me"}),Object(h.jsx)(O,{children:"DY Patil College Road, Akurdi, Pune, India"}),Object(h.jsx)("a",{href:"https://goo.gl/maps/F7UsSusfou7zyCUr5",target:"_blank",rel:"noreferrer",children:"Open in Google Map"})]})})})}var bn,hn,jn,pn=t(26),gn=m.b.div(bn||(bn=Object(l.a)(["\n  padding: 10rem 0;\n  .contact__wrapper {\n      display: flex;\n      gap: 5rem;\n      margin-top: 7rem;\n      justify-content: space-between;\n      position relative;\n\n      .left {\n          width: 100%;\n          max-width: 500px;\n          \n        }\n        .right {\n          width: 100%;\n          max-width: 500px;\n      }\n  }\n  .contact__wrapper::after {\n      position: absolute;\n      content: '';\n      width: 2px;\n      height: 50%;\n      background-color: var(--gray-1);\n      left: 50%;\n      top: 30%;\n      transform: translate(-50%, -50%)\n  }\n\n  @media only screen and (max-width: 768px) {\n    .contact__wrapper {\n        flex-direction: column;\n        .left, \n        .right {\n            max-width: 100%;\n        }\n        &::after {\n        display: none;\n        }\n    }\n  }\n"]))),un=m.b.form(hn||(hn=Object(l.a)(['\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n    label {\n      font-size: 1.8rem;\n      input,\n      textarea {\n        width: 100%;\n        font-size: 2rem;\n        padding: 1.2rem;\n        color: var(--gray-1);\n        background-color: var(--deep-dark);\n        outline: none;\n        border: none;\n        border-radius: 8px;\n        margin-top: 1rem;\n      }\n      textarea {\n        min-height: 250px;\n        resize: vertical;\n      }\n    }\n  }\n  button[type="submit"] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n'])));function xn(){var n=Object(a.useState)(""),e=Object(c.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(""),o=Object(c.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)(""),m=Object(c.a)(d,2),j=m[0],p=m[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(gn,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(I,{heading:"Contact",subheading:"Get in touch"}),Object(h.jsxs)("div",{className:"contact__wrapper",children:[Object(h.jsxs)("div",{className:"left",children:[Object(h.jsx)(sn,{icon:Object(h.jsx)(b.f,{}),text:"+919057297344"}),Object(h.jsx)(sn,{icon:Object(h.jsx)(b.e,{}),text:"skshamagarwal@gmail.com"}),Object(h.jsx)(sn,{text:"DY Patil College Road, Akurdi, Pune, India"})]}),Object(h.jsx)("div",{className:"right",children:Object(h.jsxs)(un,{onSubmit:function(n){n.preventDefault(),pn.a.sendForm("service_6rjxzum","template_zwpxzec",n.target,"user_4XxLhG5Qjqm436rvmL6fY").then((function(n){alert("Your message has been sent, you will recieve a response on you email soon.")})).catch((function(n){alert("Some problem occurred while sending the message:: "+n+"\nPlease try again or send an email on skshamagarwal@gmail.com")})),i(""),l(""),p("")},children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(h.jsx)("input",{required:!0,type:"text",id:"name",name:"name",value:t,onChange:function(n){return i(n.target.value)}})]})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{htmlFor:"email",children:["Your Email",Object(h.jsx)("input",{required:!0,name:"email",type:"text",id:"email",email:"email",value:s,onChange:function(n){return l(n.target.value)}})]})}),Object(h.jsx)("div",{className:"form-group",children:Object(h.jsxs)("label",{htmlFor:"message",children:["Your Message",Object(h.jsx)("textarea",{required:!0,name:"message",type:"text",id:"message",message:"message",value:j,onChange:function(n){return p(n.target.value)}})]})}),Object(h.jsx)("button",{type:"submit",value:"Send",children:"Send"})]})})]})]})}),Object(h.jsx)("div",{children:Object(h.jsx)(mn,{})})]})}var fn,vn=m.b.div(jn||(jn=Object(l.a)(["\n  padding-top: 10rem;\n  min-height: 100vh;\n  .error {\n    padding: 10rem;\n    text-align: center;\n  }\n"])));function On(){return Object(h.jsxs)(vn,{children:[Object(h.jsx)(I,{heading:"EXPERIENCE",subheading:"places I have worked at"}),Object(h.jsx)("h1",{className:"error",children:" Page under development "})]})}function _n(){return Object(h.jsxs)(d.a,{basename:"/",children:[Object(h.jsx)(p,{}),Object(h.jsxs)(N.c,{children:[Object(h.jsx)(N.a,{path:"/",element:Object(h.jsx)(X,{})}),Object(h.jsx)(N.a,{path:"/about",element:Object(h.jsx)(en,{})}),Object(h.jsx)(N.a,{path:"/projects",element:Object(h.jsx)(an,{})}),Object(h.jsx)(N.a,{path:"/experience",element:Object(h.jsx)(On,{})}),Object(h.jsx)(N.a,{path:"/contact",element:Object(h.jsx)(xn,{})})]}),Object(h.jsx)(y,{})]})}var yn,kn=Object(m.a)(fn||(fn=Object(l.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),wn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Nn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Sn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",zn=t.p+"static/media/LilitaOne-Regular.797856d9.ttf",Cn=Object(m.a)(yn||(yn=Object(l.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'LilitaOne Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n"])),wn,Nn,Sn,zn);s.a.render(Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(kn,{}),Object(h.jsx)(Cn,{}),Object(h.jsx)(_n,{})]}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0fe67686.chunk.js.map