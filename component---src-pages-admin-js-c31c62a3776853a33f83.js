(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{UKki:function(e,t,r){e.exports={header:"header-module--header--XU27x",nav:"header-module--nav--3Kbi0",logo:"header-module--logo--VV_xb",menu:"header-module--menu--8uYaj",show:"header-module--show--183_u",navlink:"header-module--navlink--QeWSU",menuIcon:"header-module--menuIcon--16p1i"}},Ule8:function(e,t,r){},ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(j){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=b(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=c;var s={};function m(){}function d(){}function h(){}var f={};f[a]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(N([])));v&&v!==t&&r.call(v,a)&&(f=v);var g=h.prototype=m.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,l){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=g.constructor=h,h.constructor=d,d.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),E.prototype[o]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),l(g,i,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},mR1u:function(e,t,r){"use strict";r.r(t);var n=r("dI71"),a=r("q1tI"),o=r.n(a),i=r("orZN");function l(){var e=i.a+"/admin/getAllProducts";return Object(i.b)(e)}function c(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){c(o,n,a,i,l,"next",e)}function l(e){c(o,n,a,i,l,"throw",e)}i(void 0)}))}}r("p532");var s=r("o0o1"),m=r.n(s),d=(r("Wbzz"),r("rY4l")),h=(r("iSP7"),r("Ule8"),r("QLAq"));function f(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(e){function t(t){var r;return(r=e.call(this,t)||this).onSubmit=function(e){e.preventDefault();for(var t,n={},a=f(new FormData(e.target).entries());!(t=a()).done;){var o=t.value;n[o[0]]=o[1]}(0,r.props.onSubmit)(n)},r.onChange=function(e){var t;r.setState(((t={})[e.target.name]=e.target.value,t))},r.state={productId:null,farmerId:null,harvestTime:(new Date).toISOString().substr(0,16)},r}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,r=void 0===t||t,n=e.allFarmers,a=e.allProducts;if(n&&a||(r=!0),r)return o.a.createElement(h.a,null);var i=this.state,l=i.productId,c=i.farmerId,u=i.harvestTime,s=!(c&&l&&u);n=n.sort((function(e,t){return e.name.localeCompare(t.name)})),a=a.sort((function(e,t){return e.name.localeCompare(t.name)}));var m=n.find((function(e){return e.id==c})),d=a.find((function(e){return e.id==l}));return o.a.createElement("div",{className:"hform"},o.a.createElement("form",{id:"harvestform",className:"form_harvest",onSubmit:this.onSubmit},o.a.createElement("div",{className:"center middle"},o.a.createElement("div",{className:"row1",style:{width:"100%"}},o.a.createElement("label",{className:"space",htmlFor:"fid"},"Farmer"),o.a.createElement("select",{label:"id",id:"fid",name:"farmerId",required:!0,placeholder:"Select Farmer",onChange:this.onChange},o.a.createElement("option",null),n.map((function(e){return o.a.createElement("option",{key:e.id.toString(),value:e.id},e.name," - ",e.subregion)})))),o.a.createElement("div",{className:"p-10"},m&&o.a.createElement("div",{className:"flex middle"},o.a.createElement("img",{className:"avatar",src:m.image,alt:"farmer"}),o.a.createElement("div",{className:"p-10"},m.name," ",o.a.createElement("br",null),m.subregion,", ",m.region)))),o.a.createElement("div",{className:"center middle"},o.a.createElement("div",{className:"row2",style:{width:"100%"}},o.a.createElement("label",{className:"space",htmlFor:"fid"},"Product"),o.a.createElement("select",{label:"id",id:"fid",name:"productId",placeholder:"Select Product",required:!0,onChange:this.onChange},o.a.createElement("option",null),a.map((function(e){return o.a.createElement("option",{key:e.id.toString(),value:e.id},e.name)})))),o.a.createElement("div",{className:"p-10"},d&&o.a.createElement("div",{className:"flex middle"},o.a.createElement("img",{className:"avatar",src:d.image,alt:"product"}),o.a.createElement("div",{className:"p-10"},d.name," ",o.a.createElement("br",null),d.packSize)))),o.a.createElement("div",{className:"row2"},o.a.createElement("label",{className:"space",htmlFor:"htime"},"Harvest Time"),o.a.createElement("input",{type:"datetime-local",value:u,id:"htime",name:"harvestTime",required:!0,onChange:this.onChange})),o.a.createElement("button",{type:"submit",disabled:s},"Add Report")))},t}(a.Component),g=function(e){function t(t){var r;return(r=e.call(this,t)||this).componentDidMount=u(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(a=void 0,a=i.a+"/admin/getAllFarmers",Object(i.b)(a)).then((function(e){return e.data}));case 2:return t=e.sent,e.next=5,l().then((function(e){return e.data}));case 5:n=e.sent,r.setState({allFarmers:t,allProducts:n,loading:!1});case 7:case"end":return e.stop()}var a}),e)}))),r.onSubmit=function(e){r.setState({loading:!0}),function(e){var t=i.a+"/admin/addHarvestReport";return Object(i.c)(t,e)}({report:e}).then((function(e){console.log(e)})).catch((function(e){e.response&&400===e.repsonse.status&&alert(e.response.data)})).finally((function(){return r.setState({loading:!1})}))},r.state={report:null,loading:!0},r}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.state,t=e.loading,r=(e.report,e.allFarmers),n=e.allProducts;return t?o.a.createElement(h.a,null):o.a.createElement("div",null,o.a.createElement(d.a,null),o.a.createElement("div",{className:"harvest-section",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"15vh",width:"100%",fontFamily:"CircularStd"}},o.a.createElement("h1",{className:"harvest1"},"Add Harvest Report"),o.a.createElement(v,{allFarmers:r,allProducts:n,loading:t,onSubmit:this.onSubmit})))},t}(a.Component),y=(r("tT5x"),function(e){function t(t){var r;return(r=e.call(this,t)||this).handleSubmit=function(e){e.preventDefault();var t,n,a=r.state,o=a.email,l=a.password;(t={email:o,password:l},n=i.a+"/admin/auth/login",Object(i.c)(n,t)).then((function(e){var t=e.data["x-admin-token"];Object(i.d)(t),document.location.reload()})).catch((function(e){return alert("Invalid Username or Password")}))},r.handleChange=function(e){var t;r.setState(((t={})[e.target.name]=e.target.value,t))},r.state={email:"",password:""},r}return Object(n.a)(t,e),t.prototype.render=function(){var e,t=this.state,r=t.email,n=t.password;return o.a.createElement("div",{className:"mform"},o.a.createElement(d.a,null),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"main--form"},o.a.createElement("input",{type:"text",name:"email",label:"email",value:r,placeholder:"Enter Email",onChange:this.handleChange,required:!0}),o.a.createElement("input",((e={type:"password",name:"password",label:"password",value:n,onChange:this.handleChange,onKeyPress:this.handlePress,placeholder:"Enter Password"}).onChange=this.handleChange,e.required=!0,e)),o.a.createElement("button",{type:"submit"},"Submit"))))},t}(a.Component)),E=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={admin:null,error:null,loading:!0},r}Object(n.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e,t=this;(e=i.a+"/admin/auth/getAdmin",Object(i.b)(e)).then((function(e){t.setState({admin:e.data,loading:!1})})).catch((function(e){return t.setState({err:e,loading:!1})}))},r.render=function(){var e=this.state,t=e.admin,r=e.loading;return o.a.createElement(o.a.Fragment,null,r?o.a.createElement(h.a,null):o.a.createElement("div",{id:"admin"},t?o.a.createElement("div",null,o.a.createElement(g,null)):o.a.createElement("div",null,o.a.createElement(y,null))))},t}(o.a.Component);t.default=E},o0o1:function(e,t,r){e.exports=r("ls82")},rY4l:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("q1tI"),a=r.n(n),o=r("UKki"),i=r.n(o),l=r("Wbzz"),c=r("iSP7"),u=r.n(c);function s(){var e=Object(n.useState)(!1),t=e[0],r=e[1];return a.a.createElement("div",{className:i.a.header},a.a.createElement("div",{className:i.a.nav},a.a.createElement(l.Link,{to:"/",className:i.a.logo},a.a.createElement(u.a,null)),a.a.createElement("div",{className:i.a.menu},a.a.createElement("div",{className:i.a.navlink+" "+(t?i.a.show:" ")},a.a.createElement(l.Link,{to:"/Farmers"},"Our Farmers"),a.a.createElement(l.Link,{to:"/Blog"}," Blog"),a.a.createElement(l.Link,{to:"#footer"},"Contact")),a.a.createElement("div",{className:i.a.menuIcon,onClick:function(){r(!t)}},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null)))))}},tT5x:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-admin-js-c31c62a3776853a33f83.js.map