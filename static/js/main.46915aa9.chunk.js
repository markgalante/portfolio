(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(12),o=t.n(r),i=(t(22),t(23),t(24),Object(n.createContext)("Enthusiastic, self-taught front-end web developer and qualified physiotherapist with insights and an understanding of both \n    the public and private healthcare sectors of South Africa.")),l=function(){var e=Object(n.useContext)(i);return c.a.createElement("section",null,c.a.createElement("div",{className:"about"},e))},s=t(2),m=Object(n.createContext)([{institution:"University of Stellenbosch",qualification:"BSc. Physiotherapy (Hons)",gradYear:"2016"},{institution:"Herzlia",qualification:"National Senior Certificate",gradYear:"2011"}]),h=function(){var e=Object(n.useContext)(m).map((function(e,a){return c.a.createElement("div",{key:a},c.a.createElement("h4",null,e.institution),c.a.createElement("h5",null,e.qualification),c.a.createElement("p",null,e.gradYear))}));return c.a.createElement("section",{className:"education"},c.a.createElement("h2",null,c.a.createElement(s.a,{icon:["fas","graduation-cap"]})," Education"),e)},u=t(9),p=t.n(u),d=function(e){var a=e.workData,t=a.highlights.map((function(e,a){return c.a.createElement("li",{key:a},e)}));return c.a.createElement("div",{className:"workItem"},c.a.createElement("h4",null,a.position,", ",c.a.createElement("span",null,a.employer)),c.a.createElement("p",{className:"workDates"},function(){var e=p()(a.started).format("MMM YYYY"),t=null;return t=""!==a.ended?p()(a.ended).format("MMM YYYY"):"Present",c.a.createElement("span",null," ",e," - ",t," ")}()),c.a.createElement("p",null,a.myrole),c.a.createElement("ul",null,t))},g=Object(n.createContext)({workHistory:[{employer:"Freelancing",started:"2021-01-13",ended:"",position:"React Developer",myrole:"Part of a the front-end team developing a progressive web application from the Thera mobile application.",highlights:[],job:4},{employer:"Lyle Diedericks Physiotherapists Inc.",started:"2020-10-01",ended:"",position:"Physiotherapist",myrole:"Based at Life Vincent Pallotti Hospital, Pinelands. I am part of the \n                            team that delivers physiotherapy services to both in- and out-patients.\n                            This practice was previously part of Physiopaedic.",highlights:[],job:3},{employer:"Physiopaedic T/A Marq Labuschagne",started:"2018-01-08",ended:"2020-10-01",position:"Physiotherapist",myrole:"  Taken over by Lyle Diedericks. \n                            I was based in the orthopaedic ward, Robin Trust \n                            Sub-Acute Care Centre and at the practice. \n                            I attended to both in- and out-patients",highlights:[],job:2},{employer:"Western Cape Government",started:"2017-01-01",ended:"2017-12-31",position:"Community Service Physiotherapist",myrole:" This was my first job after graduating as a physiotherapist. \n                            It was part of my community serive year. I headed up and managed the \n                            delivery of physiotherapy services to the Matzikama Sub-District \n                            in the Western Cape, South Africa",highlights:[],job:1}]}),E=function(){var e=Object(n.useContext)(g);console.log(e);return c.a.createElement("div",{className:"work-experience"},c.a.createElement("h2",null,c.a.createElement(s.a,{icon:["fas","briefcase"]})," Work Experience"),c.a.createElement("div",{className:"divider"}),function(){var a=[];return e.workHistory.forEach((function(e,t){a.push(c.a.createElement(d,{key:t,workData:e}))})),a}())},f=Object(n.createContext)({skills:{title:"front-end developer",level:"junior",keywords:["HTML","CSS","JavaScript","jQuery","Bootstrap","React","Node.js","Express.js","MongoDB"]},stack:[{techImageURL:"https://img.icons8.com/color/48/000000/html-5.png",techName:"HTML"},{techImageURL:"https://img.icons8.com/color/48/000000/css3.png",techName:"CSS"},{techImageURL:"https://img.icons8.com/color/48/000000/javascript.png",techName:"JavaScript"},{techImageURL:"https://img.icons8.com/color/48/000000/graphql.png",techName:"GraphQL"},{techImageURL:"https://img.icons8.com/color/48/000000/bootstrap.png",techName:"Bootstrap"},{techImageURL:"https://img.icons8.com/color/48/000000/react-native.png",techName:"React"},{techImageURL:"https://img.icons8.com/color/48/000000/nodejs.png",techName:"NodeJS"},{techImageURL:"https://cnblackxp.github.io/imgs/technologies-icons/express.png",techName:"Express"},{techImageURL:"https://img.icons8.com/color/48/000000/mongodb.png",techName:"MongoDB"}]}),v=function(e){var a=e.techImageURL,t=e.techName;return c.a.createElement("div",{className:"stack-thumbnail"},c.a.createElement("div",{className:"stack-thumbnail-image"},c.a.createElement("img",{alt:t,src:a,className:"stack-logo"})),c.a.createElement("div",{className:"stack-thumbnail-name"},c.a.createElement("span",{className:"stack-name"},t)))},b=function(){var e=Object(n.useContext)(f).stack.map((function(e,a){return c.a.createElement(v,{techImageURL:e.techImageURL,techName:e.techName,key:a})}));return c.a.createElement("div",{className:"skills-page"},c.a.createElement("h2",null,c.a.createElement(s.a,{icon:["fas","code"]})," Languages, Libraries and Frameworks"),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"stack-thumbnails"},e))},k=Object(n.createContext)([{provider:"Udemy",name:"The Web Developer Bootcamp",link:"https://www.udemy.com/course/the-web-developer-bootcamp/"}]),y=function(){var e=Object(n.useContext)(k).map((function(e,a){return c.a.createElement("p",{key:a},c.a.createElement("a",{href:e.link,className:"anchor-tag-black"}," ",e.name),", ",e.provider)}));return c.a.createElement("div",{className:"courses-container"},c.a.createElement("h2",null,c.a.createElement(s.a,{icon:["fas","book-reader"]})," Courses Completed"),c.a.createElement("div",{className:"divider"}),e)},N=t.p+"static/media/markgalante.db4b930b.png",w=t(13),j=Object(n.createContext)({firstName:"Mark",middleName:"Vincent Joseph",surname:"Galante",dateOfBirth:"10 August 1992",contact:{telephone:"083 510 3049",email:"mark.galante.14@gmail.com"},location:{apartmentBlock:"Santenay",road:"Amber Road",suburb:"Burgundy Estate",postalCode:7441,city:"Cape Town",province:"Western Cape",country:"South Africa"},"social-media":[{"font-awesome-icon":"linkedin","font-awesome-class":"fab",link:"https://www.linkedin.com/in/mark-galante-65137946/",site:"LinkedIn"},{"font-awesome-icon":"facebook","font-awesome-class":"fab",link:"https://www.facebook.com/mark.v.j.galante/",site:"Facebook"},{"font-awesome-icon":"github","font-awesome-class":"fab",link:"https://github.com/markgalante",site:"GitHub"}]}),C=function(){var e=Object(n.useContext)(j)["social-media"].map((function(e,a){return c.a.createElement("div",{key:a,className:"social-media-icon"},c.a.createElement("a",{href:e.link,title:e.site,className:"anchor-tag-black"},c.a.createElement(s.a,{icon:[e["font-awesome-class"],e["font-awesome-icon"]],size:"2x"})))}));return c.a.createElement("div",{className:"social-media-icons"},e)},L=function(){var e=Object(n.useContext)(j);return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(w.a,{className:"profileImg",src:N,roundedCircle:!0})),c.a.createElement("div",{className:"text-center profileName"},e.firstName," ",e.middleName," ",e.surname),c.a.createElement("div",{className:"divider"}),c.a.createElement("ul",{className:"list-unstyled contact-links"},c.a.createElement("li",null,c.a.createElement(s.a,{icon:["fas","location-arrow"]})," ",e.location.city,", ",e.location.country),c.a.createElement("li",null,c.a.createElement(s.a,{icon:["fas","envelope"]})," ",c.a.createElement("a",{href:"mailto:".concat(e.contact.email),className:"anchor-tag-black"},e.contact.email)),c.a.createElement("li",null,c.a.createElement(s.a,{icon:["fas","mobile"]})," ",c.a.createElement("a",{href:"tel: 0835103049",className:"anchor-tag-black"}," ",e.contact.telephone," "),"  ")),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",null,c.a.createElement(C,null)),c.a.createElement("div",{className:"divider"}))},x=Object(n.createContext)([{projectName:"Kinetic",projectURL:"https://github.com/markgalante/kinetic"},{projectName:"YelpCamp",projectURL:"https://github.com/markgalante/yelp_camp"},{projectName:"Crwn Clothing",projectURL:"https://github.com/markgalante/crwn-clothing"}]),I=function(){var e=Object(n.useContext)(x).map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement("a",{className:"anchor-tag-black",href:e.projectURL},e.projectName))}));return c.a.createElement("div",null,c.a.createElement("h2",null,c.a.createElement(s.a,{icon:["fas","project-diagram"]})," Projects"),c.a.createElement("div",{className:"divider"}),c.a.createElement("ul",{className:"project-list"},e))},R=(t(31),t(16)),O=t(17),U=t(10),S=t(7),M=t(14),B=t(15);S.b.add(M.a),S.b.add(B.a);var P=function(){return c.a.createElement(R.a,null,c.a.createElement(O.a,null,c.a.createElement(U.a,{lg:4,className:"profileOnApp positioned-fixed"},c.a.createElement("div",{className:"inner"},c.a.createElement(L,null),c.a.createElement(l,null))),c.a.createElement(U.a,{lg:8,className:"infoOnApp"},c.a.createElement("div",{className:"inner"},c.a.createElement(I,null),c.a.createElement(b,null),c.a.createElement(y,null),c.a.createElement(E,null),c.a.createElement(h,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.46915aa9.chunk.js.map