(this.webpackJsonpquiztools=this.webpackJsonpquiztools||[]).push([[0],{127:function(e,t,a){},129:function(e,t,a){},163:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a(0),c=a.n(s),i=a(17),r=a.n(i),o=(a(127),a(29)),u=a(8),l=a(34),d=a(19),j=a(73),b=a(74),h=a(75),m=a(97),p=c.a.createContext(),x=function(e){var t=Object(s.useState)("fi"),a=Object(u.a)(t,2),c=a[0],i=a[1],r=Object(s.useState)("fi"),o=Object(u.a)(r,2),l=o[0],d=o[1];return Object(n.jsx)(p.Provider,{value:{locale:c,selectLanguage:function(e){var t=e.target.value;i(t),d("fi"===t?b:"vi"===t?h:m)}},children:Object(n.jsx)(j.a,{messages:l,locale:c,children:e.children})})},O=a(201),f=a(62),g=(a(129),a(7)),y=a.n(g),v=a(15),w=a(27),k=a.n(w),S=a(16),q=a.n(S),C=a(200),N=a(206),D=a(67),I=a.n(D),M=a(207),E=a(93),L=(a(102),a(100),null);function T(e){return A.apply(this,arguments)}function A(){return(A=Object(v.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.post(L+"/login/",t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function P(e){return K.apply(this,arguments)}function K(){return(K=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.post(L+"/register/".concat(t.etunimi,"/").concat(t.sukunimi,"/").concat(t.email,"/").concat(t.salasana,"/").concat(t.admin));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("registration error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function F(){return(F=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q.a.delete(L+"/poistatentti/".concat(t))}catch(a){console.log("Tentin poistossa h\xe4ikk\xe4\xe4")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return R.apply(this,arguments)}function R(){return(R=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q.a.post(L+"/lisaakysymys/".concat(t,"/'"))}catch(a){console.log("Kysymyksen lis\xe4ys kosahti")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){return(V=Object(v.a)(y.a.mark((function e(t,a,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q.a.put(L+"/muokkaakysymys/".concat(t,"/").concat(a,"/").concat(n.target.value.toString()))}catch(s){console.log("Ei voitu muuttaa kysymyksen teksti\xe4.")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return(B=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q.a.delete(L+"/poistakysymys/".concat(t.id))}catch(a){console.log("Ei voitu poistaa kysymyst\xe4")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){return(Q=Object(v.a)(y.a.mark((function e(t,a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q.a.post(L+"/lisaavastaus/".concat(a,"/' '/false"))}catch(t){console.log("Ei voitu lis\xe4t\xe4 vastausta.")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(v.a)(y.a.mark((function e(t,a,n,s){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q.a.put(L+"/muokkaavastaus/".concat(a,"/").concat(n.id,"/").concat(s.target.value,"/").concat(n.oikea,"/"))}catch(t){console.log("ei muutettu vastauksen teksti\xe4")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(v.a)(y.a.mark((function e(t,a,n,s){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q.a.put(L+"/muokkaavastaus/".concat(t,"/").concat(a,"/").concat(n.id,"/").concat(n.vastausteksti,"/").concat(s.target.checked,"/"))}catch(c){console.log("oikean vastauksen vaihto ei onnistunut")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(){return(X=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{q.a.delete(L+"/poistavastaus/".concat(t.id))}catch(a){console.log("vastauksen poisto m\xe4tt\xe4\xe4")}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}L="https://jv-quiztool.herokuapp.com",q.a.defaults.headers={"Content-type":"application/json",token:localStorage.token,admin:localStorage.admin};var W=function(e){var t=Object(d.g)(),a=(t.path,t.url,e.host),c=Object(s.useState)([]),i=Object(u.a)(c,2),r=i[0],o=i[1],l=Object(s.useState)(0),j=Object(u.a)(l,2);j[0],j[1];return Object(s.useEffect)((function(){(function(){var t=Object(v.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q.a.get(a+"/vastaukset/"+e.questionID).then((function(e){console.log("response",e.data),o(e.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),r.length<1?Object(n.jsx)(n.Fragment,{}):Object(n.jsx)("div",{className:"Answer-list",children:Object(n.jsx)("div",{children:r.map((function(t){return Object(n.jsxs)("div",{className:"answer",children:[Object(n.jsx)(M.a,{defaultChecked:t.oikea,onClick:function(a){return function(e,t,a,n){return J.apply(this,arguments)}(e.examID,e.questionID,t,a)}},k()()),Object(n.jsx)(N.a,{label:Object(n.jsx)(E.a,{id:"answer",defaultMessage:"Vastaus",description:"Answer"}),variant:"outlined",style:{width:"90%"},defaultValue:t.vastausteksti,onBlur:function(a){return function(e,t,a,n){return z.apply(this,arguments)}(e.examID,e.questionID,t,a)}},k()()),Object(n.jsx)(I.a,{onClick:function(e){return function(e){return X.apply(this,arguments)}(t)}},k()())]})}))})})},_=a(202),G=a(209),U=a(205),Y=a(203),Z=a(204),$=function(e){var t=Object(d.g)(),a=(t.path,t.url,e.host),c=Object(s.useState)([]),i=Object(u.a)(c,2),r=i[0],o=i[1],l=Object(s.useState)(0),j=Object(u.a)(l,2),b=j[0],h=j[1],m=Object(s.useState)(null),p=Object(u.a)(m,2),x=p[0],f=p[1],g=Object(s.useState)(!1),w=Object(u.a)(g,2),S=w[0],D=w[1],M=Object(s.useState)(""),L=Object(u.a)(M,2),T=L[0],A=L[1];Object(s.useEffect)((function(){(function(){var t=Object(v.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:q.a.get(a+"/kysymykset/"+e.examID).then((function(e){o(e.data)}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.examID,b]);var P=function(e,t){switch(e){case"exam":A("delete-exam");break;case"question":A("delete-question"),f(t);break;default:throw new Error}D(!0)},K=function(){D(!1)};return r.length<1?Object(n.jsx)("div",{children:Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{color:"primary",onClick:function(){return H(e.examID)},children:Object(n.jsx)(E.a,{id:"add-question",defaultMessage:"Lis\xe4\xe4 kysymys",description:"Add question"})},k()())})}):Object(n.jsx)("div",{className:"Question-list",children:Object(n.jsxs)(C.a,{style:{width:"95%"},children:[Object(n.jsxs)("div",{children:[h[e.e],r.map((function(t,s){return Object(n.jsxs)("div",{className:"Question",children:[Object(n.jsx)(N.a,{label:Object(n.jsx)(E.a,{id:"question",defaultMessage:"Kysymys",description:"Question"}),style:{width:"90%"},variant:"outlined",defaultValue:t.teksti,onBlur:function(a){return function(e,t,a){return V.apply(this,arguments)}(e.examID,t.id,a)}},k()()),Object(n.jsx)(I.a,{onClick:function(e){return P("question",t)}},k()()),Object(n.jsx)(W,{host:a,examID:e.examID,questionID:t.id},k()()),Object(n.jsx)("div",{id:t.index,children:Object(n.jsx)(O.a,{color:"primary",onClick:function(){return function(e,t){return Q.apply(this,arguments)}(e.examID,t.id)},children:Object(n.jsx)(E.a,{id:"add-answer",defaultMessage:"Lis\xe4\xe4 vastaus",description:"Add answer"})},k()())})]})}))]}),Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{color:"primary",onClick:function(){return H(e.examID)},children:Object(n.jsx)(E.a,{id:"add-question",defaultMessage:"Lis\xe4\xe4 kysymys",description:"Add question"})},k()())}),Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{color:"primary",onClick:function(t){return P("exam",e.examID)},children:Object(n.jsx)(E.a,{id:"delete-exam",defaultMessage:"Poista tentti",description:"Delete exam"})},k()()),Object(n.jsxs)(G.a,{open:S,close:K,children:[Object(n.jsx)(_.a,{id:"alert-dialog-title",children:Object(n.jsx)(E.a,{id:T})}),Object(n.jsx)(Y.a,{children:Object(n.jsx)(Z.a,{id:"alert-dialog-description",children:Object(n.jsx)(E.a,{id:"delete-warning",defaultMessage:"Huomio! Toiminto on peruuttamaton!",description:"Confirm and delete exam"})})}),Object(n.jsxs)(U.a,{children:[Object(n.jsx)(O.a,{onClick:function(){switch(T){case"delete-exam":!function(e){F.apply(this,arguments)}(e.examID);break;case"delete-question":!function(e){B.apply(this,arguments)}(x);break;default:throw new Error}D(!1)},color:"primary",children:Object(n.jsx)(E.a,{id:"alert-confirm",defaultMessage:"Poista tentti",description:"Confirm and delete exam"})}),Object(n.jsx)(O.a,{onClick:K,color:"primary",autoFocus:!0,children:Object(n.jsx)(E.a,{id:"alert-cancel",defaultMessage:"Peruuta",description:"Cancel deletion"})})]})]})]})]})})},ee=function(e){var t=Object(d.g)(),a=t.path,c=t.url,i=e.host,r=Object(s.useState)([]),o=Object(u.a)(r,2),j=o[0],b=o[1],h=Object(s.useState)(),m=Object(u.a)(h,2),p=m[0],x=m[1],f=Object(s.useState)(!1),g=Object(u.a)(f,2),w=(g[0],g[1]),S=Object(s.useState)(""),C=Object(u.a)(S,2),N=(C[0],C[1],localStorage.token),D=localStorage.admin;Object(s.useEffect)((function(){(function(){var t=Object(v.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e),q.a.get(i+"/tentit",{headers:{token:N},admin:D}).then((function(e){b(e.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[p]);return j.length<1?Object(n.jsx)(n.Fragment,{children:"loading..."}):Object(n.jsxs)("div",{className:"Exam-list",children:[Object(n.jsxs)("div",{children:[j.map((function(e,t){return Object(n.jsx)(O.a,{component:l.b,to:"".concat(c,"/").concat(e.id),color:"primary",onClick:function(){return x(e.id)},children:e.nimi},k()())})),Object(n.jsx)(O.a,{color:"primary",onClick:function(){console.log("huhuu"),w(!0)},children:"+"})]}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{exact:!0,path:a}),Object(n.jsx)(d.a,{path:"".concat(a,"/:id"),children:Object(n.jsx)($,{examID:p,host:i})})]})]})},te=a(22),ae=function(){var e=Object(s.useState)({etunimi:"",sukunimi:"",email:"",salasana:"",admin:""}),t=Object(u.a)(e,2),a=t[0],c=t[1],i=function(e){c(Object(o.a)(Object(o.a)({},a),{},Object(te.a)({},e.target.name,e.target.value)))},r=function(){var e=Object(v.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),P(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"Register",children:Object(n.jsxs)("form",{onSubmit:r,children:[Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{name:"etunimi",label:Object(n.jsx)(E.a,{id:"firstName",defaultMessage:"Etunimi",description:"First name"}),onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{name:"sukunimi",label:Object(n.jsx)(E.a,{id:"surName",defaultMessage:"Sukunimi",description:"Last name"}),onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{name:"email",label:Object(n.jsx)(E.a,{id:"email",defaultMessage:"S\xe4hk\xf6postiosoite",description:"Email"}),onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{name:"salasana",label:Object(n.jsx)(E.a,{id:"password",defaultMessage:"Salasana",description:"Password"}),type:"password",onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{name:"admin",label:Object(n.jsx)(E.a,{id:"admin",defaultMessage:"Opettaja",description:"Teacher password"}),onChange:function(e){i(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)(O.a,{onClick:r,children:Object(n.jsx)(E.a,{id:"register.button",defaultMessage:"Rekister\xf6idy",description:"Register/register button"})})]})})})},ne=function(e){var t=Object(s.useState)(null),a=Object(u.a)(t,2),c=(a[0],a[1],Object(s.useState)(!1)),i=Object(u.a)(c,2),r=(i[0],i[1],Object(s.useState)({email:"",salasana:""})),l=Object(u.a)(r,2),j=l[0],b=l[1],h=Object(d.f)(),m=function(e){b(Object(o.a)(Object(o.a)({},j),{},Object(te.a)({},e.target.name,e.target.value)))},p=function(){var e=Object(v.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,T(j);case 4:return a=e.sent,console.log(a),e.next=8,a;case 8:e.sent,localStorage.setItem("token",a.token),localStorage.setItem("admin",a.admin),h.push("/"),window.location.reload(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("registration error");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"Login",children:[Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{name:"email",label:Object(n.jsx)(E.a,{id:"email",defaultMessage:"S\xe4hk\xf6postiosoite",description:"email address"}),onChange:function(e){m(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{name:"salasana",label:Object(n.jsx)(E.a,{id:"password",defaultMessage:"Salasana",description:"Password"}),type:"password",onChange:function(e){m(e)}})}),Object(n.jsx)("p",{}),Object(n.jsx)("div",{children:Object(n.jsx)(O.a,{onClick:p,children:Object(n.jsx)(E.a,{id:"login.button",defaultMessage:"Kirjaudu sis\xe4\xe4n",description:"Login button"})})})]})},se=a(37);function ce(){return null}var ie=function(e){var t=null;t="https://jv-quiztool.herokuapp.com";var a=Object(s.useContext)(p),i=Object(s.useState)([]),r=Object(u.a)(i,2),j=(r[0],r[1],Object(s.useState)(!1)),b=Object(u.a)(j,2),h=(b[0],b[1],Object(s.useReducer)((function(e,t){switch(t.type){case"INIT_DATA":return t.data;default:throw new Error}}),[])),m=Object(u.a)(h,2),x=(m[0],m[1],Object(s.useState)(null)),g=Object(u.a)(x,2),y=g[0],v=g[1],w=Object(s.useState)(!1),k=Object(u.a)(w,2),S=k[0],q=k[1];function C(e){return Object(n.jsx)(f.a,Object(o.a)(Object(o.a)({},e),{},{children:Object(n.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})}))}return Object(s.useEffect)((function(){v(localStorage.getItem("token")),q(null!==y)}),[y,S]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(l.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{children:[Object(n.jsx)(O.a,{component:l.b,to:"/",children:Object(n.jsx)(C,{color:"action"})}),S?Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(O.a,{component:l.b,to:"/tentit",children:Object(n.jsx)(E.a,{id:"tentit.button",defaultMessage:"Tentit",description:"Navigation/exams button"})}),Object(n.jsx)(O.a,{onClick:function(){localStorage.removeItem("token"),v(null),q(!1)},component:l.b,to:"/",children:Object(n.jsx)(E.a,{id:"logout.button",defaultMessage:"Poistu",description:"Log out button"})})]}):Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(O.a,{component:l.b,to:"/login",children:Object(n.jsx)(E.a,{id:"login.button",defaultMessage:"Kirjaudu",description:"Navigation/login button"})}),Object(n.jsx)(O.a,{component:l.b,to:"/register",children:Object(n.jsx)(E.a,{id:"register.button",defaultMessage:"Rekister\xf6idy",description:"Navigation/register button"})})]}),Object(n.jsxs)("select",{className:"language-selector",value:a.locale,onChange:a.selectLanguage,children:[Object(n.jsx)("option",{value:"en-gb",children:"English"}),Object(n.jsx)("option",{default:!0,value:"fi",children:"suomi"}),Object(n.jsx)("option",{value:"vi",children:"Ti\u1ebfng Vi\u1ec7t"})]}),Object(n.jsx)("text",{className:"date-time",children:Object(n.jsx)(se.a,{value:e.date,year:"numeric",month:"numeric",day:"numeric",weekday:"long"})})]}),Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/register",children:Object(n.jsx)(ae,{host:t})}),Object(n.jsx)(d.a,{path:"/login",children:Object(n.jsx)(ne,{host:t,userLoggedIn:S,onChange:function(){q(!0)}})}),Object(n.jsx)(d.a,{path:"/tentit",children:Object(n.jsx)(ee,{host:t})}),Object(n.jsx)(d.a,{path:"/",children:Object(n.jsx)(ce,{})})]})]})})})};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{children:Object(n.jsx)(ie,{date:Date.now()})})}),document.getElementById("root"))},74:function(e){e.exports=JSON.parse('{"tentit.button":"Tentit","login.button":"Kirjaudu","register.button":"Rekister\xf6idy","logout.button":"Poistu","firstName":"Etunimi","surName":"Sukunimi","email":"S\xe4hk\xf6posti","password":"Salasana","admin":"Opettajan salasana","question":"Kysymys","add-answer":"Lis\xe4\xe4 vastaus","add-question":"Lis\xe4\xe4 kysymys","answer":"Vastaus","exam-changed":"Tentin nime\xe4 muokattu","question-changed":"Kysymyst\xe4 muokattu","answer-changed":"Vastausta muokattu","new-exam":"Lis\xe4tty uusi tentti","new-question":"Lis\xe4tty uusi kysymys","new-answer":"Lis\xe4tty uusi vastaus","delete-exam":"Poista tentti","delete-question":"Poista kysymys","delete-answer":"Poista vastaus","delete-exam-text":"Haluatko varmasti poistaa tentin?","delete-question-text":"Haluatko varmasti poistaa kysymyksen?","delete-answer-text":"Poista kysymys?","delete-warning":"Huomio! Toimintoa ei voi peruuttaa!","exam-deleted":"Tentti poistettu","question-deleted":"Kysymys poistettu","answer-deleted":"Vastaus poistettu","new-exam-title":"Kirjoita uuden tentin nimi","alert-confirm":"Poista","alert-cancel":"Peruuta"}')},75:function(e){e.exports=JSON.parse('{"tentit.button":"K\u1ef3 thi","login.button":"\u0110\u0103ng nh\xe2\u0323p","register.button":"\u0110\u0103ng k\xfd","logout.button":"\u0110\u0103ng xu\u1ea5t","firstName":"T\xean \u0111\u1ea7u ti\xean","surName":"H\u1ecd","email":"email","password":"m\u1eadt kh\u1ea9u","admin":"H\u1ed3 Ch\xed Minh?","question":"C\xe2u ch\xe2\u0341t v\xe2\u0341n","add-answer":"Th\xeam c\xe2u tr\u1ea3 l\u1eddi","add-question":"Th\xeam c\xe2u h\u1ecfi","answer":"C\xe2u tr\u1ea3 l\u1eddi","exam-changed":"T\xean b\xe0i ki\u1ec3m tra \u0111\xe3 thay \u0111\u1ed5i","question-changed":"C\xe2u h\u1ecfi \u0111\xe3 thay \u0111\u1ed5i","answer-changed":"C\xe2u tr\u1ea3 l\u1eddi \u0111\xe3 thay \u0111\u1ed5i","new-exam":"B\xe0i ki\u1ec3m tra m\u1edbi \u0111\xe3 \u0111\u01b0\u1ee3c th\xeam v\xe0o","new-question":"\u0110\xe3 th\xeam c\xe2u h\u1ecfi m\u1edbi","new-answer":"\u0110\xe3 th\xeam c\xe2u tr\u1ea3 l\u1eddi m\u1edbi","delete-exam":"X\xf3a b\xe0i ki\u1ec3m tra","delete-question":"X\xf3a c\xe2u h\u1ecfi","delete-answer":"X\xf3a c\xe2u tr\u1ea3 l\u1eddi","exam-deleted":"\u0110\xe3 x\xf3a b\xe0i ki\u1ec3m tra","question-deleted":"\u0110\xe3 x\xf3a c\xe2u h\u1ecfi","answer-deleted":"\u0110\xe3 x\xf3a c\xe2u tr\u1ea3 l\u1eddi","delete-exam-text":"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a b\xe0i ki\u1ec3m tra n\xe0y kh\xf4ng?","delete-question-text":"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a c\xe2u h\u1ecfi n\xe0y kh\xf4ng?","delete-answer-text":"X\xf3a c\xe2u tr\u1ea3 l\u1eddi?","delete-warning":"C\u1ea3nh b\xe1o thao t\xe1c n\xe0y l\xe0 v\u0129nh vi\u1ec5n!","new-exam-title":"Nh\u1eadp t\xean b\xe0i ki\u1ec3m tra m\u1edbi","alert-confirm":"X\xe1c nh\u1eadn","alert-cancel":"H\u1ee7y"}')},97:function(e){e.exports=JSON.parse('{"tentit.button":"Exams","login.button":"Login","register.button":"Register","logout.button":"Log out","firstName":"First name","surName":"Last name","email":"email","password":"Password","admin":"Teacher password","question":"Question","add-answer":"Add answer","add-question":"Add question","answer":"Answer","exam-changed":"Exam name changed","question-changed":"Question changed","answer-changed":"Answer changed","new-exam":"New exam created","new-question":"New question added","new-answer":"New answer added","delete-exam":"Delete exam","delete-question":"Delete question","delete-answer":"Delete answer","delete-exam-text":"Are you sure you want to delete this exam?","delete-question-text":"Are you sure you want to delete this question?","delete-answer-text":"Delete answer?","delete-warning":"Warning this operation is permanent!","exam-deleted":"Exam deleted","question-deleted":"Question deleted","answer-deleted":"Answer deleted","new-exam-title":"Type new exam name","alert-confirm":"Confirm","alert-cancel":"Cancel"}')}},[[163,1,2]]]);
//# sourceMappingURL=main.98a38d04.chunk.js.map