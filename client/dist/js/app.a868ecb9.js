(function(t){function e(e){for(var a,n,l=e[0],r=e[1],c=e[2],d=0,m=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&m.push(o[n][0]),o[n]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,l=1;l<s.length;l++){var r=s[l];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},o={app:0},i=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";s("85ec")},"03cd":function(t,e,s){},"1a12":function(t,e,s){},"1f2d":function(t,e,s){"use strict";s("ac59")},"2ea5":function(t,e,s){"use strict";s("3eb5")},"2f21":function(t,e,s){"use strict";s("62e2")},3729:function(t,e,s){t.exports=s.p+"img/collab.9d3f9c7c.png"},"3eb5":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Navbar"),s("router-view"),s("Footer")],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{"fixed-top":"",type:"is-success","mobile-burger-false":""},scopedSlots:t._u([{key:"brand",fn:function(){return[a("b-navbar-item",[a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:s("3729"),alt:"Brand Logo"}})])])]},proxy:!0},{key:"start",fn:function(){return t._l(t.navItems,(function(e,s){return a("b-navbar-item",{key:s,attrs:{href:"#"}},[a("a",{staticClass:"nav-links",attrs:{href:e.link}},[t._v(" "+t._s(e.name))])])}))},proxy:!0},{key:"end",fn:function(){return[t.signedIn()?a("b-navbar-item",{attrs:{tag:"div"}},[a("div",{staticClass:"buttons"},[a("button",{staticClass:"button is-primary",on:{click:t.logout}},[a("strong",[t._v(" Logout")])])])]):a("b-navbar-item",{attrs:{tag:"div"}},[a("div",{staticClass:"buttons"},t._l(t.navButtons,(function(e,s){return a("a",{key:s,class:e.type},[a("strong",[a("router-link",{staticClass:"xyz",attrs:{to:e.link}},[t._v(" "+t._s(e.name))])],1)])})),0)])]},proxy:!0}])})},l=[],r={template:"<Navbar/>",name:"Navbar",data:function(){return{isRounded:!1,isOutlined:!1,lightMode:!1,isAuthentictaed:localStorage.getItem("isAuthentictaed"),navItems:[{name:"Home",link:"/#home"},{name:"About",link:"/#about"},{name:"Developers",link:"/#teams"}],navButtons:[{name:"Login",link:"/login",type:"button is-primary"},{name:"SingUp",link:"/singup",type:"button is-light"}]}},methods:{change:function(){},logout:function(){localStorage.removeItem("token"),localStorage.setItem("isAuthentictaed",!1),this.$router.push("login")},signedIn:function(){return"true"===localStorage.getItem("isAuthentictaed")}}},c=r,u=(s("5dfc"),s("2877")),d=Object(u["a"])(c,n,l,!1,null,null,null),m=d.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("footer",{staticClass:"footer"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"},[s("Contact")],1),s("div",{staticClass:"column is-one-third"},[s("Info")],1)])])])},f=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"box is-large"},[s("h1",{staticClass:"title"},[t._v("Some Info")]),s("article",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:t.image,alt:"Image"}})])]),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",[t._v(t._s(t.name))]),s("br"),s("a",{attrs:{href:t.mailLink}},[t._v(t._s(t.email))]),s("br"),t._v(" "+t._s(t.description)+". ")])])])])])])},b=[],g={name:"Info",data:function(){return{name:"Collab Playback",email:"vuecollabplay@gmail.com",mailLink:"mailto:vuecollabplay@gmail.com",image:s("3729"),socials:[{name:"Twitter",icon:"fab fa-twitter",link:"https://twitter.com"},{name:"Instagram",icon:"fab fa-instagram",link:"https://instagram.com"}],description:"So glad to see you scrolled till down I hope you will enjoy this product and have fun with your freind's"}}},v=g,_=Object(u["a"])(v,h,b,!1,null,null,null),C=_.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("h1",{staticClass:"title"},[t._v("Contact Us")]),s("section",[s("form",{attrs:{method:"post","data-netlify":"true"}},[s("b-field",{attrs:{label:"Name"}},[s("b-input",t._b({attrs:{placeholder:"eg.Jhon Doe"}},"b-input",t.name,!1))],1),s("b-field",{attrs:{label:"Email"}},[s("b-input",t._b({attrs:{placeholder:"eg.jhon@mail.com",type:"Email"}},"b-input",t.email,!1))],1),s("b-field",{attrs:{label:"Message"}},[s("b-input",t._b({attrs:{maxlength:"200",type:"textarea"}},"b-input",t.message,!1))],1),s("button",{staticClass:"button is-success",attrs:{type:"submit"}},[t._v("Send")])],1)])])},k=[],w={name:"Contact",data:function(){return{name:"",email:"",message:""}}},x=w,R=Object(u["a"])(x,y,k,!1,null,null,null),I=R.exports,j={name:"Footer",components:{Info:C,Contact:I}},M=j,A=(s("787e"),Object(u["a"])(M,p,f,!1,null,"4b7c9ddc",null)),$=A.exports,S={name:"App",components:{Navbar:m,Footer:$}},O=S,L=(s("034f"),Object(u["a"])(O,o,i,!1,null,null,null)),E=L.exports,P=s("289d"),N=(s("5abe"),s("8c4f")),z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Landing"),s("About"),s("Team")],1)},T=[],U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"about"}},[s("hr"),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("section",{staticClass:"hero is-medium"},[s("div",{staticClass:"hero-body"},[s("img",{attrs:{src:t.imageUrl,alt:"About Image"}})])])]),s("div",{staticClass:"column"},[s("section",{staticClass:"hero is-medium"},[s("div",{staticClass:"hero-body"},[s("h1",{staticClass:"title is-size-2"},[t._v(t._s(t.title))]),s("hr"),s("p",{staticClass:"subtitle is-size-4"},[t._v(t._s(t.description))]),s("div",{staticClass:"content"},[s("ul",t._l(t.steps,(function(e){return s("li",{key:e,staticClass:"title is-5"},[t._v(" "+t._s(e)+" ")])})),0)])])])])])])},D=[],J={name:"About",data:function(){return{title:"How to use",description:"",cta:"Be the part",steps:["Singup(If dosen't have an account)","Login (If you have an account)","# You will land to admin page","Create Room by putting romm name and only youtube video id or Join Room by putting room id","Delete room if you dont want it anymore only if you are the creator of that room"],ctaLink:"",ctaType:"button is-success is-outlined is-medium",imageUrl:s("79a0")}}},V=J,q=(s("ae04"),Object(u["a"])(V,U,D,!1,null,"0a2cd1c4",null)),B=q.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box",attrs:{id:"teams"}},[s("hr",{attrs:{color:"#fc0000",width:"100%",height:"100%"}}),s("h1",{staticClass:"title is-2 has-text-centered"},[t._v("Developers")]),s("div",{staticClass:"columns"},t._l(t.teams,(function(e,a){return s("div",{key:a,staticClass:"column is-one-third"},[s("div",{staticClass:"box"},[s("article",{staticClass:"media"},[s("div",{staticClass:"media-left"}),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",[t._v(t._s(e.name))]),s("br"),t._v(" "+t._s(e.designation)+". ")])]),s("nav",{staticClass:"level is-mobile"},[s("div",{staticClass:"level-left"},[e.github?s("a",{staticClass:"level-item",attrs:{href:e.github}},[s("span",{staticClass:"icon is-medium"},[s("b-icon",{attrs:{pack:"fab",icon:"fab fa-github",size:"is-medium"}})],1)]):t._e(),e.instagram?s("a",{staticClass:"level-item",attrs:{href:e.instagram}},[s("span",{staticClass:"icon is-small"},[s("b-icon",{attrs:{pack:"fab",icon:"fab fa-instagram",size:"is-medium"}})],1)]):t._e(),e.twitter?s("a",{staticClass:"level-item",attrs:{href:e.twitter}},[s("span",{staticClass:"icon is-medium"},[s("b-icon",{attrs:{pack:"fab",icon:"fab fa-twitter",size:"is-medium"}})],1)]):t._e(),e.facebook?s("a",{staticClass:"level-item",attrs:{href:e.facebook}},[s("span",{staticClass:"icon is-medium"},[s("b-icon",{attrs:{pack:"fab",icon:"fab fa-facebook",size:"is-medium"}})],1)]):t._e(),e.website?s("a",{staticClass:"level-item",attrs:{href:e.website}},[s("span",{staticClass:"icon is-medium"},[s("b-icon",{attrs:{pack:"fa",icon:"fab fa-globe",size:"is-medium"}})],1)]):t._e()])])])])])])})),0)])},W=[],H={name:"Teams",data:function(){return{teams:[{name:"Tazim Rahbar",designation:"Founder/Creator",description:"",github:"https://github.com/tazim404",instagram:"https://instgram.com/tazim_rahbar",twitter:"https://twitter.com/tazim_rahbar",facebook:"",website:"https://tazim.netlify.app"},{name:"?",designation:"?",github:"?",instagram:"?",twitter:"?",facebook:"?",website:"?"}]}}},Y=H,G=(s("1f2d"),Object(u["a"])(Y,F,W,!1,null,"e3260472",null)),K=G.exports,Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("div",{staticClass:"columns is-gapless"},[s("div",{staticClass:"column"},[s("section",{staticClass:"hero is-medium"},[s("div",{staticClass:"hero-body"},[s("h1",{staticClass:"title is-size-2"},[t._v(t._s(t.title))]),s("p",{staticClass:"subtitle is-size-4"},[t._v(t._s(t.description))]),s("router-link",{attrs:{to:t.ctaLink}},[s("button",{class:t.ctaType},[t._v(t._s(t.cta))])])],1)])]),s("div",{staticClass:"column"},[s("section",{staticClass:"hero is-medium"},[s("div",{staticClass:"hero-body"},[s("img",{attrs:{src:t.imageUrl,alt:"Main Page Image",srcset:""}})])])])])])},X=[],Z={name:"Landing",data:function(){return{title:"Collab Play",description:"Welcome to collab paly.A place where you can collaboratively watch youtube videos. The suggested number of people in the room is 2 but you can go with more users also. If you want to know how to use this product please scroll down a little bit and you will find a walkthrough",cta:"Be the part",ctaLink:"admin",ctaType:"button is-success is-outlined is-medium",imageUrl:s("86e6")}}},tt=Z,et=(s("db2d"),Object(u["a"])(tt,Q,X,!1,null,"453887c9",null)),st=et.exports,at={name:"Main",components:{About:B,Team:K,Landing:st}},ot=at,it=Object(u["a"])(ot,z,T,!1,null,"04e1fa63",null),nt=it.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showAlert?s("Alert",{attrs:{msg:t.msg}}):t._e(),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"}),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"hero is-medium"},[s("div",{staticClass:"hero-body"},[s("h1",{staticClass:"title has-text-centered"},[t._v("Login")]),s("hr",{staticClass:"login-hr"}),s("p",{staticClass:"subtitle has-text-black has-text-centered"},[t._v(" Please login to proceed. ")]),s("b-field",{attrs:{label:"Username",type:"is-primary"}},[s("b-input",{attrs:{type:"text"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),s("b-field",{attrs:{label:"Password",type:"is-primary"}},[s("b-input",{attrs:{type:"password","aria-placeholder":"eg.Jhon@123","password-reveal":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("button",{staticClass:"button is-block is-success is-outlined is-large is-fullwidth",on:{click:function(e){return t.login()}}},[t._v(" Login ")])],1)])])])],1)},rt=[],ct=s("bc3a"),ut=s.n(ct),dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notification is-danger"},[s("button",{staticClass:"delete",on:{click:t.button_event}}),s("p",{staticClass:"title is-4"},[t._v(t._s(t.msg))])])},mt=[],pt={name:"Alert",props:["msg","button_event"]},ft=pt,ht=Object(u["a"])(ft,dt,mt,!1,null,null,null),bt=ht.exports,gt={name:"Login",components:{Alert:bt},data:function(){return{showAlert:!1,msg:"",formFields:[{name:"Username",style:"is-primary",type:"text",placeholder:"eg.Jhon Doe"},{name:"Password",style:"is-primary",type:"password",placeholder:"eg.Jhon@pass"}],username:"",password:""}},methods:{login:function(){var t=this,e="http://127.0.0.1:5000/login";ut.a.post(e,{username:this.username,password:this.password}).then((function(e){if(200===e.status){var s=e.data.token;localStorage.setItem("token",s),localStorage.setItem("isAuthentictaed",!0),t.$router.push("admin")}})).catch((function(e){console.log(e),t.showAlert=!0,t.msg="I think you have entered wrong credentials"}))}}},vt=gt,_t=(s("ba7f"),Object(u["a"])(vt,lt,rt,!1,null,"0eccf06f",null)),Ct=_t.exports,yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"}),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"hero is-medium"},[s("div",{staticClass:"hero-body"},[s("h1",{staticClass:"title has-text-centered"},[t._v("Singup")]),s("hr",{staticClass:"login-hr"}),s("p",{staticClass:"subtitle has-text-black has-text-centered"},[t._v(" Please singup to proceed. ")]),s("b-field",{attrs:{label:"Username",type:"is-primary"}},[s("b-input",{attrs:{type:"text",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),s("b-field",{attrs:{label:"Email",type:"is-primary"}},[s("b-input",{attrs:{type:"email","aria-placeholder":"eg.Jhon@mail.com","password-reveal":"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("b-field",{attrs:{label:"Password",type:"is-primary"}},[s("b-input",{attrs:{type:"password","aria-placeholder":"eg.Jhon@123","password-reveal":"",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("div",{staticClass:"block"},[s("b-radio",{attrs:{name:"name","native-value":"male"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v(" Male ")]),s("b-radio",{attrs:{name:"name","native-value":"female"},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[t._v(" Female ")])],1),s("button",{staticClass:"button is-block is-success is-outlined is-large is-fullwidth",on:{click:function(e){return t.singup()}}},[t._v(" Singup ")])],1)])])])])},kt=[],wt={name:"Login",data:function(){return{username:"",email:"",password:"",gender:"male"}},methods:{singup:function(){var t=this,e="http://127.0.0.1:5000/singup";ut.a.post(e,{username:this.username,password:this.password,email:this.email,gender:this.gender}).then((function(e){200==e.status&&t.$router.push("login")})).catch((function(t){console.log(t)}))}}},xt=wt,Rt=(s("9015"),Object(u["a"])(xt,yt,kt,!1,null,"5b33edfe",null)),It=Rt.exports,jt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showAlert?s("Alert",{attrs:{msg:t.msg}}):t._e(),s("div",{staticClass:"card"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-third"}),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"hero is-medium"},[s("div",{staticClass:"hero-body"},[s("h1",{staticClass:"title has-text-centered"},[t._v("Profile")]),s("hr",{staticClass:"login-hr"}),s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"box"},[s("figure",{staticClass:"avatar"},[s("img",{attrs:{src:t.profile.image}})])])]),s("div",{staticClass:"content"},[s("ul",[t._l(t.profile,(function(e,a,o){return s("li",{key:o,staticClass:"title is-5"},[t._v(" "+t._s(a)+" "),s("i",{staticClass:"arrow right"}),t._v(" "+t._s(e)+" ")])})),s("li",[t._v("Room id "),s("i",{staticClass:"arrow right"}),t._v(" "+t._s(t.join.roomId))])],2)]),s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"buttons are-medium"},[s("button",{staticClass:"button is-primary is-outlined",on:{click:function(e){t.joinRoomModal=!0}}},[t._v(" Join Room ")]),s("button",{staticClass:"button is-success is-outlined",on:{click:function(e){t.createRoomModal=!0}}},[t._v(" Create Room ")]),s("button",{staticClass:"button is-danger is-outlined",on:{click:function(e){t.deleteRoomModal=!0}}},[t._v(" Delete Room ")])])])])])])])]),s("b-modal",{model:{value:t.createRoomModal,callback:function(e){t.createRoomModal=e},expression:"createRoomModal"}},[s("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Create Room")]),s("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.createRoomModal=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{label:"Room Name"}},[s("b-input",{attrs:{type:"text",placeholder:"Room Name",required:""},model:{value:t.create.roomName,callback:function(e){t.$set(t.create,"roomName",e)},expression:"create.roomName"}})],1),s("b-field",{attrs:{label:"Video Link"}},[s("b-input",{attrs:{type:"text",placeholder:"Video Link",required:""},model:{value:t.create.videoLink,callback:function(e){t.$set(t.create,"videoLink",e)},expression:"create.videoLink"}})],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("b-button",{attrs:{label:"Create",type:"is-success",outlined:""},on:{click:t.createRoom}}),s("b-button",{attrs:{label:"Cancel",type:"is-danger",outlined:""},on:{click:function(e){t.createRoomModal=!1}}})],1)])]),s("b-modal",{model:{value:t.joinRoomModal,callback:function(e){t.joinRoomModal=e},expression:"joinRoomModal"}},[s("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Join Room")]),s("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.joinRoomModal=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{label:"Room Id"}},[s("b-input",{attrs:{type:"text",placeholder:"Room ID",required:""},model:{value:t.join.roomId,callback:function(e){t.$set(t.join,"roomId",e)},expression:"join.roomId"}})],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("b-button",{attrs:{label:"Join",type:"is-success",outlined:""},on:{click:t.joinRoom}}),s("b-button",{attrs:{label:"Cancel",type:"is-danger",outlined:""},on:{click:function(e){t.joinRoomModal=!1}}})],1)])]),s("b-modal",{model:{value:t.deleteRoomModal,callback:function(e){t.deleteRoomModal=e},expression:"deleteRoomModal"}},[s("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Delete Room")]),s("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){t.deleteRoomModal=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("b-field",{attrs:{label:"Room Id"}},[s("b-input",{attrs:{type:"text",placeholder:"Room ID",required:""},model:{value:t.del.roomId,callback:function(e){t.$set(t.del,"roomId",e)},expression:"del.roomId"}})],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("b-button",{attrs:{label:"Delete",type:"is-success",outlined:""},on:{click:t.deleteRoom}}),s("b-button",{attrs:{label:"Cancel",type:"is-danger",outlined:""},on:{click:function(e){t.deleteRoomModal=!1}}})],1)])])],1)},Mt=[],At=(s("a15b"),{name:"Profile",components:{Alert:bt},data:function(){return{createRoomModal:!1,joinRoomModal:!1,deleteRoomModal:!1,showAlert:!1,create:{roomName:"",videoLink:""},join:{roomId:""},del:{roomId:""},profile:{username:"",email:"",gender:"",public_id:"",message:"We dont keep anything secret from user that's why we give every data about you.",image:""},msg:""}},methods:{createRoom:function(){var t=this,e="http://127.0.0.1:5000/create";ut.a.post(e,{room_name:this.create.roomName,video_link:this.create.videoLink},{headers:{"access-token":localStorage.getItem("token")}}).then((function(e){console.log(e),200==e.status&&(t.join.roomId=e.data.room_id,console.log(e.data.room_id),t.createRoomModal=!1,t.showAlert=!0,t.msg="Created Room now join to have fun")})).catch((function(t){console.log(t)}))},joinRoom:function(){this.$socket.client.emit("join",{username:this.profile.username,room:this.join.roomId}),sessionStorage.setItem("username",this.profile.username),this.$router.push({path:"/".concat(this.join.roomId)})},deleteRoom:function(){var t=this,e="http://127.0.0.1:5000/delete";ut.a.post(e,{room_id:this.del.roomId},{headers:{"access-token":localStorage.getItem("token")}}).then((function(e){console.log(e),200==e.status?(t.deleteRoomModal=!1,t.showAlert=!0,t.msg="Delted Room",t.$socket.client.emit("admin_deleted")):(t.showAlert=!0,t.msg="Cant deleted the room because you are not the creator of this room",t.deleteRoomModal=!1)})).catch((function(t){console.log(t)}))}},created:function(){var t=this,e="http://127.0.0.1:5000/admin";ut.a.get(e,{headers:{"access-token":localStorage.getItem("token")}}).then((function(e){console.log(e.data.message),t.profile.username=e.data.message.username,t.profile.email=e.data.message.email,t.profile.public_id=e.data.message.public_id,t.profile.image=e.data.message.image,t.profile.gender=e.data.message.gender})).catch((function(t){console.log(t)}))}}),$t=At,St=(s("f79c"),Object(u["a"])($t,jt,Mt,!1,null,"7f1ab369",null)),Ot=St.exports,Lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.showAlert?s("Alert",{attrs:{msg:t.msg,button_event:t.hideAlert}}):t._e(),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-four-fifths"}),s("div",{staticClass:"column"},[s("button",{staticClass:"button is-primary is-outlined",on:{click:t.leaveRoom}},[t._v(" Leave Room ")])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("youtube",{ref:"youtube",attrs:{"video-id":t.videoId},on:{playing:t.playing}})],1),s("div",{staticClass:"box"},[s("button",{staticClass:"button is-medium",on:{click:t.playVideo}},[t._v("Play")]),s("button",{staticClass:"button is-medium",on:{click:t.pauseVideo}},[t._v(" Pause ")])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("Chat")],1)])])],1)},Et=[],Pt=(s("1276"),s("ac1f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat"},[s("div",{staticClass:"messaging"},[t._l(t.notifications,(function(t,e){return s("Notification",{key:e,attrs:{msg:t}})})),t._l(t.messages,(function(t){return s("Message",{key:t.message,attrs:{msg:t.message,sender:t.sender}})}))],2),s("div",{staticClass:"field has-addons is-justify-content-center mb-2"},[s("div",{staticClass:"control is-expanded ml-1"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.message_to_send,expression:"message_to_send"}],staticClass:"input",attrs:{type:"text",placeholder:"Message"},domProps:{value:t.message_to_send},on:{input:function(e){e.target.composing||(t.message_to_send=e.target.value)}}})]),s("div",{staticClass:"control mr-1"},[s("button",{staticClass:"button is-info",on:{click:t.send}},[t._v("Send")])])])])}),Nt=[],zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-2 ml-1"},[s("div",{staticClass:"receive_message is-size-6 has-text-left"},[s("span",{staticClass:"user_name"},[t._v(t._s(t.sender))]),t._v(" "+t._s(t.msg)+" "),s("span",{staticClass:"time"},[t._v("9:48 PM")])])])},Tt=[],Ut={name:"Message",username:sessionStorage.getItem("username"),props:["msg","sender"],created:function(){this.username=sessionStorage.getItem("username")}},Dt=Ut,Jt=(s("9b3d"),Object(u["a"])(Dt,zt,Tt,!1,null,"2256b244",null)),Vt=Jt.exports,qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-2 ml-1"},[s("div",{staticClass:"send_message is-size-6 has-text-left"},[s("span",{staticClass:"user_name"},[t._v("Notification")]),t._v(" "+t._s(t.msg)+" "),s("span",{staticClass:"time"},[t._v("9:48 PM")])])])},Bt=[],Ft={name:"Notification",props:["msg"]},Wt=Ft,Ht=(s("2ea5"),Object(u["a"])(Wt,qt,Bt,!1,null,"448be37a",null)),Yt=Ht.exports,Gt={name:"Chat",components:{Message:Vt,Notification:Yt},data:function(){return{room_id:"",message_to_send:"",messages:[],notifications:["Welcome"]}},sockets:{incoming_message:function(t){console.log(t),this.messages.push({message:t.msg,sender:t.sender}),console.log(this.messages)},notification:function(t){console.log(t),this.notifications.push(t.message)}},methods:{send:function(){console.log(this.message_to_send),this.$socket.client.emit("msg",{sender:sessionStorage.getItem("username"),message:this.message_to_send,room:this.room_id}),this.message_to_send=""}},created:function(){var t=document.URL.split("/");this.room_id=t[t.length-1]}},Kt=Gt,Qt=(s("2f21"),Object(u["a"])(Kt,Pt,Nt,!1,null,"399c2721",null)),Xt=Qt.exports,Zt={name:"Collab",components:{Chat:Xt,Alert:bt},data:function(){return{videoId:"",id:"",URL:Object({NODE_ENV:"production",BASE_URL:"/"}).APP_URL,link:"",roomName:"",showAlert:!1,msg:""}},created:function(){var t=this,e=document.URL.split("/");this.id=e[e.length-1];var s="http://127.0.0.1:5000/".concat(this.id);ut.a.get(s).then((function(e){200==e.status?t.videoId=e.data.message.video_link:(t.showAlert=!0,t.msg="There is an error",console.log("There is an error"))})).catch((function(e){t.showAlert=!0,t.msg="I think room  id wrong go back and enter valid room id",console.log(e)}))},sockets:{user_played:function(){this.play()},user_paused:function(){this.pause()},admin_deleted_the_room:function(){this.$router.push("admin"),this.$socket.client.emit("ok",{room_id:this.id})},notification:function(){console.log("There is notification")}},methods:{pause:function(){this.player.pauseVideo()},play:function(){this.player.playVideo()},playVideo:function(){this.$socket.client.emit("play",{room:this.id})},pauseVideo:function(){this.$socket.client.emit("pause",{room:this.id})},hideAlert:function(){this.showAlert=!1},leaveRoom:function(){this.$socket.client.emit("leave",{room:this.id,username:sessionStorage.getItem("username")}),sessionStorage.removeItem("username"),this.$router.push("admin")}},computed:{player:function(){return this.$refs.youtube.player}}},te=Zt,ee=Object(u["a"])(te,Lt,Et,!1,null,null,null),se=ee.exports;function ae(t,e,s){var a=!1;console.log(t),console.log(e),a=!!localStorage.getItem("token"),a?s():s("/login")}a["a"].use(N["a"]);var oe=[{path:"/",name:"Main",component:nt},{path:"/login",name:"login",component:Ct},{path:"/singup",name:"singup",component:It},{path:"/admin",name:"admin",component:Ot,beforeEnter:ae},{path:"/tazim",name:"chatting",component:Xt},{path:"/:id",name:"chat",component:se,beforeEnter:ae}],ie=new N["a"]({routes:oe,mode:"history"}),ne=ie,le=s("e0ec"),re=s.n(le),ce=s("f87c"),ue=s("8e27"),de=s.n(ue),me=de()("http://127.0.0.1:5000");a["a"].use(ce["a"],me),a["a"].use(s("2ead")),a["a"].config.productionTip=!1,a["a"].use(P["a"]),a["a"].use(re.a),new a["a"]({router:ne,render:function(t){return t(E)}}).$mount("#app")},"5dfc":function(t,e,s){"use strict";s("1a12")},"5fcd":function(t,e,s){},"62e2":function(t,e,s){},"6c9d":function(t,e,s){},"787e":function(t,e,s){"use strict";s("dc91")},"79a0":function(t,e,s){t.exports=s.p+"img/about.c837e238.svg"},"81d7":function(t,e,s){},"85ec":function(t,e,s){},"86e6":function(t,e,s){t.exports=s.p+"img/home.fa1b60d2.svg"},9015:function(t,e,s){"use strict";s("5fcd")},"9b3d":function(t,e,s){"use strict";s("6c9d")},"9fbe":function(t,e,s){},ac59:function(t,e,s){},ae04:function(t,e,s){"use strict";s("e2d7")},ba7f:function(t,e,s){"use strict";s("81d7")},db2d:function(t,e,s){"use strict";s("03cd")},dc91:function(t,e,s){},e2d7:function(t,e,s){},f79c:function(t,e,s){"use strict";s("9fbe")}});
//# sourceMappingURL=app.a868ecb9.js.map