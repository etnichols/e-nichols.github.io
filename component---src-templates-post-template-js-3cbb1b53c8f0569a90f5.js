(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{158:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u}),a.d(t,"pageQuery",function(){return d});var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=a(179),c=a(169),s=a(170);function u(e){var t=e.data.markdownRemark,a=t.frontmatter,n=t.html,l=t.tableOfContents,i=t.timeToRead;return r.a.createElement(o.a,null,r.a.createElement("header",null,r.a.createElement("h1",{style:{marginBottom:Object(s.a)(.5),color:a.shadow}},a.title),r.a.createElement("hr",{style:{marginBottom:Object(s.a)(.5)}}),r.a.createElement("p",{style:{marginTop:0,paddingTop:0,display:"block",color:""+c.a.colors.light}},i+" min read • ",r.a.createElement(m,{post:t}))),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l},className:"toc"}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n},className:"post"}))}var m=function(e){var t,a=e.post;if(a.fields.tagSlugs){var n=a.fields.tagSlugs;t=n.map(function(e,t){var l=t<n.length-1&&r.a.createElement("span",null,", ");return r.a.createElement("span",{key:e},r.a.createElement(i.a,{to:e},a.frontmatter.tags[t]),l)})}return r.a.createElement("span",{style:{fontStyle:"normal",textAlign:"left"}},"tagged ",t)},d="3662921676"},169:function(e,t,a){"use strict";var n=a(175),r="291, 0%, 18%",l={black:"hsla("+r+",1)",text:"hsla("+r+",0.95)",light:"hsla("+r+",0.4)",calm:"hsla("+r+",0.2)",smoke:"hsla("+r+",0.1)",whiteSmoke:"hsla("+r+",0.02)",white:"#fff",link:"#03a9f4",linkHover:"#ff5252"};t.a={animations:{animationCurveFastOutSlowIn:"cubic-bezier(0.4, 0, 0.2, 1)",animationCurveLinearOutSlowIn:"cubic-bezier(0, 0, 0.2, 1)",animationCurveFastOutLinearIn:"cubic-bezier(0.4, 0, 1, 1)",animationCurveDefault:"cubic-bezier(0.4, 0, 0.2, 1)",animationSpeedDefault:"250ms",animationSpeedFast:"200ms",animationSpeedSlow:"300ms"},colors:l,container:Object(n.style)({maxWidth:"37rem",margin:"0 auto"})}},170:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(176),r=a.n(n),l=a(177),i=a.n(l),o=new r.a(i.a);var c=o.rhythm;o.scale},171:function(e){e.exports={data:{site:{siteMetadata:{title:"etnichols"}}}}},172:function(e,t,a){"use strict";a(77),a(57),a(36),a(174),a(76);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=a(15),c={posts:"/",projects:"/projects",about:"/about",resume:"/resume",contact:"/contact"};t.a=function(e){return r.a.createElement(o.Location,null,function(e){var t=e.location.pathname.split("/")[1];return Object.entries(c).map(function(e){var a=e[0],n=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"linkStyle",to:n},(function(e,t){return e===t||""===t&&"posts"===e}(a,t)?"•":"")+" "+a),r.a.createElement("br",null))})})}},179:function(e,t,a){"use strict";var n=a(171),r=a(0),l=a.n(r),i=a(1),o=a.n(i),c=a(56),s=a(7),u=a.n(s),m=a(172),d=(a(155),a(169)),p=a(170),f=function(e){var t=e.children;return l.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{padding:Object(p.a)(.75),maxWidth:"40rem",margin:"0 auto"}},l.a.createElement("main",null,l.a.createElement(u.a,{to:"/",css:{display:"inline-block"}},l.a.createElement("h1",{style:{color:d.a.colors.light,lineHeight:1,margin:0,paddingBottom:Object(p.a)(.25),paddingTop:Object(p.a)(.25)}},a)),l.a.createElement("hr",null),l.a.createElement(m.a,null),t),l.a.createElement("footer",null,l.a.createElement("div",{style:{color:d.a.colors.text,textAlign:"center"}},"© "+(new Date).getFullYear()+" "+a))))},data:n})};f.propTypes={children:o.a.node.isRequired},t.a=f}}]);
//# sourceMappingURL=component---src-templates-post-template-js-3cbb1b53c8f0569a90f5.js.map