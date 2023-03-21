"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{9278:function(t,e,r){r.r(e);var A=r(5861),a=r(9439),n=r(7757),o=r.n(n),i=r(2791),u=r(1087),s=r(3085),c=r(97),p=r(184);e.default=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),r=e[0],n=e[1],K=(0,i.useState)(null),g=(0,a.Z)(K,2),U=g[0],B=g[1],l=(0,i.useState)(!1),Q=(0,a.Z)(l,2),F=Q[0],R=Q[1],f=(0,u.lr)(),m=(0,a.Z)(f,2),C=m[0],w=m[1],h=C.get("query");(0,i.useEffect)((function(){function t(){return(t=(0,A.Z)(o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,R(!0),t.next=4,(0,s.Q_)(h);case 4:e=t.sent,r=e.results,n(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),B(t.t0.message);case 12:return t.prev=12,R(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}h&&function(){t.apply(this,arguments)}()}),[h]);return(0,p.jsxs)(p.Fragment,{children:[U&&(0,p.jsx)("div",{children:"Try to reload the page"}),F&&(0,p.jsx)(c.aN,{}),(0,p.jsx)(c.l0,{onSubmit:function(t){w({query:t})}}),Boolean(r.length)&&(0,p.jsx)(c.eW,{array:r})]})}},3085:function(t,e,r){r.d(e,{Gc:function(){return g},zD:function(){return K},Q_:function(){return p},jr:function(){return U},JS:function(){return c}});var A=r(5861),a=r(7757),n=r.n(a),o=r(1912),i=r(3145),u=r(9574),s="7075a5d5708cc9d9db094f2ee386024f";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var t=(0,A.Z)(n().mark((function t(){var e,r,A,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:s},t.next=3,o.Z.get("/trending/movie/week",{params:e});case 3:return r=t.sent,A=r.data,a=A.results.map((function(t){return{id:t.id,title:t.title}})),t.abrupt("return",{results:a});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,A.Z)(n().mark((function t(e){var r,A,a,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:s,language:"en-US",query:e},t.next=3,o.Z.get("/search/movie",{params:r});case 3:return A=t.sent,a=A.data,i=a.results.map((function(t){return{id:t.id,title:t.original_title}})),t.abrupt("return",{results:i});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(){var t=(0,A.Z)(n().mark((function t(e){var r,A,a,u,c,p,K,g,U,B;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:s},t.next=3,o.Z.get("/movie/".concat(e),{params:r});case 3:return A=t.sent,a=A.data,u=a.id,c=a.original_title,p=a.genres,K=a.overview,g=a.poster_path,U=a.release_date,B=a.vote_average,t.abrupt("return",{id:u,original_title:c,genres:p.length?(n=p,n.map((function(t){return t.name})).join(", ")):"Genres aren't given",overview:K,poster_path:g?"https://image.tmdb.org/t/p/w300"+g:i,release_date:new Date(U).getFullYear(),vote_average:Math.round(10*B)});case 7:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=(0,A.Z)(n().mark((function t(e){var r,A,a,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:s,language:"en-US"},t.next=3,o.Z.get("/movie/".concat(e,"/credits"),{params:r});case 3:return A=t.sent,a=A.data,i=a.cast.map((function(t){var e=t.id,r=t.original_name,A=t.profile_path,a=t.character;return{id:e,original_name:r,profile_path:A?"https://image.tmdb.org/t/p/w300"+A:u,character:a}})),t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),U=function(){var t=(0,A.Z)(n().mark((function t(e){var r,A,a,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:s,language:"en-US"},t.next=3,o.Z.get("/movie/".concat(e,"/reviews"),{params:r});case 3:return A=t.sent,a=A.data,i=a.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})),t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},3145:function(t,e,r){t.exports=r.p+"static/media/default-photo.eb1c36c5b3a5d7a9ad52.jpeg"},9574:function(t){t.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=278.fe6c7118.chunk.js.map