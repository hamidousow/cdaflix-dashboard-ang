import{a as x}from"./chunk-7HZ7RF36.js";import{a as M}from"./chunk-XKGJZN4A.js";import"./chunk-N2USPGYN.js";import{h as S}from"./chunk-4TINCANC.js";import{d as c,e as l,f as v,g as h,i as g,m as u,n as f,o as C}from"./chunk-DRVLGHJP.js";import{$ as p,$a as n,Ub as d,_a as e,ab as r,ba as m,jb as a,pb as s}from"./chunk-YEQ72UKM.js";var b=[{path:"",redirectTo:"yourflix",pathMatch:"full"},{path:"yourflix",loadComponent:()=>import("./chunk-R7JHJXZD.js")},{path:"login",loadComponent:()=>import("./chunk-F7T4XVWL.js")},{path:"movies",loadComponent:()=>import("./chunk-RQIPD5GM.js")},{path:"search",title:"search-page",loadComponent:()=>import("./chunk-PVVW3VIZ.js")},{path:"**",loadComponent:()=>import("./chunk-TLXFLBKN.js")}];var w={providers:[u(b,f(),C()),c(l([]))]};var R=(()=>{let o=class o{constructor(){this.title="cdaflix-dashboard",this.movieService=p(M),this.popularMovies$=this.movieService.popularMovies$,this.topRatedMovies$=this.movieService.topRatedMovies$,this.upcomingMovies$=this.movieService.upcomingMovies$}ngOnInit(){this.movieService.getPopularMovies(),this.movieService.getTopRatedMovies(),this.movieService.getUpcomingMovies()}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=m({type:o,selectors:[["app-root"]],inputs:{args:"args"},standalone:!0,features:[s],decls:6,vars:0,consts:[["id","main-content"],[1,"main-content"]],template:function(i,y){i&1&&(e(0,"main",0),r(1,"app-navigation"),e(2,"div",1),r(3,"router-outlet"),n()(),e(4,"footer"),a(5,"mon footer"),n())},dependencies:[d,g,v,S,x],styles:["#main-content[_ngcontent-%COMP%]{background-color:var(--clr-blue-night);min-height:100dvh;padding:var(--padding-desktop-page)}footer[_ngcontent-%COMP%]{background-color:var(--clr-blue-dark);height:300px;position:relative;bottom:0}@media screen and (min-width: 320px){#main-content[_ngcontent-%COMP%]{padding:var(--padding-mobile-page);padding-top:var(--nav-height)}}@media screen and (min-width: 992px){#main-content[_ngcontent-%COMP%]{padding:0 60px 60px;padding-top:var(--nav-height)}}"]});let t=o;return t})();h(R,w).catch(t=>console.error(t));
