"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{7961:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),u=r(7757),i=r.n(u),s=r(2791),c=r(7689),o=r(1087),p=r(3085),f=r(5310),l=r(26),d=r(184);t.default=function(){var e,t,r=(0,s.useState)(null),u=(0,a.Z)(r,2),v=u[0],h=u[1],m=(0,s.useState)(null),g=(0,a.Z)(m,2),w=g[0],_=g[1],k=(0,s.useState)(!1),x=(0,a.Z)(k,2),Z=x[0],b=x[1],y=(0,c.TH)(),j=(0,c.UO)().movieId;return(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,(0,p.zD)(j);case 4:t=e.sent,h(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),_(e.t0.message);case 11:return e.prev=11,b(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}null!==j&&function(){e.apply(this,arguments)}()}),[j]),(0,d.jsxs)(d.Fragment,{children:[w&&(0,d.jsx)("div",{children:"Try to reload the page"}),Z&&(0,d.jsx)(l.aN,{}),(0,d.jsx)(o.rU,{to:null!==(e=null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:f._.HOME,children:"Go back"}),v&&(0,d.jsx)(l.Zx,{detailedInfo:v})]})}},3085:function(e,t,r){r.d(t,{Gc:function(){return l},zD:function(){return f},Q_:function(){return p},jr:function(){return d},JS:function(){return o}});var n=r(5861),a=r(7757),u=r.n(a),i=r(1912),s=r(3145),c="7075a5d5708cc9d9db094f2ee386024f";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,n.Z)(u().mark((function e(){var t,r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:c},e.next=3,i.Z.get("/trending/movie/week",{params:t});case 3:return r=e.sent,n=r.data,a=n.results.map((function(e){return{id:e.id,title:e.title}})),e.abrupt("return",{results:a});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:c,language:"en-US",query:t},e.next=3,i.Z.get("/search/movie",{params:r});case 3:return n=e.sent,a=n.data,s=a.results.map((function(e){return{id:e.id,original_title:e.original_title}})),e.abrupt("return",{results:s});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,o,p,f,l,d,v,h;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:c},e.next=3,i.Z.get("/movie/".concat(t),{params:r});case 3:return n=e.sent,a=n.data,o=a.id,p=a.original_title,f=a.genres,l=a.overview,d=a.poster_path,v=a.release_date,h=a.vote_average,e.abrupt("return",{id:o,original_title:p,genres:f.length?(u=f,u.map((function(e){return e.name})).join(", ")):"Genres aren't given",overview:l,poster_path:d?"https://image.tmdb.org/t/p/w300"+d:s,release_date:new Date(v).getFullYear(),vote_average:Math.round(10*h)});case 7:case"end":return e.stop()}var u}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:c,language:"en-US"},e.next=3,i.Z.get("/movie/".concat(t,"/credits"),{params:r});case 3:return n=e.sent,a=n.data,s=a.cast,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n,a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:c,language:"en-US"},e.next=3,i.Z.get("/movie/".concat(t,"/reviews"),{params:r});case 3:return n=e.sent,a=n.data,s=a.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},3145:function(e,t,r){e.exports=r.p+"static/media/default-photo.eb1c36c5b3a5d7a9ad52.jpeg"}}]);
//# sourceMappingURL=961.e65c3537.chunk.js.map