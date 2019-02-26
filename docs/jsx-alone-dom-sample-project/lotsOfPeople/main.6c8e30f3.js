(function () {var b={};function F(e){for(var $ in e)b.hasOwnProperty($)||(b[$]=e[$])}var c={},kb=c&&c.__assign||function(){return(kb=Object.assign||function(r){for(var $,e=1,t=arguments.length;e<t;e++)for(var o in $=arguments[e])Object.prototype.hasOwnProperty.call($,o)&&(r[o]=$[o]);return r}).apply(this,arguments)};function lb(r,$){if(void 0===$&&($="Throwing on undefined value"),!r)throw new Error($);return r}Object.defineProperty(c,"__esModule",{value:!0});var mb=lb;function fa(r,$){for(var e=[],t=0;t<r;t++)e.push(void 0===$?t:$);return e}c.checkThrow=mb;var nb=fa;function ga(r,$){return fa(r,$).join("")}c.array=nb;var ob=ga;function pb(r,$){return void 0===r&&(r=1),void 0===$&&($=2),ga(r*$," ")}c.repeat=ob;var qb=pb;function rb(r,$,e){return r.split($,e).join($).length}c.indent=qb;var sb=rb;function tb(r,$){return void 0===$&&($=" "),r.replace(/\s+/gm,$).trim()}c.getPosition=sb;var ub=tb;function ha(r,$){return Math.floor(Math.random()*$)+r}c.removeWhites=ub;var vb=ha;function wb(r){return r[ha(0,r.length)]}c.randomIntBetween=vb;var xb=wb;function yb(r,$){void 0===$&&($={minutes:!1,seconds:!0,ms:!0});var e=($=kb({minutes:!1,seconds:!0,ms:!0},$)).seconds&&Math.floor(r/1e3),t=$.minutes&&e&&Math.floor(e/60),o=$.ms&&Math.floor(r%1e3||r);return(t?t+" minutes ":"")+(e?e+" seconds ":"")+(o?o+" ms ":"")}c.randomItem=xb;var zb=yb;c.printMs=zb;var d={};Object.defineProperty(d,"__esModule",{value:!0});function Ab(e){return e.prototype&&e.prototype.render}var Bb=Ab;function Cb(e){return ia(e)||u(e)}d.isJSXAloneComponent=Bb;var Db=Cb;function u(e){return e&&e.setAttribute}d.isNode=Db;var Eb=u;function ia(e){return e&&e.content&&!u(e)}d.isElementLike=Eb;var Fb=ia;d.isTextNodeLike=Fb;var Gb=function(){return function(e){this.content=e}}(),Hb=Gb;d.AbstractTextNodeLike=Hb;var Ib=function(){function e(e){this.tag=e,this.attrs={},this.children=[]}return e.prototype.setAttribute=function(e,t){this.attrs[e]=t},e.prototype.appendChild=function(e){this.children.push(e),u(e)&&(e.parentElement=this)},e.prototype.findDescendant=function(e){var t;return this.children.some(function(n){return u(n)&&(t=e(n)?n:n.findDescendant(e)),!!t}),t},e.prototype.findAscendant=function(e){if(this.parentElement)return e(this.parentElement)?this.parentElement:this.parentElement.findAscendant(e)},e.prototype.getAscendants=function(){return this.parentElement?this.parentElement.getAscendants().concat([this.parentElement]):[]},e.prototype.getRootAscendant=function(){var e=this.parentElement?this.findAscendant(function(e){return u(e)&&!e.parentElement}):this;return c.checkThrow(e,"No root ascendant found in element like tree!")},e.prototype.getSiblings=function(){var e=this;return this.parentElement?this.parentElement.children.filter(function(t){return t!==e}):[]},e.prototype.findSibling=function(e){return this.getSiblings().find(e)},e.prototype.find=function(e){return this.getRootAscendant().findDescendant(e)},e}(),Jb=Ib;d.AbstractElementLike=Jb;var v={},Kb=v&&v.__extends||function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(v,"__esModule",{value:!0});var ja=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return d.isElementLike(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}(),Lb=ja;v.ElementClass=Lb;var Mb=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Kb(e,t),e}(ja),Nb=Mb;v.AbstractElementClass=Nb;var q={};function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var ka=q&&q.__assign||function(){return(ka=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};Object.defineProperty(q,"__esModule",{value:!0});var Ob=!1;function G(e){if(Ob)throw e;console.error(e)}var Pb=G;function Qb(e){var r=e.impl,t=e.textNodeImpl,n=e.escapeAttributes,o=e.functionAttributes,$=e.onElementReady,a=e.onElementCreate;return function(e,i){void 0===i&&(i={});for(var s,l,p=[],u=2;u<arguments.length;u++)p[u-2]=arguments[u];"string"==typeof e?s=new r(e):(d.isJSXAloneComponent(e)?(l=new e(ka({},i,{children:p})),s=l.render()):s=e(ka({},i,{children:p})),i={}),a&&a({elementLike:s,elementClassInstance:l});var c=function(e){if(e&&i.hasOwnProperty(e)){var r=i[e];if("boolean"==typeof r)!0===r&&s.setAttribute(e,e);else if("function"==typeof r){if(o&&"preserve"!==o){var t="toString-this"===o?"_this = __this__ = this; ("+r.toString()+").apply(_this, arguments)":r.toString(),$=n?n(t):t;s.setAttribute(e,$)}else s.setAttribute(e,r);}else!1!==r&&null!=r?"className"===e?"string"==typeof r?s.setAttribute("class",r):Array.isArray(r)&&r.length&&"string"==typeof r[0]?s.setAttribute("class",r.join(" ")):G("unrecognized className value "+U(r)+" "+r):s.setAttribute(e,r.toString()):"object"===U(r)?"style"===e?s.setAttribute("style",""+Object.keys(r).map(function(e){return e+": "+r[e]}).join("; ")):"dangerouslySetInnerHTML"===e&&r&&"string"==typeof r.__html?s.dangerouslySetInnerHTML(r.__html):G("unrecognized object attribute \""+e+"\" - the only object attribute supported is \"style\""):G("unrecognized attribute \""+e+"\" with type "+U(r))}};for(var C in i)c(C);return"string"==typeof e&&p.filter(function(e){return e}).forEach(function(r){d.isNode(r)?s.appendChild(r):Array.isArray(r)?r.forEach(function(r){"string"==typeof r?s.appendChild(new t(r)):d.isNode(r)?s.appendChild(r):G("Child is not a node or string: "+r+" , tag: "+e)}):s.appendChild(new t(r))}),$&&(s=$(s)),s}}q.debug=Pb;var Rb=Qb;q.createCreateElement=Rb;var Sb=null;q.AbstractJSXAlone=Sb;Object.defineProperty(b,"__esModule",{value:!0}),F(d),F(v),F(q);var Tb=d.AbstractTextNodeLike;b.AbstractTextNodeLike=Tb;var Ub=d.AbstractElementLike;var H={};Object.defineProperty(H,"__esModule",{value:!0});var la=function($){return b.AbstractJSXAlone.createElement("span",null,$.children)};function Vb($){var r=$.children();return console.log(r),r?b.AbstractJSXAlone.createElement(la,null,r):null}H.Fragment=la;var Wb=Vb;function Xb($){var r=Array.isArray($.children)?$.children[0]:$.children,e=$.c,R=$.p;return Zb(e)?r.apply(null,(R?[R]:[]).concat([e])):null}H.Js=Wb;var Yb=Xb;function Zb($){return!!$}H.If=Yb;b.AbstractElementLike=Ub,F(H),F(c);var i={};Object.defineProperty(i,"__esModule",{value:!0});var $b={firstName:function(){return b.randomItem(ma)},lastName:function(){return b.randomItem(ma)}};i.names=$b;var _b={integer:function(e,a){return b.randomIntBetween(e,a)}};i.numbers=_b;var ma=["William","Jack","Oliver","Joshua","Thomas","Lachlan","Cooper","Noah","Ethan","Lucas","James","Samuel","Jacob","Liam","Alexander","Benjamin","Max","Isaac","Daniel","Riley","Ryan","Xavier","Harry","Jayden","Nicholas","Harrison","Levi","Luke","Adam","Henry","Aiden","Dylan","Oscar","Michael","Jackson","Logan"];var I={};Object.defineProperty(I,"__esModule",{value:!0});var ac={peopleCount:1e4,friendsCount:2};function bc(e){return{people:dc(e)}}I.MODEL_CONFIG=ac;var cc=bc;function dc(e){return b.array(e.peopleCount).map(function(e){return{name:i.names.firstName()+" "+i.names.firstName()+" "+i.names.lastName()+" "+i.names.lastName(),age:i.numbers.integer(0,100),friends:[]}}).map(function($,r,a){return $.friends=b.array(i.numbers.integer(Math.trunc(e.friendsCount/2),e.friendsCount)).map(function(e){return a[i.numbers.integer(0,a.length-1)]}),$})}I.buildModel=cc;var J={};function ec(e){for(var $ in e)J.hasOwnProperty($)||(J[$]=e[$])}var j={};function K(e){for(var $ in e)j.hasOwnProperty($)||(j[$]=e[$])}var f={},fc=f&&f.__assign||function(){return(fc=Object.assign||function(r){for(var $,e=1,t=arguments.length;e<t;e++)for(var o in $=arguments[e])Object.prototype.hasOwnProperty.call($,o)&&(r[o]=$[o]);return r}).apply(this,arguments)};function gc(r,$){if(void 0===$&&($="Throwing on undefined value"),!r)throw new Error($);return r}Object.defineProperty(f,"__esModule",{value:!0});var hc=gc;function na(r,$){for(var e=[],t=0;t<r;t++)e.push(void 0===$?t:$);return e}f.checkThrow=hc;var ic=na;function oa(r,$){return na(r,$).join("")}f.array=ic;var jc=oa;function kc(r,$){return void 0===r&&(r=1),void 0===$&&($=2),oa(r*$," ")}f.repeat=jc;var lc=kc;function mc(r,$,e){return r.split($,e).join($).length}f.indent=lc;var nc=mc;function oc(r,$){return void 0===$&&($=" "),r.replace(/\s+/gm,$).trim()}f.getPosition=nc;var pc=oc;function pa(r,$){return Math.floor(Math.random()*$)+r}f.removeWhites=pc;var qc=pa;function rc(r){return r[pa(0,r.length)]}f.randomIntBetween=qc;var sc=rc;function tc(r,$){void 0===$&&($={minutes:!1,seconds:!0,ms:!0});var e=($=fc({minutes:!1,seconds:!0,ms:!0},$)).seconds&&Math.floor(r/1e3),t=$.minutes&&e&&Math.floor(e/60),o=$.ms&&Math.floor(r%1e3||r);return(t?t+" minutes ":"")+(e?e+" seconds ":"")+(o?o+" ms ":"")}f.randomItem=sc;var uc=tc;f.printMs=uc;var n={};Object.defineProperty(n,"__esModule",{value:!0});function vc(e){return e.prototype&&e.prototype.render}var qa=vc;function wc(e){return sa(e)||w(e)}n.isJSXAloneComponent=qa;var V=wc;function w(e){return e&&e.setAttribute}n.isNode=V;var ra=w;function sa(e){return e&&e.content&&!w(e)}n.isElementLike=ra;var xc=sa;n.isTextNodeLike=xc;var yc=function(){return function(e){this.content=e}}(),ta=yc;n.AbstractTextNodeLike=ta;var zc=function(){function e(e){this.tag=e,this.attrs={},this.children=[]}return e.prototype.setAttribute=function(e,t){this.attrs[e]=t},e.prototype.appendChild=function(e){this.children.push(e),w(e)&&(e.parentElement=this)},e.prototype.findDescendant=function(e){var t;return this.children.some(function(n){return w(n)&&(t=e(n)?n:n.findDescendant(e)),!!t}),t},e.prototype.findAscendant=function(e){if(this.parentElement)return e(this.parentElement)?this.parentElement:this.parentElement.findAscendant(e)},e.prototype.getAscendants=function(){return this.parentElement?this.parentElement.getAscendants().concat([this.parentElement]):[]},e.prototype.getRootAscendant=function(){var e=this.parentElement?this.findAscendant(function(e){return w(e)&&!e.parentElement}):this;return f.checkThrow(e,"No root ascendant found in element like tree!")},e.prototype.getSiblings=function(){var e=this;return this.parentElement?this.parentElement.children.filter(function(t){return t!==e}):[]},e.prototype.findSibling=function(e){return this.getSiblings().find(e)},e.prototype.find=function(e){return this.getRootAscendant().findDescendant(e)},e}(),ua=zc;n.AbstractElementLike=ua;var x={},Ac=x&&x.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(x,"__esModule",{value:!0});var va=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return ra(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}(),Bc=va;x.ElementClass=Bc;var Cc=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Ac(e,t),e}(va),Dc=Cc;x.AbstractElementClass=Dc;var r={};function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var wa=r&&r.__assign||function(){return(wa=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(r,"__esModule",{value:!0});var Ec=!1;function L(e){if(Ec)throw e;console.error(e)}var Fc=L;function Gc(e){var t=e.impl,r=e.textNodeImpl,n=e.escapeAttributes,o=e.functionAttributes,$=e.onElementReady,a=e.onElementCreate;return function(e,i){void 0===i&&(i={});for(var s,l,m=[],p=2;p<arguments.length;p++)m[p-2]=arguments[p];"string"==typeof e?s=new t(e):(qa(e)?(l=new e(wa({},i,{children:m})),s=l.render()):s=e(wa({},i,{children:m})),i={}),a&&a({elementLike:s,elementClassInstance:l});var u=function(e){if(e&&i.hasOwnProperty(e)){var t=i[e];if("boolean"==typeof t)!0===t&&s.setAttribute(e,e);else if("function"==typeof t){if(o&&"preserve"!==o){var r="toString-this"===o?"_this = __this__ = this; ("+t.toString()+").apply(_this, arguments)":t.toString(),$=n?n(r):r;s.setAttribute(e,$)}else s.setAttribute(e,t);}else!1!==t&&null!=t?"className"===e?"string"==typeof t?s.setAttribute("class",t):Array.isArray(t)&&t.length&&"string"==typeof t[0]?s.setAttribute("class",t.join(" ")):L("unrecognized className value "+W(t)+" "+t):s.setAttribute(e,t.toString()):"object"===W(t)?"style"===e?s.setAttribute("style",""+Object.keys(t).map(function(e){return e+": "+t[e]}).join("; ")):"dangerouslySetInnerHTML"===e&&t&&"string"==typeof t.__html?s.dangerouslySetInnerHTML(t.__html):L("unrecognized object attribute \""+e+"\" - the only object attribute supported is \"style\""):L("unrecognized attribute \""+e+"\" with type "+W(t))}};for(var c in i)u(c);return"string"==typeof e&&m.filter(function(e){return e}).forEach(function(t){V(t)?s.appendChild(t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?s.appendChild(new r(t)):V(t)?s.appendChild(t):L("Child is not a node or string: "+t+" , tag: "+e)}):s.appendChild(new r(t))}),$&&(s=$(s)),s}}r.debug=Fc;var Hc=Gc;r.createCreateElement=Hc;var Ic=null;r.AbstractJSXAlone=Ic;Object.defineProperty(j,"__esModule",{value:!0}),K(n),K(x),K(r);var xa=ta;j.AbstractTextNodeLike=xa;var ya=ua;var M={};Object.defineProperty(M,"__esModule",{value:!0});var za=function($){return j.AbstractJSXAlone.createElement("span",null,$.children)};function Jc($){var r=$.children();return console.log(r),r?j.AbstractJSXAlone.createElement(za,null,r):null}M.Fragment=za;var Kc=Jc;function Lc($){var r=Array.isArray($.children)?$.children[0]:$.children,e=$.c,G=$.p;return Nc(e)?r.apply(null,(G?[G]:[]).concat([e])):null}M.Js=Kc;var Mc=Lc;function Nc($){return!!$}M.If=Mc;j.AbstractElementLike=ya,K(M),K(f);var k={},X=k&&k.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Oc=k&&k.__assign||function(){return(Oc=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(k,"__esModule",{value:!0});var Aa=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return X(t,e),t.prototype.render=function(e){var t=this;void 0===e&&(e={});var n=document.createElement(this.tag),r=this.parentElement&&this.parentElement._elementClassInstance||this._elementClassInstance;return Object.keys(this.attrs).forEach(function(e){var a=t.attrs[e];if("function"==typeof a){var o=r?a.bind(r):a;n.addEventListener(e.substring(2,e.length).toLowerCase(),o),t.attrs[e]=void 0}else n.setAttribute(e,a)}),this._innerHtml&&(n.innerHTML=this._innerHtml),this.children.forEach(function(t){r&&(t._elementClassInstance=r||t._elementClassInstance),t.render(Oc({},e,{parent:n}))}),e.parent&&e.parent.appendChild(n),delete this._elementClassInstance,n},t.prototype.dangerouslySetInnerHTML=function(e){this._innerHtml=e},t}(ya),Pc=Aa;k.ElementLikeImpl=Pc;var Ba=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return X(t,e),t.prototype.render=function(e){void 0===e&&(e={});var t=document.createTextNode(this.content);return e.parent&&e.parent.appendChild(t),t},t}(xa),Qc=Ba;k.TextNodeLikeImpl=Qc;var Rc=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return X(t,e),t}(j.ElementClass),Ca=Rc;k.ElementClass=Ca;var Da={impl:Aa,textNodeImpl:Ba,functionAttributes:"preserve",onElementCreate:function(e){var t=e.elementLike,n=e.elementClassInstance;n&&(t._elementClassInstance=n)}};k.createCreateElementConfig=Da;var Y={};Object.defineProperty(Y,"__esModule",{value:!0});var Sc={createElement:j.createCreateElement(Da),render:function(e,r){return e.render(r)}},Tc=Sc;Y.JSXAlone=Tc;Object.defineProperty(J,"__esModule",{value:!0}),ec(Y);var Uc=Ca;J.ElementClass=Uc;var Ea={};Object.defineProperty(Ea,"__esModule",{value:!0});function Vc(){return J.JSXAlone}var Z=Vc;Ea.getJSXAlone=Z;var y={},Wc=y&&y.__extends||function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),Xc=y&&y.__assign||function(){return(Xc=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var $ in n=arguments[t])Object.prototype.hasOwnProperty.call(n,$)&&(e[$]=n[$]);return e}).apply(this,arguments)};Object.defineProperty(y,"__esModule",{value:!0});var a=Z(),Yc=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return Wc(n,e),n.prototype.render=function(){var e=this;return a.createElement("div",null,a.createElement("h1",null,"Lots of people to print"),a.createElement(b.If,{c:"undefined"!=typeof window},function(){return a.createElement("div",null,a.createElement("p",null,"People count: ",a.createElement("input",{id:"peopleCount",value:e.props.peopleCount+"",type:"number"})),a.createElement("p",null,"Friends count: ",a.createElement("input",{id:"friendsCount",value:e.props.friendsCount+"",type:"number"})),a.createElement("button",{onClick:function(e){var n=document.querySelector("#peopleCount").valueAsNumber,t=document.querySelector("#friendsCount").valueAsNumber;window.renderAppLotsOfPeople({peopleCount:n,friendsCount:t})}},"Render!"),a.createElement("h4",null,"Timings"),a.createElement("ul",null,a.createElement("li",null,"onload: ",a.createElement("strong",{id:"timings_onload"})),a.createElement("li",null,"buildModel: ",a.createElement("strong",{id:"timings_buildModel"})),a.createElement("li",null,"JSXAlone.createElement: ",a.createElement("strong",{id:"timings_JSXAloneCreateElement"})),a.createElement("li",null,"JSXAlone.render: ",a.createElement("strong",{id:"timings_JSXAloneRender"}))))}),a.createElement(_c,{people:this.props.people}))},n}(b.AbstractElementClass),Fa=Yc;y.App=Fa;var Zc=function(e){return a.createElement("button",{"data-name":e.name,onClick:function(e){alert(("\nNo context here that's why we need to do the following: \nName: \""+e.currentTarget.getAttribute("data-name")+"\"\n").trim())}},e.children)},$c=function(e){return a.createElement("tr",{id:encodeURIComponent(e.name)},a.createElement("td",null,e.name),a.createElement("td",null,e.age),a.createElement("td",null,a.createElement("ul",null,e.friends.map(function(e){return a.createElement("li",null,a.createElement("a",{href:"#"+e.name},e.name))}))),a.createElement("td",null,a.createElement(Zc,{name:e.name},"Edit")))},_c=function(e){return a.createElement("table",{className:"person"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Name"),a.createElement("th",null,"Age"),a.createElement("th",null,"Friends"),a.createElement("th",null,"Actions"))),a.createElement("tbody",null,e.people.map(function(e){return a.createElement($c,Xc({},e))})))};var S={},ad=S&&S.__assign||function(){return(ad=Object.assign||function(r){for(var e,$=1,n=arguments.length;$<n;$++)for(var o in e=arguments[$])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)};Object.defineProperty(S,"__esModule",{value:!0});var Ga=Z();function Ha(r,e){void 0===e&&(e=I.MODEL_CONFIG),bd=r;var $=Date.now();console.time("buildModel");var n=I.buildModel(e),o=Date.now()-$;console.timeEnd("buildModel");var a=Date.now();console.time("JSXAlone.createElement");var l=Ga.createElement("div",{id:"jsx-alone-sample-project-code"},Ga.createElement(Fa,ad({},n,e)),";"),p=Date.now()-a;console.timeEnd("JSXAlone.createElement"),r(l,{buildModelT:o,JSXAloneCreateElementT:p})}var bd,Ia=Ha;S.renderApp=Ia,"undefined"!=typeof window&&(window.renderAppLotsOfPeople=function(r){return Ha(bd,r)});var T={};function cd(e){for(var p in e)T.hasOwnProperty(p)||(T[p]=e[p])}Object.defineProperty(T,"__esModule",{value:!0});var Ja=Ia;T.lotsOfPeople=Ja,cd(i);var N={};function dd(e){for(var $ in e)N.hasOwnProperty($)||(N[$]=e[$])}var l={};function O(e){for(var $ in e)l.hasOwnProperty($)||(l[$]=e[$])}var e={},ed=e&&e.__assign||function(){return(ed=Object.assign||function(r){for(var $,e=1,t=arguments.length;e<t;e++)for(var o in $=arguments[e])Object.prototype.hasOwnProperty.call($,o)&&(r[o]=$[o]);return r}).apply(this,arguments)};function fd(r,$){if(void 0===$&&($="Throwing on undefined value"),!r)throw new Error($);return r}Object.defineProperty(e,"__esModule",{value:!0});var Ka=fd;function La(r,$){for(var e=[],t=0;t<r;t++)e.push(void 0===$?t:$);return e}e.checkThrow=Ka;var gd=La;function Ma(r,$){return La(r,$).join("")}e.array=gd;var hd=Ma;function id(r,$){return void 0===r&&(r=1),void 0===$&&($=2),Ma(r*$," ")}e.repeat=hd;var jd=id;function kd(r,$,e){return r.split($,e).join($).length}e.indent=jd;var ld=kd;function md(r,$){return void 0===$&&($=" "),r.replace(/\s+/gm,$).trim()}e.getPosition=ld;var nd=md;function Na(r,$){return Math.floor(Math.random()*$)+r}e.removeWhites=nd;var od=Na;function pd(r){return r[Na(0,r.length)]}e.randomIntBetween=od;var qd=pd;function rd(r,$){void 0===$&&($={minutes:!1,seconds:!0,ms:!0});var e=($=ed({minutes:!1,seconds:!0,ms:!0},$)).seconds&&Math.floor(r/1e3),t=$.minutes&&e&&Math.floor(e/60),o=$.ms&&Math.floor(r%1e3||r);return(t?t+" minutes ":"")+(e?e+" seconds ":"")+(o?o+" ms ":"")}e.randomItem=qd;var sd=rd;e.printMs=sd;var o={};Object.defineProperty(o,"__esModule",{value:!0});function td(e){return e.prototype&&e.prototype.render}var Oa=td;function ud(e){return Qa(e)||z(e)}o.isJSXAloneComponent=Oa;var _=ud;function z(e){return e&&e.setAttribute}o.isNode=_;var Pa=z;function Qa(e){return e&&e.content&&!z(e)}o.isElementLike=Pa;var vd=Qa;o.isTextNodeLike=vd;var wd=function(){return function(e){this.content=e}}(),Ra=wd;o.AbstractTextNodeLike=Ra;var xd=function(){function e(e){this.tag=e,this.attrs={},this.children=[]}return e.prototype.setAttribute=function(e,t){this.attrs[e]=t},e.prototype.appendChild=function(e){this.children.push(e),z(e)&&(e.parentElement=this)},e.prototype.findDescendant=function(e){var t;return this.children.some(function(n){return z(n)&&(t=e(n)?n:n.findDescendant(e)),!!t}),t},e.prototype.findAscendant=function(e){if(this.parentElement)return e(this.parentElement)?this.parentElement:this.parentElement.findAscendant(e)},e.prototype.getAscendants=function(){return this.parentElement?this.parentElement.getAscendants().concat([this.parentElement]):[]},e.prototype.getRootAscendant=function(){var e=this.parentElement?this.findAscendant(function(e){return z(e)&&!e.parentElement}):this;return Ka(e,"No root ascendant found in element like tree!")},e.prototype.getSiblings=function(){var e=this;return this.parentElement?this.parentElement.children.filter(function(t){return t!==e}):[]},e.prototype.findSibling=function(e){return this.getSiblings().find(e)},e.prototype.find=function(e){return this.getRootAscendant().findDescendant(e)},e}(),Sa=xd;o.AbstractElementLike=Sa;var A={},yd=A&&A.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(A,"__esModule",{value:!0});var Ta=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return Pa(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}(),zd=Ta;A.ElementClass=zd;var Ad=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return yd(e,t),e}(Ta),Bd=Ad;A.AbstractElementClass=Bd;var s={};function aa(e){return(aa="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Ua=s&&s.__assign||function(){return(Ua=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(s,"__esModule",{value:!0});var Cd=!1;function P(e){if(Cd)throw e;console.error(e)}var Dd=P;function Ed(e){var t=e.impl,r=e.textNodeImpl,n=e.escapeAttributes,o=e.functionAttributes,$=e.onElementReady,a=e.onElementCreate;return function(e,i){void 0===i&&(i={});for(var f,s,b=[],l=2;l<arguments.length;l++)b[l-2]=arguments[l];"string"==typeof e?f=new t(e):(Oa(e)?(s=new e(Ua({},i,{children:b})),f=s.render()):f=e(Ua({},i,{children:b})),i={}),a&&a({elementLike:f,elementClassInstance:s});var p=function(e){if(e&&i.hasOwnProperty(e)){var t=i[e];if("boolean"==typeof t)!0===t&&f.setAttribute(e,e);else if("function"==typeof t){if(o&&"preserve"!==o){var r="toString-this"===o?"_this = __this__ = this; ("+t.toString()+").apply(_this, arguments)":t.toString(),$=n?n(r):r;f.setAttribute(e,$)}else f.setAttribute(e,t);}else!1!==t&&null!=t?"className"===e?"string"==typeof t?f.setAttribute("class",t):Array.isArray(t)&&t.length&&"string"==typeof t[0]?f.setAttribute("class",t.join(" ")):P("unrecognized className value "+aa(t)+" "+t):f.setAttribute(e,t.toString()):"object"===aa(t)?"style"===e?f.setAttribute("style",""+Object.keys(t).map(function(e){return e+": "+t[e]}).join("; ")):"dangerouslySetInnerHTML"===e&&t&&"string"==typeof t.__html?f.dangerouslySetInnerHTML(t.__html):P("unrecognized object attribute \""+e+"\" - the only object attribute supported is \"style\""):P("unrecognized attribute \""+e+"\" with type "+aa(t))}};for(var u in i)p(u);return"string"==typeof e&&b.filter(function(e){return e}).forEach(function(t){_(t)?f.appendChild(t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?f.appendChild(new r(t)):_(t)?f.appendChild(t):P("Child is not a node or string: "+t+" , tag: "+e)}):f.appendChild(new r(t))}),$&&(f=$(f)),f}}s.debug=Dd;var Fd=Ed;s.createCreateElement=Fd;var Gd=null;s.AbstractJSXAlone=Gd;Object.defineProperty(l,"__esModule",{value:!0}),O(o),O(A),O(s);var Va=Ra;l.AbstractTextNodeLike=Va;var Wa=Sa;var B={};Object.defineProperty(B,"__esModule",{value:!0});var Hd=function($){return l.AbstractJSXAlone.createElement("span",null,$.children)};function Id($){var r=$.children();return console.log(r),r?l.AbstractJSXAlone.createElement(B.Fragment,null,r):null}B.Fragment=Hd;var Jd=Id;function Kd($){var r=Array.isArray($.children)?$.children[0]:$.children,e=$.c,t=$.p;return Md(e)?r.apply(null,(t?[t]:[]).concat([e])):null}B.Js=Jd;var Ld=Kd;function Md($){return!!$}B.If=Ld;l.AbstractElementLike=Wa,O(B),O(e);var m={},$=m&&m.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),Nd=m&&m.__assign||function(){return(Nd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(m,"__esModule",{value:!0});var Xa=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return $(t,e),t.prototype.render=function(e){var t=this;void 0===e&&(e={});var n=document.createElement(this.tag),r=this.parentElement&&this.parentElement._elementClassInstance||this._elementClassInstance;return Object.keys(this.attrs).forEach(function(e){var a=t.attrs[e];if("function"==typeof a){var o=r?a.bind(r):a;n.addEventListener(e.substring(2,e.length).toLowerCase(),o),t.attrs[e]=void 0}else n.setAttribute(e,a)}),this._innerHtml&&(n.innerHTML=this._innerHtml),this.children.forEach(function(t){r&&(t._elementClassInstance=r||t._elementClassInstance),t.render(Nd({},e,{parent:n}))}),e.parent&&e.parent.appendChild(n),delete this._elementClassInstance,n},t.prototype.dangerouslySetInnerHTML=function(e){this._innerHtml=e},t}(Wa),Od=Xa;m.ElementLikeImpl=Od;var Ya=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return $(t,e),t.prototype.render=function(e){void 0===e&&(e={});var t=document.createTextNode(this.content);return e.parent&&e.parent.appendChild(t),t},t}(Va),Pd=Ya;m.TextNodeLikeImpl=Pd;var Qd=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return $(t,e),t}(l.ElementClass),Za=Qd;m.ElementClass=Za;var $a={impl:Xa,textNodeImpl:Ya,functionAttributes:"preserve",onElementCreate:function(e){var t=e.elementLike,n=e.elementClassInstance;n&&(t._elementClassInstance=n)}};m.createCreateElementConfig=$a;var ba={};Object.defineProperty(ba,"__esModule",{value:!0});var Rd={createElement:l.createCreateElement($a),render:function(e,r){return e.render(r)}},Sd=Rd;ba.JSXAlone=Sd;Object.defineProperty(N,"__esModule",{value:!0}),dd(ba);var Td=Za;N.ElementClass=Td;var g={};function Q(e){for(var $ in e)g.hasOwnProperty($)||(g[$]=e[$])}var h={},Ud=h&&h.__assign||function(){return(Ud=Object.assign||function(r){for(var $,e=1,t=arguments.length;e<t;e++)for(var o in $=arguments[e])Object.prototype.hasOwnProperty.call($,o)&&(r[o]=$[o]);return r}).apply(this,arguments)};function Vd(r,$){if(void 0===$&&($="Throwing on undefined value"),!r)throw new Error($);return r}Object.defineProperty(h,"__esModule",{value:!0});var _a=Vd;function ab(r,$){for(var e=[],t=0;t<r;t++)e.push(void 0===$?t:$);return e}h.checkThrow=_a;var Wd=ab;function bb(r,$){return ab(r,$).join("")}h.array=Wd;var Xd=bb;function Yd(r,$){return void 0===r&&(r=1),void 0===$&&($=2),bb(r*$," ")}h.repeat=Xd;var Zd=Yd;function $d(r,$,e){return r.split($,e).join($).length}h.indent=Zd;var _d=$d;function ae(r,$){return void 0===$&&($=" "),r.replace(/\s+/gm,$).trim()}h.getPosition=_d;var be=ae;function cb(r,$){return Math.floor(Math.random()*$)+r}h.removeWhites=be;var ce=cb;function de(r){return r[cb(0,r.length)]}h.randomIntBetween=ce;var ee=de;function fe(r,$){void 0===$&&($={minutes:!1,seconds:!0,ms:!0});var e=($=Ud({minutes:!1,seconds:!0,ms:!0},$)).seconds&&Math.floor(r/1e3),t=$.minutes&&e&&Math.floor(e/60),o=$.ms&&Math.floor(r%1e3||r);return(t?t+" minutes ":"")+(e?e+" seconds ":"")+(o?o+" ms ":"")}h.randomItem=ee;var ge=fe;h.printMs=ge;var p={};Object.defineProperty(p,"__esModule",{value:!0});function he(t){return t.prototype&&t.prototype.render}var db=he;function ie(t){return fb(t)||C(t)}p.isJSXAloneComponent=db;var ca=ie;function C(t){return t&&t.setAttribute}p.isNode=ca;var eb=C;function fb(t){return t&&t.content&&!C(t)}p.isElementLike=eb;var je=fb;p.isTextNodeLike=je;var ke=function(){return function(t){this.content=t}}(),gb=ke;p.AbstractTextNodeLike=gb;var le=function(){function t(t){this.tag=t,this.attrs={},this.children=[]}return t.prototype.setAttribute=function(t,e){this.attrs[t]=e},t.prototype.appendChild=function(t){this.children.push(t),C(t)&&(t.parentElement=this)},t.prototype.findDescendant=function(t){var e;return this.children.some(function(r){return C(r)&&(e=t(r)?r:r.findDescendant(t)),!!e}),e},t.prototype.findAscendant=function(t){if(this.parentElement)return t(this.parentElement)?this.parentElement:this.parentElement.findAscendant(t)},t.prototype.getAscendants=function(){return this.parentElement?this.parentElement.getAscendants().concat([this.parentElement]):[]},t.prototype.getRootAscendant=function(){var t=this.parentElement?this.findAscendant(function(t){return C(t)&&!t.parentElement}):this;return _a(t,"No root ascendant found in element like tree!")},t.prototype.getSiblings=function(){var t=this;return this.parentElement?this.parentElement.children.filter(function(e){return e!==t}):[]},t.prototype.findSibling=function(t){return this.getSiblings().find(t)},t.prototype.find=function(t){return this.getRootAscendant().findDescendant(t)},t}(),hb=le;p.AbstractElementLike=hb;var D={},me=D&&D.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(D,"__esModule",{value:!0});var ib=function(){function t(t){this.props=t}return t.prototype.childrenAsArray=function(){return Array.isArray(this.props.children)?this.props.children:[this.props.children]},t.prototype.childrenElementsAsArray=function(){return this.childrenAsArray().filter(function(t){return eb(t)})},t.prototype.firstChildElement=function(){return this.childrenAsArray().find(function(t){return!0})},t}(),ne=ib;D.ElementClass=ne;var oe=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return me(e,t),e}(ib),pe=oe;D.AbstractElementClass=pe;var t={};function da(e){return(da="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var jb=t&&t.__assign||function(){return(jb=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var qe=!1;function R(e){if(qe)throw e;console.error(e)}var re=R;function se(e){var t=e.impl,r=e.textNodeImpl,n=e.escapeAttributes,o=e.functionAttributes,$=e.onElementReady,a=e.onElementCreate;return function(e,c){void 0===c&&(c={});for(var i,s,l=[],p=2;p<arguments.length;p++)l[p-2]=arguments[p];"string"==typeof e?i=new t(e):(db(e)?(s=new e(jb({},c,{children:l})),i=s.render()):i=e(jb({},c,{children:l})),c={}),a&&a({elementLike:i,elementClassInstance:s});var u=function(e){if(e&&c.hasOwnProperty(e)){var t=c[e];if("boolean"==typeof t)!0===t&&i.setAttribute(e,e);else if("function"==typeof t){if(o&&"preserve"!==o){var r="toString-this"===o?"_this = __this__ = this; ("+t.toString()+").apply(_this, arguments)":t.toString(),$=n?n(r):r;i.setAttribute(e,$)}else i.setAttribute(e,t);}else!1!==t&&null!=t?"className"===e?"string"==typeof t?i.setAttribute("class",t):Array.isArray(t)&&t.length&&"string"==typeof t[0]?i.setAttribute("class",t.join(" ")):R("unrecognized className value "+da(t)+" "+t):i.setAttribute(e,t.toString()):"object"===da(t)?"style"===e?i.setAttribute("style",""+Object.keys(t).map(function(e){return e+": "+t[e]}).join("; ")):"dangerouslySetInnerHTML"===e&&t&&"string"==typeof t.__html?i.dangerouslySetInnerHTML(t.__html):R("unrecognized object attribute \""+e+"\" - the only object attribute supported is \"style\""):R("unrecognized attribute \""+e+"\" with type "+da(t))}};for(var f in c)u(f);return"string"==typeof e&&l.filter(function(e){return e}).forEach(function(t){ca(t)?i.appendChild(t):Array.isArray(t)?t.forEach(function(t){"string"==typeof t?i.appendChild(new r(t)):ca(t)?i.appendChild(t):R("Child is not a node or string: "+t+" , tag: "+e)}):i.appendChild(new r(t))}),$&&(i=$(i)),i}}t.debug=re;var te=se;t.createCreateElement=te;var ue=null;t.AbstractJSXAlone=ue;Object.defineProperty(g,"__esModule",{value:!0}),Q(p),Q(D),Q(t);var ve=gb;g.AbstractTextNodeLike=ve;var we=hb;var E={};Object.defineProperty(E,"__esModule",{value:!0});var xe=function($){return g.AbstractJSXAlone.createElement("span",null,$.children)};function ye($){var r=$.children();return console.log(r),r?g.AbstractJSXAlone.createElement(E.Fragment,null,r):null}E.Fragment=xe;var ze=ye;function Ae($){var r=Array.isArray($.children)?$.children[0]:$.children,e=$.c,t=$.p;return Ce(e)?r.apply(null,(t?[t]:[]).concat([e])):null}E.Js=ze;var Be=Ae;function Ce($){return!!$}E.If=Be;g.AbstractElementLike=we,Q(E),Q(h);var ea={};Object.defineProperty(ea,"__esModule",{value:!0});var De=function(e,n){var o=Date.now();console.time("onload"),window.onload=function(){console.timeEnd("onload");var e=Date.now()-o;document.getElementById("timings_onload").innerHTML=g.printMs(e),document.getElementById("timings_buildModel").innerHTML=g.printMs(n.buildModelT),document.getElementById("timings_JSXAloneCreateElement").innerHTML=g.printMs(n.JSXAloneCreateElementT),document.getElementById("timings_JSXAloneRender").innerHTML=g.printMs(t)};var r=Date.now();console.time("JSXAlone.render()");var d=N.JSXAlone.render(e);console.timeEnd("JSXAlone.render()");var t=Date.now()-r,l=document.getElementById("jsx-alone-sample-project-code");l&&l.remove(),(l=document.createElement("dir")).setAttribute("id","jsx-alone-sample-project-code"),l.appendChild(d),document.body.appendChild(l),document.getElementById("timings_onload").innerHTML="N/E",document.getElementById("timings_buildModel").innerHTML=g.printMs(n.buildModelT),document.getElementById("timings_JSXAloneCreateElement").innerHTML=g.printMs(n.JSXAloneCreateElementT),document.getElementById("timings_JSXAloneRender").innerHTML=g.printMs(t)};Ja(De);if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=ea}else if(typeof define==="function"&&define.amd){define(function(){return ea})}})();