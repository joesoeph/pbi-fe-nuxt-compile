(window.webpackJsonp=window.webpackJsonp||[]).push([[33,49],{668:function(e,t,n){"use strict";var r=null;var l=null;function o(e,t){void 0===t&&(t={});var n=document.createElement(e);return Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function d(e,t,n){return(window.getComputedStyle(e,n||null)||{display:"none"})[t]}function c(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if("none"===d(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var h='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',_=0,style=null;function m(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=f.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){var n=e.offsetWidth,r=e.offsetHeight,l=new ResizeObserver((function(){(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==n||e.offsetHeight!==r))&&x(e)})),m=c(e),y=m.detached,C=m.rendered;e.__resize_observer_triggered__=!1===y&&!1===C,e.__resize_observer__=l,l.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){x(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(_||(style=function(e){var style=document.createElement("style");return style.styleSheet?style.styleSheet.cssText=e:style.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(style),style}(h)),function(e){var t=d(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};var n=o("div",{className:"resize-triggers"}),r=o("div",{className:"resize-expand-trigger"}),l=o("div"),c=o("div",{className:"resize-contract-trigger"});r.appendChild(l),n.appendChild(r),n.appendChild(c),e.appendChild(n),e.__resize_triggers__={triggers:n,expand:r,expandChild:l,contract:c},z(e),e.addEventListener("scroll",v,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=c(e).rendered,window.MutationObserver){var w=new MutationObserver(e.__resize_mutation_handler__);w.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=w}e.__resize_listeners__.push(t),_++}function f(){var e=c(this),t=e.rendered,n=e.detached;t!==this.__resize_rendered__&&(!n&&this.__resize_triggers__&&(z(this),this.addEventListener("scroll",v,!0)),this.__resize_rendered__=t,x(this))}function v(){var e,t,n=this;z(this),this.__resize_raf__&&(e=this.__resize_raf__,l||(l=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),l(e)),this.__resize_raf__=(t=function(){var e,t,r,l,o,d,c=(t=(e=n).__resize_last__,r=t.width,l=t.height,o=e.offsetWidth,d=e.offsetHeight,o!==r||d!==l?{width:o,height:d}:null);c&&(n.__resize_last__=c,x(n))},r||(r=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),r(t))}function x(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach((function(t){t.call(e,e)}))}function z(e){var t=e.__resize_triggers__,n=t.expand,r=t.expandChild,l=t.contract,o=l.scrollWidth,d=l.scrollHeight,c=n.offsetWidth,h=n.offsetHeight,_=n.scrollWidth,m=n.scrollHeight;l.scrollLeft=o,l.scrollTop=d,r.style.width=c+1+"px",r.style.height=h+1+"px",n.scrollLeft=_,n.scrollTop=m}var y={name:"vue-clamp",props:{tag:{type:String,default:"div"},autoresize:{type:Boolean,default:!1},maxLines:Number,maxHeight:[String,Number],ellipsis:{type:String,default:"…"},location:{type:String,default:"end",validator:function(e){return-1!==["start","middle","end"].indexOf(e)}},expanded:Boolean},data:function(){return{offset:null,text:this.getText(),localExpanded:!!this.expanded}},computed:{clampedText:function(){if("start"===this.location)return this.ellipsis+(this.text.slice(-this.offset)||"").trim();if("middle"===this.location){var e=Math.floor(this.offset/2);return(this.text.slice(0,e)||"").trim()+this.ellipsis+(this.text.slice(-e)||"").trim()}return(this.text.slice(0,this.offset)||"").trim()+this.ellipsis},isClamped:function(){return!!this.text&&this.offset!==this.text.length},realText:function(){return this.isClamped?this.clampedText:this.text},realMaxHeight:function(){if(this.localExpanded)return null;var e=this.maxHeight;return e?"number"==typeof e?e+"px":e:null}},watch:{expanded:function(e){this.localExpanded=e},localExpanded:function(e){e?this.clampAt(this.text.length):this.update(),this.expanded!==e&&this.$emit("update:expanded",e)},isClamped:{handler:function(e){var t=this;this.$nextTick((function(){return t.$emit("clampchange",e)}))},immediate:!0}},mounted:function(){this.init(),this.$watch((function(e){return[e.maxLines,e.maxHeight,e.ellipsis,e.isClamped,e.location].join()}),this.update),this.$watch((function(e){return[e.tag,e.text,e.autoresize].join()}),this.init)},updated:function(){this.text=this.getText(),this.applyChange()},beforeDestroy:function(){this.cleanUp()},methods:{init:function(){var i=this;this.$slots.default&&(this.offset=this.text.length,this.cleanUp(),this.autoresize&&(m(this.$el,this.update),this.unregisterResizeCallback=function(){!function(e,t){var n=e.__resize_listeners__;if(n){if(t&&n.splice(n.indexOf(t),1),!n.length||!t){if(e.detachEvent&&e.removeEventListener)return e.detachEvent("onresize",e.__resize_legacy_resize_handler__),void document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",v),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--_&&style&&style.parentNode.removeChild(style)}}(i.$el,i.update)}),this.update())},update:function(){this.localExpanded||(this.applyChange(),(this.isOverflow()||this.isClamped)&&this.search())},expand:function(){this.localExpanded=!0},collapse:function(){this.localExpanded=!1},toggle:function(){this.localExpanded=!this.localExpanded},getLines:function(){return Object.keys(Array.prototype.slice.call(this.$refs.content.getClientRects()).reduce((function(e,t){var i=t.top+"/"+t.bottom;return e[i]||(e[i]=!0),e}),{})).length},isOverflow:function(){return!!((this.maxLines||this.maxHeight)&&(this.maxLines&&this.getLines()>this.maxLines||this.maxHeight&&this.$el.scrollHeight>this.$el.offsetHeight))},getText:function(){var e=(this.$slots.default||[]).filter((function(e){return!e.tag&&!e.isComment}))[0];return e?e.text.trim():""},moveEdge:function(e){this.clampAt(this.offset+e)},clampAt:function(e){this.offset=e,this.applyChange()},applyChange:function(){this.$refs.text.textContent=this.realText},stepToFit:function(){this.fill(),this.clamp()},fill:function(){for(;(!this.isOverflow()||this.getLines()<2)&&this.offset<this.text.length;)this.moveEdge(1)},clamp:function(){for(;this.isOverflow()&&this.getLines()>1&&this.offset>0;)this.moveEdge(-1)},search:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var i=e[0];void 0===i&&(i=0);var s=e[1];if(void 0===s&&(s=this.offset),s-i<=3)this.stepToFit();else{var n=Math.floor((s+i)/2);this.clampAt(n),this.isOverflow()?this.search(i,n):this.search(n,s)}},cleanUp:function(){this.unregisterResizeCallback&&this.unregisterResizeCallback()}},render:function(e){var t=[e("span",this.$isServer?{}:{ref:"text",attrs:{"aria-label":this.text.trim()}},this.$isServer?this.text:this.realText)],i={expand:this.expand,collapse:this.collapse,toggle:this.toggle,clamped:this.isClamped,expanded:this.localExpanded},s=this.$scopedSlots.before?this.$scopedSlots.before(i):this.$slots.before;s&&t.unshift.apply(t,Array.isArray(s)?s:[s]);var n=this.$scopedSlots.after?this.$scopedSlots.after(i):this.$slots.after;n&&t.push.apply(t,Array.isArray(n)?n:[n]);var a=[e("span",{style:{boxShadow:"transparent 0 0"},ref:"content"},t)];return e(this.tag,{style:{maxHeight:this.realMaxHeight,overflow:"hidden"}},a)}};t.a=y},674:function(e,t,n){"use strict";n.r(t);var r=n(108),l=n(130),o=n(141),d=n(195),c=n(293),h=n(95),_=(n(48),{components:{VClamp:n(668).a},props:{featuredImage:{type:String,required:!0},slug:{type:String,required:!0},title:{type:String,required:!0},content:{type:String,default:""},fullname:{type:String,required:!0},username:{type:String,required:!0},categoryName:{type:String,default:""},categorySlug:{type:String,required:!0},readCount:{type:String,required:!0},publishedAt:{type:String,required:!0},size:{type:String,default:"small",validator:function(e){return["small","medium","large"].includes(e)}},middle:{type:Boolean,default:!1},circle:{type:Boolean,default:!1}},data:function(){return{imageWidth:"100px",imageHeight:"100px"}},mounted:function(){"small"===this.size?(this.imageWidth="100px",this.imageHeight="100px"):"medium"===this.size?(this.imageWidth="220px",this.imageHeight="220px"):(this.imageWidth="520px",this.imageHeight="250px")}}),m=n(28),component=Object(m.a)(_,(function(){var e=this,t=e._self._c;return e.isMobile&&"large"===e.size?t(l.a,{directives:[{def:h.a,name:"ripple",rawName:"v-ripple"}],staticClass:"d-flex flex-column pa-0 pointer",attrs:{elevation:"0",to:e.slug}},[t(d.a,{staticClass:"rounded-xl",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:e.featuredImage,height:"200px"}}),e._v(" "),t("div",{staticClass:"d-flex flex-column mt-4",class:{"flex-grow-1":!e.middle,"justify-center":e.middle}},[t("div",{staticClass:"d-flex align-center"},[e.fullname.length>0?[t(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:e.username}},[t("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[e._v("\n            "+e._s(e.fullname)+"\n          ")])]),e._v(" "),t("div",{staticClass:"mx-2",staticStyle:{"border-left":"1px solid #607d8b",height:"10px"}})]:e._e(),e._v(" "),t(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:e.categorySlug}},[t("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[e._v("\n          "+e._s(e.categoryName)+"\n        ")])])],2),e._v(" "),t("div",{staticClass:"d-flex flex-column",class:{"flex-grow-1":!e.middle}},[t("div",{staticClass:"font-weight-medium",class:{"text-body-1":"small"===e.size,headline:"small"!==e.size}},[t("v-clamp",{attrs:{autoresize:"","max-lines":2}},[e._v("\n          "+e._s(e.title)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"text--secondary",class:{"mt-2":e.content.length>0,caption:"small"===e.size,"text-boody-1":"small"!==e.size}},[t("v-clamp",{attrs:{autoresize:"","max-lines":3}},[e._v("\n          "+e._s(e.content)+"\n        ")])],1)]),e._v(" "),e.middle?e._e():t(c.a),e._v(" "),t("div",{staticClass:"d-flex mt-4"},[t(r.a,{staticClass:"pa-0",attrs:{text:"",disabled:"",small:""}},[t(o.a,{attrs:{left:"",small:""}},[e._v("mdi-eye")]),e._v("\n        "+e._s(e.readCount)+"\n      ")],1),e._v(" "),t(r.a,{staticClass:"pa-0 ml-4 text-lowercase",attrs:{text:"",disabled:"",small:""}},[t(o.a,{attrs:{left:"",small:""}},[e._v("mdi-clock")]),e._v("\n        "+e._s(e.publishedAt)+"\n      ")],1)],1)],1)],1):t(l.a,{directives:[{def:h.a,name:"ripple",rawName:"v-ripple"}],staticClass:"d-flex pa-0 pointer",attrs:{elevation:"0",to:e.slug}},[e.circle?t(d.a,{staticClass:"rounded-circle",attrs:{"lazy-src":"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"60px",width:"60px","max-height":"60px","max-width":"60px"}}):t(d.a,{staticClass:"rounded-xl",attrs:{"lazy-src":"https://picsum.photos/id/11/10/6",src:e.featuredImage,height:e.imageHeight,width:e.imageWidth,"max-height":e.imageHeight,"max-width":e.imageWidth}}),e._v(" "),t("div",{staticClass:"d-flex flex-column pl-4",class:{"flex-grow-1":!e.middle,"justify-center":e.middle}},[t("div",{staticClass:"d-flex align-center"},[e.fullname.length>0?t(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:e.username}},[t("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[e._v("\n          "+e._s(e.fullname)+"\n        ")])]):e._e(),e._v(" "),e.fullname.length>0&&e.categoryName.length>0?t("div",{staticClass:"mx-2",staticStyle:{"border-left":"1px solid #607d8b",height:"10px"}}):e._e(),e._v(" "),e.categoryName.length>0?t(r.a,{staticClass:"pa-0",attrs:{text:"",small:"",to:e.categorySlug}},[t("span",{staticClass:"text-capitalize light-green--text text--darken-3"},[e._v("\n          "+e._s(e.categoryName)+"\n        ")])]):e._e()],1),e._v(" "),t("div",{staticClass:"d-flex flex-column",class:{"flex-grow-1":!e.middle}},[t("div",{staticClass:"font-weight-medium",class:{"text-body-1":"small"===e.size,headline:"small"!==e.size}},[t("v-clamp",{attrs:{autoresize:"","max-lines":2}},[e._v("\n          "+e._s(e.title)+"\n        ")])],1),e._v(" "),t("div",{staticClass:"text--secondary",class:{"mt-2":e.content.length>0,caption:"small"===e.size,"text-boody-1":"small"!==e.size}},[t("v-clamp",{attrs:{autoresize:"","max-lines":3}},[e._v("\n          "+e._s(e.content)+"\n        ")])],1)]),e._v(" "),e.middle?e._e():t(c.a),e._v(" "),t("div",{staticClass:"d-flex",class:{"mt-2":e.content.length>0,"mt-4":e.middle}},[t(r.a,{staticClass:"pa-0",attrs:{text:"",disabled:"",small:""}},[t(o.a,{attrs:{left:"",small:""}},[e._v("mdi-eye")]),e._v("\n        "+e._s(e.readCount)+"\n      ")],1),e._v(" "),t(r.a,{staticClass:"pa-0 ml-4 text-lowercase",attrs:{text:"",disabled:"",small:""}},[t(o.a,{attrs:{left:"",small:""}},[e._v("mdi-clock")]),e._v("\n        "+e._s(e.publishedAt)+"\n      ")],1)],1)],1),e._v(" "),e._t("button-groups"),e._v(" "),e._t("menu")],2)}),[],!1,null,null,null);t.default=component.exports},741:function(e,t,n){"use strict";n.r(t);var r=n(108),l=n(130),o=n(101),d=n(294),c=n(141),h=n(279),_=n(185),m=n(40),f=n(649),v=n(293),x=(n(423),n(47)),z=(n(142),n(29),n(199),{props:{tabindex:{type:Number,required:!0},item:{type:Object,required:!0}},data:function(){return{listMenu:[{title:"Preview",link:"/gerakanku/tulisan/_judul_/preview"},{title:"Edit",link:"/gerakanku/tulisan/_judul_/edit"},{title:"Delete"}],dialog:{delete:!1,note:!1}}},mounted:function(){this.handlerConditionalListMenu()},methods:{handlerConditionalListMenu:function(){this.listMenu=[{title:"Preview",link:"/gerakanku/tulisan/"+this.item.articleId+"/preview"},{title:"Edit",link:"/gerakanku/tulisan/"+this.item.articleId+"/edit"},{title:"Delete"}],3===this.tabindex&&(this.listMenu=this.listMenu.splice(-3,2)),2===this.tabindex&&(this.listMenu=this.listMenu.splice(-3,1))},handlerDelete:function(e){var t=this;return Object(x.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.dialog.delete=!1,n.prev=1,n.next=4,t.$axios.$delete("/api/v1/article/delete",{params:{id:e}});case 4:r=n.sent,t.$toast.success(r.result.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),t.$toast.error("Gagal menghapus tulisan",{duration:5e3});case 11:t.$router.go(t.$router.currentRoute);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()},handlerSeeNote:function(){alert("See Note")}}}),y=n(28),component=Object(y.a)(z,(function(){var e=this,t=e._self._c;return t("div",[t("BaseArticleCardItem",e._b({staticStyle:{border:"thin solid #e0e0e0","border-radius":"1rem",padding:"1rem !important"},attrs:{"published-at":0===e.tabindex?e.item.publishedAt:"n/a"},scopedSlots:e._u([0!==e.tabindex?{key:"menu",fn:function(){return[3===e.tabindex?t(r.a,{staticClass:"align-self-start",attrs:{color:"light-green",icon:""},nativeOn:{click:function(t){t.stopPropagation(),t.preventDefault(),e.dialog.note=!0}}},[t(c.a,[e._v("mdi-note-text-outline")])],1):e._e(),e._v(" "),t(f.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,o=n.attrs;return[t(r.a,e._g(e._b({staticClass:"align-self-start",attrs:{color:"light-green",icon:""},nativeOn:{click:function(e){e.stopPropagation(),e.preventDefault()}}},"v-btn",o,!1),l),[t(c.a,[e._v("mdi-dots-vertical")])],1)]}}],null,!1,1565043574)},[e._v(" "),t(h.a,[e._l(e.listMenu,(function(menu,i){return[menu.link?t(_.a,{key:i,attrs:{nuxt:"",to:menu.link}},[t(m.c,[e._v(e._s(menu.title))])],1):t(_.a,{key:i,on:{click:function(t){e.dialog.delete=!0}}},[t(m.c,[e._v("Delete")])],1)]}))],2)],1)]},proxy:!0}:null],null,!0)},"BaseArticleCardItem",e.item,!1)),e._v(" "),t(d.a,{attrs:{"max-width":"500px"},model:{value:e.dialog.delete,callback:function(t){e.$set(e.dialog,"delete",t)},expression:"dialog.delete"}},[t(l.a,[t(o.d,{staticClass:"text-h5"},[e._v("\n        Yakin mau hapus tulisan ini?\n      ")]),e._v(" "),t(o.c,[e._v("\n        Data yang sudah dihapus tidak dapat dikembalikan.\n      ")]),e._v(" "),t(o.a,[t(v.a),e._v(" "),t(r.a,{attrs:{color:"red",text:""},on:{click:function(t){return e.handlerDelete(e.item.articleId)}}},[e._v("\n          Lanjut Hapus\n        ")]),e._v(" "),t(r.a,{attrs:{text:""},on:{click:function(t){e.dialog.delete=!1}}},[e._v(" Batal ")])],1)],1)],1),e._v(" "),t(d.a,{attrs:{"max-width":"500px"},model:{value:e.dialog.note,callback:function(t){e.$set(e.dialog,"note",t)},expression:"dialog.note"}},[t(l.a,[t(o.d,{staticClass:"text-h5"},[e._v(" Catatan Revisi ")]),e._v(" "),t(o.c,[e._v("\n        "+e._s(e.item.notes)+"\n      ")]),e._v(" "),t(o.a,[t(v.a),e._v(" "),t(r.a,{attrs:{text:""},on:{click:function(t){e.dialog.note=!1}}},[e._v(" Tutup ")]),e._v(" "),t(r.a,{attrs:{color:"light-green darken-3",dark:"",to:"/gerakanku/tulisan/".concat(e.item.articleId,"/edit"),nuxt:""}},[e._v("\n          Perbaiki\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseArticleCardItem:n(674).default})}}]);