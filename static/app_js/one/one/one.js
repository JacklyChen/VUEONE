webpackJsonp([1],[,,,,,,,,,,,,,function(t,e,i){"use strict";var n={base:"http://v3.wufazhuce.com:8000/api",picture:{getPictureIdList:"/hp/idlist/0",getPictureDetail:"/hp/detail/"},read:{getLatestArticle:"/reading/index",getArticleDetail:"/essay/",getQuestionDetail:"/question/"},music:{getMusicIdList:"/music/idlist/0",getMusicDetail:"/music/detail/"}};e.a=n},,,,,,,,function(t,e){},function(t,e){},function(t,e,i){"use strict";var n=i(64),s=i.n(n),a=i(62),r=i.n(a),o=i(15),u=i.n(o),c=i(16),l=i.n(c),d=i(5),f=i(61),p=i(13);d.default.use(f.a);var v=function(){function t(e){u()(this,t),this.params=e}return l()(t,[{key:"requestUrl",value:function(){}},{key:"start",value:function(){function t(t,i){return e.apply(this,arguments)}var e=r()(s.a.mark(function t(e,i){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=p.a.base+this.requestUrl(),this.params&&(n+=this.params),console.log(n),d.default.http.get(n).then(function(t){e(t)}).catch(function(t){console.log(t),i(t)});case 4:case"end":return t.stop()}},t,this)}));return t}()}]),t}();e.a=v},,,,,,,,function(t,e,i){"use strict";i.d(e,"c",function(){return _}),i.d(e,"b",function(){return h}),i.d(e,"a",function(){return m});var n=i(34),s=i.n(n),a=i(15),r=i.n(a),o=i(16),u=i.n(o),c=i(36),l=i.n(c),d=i(35),f=i.n(d),p=i(23),v=i(13),_=function(t){function e(){return r()(this,e),l()(this,(e.__proto__||s()(e)).apply(this,arguments))}return f()(e,t),u()(e,[{key:"requestUrl",value:function(){return v.a.read.getLatestArticle}}]),e}(p.a),h=function(t){function e(){return r()(this,e),l()(this,(e.__proto__||s()(e)).apply(this,arguments))}return f()(e,t),u()(e,[{key:"requestUrl",value:function(){return v.a.read.getArticleDetail}}]),e}(p.a),m=function(t){function e(){return r()(this,e),l()(this,(e.__proto__||s()(e)).apply(this,arguments))}return f()(e,t),u()(e,[{key:"requestUrl",value:function(){return v.a.read.getQuestionDetail}}]),e}(p.a)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="undefined"!=typeof window;n&&(window.Swiper=i(50),i(49)),e.default={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&n&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&n){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}};this.options.notNextTick?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}}},,,,,,,,,,,,,,,,function(t,e){},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.slideClass},[t._t("default")],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]}},,,,,,,,function(t,e,i){"use strict";i.d(e,"a",function(){return _}),i.d(e,"b",function(){return h});var n=i(34),s=i.n(n),a=i(15),r=i.n(a),o=i(16),u=i.n(o),c=i(36),l=i.n(c),d=i(35),f=i.n(d),p=i(23),v=i(13),_=function(t){function e(){return r()(this,e),l()(this,(e.__proto__||s()(e)).apply(this,arguments))}return f()(e,t),u()(e,[{key:"requestUrl",value:function(){return v.a.picture.getPictureIdList}}]),e}(p.a),h=function(t){function e(){return r()(this,e),l()(this,(e.__proto__||s()(e)).apply(this,arguments))}return f()(e,t),u()(e,[{key:"requestUrl",value:function(){return v.a.picture.getPictureDetail}}]),e}(p.a)},,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAA/FBMVEUAAAD/fWv/f2v/f2v/e2j/fGr/f2z/f2v/fGf/d2b/fmz/fmv/f2z/fmv/fWj/e2n/f2z/fmz/emv/dmL/f2v/f2v/f2z/fGz/fGT/fmz/f2z/fmr/gAD/fWv/fmz/f2v/fmv/cGD/f2r/fmz/f2z/fGn/AAD/f2v/fmv/fmn/Zmb/fWv/fmv/fmv/f2v/fmz/fmv/f2z/eWb/fmz/fGr/dGj/cVX/fmv/f2z/fmv/fWz/fmv/fGr/fmv/fmn/emn/f2z/fWf/dmz/fmz/f2v/e2j/amr/fmz/f2v/VVX/fmv/f2z/fmr/fWv/f2v/fWr/e2v/fmv/d2b/fmswMJIlAAAAVHRSTlMAN8WzNlTVmyUepv7/uDs4/aoyDYX3vUAhqLlBAmTow0UQi/jJUAHRyEsFbuzWzdr67yjeKRYJrK2MaPxI8kku4y8azs8bDLS1A5SVcXL1NR/UD7wQSqIxAAABI0lEQVRYw+2XyVbCUBAFIwiiNBrAAUFRkYQYJxBBZVBARZmn//8XPeBASCCezmPlreVd1PJ1PUkCAAAAAABzWHG5V02jx7vmc6Zd3/ATUWDTMG65Pjc5GOJrw9s7NGF372eM7H9tFI3xtAeHcfrl6Hg8niROp8akojLEKTKinUn6+cXMeMkQk4mra/MmRGwFxBBD/N/F6b940wxxLGPvzbDe+pusnTd7y7shOW2xV8txj17+bpH3Ps8/p2pivvdBlZxQKFpriwWnxVIqW3nLj85b6Kli9laqIiqr9jzrfXkV02/1N6P3vS6qDBvNaW+rITA62/K3Vu6IzVmlO/F2FdGh3BsnYrwnPsH7AyJvfxlxPxyNhsv5Nug6vk4AAAAAAPZ8AG3ePIeeYoL9AAAAAElFTkSuQmCC"},,,function(t,e,i){var n=i(0)(i(32),i(51),null,null,null);t.exports=n.exports},function(t,e,i){var n=i(0)(i(33),i(52),null,null,null);t.exports=n.exports},function(t,e,i){function n(t){i(173)}var s=i(0)(i(113),i(186),n,null,null);t.exports=s.exports},,function(t,e,i){"use strict";var n=i(5),s=i(84),a=i(199),r=i.n(a),o=i(198),u=i.n(o),c=i(197),l=i.n(c);n.default.use(s.a),e.a=new s.a({routes:[{path:"/",name:"home",component:r.a},{path:"/readDetail",name:"readDetail",component:u.a},{path:"/questionDetail",name:"questionDetail",component:l.a}]})},,function(t,e,i){function n(t){i(174)}var s=i(0)(i(121),i(187),n,null,null);t.exports=s.exports},,,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(5),s=i(91),a=i.n(s),r=i(89),o=i(22),u=(i.n(o),i(29)),c=i.n(u),l=i(21);i.n(l);n.default.use(c.a),new n.default({el:"#app",router:r.a,template:"<App/>",components:{App:a.a}})},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"x-dialog",model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},dialogClass:{type:String,default:"weui-dialog"},hideOnBlur:Boolean,dialogStyle:Object,scroll:{type:Boolean,default:!0}},watch:{show:function(t){this.$emit("update:show",t),this.$emit(t?"on-show":"on-hide")}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()},hide:function(){this.hideOnBlur&&(this.$emit("update:show",!1),this.$emit("change",!1))}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(81),s=i.n(n);e.default={name:"x-header",props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},beforeMount:function(){this.$slots["overwrite-title"]&&(this.shouldOverWriteTitle=!0)},computed:{_leftOptions:function(){return s()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}},data:function(){return{shouldOverWriteTitle:!1}}}},,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(87),s=i.n(n),a=i(31);e.default={components:{XHeader:s.a},mounted:function(){this.initData()},data:function(){return{canAudio:!1,question:{answer_title:"",question_title:"",question_content:"",asker:{user_name:""},answerer:{user_name:""}}}},methods:{initData:function(){var t=this,e=this.$route.params.id;new a.a(e).start(function(e){console.log(e.data.data),t.question=e.data.data,document.getElementById("question-content").innerHTML=e.data.data.answer_content})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(87),s=i.n(n),a=i(31);e.default={components:{XHeader:s.a},mounted:function(){this.initData()},data:function(){return{canAudio:!1,essay:{hp_title:""}}},methods:{initData:function(){var t=this,e=this.$route.params.id;new a.b(e).start(function(e){console.log(e.data.data),t.essay=e.data.data,document.getElementById("essay-content").innerHTML=e.data.data.hp_content,t.essay.audio&&(t.canAudio=!0)})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(60),s=i(31),a=i(83),r=(i.n(a),i(200)),o=i.n(r);e.default={components:{swiper:a.swiper,swiperSlide:a.swiperSlide,swipeItem:o.a},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){10!==this.pictureIds.length&&this.initData()},data:function(){return{pictureIds:[],essays:[],questions:[],swiperOption:{pagination:".swiper-pagination",paginationClickable:!0,effect:"cube",initialSlide:0,centeredSlides:!0,slidesPerView:"auto",crossFade:!1},swiperEssayOption:{pagination:".swiper-pagination",paginationClickable:!0,effect:"fade",initialSlide:0,centeredSlides:!0,slidesPerView:"auto",crossFade:!0}}},methods:{initData:function(){var t=this;(new n.a).start(function(e){t.pictureIds=e.data.data}),(new s.c).start(function(e){console.log(e.data.data),t.essays=e.data.data.essay,t.questions=e.data.data.question})},routeEassy:function(t){this.$router.push({name:"readDetail",params:{id:t}})},routeQuestion:function(t){this.$router.push({name:"questionDetail",params:{id:t}})}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(60),s=i(201),a=i.n(s),r=i(122);e.default={directives:{TransferDom:r.a},components:{XDialog:a.a},mounted:function(){this.initData()},data:function(){return{show:!1,hideBlur:!0,id:this.$attrs.data,pictureDetail:{hp_content:"",hp_img_url:"",hp_author:"",text_authors:""}}},methods:{initData:function(){var t=this,e=this.id;new n.b(e).start(function(e){t.pictureDetail=e.data.data})}}}},,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"one"}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){},function(t,e){},,function(t,e){},,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("x-header",{staticStyle:{"background-color":"white"}},[i("div",{staticStyle:{color:"#757575","font-size":"16px"}},[t._v("阅读·文字")])]),t._v(" "),i("div",{staticClass:"essay-title"},[t._v(t._s(t.essay.hp_title))]),t._v(" "),i("div",{staticClass:"essay essay-guide"},[t._v('"'+t._s(t.essay.guide_word)+'"')]),t._v(" "),t.canAudio?i("audio",{staticStyle:{"margin-top":"5px","margin-left":"15px"},attrs:{src:t.essay.audio,controls:"controls"}}):t._e(),t._v(" "),t.canAudio?i("p",{staticStyle:{"margin-left":"15px"},attrs:{id:"essay-anchor"}},[t._v(t._s(t.essay.anchor))]):t._e(),t._v(" "),i("div",{staticClass:"essay essay-content",attrs:{id:"essay-content"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mu-card",[i("div",{staticClass:"mu-card-sub-content"},[t._v(t._s(t.pictureDetail.hp_content))]),t._v(" "),i("img",{staticClass:"mu-img",attrs:{src:t.pictureDetail.hp_img_url},on:{click:function(e){t.show=!0}}})]),t._v(" "),i("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[i("x-dialog",{staticClass:"dialog-demo",attrs:{"hide-on-blur":t.hideBlur},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("img",{attrs:{src:t.pictureDetail.hp_img_url}}),t._v(" "),i("div",{staticStyle:{"margin-top":"10px","font-size":"13px",color:"#414141"}},[t._v(t._s(t.pictureDetail.text_authors))]),t._v(" "),i("div",{staticStyle:{"font-size":"11px","padding-bottom":"10px",color:"#666666"}},[t._v(t._s(t.pictureDetail.hp_author))]),t._v(" "),i("div",{staticClass:"dialog-content"},[t._v(t._s(t.pictureDetail.hp_content))])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-header"},[i("div",{staticClass:"vux-header-left"},[t._t("overwrite-left",[i("transition",{attrs:{name:t.transition}},[i("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s(void 0===t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})])]),t._v(" "),t._t("left")],2),t._v(" "),t.shouldOverWriteTitle?t._e():i("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[i("transition",{attrs:{name:t.transition}},[i("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),t.shouldOverWriteTitle?i("div",{staticClass:"vux-header-title-area"},[t._t("overwrite-title")],2):t._e(),t._v(" "),i("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?i("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]}},,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("x-header",{staticStyle:{"background-color":"white"}},[i("div",{staticStyle:{color:"#757575","font-size":"16px"}},[t._v("阅读·问答")])]),t._v(" "),i("div",{staticClass:"question question-title"},[t._v(t._s(t.question.question_title))]),t._v(" "),i("div",{staticClass:"question question-guide"},[t._v(t._s(t.question.question_content))]),t._v(" "),i("div",{staticClass:"question question-guide"},[t._v("--"+t._s(t.question.asker.user_name)+"问到")]),t._v(" "),i("div",{staticClass:"line"}),t._v(" "),i("div",{staticClass:"question question-answerer"},[t._v(t._s(t.question.answerer.user_name)+"答")]),t._v(" "),i("div",{staticClass:"question question-content",attrs:{id:"question-content"}})],1)},staticRenderFns:[]}},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperEssayOption}},t._l(t.pictureIds,function(t){return n("swiper-slide",[n("swipeItem",{attrs:{id:"swipe-item",data:t}})],1)})),t._v(" "),n("swiper",{ref:"mySwiper",attrs:{options:t.swiperEssayOption}},t._l(t.essays,function(e){return n("swiper-slide",[n("div",{on:{click:function(i){t.routeEassy(e.content_id)}}},[n("mu-card",{staticClass:"mu-story-card"},[n("img",{staticClass:"story-img",attrs:{src:i(82)}}),t._v(" "),n("div",{staticClass:"story-key"},[t._v("- ONE STORY -")]),t._v(" "),n("div",{staticClass:"story-title"},[t._v(t._s(e.hp_title))]),t._v(" "),n("div",{staticClass:"story-guide"},[t._v(t._s(e.guide_word))]),t._v(" "),n("div",{staticClass:"story-author"},[t._v("文/ "+t._s(e.author[0].user_name))])])],1)])})),t._v(" "),n("swiper",{ref:"mySwiper",staticStyle:{"margin-top":"10px"},attrs:{options:t.swiperEssayOption}},t._l(t.questions,function(e){return n("swiper-slide",[n("div",{on:{click:function(i){t.routeQuestion(e.question_id)}}},[n("mu-card",{staticClass:"mu-story-card"},[n("img",{staticClass:"story-img",attrs:{src:i(82)}}),t._v(" "),n("div",{staticClass:"story-key"},[t._v("- ONE QUESTION -")]),t._v(" "),n("div",{staticClass:"story-title"},[t._v(t._s(e.question_title))]),t._v(" "),n("div",{staticClass:"story-author"},[t._v(t._s(e.author_list[0].user_name)+"答")]),t._v(" "),n("div",{staticClass:"story-guide"},[t._v(t._s(e.answer_content))])])],1)])}))],1)},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[i("transition",{attrs:{name:t.maskTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-mask",on:{click:t.hide}})]),t._v(" "),i("transition",{attrs:{name:t.dialogTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:t.dialogClass,style:t.dialogStyle},[t._t("default")],2)])],1)},staticRenderFns:[]}},,,,function(t,e,i){function n(t){i(177)}var s=i(0)(i(116),i(190),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(171)}var s=i(0)(i(117),i(184),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(178)}var s=i(0)(i(118),i(191),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(172)}var s=i(0)(i(119),i(185),n,null,null);t.exports=s.exports},function(t,e,i){function n(t){i(180)}var s=i(0)(i(112),i(193),n,null,null);t.exports=s.exports}],[111]);
//# sourceMappingURL=one.js.map