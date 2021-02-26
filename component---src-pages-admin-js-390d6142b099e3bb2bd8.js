(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7FdQ":function(t,e,r){"use strict";r.r(e);var n=r("dI71"),a=r("q1tI"),o=r.n(a),i=r("orZN");function l(){var t=i.a+"/admin/getAllProducts";return Object(i.b)(t)}function c(t){var e=i.a+"/admin/auth/login";return Object(i.c)(e,t)}r("p532");var u=r("o0o1"),s=r.n(u);r("ls82");function d(t,e,r,n,a,o,i){try{var l=t[o](i),c=l.value}catch(u){return void r(u)}l.done?e(c):Promise.resolve(c).then(n,a)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){d(o,n,a,i,l,"next",t)}function l(t){d(o,n,a,i,l,"throw",t)}i(void 0)}))}}r("Wbzz");var f=r("rY4l"),h=(r("iSP7"),r("Ule8"),r("QLAq"));function p(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var y=function(t){function e(e){var r;return(r=t.call(this,e)||this).onSubmit=function(t){t.preventDefault();for(var e,n={},a=p(new FormData(t.target).entries());!(e=a()).done;){var o=e.value;n[o[0]]=o[1]}(0,r.props.onSubmit)(n)},r.onChange=function(t){var e;r.setState(((e={})[t.target.name]=t.target.value,e))},r.state={productId:null,farmerId:null,harvestTime:null},r}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.props,e=t.loading,r=void 0===e||e,n=t.allFarmers,a=t.allProducts;if(n&&a||(r=!0),r)return o.a.createElement(h.a,null);var i=this.state,l=i.productId,c=i.farmerId,u=i.harvestTime;console.log(c,l,u);var s=!(c&&l&&u),d=n.find((function(t){return t.id==c})),m=a.find((function(t){return t.id==l}));return console.log(d,m),o.a.createElement("div",{className:"hform"},o.a.createElement("form",{id:"harvestform",className:"form_harvest",onSubmit:this.onSubmit},o.a.createElement("div",{className:"flex center middle"},o.a.createElement("div",{className:"row1",style:{width:"100%"}},o.a.createElement("label",{className:"space",htmlFor:"fid"},"Farmer"),o.a.createElement("select",{label:"id",id:"fid",name:"farmerId",required:!0,placeholder:"Select Farmer",onChange:this.onChange},o.a.createElement("option",null),n.map((function(t){return o.a.createElement("option",{key:t.id.toString(),value:t.id},t.name)}))))),o.a.createElement("div",{className:"flex center middle"},o.a.createElement("div",{className:"row2",style:{width:"100%"}},o.a.createElement("label",{className:"space",htmlFor:"fid"},"Product"),o.a.createElement("select",{label:"id",id:"fid",name:"productId",placeholder:"Select Product",required:!0,onChange:this.onChange},o.a.createElement("option",null),a.map((function(t){return o.a.createElement("option",{key:t.id.toString(),value:t.id},t.name)}))))),o.a.createElement("div",{className:"row2"},o.a.createElement("label",{className:"space",htmlFor:"htime"},"Harvest Time"),o.a.createElement("input",{type:"datetime-local",id:"htime",name:"harvestTime",required:!0,onChange:this.onChange})),o.a.createElement("button",{type:"submit",disabled:s},"Add Report")))},e}(a.Component),g=function(t){function e(e){var r;return(r=t.call(this,e)||this).componentDidMount=m(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(a=void 0,a=i.a+"/admin/getAllFarmers",Object(i.b)(a)).then((function(t){return t.data}));case 2:return e=t.sent,t.next=5,l().then((function(t){return t.data}));case 5:n=t.sent,r.setState({allFarmers:e,allProducts:n,loading:!1});case 7:case"end":return t.stop()}var a}),t)}))),r.onSubmit=function(t){r.setState({loading:!0}),function(t){var e=i.a+"/admin/addHarvestReport";return Object(i.c)(e,t)}({report:t}).then((function(t){console.log(t)})).catch((function(t){t.response&&400===t.repsonse.status&&alert(t.response.data)})).finally((function(){return r.setState({loading:!1})}))},r.state={report:null,loading:!0},r}return Object(n.a)(e,t),e.prototype.render=function(){var t=this.state,e=t.loading,r=(t.report,t.allFarmers),n=t.allProducts;return e?o.a.createElement(h.a,null):o.a.createElement("div",null,o.a.createElement(f.a,null),o.a.createElement("div",{className:"harvest-section",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:"15vh",width:"100%",fontFamily:"CircularStd"}},o.a.createElement("h1",{className:"harvest1"},"Add Harvest Report"),o.a.createElement(y,{allFarmers:r,allProducts:n,loading:e,onSubmit:this.onSubmit})))},e}(a.Component),w=(r("tT5x"),function(t){function e(){for(var e,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))||this).state={email:"",password:""},e.handleSubmit=function(){var t=e.state;c({email:t.email,password:t.password}).then((function(t){var e=t.data["x-admin-token"];Object(i.d)(e),document.location.reload(),document.location.replace("/Admin")})).catch((function(t){return alert("Invalid Username or Password")}))},e.handleChange=function(t){var r;e.setState(((r={})[t.target.name]=t.target.value,r))},e.handlePress=function(t){if("Enter"===t.key){var r=e.state;c({email:r.email,password:r.password}).then((function(t){var e=t.data["x-admin-token"];Object(i.d)(e),document.location.reload(),document.location.replace("/Admin")})).catch((function(t){return alert("Invalid Username or Password")}))}},e}return Object(n.a)(e,t),e.prototype.render=function(){var t,e=this,r=this.state,n=r.email,a=r.password;return o.a.createElement("div",{className:"mform"},o.a.createElement(f.a,null),o.a.createElement("div",{className:"main--form"},o.a.createElement("input",{type:"text",name:"email",label:"email",value:n,placeholder:"Enter Email",onChange:function(t){return e.setState({email:t.target.value})}}),o.a.createElement("input",((t={type:"password",name:"password",label:"password",value:a,onChange:this.handleChange,onKeyPress:this.handlePress,placeholder:"Enter Password"}).onChange=function(t){return e.setState({password:t.target.value})},t)),o.a.createElement("button",{onClick:this.handleSubmit},"Submit")))},e}(a.Component)),E=function(t){function e(e){var r;return(r=t.call(this,e)||this).state={admin:null,error:null,loading:!0},r}Object(n.a)(e,t);var r=e.prototype;return r.componentDidMount=function(){var t,e=this;(t=i.a+"/admin/auth/getAdmin",Object(i.b)(t)).then((function(t){e.setState({admin:t.data,loading:!1})})).catch((function(t){return e.setState({err:t,loading:!1})}))},r.render=function(){var t=this.state,e=t.admin,r=t.loading;return o.a.createElement(o.a.Fragment,null,r?o.a.createElement(h.a,null):o.a.createElement("div",{id:"admin"},e?o.a.createElement("div",null,o.a.createElement(g,null)):o.a.createElement("div",null,o.a.createElement(w,null))))},e}(o.a.Component);e.default=E},Ule8:function(t,e,r){},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new S(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=c;var s={};function d(){}function m(){}function f(){}var h={};h[a]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(L([])));v&&v!==e&&r.call(v,a)&&(h=v);var y=f.prototype=d.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,l){var c=u(t[a],t,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,l)}))}l(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=y.constructor=f,f.constructor=m,m.displayName=l(f,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,l(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(c(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),l(y,i,"Generator"),y[a]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},o0o1:function(t,e,r){t.exports=r("ls82")},rY4l:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("q1tI"),a=r.n(n),o=r("UKki"),i=r.n(o),l=r("Wbzz"),c=r("iSP7"),u=r.n(c);function s(){var t=Object(n.useState)(!1),e=t[0],r=t[1];return a.a.createElement("div",{className:i.a.header},a.a.createElement("div",{className:i.a.nav},a.a.createElement(l.Link,{to:"/",className:i.a.logo},a.a.createElement(u.a,null)),a.a.createElement("div",{className:i.a.menu},a.a.createElement("div",{className:i.a.navlink+" "+(e?i.a.show:" ")},a.a.createElement(l.Link,{to:"/Farmers"},"Our Farmers"),a.a.createElement(l.Link,{to:"/Stories"},"Our Blogs"),a.a.createElement(l.Link,{to:"#footer"},"Contact")),a.a.createElement("div",{className:i.a.menuIcon,onClick:function(){r(!e)}},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null)))))}},tT5x:function(t,e,r){}}]);
//# sourceMappingURL=component---src-pages-admin-js-390d6142b099e3bb2bd8.js.map