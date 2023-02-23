"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[686],{3686:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r,a,u=t(5861),i=t(9439),o=t(7757),c=t.n(o),s=t(2791),p=t(7689),f=t(3085),l=t(3550),d=t(168),h=t(6444),v=h.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n"])),(function(e){return e.theme.space[4]})),m=h.ZP.li(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ","px;\n  padding: ","px ","px;\n  transition: background-color ",",\n    color ",", border-radius ",";\n\n  &:hover {\n    background-color: ",";\n    color: ",";\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[4]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.transition}),(function(e){return e.theme.transition}),(function(e){return e.theme.transition}),(function(e){return e.theme.colors.backgroundColorHeader}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.radii.normal})),g=t(184),x=function(){var e=(0,s.useState)([]),n=(0,i.Z)(e,2),t=n[0],r=n[1],a=(0,s.useState)(null),o=(0,i.Z)(a,2),d=o[0],h=o[1],x=(0,s.useState)(!1),w=(0,i.Z)(x,2),k=w[0],_=w[1],b=(0,p.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,u.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,f.jr)(b);case 4:n=e.sent,r(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h(e.t0.message);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}null!==b&&function(){e.apply(this,arguments)}()}),[b]),(0,g.jsxs)(g.Fragment,{children:[d&&(0,g.jsx)("div",{children:"Try to reload the page"}),k&&(0,g.jsx)(l.aN,{}),t&&(0,g.jsx)(v,{children:t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,g.jsxs)(m,{children:[(0,g.jsxs)("h3",{children:["Author: ",t]}),(0,g.jsx)("p",{children:r})]},n)}))}),0===t.length&&(0,g.jsx)("div",{children:"There aren't any reviews for this movie."})]})}},3085:function(e,n,t){t.d(n,{Gc:function(){return l},zD:function(){return f},Q_:function(){return p},jr:function(){return d},JS:function(){return s}});var r=t(5861),a=t(7757),u=t.n(a),i=t(1912),o=t(3145),c="7075a5d5708cc9d9db094f2ee386024f";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(u().mark((function e(){var n,t,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:c},e.next=3,i.Z.get("/trending/movie/week",{params:n});case 3:return t=e.sent,r=t.data,a=r.results.map((function(e){return{id:e.id,title:e.title}})),e.abrupt("return",{results:a});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c,language:"en-US",query:n},e.next=3,i.Z.get("/search/movie",{params:t});case 3:return r=e.sent,a=r.data,o=a.results.map((function(e){return{id:e.id,original_title:e.original_title}})),e.abrupt("return",{results:o});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,s,p,f,l,d,h,v;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c},e.next=3,i.Z.get("/movie/".concat(n),{params:t});case 3:return r=e.sent,a=r.data,s=a.id,p=a.original_title,f=a.genres,l=a.overview,d=a.poster_path,h=a.release_date,v=a.vote_average,e.abrupt("return",{id:s,original_title:p,genres:f.length?(u=f,u.map((function(e){return e.name})).join(", ")):"Genres aren't given",overview:l,poster_path:d?"https://image.tmdb.org/t/p/w300"+d:o,release_date:new Date(h).getFullYear(),vote_average:Math.round(10*v)});case 7:case"end":return e.stop()}var u}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c,language:"en-US"},e.next=3,i.Z.get("/movie/".concat(n,"/credits"),{params:t});case 3:return r=e.sent,a=r.data,o=a.cast,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r,a,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c,language:"en-US"},e.next=3,i.Z.get("/movie/".concat(n,"/reviews"),{params:t});case 3:return r=e.sent,a=r.data,o=a.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},3145:function(e,n,t){e.exports=t.p+"static/media/default-photo.eb1c36c5b3a5d7a9ad52.jpeg"}}]);
//# sourceMappingURL=686.44dd8b37.chunk.js.map