(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{dgmN:function(e,t,n){"use strict";n.r(t),n.d(t,"PagesModule",(function(){return h}));var o=n("aceb"),r=n("vTDv"),a=n("tyNb");const c=[{title:"Dashboard",icon:"home-outline",link:"/pages/dashboard",home:!0},{title:"ADMIN",group:!0},{title:"Employees",icon:"people-outline",link:"/pages/employees",home:!0},{title:"Benefits",icon:"gift-outline",link:"/pages/benefits",home:!0},{title:"Discounts",icon:"people-outline",link:"/pages/discounts",home:!0}];var i=n("fXoL"),b=n("mgFL");let l=(()=>{class e{constructor(){this.menu=c}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Hb({type:e,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(i.Tb(0,"ngx-one-column-layout"),i.Ob(1,"nb-menu",0),i.Ob(2,"router-outlet"),i.Sb()),2&e&&(i.Bb(1),i.ic("items",t.menu))},directives:[b.a,o.I,a.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*, .nb-theme-material-dark   [_nghost-%COMP%]     router-outlet+*, .nb-theme-material-light   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),e})(),s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Hb({type:e,selectors:[["ngx-dashboard"]],decls:14,vars:0,template:function(e,t){1&e&&(i.Tb(0,"nb-card"),i.Tb(1,"nb-card-header"),i.zc(2," Dashboard Components "),i.Sb(),i.Tb(3,"nb-card-body"),i.Tb(4,"nb-card"),i.Tb(5,"nb-card-header"),i.zc(6," Card 1 "),i.Sb(),i.Tb(7,"nb-card-body"),i.zc(8," ........................ "),i.Sb(),i.Sb(),i.Tb(9,"nb-card"),i.Tb(10,"nb-card-header"),i.zc(11," Card 2 "),i.Sb(),i.Tb(12,"nb-card-body"),i.zc(13," ........................ "),i.Sb(),i.Sb(),i.Sb(),i.Sb())},directives:[o.l,o.m,o.k],styles:[""]}),e})();var d=n("FKr1");const u=[{path:"",component:l,children:[{path:"",loadChildren:()=>n.e(1).then(n.bind(null,"ZAeM")).then(e=>e.EmployeesModule)},{path:"dashboard",component:s},{path:"employees",loadChildren:()=>n.e(1).then(n.bind(null,"ZAeM")).then(e=>e.EmployeesModule)},{path:"**",component:(()=>{class e{constructor(e){this.menuService=e}goToHome(){this.menuService.navigateHome()}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(o.K))},e.\u0275cmp=i.Hb({type:e,selectors:[["ngx-not-found"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"flex-centered","col-xl-4","col-lg-6","col-md-8","col-sm-12"],[1,"title"],[1,"sub-title"],["nbButton","","matRipple","","fullWidth","","type","button",1,"home-button",3,"click"]],template:function(e,t){1&e&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"nb-card"),i.Tb(3,"nb-card-body"),i.Tb(4,"div",2),i.Tb(5,"h2",3),i.zc(6,"404 Page Not Found"),i.Sb(),i.Tb(7,"small",4),i.zc(8,"The page you were looking for doesn't exist"),i.Sb(),i.Tb(9,"button",5),i.ac("click",(function(){return t.goToHome()})),i.zc(10," Take me home "),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb())},directives:[o.l,o.k,o.i,d.b],styles:[".flex-centered[_ngcontent-%COMP%]{margin:auto}nb-card-body[_ngcontent-%COMP%]{display:flex}.sub-title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{text-align:center}.sub-title[_ngcontent-%COMP%]{display:block;margin-bottom:3rem}.home-button[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),e})()}]}];let m=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[a.g.forChild(u)],a.g]}),e})();var p=n("3Pt+");let h=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[m,r.a,o.J,o.n,o.x,o.z,o.j,o.X,p.e]]}),e})()}}]);