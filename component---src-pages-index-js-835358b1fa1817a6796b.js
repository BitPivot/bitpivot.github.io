(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(141),u=n(145);function l(e){var t=e.children;return a.a.createElement(c.ThemeProvider,{theme:u.b},a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,null),t))}l.propTypes={children:i.node.isRequired};var s=n(146),d=n(149),f=n.n(d),m=n(144);function p(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,o=e.title;return a.a.createElement(m.StaticQuery,{query:v,render:function(e){var c=t||e.site.siteMetadata.description;return a.a.createElement(f.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:s})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired};var h=p,v="1025518380",g=n(143),y=n.n(g);function w(){var e=y()(["\n  color: #666;\n  font-size: 1.5rem;\n  flex: 0 0 auto;\n  line-height: 1.3;\n  margin: 2rem 0 0;\n"]);return w=function(){return e},e}function b(){var e=y()(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n"]);return b=function(){return e},e}var E=c.default.section(b()),x=c.default.div(w());function z(){var e=y()(["\n  width: 250px;\n\n  .cls-1 {\n    fill: #222;\n  }\n\n  .cls-2 {\n    fill: #111;\n  }\n"]);return z=function(){return e},e}var q=function(e){return a.a.createElement("svg",e,a.a.createElement("path",{className:"cls-1",d:"M0 0h531v144H0z"}),a.a.createElement("path",{className:"cls-2",d:"M79.2 83.6c0 5.5-4 6.8-8.6 6.8H57.7V77.1h13.8c5.2 0 7.7 2.3 7.7 6.5zm-2.4-25.7c0-3.6-3-4.9-7.5-4.9H57.7v10.8h11.6c4.6 0 7.5-1.3 7.5-5.9zM251.59 76c-.6-6.48-5.61-6.42-11-5.92l-9.76.9 1.33 14.44 8.46-.78c5.69-.58 11.63-1.52 10.97-8.64zm158.89-23.83c-5.58.52-13.81 5-12.35 20.83s10.36 18.73 15.94 18.21 13.8-5 12.34-20.82-10.36-18.73-15.93-18.22zM513 44.94V126H235.91l-2.18-23.7 12.94-1.2c16.34-1.5 27.14-10.63 25.56-27.86-.94-10.16-9-23.67-28.33-21.89l-36.65 3.37 6.57 71.28H18V18h495v8.56l-62 5.71 1.7 18.23 19.91-1.84 4.87 52.88 21.91-2-4.87-52.88zM101.2 85.7c0-10.5-6-15.6-12.4-17.8 5.3-2.9 8.8-6.8 8.8-14S93.6 36 74.8 36H35.69v71.4H76.2c12.6 0 25-7.4 25-21.7zM131.8 36h-22v71.4h22zm70 0h-62v18.3h20v53.1h22V54.3h20zm104 81.36l-6.55-71.1-21.91 2 6.55 71.1zm65.25-77.71l-22.5 2.07-7.49 44.17h-.19l-15.62-42.04-22.11 2L330.9 115l24.5-2.26zm77.26 28.73c-2-21.71-17.87-35.91-39.48-33.92S374.22 53.3 376.22 75s17.87 35.92 39.48 33.93 34.62-18.85 32.62-40.56z"}))};q.defaultProps={"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 531 144"};var P=Object(c.default)(q)(z());function k(){return a.a.createElement(l,null,a.a.createElement(h,{title:"Home",keywords:["bitpivot"]}),a.a.createElement(E,null,a.a.createElement(P,null),a.a.createElement(x,null,a.a.createElement("p",null,"BitPivot is currently dormant."),a.a.createElement("p",null,"Follow ",a.a.createElement("a",{href:"https://www.twitter.com/BitPivot"},"@bitpivot")," for updates."))))}n.d(t,"default",function(){return k})},142:function(e,t,n){var r;e.exports=(r=n(147))&&r.default||r},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return p}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(140),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(142),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=a.a.createContext({}),m=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var r=n(143),a=n.n(r),i=n(141),o=n(148),c=n.n(o);function u(){var e=a()(["\n  ","\n\n  html {\n    box-sizing: border-box;\n    font-size: 10px;\n    height: 100vh;\n  }\n\n  *, *:after, *:before {\n    box-sizing: inherit;\n  }\n\n  body {\n    background: #111;\n    color: #aaa;\n    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;\n    font-size: 1.5rem;\n    height: 100vh;\n    margin: 0;\n  }\n\n  a {\n    color: #999;\n    text-decoration: underline;\n  }\n"]);return u=function(){return e},e}var l=Object(i.createGlobalStyle)(u(),c.a),s={}},146:function(e){e.exports={data:{site:{siteMetadata:{title:"BitPivot",description:"BitPivot",author:"@bitpivot"}}}}},147:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(54),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-835358b1fa1817a6796b.js.map