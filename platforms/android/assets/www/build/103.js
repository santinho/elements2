webpackJsonp([103],{877:function(t,n,e){"use strict";function a(t){return u._22(0,[(t()(),u._0(0,0,null,null,12,"div",[["background-size",""],["class","tab-6"]],null,null,null,null,null)),u.Z(1,278528,null,0,y.m,[u.q,u.j,u.B],{ngStyle:[0,"ngStyle"]},null),u._16(2,{"background-image":0}),(t()(),u._20(-1,null,["\n        "])),(t()(),u._0(4,0,null,null,7,"div",[["class","tab-decription"],["padding",""]],null,null,null,null,null)),(t()(),u._20(-1,null,["\n            "])),(t()(),u._0(6,0,null,null,1,"h2",[["tabs-title",""],["text-center",""]],null,null,null,null,null)),(t()(),u._20(7,null,["",""])),(t()(),u._20(-1,null,["\n            "])),(t()(),u._0(9,0,null,null,1,"p",[["tabs-subtitle",""],["text-center",""]],null,null,null,null,null)),(t()(),u._20(10,null,["",""])),(t()(),u._20(-1,null,["\n        "])),(t()(),u._20(-1,null,["\n    "]))],function(t,n){t(n,1,0,t(n,2,0,"url("+n.component.params.backgroundImage+")"))},function(t,n){var e=n.component;t(n,7,0,e.params.title);t(n,10,0,e.params.description)})}function l(t){return u._22(0,[(t()(),u._20(-1,null,["\n"])),(t()(),u._0(1,0,null,null,5,"ion-content",[["class","content-background-images"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,v.b,v.a)),u.Z(2,4374528,null,0,I.a,[F.a,x.a,k.a,u.j,u.A,T.a,S.a,u.u,[2,E.a],[2,j.a]],null,null),(t()(),u._20(-1,1,["\n    "])),(t()(),u.V(16777216,null,1,1,null,a)),u.Z(5,16384,null,0,y.j,[u.J,u.G],{ngIf:[0,"ngIf"]},null),(t()(),u._20(-1,1,["\n"])),(t()(),u._20(-1,null,["\n"]))],function(t,n){t(n,5,0,null!=n.component.params)},function(t,n){t(n,1,0,u._14(n,2).statusbarPadding,u._14(n,2)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var u=e(2),r=(e(0),e(65),e(430)),i=e(894),s=function(){function t(t){var n=this;this.tabsService=t,this.params={},this.tabsService.load("tab6").subscribe(function(t){n.params=t})}return t.prototype.ngOnChanges=function(t){this.params=t.data.currentValue},t.prototype.onItemClick=function(t){"localhost"===window.location.hostname?console.log("Folow"):r.e.show("Folow","1000","bottom").subscribe(function(t){})},t}(),o=function(){return function(){}}(),c=e(418),m=e(419),g=e(420),d=e(421),p=e(422),h=e(423),b=e(424),f=e(425),_=e(426),y=e(20),v=e(215),I=e(35),F=e(4),x=e(7),k=e(15),T=e(14),S=e(39),E=e(8),j=e(33),w=e(58),D=e(91),L=u.Y({encapsulation:2,styles:[],data:{}}),A=u.W("ng-component",s,function(t){return u._22(0,[(t()(),u._0(0,0,null,null,2,"ng-component",[],null,null,null,l,L)),u._17(512,null,i.a,i.a,[w.a,D.a]),u.Z(2,573440,null,0,s,[i.a],null,null)],null,null)},{},{},[]),C=e(25),P=e(216),Z=e(66);e.d(n,"TabPage6ModuleNgFactory",function(){return B});var B=u.X(o,[],function(t){return u._11([u._12(512,u.i,u.T,[[8,[c.a,m.a,g.a,d.a,p.a,h.a,b.a,f.a,_.a,A]],[3,u.i],u.s]),u._12(4608,y.l,y.k,[u.r,[2,y.t]]),u._12(4608,C.n,C.n,[]),u._12(4608,C.c,C.c,[]),u._12(512,y.c,y.c,[]),u._12(512,C.m,C.m,[]),u._12(512,C.d,C.d,[]),u._12(512,C.k,C.k,[]),u._12(512,P.a,P.a,[]),u._12(512,P.b,P.b,[]),u._12(512,o,o,[]),u._12(256,Z.a,s,[])])})},894:function(t,n,e){"use strict";e.d(n,"a",function(){return u});e(0);var a=e(1),l=(e.n(a),e(92)),u=(e(91),function(){function t(t,n){var e=this;this.af=t,this.loadingService=n,this.getId=function(){return"tabs"},this.getTitle=function(){return"Tabs"},this.getAllThemes=function(){return[{title:"Footer tab - text",theme:"layout1"},{title:"Footer tab - icons",theme:"layout2"},{title:"Header tab - text",theme:"layout3"}]},this.getDataForTheme=function(t){return e["getDataFor"+t.charAt(0).toUpperCase()+t.slice(1)]()},this.getDataForTab1=function(){return{backgroundImage:"assets/images/avatar-large/5.jpg",title:"Fragment Example 1",description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}},this.getDataForTab2=function(){return{backgroundImage:"assets/images/avatar-large/6.jpg",title:"Fragment Example 2",description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}},this.getDataForTab3=function(){return{backgroundImage:"assets/images/avatar-large/7.jpg",title:"Fragment Example 3",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}},this.getDataForTab4=function(){return{backgroundImage:"assets/images/avatar-large/5.jpg",title:"Fragment Example 4",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}},this.getDataForTab5=function(){return{backgroundImage:"assets/images/avatar-large/6.jpg",title:"Fragment Example 5",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's."}},this.getDataForTab6=function(){return{backgroundImage:"assets/images/avatar-large/7.jpg",title:"Fragment Example 6",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}},this.getEventsForTheme=function(t){return{}},this.getShowItemId=function(t){return e.getId()+t.theme.charAt(0).toUpperCase()+""+t.theme.slice(1)},this.prepareParams=function(t){var n={title:t.title,data:[],events:e.getEventsForTheme(t)};return n[e.getShowItemId(t)]=!0,n}}return t.prototype.load=function(t){var n=this,e=this;return e.loadingService.show(),new a.Observable(l.a.IS_FIREBASE_ENABLED?function(a){n.af.object("tab/"+t).valueChanges().subscribe(function(t){e.loadingService.hide(),a.next(t),a.complete()},function(t){e.loadingService.hide(),a.error([]),a.complete()})}:function(a){e.loadingService.hide(),a.next(n.getDataForTheme(t)),a.complete()})},t}())}});