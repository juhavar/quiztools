(this.webpackJsonpquiztools=this.webpackJsonpquiztools||[]).push([[0],{120:function(e,t,a){},122:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(0),c=a.n(s),i=a(15),r=a.n(i),o=(a(120),a(29)),u=a(9),j=a(35),d=a(17),l=a(73),b=a(74),h=a(75),p=a(97),O=c.a.createContext(),m=function(e){var t=Object(s.useState)("fi"),a=Object(u.a)(t,2),c=a[0],i=a[1],r=Object(s.useState)("fi"),o=Object(u.a)(r,2),j=o[0],d=o[1];return Object(n.jsx)(O.Provider,{value:{locale:c,selectLanguage:function(e){var t=e.target.value;i(t),d("fi"===t?b:"vi"===t?h:p)}},children:Object(n.jsx)(l.a,{messages:j,locale:c,children:e.children})})},x=a(197),f=a(62),v=(a(122),a(10)),g=a.n(v),w=a(21),k=a(27),y=a.n(k),N=a(22),S=a.n(N),q=a(196),C=a(198),D=a(67),M=a.n(D),I=a(199),L=a(93),T=(a(102),a(100),function(e){var t=Object(d.f)(),a=(t.path,t.url,e.host),c=Object(s.useState)([]),i=Object(u.a)(c,2),r=i[0],o=i[1],j=Object(s.useState)(0),l=Object(u.a)(j,2);l[0],l[1];Object(s.useEffect)((function(){(function(){var t=Object(w.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S.a.get(a+"/vastaukset/"+e.questionID).then((function(e){console.log("response",e.data),o(e.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var b=function(){var e=Object(w.a)(g.a.mark((function e(t,n,s,c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.put(a+"/muokkaavastaus/".concat(t,"/").concat(n,"/").concat(s.id,"/").concat(c.target.value,"/").concat(s.oikea,"/"));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}(),h=function(){var e=Object(w.a)(g.a.mark((function e(t,n,s,c){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.put(a+"/muokkaavastaus/".concat(t,"/").concat(n,"/").concat(s.id,"/").concat(s.vastausteksti,"/").concat(c.target.checked,"/"));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}(),p=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.delete(a+"/poistavastaus/".concat(t.id));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.length<1?Object(n.jsx)(n.Fragment,{}):Object(n.jsx)("div",{className:"Answer-list",children:Object(n.jsx)("div",{children:r.map((function(t){return Object(n.jsxs)("div",{className:"answer",children:[Object(n.jsx)(I.a,{defaultChecked:t.oikea,onClick:function(a){return h(e.examID,e.questionID,t,a)}},y()()),Object(n.jsx)(C.a,{label:Object(n.jsx)(L.a,{id:"answer",defaultMessage:"Vastaus",description:"Answer"}),variant:"outlined",style:{width:"45%"},defaultValue:t.vastausteksti,onBlur:function(a){return b(e.examID,e.questionID,t,a)}},y()()),Object(n.jsx)(M.a,{onClick:function(e){return p(t)}},y()())]})}))})})}),E=function(e){var t=Object(d.f)(),a=(t.path,t.url,e.host),c=Object(s.useState)([]),i=Object(u.a)(c,2),r=i[0],o=i[1],j=Object(s.useState)(0),l=Object(u.a)(j,2),b=l[0],h=l[1],p=Object(s.useState)(""),O=Object(u.a)(p,2);O[0],O[1];Object(s.useEffect)((function(){(function(){var t=Object(w.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:S.a.get(a+"/kysymykset/"+e.examID).then((function(e){o(e.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.examID,b]);var m=function(){var e=Object(w.a)(g.a.mark((function e(t,n,s){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.put(a+"/muokkaakysymys/".concat(t,"/").concat(n,"/").concat(s.target.value.toString()));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.post(a+"/lisaakysymys/".concat(t,"/' '"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.delete(a+"/poistakysymys/".concat(t.id));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(w.a)(g.a.mark((function e(t,n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.post(a+"/lisaavastaus/".concat(t,"/").concat(n,"/' '/false")),h(t);case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.length<1?Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{color:"primary",onClick:function(){return f(e.examID)},children:Object(n.jsx)(L.a,{id:"add-question",defaultMessage:"Lis\xe4\xe4 kysymys",description:"Add question"})},y()())})}):Object(n.jsx)("div",{className:"Question-list",children:Object(n.jsxs)(q.a,{style:{width:"75%"},children:[Object(n.jsxs)("div",{children:[h[e.e],r.map((function(t,s){return Object(n.jsxs)("div",{className:"Question",children:[Object(n.jsx)(C.a,{label:Object(n.jsx)(L.a,{id:"question",defaultMessage:"Kysymys",description:"Question"}),style:{width:"50%"},variant:"outlined",defaultValue:t.teksti,onBlur:function(a){return m(e.examID,t.id,a)}},y()()),Object(n.jsx)(M.a,{onClick:function(e){return v(t)}},y()()),Object(n.jsx)(T,{host:a,examID:e.examID,questionID:t.id},y()()),Object(n.jsx)("div",{id:t.index,children:Object(n.jsx)(x.a,{color:"primary",onClick:function(){return k(e.examID,t.id)},children:Object(n.jsx)(L.a,{id:"add-answer",defaultMessage:"Lis\xe4\xe4 vastaus",description:"Add answer"})},y()())})]})}))]}),Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{color:"primary",onClick:function(){return f(e.examID)},children:Object(n.jsx)(L.a,{id:"add-question",defaultMessage:"Lis\xe4\xe4 kysymys",description:"Add question"})},y()())})]})})},A=a(202),K=a(201),R=function(e){var t=Object(d.f)(),a=t.path,c=t.url,i=e.host,r=Object(s.useState)([]),o=Object(u.a)(r,2),l=o[0],b=o[1],h=Object(s.useState)(),p=Object(u.a)(h,2),O=p[0],m=p[1],f=Object(s.useState)(!1),v=Object(u.a)(f,2),k=v[0],N=v[1],q=Object(s.useState)(""),C=Object(u.a)(q,2),D=C[0];C[1];Object(s.useEffect)((function(){(function(){var t=Object(w.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),S.a.get(i+"/tentit").then((function(e){b(e.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var M=function(){var e=Object(w.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.a.post("http://localhost:5000/lisaatentti/".concat(D));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.length<1?Object(n.jsx)(n.Fragment,{children:"loading..."}):Object(n.jsxs)("div",{className:"Exam-list",children:[Object(n.jsxs)("div",{children:[l.map((function(e,t){return Object(n.jsx)(x.a,{component:j.b,to:"".concat(c,"/").concat(e.id),color:"primary",onClick:function(){return m(e.id)},children:e.nimi},y()())})),Object(n.jsx)(x.a,{color:"primary",onClick:function(){N(!0)},children:"+"}),Object(n.jsx)(V,{examName:D,open:k,onClose:function(){N(!1),D&&M(D)}})]}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:a}),Object(n.jsx)(d.a,{path:"".concat(a,"/:id"),children:Object(n.jsx)(E,{examID:O,host:i})})]})]})};function V(e){var t=e.open,a=e.onClose,s=e.examName;return Object(n.jsxs)(K.a,{onClose:void a(s),open:t,children:[Object(n.jsx)(A.a,{id:"newExamDialog",children:Object(n.jsx)(L.a,{id:"new-exam-title",description:"Translation for new exam input"})}),Object(n.jsx)(C.a,{children:"teksti"},y()()),Object(n.jsx)(x.a,{children:"Uus tentti"}),Object(n.jsx)(x.a,{children:"Peruuta"})]})}var Q=a(20),J=function(){var e=Object(s.useState)({etunimi:"",sukunimi:"",email:"",salasana:"",admin:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],i=function(e){c(Object(o.a)(Object(o.a)({},a),{},Object(Q.a)({},e.target.name,e.target.value)))},r=function(){var e=Object(w.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,S.a.post("http://localhost:5000/register/".concat(a.etunimi,"/").concat(a.sukunimi,"/").concat(a.email,"/").concat(a.salasana,"/").concat(a.admin));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log("registration error");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"Register",children:Object(n.jsxs)("form",{onSubmit:r,children:[Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{name:"etunimi",label:Object(n.jsx)(L.a,{id:"firstName",defaultMessage:"Etunimi",description:"First name"}),onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{name:"sukunimi",label:Object(n.jsx)(L.a,{id:"surName",defaultMessage:"Sukunimi",description:"Last name"}),onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{name:"email",label:Object(n.jsx)(L.a,{id:"email",defaultMessage:"S\xe4hk\xf6postiosoite",description:"Email"}),onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{name:"salasana",label:Object(n.jsx)(L.a,{id:"password",defaultMessage:"Salasana",description:"Password"}),type:"password",onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{name:"admin",label:Object(n.jsx)(L.a,{id:"admin",defaultMessage:"Opettaja",description:"Teacher password"}),onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)(x.a,{onClick:r,children:Object(n.jsx)(L.a,{id:"register.button",defaultMessage:"Rekister\xf6idy",description:"Register/register button"})})]})})})},P=function(){var e=Object(s.useState)({email:"",salasana:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],i=function(e){c(Object(o.a)(Object(o.a)({},a),{},Object(Q.a)({},e.target.name,e.target.value)))},r=function(){var e=Object(w.a)(g.a.mark((function e(t){var n,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,S.a.post("http://localhost:5000/login/",a);case 4:return n=e.sent,console.log(n.data),e.next=8,n.data.token;case 8:s=e.sent,localStorage.setItem("token",s),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("registration error");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"Login",children:[Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{name:"email",label:Object(n.jsx)(L.a,{id:"email",defaultMessage:"S\xe4hk\xf6postiosoite",description:"email address"}),onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(C.a,{name:"salasana",label:Object(n.jsx)(L.a,{id:"password",defaultMessage:"Salasana",description:"Password"}),type:"password",onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(x.a,{onClick:r,children:Object(n.jsx)(L.a,{id:"login.button",defaultMessage:"Kirjaudu sis\xe4\xe4n",description:"Login button"})})})]})},z=a(37);function B(){return null}var F=function(e){var t=null;t="https://jv-quiztool.herokuapp.com";var a=Object(s.useContext)(O),c=Object(s.useState)([]),i=Object(u.a)(c,2),r=(i[0],i[1],Object(s.useState)(!1)),l=Object(u.a)(r,2),b=(l[0],l[1],Object(s.useReducer)((function(e,t){switch(t.type){case"INIT_DATA":return t.data;default:throw new Error}}),[])),h=Object(u.a)(b,2);function p(e){return Object(n.jsx)(f.a,Object(o.a)(Object(o.a)({},e),{},{children:Object(n.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}))}return h[0],h[1],Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{children:[Object(n.jsx)(x.a,{component:j.b,to:"/",children:Object(n.jsx)(p,{color:"action"})}),Object(n.jsx)(x.a,{component:j.b,to:"/tentit",children:Object(n.jsx)(L.a,{id:"tentit.button",defaultMessage:"Tentit",description:"Navigation/exams button"})}),Object(n.jsx)(x.a,{component:j.b,to:"/login",children:Object(n.jsx)(L.a,{id:"login.button",defaultMessage:"Kirjaudu",description:"Navigation/login button"})}),Object(n.jsx)(x.a,{component:j.b,to:"/register",children:Object(n.jsx)(L.a,{id:"register.button",defaultMessage:"Rekister\xf6idy",description:"Navigation/register button"})}),Object(n.jsxs)("select",{className:"language-selector",value:a.locale,onChange:a.selectLanguage,children:[Object(n.jsx)("option",{value:"en-gb",children:"English"}),Object(n.jsx)("option",{value:"fi",children:"suomi"}),Object(n.jsx)("option",{value:"vi",children:"Ti\u1ebfng Vi\u1ec7t"})]}),Object(n.jsx)("text",{className:"date-time",children:Object(n.jsx)(z.a,{value:e.date,year:"numeric",month:"numeric",day:"numeric",weekday:"long"})})]}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/register",children:Object(n.jsx)(J,{})}),Object(n.jsx)(d.a,{path:"/login",children:Object(n.jsx)(P,{})}),Object(n.jsx)(d.a,{path:"/tentit",children:Object(n.jsx)(R,{host:t})}),Object(n.jsx)(d.a,{path:"/",children:Object(n.jsx)(B,{})})]})]})})})};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(m,{children:Object(n.jsx)(F,{date:Date.now()})})}),document.getElementById("root"))},74:function(e){e.exports=JSON.parse('{"tentit.button":"Tentit","login.button":"Kirjaudu","register.button":"Rekister\xf6idy","firstName":"Etunimi","surName":"Sukunimi","email":"S\xe4hk\xf6posti","password":"Salasana","admin":"Opettajan salasana","question":"Kysymys","add-answer":"Lis\xe4\xe4 vastaus","add-question":"Lis\xe4\xe4 kysymys","answer":"Vastaus","exam-changed":"Tentin nime\xe4 muokattu","question-changed":"Kysymyst\xe4 muokattu","answer-changed":"Vastausta muokattu","new-exam":"Lis\xe4tty uusi tentti","new-question":"Lis\xe4tty uusi kysymys","new-answer":"Lis\xe4tty uusi vastaus","delete-exam":"Tentti poistettu","delete-question":"Kysymys poistettu","delete-answer":"Vastaus poistettu","new-exam-title":"Kirjoita uuden tentin nimi"}')},75:function(e){e.exports=JSON.parse('{"tentit.button":"K\u1ef3 thi","login.button":"\u0110\u0103ng nh\xe2\u0323p","register.button":"\u0110\u0103ng k\xfd","firstName":"T\xean \u0111\u1ea7u ti\xean","surName":"H\u1ecd","email":"email","password":"m\u1eadt kh\u1ea9u","admin":"H\u1ed3 Ch\xed Minh?","question":"C\xe2u ch\xe2\u0341t v\xe2\u0341n","add-answer":"Th\xeam c\xe2u tr\u1ea3 l\u1eddi","add-question":"Th\xeam c\xe2u h\u1ecfi","answer":"C\xe2u tr\u1ea3 l\u1eddi","exam-changed":"T\xean b\xe0i ki\u1ec3m tra \u0111\xe3 thay \u0111\u1ed5i","question-changed":"C\xe2u h\u1ecfi \u0111\xe3 thay \u0111\u1ed5i","answer-changed":"C\xe2u tr\u1ea3 l\u1eddi \u0111\xe3 thay \u0111\u1ed5i","new-exam":"B\xe0i ki\u1ec3m tra m\u1edbi \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam v\xe0o","new-question":"\u0110\xe3 th\xeam c\xe2u h\u1ecfi m\u1edbi","new-answer":"\u0110\xe3 th\xeam c\xe2u tr\u1ea3 l\u1eddi m\u1edbi","delete-exam":"\u0110\xe3 x\xf3a b\xe0i ki\u1ec3m tra","delete-question":"\u0110\xe3 x\xf3a c\xe2u h\u1ecfi","delete-answer":"\u0110\xe3 x\xf3a c\xe2u tr\u1ea3 l\u1eddi","new-exam-title":"Nh\u1eadp t\xean b\xe0i ki\u1ec3m tra m\u1edbi"}')},97:function(e){e.exports=JSON.parse('{"tentit.button":"Exams","login.button":"Login","register.button":"Register","firstName":"First name","surName":"Last name","email":"email","password":"Password","admin":"Teacher password","question":"Question","add-answer":"Add answer","add-question":"Add question","answer":"Answer","exam-changed":"Exam name changed","question-changed":"Question changed","answer-changed":"Answer changed","new-exam":"New exam created","new-question":"New question added","new-answer":"New answer added","delete-exam":"Exam deleted","delete-question":"Question deleted","delete-answer":"Answer deleted","new-exam-title":"Type new exam name"}')}},[[156,1,2]]]);
//# sourceMappingURL=main.adab0c32.chunk.js.map