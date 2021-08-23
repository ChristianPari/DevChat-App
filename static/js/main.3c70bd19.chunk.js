(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},145:function(e,t,n){},146:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n(67),i=n.n(a),r=n(24),o=n(2),j=(n(77),n(78),n(13)),l=(n(79),n(1)),u=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),i=Object(j.a)(a,2),o=i[0],u=i[1];return Object(l.jsxs)("div",{className:"joinContainer",children:[Object(l.jsxs)("div",{className:"welcomingContainer",children:[Object(l.jsx)("h1",{className:"welcomeHeading",children:"Welcome to DevChat"}),Object(l.jsx)("span",{className:"welcomeMsg",children:"Join in the fun below by entering your name and choice of chatroom!"})]}),Object(l.jsx)("div",{className:"joinOuterContainer",children:Object(l.jsxs)("div",{className:"joinInnerContainer",children:[Object(l.jsx)("h1",{className:"heading",children:"Join"}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("div",{className:"input-group-text",children:"Name"})}),Object(l.jsx)("input",{className:"joinInput form-control",type:"text",onChange:function(e){return s(e.target.value)}})]}),Object(l.jsxs)("div",{className:"input-group",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("div",{className:"input-group-text room",children:"Room"})}),Object(l.jsx)("input",{className:"joinInput form-control",type:"text",onChange:function(e){return u(e.target.value)}})]}),Object(l.jsx)(r.b,{onClick:function(e){return n&&o?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(o),children:Object(l.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})]})},m=n(72),b=n(69),d=n.n(b),O=n(70),h=n.n(O),A=(n(120),n(121),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="),x=function(e){var t=e.room;return Object(l.jsxs)("div",{className:"infoBar",children:[Object(l.jsxs)("div",{className:"leftInnerContainer",children:[Object(l.jsx)("img",{className:"onlineIcon",src:A,alt:"online"}),Object(l.jsx)("h3",{children:t})]}),Object(l.jsx)("div",{className:"rightInnerContainer",children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close"})})})]})},g=(n(122),function(e){var t=e.message,n=e.setMessage,s=e.sendMessage;return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:t,onChange:function(e){return n(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?s(e):null}}),Object(l.jsx)("button",{className:"sendButton",onClick:function(e){return s(e)},children:"Send"})]})}),p=(n(123),n(71)),f=n.n(p),N=(n(145),n(39)),v=n.n(N),C=function(e){var t=e.message,n=t.user,s=t.text,c=!1,a=e.name.trim().toLowerCase();return n===a&&(c=!0),c?Object(l.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(l.jsx)("p",{className:"sentText pr-10",children:a}),Object(l.jsx)("div",{className:"messageBox backgroundDark",children:Object(l.jsx)("p",{className:"messageText colorWhite",children:v.a.emojify(s)})})]}):Object(l.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(l.jsx)("div",{className:"messageBox backgroundLight",children:Object(l.jsx)("p",{className:"messageText colorDark",children:v.a.emojify(s)})}),Object(l.jsx)("p",{className:"sentText pl-10",children:n})]})},I=function(e){var t=e.messages,n=e.name;return Object(l.jsx)(f.a,{className:"messages",children:t.map((function(e,t){return Object(l.jsx)("div",{children:Object(l.jsx)(C,{message:e,name:n})},t)}))})},S=(n(146),function(e){var t=e.users;return Object(l.jsx)("div",{className:"textContainer",children:t?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"People currently chatting:"}),Object(l.jsx)("div",{className:"activeContainer",children:Object(l.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(l.jsxs)("div",{className:"activeItem",children:[Object(l.jsx)("img",{alt:"Online Icon",src:A}),t]},t)}))})})]}):null})}),w=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(j.a)(n,2),i=a[0],r=a[1],o=Object(c.useState)(""),u=Object(j.a)(o,2),b=u[0],O=u[1],A=Object(c.useState)(""),p=Object(j.a)(A,2),f=p[0],N=p[1],v=Object(c.useState)(""),C=Object(j.a)(v,2),w=C[0],y=C[1],R=Object(c.useState)([]),E=Object(j.a)(R,2),M=E[0],U=E[1],k="localhost:5000";Object(c.useEffect)((function(){var e=new URL(window.location).search.substring(1),t=d.a.parse(e),n=t.name,c=t.room;return s=h()(k,{"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,transports:["websocket"]}),r(n),O(c),s.emit("join",{name:n,room:c},(function(e){e&&alert(e)})),function(){s.emit("disconnect"),s.off()}}),[k,t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){U([].concat(Object(m.a)(M),[e]))})),s.on("roomData",(function(e){var t=e.users;N(t)}))}),[M]);return Object(l.jsxs)("div",{className:"outerContainer",children:[Object(l.jsxs)("div",{className:"innerContainer",children:[Object(l.jsx)(x,{room:b}),Object(l.jsx)(I,{messages:M,name:i}),Object(l.jsx)(g,{message:w,setMessage:y,sendMessage:function(e){e.preventDefault(),w&&s.emit("sendMessage",w,(function(){return y("")}))}})]}),Object(l.jsx)(S,{users:f})]})},y=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(o.a,{path:"/DevChat-App",exact:!0,component:u}),Object(l.jsx)(o.a,{path:"/chat",exact:!0,component:w})]})};i.a.render(Object(l.jsx)(y,{}),document.querySelector("#root"))},77:function(e,t,n){},79:function(e,t,n){}},[[147,1,2]]]);
//# sourceMappingURL=main.3c70bd19.chunk.js.map