(this.webpackJsonpquiztools=this.webpackJsonpquiztools||[]).push([[0],{125:function(e,t,n){},127:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),s=n.n(c),i=n(16),r=n.n(i),o=(n(125),n(28)),u=n(9),j=n(37),l=n(18),d=n(75),b=n(76),h=n(77),O=n(98),p=s.a.createContext(),x=function(e){var t=Object(c.useState)("fi"),n=Object(u.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)("fi"),o=Object(u.a)(r,2),j=o[0],l=o[1];return Object(a.jsx)(p.Provider,{value:{locale:s,selectLanguage:function(e){var t=e.target.value;i(t),l("fi"===t?b:"vi"===t?h:O)}},children:Object(a.jsx)(d.a,{messages:j,locale:s,children:e.children})})},m=n(208),f=n(64),v=(n(127),n(10)),g=n.n(v),w=n(23),k=n(29),y=n.n(k),S=n(24),C=n.n(S),N=n(207),q=n(209),D=n(69),M=n.n(D),I=n(212),L=n(94),T=(n(104),n(101),function(e){var t=Object(l.f)(),n=(t.path,t.url,Object(c.useState)([])),s=Object(u.a)(n,2),i=s[0],r=s[1],o=Object(c.useState)(0),j=Object(u.a)(o,2);j[0],j[1];Object(c.useEffect)((function(){(function(){var t=Object(w.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C.a.get("http://localhost:5000/vastaukset/"+e.questionID).then((function(e){console.log("response",e.data),r(e.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var d=function(){var e=Object(w.a)(g.a.mark((function e(t,n,a,c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.put("http://localhost:5000/muokkaavastaus/".concat(t,"/").concat(n,"/").concat(a.id,"/").concat(c.target.value,"/").concat(a.oikea,"/"));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),b=function(){var e=Object(w.a)(g.a.mark((function e(t,n,a,c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.put("http://localhost:5000/muokkaavastaus/".concat(t,"/").concat(n,"/").concat(a.id,"/").concat(a.vastausteksti,"/").concat(c.target.checked,"/"));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,c){return e.apply(this,arguments)}}(),h=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.delete("http://localhost:5000/poistavastaus/".concat(t.id));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.length<1?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)("div",{className:"Answer-list",children:Object(a.jsx)("div",{children:i.map((function(t){return Object(a.jsxs)("div",{className:"answer",children:[Object(a.jsx)(I.a,{defaultChecked:t.oikea,onClick:function(n){return b(e.examID,e.questionID,t,n)}},y()()),Object(a.jsx)(q.a,{label:Object(a.jsx)(L.a,{id:"answer",defaultMessage:"Vastaus",description:"Answer"}),variant:"outlined",style:{width:"45%"},defaultValue:t.vastausteksti,onBlur:function(n){return d(e.examID,e.questionID,t,n)}},y()()),Object(a.jsx)(M.a,{onClick:function(e){return h(t)}},y()())]})}))})})}),E=function(e){var t=Object(l.f)(),n=(t.path,t.url),s=Object(c.useState)([]),i=Object(u.a)(s,2),r=i[0],o=i[1],j=Object(c.useState)(0),d=Object(u.a)(j,2),b=d[0],h=d[1],O=Object(c.useState)(""),p=Object(u.a)(O,2);p[0],p[1];Object(c.useEffect)((function(){(function(){var t=Object(w.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:C.a.get("".concat(n,":5000/kysymykset/")+e.examID).then((function(e){o(e.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.examID,b]);var x=function(){var e=Object(w.a)(g.a.mark((function e(t,a,c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.put("".concat(n,":5000/muokkaakysymys/").concat(t,"/").concat(a,"/").concat(c.target.value.toString()));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.post("".concat(n,":5000/lisaakysymys/").concat(t,"/' '"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.delete("".concat(n,":5000/poistakysymys/").concat(t.id));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(w.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.post("".concat(n,":5000/lisaavastaus/").concat(t,"/").concat(a,"/' '/false")),h(t);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return r.length<1?Object(a.jsx)("div",{children:Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{color:"primary",onClick:function(){return f(e.examID)},children:Object(a.jsx)(L.a,{id:"add-question",defaultMessage:"Lis\xe4\xe4 kysymys",description:"Add question"})},y()())})}):Object(a.jsx)("div",{className:"Question-list",children:Object(a.jsxs)(N.a,{style:{width:"75%"},children:[Object(a.jsxs)("div",{children:[h[e.e],r.map((function(t,n){return Object(a.jsxs)("div",{className:"Question",children:[Object(a.jsx)(q.a,{label:Object(a.jsx)(L.a,{id:"question",defaultMessage:"Kysymys",description:"Question"}),style:{width:"50%"},variant:"outlined",defaultValue:t.teksti,onBlur:function(n){return x(e.examID,t.id,n)}},y()()),Object(a.jsx)(M.a,{onClick:function(e){return v(t)}},y()()),Object(a.jsx)(T,{examID:e.examID,questionID:t.id},y()()),Object(a.jsx)("div",{id:t.index,children:Object(a.jsx)(m.a,{color:"primary",onClick:function(){return k(e.examID,t.id)},children:Object(a.jsx)(L.a,{id:"add-answer",defaultMessage:"Lis\xe4\xe4 vastaus",description:"Add answer"})},y()())})]})}))]}),Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{color:"primary",onClick:function(){return f(e.examID)},children:Object(a.jsx)(L.a,{id:"add-question",defaultMessage:"Lis\xe4\xe4 kysymys",description:"Add question"})},y()())})]})})},A=n(215),K=n(214),R=function(){var e=Object(l.f)(),t=e.path,n=e.url,s=Object(c.useState)([]),i=Object(u.a)(s,2),r=i[0],o=i[1],d=Object(c.useState)(),b=Object(u.a)(d,2),h=b[0],O=b[1],p=Object(c.useState)(!1),x=Object(u.a)(p,2),f=x[0],v=x[1],k=Object(c.useState)(""),S=Object(u.a)(k,2),N=S[0];S[1];Object(c.useEffect)((function(){(function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.get("".concat(n,":5000/tentit")).then((function(e){o(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var q=function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.a.post("http://localhost:5000/lisaatentti/".concat(N));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.length<1?Object(a.jsx)(a.Fragment,{children:"loading..."}):Object(a.jsxs)("div",{className:"Exam-list",children:[Object(a.jsxs)("div",{children:[r.map((function(e,t){return Object(a.jsx)(m.a,{component:j.b,to:"".concat(n,"/").concat(e.id),color:"primary",onClick:function(){return O(e.id)},children:e.nimi},y()())})),Object(a.jsx)(m.a,{color:"primary",onClick:function(){v(!0)},children:"+"}),Object(a.jsx)(V,{examName:N,open:f,onClose:function(){v(!1),N&&q(N)}})]}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:t}),Object(a.jsx)(l.a,{path:"".concat(t,"/:id"),children:Object(a.jsx)(E,{examID:h})})]})]})};function V(e){var t=e.open,n=e.onClose,c=e.examName;return Object(a.jsxs)(K.a,{onClose:void n(c),open:t,children:[Object(a.jsx)(A.a,{id:"newExamDialog",children:Object(a.jsx)(L.a,{id:"new-exam-title",description:"Translation for new exam input"})}),Object(a.jsx)(q.a,{children:"teksti"},y()()),Object(a.jsx)(m.a,{children:"Uus tentti"}),Object(a.jsx)(m.a,{children:"Peruuta"})]})}var Q=n(15),z=function(){var e=Object(c.useState)({etunimi:"",sukunimi:"",email:"",salasana:"",admin:""}),t=Object(u.a)(e,2),n=t[0],s=t[1],i=function(e){s(Object(o.a)(Object(o.a)({},n),{},Object(Q.a)({},e.target.name,e.target.value)))},r=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,C.a.post("http://localhost:5000/register/".concat(n.etunimi,"/").concat(n.sukunimi,"/").concat(n.email,"/").concat(n.salasana,"/").concat(n.admin));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("registration error");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"Register",children:Object(a.jsxs)("form",{onSubmit:r,children:[Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{name:"etunimi",label:Object(a.jsx)(L.a,{id:"firstName",defaultMessage:"Etunimi",description:"First name"}),onChange:function(e){i(e)}})}),Object(a.jsx)("p",{}),Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{name:"sukunimi",label:Object(a.jsx)(L.a,{id:"surName",defaultMessage:"Sukunimi",description:"Last name"}),onChange:function(e){i(e)}})}),Object(a.jsx)("p",{}),Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{name:"email",label:Object(a.jsx)(L.a,{id:"email",defaultMessage:"S\xe4hk\xf6postiosoite",description:"Email"}),onChange:function(e){i(e)}})}),Object(a.jsx)("p",{}),Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{name:"salasana",label:Object(a.jsx)(L.a,{id:"password",defaultMessage:"Salasana",description:"Password"}),type:"password",onChange:function(e){i(e)}})}),Object(a.jsx)("p",{}),Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{name:"admin",label:Object(a.jsx)(L.a,{id:"admin",defaultMessage:"Opettaja",description:"Teacher password"}),onChange:function(e){i(e)}})}),Object(a.jsx)("p",{}),Object(a.jsx)(m.a,{onClick:r,children:Object(a.jsx)(L.a,{id:"register.button",defaultMessage:"Rekister\xf6idy",description:"Register/register button"})})]})})})},J=function(){var e=Object(c.useState)({email:"",salasana:""}),t=Object(u.a)(e,2),n=t[0],s=t[1],i=function(e){s(Object(o.a)(Object(o.a)({},n),{},Object(Q.a)({},e.target.name,e.target.value)))},r=function(){var e=Object(w.a)(g.a.mark((function e(t){var a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,C.a.post("http://localhost:5000/login/",n);case 4:return a=e.sent,console.log(a.data),e.next=8,a.data.token;case 8:c=e.sent,localStorage.setItem("token",c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("registration error");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"Login",children:[Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{name:"email",label:Object(a.jsx)(L.a,{id:"email",defaultMessage:"S\xe4hk\xf6postiosoite",description:"email address"}),onChange:function(e){i(e)}})}),Object(a.jsx)("p",{}),Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{name:"salasana",label:Object(a.jsx)(L.a,{id:"password",defaultMessage:"Salasana",description:"Password"}),type:"password",onChange:function(e){i(e)}})}),Object(a.jsx)("p",{}),Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{onClick:r,children:Object(a.jsx)(L.a,{id:"login.button",defaultMessage:"Kirjaudu sis\xe4\xe4n",description:"Login button"})})})]})},P=n(38),B=n(213),F=n(210),H=n(103);function U(){return null}var W=function(e){var t=Object(c.useContext)(p),n=Object(c.useState)([]),s=Object(u.a)(n,2),i=(s[0],s[1],Object(c.useState)(!1)),r=Object(u.a)(i,2),d=(r[0],r[1],Object(c.useReducer)((function(e,t){switch(t.type){case"INIT_DATA":return t.data;default:throw new Error}}),[])),b=Object(u.a)(d,2),h=(b[0],b[1],Object(c.useState)(!1)),O=Object(u.a)(h,2),x=O[0],v=O[1],g=Object(c.useState)(""),w=Object(u.a)(g,2),k=w[0],y=w[1],S=new H.w3cwebsocket("ws://localhost:3001");function C(e){return Object(a.jsx)(F.a,Object(o.a)({elevation:6,variant:"filled"},e))}function N(e){return Object(a.jsx)(f.a,Object(o.a)(Object(o.a)({},e),{},{children:Object(a.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}))}return"https://jv-quiztool.herokuapp.com/",Object(c.useEffect)((function(){S.onopen=function(e){console.log("WebSocket connection open.")},S.onmessage=function(e){console.log("client.onmessage ",e.data),y(e.data),v(!0)}}),[S.onChange]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("nav",{children:[Object(a.jsx)(m.a,{component:j.b,to:"/",children:Object(a.jsx)(N,{color:"action"})}),Object(a.jsx)(m.a,{component:j.b,to:"/tentit",children:Object(a.jsx)(L.a,{id:"tentit.button",defaultMessage:"Tentit",description:"Navigation/exams button"})}),Object(a.jsx)(m.a,{component:j.b,to:"/login",children:Object(a.jsx)(L.a,{id:"login.button",defaultMessage:"Kirjaudu",description:"Navigation/login button"})}),Object(a.jsx)(m.a,{component:j.b,to:"/register",children:Object(a.jsx)(L.a,{id:"register.button",defaultMessage:"Rekister\xf6idy",description:"Navigation/register button"})}),Object(a.jsxs)("select",{className:"language-selector",value:t.locale,onChange:t.selectLanguage,children:[Object(a.jsx)("option",{value:"en-gb",children:"English"}),Object(a.jsx)("option",{value:"fi",children:"suomi"}),Object(a.jsx)("option",{value:"vi",children:"Ti\u1ebfng Vi\u1ec7t"})]}),Object(a.jsx)("text",{className:"date-time",children:Object(a.jsx)(P.a,{value:e.date,year:"numeric",month:"numeric",day:"numeric",weekday:"long"})})]}),Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/register",children:Object(a.jsx)(z,{})}),Object(a.jsx)(l.a,{path:"/login",children:Object(a.jsx)(J,{})}),Object(a.jsx)(l.a,{path:"/tentit",children:Object(a.jsx)(R,{})}),Object(a.jsx)(l.a,{path:"/",children:Object(a.jsx)(U,{})})]})]})}),Object(a.jsxs)("div",{children:[console.log("Render\xf6innin viesti:",k),Object(a.jsx)(B.a,{open:x,onClose:function(e,t){v(!1)},autoHideDuration:3e3,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:Object(a.jsx)(C,{severity:"info",children:Object(a.jsx)(L.a,{id:k.toString(),description:"Translations for alert messages"})})})," "]})]})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(x,{children:Object(a.jsx)(W,{date:Date.now()})})}),document.getElementById("root"))},76:function(e){e.exports=JSON.parse('{"tentit.button":"Tentit","login.button":"Kirjaudu","register.button":"Rekister\xf6idy","firstName":"Etunimi","surName":"Sukunimi","email":"S\xe4hk\xf6posti","password":"Salasana","admin":"Opettajan salasana","question":"Kysymys","add-answer":"Lis\xe4\xe4 vastaus","add-question":"Lis\xe4\xe4 kysymys","answer":"Vastaus","exam-changed":"Tentin nime\xe4 muokattu","question-changed":"Kysymyst\xe4 muokattu","answer-changed":"Vastausta muokattu","new-exam":"Lis\xe4tty uusi tentti","new-question":"Lis\xe4tty uusi kysymys","new-answer":"Lis\xe4tty uusi vastaus","delete-exam":"Tentti poistettu","delete-question":"Kysymys poistettu","delete-answer":"Vastaus poistettu","new-exam-title":"Kirjoita uuden tentin nimi"}')},77:function(e){e.exports=JSON.parse('{"tentit.button":"K\u1ef3 thi","login.button":"\u0110\u0103ng nh\xe2\u0323p","register.button":"\u0110\u0103ng k\xfd","firstName":"T\xean \u0111\u1ea7u ti\xean","surName":"H\u1ecd","email":"email","password":"m\u1eadt kh\u1ea9u","admin":"H\u1ed3 Ch\xed Minh?","question":"C\xe2u ch\xe2\u0341t v\xe2\u0341n","add-answer":"Th\xeam c\xe2u tr\u1ea3 l\u1eddi","add-question":"Th\xeam c\xe2u h\u1ecfi","answer":"C\xe2u tr\u1ea3 l\u1eddi","exam-changed":"T\xean b\xe0i ki\u1ec3m tra \u0111\xe3 thay \u0111\u1ed5i","question-changed":"C\xe2u h\u1ecfi \u0111\xe3 thay \u0111\u1ed5i","answer-changed":"C\xe2u tr\u1ea3 l\u1eddi \u0111\xe3 thay \u0111\u1ed5i","new-exam":"B\xe0i ki\u1ec3m tra m\u1edbi \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam v\xe0o","new-question":"\u0110\xe3 th\xeam c\xe2u h\u1ecfi m\u1edbi","new-answer":"\u0110\xe3 th\xeam c\xe2u tr\u1ea3 l\u1eddi m\u1edbi","delete-exam":"\u0110\xe3 x\xf3a b\xe0i ki\u1ec3m tra","delete-question":"\u0110\xe3 x\xf3a c\xe2u h\u1ecfi","delete-answer":"\u0110\xe3 x\xf3a c\xe2u tr\u1ea3 l\u1eddi","new-exam-title":"Nh\u1eadp t\xean b\xe0i ki\u1ec3m tra m\u1edbi"}')},98:function(e){e.exports=JSON.parse('{"tentit.button":"Exams","login.button":"Login","register.button":"Register","firstName":"First name","surName":"Last name","email":"email","password":"Password","admin":"Teacher password","question":"Question","add-answer":"Add answer","add-question":"Add question","answer":"Answer","exam-changed":"Exam name changed","question-changed":"Question changed","answer-changed":"Answer changed","new-exam":"New exam created","new-question":"New question added","new-answer":"New answer added","delete-exam":"Exam deleted","delete-question":"Question deleted","delete-answer":"Answer deleted","new-exam-title":"Type new exam name"}')}},[[164,1,2]]]);
//# sourceMappingURL=main.c02e5f38.chunk.js.map