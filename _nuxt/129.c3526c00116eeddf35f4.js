(window.webpackJsonp=window.webpackJsonp||[]).push([[129,22,23],{461:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(329),n(108);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},507:function(t,e,n){"use strict";n(33),n(39),n(40),n(41),n(52),n(56);var o=n(15),r=(n(4),n(108),n(37),n(28),n(90),n(313),n(53),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(322),n(323),n(324),n(325),n(326),n(327),n(54),n(63),n(18),n(11),n(19),n(20),n(213),n(214),n(82),n(328),n(0)),l=n(216),c=n(30);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),C=f.reduce((function(t,e){return t["order"+Object(c.C)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(C)};function j(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var x=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},C),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var m in n)c+=String(n[m]);var d=x.get(c);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var o=n[t],r=j(e,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),r)}})},573:function(t,e,n){var content=n(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("45d64bcf",content,!0,{sourceMap:!1})},574:function(t,e,n){var content=n(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("d93b19ee",content,!0,{sourceMap:!1})},579:function(t){t.exports=JSON.parse('{"date":"2022/4/15 19:45","data":{"専門家3行コメント":[{"@ja":"流行の主体が、感染力がより高いとされるオミクロン株BA.2系統に置き換わったと考えられる。新規陽性者数が高い水準のまま増加に転じると、急激に感染が拡大することになり、厳重な警戒が必要である。","@en":"It is thought that the Omicron BA.2 sub-variant, which is said to be highly transmissible, has become the predominant variant. If the number of new positive cases remains high and starts to increase, it will result in a rapid resurgence in infections. Therefore, extreme caution is required."},{"@ja":"今週新たに入院した患者数は増加し、減少傾向にあった入院患者数も、前回と比べわずかに増加した。感染の再拡大に備えて、通常の医療提供体制とのバランスを保ちながら、入院、宿泊及び自宅療養体制を柔軟に活用する必要がある。","@en":"This week, the number of new hospitalizations rose. In addition, the number of people hospitalized, which had been showing a downward trend, increased slightly since last week’s monitoring meeting. While maintaining a balance with the system for the provision of non-COVID health care, flexible application of systems for hospitalized care, recovery at designated hotels and recovery at home must be taken to prepare for a resurgence."}],"(1)新規陽性者数":7310.4,"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":78.1,"(3)新規陽性者における接触歴等不明者（人数）":4743.7,"(3)新規陽性者における接触歴等不明者（増加比）":98.2,"(4)PCR・抗原検査（陽性率）":27.9,"(4)PCR・抗原検査（検査人数）":15197,"(5)救急医療の東京ルールの適用件数":124.1,"(6)入院患者数":2018,"(6)入院患者確保病床数":6637,"(7)重症患者数":20,"(7)重症患者確保病床数":421,"総括コメント-感染状況":{"date":"2022-04-13","level":4,"display":{"@ja":"感染の再拡大の危険性が高いと思われる","@en":"There is a high risk of a resurgence of the virus."}},"総括コメント-医療提供体制":{"date":"2022-04-13","level":3,"display":{"@ja":"通常の医療が制限されている状況である","@en":"The provision of non-COVID health care is partially under pressure."}}}}')},580:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return l}));var o=n(461),r=function(t){var e={text:"人",translatable:!0},n={text:"件.reports",translatable:!0},r={text:"%",translatable:!1},l={text:"床",translatable:!0,except:["en"]},c=Object(o.a)(0),m=Object(o.a)(1);return{"(1)新規陽性者数":{value:m(t["(1)新規陽性者数"]),unit:e,bold:!0},"(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ":{value:m(t["(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 "]),unit:n,bold:!0},"(3)新規陽性者における接触歴等不明者（人数）":{value:m(t["(3)新規陽性者における接触歴等不明者（人数）"]),unit:e,bold:!0},"(3)新規陽性者における接触歴等不明者（増加比）":{value:m(t["(3)新規陽性者における接触歴等不明者（増加比）"]),unit:r,bold:!0},"(4)PCR・抗原検査（検査人数）":{value:m(t["(4)PCR・抗原検査（検査人数）"]),unit:e,bold:!0},"(4)PCR・抗原検査（陽性率）":{value:m(t["(4)PCR・抗原検査（陽性率）"]),unit:r,bold:!0},"(5)救急医療の東京ルールの適用件数":{value:m(t["(5)救急医療の東京ルールの適用件数"]),unit:n,bold:!0},"(6)入院患者数":{value:c(t["(6)入院患者数"]),unit:e,bold:!0},"(6)入院患者確保病床数":{value:c(t["(6)入院患者確保病床数"]),unit:l,bold:!1},"(7)重症患者数":{value:c(t["(7)重症患者数"]),unit:e,bold:!0},"(7)重症患者確保病床数":{value:c(t["(7)重症患者確保病床数"]),unit:l,bold:!1}}},l=function(t){return{"総括コメント-感染状況":{date:t["総括コメント-感染状況"].date,level:t["総括コメント-感染状況"].level,display:{"@ja":t["総括コメント-感染状況"].display["@ja"],"@en":t["総括コメント-感染状況"].display["@en"]}},"総括コメント-医療提供体制":{date:t["総括コメント-医療提供体制"].date,level:t["総括コメント-医療提供体制"].level,display:{"@ja":t["総括コメント-医療提供体制"].display["@ja"],"@en":t["総括コメント-医療提供体制"].display["@en"]}}}}},586:function(t,e,n){var content=n(678);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("76b3c5a9",content,!0,{sourceMap:!1})},600:function(t,e,n){"use strict";n(573)},601:function(t,e,n){var o=n(45)(!1);o.push([t.i,'.MonitoringCommentFrame[data-v-592c53a8]{border:1px solid;text-align:center;margin-bottom:10px}.MonitoringCommentFrame>p[data-v-592c53a8]{margin-top:auto;margin-bottom:auto;position:relative;font-style:normal;font-weight:600;color:#4d4d4d;padding:10px 0;font-size:1.3rem}.MonitoringCommentFrameAfter[data-v-592c53a8]{margin-top:-11px;content:"";padding:7px;border:1px solid}',""]),t.exports=o},602:function(t,e,n){"use strict";n(574)},603:function(t,e,n){var o=n(45)(!1);o.push([t.i,".RandomImageContainer[data-v-cc1b0b78]{display:flex;justify-content:center}",""]),t.exports=o},642:function(t,e,n){"use strict";n.r(e);n(108);var o=n(0).default.extend({props:{level:{type:Number,required:!0,default:0},comment:{type:String,required:!0,default:""}},data:function(){return{colors:["#96cd5f","#fffc4e","#fdbe40","#fa1629"]}}}),r=(n(600),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"MonitoringCommentFrame",style:{borderColor:""+t.colors[t.level]}},[n("p",[t._v(t._s(t.comment))])]),t._v(" "),n("div",{staticClass:"MonitoringCommentFrameAfter",style:{borderColor:""+t.colors[t.level],background:""+t.colors[t.level]}})])}),[],!1,null,"592c53a8",null);e.default=component.exports},643:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({computed:{currentImage:function(){var t=this.monitoringCommentImage.data.images.length,e=Math.floor(Math.random()*t);return this.monitoringCommentImage.data.images[e]},monitoringCommentImage:function(){return this.$store.state.monitoringCommentImage}}}),r=(n(602),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RandomImageContainer"},[n("a",{attrs:{target:"_blank",href:t.currentImage.href}},[n("img",{attrs:{width:"320",height:"240",src:t.currentImage.src,alt:t.currentImage.alt}})])])}),[],!1,null,"cc1b0b78",null);e.default=component.exports},677:function(t,e,n){"use strict";n(586)},678:function(t,e,n){var o=n(45)(!1);o.push([t.i,".MonitoringComment-date[data-v-44ff3322]{text-align:right;font-size:1.4rem}.MonitoringComment-summary-item[data-v-44ff3322]{margin-bottom:8px;font-size:1.4rem}.MonitoringCommentFrame[data-v-44ff3322]{margin:20px 0}.MonitoringCommentFrame-title[data-v-44ff3322]{margin-bottom:1px;color:#707070;font-weight:400;font-size:1.4rem}.MonitoringCommentImage[data-v-44ff3322]{margin-top:50px}.MonitoringCommentLink[data-v-44ff3322]{display:flex;justify-content:center;align-items:center;margin-top:12px;font-size:1.4rem}",""]),t.exports=o},721:function(t,e,n){"use strict";n.r(e);n(63),n(31),n(34),n(35);var o=n(61),r=n(0),l=n(110),c=n(462),m=n(642),d=n(579),f=n(580),v=n(643),h=r.default.extend({components:{AppLink:l.default,DataView:c.default,Frame:m.default,RandomImage:v.default},data:function(){return{monitoringComment:Object(f.a)(d.data),date:d.date,mdiChevronRight:o.e}},computed:{translatedMonitoringSummarizedComments:function(){var t=d.data.専門家3行コメント;return["ja","ja-basic"].includes(this.$i18n.locale)?t.map((function(t){return t["@ja"]})):t.map((function(t){return t["@en"]}))}},methods:{commentMonitoring:function(t){return["ja","ja-basic"].includes(this.$root.$i18n.locale)?this.monitoringComment[t].display["@ja"]:this.monitoringComment[t].display["@en"]},formattedDate:function(t){return this.$d(new Date(t),"date")}}}),C=(n(677),n(16)),y=n(75),j=n.n(y),x=n(507),_=n(444),component=Object(C.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard MonitoringCommentCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("感染状況・医療提供体制の分析"),"title-id":"monitoring-comment",date:t.date,"is-set-title-row":""},scopedSlots:t._u([{key:"infoPanel",fn:function(){return[n("div",{staticClass:"MonitoringComment-date"},[t._v("\n          "+t._s(t.$t("{date}時点",{date:t.formattedDate(t.monitoringComment["総括コメント-感染状況"].date)}))+"\n        ")])]},proxy:!0}])},[t._v(" "),n("div",[n("ul",t._l(t.translatedMonitoringSummarizedComments,(function(e,i){return n("li",{key:i,staticClass:"MonitoringComment-summary-item"},[t._v("\n            "+t._s(e)+"\n          ")])})),0),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-感染状況"].level-1,comment:t.commentMonitoring("総括コメント-感染状況")}})],1),t._v(" "),n("section",{staticClass:"MonitoringCommentFrame"},[n("h4",{staticClass:"MonitoringCommentFrame-title"},[t._v("\n            "+t._s(t.$t("医療提供体制"))+"\n          ")]),t._v(" "),n("frame",{attrs:{level:t.monitoringComment["総括コメント-医療提供体制"].level-1,comment:t.commentMonitoring("総括コメント-医療提供体制")}})],1),t._v(" "),n("div",{staticClass:"MonitoringCommentImage"},[n("random-image"),t._v(" "),n("div",{staticClass:"MonitoringCommentLink"},[n("v-icon",{attrs:{color:"#D9D9D9"}},[t._v(t._s(t.mdiChevronRight))]),t._v(" "),n("app-link",{attrs:{to:"https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/monitoring.html"}},[t._v("\n              "+t._s(t.$t("専門家による分析・総括コメントの詳細はこちら"))+"\n            ")])],1)],1)])])],1)],1)}),[],!1,null,"44ff3322",null);e.default=component.exports;j()(component,{VCol:x.a,VIcon:_.a})}}]);