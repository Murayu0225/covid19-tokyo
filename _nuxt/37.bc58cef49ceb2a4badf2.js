(window.webpackJsonp=window.webpackJsonp||[]).push([[37,7,38,39,40,70],{455:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},460:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(328),n(107);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},492:function(t,e,n){"use strict";var o=n(1);n(4),n(212),n(11),n(213);function r(t,e,n){var o,r=null==(o=t._observe)?void 0:o[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var l={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var l=e.modifiers||{},c=e.value,d="object"===Object(o.a)(c)?c:{handler:c,options:{}},f=d.handler,v=d.options,_=new IntersectionObserver((function(){var o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],d=arguments.length>1?arguments[1]:void 0,v=null==(o=t._observe)?void 0:o[n.context._uid];if(v){var _=c.some((function(t){return t.isIntersecting}));!f||l.quiet&&!v.init||l.once&&!_&&!v.init||f(c,d,_),_&&l.once?r(t,e,n):v.init=!0}}),v);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:_},_.observe(t)}},unbind:r};e.a=l},500:function(t,e,n){var content=n(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("5e22af2d",content,!0,{sourceMap:!1})},505:function(t,e,n){"use strict";n(107);var o=n(30),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),l=Object(o.f)(this.maxHeight),c=Object(o.f)(this.maxWidth),d=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},506:function(t,e,n){"use strict";n(33),n(40),n(41),n(42),n(53),n(57);var o=n(15),r=(n(4),n(107),n(37),n(28),n(90),n(312),n(54),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(55),n(63),n(18),n(11),n(19),n(20),n(212),n(213),n(82),n(327),n(0)),l=n(215),c=n(30);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],_=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),w=v.reduce((function(t,e){return t["order"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(_),offset:Object.keys(m),order:Object.keys(w)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},_),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},w),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=y.get(c);return f||function(){var t,e;for(e in f=[],h)h[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},519:function(t,e,n){"use strict";n.r(e);n(63),n(65);var o=n(0).default.extend({props:{value:{type:String,required:!0},unit:{type:Object,required:!0},bold:{type:Boolean,required:!0}},data:function(){return{currentLocaleCode:this.$root.$i18n.locale}},computed:{translatedUnit:function(){var t=this.unit,text=t.text,e=t.translatable,n=t.except;return e?n&&n.includes(String(this.currentLocaleCode))?null:this.$t(t.text):text}}}),r=n(527),l=n(16);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:t.$style.parent},[t.bold?n("span",[n("strong",[t._v(t._s(t.value))])]):n("span",[t._v(t._s(t.value))]),t._v(" "),t.translatedUnit?n("span",[t._v(t._s(t.translatedUnit))]):t._e()])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},527:function(t,e,n){"use strict";var o=n(500),r=n.n(o);n.d(e,"default",(function(){return r.a}))},528:function(t,e,n){var o=n(46)(!1);o.push([t.i,".parent_CheNg{margin-left:10px;text-align:right;white-space:nowrap;flex-shrink:1}",""]),o.locals={parent:"parent_CheNg"},t.exports=o},542:function(t,e,n){var content=n(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("4509a34d",content,!0,{sourceMap:!1})},543:function(t,e,n){var content=n(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("5f38c72d",content,!0,{sourceMap:!1})},562:function(t,e,n){var content=n(683);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("bc065de8",content,!0,{sourceMap:!1})},578:function(t){t.exports=JSON.parse('{"date":"2022/3/9 19:15","data":{"専門家3行コメント":[{"@ja":"1万人規模の新規陽性者が発生する危機的な感染状況のさらなる長期化が懸念される。歓送迎会、卒業パーティー等、年度末前後のイベントによる人の移動の増加やオミクロン株BA.2の影響で、もし増加比が上昇すれば、感染が再拡大する恐れがある。","@en":"There is concern that the current situation, which is at a critical level at around 10,000 new positive cases per day, will be further prolonged. If movement connected to events held around the end of the fiscal/academic year, such as farewell and welcome parties and graduation celebrations, and the Omicron BA.2 sub-variant cause the rate of increase to rise, there is the risk of a resurgence in infections."},{"@ja":"救急患者の入院受入れが、極めて困難な危機的状況が続いている。入院患者数及び重症患者数に占める高齢者の割合が、高い値で推移しており、この状況が長期化すれば、医療従事者への負担も長期化し、医療提供体制がさらにひっ迫する。","@en":"The situation remains critical with regard to hospitals having difficulty admitting emergency patients. The percentage of hospitalized patients and those with severe illness who are elderly is still high. If this situation is prolonged, the burden on health care workers will also continue, putting further strain on the system for the provision of health care."}],"(1)新規陽性者数":9712.1,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":82.6,"(3)新規陽性者における接触歴等不明者（人数）":5933.1,"(3)新規陽性者における接触歴等不明者（増加比）":88.5,"(4)PCR・抗原検査（陽性率）":32.4,"(4)PCR・抗原検査（検査人数）":16331.1,"(5)救急医療の東京ルールの適用件数":202.4,"(6)入院患者数":3374,"(6)入院患者確保病床数":6815,"(7)重症患者数":64,"(7)重症患者確保病床数":471,"総括コメント-感染状況":{"date":"2022-03-02","level":4,"display":{"@ja":"大規模な感染拡大が継続している","@en":"Extensive spread of the virus continues."}},"総括コメント-医療提供体制":{"date":"2022-03-02","level":4,"display":{"@ja":"医療体制がひっ迫している","@en":"The health care delivery system is under strain."}}}}')},579:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(460),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),d=Object(o.a)(1);return{"(1)新規陽性者数":{value:d(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:d(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:d(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:d(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:d(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:d(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:d(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},611:function(t,e,n){"use strict";var o=n(542),r=n.n(o);n.d(e,"default",(function(){return r.a}))},612:function(t,e,n){var o=n(46)(!1);o.push([t.i,'.container_P8RD0{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_P8RD0,.container_P8RD0 *{box-sizing:border-box}.container_P8RD0 ul{padding-left:0}.group_yxIXt{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_IEG-I{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_IEG-I>span{display:block;font-size:1.4rem}.content_IEG-I>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_IEG-I>span:not(:last-child){word-wrap:break-word}.content_IEG-I strong{font-size:1.6rem}.content_IEG-I span.unit_A\\+0z\\+{font-size:1.4rem}.box_UrRDY{display:block;margin-top:3px}.box_UrRDY.parent_eBOnM{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_UrRDY.parent_eBOnM:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_UrRDY.parent_eBOnM>.content_IEG-I{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_yxIXt{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_IEG-I{padding:.396vw .792vw;border:.238vw solid #008830}.content_IEG-I>span{font-size:1.4rem}.content_IEG-I>span:first-child{margin-top:.08vw}.content_IEG-I strong{font-size:1.6rem}.content_IEG-I span.unit_A\\+0z\\+{font-size:1.4rem}.box_UrRDY{margin-top:.238vw}.box_UrRDY.parent_eBOnM{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_UrRDY.parent_eBOnM:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_UrRDY.parent_eBOnM>.content_IEG-I{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_yxIXt{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_IEG-I{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_IEG-I>span{font-size:1.4rem}.content_IEG-I>span:first-child{margin-top:.105vw}.content_IEG-I strong{font-size:1.6rem}.content_IEG-I span.unit_A\\+0z\\+{font-size:1.4rem}.box_UrRDY{margin-top:.313vw}.box_UrRDY.parent_eBOnM{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_UrRDY.parent_eBOnM:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_UrRDY.parent_eBOnM>.content_IEG-I{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_yxIXt{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_IEG-I{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_IEG-I>span{font-size:1.4rem}.content_IEG-I>span:first-child{margin-top:.167vw}.content_IEG-I strong{font-size:1.6rem}.content_IEG-I span.unit_A\\+0z\\+{font-size:1.4rem}.box_UrRDY{margin-top:.5vw}.box_UrRDY.parent_eBOnM{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_UrRDY.parent_eBOnM:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_UrRDY.parent_eBOnM>.content_IEG-I{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_P8RD0",group:"group_yxIXt",content:"content_IEG-I",unit:"unit_A+0z+",box:"box_UrRDY",parent:"parent_eBOnM"},t.exports=o},613:function(t,e,n){"use strict";var o=n(543),r=n.n(o);n.d(e,"default",(function(){return r.a}))},614:function(t,e,n){var o=n(46)(!1);o.push([t.i,'.container_k7Djw{width:100%;color:#008830;line-height:1.35;padding-left:0!important}.container_k7Djw,.container_k7Djw *{box-sizing:border-box}.container_k7Djw ul{padding-left:0}.group_zvGvt{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #008830;border-left:3px solid #008830}.content_\\+sfc\\+{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #008830}.content_\\+sfc\\+>span{display:block;font-size:1.4rem}.content_\\+sfc\\+>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_\\+sfc\\+>span:not(:last-child){word-wrap:break-word}.content_\\+sfc\\+ strong{font-size:1.6rem}.content_\\+sfc\\+ span.unit_nofn8{font-size:1.4rem}.box_sYyzP{display:block;margin-top:3px}.box_sYyzP.parent_46zpI{border-top:3px solid #008830;border-left:3px solid #008830;position:relative;padding-left:29px}.box_sYyzP.parent_46zpI:after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #008830}.box_sYyzP.parent_46zpI>.content_\\+sfc\\+{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width:1263px){.group_zvGvt{padding-left:.238vw!important;border-top:.238vw solid #008830;border-left:.238vw solid #008830}.content_\\+sfc\\+{padding:.396vw .792vw;border:.238vw solid #008830}.content_\\+sfc\\+>span{font-size:1.4rem}.content_\\+sfc\\+>span:first-child{margin-top:.08vw}.content_\\+sfc\\+ strong{font-size:1.6rem}.content_\\+sfc\\+ span.unit_nofn8{font-size:1.4rem}.box_sYyzP{margin-top:.238vw}.box_sYyzP.parent_46zpI{border-top:.238vw solid #008830;border-left:.238vw solid #008830;padding-left:2.296vw}.box_sYyzP.parent_46zpI:after{width:2.534vw;border-bottom:.238vw solid #008830}.box_sYyzP.parent_46zpI>.content_\\+sfc\\+{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_zvGvt{padding-left:.313vw!important;border-top:.313vw solid #008830;border-left:.313vw solid #008830}.content_\\+sfc\\+{padding:.521vw 1.042vw;border:.313vw solid #008830}.content_\\+sfc\\+>span{font-size:1.4rem}.content_\\+sfc\\+>span:first-child{margin-top:.105vw}.content_\\+sfc\\+ strong{font-size:1.6rem}.content_\\+sfc\\+ span.unit_nofn8{font-size:1.4rem}.box_sYyzP{margin-top:.313vw}.box_sYyzP.parent_46zpI{border-top:.313vw solid #008830;border-left:.313vw solid #008830;padding-left:3.02vw}.box_sYyzP.parent_46zpI:after{width:3.334vw;border-bottom:.313vw solid #008830}.box_sYyzP.parent_46zpI>.content_\\+sfc\\+{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_zvGvt{padding-left:.5vw!important;border-top:.5vw solid #008830;border-left:.5vw solid #008830}.content_\\+sfc\\+{padding:.834vw 1.667vw;border:.5vw solid #008830}.content_\\+sfc\\+>span{font-size:1.4rem}.content_\\+sfc\\+>span:first-child{margin-top:.167vw}.content_\\+sfc\\+ strong{font-size:1.6rem}.content_\\+sfc\\+ span.unit_nofn8{font-size:1.4rem}.box_sYyzP{margin-top:.5vw}.box_sYyzP.parent_46zpI{border-top:.5vw solid #008830;border-left:.5vw solid #008830;padding-left:4.834vw}.box_sYyzP.parent_46zpI:after{width:5.334vw;border-bottom:.5vw solid #008830}.box_sYyzP.parent_46zpI>.content_\\+sfc\\+{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_k7Djw",group:"group_zvGvt",content:"content_+sfc+",unit:"unit_nofn8",box:"box_sYyzP",parent:"parent_46zpI"},t.exports=o},648:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(519),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),c=n(611),d=n(16);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(1)新規陽性者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(1)新規陽性者数"].value,unit:t.items["(1)新規陽性者数"].unit,bold:t.items["(1)新規陽性者数"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("潜在・市中感染")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v("\n            "+t._s(t.$t("(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "))+"\n          ")]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].value,unit:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].unit,bold:t.items["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(3)新規陽性者における接触歴等不明者")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("人数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(3)新規陽性者における接触歴等不明者（人数）"].value,unit:t.items["(3)新規陽性者における接触歴等不明者（人数）"].unit,bold:t.items["(3)新規陽性者における接触歴等不明者（人数）"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("増加比")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].value,unit:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].unit,bold:t.items["(3)新規陽性者における接触歴等不明者（増加比）"].bold}})],1)])])])])])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},649:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(519),l=o.default.extend({components:{ValueWithTranslatableUnit:r.default},props:{items:{type:Object,required:!0}}}),c=n(613),d=n(16);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(4)PCR・抗原検査")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("陽性率")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(4)PCR・抗原検査（陽性率）"].value,unit:t.items["(4)PCR・抗原検査（陽性率）"].unit,bold:t.items["(4)PCR・抗原検査（検査人数）"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("検査人数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(4)PCR・抗原検査（検査人数）"].value,unit:t.items["(4)PCR・抗原検査（検査人数）"].unit,bold:t.items["(4)PCR・抗原検査（検査人数）"].bold}})],1)])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("受入体制")))])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(5)救急医療の東京ルールの適用件数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(5)救急医療の東京ルールの適用件数"].value,unit:t.items["(5)救急医療の東京ルールの適用件数"].unit,bold:t.items["(5)救急医療の東京ルールの適用件数"].bold}})],1)]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(6)入院患者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(6)入院患者数"].value,unit:t.items["(6)入院患者数"].unit,bold:t.items["(6)入院患者数"].bold}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("確保病床")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(6)入院患者確保病床数"].value,unit:t.items["(6)入院患者確保病床数"].unit,bold:t.items["(6)入院患者確保病床数"].bold}})],1)])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("(7)重症患者数")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(7)重症患者数"].value,unit:t.items["(7)重症患者数"].unit,bold:t.items["(7)重症患者数"].bold}})],1),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("確保病床")))]),t._v(" "),n("value-with-translatable-unit",{attrs:{value:t.items["(7)重症患者確保病床数"].value,unit:t.items["(7)重症患者確保病床数"].unit,bold:t.items["(7)重症患者確保病床数"].bold}})],1)])])])])])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports},682:function(t,e,n){"use strict";var o=n(562),r=n.n(o);n.d(e,"default",(function(){return r.a}))},683:function(t,e,n){var o=n(46)(!1);o.push([t.i,".section_QRpur{margin:0 0 20px}.section_QRpur:first-child{margin-top:-10px}.section_QRpur h4{color:#4d4d4d;margin:5px 0 10px;font-weight:400;font-size:1.6rem}.button_sAISY{color:#008830!important;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.button_sAISY:hover{color:#fff!important;background-color:#008830;color:#fff}.button_sAISY:hover>i{color:#fff!important}.button-wrap_i-7dv{margin-bottom:16px}.inner-link_glZBo{text-decoration:none}dfn{font-style:normal;font-weight:600}",""]),o.locals={section:"section_QRpur",button:"button_sAISY","button-wrap":"button-wrap_i-7dv","inner-link":"inner-link_glZBo"},t.exports=o},728:function(t,e,n){"use strict";n.r(e);var o=n(109),r=n(461),l=n(648),c=n(649),d=n(578),f=n(579),v={components:{DataView:r.default,InfectionStatus:l.default,MedicalSystem:c.default,AppLink:o.default},data:function(){var t=Object(f.b)(d.data);return{monitoringItemsData:d,monitoringItems:t}}},_=n(682),m=n(16),w=n(75),h=n.n(w),x=n(506);var component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringItemsOverviewCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("モニタリング項目"),"title-id":"monitoring-items-overview",date:t.monitoringItemsData.date},scopedSlots:t._u([t.$route.path!==t.localePath("/monitoring")?{key:"description",fn:function(){return[n("app-link",{class:[t.$style.button,t.$style["inner-link"]],attrs:{to:t.localePath("/monitoring")}},[t._v("\n          "+t._s(t.$t("モニタリング項目の各グラフはこちら"))+"\n        ")])]},proxy:!0}:null,{key:"additionalDescription",fn:function(){return[n("span",[t._v(t._s(t.$t("（注）")))]),t._v(" "),n("ul",[n("li",[n("i18n",{attrs:{tag:"span",path:"{number}：急病やけがの際に、緊急受診の必要性や診察可能な医療機関をアドバイスする電話相談窓口"},scopedSlots:t._u([{key:"number",fn:function(){return[n("dfn",[t._v("#7119")])]},proxy:!0}])})],1),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("救急医療の東京ルールの適用件数：救急隊による5医療機関への受入要請又は選定開始から20分以上経過しても搬送先が決定しない事案の件数"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(1)～(5)は7日間移動平均で算出"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(2)(4)(5)は報告日の前日時点の数値"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(6)の確保病床数には、(7)の確保病床数を含む"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("速報値として公表するものであり、後日修正する場合がある"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(2)(5)は土曜日、日曜日、祝日は更新しない。(4)は日曜日、祝日は更新しない"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("(1)(3)には、感染者の濃厚接触者が有症状となった場合で、検査を実施せずに医師の判断により臨床診断された患者を含む"))+"\n          ")])])]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),n("section",{class:t.$style.section},[n("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.monitoringItems}})],1),t._v(" "),n("section",{class:t.$style.section},[n("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),n("medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.monitoringItems}})],1),t._v(" "),n("div",{class:t.$style["button-wrap"]},[n("app-link",{class:t.$style.button,attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/monitoring.html"}},[t._v("\n          "+t._s(t.$t("最新のモニタリング項目の分析・総括コメントについて"))+"\n        ")])],1),t._v(" "),n("div",[n("app-link",{class:t.$style.button,attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/kunishihyou.html"}},[t._v("\n          "+t._s(t.$t("国のステージ判断のための指標"))+"\n        ")])],1)])],1)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports;h()(component,{VCol:x.a})}}]);