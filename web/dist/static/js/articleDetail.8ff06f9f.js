(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["articleDetail"],{"1c1e":function(t,e,a){"use strict";var i=a("9175"),r=a.n(i);r.a},"4a92":function(t,e,a){},"54f1":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"sidebar"},[t.advertiseList&&t.advertiseList.length>0?a("div",{staticClass:"sidebar-box"},[a("div",{staticClass:"sidebar-header"},[a("div",{staticClass:"sidebar-header-title"},[a("Icon",{staticClass:"icon",attrs:{type:"ios-apps",size:"18"}}),t._v(" 广告 ")],1)]),a("div",{staticClass:"sidebar-box-content"},[a("ul",t._l(t.advertiseList,(function(e,i){return a("li",{key:i,staticClass:"sidebar-box-content-item"},[a("a",{attrs:{href:e.link,target:"_blank"}},[a("h1",[t._v(t._s(e.title))])]),a("span")])})),0)])]):t._e(),a("div",{staticClass:"sidebar-box"},[a("div",{staticClass:"sidebar-header"},[a("div",{staticClass:"sidebar-header-title"},[a("Icon",{staticClass:"icon",attrs:{type:"ios-link",size:"18"}}),t._v(" 链接 ")],1)]),a("div",{staticClass:"sidebar-box-content"},[a("ul",[a("li",{staticClass:"sidebar-box-content-item"},[a("a",{attrs:{href:"https://github.com/liangfengbo",target:"_blank"}},[a("div",[a("Icon",{staticClass:"icon",attrs:{type:"logo-github"}}),t._v(" Github ")],1)]),a("span")])])])])])},r=[],s=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("d3b7"),a("96cf"),a("2fa7")),n=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={name:"main-sidebar",computed:o({},Object(n["d"])({advertiseList:function(t){return t.advertise.advertiseList}})),created:function(){this.fetchData()},methods:o({},Object(n["b"])({getAdvertiseList:"advertise/list"}),{fetchData:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.getAdvertiseList());case 2:case"end":return t.stop()}}),null,this)}})},d=l,u=(a("1c1e"),a("2877")),b=Object(u["a"])(d,i,r,!1,null,"46e7f560",null);e["a"]=b.exports},9175:function(t,e,a){},ca09:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.article?a("section",{staticClass:"article-detail"},[a("div",{staticClass:"article-container"},[a("h1",{staticClass:"article-title"},[t._v(" "+t._s(t.article.title)+" ")]),a("ul",{staticClass:"article-intro"},[t.article.category?a("li",{staticClass:"articles-item-category"},[t._v(" "+t._s(t.article.category.name)+" ")]):t._e(),a("li",[a("Icon",{attrs:{size:"16",type:"ios-person-outline"}}),t._v(" "+t._s(t.article.author)+" ")],1),a("li",[a("Icon",{attrs:{size:"16",type:"ios-eye-outline"}}),t._v(" "+t._s(t.article.browse)+" ")],1),t.article.article_comment?a("li",[a("Icon",{attrs:{size:"16",type:"ios-text-outline"}}),t._v(" "+t._s(t.article.article_comment.data.length)+" ")],1):t._e()]),a("div",{staticClass:"article-content"},[a("mavon-editor",{staticStyle:{height:"100%"},attrs:{ishljs:!0,defaultOpen:"preview",editable:!1,subfield:!1,toolbarsFlag:!1},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}})],1),a("div",{staticClass:"comment-header"},[a("Icon",{attrs:{type:"ios-create-outline"}}),t._v(" 欢迎评论 ")],1),a("v-comment-create",{attrs:{target_id:t.article.id,target_type:t.targetType},on:{updateComment:t.updateComment}}),t.article.article_comment.data.length>0?a("div",[a("v-comment-list",{attrs:{target_id:parseInt(t.id)},on:{updateComment:t.updateComment}})],1):t._e()],1),a("v-main-sidebar")],1):t._e()},r=[],s=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("d3b7"),a("96cf"),a("2fa7")),n=a("2f62"),c=a("b2d8"),o=(a("64e1"),a("39a6")),l=a("d2b3"),d=a("54f1");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={components:{mavonEditor:c["mavonEditor"],VCommentList:o["a"],VCommentCreate:l["a"],VMainSidebar:d["a"]},name:"detail",data:function(){return{article:null,id:this.$route.query.id,targetType:"article"}},created:function(){this.getArticle()},methods:b({},Object(n["b"])({getArticleDetail:"articles/detail"}),{getArticle:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.getArticleDetail({id:this.id}));case 2:t=e.sent,this.article=t.data.data,this.$store.commit("comment/SET_COMMENT_LIST",t.data.data.article_comment.data),this.$store.commit("comment/SET_COMMENT_PAGE",t.data.data.article_comment.meta);case 6:case"end":return e.stop()}}),null,this)},updateComment:function(t,e){"comment"===e?this.article.article_comment.data.unshift(t):"reply"===e&&this.getArticle()}})},p=m,f=(a("def7"),a("2877")),v=Object(f["a"])(p,i,r,!1,null,"23fe4cac",null);e["default"]=v.exports},def7:function(t,e,a){"use strict";var i=a("4a92"),r=a.n(i);r.a}}]);