(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[42],{161:function(t,c,n){"use strict";n.r(c);var a=n(49),e=n(46),i=n(11),o=n(94),s=n.n(o),l=n(2),r=n(54),u=n.n(r),d=n(99),b=n(117),f=n(19),O=void 0,j=function(t){var c=t.mapStatistic,n=t.setMapStatistic,o=Object(b.a)(),r=Object(e.a)(o,2),j=r[0],p=r[1].width,h=Object(l.useState)(!1),k=Object(e.a)(h,2),v=k[0],g=k[1],m=Object(l.useState)(0),x=Object(e.a)(m,2),S=x[0],w=x[1],y=i.k.indexOf(c)>=0,N=Object(d.useSpring)((function(){return{opacity:0,background:"".concat(i.z[c].color,"20"),transform:y?"translate3d(".concat(p*i.k.indexOf(c)/i.k.length,"px, 0, 0)"):null,width:"calc(".concat(100/i.k.length,"%)"),config:d.config.gentle}})),z=Object(e.a)(N,2),C=z[0],J=z[1];Object(l.useEffect)((function(){if(p>0){var t=i.k.indexOf(c)>=0;u.a.unstable_batchedUpdates((function(){var n;J.start({transform:t?"translate3d(".concat(p*i.k.indexOf(c)/i.k.length,"px, 0, 0)"):null,opacity:t?1:0,background:t?"".concat(null===(n=i.z[c])||void 0===n?void 0:n.color,"20"):null,delay:0===S?1500:0,onStart:g.bind(O,!0),onRest:g.bind(O,!1)})}))}}),[S,c,J,p]);var M=Object(l.useCallback)((function(t){w((function(t){return t+1})),n(t)}),[n]);return Object(f.jsxs)("div",{className:"MapSwitcher",ref:j,children:[Object(f.jsx)(d.animated.div,{className:"highlight",style:C}),i.k.map((function(t,c){return Object(f.jsx)("div",{className:s()("clickable",Object(a.a)({},"is-".concat(t),!v)),onClick:M.bind(O,t),style:{width:"calc(".concat(100/i.k.length,"%)")}},c)}))]})},p=function(t,c){return t.mapStatistic===c.mapStatistic};c.default=Object(l.memo)(j,p)}}]);
//# sourceMappingURL=42.3db636e3.chunk.js.map