(function(e){function t(t){for(var s,r,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(s=!1)}s&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},o={app:0},a=[];function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"156e":function(e,t,n){"use strict";var s=n("d225"),o=n("b0b4"),a=function(){function e(){Object(s["a"])(this,e),this.order=!0,this.data=[]}return Object(o["a"])(e,[{key:"add",value:function(e){this.order?this.data.unshift(e):this.data.push(e)}},{key:"reset",value:function(){this.data.length=0}},{key:"get",value:function(){return this.data}}]),e}();t["a"]=new a},"199c":function(module,__webpack_exports__,__webpack_require__){"use strict";var _log__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("156e"),_lib_websocket__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("7cc5"),_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("f601");__webpack_exports__["a"]={name:"app",data:function(){return{serverAddr:_data__WEBPACK_IMPORTED_MODULE_2__["d"],options:_data__WEBPACK_IMPORTED_MODULE_2__["c"],handlerCode:_data__WEBPACK_IMPORTED_MODULE_2__["a"],messageCode:_data__WEBPACK_IMPORTED_MODULE_2__["b"],codeMirrorOptions:{theme:"monokai",lineNumbers:!0},websocketState:!1,timer:null,messageType:""}},mounted:function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?79ebee7c2d7b4f846381e56343757aff";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)},methods:{handlerConnect:function handlerConnect(){if(this.checkWebsocketState())this.$websocket.close();else{_log__WEBPACK_IMPORTED_MODULE_0__["a"].reset(),this.$websocket=new _lib_websocket__WEBPACK_IMPORTED_MODULE_1__["a"](this.serverAddr),this.$websocket.notify=this.notify,this.$websocket.log=this.log;var scopeFunc=function scopeFunc(code){return console.log(this),eval(code)};scopeFunc.bind(this.$websocket)(this.handlerCode),this.timer=setInterval(this.checkWebsocketState)}},handlerSent:function(){if("undefined"!==typeof this.$websocket)if(this.$websocket.closed())this.notify("websocket连接丢失","is-warning");else{var e=this.messageCode;switch(this.messageType){case"1":this.$websocket.text(e);break;case"2":this.$websocket.binary(e);break;default:this.notify("请选择消息的数据类型","is-warning");break}}else this.notify("websocket未初始化","is-warning")},handlerSelectValue:function(e){this.messageType=e},handlerAddr:function(e){this.serverAddr=e},checkWebsocketState:function(){return"undefined"!==typeof this.$websocket&&(this.$websocket.readyState()==WebSocket.OPEN?this.websocketState=!0:this.websocketState=!1,this.websocketState)},notify:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"is-success",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;this.$notify({group:"message",type:"message ".concat(t),text:e,duration:n})},log:function(e,t){_log__WEBPACK_IMPORTED_MODULE_0__["a"].add({isClient:t||!1,content:e})}},destroy:function(){clearInterval(this.timer)},computed:{connectText:function(){return this.websocketState?"断开":"连接"},connectStyle:function(){return this.websocketState?"is-danger":"is-success"},sentText:function(){return"发送消息"},sentStyle:function(){return"is-info"},handlerCodeOptions:function(){return Object.assign({mode:"javascript"},this.codeMirrorOptions)},messageCodeOptions:function(){return this.codeMirrorOptions},logData:function(){return _log__WEBPACK_IMPORTED_MODULE_0__["a"].get()}}}},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var s=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"hero"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"field has-addons"},[n("div",{staticClass:"control is-expanded"},[n("Input",{attrs:{type:"text",value:e.serverAddr},on:{onChange:e.handlerAddr}})],1),n("div",{staticClass:"control"},[n("Button",{attrs:{value:e.connectText,className:e.connectStyle},on:{onClick:e.handlerConnect}})],1)]),n("div",{staticClass:"field has-addons"},[n("div",{staticClass:"control is-expanded"},[n("Select",{attrs:{options:e.options},on:{onChange:e.handlerSelectValue}})],1),n("div",{staticClass:"control"},[n("Button",{attrs:{value:e.sentText,className:e.sentStyle},on:{onClick:e.handlerSent}})],1)])])])]),n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("label",{attrs:{for:"handler"}},[e._v("处理过程")]),n("codemirror",{attrs:{options:e.handlerCodeOptions},model:{value:e.handlerCode,callback:function(t){e.handlerCode=t},expression:"handlerCode"}})],1),n("div",{staticClass:"column"},[n("label",{attrs:{for:"message"}},[e._v("消息内容(body变量)")]),n("codemirror",{attrs:{options:e.messageCodeOptions},model:{value:e.messageCode,callback:function(t){e.messageCode=t},expression:"messageCode"}})],1)]),n("table",{staticClass:"table is-fullwidth is-hoverable"},[e._m(0),n("TodoList",{attrs:{data:e.logData}})],1)]),n("notifications",{attrs:{group:"message",width:300,"animation-name":"v-fade-left",position:"bottom left"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("article",{class:t.item.type},[n("div",{staticClass:"message-body",domProps:{innerHTML:e._s(t.item.text)}})])]}}])})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{staticStyle:{width:"240px"}},[e._v("时间 / 响应方")]),n("th",[e._v("内容")])])])}],r=n("199c"),i=r["a"],c=(n("5c0b"),n("2877")),l=Object(c["a"])(i,o,a,!1,null,null,null),u=l.exports,d=(n("92c6"),n("7f7f"),n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select is-fullwidth"},[n("select",{ref:"select",on:{change:e.onChange}},e._l(e.options,(function(t,s){return n("option",{key:s,attrs:{disabled:t.isDisabled},domProps:{value:t.value}},[e._v(e._s(t.text))])})),0)])}),f=[],h={name:"Select",props:{options:{type:Array,default:new Array}},created:function(){this.options.map((function(e,t){e.hasOwnProperty("value")||(e.value=""),e.hasOwnProperty("text")||(e.text=""),e.hasOwnProperty("isDisabled")||(e.isDisabled=!1)}))},methods:{onChange:function(){this.$emit("onChange",this.$refs.select.value)}}},p=h,_=Object(c["a"])(p,d,f,!1,null,null,null),v=_.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"checkbox"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.v,expression:"v"}],staticClass:"input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.v)?e._i(e.v,null)>-1:e.v},on:{change:[function(t){var n=e.v,s=t.target,o=!!s.checked;if(Array.isArray(n)){var a=null,r=e._i(n,a);s.checked?r<0&&(e.v=n.concat([a])):r>-1&&(e.v=n.slice(0,r).concat(n.slice(r+1)))}else e.v=o},e.onChange]}}):"radio"===e.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.v,expression:"v"}],staticClass:"input",attrs:{type:"radio"},domProps:{checked:e._q(e.v,null)},on:{change:[function(t){e.v=null},e.onChange]}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.v,expression:"v"}],staticClass:"input",attrs:{type:e.type},domProps:{value:e.v},on:{change:e.onChange,input:function(t){t.target.composing||(e.v=t.target.value)}}})},b=[],y={name:"Input",props:{type:{type:String,default:"text"},value:{type:String,default:""}},data:function(){return{v:this.value}},methods:{onChange:function(){this.$emit("onChange",this.v)}}},g=y,k=Object(c["a"])(g,m,b,!1,null,null,null),C=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{ref:"button",class:e.style,on:{click:e.onClick}},[e._v(e._s(e.value))])},O=[],E={name:"Button",props:{value:{type:String,default:"按钮"},className:{type:String,default:"is-success"}},created:function(){},methods:{onClick:function(){this.$emit("onClick")}},computed:{style:function(){return"button ".concat(this.className," is-rounded is-hovered")}}},x=E,S=Object(c["a"])(x,w,O,!1,null,null,null),P=S.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tbody",e._l(e.list,(function(e,t){return n("TodoItem",{key:t,attrs:{isClient:e.isClient,content:e.content}})})),1)},M=[],T={name:"TodoList",props:{data:{type:Array,default:new Array}},data:function(){return{list:this.data}}},A=T,$=Object(c["a"])(A,D,M,!1,null,null,null),j=$.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",{class:e.style},[n("td",[e._v(e._s(e.status))]),n("td",[e._v(e._s(e.content))])])},B=[],W=(n("a481"),{name:"TodoItem",props:{isClient:{type:Boolean,default:!1},content:{type:String,default:""}},methods:{now:function(){return(new Date).toLocaleString("zh-CN",{hour12:!1}).replace(/\//g,"-").replace(/\b\d\b/g,"0$&")}},computed:{style:function(){return this.isClient?"has-text-success":"has-text-danger"},status:function(){return"".concat(this.now()," / ").concat(this.isClient?"客户端":"服务端")}}}),I=W,N=Object(c["a"])(I,L,B,!1,null,null,null),U=N.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("codemirror",{attrs:{options:e.options},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)},R=[],q={name:"Codemirror",data:function(){return{}},props:{code:{type:String,default:""},options:{type:Object}}},F=q,z=Object(c["a"])(F,K,R,!1,null,null,null),J=z.exports,V=[v,C,P,J,j,U],H=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];V.forEach((function(t){e.component(t.name,t)}))},G=H,Q=n("c884"),X=n.n(Q),Y=(n("f9d4"),n("7a7a"),n("ee98")),Z=n.n(Y);s["default"].use(G),s["default"].use(X.a),s["default"].use(Z.a),s["default"].prototype.$websocket=void 0,s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var s=n("e332"),o=n.n(s);o.a},"7cc5":function(e,t,n){"use strict";n("7f7f"),n("7514");var s=n("d225"),o=n("b0b4");n("af56");function a(e){return String.fromCharCode.apply(null,new Uint16Array(e))}function r(e){for(var t=new ArrayBuffer(2*e.length),n=new Uint16Array(t),s=0,o=e.length;s<o;s++)n[s]=e.charCodeAt(s);return t}n.d(t,"a",(function(){return i}));var i=function(){function e(t){return Object(s["a"])(this,e),this.map={},this.init(t),this}return Object(o["a"])(e,[{key:"init",value:function(e){var t=this;this.conn=new WebSocket(e),this.on("disconnect",(function(e){t.notify("服务端主动断开连接","is-danger")})),this.on("error",(function(e){t.notify("websocket出现错误","is-danger")}))}},{key:"readyState",value:function(){return this.conn.readyState}},{key:"text",value:function(e){this.log(e,!0),this.conn.binaryType="blob",this.conn.send(e)}},{key:"binary",value:function(e){this.log(e,!0),this.conn.binaryType="arraybuffer",this.conn.send(r(e))}},{key:"on",value:function(e,t){var n=["connect","message","disconnect","error"].find((function(t){return t===e.toLocaleLowerCase()}));n&&this.listener(e,t)}},{key:"listener",value:function(e,t){var n=this[e](t);this.map.hasOwnProperty(n.name)&&this.conn.removeEventListener(n.name,this.map[n.name]),this.map[n.name]=n.listener,this.conn.addEventListener(n.name,n.listener)}},{key:"connect",value:function(e){var t=this;return{name:"open",listener:function(n){t.notify("websocket连接成功!","is-success"),e()}}}},{key:"message",value:function(e){var t=this;return{name:"message",listener:function(n){var s="arraybuffer"===t.conn.binaryType?a(n.data):n.data;t.log(s),e(s)}}}},{key:"disconnect",value:function(e){var t=this;return{name:"close",listener:function(n){t.notify("websocket断开连接","is-danger"),e(n)}}}},{key:"error",value:function(e){var t=this;return{name:"error",listener:function(n){t.notify("连接出现错误","is-danger"),e(n)}}}},{key:"close",value:function(){return this.readyState()===WebSocket.OPEN&&(this.conn.close(),!0)}},{key:"closed",value:function(){return this.readyState()===WebSocket.CLOSED}}]),e}()},e332:function(e,t,n){},f601:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var s="wss://server.websocket-online-test.flxxyz.com",o=[{text:"请选择消息数据类型"},{value:"1",text:"文本类型(text)",isDisabled:!1},{value:"2",text:"二进制类型(binary)",isDisabled:!1}],a="this.on('connect', () => {\n    this.text('快看，他在狂笑');\n});\n\nthis.on('message', res => {\n    console.log(`typeof res: ${typeof res}`);\n    console.log('服务端响应:', res);\n});\n\nthis.on('disconnect', err => {\n    console.log('服务端关闭:', err);\n});",r='{\n\tmessage: "不要回答!不要回答!不要回答!"\n}'}});
//# sourceMappingURL=app.2613240f.js.map