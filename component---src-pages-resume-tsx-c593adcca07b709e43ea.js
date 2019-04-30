(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{168:function(e,t,a){"use strict";a.r(t);a(26),a(77),a(57),a(36);var n=a(0),r=a.n(n),i=a(173),o=[{title:"work",entries:[{title:"Software Engineer",company:"Google",duration:{start:"September 2017",end:"Present"},description:"Fullstack development work on Course Kit, a set of free tools that integrate with existing learning management systems (LMS) to help university professors create, collect and review coursework using Google Apps."},{title:"Engineering Resident",company:"Google",duration:{start:"July 2018",end:"July 2019"},description:"Completed one-year new program for recent CS/CoE grads aimed at rapidly developing software at scale. Projects included design and implementation of an algorithm for detecting outdated content produced from an NLG system (C++) and and an asynchornous longform audio transcription system using the Google Speech API."},{title:"RightSite",company:"University of Kansas Medical Center",duration:{start:"October 2016",end:"May 2017"},description:"Developed a React Native iOS application which allows users to interact with 38 different views of the human body, with the goal of improving biopsy labeling accuracy in a laboratory setting. See more at https://apple.co/2Uu5tUT."},{title:"Well Query Dashboard",company:"Astra Analytics",duration:{start:"September 2016",end:"February 2017"},description:"Created a map-based web application for searching well records by location and 30 different drilling metrics using React, Redux, Node.js/Express and MySQL."}]},{title:"languages/software",entries:[{description:["Javascript (React, Redux, React Native)","Node.js","Java","GraphQL (Gatsby, Prisma)","HTML/CSS","InDesign, Photoshop, Sketch"]}]},{title:"education",entries:[{company:"B.S., Computer Science",title:"University of Kansas",duration:{start:"Aug 2012",end:"May 2017"},description:"GPA: 3.67 / 4.00"}]},{title:"projects",entries:[{title:"overturemusical.com",linkify:"http://overturemusical.com",duration:{start:"March 2019",end:"Present"},description:"Marketing website for Overture - an original symphony about the Kansas City Philharmonic Orchestra during the 1953-1954 season."},{title:"nycmaps.surge.sh",linkify:"https://nyc-maps.surge.sh",duration:{start:"November 2017",end:"January 2018"},description:"Interactive maps of Manhattan's neighborhoods and the five boroughs. Created with Illustrator, React and D3. Note: Manhattan kind of looks like a hambone."},{title:"Digital Bookshelf",linkify:"https://github.com/e-nichols/digital-bookshelf",duration:{start:"August 2018",end:"February 2019"},description:"A poor man's GoodReads clone using React Native, Prisma and Node.js."}]}],s=a(169),l=(a(164),function(e){var t=e.data,a=t.slice(0,1),n=t.slice(1);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"resume."),r.a.createElement("div",{className:"resume"},r.a.createElement(c,{sections:a}),r.a.createElement(c,{sections:n})))}),c=function(e){var t=e.sections;return r.a.createElement("div",{className:"column"},t.map(function(e){return r.a.createElement(u,{key:"section-"+e.title,title:e.title,entries:e.entries})}))},u=function(e){var t=e.title,a=e.entries;return r.a.createElement("section",null,r.a.createElement("h2",{className:"section-title"},t),r.a.createElement("div",{className:"section-bar"}),a.map(function(e,a){return r.a.createElement(m,Object.assign({key:t+"-entry-"+a},e))}))},m=function(e){var t,a=e.title,n=e.linkify,i=e.company,o=e.duration,l=e.description;if(a&&o){var c=n?r.a.createElement("a",{href:n},a):a;t=r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"job-title"},c),i&&r.a.createElement("h4",{className:"job-title",style:{color:s.a.colors.light}},i),r.a.createElement("div",{className:"duration",style:{color:s.a.colors.text}},r.a.createElement("i",null,o.start+" - "+o.end)))}var u=Array.isArray(l)?r.a.createElement("ul",{className:"languages"},l.map(function(e,t){return r.a.createElement("li",{key:"languages-"+e+"-"+t},e)})):l;return r.a.createElement("div",{className:"job"},t,r.a.createElement("div",{className:"description"},u))};t.default=function(e){return r.a.createElement(i.a,null,r.a.createElement(l,{data:o}))}},169:function(e,t,a){"use strict";var n=a(175),r="291, 0%, 18%",i={black:"hsla("+r+",1)",text:"hsla("+r+",0.95)",light:"hsla("+r+",0.4)",calm:"hsla("+r+",0.2)",smoke:"hsla("+r+",0.1)",whiteSmoke:"hsla("+r+",0.02)",white:"#fff",link:"#03a9f4",linkHover:"#ff5252"};t.a={animations:{animationCurveFastOutSlowIn:"cubic-bezier(0.4, 0, 0.2, 1)",animationCurveLinearOutSlowIn:"cubic-bezier(0, 0, 0.2, 1)",animationCurveFastOutLinearIn:"cubic-bezier(0.4, 0, 1, 1)",animationCurveDefault:"cubic-bezier(0.4, 0, 0.2, 1)",animationSpeedDefault:"250ms",animationSpeedFast:"200ms",animationSpeedSlow:"300ms"},colors:i,container:Object(n.style)({maxWidth:"37rem",margin:"0 auto"})}},170:function(e,t,a){"use strict";a.d(t,"a",function(){return l});var n=a(176),r=a.n(n),i=a(177),o=a.n(i),s=new r.a(o.a);var l=s.rhythm;s.scale},171:function(e){e.exports={data:{site:{siteMetadata:{title:"etnichols"}}}}},172:function(e,t,a){"use strict";a(77),a(57),a(36),a(174),a(76);var n=a(0),r=a.n(n),i=a(7),o=a.n(i),s=a(15),l={posts:"/",projects:"/projects",about:"/about",resume:"/resume",contact:"/contact"};t.a=function(e){return r.a.createElement(s.Location,null,function(e){var t=e.location.pathname.split("/")[1];return Object.entries(l).map(function(e){var a=e[0],n=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{className:"linkStyle",to:n},(function(e,t){return e===t||""===t&&"posts"===e}(a,t)?"•":"")+" "+a),r.a.createElement("br",null))})})}},173:function(e,t,a){"use strict";var n=a(171),r=a(0),i=a.n(r),o=a(1),s=a.n(o),l=a(56),c=a(7),u=a.n(c),m=a(172),d=(a(155),a(169)),p=a(170),h=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){var a=e.site.siteMetadata.title;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{padding:Object(p.a)(.75),maxWidth:"40rem",margin:"0 auto"}},i.a.createElement("main",null,i.a.createElement(u.a,{to:"/",css:{display:"inline-block"}},i.a.createElement("h1",{style:{color:d.a.colors.light,lineHeight:1,margin:0,paddingBottom:Object(p.a)(.25),paddingTop:Object(p.a)(.25)}},a)),i.a.createElement("hr",null),i.a.createElement(m.a,null),t),i.a.createElement("footer",null,i.a.createElement("div",{style:{color:d.a.colors.text,textAlign:"center"}},"© "+(new Date).getFullYear()+" "+a))))},data:n})};h.propTypes={children:s.a.node.isRequired},t.a=h}}]);
//# sourceMappingURL=component---src-pages-resume-tsx-c593adcca07b709e43ea.js.map