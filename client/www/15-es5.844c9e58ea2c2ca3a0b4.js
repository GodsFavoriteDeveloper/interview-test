(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{TQOq:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var i=u("pMnS"),t=u("s7LF"),b=u("MKJQ"),a=u("sZkV"),r=u("SVse"),s=u("sUQ5");class d{constructor(l,n,u){this.moviesService=l,this.router=n,this.activatedRoute=u}ngOnInit(){this.activatedRoute.paramMap.subscribe(l=>{console.log(l),this.movieId=+l.get("movieId"),this.moviesService.getMovie(this.movieId).subscribe(l=>{this.movie=l,console.log(l)},l=>{console.log(l)})})}updateMovie(l){this.moviesService.updateMovie(this.movieId,l.value.title,l.value.plot,l.value.genre).subscribe(l=>{console.log(l)},l=>{console.log(l)})}}var c=u("iInd"),g=e.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,67,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,i=l.component;return"submit"===n&&(o=!1!==e.Ab(l,2).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Ab(l,2).onReset()&&o),"submit"===n&&(o=!1!==i.updateMovie(e.Ab(l,2))&&o),o}),null,null)),e.ob(1,16384,null,0,t.m,[],null,null),e.ob(2,4210688,[["movieForm",4]],0,t.h,[[8,null],[8,null]],null,null),e.Cb(2048,null,t.a,null,[t.h]),e.ob(4,16384,null,0,t.g,[[4,t.a]],null,null),(l()(),e.pb(5,0,null,null,13,"ion-item",[],null,null,null,b.O,b.p)),e.ob(6,49152,null,0,a.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.P,b.q)),e.ob(8,49152,null,0,a.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Enter Title"])),(l()(),e.pb(10,0,null,0,8,"ion-input",[["name","title"],["required",""],["title",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ab(l,13)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ab(l,13)._handleInputEvent(u.target)&&o),o}),b.N,b.o)),e.ob(11,16384,null,0,t.j,[],{required:[0,"required"]},null),e.Cb(1024,null,t.c,(function(l){return[l]}),[t.j]),e.ob(13,16384,null,0,a.Hb,[e.k],null,null),e.Cb(1024,null,t.d,(function(l){return[l]}),[a.Hb]),e.ob(15,671744,[["titleInput",4]],0,t.i,[[2,t.a],[6,t.c],[8,null],[6,t.d]],{name:[0,"name"],model:[1,"model"]},null),e.Cb(2048,null,t.e,null,[t.i]),e.ob(17,16384,null,0,t.f,[[4,t.e]],null,null),e.ob(18,49152,null,0,a.E,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.pb(19,0,null,null,13,"ion-item",[],null,null,null,b.O,b.p)),e.ob(20,49152,null,0,a.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(21,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.P,b.q)),e.ob(22,49152,null,0,a.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Enter Plot"])),(l()(),e.pb(24,0,null,0,8,"ion-textarea",[["name","plot"],["ngModel",""],["plot",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ab(l,27)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ab(l,27)._handleInputEvent(u.target)&&o),o}),b.V,b.w)),e.ob(25,16384,null,0,t.j,[],{required:[0,"required"]},null),e.Cb(1024,null,t.c,(function(l){return[l]}),[t.j]),e.ob(27,16384,null,0,a.Hb,[e.k],null,null),e.Cb(1024,null,t.d,(function(l){return[l]}),[a.Hb]),e.ob(29,671744,[["plotInput",4]],0,t.i,[[2,t.a],[6,t.c],[8,null],[6,t.d]],{name:[0,"name"],model:[1,"model"]},null),e.Cb(2048,null,t.e,null,[t.i]),e.ob(31,16384,null,0,t.f,[[4,t.e]],null,null),e.ob(32,49152,null,0,a.tb,[e.h,e.k,e.x],{name:[0,"name"],required:[1,"required"]},null),(l()(),e.pb(33,0,null,null,31,"ion-item",[],null,null,null,b.O,b.p)),e.ob(34,49152,null,0,a.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(35,0,null,0,2,"ion-label",[],null,null,null,b.P,b.q)),e.ob(36,49152,null,0,a.L,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["Genre"])),(l()(),e.pb(38,0,null,0,26,"ion-select",[["cancelText","Dismiss"],["genre",""],["name","genre"],["ngModel",""],["okText","Okay"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Ab(l,41)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Ab(l,41)._handleChangeEvent(u.target)&&o),o}),b.T,b.t)),e.ob(39,16384,null,0,t.j,[],{required:[0,"required"]},null),e.Cb(1024,null,t.c,(function(l){return[l]}),[t.j]),e.ob(41,16384,null,0,a.Gb,[e.k],null,null),e.Cb(1024,null,t.d,(function(l){return[l]}),[a.Gb]),e.ob(43,671744,[["genreInput",4]],0,t.i,[[2,t.a],[6,t.c],[8,null],[6,t.d]],{name:[0,"name"],model:[1,"model"]},null),e.Cb(2048,null,t.e,null,[t.i]),e.ob(45,16384,null,0,t.f,[[4,t.e]],null,null),e.ob(46,49152,null,0,a.ib,[e.h,e.k,e.x],{cancelText:[0,"cancelText"],name:[1,"name"],okText:[2,"okText"]},null),(l()(),e.pb(47,0,null,0,2,"ion-select-option",[["value","comedy"]],null,null,null,b.S,b.u)),e.ob(48,49152,null,0,a.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Fb(-1,0,["Comedy"])),(l()(),e.pb(50,0,null,0,2,"ion-select-option",[["value","action"]],null,null,null,b.S,b.u)),e.ob(51,49152,null,0,a.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Fb(-1,0,["Action"])),(l()(),e.pb(53,0,null,0,2,"ion-select-option",[["value","drama"]],null,null,null,b.S,b.u)),e.ob(54,49152,null,0,a.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Fb(-1,0,["Drama"])),(l()(),e.pb(56,0,null,0,2,"ion-select-option",[["value","animation"]],null,null,null,b.S,b.u)),e.ob(57,49152,null,0,a.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Fb(-1,0,["Animation"])),(l()(),e.pb(59,0,null,0,2,"ion-select-option",[["value","romance"]],null,null,null,b.S,b.u)),e.ob(60,49152,null,0,a.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Fb(-1,0,["Romance"])),(l()(),e.pb(62,0,null,0,2,"ion-select-option",[["value","cartoon"]],null,null,null,b.S,b.u)),e.ob(63,49152,null,0,a.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Fb(-1,0,["Cartoon"])),(l()(),e.pb(65,0,null,null,2,"ion-button",[["color","primary"],["expand","block"],["type","submit"]],null,null,null,b.B,b.c)),e.ob(66,49152,null,0,a.i,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Fb(-1,0,["Update Movie"]))],(function(l,n){var u=n.component;l(n,8,0,"floating"),l(n,11,0,""),l(n,15,0,"title",null==u.movie?null:u.movie.title),l(n,18,0,"title","","text"),l(n,22,0,"floating"),l(n,25,0,""),l(n,29,0,"plot",null==u.movie?null:u.movie.plot),l(n,32,0,"plot",""),l(n,39,0,""),l(n,43,0,"genre",null==u.movie?null:u.movie.genre),l(n,46,0,"Dismiss","genre","Okay"),l(n,48,0,"comedy"),l(n,51,0,"action"),l(n,54,0,"drama"),l(n,57,0,"animation"),l(n,60,0,"romance"),l(n,63,0,"cartoon"),l(n,66,0,"primary","block","submit")}),(function(l,n){l(n,0,0,e.Ab(n,4).ngClassUntouched,e.Ab(n,4).ngClassTouched,e.Ab(n,4).ngClassPristine,e.Ab(n,4).ngClassDirty,e.Ab(n,4).ngClassValid,e.Ab(n,4).ngClassInvalid,e.Ab(n,4).ngClassPending),l(n,10,0,e.Ab(n,11).required?"":null,e.Ab(n,17).ngClassUntouched,e.Ab(n,17).ngClassTouched,e.Ab(n,17).ngClassPristine,e.Ab(n,17).ngClassDirty,e.Ab(n,17).ngClassValid,e.Ab(n,17).ngClassInvalid,e.Ab(n,17).ngClassPending),l(n,24,0,e.Ab(n,25).required?"":null,e.Ab(n,31).ngClassUntouched,e.Ab(n,31).ngClassTouched,e.Ab(n,31).ngClassPristine,e.Ab(n,31).ngClassDirty,e.Ab(n,31).ngClassValid,e.Ab(n,31).ngClassInvalid,e.Ab(n,31).ngClassPending),l(n,38,0,e.Ab(n,39).required?"":null,e.Ab(n,45).ngClassUntouched,e.Ab(n,45).ngClassTouched,e.Ab(n,45).ngClassPristine,e.Ab(n,45).ngClassDirty,e.Ab(n,45).ngClassValid,e.Ab(n,45).ngClassInvalid,e.Ab(n,45).ngClassPending)}))}function v(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,11,"ion-header",[],null,null,null,b.L,b.m)),e.ob(1,49152,null,0,a.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.X,b.y)),e.ob(3,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.C,b.d)),e.ob(5,49152,null,0,a.j,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["color","primary"],["defaultHref","/"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==e.Ab(l,8).onClick(u)&&o),o}),b.A,b.b)),e.ob(7,49152,null,0,a.e,[e.h,e.k,e.x],{color:[0,"color"],defaultHref:[1,"defaultHref"]},null),e.ob(8,16384,null,0,a.f,[[2,a.db],a.Cb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,b.W,b.x)),e.ob(10,49152,null,0,a.vb,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["Edit Movie"])),(l()(),e.pb(12,0,null,null,3,"ion-content",[],null,null,null,b.I,b.j)),e.ob(13,49152,null,0,a.s,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,p)),e.ob(15,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"primary","/"),l(n,8,0,"/"),l(n,15,0,u.movie)}),null)}var m=e.lb("app-edit-movie",d,(function(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"app-edit-movie",[],null,null,null,v,g)),e.ob(1,114688,null,0,d,[s.a,c.m,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class h{}u.d(n,"EditMoviePageModuleNgFactory",(function(){return C}));var C=e.mb(o,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[i.a,m]],[3,e.j],e.v]),e.yb(4608,r.k,r.j,[e.s,[2,r.q]]),e.yb(4608,t.l,t.l,[]),e.yb(4608,a.a,a.a,[e.x,e.g]),e.yb(4608,a.Bb,a.Bb,[a.a,e.j,e.p]),e.yb(4608,a.Eb,a.Eb,[a.a,e.j,e.p]),e.yb(1073742336,r.b,r.b,[]),e.yb(1073742336,t.k,t.k,[]),e.yb(1073742336,t.b,t.b,[]),e.yb(1073742336,a.zb,a.zb,[]),e.yb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),e.yb(1073742336,h,h,[]),e.yb(1073742336,o,o,[]),e.yb(1024,c.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);