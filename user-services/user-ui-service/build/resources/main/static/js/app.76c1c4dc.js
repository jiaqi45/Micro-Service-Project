(function(){"use strict";var e={3214:function(e,t,s){var r=s(9242),l=s(3396);function n(e,t,s,r,n,a){const i=(0,l.up)("home-page");return(0,l.wg)(),(0,l.j4)(i)}var a=s(65);const i={userList:[],selectedUser:null,creatingUser:null,processing:!1,error:null},o={isUserSelected(e){return null!==e.selectedUser},isCreatingUser(e){return null!==e.creatingUser},selectedUserId:e=>null!=e.selectedUser?e.selectedUser.id:null,isProcessing(e){return e.processing},hasError(e){return null!==e.error}};var c;function d(e,t){return e.id==t.id&&(e.name==t.name&&e.email==t.email)}function u(e){return 0==e.name?.length?c.invalideName:0==e.email?.length?c.invalideEmail:c.none}function g(e){const t={};return t.id=e.id,t.name=e.name,t.email=e.email,t}function m(e,t){return e.id=t.id,e.name=t.name,e.email=t.email,e}(function(e){e[e["none"]=0]="none",e[e["invalideName"]=1]="invalideName",e[e["invalideEmail"]=2]="invalideEmail"})(c||(c={}));const v={id:null,name:"",email:""};var U;(function(e){e["updateUserList"]="UPDATE_USER_LIST",e["toggleUserSelection"]="TOGGLE_USER_SELECTION",e["toggleUserCreation"]="TOGGLE_USER_CREATION",e["toggleProcessing"]="TOGGLE_PROCESS",e["toggleError"]="TOGGLE_ERROR",e["updateUser"]="UPDATE_USER",e["removeUser"]="REMOVE_USER"})(U||(U={}));const p={[U.updateUserList](e,t){e.userList=t},[U.toggleUserSelection](e,t){e.creatingUser=null,null==e.selectedUser?e.selectedUser=t:e.selectedUser.id==t?.id?e.selectedUser=null:e.selectedUser=t},[U.toggleUserCreation](e,t){t?(e.creatingUser=g(v),e.selectedUser=null):e.creatingUser=null},[U.toggleProcessing](e,t){e.processing=t},[U.toggleError](e,t){e.error=t},[U.updateUser](e,t){e.userList.forEach((e=>{e.id===t.id&&m(e,t)}))},[U.removeUser](e,t){let s=-1;const r=e.userList.find(((e,r)=>e?.id==t&&(s=r,!0)));void 0!==r&&(null!=e.selectedUser&&e.selectedUser.id==t&&(e.selectedUser=null),e.userList.splice(s,1))}};var b=s(6265),_=s.n(b),f=s(4329);const E={en:s(2007)},w=(0,f.o)({locale:"en",fallbackLocale:"en",messages:E});var h;(function(e){e["setupLocale"]="SETUP_LOCALE",e["loadUsers"]="LOAD_USERS",e["createUser"]="CREATE_USER",e["readUser"]="READ_USER",e["updateUser"]="UPDATE_USER",e["deleteUser"]="DELETE_USER"})(h||(h={}));const y={async[h.setupLocale](e,t){if("en"!=t)try{const e=await _().get(`/locale/${t}`);w.global.setLocaleMessage(t,e.data),"legacy"===w.mode?w.global.locale=t:w.global.locale.value=t}catch(s){}},async[h.loadUsers](e){e.commit(U.toggleProcessing,!0);try{const t=await _().get("/user");e.commit(U.updateUserList,t.data)}catch(t){e.commit(U.toggleError,t)}e.commit(U.toggleUserSelection,null),e.commit(U.toggleUserCreation,!1),e.commit(U.toggleProcessing,!1)},async[h.createUser](e){e.commit(U.toggleProcessing,!0);try{const t=await _().post("/user",e.state.creatingUser),s=t.data;e.state.userList.push(s),e.commit(U.toggleUserSelection,s)}catch(t){e.commit(U.toggleError,t)}e.commit(U.toggleProcessing,!1)},async[h.readUser](e,t){e.commit(U.toggleProcessing,!0);try{const s=await _().get(`/user/${t}`);e.commit(U.updateUser,s.data)}catch(s){e.commit(U.toggleError,s)}e.commit(U.toggleProcessing,!1)},async[h.updateUser](e,t){e.commit(U.toggleProcessing,!0);try{const s=await _().put("/user",t.user);e.commit(U.updateUser,s.data),t.callback(!0,null)}catch(s){e.commit(U.toggleError,s),t.callback(!1,s)}e.commit(U.toggleProcessing,!1)},async[h.deleteUser](e,t){e.commit(U.toggleProcessing,!0);try{await _()["delete"](`/user/${t}`),e.commit(U.removeUser,t)}catch(s){e.commit(U.toggleError,s)}e.commit(U.toggleProcessing,!1)}},C=Symbol(),P=(0,a.MT)({state:i,getters:o,mutations:p,actions:y});function S(e,t,s,r,n,a){const i=(0,l.up)("user-list"),o=(0,l.up)("user-create"),c=(0,l.up)("user-edit"),d=(0,l.up)("user-error");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(i),(0,l.Wm)(o),(0,l.Wm)(c),(0,l.Wm)(d)],64)}var L=s(7139);const k={class:"row container mt-4 ml-4"},R={class:"card"},x=(0,l._)("h5",{class:"card-header"},"User List",-1),z={class:"card-body"},O={class:"table table-striped table-hover"},$={scope:"col"},D={scope:"col"},N={scope:"col"},I=["onClick"],T={class:"row mt-3"},A={class:"d-flex justify-content-end"},F={div:"",class:"btn-group",role:"group"},H=["disabled"];function Z(e,t,s,r,n,a){return(0,l.wg)(),(0,l.iD)("div",k,[(0,l._)("div",null,[(0,l._)("div",R,[x,(0,l._)("div",z,[(0,l._)("table",O,[(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",$,[(0,l._)("span",null,(0,L.zw)(e.$t("Identifier")),1)]),(0,l._)("th",D,[(0,l._)("span",null,(0,L.zw)(e.$t("Name")),1)]),(0,l._)("th",N,[(0,l._)("span",null,(0,L.zw)(e.$t("Email")),1)])])]),(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.userList,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id,onClick:s=>e.userSelected(t)},[(0,l._)("td",null,[(0,l._)("span",null,(0,L.zw)(t.id),1)]),(0,l._)("td",null,[(0,l._)("span",null,(0,L.zw)(t.name),1)]),(0,l._)("td",null,[(0,l._)("span",null,(0,L.zw)(t.email),1)])],8,I)))),128))])]),(0,l._)("div",T,[(0,l._)("div",A,[(0,l._)("div",F,[(0,l._)("button",{class:"btn btn-success",onClick:t[0]||(t[0]=(...t)=>e.addUser&&e.addUser(...t)),disabled:!(!e.userCreating&&!e.isProcessing)||null},(0,L.zw)(e.$t("Add")),9,H),(0,l._)("button",{class:"btn btn-primary",onClick:t[1]||(t[1]=(...t)=>e.getUserList&&e.getUserList(...t))},(0,L.zw)(e.$t("Reload")),1)])])])])])])])}var j=(0,l.aZ)({setup(){const e=(0,a.oR)(C),t=(0,l.Fl)((()=>e.state.userList)),s=()=>{e.dispatch(h.loadUsers)},r=()=>{e.commit(U.toggleUserCreation,!0)},n=t=>{e.commit(U.toggleUserSelection,t)},i=(0,l.Fl)((()=>e.getters.isCreatingUser)),o=(0,l.Fl)((()=>e.getters.isProcessing));return(0,l.bv)(s),{userList:t,getUserList:s,userCreating:i,addUser:r,userSelected:n,isProcessing:o}}}),G=s(89);const M=(0,G.Z)(j,[["render",Z]]);var V=M;const Y={key:0,class:"row container mt-4 ml-4"},W={class:"card"},q={class:"card-header"},J={class:"card-body"},K={class:"row mt-3"},B={for:"NewUserName",class:"col-sm-4 col-form-label rounded bg-secondary text-white text-right"},Q={class:"col"},X={class:"row mt-3"},ee={for:"NewUserEmail",class:"col-sm-4 col-form-label rounded bg-secondary text-white text-right"},te={class:"col"},se={class:"row mt-3"},re={class:"d-flex justify-content-end"},le={class:"btn-toolbar",role:"toolbar"},ne={class:"btn-group",role:"group"},ae=["disabled"],ie=["disabled"];function oe(e,t,s,n,a,i){return e.userCreating?((0,l.wg)(),(0,l.iD)("div",Y,[(0,l._)("div",null,[(0,l._)("div",W,[(0,l._)("h5",q,(0,L.zw)(e.$t("Create User")),1),(0,l._)("div",J,[(0,l._)("div",K,[(0,l._)("div",B,[(0,l._)("label",null,(0,L.zw)(e.$t("Name")),1)]),(0,l._)("div",Q,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"NewUserName",placeholder:"Choose a name for user","onUpdate:modelValue":t[0]||(t[0]=t=>e.user.name=t)},null,512),[[r.nr,e.user.name]])])]),(0,l._)("div",X,[(0,l._)("div",ee,[(0,l._)("label",null,(0,L.zw)(e.$t("Email")),1)]),(0,l._)("div",te,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"NewUserEmail",placeholder:"Specify email of the user","onUpdate:modelValue":t[1]||(t[1]=t=>e.user.email=t)},null,512),[[r.nr,e.user.email]])])]),(0,l._)("div",se,[(0,l._)("div",re,[(0,l._)("div",le,[(0,l._)("div",ne,[(0,l._)("button",{class:"btn btn-primary",onClick:t[2]||(t[2]=(...t)=>e.saveEditting&&e.saveEditting(...t)),disabled:!(!e.isProcessing&&e.canSaveEditting)||null},(0,L.zw)(e.$t("Save")),9,ae),(0,l._)("button",{class:"btn btn-secondary",onClick:t[3]||(t[3]=(...t)=>e.cancelEditting&&e.cancelEditting(...t)),disabled:!!e.isProcessing||null},(0,L.zw)(e.$t("Cancel")),9,ie)])])])])])])])])):(0,l.kq)("",!0)}var ce=(0,l.aZ)({setup(){const e=(0,a.oR)(C),t=(0,l.Fl)((()=>e.getters.isCreatingUser)),s=(0,l.Fl)((()=>e.state.creatingUser??v)),r=(0,l.Fl)((()=>null!=e.state.creatingUser&&u(e.state.creatingUser)==c.none)),n=()=>{e.getters.isCreatingUser&&e.dispatch(h.createUser)},i=()=>{e.commit(U.toggleUserCreation,!1)},o=(0,l.Fl)((()=>e.getters.isProcessing));return{userCreating:t,user:s,canSaveEditting:r,saveEditting:n,cancelEditting:i,isProcessing:o}}});const de=(0,G.Z)(ce,[["render",oe]]);var ue=de;const ge={key:0,class:"row container mt-4 ml-4"},me={class:"card"},ve={class:"card-header"},Ue={class:"card-body"},pe={class:"row mt-3"},be={for:"UserID",class:"col-sm-4 col-form-label rounded bg-secondary text-white text-right"},_e={class:"col"},fe={class:"row mt-3"},Ee={for:"UserName",class:"col-sm-4 col-form-label rounded bg-secondary text-white text-right"},we={class:"col"},he=["readonly","disabled"],ye={class:"row mt-3"},Ce={for:"UserEmail",class:"col-sm-4 col-form-label rounded bg-secondary text-white text-right"},Pe={class:"col"},Se=["readonly","disabled"],Le={class:"row mt-3"},ke={class:"d-flex justify-content-end"},Re={class:"btn-toolbar",role:"toolbar"},xe={key:0,class:"btn-group",role:"group"},ze=["disabled"],Oe=["disabled"],$e={key:1,class:"btn-group",role:"group"},De=["disabled"],Ne=["disabled"];function Ie(e,t,s,n,a,i){return e.userSelected?((0,l.wg)(),(0,l.iD)("div",ge,[(0,l._)("div",null,[(0,l._)("div",me,[(0,l._)("h5",ve,(0,L.zw)(e.$t("Create User")),1),(0,l._)("div",Ue,[(0,l._)("div",pe,[(0,l._)("div",be,[(0,l._)("label",null,(0,L.zw)(e.$t("Identifier")),1)]),(0,l._)("div",_e,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",readonly:"",disabled:"",id:"UserID","onUpdate:modelValue":t[0]||(t[0]=t=>e.user.id=t)},null,512),[[r.nr,e.user.id]])])]),(0,l._)("div",fe,[(0,l._)("div",Ee,[(0,l._)("label",null,(0,L.zw)(e.$t("Name")),1)]),(0,l._)("div",we,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"UserName","onUpdate:modelValue":t[1]||(t[1]=t=>e.user.name=t),readonly:!e.editing||null,disabled:!e.editing||null},null,8,he),[[r.nr,e.user.name]])])]),(0,l._)("div",ye,[(0,l._)("div",Ce,[(0,l._)("label",null,(0,L.zw)(e.$t("Email")),1)]),(0,l._)("div",Pe,[(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"UserEmail","onUpdate:modelValue":t[2]||(t[2]=t=>e.user.email=t),readonly:!e.editing||null,disabled:!e.editing||null},null,8,Se),[[r.nr,e.user.email]])])]),(0,l._)("div",Le,[(0,l._)("div",ke,[(0,l._)("div",Re,[e.editing?((0,l.wg)(),(0,l.iD)("div",xe,[(0,l._)("button",{class:"btn btn-primary",onClick:t[3]||(t[3]=(...t)=>e.saveEditting&&e.saveEditting(...t)),disabled:!(!e.isProcessing&&e.userChanged&&e.canSaveEditting)||null},(0,L.zw)(e.$t("Save")),9,ze),(0,l._)("button",{class:"btn btn-secondary",onClick:t[4]||(t[4]=(...t)=>e.cancelEditting&&e.cancelEditting(...t)),disabled:!!e.isProcessing||null},(0,L.zw)(e.$t("Cancel")),9,Oe)])):((0,l.wg)(),(0,l.iD)("div",$e,[(0,l._)("button",{class:"btn btn-primary",onClick:t[5]||(t[5]=(...t)=>e.startEditting&&e.startEditting(...t)),disabled:!!e.isProcessing||null},(0,L.zw)(e.$t("Edit")),9,De),(0,l._)("button",{class:"btn btn-danger",onClick:t[6]||(t[6]=(...t)=>e.deleteUser&&e.deleteUser(...t)),disabled:!!e.isProcessing||null},(0,L.zw)(e.$t("Delete")),9,Ne)]))])])])])])])])):(0,l.kq)("",!0)}var Te=s(4870),Ae=(0,l.aZ)({setup(){const e=(0,a.oR)(C),t=(0,l.Fl)((()=>e.state.selectedUser??v)),s=(0,l.Fl)((()=>e.getters.isUserSelected)),r=(0,Te.iH)(!1),n=(0,Te.iH)(null),i=(0,Te.iH)(null),o=(0,l.Fl)((()=>null==n.value?null==e.state.selectedUser:!d(n.value,e.state.selectedUser))),p=()=>{r.value||(n.value=g(e.state.selectedUser)),r.value=!r.value},b=(0,l.Fl)((()=>u(e.state.selectedUser)==c.none)),_=()=>{if(!e.getters.isUserSelected)return;const t=e.state.selectedUser,s={user:t,callback:function(e){e&&(n.value=g(t),r.value=!r.value)}};e.dispatch(h.updateUser,s)},f=()=>{m(e.state.selectedUser,n.value),r.value=!r.value},E=()=>{e.dispatch(h.deleteUser,e.state.selectedUser.id)},w=(0,l.Fl)((()=>e.getters.isProcessing));return(0,l.YP)((()=>e.getters.isUserSelected),(function(){n.value=null,r.value=!1})),(0,l.YP)((()=>e.getters.selectedUserId),(function(t){const s=null!=n.value?n.value.id:null;null!=n.value&&e.commit(U.updateUser,n.value),t!==s&&(n.value=g(e.state.selectedUser),i.value=t,r.value=!1)})),{user:t,userSelected:s,editing:r,originalUser:n,userId:i,userChanged:o,startEditting:p,canSaveEditting:b,saveEditting:_,cancelEditting:f,deleteUser:E,isProcessing:w}}});const Fe=(0,G.Z)(Ae,[["render",Ie]]);var He=Fe;const Ze={class:"alert alert-danger",role:"alert"},je={class:"ml-3 mr-3"},Ge={class:"row"},Me={class:"row mt-3"};function Ve(e,t,s,r,n,a){return e.hasError?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"row container mt-4 ml-4",onMouseover:t[0]||(t[0]=t=>e.toggleAutoHidePaused(!0)),onMouseleave:t[1]||(t[1]=t=>e.toggleAutoHidePaused(!1))},[(0,l._)("div",Ze,[(0,l._)("div",je,[(0,l._)("div",Ge,[(0,l._)("span",null,[(0,l._)("b",null,(0,L.zw)(e.error.name),1)])]),(0,l._)("div",Me,[(0,l._)("span",null,(0,L.zw)(e.error.message),1)])])])],32)):(0,l.kq)("",!0)}const Ye=200,We=3e3;var qe=(0,l.aZ)({setup(){const e=(0,a.oR)(C),t=(0,l.Fl)((()=>e.getters.hasError)),s=(0,l.Fl)((()=>e.state.error)),r=(0,Te.iH)(0),n=(0,Te.iH)(0),i=(0,Te.iH)(!1),o=(0,Te.iH)(!1),c=e=>{o.value=e},d=function(){n.value=0,i.value=!1,o.value=!1,r.value=setInterval((function(){o.value||i.value||(n.value+=Ye),n.value>We&&(i.value=!0,clearInterval(r.value),e.commit(U.toggleError,null))}),Ye)},u=function(){i.value||(i.value=!0,clearInterval(r.value))};return(0,l.YP)((()=>e.getters.hasError),(function(e){e?d():u()})),{hasError:t,error:s,toggleAutoHidePaused:c}}});const Je=(0,G.Z)(qe,[["render",Ve]]);var Ke=Je,Be=(0,l.aZ)({name:"HomePage",components:{UserList:V,UserCreate:ue,UserEdit:He,UserError:Ke}});const Qe=(0,G.Z)(Be,[["render",S]]);var Xe=Qe,et=(0,l.aZ)({name:"App",components:{HomePage:Xe},setup(){const e=(0,a.oR)(C);return(0,l.bv)((()=>{e.dispatch(h.setupLocale,navigator.language)})),{}}});const tt=(0,G.Z)(et,[["render",n]]);var st=tt;(0,r.ri)(st).use(P,C).use(w).mount("#app")},2007:function(e){e.exports=JSON.parse('{"Identifier":"Identifier","Name":"Name","Email":"Email","Create User":"Create User","User Info":"User Info","Add":"Add","Save":"Save","Edit":"Edit","Delete":"Delete","Reload":"Reload","Cancel":"Cancel"}')}},t={};function s(r){var l=t[r];if(void 0!==l)return l.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,r,l,n){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],l=e[d][1],n=e[d][2];for(var i=!0,o=0;o<r.length;o++)(!1&n||a>=n)&&Object.keys(s.O).every((function(e){return s.O[e](r[o])}))?r.splice(o--,1):(i=!1,n<a&&(a=n));if(i){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,l,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var l,n,a=r[0],i=r[1],o=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)s.o(i,l)&&(s.m[l]=i[l]);if(o)var d=o(s)}for(t&&t(r);c<a.length;c++)n=a[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},r=self["webpackChunkuser_ui_frontend"]=self["webpackChunkuser_ui_frontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(3214)}));r=s.O(r)})();
//# sourceMappingURL=app.76c1c4dc.js.map