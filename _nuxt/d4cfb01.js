(window.webpackJsonp=window.webpackJsonp||[]).push([[120,53],{675:function(t,e,n){"use strict";n.r(e);var o=n(130),r=n(28),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"d-flex flex-column justify-center align-center",attrs:{outlined:""}},[e("img",{attrs:{src:"/no-data.png",height:"100px","max-height":"100px"}}),t._v(" "),e("p",{staticClass:"text--secondary caption"},[t._v("No data :(")])])}),[],!1,null,null,null);e.default=component.exports},926:function(t,e,n){"use strict";n.r(e);var o=n(108),r=n(130),l=n(101),c=n(420),d=n(850),m=n(667),f=n(141),v=n(419),h=n(710),k=n(200),_=n(641),x=(n(45),n(11)),y=n(33),L=n(47),C=(n(142),n(7),n(54),n(57),n(12),n(14),n(85),n(74),n(114),n(13),n(298)),w=n(799),S=n.n(w),U={components:{TiptapVuetify:C.o,draggable:S.a},layout:"dashboard",middleware:["auth"],data:function(){return{extensions:[C.g,C.a,C.j,C.q,C.n,C.i,C.k,C.c,C.l,[C.f,{options:{levels:[2,3]}}],C.b,C.j,C.h,C.m,C.e],title:null,content:"<blockquote>Berikan sinopsis singkat untuk komik yang akan Anda publikasikan. Minimal 10 kata. Lebih informatif, lebih baik.</blockquote>",categories:[],categorySelected:0,tags:null,bookTitle:null,bookAuthor:null,bookPage:null,bookPublisher:null,stateUpload:{pathField:{name:"path",value:"artikel"},fileField:{name:"picture",value:""},uploadPercentage:0,response:null},imageRules:[function(t){return!t||t.size<2e6||"Image size should be less than 2 MB!"}],uploadList:[]}},fetch:function(){var t=this;return Object(L.a)(regeneratorRuntime.mark((function e(){var n,o,r,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.articleId=t.$route.params.slug,e.next=3,Promise.all([t.$axios.$get("/api/v1/general/articlecategory?group=comic"),t.$axios.$get("/api/v1/article/detail",{params:{id:t.articleId,action:"edit"}})]);case 3:n=e.sent,o=Object(y.a)(n,2),r=o[0],l=o[1],r.result&&r.result.data.forEach((function(e){t.categories.push({value:e.CategoryId,text:e.CategoryName})})),t.categories=t.categories.filter((function(e){return"Komunika"!==e.text&&(100!==t.$auth.user.UserId||1!==t.$auth.user.UserId)})),l.result&&(d=null===(c=l.result.data.ComicGalleries)||void 0===c?void 0:c.map((function(t){return t.Image})),t.uploadList=d),t.setFormEdit(l.result);case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Edit Komik - pustakabergerak.id"}},watch:{uploadList:function(t){localStorage.setItem("uploadListLocalStorage__editForm",JSON.stringify(t))}},mounted:function(){this.setUploadListFromLocalStorage()},methods:{setFormEdit:function(t){this.title=t.data.Title,this.content=t.data.Content,this.categorySelected=t.data.CategoryId,this.tags=t.data.Hashtag?t.data.Hashtag.split(","):[];var e=t.data.ComicGalleries.map((function(t){return{name:t.Image}}));this.uploadList=e},setUploadListFromLocalStorage:function(){var t=localStorage.getItem("uploadListLocalStorage__editForm");null!==t&&(this.uploadList=JSON.parse(t))},upload:function(t){var e=this;return Object(L.a)(regeneratorRuntime.mark((function n(){var o,r,l,c,d,m,element;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.stateUpload.fileField.value=t.target.files[0],e.stateUpload.uploadPercentage=0,(o=new FormData).append(e.stateUpload.fileField.name,e.stateUpload.fileField.value),e.stateUpload.pathField.value&&o.append(e.stateUpload.pathField.name,e.stateUpload.pathField.value),r={headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){e.stateUpload.uploadPercentage=Math.round(100*t.loaded/t.total)}},n.prev=6,n.next=9,e.$axios.post("".concat("https://sanbox-uploader.pustakabergerak.id","/api/upload"),o,r);case 9:200===(l=n.sent).status&&(e.stateUpload.response=l.data,e.$toast.success("Upload Success"),e.uploadList.push({name:l.data.picture.name}),localStorage.setItem("uploadListLocalStorage__editForm",JSON.stringify(e.uploadList))),n.next=18;break;case 13:for(n.prev=13,n.t0=n.catch(6),c=n.t0.response.data.errors.picture,d=n.t0.response.data.message,m=0;m<c.length;m++)element=c[m],e.$toast.error(d+" "+element,{duration:1e4});case 18:e.stateUpload.uploadPercentage=0;case 19:case"end":return n.stop()}}),n,null,[[6,13]])})))()},submit:function(t){var e=this;return Object(L.a)(regeneratorRuntime.mark((function n(){var o,r,l,c,d,m,f,v,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return[],c=e.uploadList.map((function(t){return t.name})),d={title:e.title,content:e.content,category:e.categorySelected,tag:null===(o=e.tags)||void 0===o?void 0:o.join(",").toString(),status:t,cover:null!==(r=null===(l=e.uploadList[0])||void 0===l?void 0:l.name)&&void 0!==r?r:null,type:"comic",comic_galleries:c},n.prev=3,n.next=6,e.$axios.$post("/api/v1/article/store?id=".concat(e.articleId),d);case 6:if((m=n.sent).status)e.$toast.success("komik berhasil ditambahkan ke dalam ".concat(t)),"Draft"===t&&e.$router.push("/gerakanku/komik/".concat(m.result.data,"/edit")),"Review"===t&&e.$router.push("/gerakanku/komik");else if("object"===Object(x.a)(m.error))for(f=0,v=Object.keys(m.error);f<v.length;f++)h=v[f],e.$toast.error(m.error[h]);else e.$toast.error(m.error);n.next=13;break;case 10:n.prev=10,n.t0=n.catch(3),e.$toast.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[3,10]])})))()},handlerDeleteUploadList:function(t){var e=this.uploadList.filter((function(e){return e.name!==t}));this.uploadList=e}}},F=n(28),component=Object(F.a)(U,(function(){var t=this,e=t._self._c;return e(v.a,[e(c.a,{attrs:{cols:"12"}},[e(r.a,{staticClass:"pa-4",attrs:{outlined:"",rounded:"xl"}},[e(l.d,[t._v(" Edit Komik ")]),t._v(" "),e(m.a,[e(v.a,[e(c.a,{attrs:{cols:"8"}},[e(k.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Judul"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),e(c.a,{attrs:{cols:"4"}},[e(h.a,{staticClass:"pa-0 ma-0 rounded-lg",attrs:{color:"light-green darken-3",type:"text",outlined:"",label:"Kategori Komik",items:t.categories},model:{value:t.categorySelected,callback:function(e){t.categorySelected=e},expression:"categorySelected"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12"}},[e("ClientOnly",{scopedSlots:t._u([{key:"placeholder",fn:function(){return[t._v(" Loading... ")]},proxy:!0}])},[e("tiptap-vuetify",{attrs:{extensions:t.extensions},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12"}},[e(d.a,{staticClass:"rounded-lg",attrs:{label:"Hashtag (tanpa #)",multiple:"",outlined:"","deletable-chips":"","small-chips":"",color:"light-green darken-3"},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12"}},[e("h4",{staticClass:"font-weight-bold"},[t._v("Upload & Atur File Komik")]),t._v(" "),e("p",{staticClass:"mb-4 text-caption"},[t._v("\n              Gambar pertama akan dijadikan sampul\n            ")]),t._v(" "),e("p",{staticClass:"text-right text-caption font-weight-medium"},[t._v("\n              "+t._s(t.uploadList.length)+" File(s)\n            ")]),t._v(" "),0===t.uploadList.length?e("BaseEmptyState"):e("draggable",{on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}},model:{value:t.uploadList,callback:function(e){t.uploadList=e},expression:"uploadList"}},t._l(t.uploadList,(function(element,n){return e(r.a,{key:n,staticClass:"pa-4 mb-2 tw-cursor-move"},[e("div",{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"d-flex align-center"},[e(f.a,{staticClass:"mr-4"},[t._v("mdi-drag-horizontal-variant")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n                      "+t._s(element.name)+"\n                    ")])],1),t._v(" "),e("div",[e(_.a,{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{fab:"",small:"",elevation:"0"},on:{click:function(e){return t.handlerDeleteUploadList(element.name)}}},"v-btn",l,!1),r),[e(f.a,{attrs:{color:"red "}},[t._v(" mdi-delete ")])],1)]}}],null,!0)},[t._v(" "),e("span",[t._v("Hapus")])])],1)])])})),1),t._v(" "),e("p",{staticClass:"text-right mt-6 text-caption font-weight-medium"},[t._v("\n              "+t._s(t.uploadList.length)+" File(s)\n            ")]),t._v(" "),e("input",{ref:"file",staticClass:"d-none",attrs:{type:"file"},on:{change:t.upload}}),t._v(" "),e(o.a,{staticClass:"mt-8",attrs:{block:"",loading:0!==t.stateUpload.uploadPercentage},on:{click:function(e){return t.$refs.file.click()}}},[e(f.a,[t._v("mdi-plus")]),t._v(" Tambah Gambar\n            ")],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12"}},[e("div",{staticClass:"tw-flex tw-justify-between"},[e(o.a,{attrs:{to:"/gerakanku/komik",nuxt:""}},[t._v("Kembali")]),t._v(" "),e("div",{staticClass:"tw-flex tw-space-x-2"},[e(o.a,{on:{click:function(e){return t.submit("Draft")}}},[e(f.a,{attrs:{left:""}},[t._v("mdi-file")]),t._v("\n                  Simpan ke draft\n                ")],1),t._v(" "),e(o.a,{attrs:{color:"light-green darken-3",dark:""},on:{click:function(e){return t.submit("Review")}}},[e(f.a,{attrs:{left:""}},[t._v("mdi-send")]),t._v("\n                  Publikasikan\n                ")],1)],1)],1)])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseEmptyState:n(675).default})}}]);