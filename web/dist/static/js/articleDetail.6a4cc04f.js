(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["articleDetail"],{"07dc":function(t,e,a){},"0d7d":function(t,e,a){},"4c1b":function(t,e,a){"use strict";var r=a("e5d1"),n=a.n(r);n.a},"54f1":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("article",{staticClass:"sidebar"},[t.advertiseList&&t.advertiseList.length>0?a("div",{staticClass:"sidebar-box"},[a("div",{staticClass:"sidebar-header"},[a("div",{staticClass:"sidebar-header-title"},[a("Icon",{staticClass:"icon",attrs:{type:"ios-apps",size:"18"}}),t._v(" 广告 ")],1)]),a("div",{staticClass:"sidebar-box-content"},[a("ul",t._l(t.advertiseList,(function(e,r){return a("li",{key:r,staticClass:"sidebar-box-content-item"},[a("a",{attrs:{href:e.link,target:"_blank"}},[a("h1",[t._v(t._s(e.title))])]),a("span")])})),0)])]):t._e(),a("div",{staticClass:"sidebar-box"},[a("div",{staticClass:"sidebar-header"},[a("div",{staticClass:"sidebar-header-title"},[a("Icon",{staticClass:"icon",attrs:{type:"ios-link",size:"18"}}),t._v(" 链接 ")],1)]),a("div",{staticClass:"sidebar-box-content"},[a("ul",[a("li",{staticClass:"sidebar-box-content-item"},[a("a",{attrs:{href:"https://github.com/liangfengbo",target:"_blank"}},[a("div",[a("Icon",{staticClass:"icon",attrs:{type:"logo-github"}}),t._v(" Github ")],1)]),a("span")]),a("li",{staticClass:"sidebar-box-content-item"},[a("a",{attrs:{href:"https://www.boblog.com",target:"_blank"}},[a("div",{staticStyle:{color:"#2d8cf0"}},[a("Icon",{attrs:{type:"md-ionic"}}),t._v(" 波波博客 ")],1)]),a("span")])])])])])},n=[],i=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("d3b7"),a("96cf"),a("2fa7")),s=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={name:"main-sidebar",computed:o({},Object(s["d"])({advertiseList:function(t){return t.advertise.advertiseList}})),created:function(){this.fetchData()},methods:o({},Object(s["b"])({getAdvertiseList:"advertise/list"}),{fetchData:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.getAdvertiseList());case 2:case"end":return t.stop()}}),null,this)}})},m=l,u=(a("4c1b"),a("2877")),p=Object(u["a"])(m,r,n,!1,null,"312b93c7",null);e["a"]=p.exports},6201:function(t,e,a){"use strict";var r=a("0d7d"),n=a.n(r);n.a},a90a:function(t,e,a){"use strict";var r=a("07dc"),n=a.n(r);n.a},ca09:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.article?a("section",{staticClass:"article-detail"},[a("div",{staticClass:"article-container"},[a("h1",{staticClass:"article-title"},[t._v(" "+t._s(t.article.title)+" ")]),a("ul",{staticClass:"article-intro"},[t.article.category?a("li",{staticClass:"articles-item-category"},[t._v(" "+t._s(t.article.category.name)+" ")]):t._e(),a("li",[a("Icon",{attrs:{size:"16",type:"ios-person-outline"}}),t._v(" "+t._s(t.article.author)+" ")],1),a("li",[a("Icon",{attrs:{size:"16",type:"ios-eye-outline"}}),t._v(" "+t._s(t.article.browse)+" ")],1),t.article.article_comment?a("li",[a("Icon",{attrs:{size:"16",type:"ios-text-outline"}}),t._v(" "+t._s(t.article.article_comment.data.length)+" ")],1):t._e()]),a("div",{staticClass:"article-content"},[a("mavon-editor",{staticStyle:{height:"100%"},attrs:{ishljs:!0,defaultOpen:"preview",editable:!1,subfield:!1,toolbarsFlag:!1},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}})],1),a("div",{staticClass:"comment-header"},[a("Icon",{attrs:{type:"ios-create-outline"}}),t._v(" 欢迎评论 ")],1),a("v-comment-create",{attrs:{target_id:t.article.id,target_type:t.targetType},on:{updateComment:t.updateComment}}),t.article.article_comment.data.length>0?a("div",[a("v-comment-list",{attrs:{target_id:parseInt(t.id)},on:{updateComment:t.updateComment}})],1):t._e()],1),a("v-main-sidebar")],1):t._e()},n=[],i=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("d3b7"),a("96cf"),a("2fa7")),s=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"comment"},[a("div",{staticClass:"comment-header"},[t._v(" 评论列表 ")]),t.comment&&t.comment.length>0?a("ul",{staticClass:"comment-box"},t._l(t.comment,(function(e,r){return a("li",{key:r,staticClass:"comment-item"},[a("div",{staticClass:"comment-avatar"},[a("Avatar",{staticStyle:{"background-color":"#2d8cf0"},attrs:{size:"small",icon:"ios-person"}})],1),a("div",{staticClass:"comment-info"},[a("h1",{staticClass:"comment-username"},[t._v(t._s(e.nickname))]),a("p",{staticClass:"comment-content"},[t._v(" "+t._s(e.content)+" ")]),e.reply&&e.reply.length>0?a("div",{staticClass:"comment-reply"},[a("ul",{staticClass:"comment-box"},t._l(e.reply,(function(e,r){return a("li",{key:r,staticClass:"comment-item"},[a("div",{staticClass:"comment-avatar"},[a("Avatar",{staticStyle:{"background-color":"#2d8cf0"},attrs:{size:"small",icon:"ios-chatbubbles"}})],1),a("div",{staticClass:"comment-info"},[a("h1",{staticClass:"comment-username"},[t._v("来自「"+t._s(e.nickname)+"」的回复 "+t._s(e.reply_username))]),a("p",{staticClass:"comment-content"},[t._v(" "+t._s(e.content)+" ")])])])})),0)]):t._e(),a("p",{staticClass:"comment-reply-btn",on:{click:function(a){return t.reply(e.id,e.nickname)}}},[t._v("点击回复")])])])})),0):t._e(),t.page&&t.page.current_page<t.page.total_pages?a("ul",{staticClass:"load-more-comment",on:{click:t.loadMoreComment}},[a("Icon",{staticStyle:{color:"#f00"},attrs:{type:"md-ionic"}}),t._v(" 点击加载更多 ")],1):t._e(),a("Modal",{attrs:{"z-index":t.zIndex,title:t.replyNickname},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-comment-create",{attrs:{comment_type:t.commentType,comment_id:t.comment_id},on:{updateComment:t.updateComment}})],1)],1)},o=[],l=(a("99af"),a("a9e3"),a("284c")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"comment-create"},[a("Form",{ref:"params",attrs:{model:t.params,rules:t.ruleValidate,"label-position":"left","label-width":80}},[a("FormItem",{attrs:{label:"昵称",prop:"nickname"}},[a("Input",{attrs:{placeholder:"请输入您的昵称"},model:{value:t.params.nickname,callback:function(e){t.$set(t.params,"nickname",e)},expression:"params.nickname"}})],1),a("FormItem",{attrs:{label:"邮箱",prop:"email"}},[a("Input",{attrs:{placeholder:"请输入您的邮箱（不会被公开）"},model:{value:t.params.email,callback:function(e){t.$set(t.params,"email",e)},expression:"params.email"}})],1),a("FormItem",{attrs:{label:"评论",prop:"content"}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入您的评论内容..."},model:{value:t.params.content,callback:function(e){t.$set(t.params,"content",e)},expression:"params.content"}})],1),a("FormItem",[a("Button",{on:{click:function(e){return t.resetCommentInput("params")}}},[t._v("清空")]),a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(e){return t.submit("params")}}},[t._v(" "+t._s("comment"===t.comment_type?"评论":"回复")+" ")])],1)],1)],1)},u=[];function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={props:{target_id:{type:Number,default:function(){return 0}},target_type:{type:String,default:function(){return"article"}},comment_type:{type:String,default:function(){return"comment"}},comment_id:{type:Number,default:function(){return 0}}},data:function(){return{params:{nickname:"",email:"",content:""},ruleValidate:{nickname:[{required:!0,message:"请输入您的昵称",trigger:"blur"}],email:[{required:!0,message:"请输入您的邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱",trigger:"blur"}],content:[{required:!0,message:"请输入评论",trigger:"blur"},{type:"string",min:2,message:"评论不能少于2个字",trigger:"blur"}]}}},methods:d({},Object(s["b"])({createComment:"comment/createComment",createReply:"reply/createReply"}),{submit:function(t){var e=this;this.$refs[t].validate((function(t){var a,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(!t){n.next=27;break}if(n.prev=1,"comment"!==e.comment_type){n.next=12;break}return e.params.target_id=e.target_id,e.params.target_type=e.target_type,n.next=7,regeneratorRuntime.awrap(e.createComment(e.params));case 7:a=n.sent,e.$emit("updateComment",a.data.data,"comment"),e.$Message.success("评论成功！"),n.next=19;break;case 12:if("reply"!==e.comment_type){n.next=19;break}return e.params.comment_id=e.comment_id,n.next=16,regeneratorRuntime.awrap(e.createReply(e.params));case 16:r=n.sent,e.$emit("updateComment",r.data.data,"reply"),e.$Message.success("回复成功！");case 19:e.resetCommentInput("params"),n.next=25;break;case 22:n.prev=22,n.t0=n["catch"](1),console.log(n.t0);case 25:n.next=28;break;case 27:e.$Message.error("表单验证失败!");case 28:case"end":return n.stop()}}),null,null,[[1,22]])}))},resetCommentInput:function(t){this.$refs[t].resetFields()}})},f=b,g=(a("6201"),a("2877")),y=Object(g["a"])(f,m,u,!1,null,"35ac3820",null),h=y.exports;function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function _(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var O={props:{target_id:{type:Number||String,default:function(){return-1}},target_type:{type:String,default:function(){return"article"}}},components:{VCommentCreate:h},computed:_({},Object(s["d"])({comment:function(t){return t.comment.commentList},page:function(t){return t.comment.commentPage}})),data:function(){return{show:!1,comment_id:0,replyNickname:"",zIndex:9999,replyArr:[],commentType:"reply",currentPage:2}},methods:_({},Object(s["b"])({getCommentList:"comment/getCommentList"}),{reply:function(t,e){this.comment_id=t,this.replyNickname="回复 「".concat(e,"」："),this.show=!this.show},updateComment:function(t,e){this.show=!this.show,this.$emit("updateComment",t,e)},loadMoreComment:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(!this.page||this.page.current_page===this.page.total_pages){a.next=7;break}return a.next=3,regeneratorRuntime.awrap(this.getCommentList({target_id:this.target_id,target_type:this.target_type,page:this.currentPage}));case 3:t=a.sent,e=[].concat(Object(l["a"])(this.comment),Object(l["a"])(t.data.data.data)),this.$store.commit("comment/SET_COMMENT_LIST",e),this.$store.commit("comment/SET_COMMENT_PAGE",t.data.data.meta);case 7:case"end":return a.stop()}}),null,this)}})},C=O,w=(a("efb7"),Object(g["a"])(C,c,o,!1,null,"2ef4b775",null)),j=w.exports,k=a("54f1");function x(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?x(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):x(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var S={components:{VCommentList:j,VCommentCreate:h,VMainSidebar:k["a"]},name:"detail",data:function(){return{article:null,id:this.$route.query.id,targetType:"article"}},created:function(){this.getArticle()},methods:P({},Object(s["b"])({getArticleDetail:"articles/detail"}),{getArticle:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.getArticleDetail({id:this.id}));case 2:t=e.sent,this.article=t.data.data,this.$store.commit("comment/SET_COMMENT_LIST",t.data.data.article_comment.data),this.$store.commit("comment/SET_COMMENT_PAGE",t.data.data.article_comment.meta);case 6:case"end":return e.stop()}}),null,this)},updateComment:function(t,e){"comment"===e?this.article.article_comment.data.unshift(t):"reply"===e&&this.getArticle()}})},I=S,E=(a("a90a"),Object(g["a"])(I,r,n,!1,null,"45bceb91",null));e["default"]=E.exports},cef5:function(t,e,a){},e5d1:function(t,e,a){},efb7:function(t,e,a){"use strict";var r=a("cef5"),n=a.n(r);n.a}}]);