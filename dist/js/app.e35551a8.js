(function(t){function e(e){for(var n,r,a=e[0],o=e[1],u=e[2],C=0,f=[];C<a.length;C++)r=a[C],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);c&&c(e);while(f.length)f.shift()();return l.push.apply(l,u||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],n=!0,a=1;a<i.length;a++){var o=i[a];0!==s[o]&&(n=!1)}n&&(l.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},l=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/testOnMSDis/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],o=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var c=o;l.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"25be":function(t,e,i){t.exports=i.p+"img/Help.7dde7038.svg"},2888:function(t,e,i){},3211:function(t,e,i){"use strict";i("ec45")},"4d3b":function(t,e,i){"use strict";i("2888")},"4ffd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGkSURBVHgB7VRBTsJQEJ0phRTigiP0CPUEcgRdkLRu7AIa48Z6AuAE2p0RE+pGdKc38AZyAzkCicrHgn/8v0gt0EJxY0x4SdPO/D/z3kz/fIAt/h2Yc9hkjkWBYx1l2Y+wAdixqQPHl2+zrwVsF/2HwaoYBTYBKY2YpbNCsbEuZCXBW71qhKojAqrE10X57nvNbMJvCIY1y82h+kyczqUdnFQNqXopgYKNVf8jkSBUjRiWj4Rl+ebj/F5akgnBBdn75cwEsteINA1A1KcuMCAFiFAeqdppZgKkuWT6a82sCAo9JCJ0xbN8chS0ISsBAc2pVRXsEEeDCAal9q2HOX6QEKZnJkgKli1DoJ40ipd3TwpgM0tgGkE/yYmIvdl3ISh48TVRXS8zgVDnzzkIKmHvOT1CCmbVLUJNckp1LB+40UkSA1a67rbie5j6YWOkHgc4plYycQpY3bRFTzozm/jnWXEn8OX3aFhyhSe6JpC4q7XvvY0IJIaO5QLhz0wsQCpXkdzCVfcmLcfa25TZYqrzIEjEMYVoPvrAydcmI2/dbbrF3+MLdPiZCSHuzY4AAAAASUVORK5CYII="},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("left-side-menu"),i("overview")],1)},l=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"leftSideMenu"},[i("div",{staticClass:"leftSideMenu__top"},[i("site-logo",{staticClass:"leftSideMenu__logo"}),i("div",{staticClass:"leftSideMenu__box"},t._l(t.leftMenuPoints,(function(t){return i("left-menu-point",{key:t.id,staticClass:"leftSideMenu__menuPoint",attrs:{point:t}})})),1)],1),i("div",{staticClass:"leftSideMenu__bottom"},[i("left-menu-point",{staticClass:"leftSideMenu__menuPoint",attrs:{point:t.settings}})],1)])},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menuPoint"},[i("div",{staticClass:"menuPoint__titleBox",class:{menuPoint__titleBox_active:t.point.isActive}},[i("svg",{staticClass:"menuPoint__img",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},domProps:{innerHTML:t._s(t.point.svg)}}),i("p",{staticClass:"menuPoint__title"},[t._v(t._s(t.point.title))])]),i("div",{staticClass:"menuPoint__subtitleBox"},t._l(t.point.subtitle,(function(e){return i("p",{key:e.id,staticClass:"menuPoint__subtitle"},[t._v(" "+t._s(e.name)+" ")])})),0)])},u=[],c={name:"LeftMenuPoint",props:["point"]},C=c,f=(i("3211"),i("2877")),d=Object(f["a"])(C,o,u,!1,null,null,null),_=d.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo"},[n("img",{staticClass:"logo__img",attrs:{src:i("4ffd"),alt:""}}),n("p",{staticClass:"logo__text"},[t._v("Web App")])])}],m={name:"SiteLogo"},b=m,g=(i("b843"),Object(f["a"])(b,p,v,!1,null,null,null)),h=g.exports,A={name:"LeftSideMenu",components:{SiteLogo:h,LeftMenuPoint:_},computed:{leftMenuPoints:function(){return this.$store.getters.getLeftMenuPoints},settings:function(){return this.$store.getters.getSettings}}},w=A,S=(i("ba5e"),Object(f["a"])(w,r,a,!1,null,null,null)),x=S.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"overview"},[i("site-search"),i("div",{staticClass:"overview__box"},[i("site-title"),i("tab"),i("bread-crumbs"),i("folder")],1)],1)},O=[],P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"breadCrumbs"},[i("li",{staticClass:"breadCrumbs__point"},[t._v("Overview")]),i("li",{staticClass:"breadCrumbs__point"},[t._v("subs1")])])}],y={name:"BreadCrumbs"},E=y,V=(i("e8df"),Object(f["a"])(E,P,T,!1,null,null,null)),j=V.exports,B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"folder"},[t._m(0),i("div",{staticClass:"folder__box"},t._l(t.files,(function(e){return i("div",{key:e.id,staticClass:"folder__row"},[i("p",{staticClass:"folder__name"},[t._v(t._s(e.title))]),i("p",{staticClass:"folder__modT"},[t._v(t._s(e.modifTime))]),i("p",{staticClass:"folder__type"},[t._v(t._s(e.type))])])})),0)])},L=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"folder__headerRow"},[i("p",{staticClass:"folder__headerTitle folder__headerTitle_name"},[t._v("File name")]),i("p",{staticClass:"folder__headerTitle folder__headerTitle_modT"},[t._v("Modified time")]),i("p",{staticClass:"folder__headerTitle folder__headerTitle_type"},[t._v("File type")])])}],k={name:"Folder",computed:{files:function(){return this.$store.getters.getFile}}},Y=k,H=(i("5993"),Object(f["a"])(Y,B,L,!1,null,null,null)),$=H.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"siteSearch"},[n("img",{staticClass:"siteSearch__searchImg",attrs:{src:i("c89f"),alt:""}}),n("input",{staticClass:"siteSearch__input",attrs:{type:"text",placeholder:"Search"}}),n("img",{staticClass:"siteSearch__button",attrs:{src:i("25be"),alt:""}}),n("img",{staticClass:"siteSearch__button",attrs:{src:i("db4f"),alt:""}})])}],R={name:"SiteSearch"},Z=R,z=(i("f16a"),Object(f["a"])(Z,I,F,!1,null,null,null)),J=z.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"siteTitle"},[i("h2",{staticClass:"siteTitle__name"},[t._v("Overview")]),i("div",{staticClass:"siteTitle__btnBox"},[i("button",{staticClass:"siteTitle__btn"},[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5 5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H18C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V8C18.9999 8.26519 18.8946 8.51951 18.707 8.707L14 13.414V17C13.9999 17.2652 13.8945 17.5195 13.707 17.707L11.707 19.707C11.5671 19.8468 11.389 19.942 11.195 19.9806C11.0011 20.0192 10.8 19.9993 10.6173 19.9237C10.4346 19.848 10.2785 19.7199 10.1686 19.5555C10.0587 19.391 10 19.1978 10 19V13.414L5.293 8.707C5.10545 8.51951 5.00006 8.26519 5 8V5Z",fill:"#5B6871"}})]),t._v("Filter ")]),i("button",{staticClass:"siteTitle__btn siteTitle__btn_colorBlue"},[i("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12C17 12.2652 16.8946 12.5196 16.7071 12.7071C16.5196 12.8946 16.2652 13 16 13H13V16C13 16.2652 12.8946 16.5196 12.7071 16.7071C12.5196 16.8946 12.2652 17 12 17C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H11V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7Z",fill:"#5B6871"}})]),t._v(" Create Folder ")])])])},D=[],K={name:"SiteTitle"},U=K,Q=(i("4d3b"),Object(f["a"])(U,X,D,!1,null,null,null)),q=Q.exports,N=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},W=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"tab"},[i("li",{staticClass:"tab__point tab__point_active"},[t._v("sub1")]),i("li",{staticClass:"tab__point"},[t._v("sub2")]),i("li",{staticClass:"tab__point"},[t._v("sub3")])])}],G={name:"Tab"},tt=G,et=(i("d50b"),Object(f["a"])(tt,N,W,!1,null,null,null)),it=et.exports,nt={name:"Overview",components:{SiteSearch:J,SiteTitle:q,Tab:it,BreadCrumbs:j,Folder:$}},st=nt,lt=(i("a9d9"),Object(f["a"])(st,M,O,!1,null,null,null)),rt=lt.exports,at={name:"App",components:{LeftSideMenu:x,Overview:rt}},ot=at,ut=(i("5c0b"),Object(f["a"])(ot,s,l,!1,null,null,null)),ct=ut.exports,Ct=i("2f62");n["a"].use(Ct["a"]);var ft=new Ct["a"].Store({state:{leftMenuPoints:[{title:"Owerview",svg:'<path\n      d="M12.7069 4.29303C12.5194 4.10556 12.2651 4.00024 11.9999 4.00024C11.7348 4.00024 11.4804 4.10556 11.2929 4.29303L4.29292 11.293C4.11076 11.4816 4.00997 11.7342 4.01224 11.9964C4.01452 12.2586 4.11969 12.5094 4.3051 12.6948C4.49051 12.8803 4.74132 12.9854 5.00352 12.9877C5.26571 12.99 5.51832 12.8892 5.70692 12.707L5.99992 12.414V19C5.99992 19.2652 6.10528 19.5196 6.29281 19.7071C6.48035 19.8947 6.7347 20 6.99992 20H8.99992C9.26514 20 9.51949 19.8947 9.70703 19.7071C9.89456 19.5196 9.99992 19.2652 9.99992 19V17C9.99992 16.7348 10.1053 16.4805 10.2928 16.2929C10.4803 16.1054 10.7347 16 10.9999 16H12.9999C13.2651 16 13.5195 16.1054 13.707 16.2929C13.8946 16.4805 13.9999 16.7348 13.9999 17V19C13.9999 19.2652 14.1053 19.5196 14.2928 19.7071C14.4803 19.8947 14.7347 20 14.9999 20H16.9999C17.2651 20 17.5195 19.8947 17.707 19.7071C17.8946 19.5196 17.9999 19.2652 17.9999 19V12.414L18.2929 12.707C18.4815 12.8892 18.7341 12.99 18.9963 12.9877C19.2585 12.9854 19.5093 12.8803 19.6947 12.6948C19.8801 12.5094 19.9853 12.2586 19.9876 11.9964C19.9899 11.7342 19.8891 11.4816 19.7069 11.293L12.7069 4.29303Z"\n      fill="#84919A"\n    />',subtitle:[{name:"sub1",id:"subsOwerview0001"},{name:"sub2",id:"subsOwerview0002"},{name:"sub3",id:"subsOwerview0003"}],id:"menuPoint0001",isActive:!0},{title:"Document",svg:'\n      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C7.46957 4 6.96086 4.21071 6.58579 4.58579C6.21071 4.96086 6 5.46957 6 6V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V9.414C17.9999 8.88361 17.7891 8.37499 17.414 8L14 4.586C13.625 4.2109 13.1164 4.00011 12.586 4H8ZM10 14C10 13.7348 9.89464 13.4804 9.70711 13.2929C9.51957 13.1054 9.26522 13 9 13C8.73478 13 8.48043 13.1054 8.29289 13.2929C8.10536 13.4804 8 13.7348 8 14V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18C9.26522 18 9.51957 17.8946 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V14ZM12 11C12.2652 11 12.5196 11.1054 12.7071 11.2929C12.8946 11.4804 13 11.7348 13 12V17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17V12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11ZM16 10C16 9.73478 15.8946 9.48043 15.7071 9.29289C15.5196 9.10536 15.2652 9 15 9C14.7348 9 14.4804 9.10536 14.2929 9.29289C14.1054 9.48043 14 9.73478 14 10V17C14 17.2652 14.1054 17.5196 14.2929 17.7071C14.4804 17.8946 14.7348 18 15 18C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V10Z" fill="#84919A"/>\n      ',subtitle:[{name:"subs1",id:"subsDocument0001"},{name:"subs2",id:"subsDocument0002"},{name:"subs3",id:"subsDocument0003"}],id:"menuPoint0002",isActive:!1}],settings:{title:"Settings",svg:'\n<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4897 5.17C13.1097 3.61 10.8898 3.61 10.5098 5.17C10.453 5.40442 10.3417 5.62213 10.185 5.80541C10.0282 5.9887 9.83038 6.13238 9.60759 6.22477C9.38481 6.31716 9.14336 6.35564 8.90289 6.33709C8.66242 6.31854 8.42973 6.24347 8.22375 6.118C6.85175 5.282 5.28175 6.852 6.11775 8.224C6.65775 9.11 6.17875 10.266 5.17075 10.511C3.60975 10.89 3.60975 13.111 5.17075 13.489C5.40523 13.5458 5.62298 13.6572 5.80626 13.8141C5.98955 13.971 6.13319 14.1689 6.22549 14.3918C6.31779 14.6147 6.35614 14.8563 6.33742 15.0968C6.3187 15.3373 6.24343 15.5701 6.11775 15.776C5.28175 17.148 6.85175 18.718 8.22375 17.882C8.42969 17.7563 8.6624 17.6811 8.90293 17.6623C9.14347 17.6436 9.38502 17.682 9.60793 17.7743C9.83084 17.8666 10.0288 18.0102 10.1857 18.1935C10.3426 18.3768 10.4539 18.5945 10.5107 18.829C10.8898 20.39 13.1108 20.39 13.4888 18.829C13.5457 18.5946 13.6572 18.377 13.8142 18.1939C13.9711 18.0107 14.169 17.8672 14.3918 17.7749C14.6147 17.6826 14.8561 17.6442 15.0966 17.6628C15.3371 17.6815 15.5698 17.7565 15.7758 17.882C17.1477 18.718 18.7178 17.148 17.8818 15.776C17.7563 15.57 17.6812 15.3373 17.6626 15.0969C17.644 14.8564 17.6824 14.6149 17.7747 14.3921C17.8669 14.1692 18.0105 13.9713 18.1936 13.8144C18.3768 13.6575 18.5944 13.546 18.8288 13.489C20.3898 13.11 20.3898 10.889 18.8288 10.511C18.5943 10.4542 18.3765 10.3428 18.1932 10.1859C18.01 10.029 17.8663 9.83109 17.774 9.60818C17.6817 9.38527 17.6434 9.14372 17.6621 8.90318C17.6808 8.66265 17.7561 8.42994 17.8818 8.224C18.7178 6.852 17.1477 5.282 15.7758 6.118C15.5698 6.24368 15.3371 6.31895 15.0966 6.33767C14.856 6.35639 14.6145 6.31804 14.3916 6.22574C14.1687 6.13344 13.9707 5.9898 13.8138 5.80651C13.6569 5.62323 13.5456 5.40548 13.4888 5.171L13.4897 5.17ZM11.9998 15C12.7954 15 13.5585 14.6839 14.1211 14.1213C14.6837 13.5587 14.9998 12.7956 14.9998 12C14.9998 11.2044 14.6837 10.4413 14.1211 9.87868C13.5585 9.31607 12.7954 9 11.9998 9C11.2041 9 10.441 9.31607 9.87843 9.87868C9.31582 10.4413 8.99975 11.2044 8.99975 12C8.99975 12.7956 9.31582 13.5587 9.87843 14.1213C10.441 14.6839 11.2041 15 11.9998 15Z" fill="#84919A"/>\n    ',subtitle:[],id:"settings",isActive:!1},file:[{title:"name1",id:"file000001",modifTime:"Dec 30, 09:42 PM",type:"txt"},{title:"name2",id:"file000002",modifTime:"Oct 15, 10:20 PM",type:"txt"},{title:"name3",id:"file000003",modifTime:"Sep 20, 14:00 PM",type:"txt"}]},getters:{getLeftMenuPoints:function(t){return t.leftMenuPoints},getSettings:function(t){return t.settings},getFile:function(t){return t.file}},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:ft,render:function(t){return t(ct)}}).$mount("#app")},5993:function(t,e,i){"use strict";i("b170")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"6c20":function(t,e,i){},"94de":function(t,e,i){},"9c0c":function(t,e,i){},a9d9:function(t,e,i){"use strict";i("df41")},b170:function(t,e,i){},b843:function(t,e,i){"use strict";i("d1bf")},ba5e:function(t,e,i){"use strict";i("94de")},c89f:function(t,e,i){t.exports=i.p+"img/Search.8944a74a.svg"},d1bf:function(t,e,i){},d50b:function(t,e,i){"use strict";i("6c20")},db4f:function(t,e,i){t.exports=i.p+"img/Profile.818a984d.svg"},df41:function(t,e,i){},e8df:function(t,e,i){"use strict";i("e98b")},e98b:function(t,e,i){},ec45:function(t,e,i){},ef11:function(t,e,i){},f16a:function(t,e,i){"use strict";i("ef11")}});
//# sourceMappingURL=app.e35551a8.js.map