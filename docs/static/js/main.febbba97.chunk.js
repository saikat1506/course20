(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{351:function(e,n,t){},352:function(e,n,t){"use strict";t.r(n);var r=t(1),a=t.n(r),c=t(38),o=t.n(c),i=t(358),s=t(17),u=(t(59),t(5)),l=t(39),f=t.n(l),h=t(10),m=t.n(h),p=t(15),d=t(2),b=t(3),g=t(42),v=t(9);function w(){var e=Object(d.a)(["\n  width: 100%;\n  height: 90px;\n  display: flex;\n  align-items: stretch;\n  input {\n    background: #efefef;\n    padding: 12px 24px;\n    flex: 1;\n    font-size: 2.5rem;\n    border: none;\n    border-bottom: 1px solid #eee;\n    &::placeholder {\n      color: #777;\n      font-weight: normal;\n      font-family: 'Karla', sans-serif;\n    }\n    &[disabled]::placeholder {\n      color: transparent;\n    }\n  }\n"]);return w=function(){return e},e}var x=b.b.div(w()),E=function(e){var n=e.search,t=e.handleChange,r=Object(v.a)(e,["search","handleChange"]);return a.a.createElement(x,null,a.a.createElement("input",Object.assign({value:n,onChange:t,placeholder:"Search transcript"},r)))};E.defaultProps={search:""};var A=E,j={1:"https://raw.githubusercontent.com/fastai/course20/master/files/transcripts/transcript-1-1.json",2:"https://raw.githubusercontent.com/fastai/course20/master/files/transcripts/transcript-1-2.json",3:"https://raw.githubusercontent.com/fastai/course20/master/files/transcripts/transcript-1-3.json",4:"https://raw.githubusercontent.com/fastai/course20/master/files/transcripts/transcript-1-4.json",5:"https://raw.githubusercontent.com/fastai/course20/master/files/transcripts/transcript-1-5.json",6:"https://raw.githubusercontent.com/fastai/course20/master/files/transcripts/transcript-1-6.json",7:"https://raw.githubusercontent.com/fastai/course20/master/files/transcripts/transcript-1-7.json",8:"https://raw.githubusercontent.com/fastai/course20/master/files/transcripts/transcript-1-8.json"},O={1:"https://raw.githubusercontent.com/fastai/course20/master/files/notes/notes-1-1.md",2:"https://raw.githubusercontent.com/fastai/course20/master/files/notes/notes-1-2.md",3:"https://raw.githubusercontent.com/fastai/course20/master/files/notes/notes-1-3.md",4:"https://raw.githubusercontent.com/fastai/course20/master/files/notes/notes-1-4.md",5:"https://raw.githubusercontent.com/fastai/course20/master/files/notes/notes-1-5.md",6:"https://raw.githubusercontent.com/fastai/course20/master/files/notes/notes-1-6.md",7:"https://raw.githubusercontent.com/fastai/course20/master/files/notes/notes-1-7.md",8:"https://raw.githubusercontent.com/fastai/course20/master/files/notes/notes-1-8.md"},k={1:"_QUEXsHfsA0",2:"BvHmRx14HQ8",3:"5L3Ao5KuCC4",4:"p50s63nPq9I",5:"krIVOb23EH8",6:"cX30jxMNBUw",7:"VEG5xT5gAHc",8:"WjnwWeGjZcM"},y=[{1:"Lesson 1",2:"Lesson 2",3:"Lesson 3",4:"Lesson 4",5:"Lesson 5",6:"Lesson 6",7:"Lesson 7",8:"Lesson 8"}],I=[{title:"Course Home",href:"https://course.fast.ai/"},{title:"fast.ai",href:"https://fast.ai/"}],C="cubic-bezier(0.4, 0.0, 0.2, 1)";function X(){var e=Object(d.a)(["\n  cursor: pointer;\n  padding: 23px 18px;\n  border-bottom: 1px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  div > p {\n    margin: 4px 0;\n  }\n  \n  div:first-child > span {\n    opacity: 0.4;\n  }\n\n  div:last-child {\n    opacity: 0;\n    transition: all 0.4s ",";\n    transform: translateX(-40px);\n  }\n  \n  &:hover {\n    background: linear-gradient(90deg, #347DBE, #2FB4D6);\n    color: #fff;\n    div:last-child {\n      opacity: 1.0;\n      transform: translateX(0px);\n    }\n  }\n"]);return X=function(){return e},e}function L(){var e=Object(d.a)(["\n  width: 100%;\n  height: 100%;\n"]);return L=function(){return e},e}function M(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return M=function(){return e},e}var P=b.b.div(M()),R=b.b.div(L()),S=b.b.span(X(),C),z={},J=function(){var e=Object(p.a)(m.a.mark(function e(n){var t,r,a,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=z[n])){e.next=3;break}return e.abrupt("return",t);case 3:if(r=j[n]){e.next=6;break}return e.abrupt("return",null);case 6:return e.next=8,fetch(r);case 8:return a=e.sent,e.next=11,a.json();case 11:return c=e.sent,z[n]=c,e.abrupt("return",c);case 14:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),T=function(){return a.a.createElement("div",{style:{display:"flex",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}},a.a.createElement("p",{style:{color:"#444"}},"The transcript for this lesson is currently unavailable"))},V=function(e){var n=e.result,t=Object(u.a)(n.occurence,2),r=t[0],c=r+t[1],o=n.sentence.slice(0,r),i=n.sentence.slice(r,c),s=n.sentence.slice(c,n.sentence.length);return a.a.createElement("p",null,o,a.a.createElement("b",null,i),s)},B=function(e){var n=e.result;return a.a.createElement(S,{onClick:n.goto,onKeyUp:n.goto,role:"button",tabIndex:"0"},a.a.createElement("div",null,a.a.createElement(V,{result:n}),a.a.createElement("span",null,n.moment)),a.a.createElement("div",null,"Seek ",a.a.createElement(g.a,null)))},F=function(e){var n=e.lesson,t=e.goToMoment,c=Object(r.useState)(""),o=Object(u.a)(c,2),i=o[0],s=o[1],l=Object(r.useState)(null),f=Object(u.a)(l,2),h=f[0],m=f[1];Object(r.useEffect)(function(){J(n).then(function(e){m(e),s("")}).catch(function(e){return console.error(e)})},[n]);var p=Object(r.useCallback)(function(e){return s(e.target.value)},[]),d=Object(r.useMemo)(function(){return h?Object.keys(h).map(function(e){return{timestamp:e,occurence:[h[e].toLowerCase().indexOf(i),i.length]}}).filter(function(e){return-1!==e.occurence[0]}).map(function(e){return{moment:e.timestamp,sentence:h[e.timestamp],goto:function(){return t(e.timestamp)},occurence:e.occurence}}).slice(0,12):[]},[i,t,h]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,{search:i,handleChange:p,disabled:!h}),a.a.createElement(R,null,!h&&a.a.createElement(T,null),h&&i.length>0&&a.a.createElement(P,null,d.map(function(e){return a.a.createElement(B,{key:e.moment,result:e})}))))};function N(){var e=Object(d.a)(["\n  height: 65px;\n  display: inline-flex;\n  cursor: pointer;\n  flex: 1;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  color: var(--text-dark);\n  opacity: 0.8;\n  &, &::after {\n    transition: all 0.3s ",';\n  }\n  &::after {\n    content: "";\n    width: 100%;\n    height: 2px;\n    background: rgba(0, 0, 0, 0.15);\n    position: absolute;\n    bottom: 0;\n    left: 0;\n  }\n  ',"\n"]);return N=function(){return e},e}function Q(){var e=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  align-items: stretch;\n  flex-shrink: 0;\n  flex-grow: 0;\n  height: 55px;\n  background: #fff;\n"]);return Q=function(){return e},e}function H(){var e=Object(d.a)(["\n  max-height: 100%;\n  flex: 1;\n  /*overflow: scroll;*/\n"]);return H=function(){return e},e}function K(){var e=Object(d.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n"]);return K=function(){return e},e}var G=b.b.div(K()),D=b.b.div(H()),U=b.b.div(Q()),q=b.b.div(N(),C,function(e){return e.active?"\n    font-weight: bold;\n    opacity: 1.0;\n    &::after {\n      background: var(--fastai-blue);\n    }\n  ":"\n    &:hover {\n      &::after {\n        background: rgba(0, 0, 0, 0.3);\n      }\n    }\n  "}),Z=function(e){var n=e.children,t=Object(r.useState)(0),c=Object(u.a)(t,2),o=c[0],i=c[1];return a.a.createElement(G,null,a.a.createElement(U,null,a.a.createElement(q,{onClick:function(){return i(0)},active:0===o},"Notes"),a.a.createElement(q,{onClick:function(){return i(1)},active:1===o},"Transcript Search")),a.a.createElement(D,null,a.a.Children.map(n,function(e,n){return n===o?e:null})))},Y=t(43),W=t.n(Y);function _(){var e=Object(d.a)(["\n  max-width: 100vw;\n  height: 100%;\n"]);return _=function(){return e},e}var $=b.b.div(_()),ee=Object(r.forwardRef)(function(e,n){var t=e.lesson,r=e.startAt,c="https://www.youtube.com/embed/".concat(k[t]);return r&&(c="".concat(c,"?t=").concat(r)),a.a.createElement($,null,a.a.createElement(W.a,{ref:n,url:c,controls:!0,width:"100%",height:"100%",config:{youtube:{playerVars:{playsinline:1,modestbranding:1}}}}))}),ne=t(356),te=t(45),re=t(44),ae=t.n(re);function ce(){var e=Object(d.a)(["\n  background-color: #fafbfc;\n  padding: 20px 12px;\n  h2 {\n    margin: 8px 0;\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return oe=function(){return e},e}function ie(){var e=Object(d.a)(["\n  text-align: center;\n  margin: 12px 0;\n"]);return ie=function(){return e},e}function se(){var e=Object(d.a)(["\n    font-weight: bold;\n    color: var(--text-light);\n    &, &:hover {\n      background: linear-gradient(90deg, #347DBE, #2FB4D6);\n    }\n  "]);return se=function(){return e},e}function ue(){var e=Object(d.a)(["\n  height: 3rem;\n  cursor: pointer;\n  width: 80%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 6px 0;\n  padding: 2px 12px;\n  border-radius: 7px;\n  transition: all 0.2s ",";\n  text-decoration: none;\n  &:hover {\n    background: rgba(52, 125, 190, 0.15);\n  }\n  \n  ","\n"]);return ue=function(){return e},e}var le=Object(b.b)(ne.a)(ue(),C,function(e){return e.selected&&Object(b.a)(se())}),fe=b.b.header(ie()),he=b.b.div(oe()),me=b.b.div(ce()),pe=function(e){var n=e.selectedLesson,t=e.selectedPart,r=y[t];return a.a.createElement(he,null,Object.keys(r).map(function(e){var t=r[e];return a.a.createElement(de,{selectedLesson:n,lesson:t,num:e,key:t})}))},de=function(e){var n=e.num,t=e.lesson,r=e.selectedLesson;return a.a.createElement(le,{key:"lesson-".concat(n),role:"button",tabIndex:"0",selected:parseInt(n)===r,to:"?lesson=".concat(n)},t)},be=function(e){var n=e.lesson,t=e.part;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"}},a.a.createElement("div",null,a.a.createElement(fe,null,a.a.createElement("a",{href:"/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:ae.a,alt:"fast.ai"}))),a.a.createElement(pe,{selectedLesson:n,selectedPart:t})),a.a.createElement(me,null,a.a.createElement("h2",null,"Quick Links"),I.map(function(e){return a.a.createElement("a",{key:e.href,href:e.href,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("p",null,e.title," ",a.a.createElement(te.a,null)))})))},ge=t(29),ve=t(12),we=t(359);function xe(){var e=Object(d.a)(["\n\tbackground: var(--background);\n\tbox-shadow: 2px 0 30px rgba(128, 128, 128, 0.3);\n\ttransition: all 0.3s ",";\n\tz-index: 1;\n\tflex-shrink: 0;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n\twidth: ",";\n\t","\n"]);return xe=function(){return e},e}var Ee=b.b.aside(xe(),C,function(e){return e.width},function(e){return!e.shown&&"\n\t\t\twidth: 0px;\n "}),Ae=function(e){var n=e.children,t=e.shown,r=e.width,c=Object(v.a)(e,["children","shown","width"]);return a.a.createElement(Ee,Object.assign({shown:t,width:r},c),a.a.createElement("div",{style:{width:r,height:"100%"}},n))};Ae.defaultProps={width:"250px"};var je=Ae;function Oe(){var e=Object(d.a)(["\n\theight: 50px;\n  width: 50px;\n  background: rgba(0, 0, 0, 0.3);\n\tborder: none;\n\tcursor: pointer;\n\tcolor: var(--text-light);\n\tborder-radius: 50%;\n\tline-height: 0;\n  z-index: 2;\n\tposition: absolute;\n  transition: background 0.3s ",";\n\t&:hover {\n\t\tbackground: var(--fastai-blue);\n\t}\n\t& > svg {\n\t\twidth: 20px;\n\t\theight: 20px;\n  }\n"]);return Oe=function(){return e},e}var ke=b.b.button(Oe(),C),ye=function(e){var n=e.shown,t=e.ShownIcon,r=e.HiddenIcon,c=Object(v.a)(e,["shown","ShownIcon","HiddenIcon"]);return a.a.createElement(ke,c,n?a.a.createElement(t,null):a.a.createElement(r,null))};function Ie(){var e=Object(d.a)(["\n  position: absolute;\n  width: 100%;\n  overscroll-behavior: none;\n  height: 100%;\n  @media (max-width: 950px) {\n    position: fixed;\n  }\n"]);return Ie=function(){return e},e}function Ce(){var e=Object(d.a)(["\n  width: 100%;\n  background: #222;\n  position: relative;\n"]);return Ce=function(){return e},e}function Xe(){var e=Object(d.a)(["\n  display: flex;\n  height: 100vh;\n  height: -webkit-fill-available;\n  flex-direction: row;\n  width: 100vw;\n"]);return Xe=function(){return e},e}var Le=b.b.div(Xe()),Me=b.b.main(Ce()),Pe=b.b.div(Ie()),Re=function(e){return a.a.createElement(ye,Object.assign({style:{top:"52px",left:"12px"},ShownIcon:ve.a,HiddenIcon:ve.b},e))},Se=function(e){return a.a.createElement(ye,Object.assign({style:{top:"52px",right:"12px"},ShownIcon:ve.b,HiddenIcon:ve.a},e))},ze=function(e){var n=e.LeftPanelContent,t=e.RightPanelContent,c=e.children,o=Object(we.a)("panel-state",{left:!0,right:!0}),i=Object(u.a)(o,2),s=i[0],l=i[1],f=Object(r.useCallback)(function(){return l(Object(ge.a)({},s,{left:!s.left}))},[s,l]),h=Object(r.useCallback)(function(){return l(Object(ge.a)({},s,{right:!s.right}))},[s,l]);return a.a.createElement(Le,null,a.a.createElement(je,{shown:s.left,width:"12rem"},n),a.a.createElement(Me,null,a.a.createElement(Re,{shown:s.left,onClick:f}),a.a.createElement(Pe,null,c),a.a.createElement(Se,{shown:s.right,onClick:h})),a.a.createElement(je,{shown:s.right,width:"35rem"},t))},Je=t(46),Te=t.n(Je),Ve=t(357),Be=function(e){var n=e.language,t=e.value;return a.a.createElement(Ve.a,{language:n},t)};Be.defaultProps={language:null};var Fe=Be;function Ne(){var e=Object(d.a)(["\n  padding: 12px 24px;\n  p {\n    line-height: 1.5em;\n    margin-bottom: 24px;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin-bottom: 24px;\n    font-weight: bold;\n  }\n"]);return Ne=function(){return e},e}var Qe=Object(b.b)(Te.a)(Ne()),He={},Ke=function(){var e=Object(p.a)(m.a.mark(function e(n){var t,r,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=He[n])){e.next=3;break}return e.abrupt("return",t);case 3:return e.next=5,fetch(O[n]);case 5:return r=e.sent,e.next=8,r.text();case 8:return a=e.sent,He[n]=a,e.abrupt("return",a);case 11:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),Ge=function(e){var n=e.lesson,t=Object(r.useState)(""),c=Object(u.a)(t,2),o=c[0],i=c[1];return Object(r.useEffect)(function(){Ke(n).then(function(e){return i(e)}).catch(function(e){return console.error(e)})},[n]),a.a.createElement(Qe,{linkTarget:"_blank",source:o,renderers:{code:Fe}})},De=(t(351),function(){var e=Object(r.useState)(1),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)(null),i=Object(u.a)(o,2),s=i[0],l=i[1],h=Object(r.useRef)(null);Object(r.useEffect)(function(){var e=f.a.parse(window.location.search);c(parseInt(e.lesson||1,10)),l(parseInt(e.t,10))},[window.location.search]);var m=Object(r.useCallback)(function(e){var n=function(e){var n=e.split(":"),t=Object(u.a)(n,2),r=t[0],a=t[1];return 60*Number(r)+Number(a)}(e);h.current.seekTo(n),h.current.getInternalPlayer().playVideo()},[h]);return a.a.createElement(ze,{LeftPanelContent:a.a.createElement(be,{lesson:t,part:0}),RightPanelContent:a.a.createElement(Z,null,a.a.createElement(Ge,{lesson:t}),a.a.createElement(F,{lesson:t,goToMoment:m}))},a.a.createElement(ee,{ref:h,lesson:t,startAt:s}))}),Ue=Object(s.a)();o.a.render(a.a.createElement(i.a,{history:Ue},a.a.createElement(De,null)),document.getElementById("root"))},44:function(e,n){e.exports="data:image/png;base64,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"},54:function(e,n,t){e.exports=t(352)}},[[54,1,2]]]);
//# sourceMappingURL=main.febbba97.chunk.js.map