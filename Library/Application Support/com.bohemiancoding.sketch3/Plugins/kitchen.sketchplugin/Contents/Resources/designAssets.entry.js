!function(e){function t(t){for(var a,c,o=t[0],i=t[1],l=t[2],d=0,f=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);f.length;)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={2:0},s=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;s.push([649,0]),n()}({0:function(e,t){e.exports=React},258:function(e,t,n){},649:function(e,t,n){e.exports=n(719)},650:function(e,t,n){},652:function(e,t,n){},719:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),c=n.n(s),o=n(9),i=n.n(o),l=n(10),u=n.n(l),d=n(3),f=n.n(d),m=n(11),h=n.n(m),p=n(12),g=n.n(p),y=n(6),v=n.n(y),b=n(14);n(650);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}function w(e){console.log("showStatus",e);var t=e.message;this.setState({status:t})}var L=function(e){h()(n,e);var t=E(n);function n(e){var a;return i()(this,n),(a=t.call(this,e)).state={status:""},window.showStatus=w.bind(f()(a)),a}return u()(n,[{key:"render",value:function(){var e=this.state.status,t=r.a.createElement("a",{href:"https://www.yuque.com/kitchen/doc/custom-assets",target:"_blank",onClick:function(){return Object(b.a)("open",["https://www.yuque.com/kitchen/doc/custom-assets"])}},"帮助文档");return r.a.createElement("div",{className:"scout"},r.a.createElement("img",{className:"logo-spin",src:"https://gw.alipayobjects.com/zos/antfincdn/2qPH35jin2/logospin.gif",alt:"logospin"}),r.a.createElement("h2",{className:"status-msg"},e),r.a.createElement("div",{className:"scout-tips"},r.a.createElement("p",null,"若长时间未加载成功，请查看 ",t)))}}]),n}(r.a.Component),S=n(41),k=n.n(S),C=n(2),N=n.n(C),R=(n(40),n(13)),A=n(111),D=n.n(A),T=n(1),P=n.n(T),x=(n(49),n(21)),I=(n(31),n(5)),B=(n(54),n(28)),O=function(e){var t=e.handleSearch,n=e.onOpenSettingPage;return r.a.createElement("header",null,r.a.createElement("div",{className:"search"},r.a.createElement(B.a.Search,{id:"searchInput",placeholder:"搜索设计资产 ⌘F",style:{height:"30px"},allowClear:!0,onSearch:t,autoFocus:!0,onChange:function(e){""===e.target.value&&t("")}})),r.a.createElement(x.a,{title:"管理资产",placement:"bottom"},r.a.createElement("div",{className:"mode",onClick:n},r.a.createElement(I.a,{type:"plus",style:{width:"16px",height:"12px",color:"#737373"}}))))},U=function(e){var t=e.tabList,n=e.currentTab,a=e.switchTab,s=e.countSearchResult,c=e.isSearch;return r.a.createElement("div",{className:"tab"},t.map((function(e){return r.a.createElement("div",{key:e.name,className:"".concat(n.name===e.name?"active":""," ").concat(c&&0===s[e.name]?"disabled":""),onClick:function(){return a(e)}},r.a.createElement("span",{style:{useSelect:"none"}},e.displayName),r.a.createElement("span",{style:{display:c?"inline-block":"none"}},"(",s[e.name],")"))})))},j=n(33),F=n.n(j),_=(n(193),n(55)),M={DEFAULT_FEEDBACK_URL:"https://www.yuque.com/kitchen/topics"};function z(e){var t=e.split(".");return t[t.length-1]}function K(e,t){var n=e.find((function(e){return"feedbackUrl-external"===e.key}))?e.find((function(e){return"feedbackUrl-external"===e.key})).value:null,a=e.find((function(e){return"feedbackUrl-internal"===e.key}))?e.find((function(e){return"feedbackUrl-internal"===e.key})).value:null;return t&&a?a:!t&&n?n:M.DEFAULT_FEEDBACK_URL}function V(e){for(var t="",n="",a={assetSet:e.assetSet,category:e.category,level1:e.level1,level2:e.level2,asset:e.asset},r=Object.keys(a),s=0;s<r.length;s+=1){var c=r[s];if(!a[c])break;"assetSet"!==c&&(n+="/"),n+=a[c],t=c}return n="".concat(t,"-").concat(n)}function q(e){var t=[];return function e(t,n){t.contains&&t.contains.length>0&&t.contains.forEach((function(t){t.isAsset&&n.push(t),e(t,n)}))}(e,t),t}var H=n(210);function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var J=_.a.SubMenu,W=function(e){h()(n,e);var t=G(n);function n(){var e;i()(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r)),N()(f()(e),"handleClick",(function(t){var n=t.key,a=e.props,r=a.designAssets,s=a.category,c=a.onChangeCurrentBrands,o=a.toggleContentNeedRescroll,i=a.setContentScrollPosition,l=r.map((function(e){return e.name})).find((function(e){return e===n}));if(l)c(s,l),i(s,0),o();else{var u=document.getElementById(n);u&&u.scrollIntoView()}})),N()(f()(e),"handleLvl2Click",(function(e){var t=e.key,n=document.getElementById(t);n&&n.scrollIntoView()})),N()(f()(e),"orderedDesignAssets",(function(){var t=e.props.designAssets,n=t.map((function(e){return e.displayName})),a=H.a.ASSET_WHITE_LIST.map((function(e){return e.name})),r=[];return a.forEach((function(e){var t=n.findIndex((function(t){return t===e}));t>=0&&(r.push(e),n.splice(t,1,null))})),n=n.filter((function(e){return e})).sort(),(r=[].concat(F()(r),F()(n))).map((function(e){return t.find((function(t){return t.displayName===e}))}))})),e}return u()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.width,a=t.category,s=t.currentAssets,c=t.currentBrand,o=s?s.find((function(e){return e.tab===a})).currentAsset:null,i=o?o.id:"",l=this.orderedDesignAssets();return r.a.createElement("div",{className:"nav-container"},r.a.createElement("div",{className:"menu-container"},l.map((function(t){return r.a.createElement(r.a.Fragment,{key:t.name},!t[a]||t[a].length<=0?null:r.a.createElement(_.a,{onClick:e.handleClick,style:{width:n,backgroundColor:"#f5f5f5",border:"none"},mode:"vertical",overflowedIndicator:r.a.createElement(I.a,{type:"up"}),selectable:!1,selectedKeys:[i],subMenuOpenDelay:.1,openAnimation:null,openTransition:""},t[a].find((function(e){return!0===e.show}))?r.a.createElement(_.a.Item,{key:t.name,style:{color:"".concat(t.name===c?"#1073ee":"rgba(0, 0, 0, 0.65)"),backgroundColor:"".concat(t.name===c?"#f0f5ff":""),fontFamily:"PingFangSC-Medium"}},r.a.createElement(x.a,{title:t.displayName,mouseEnterDelay:1},t.displayName)):null,t[a].map((function(n){return r.a.createElement(J,{key:V({assetSet:t.name,category:a,level1:n.name}),title:z(n.name),className:"asset-navigation-submenu",style:{display:"".concat(n.show&&t.name===c?"":"none"),marginLeft:6},onTitleClick:e.handleLvl2Click},(n.contains||[]).map((function(e){return r.a.createElement(_.a.Item,{key:V({assetSet:t.name,category:a,level1:n.name,level2:e.name}),style:{display:"".concat(e.show?"":"none")}},z(e.name))})))}))))}))))}}]),n}(r.a.PureComponent),Y=n(261),Q=n.n(Y),X=(n(163),n(72)),Z=n(348),$=n.n(Z),ee=n(206);function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var ne=function(e){h()(n,e);var t=te(n);function n(e){var a;return i()(this,n),a=t.call(this,e),N()(f()(a),"onLoad",(function(){var e=a.props,t=e.src,n=e.asset,r=e.memberLoaded,s=256,c=200;$()(t).then((function(e){if(0!==e.height&&0!==e.width){"Illustration"===n.assetCategory&&e.width<=e.height&&(s=54,c=200);var t=e.height/2,r=e.width/2;if(r>s){var o=r/s;r=s,t/=o}if(t>c){var i=t/c;t=c,r/=i}a.setState({height:t,width:r})}})),r(n.id)})),N()(f()(a),"handleDragStart",(function(e){e.dataTransfer.setData("","eliminateDropImageElement")})),N()(f()(a),"handleDragEnd",(function(e){var t=a.props.UUID,n={x:e.screenX,y:e.screenY},r=a.props.asset,s="unknown";switch(r.assetCategory){case"Component":s="组件";break;case"Block":s="区块";break;case"Template":s="模板";break;case"Illustraction":s="插画"}var c=r.libraryName.split("-").pop();(0,a.context.track)({action:"即拖即用-".concat(s,"-").concat(c,"-").concat(r.name)}),window.Tracert&&window.Tracert.click("designAssets.dragAsset",{UUID:t,type:"".concat(s,"-").concat(c,"-").concat(r.name)}),window.pluginCall("handleImageDragEnd",[r,n])})),a.state={height:"",width:""},a}return u()(n,[{key:"render",value:function(){var e=this.props,t=e.src,n=e.alt,a=e.asset,s=this.state,c=s.height,o=s.width,i={display:a.show?"":"none"};return o&&c?(i.width=o,i.height=c):i.visibility="hidden",r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{placement:"bottom",title:n,arrowPointAtCenter:!0},r.a.createElement(ee.a,{src:t,alt:n,onDragStart:this.handleDragStart,onDragEnd:this.handleDragEnd,style:i,onLoad:this.onLoad,className:"component-image",cache:!0})))}}]),n}(r.a.PureComponent);N()(ne,"contextTypes",{track:P.a.func});var ae=ne;function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var se=function(e){h()(n,e);var t=re(n);function n(e){var a;i()(this,n),a=t.call(this,e),N()(f()(a),"memberLoaded",(function(e){var t=a.state.assetsLoadingArr.slice();t.find((function(t){return t.id===e})).loaded=!0,a.setState({assetsLoadingArr:t,isAllLoaded:t.every((function(e){return!0===e.loaded}))})}));var r=a.props.assets.slice().map((function(e){return{id:e.id,loaded:!1}}));return a.state={assetsLoadingArr:r,isAllLoaded:!1},a}return u()(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.levelObject,a=t.assets,s=t.UUID,c=this.state.isAllLoaded;return r.a.createElement("div",{className:"asset-content rest-level",style:n.show?null:{display:"none"}},c?null:r.a.createElement(X.a,{active:!0}),a.map((function(t){return r.a.createElement(ae,{key:t.id+t.fullName,src:t.path,alt:t.cleanFullName,asset:t,UUID:s,memberLoaded:e.memberLoaded,style:c?null:{display:"none"}})})))}}]),n}(r.a.PureComponent);N()(se,"contextTypes",{track:P.a.func});var ce=se;function oe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var ie=function(e){h()(n,e);var t=oe(n);function n(){var e;return i()(this,n),e=t.call(this),N()(f()(e),"handleScroll",(function(){var t=e.props,n=t.onChangeCurrentAsset,a=t.category;(0,t.setContentScrollPosition)(a,e.content.scrollTop);for(var r=e.content.getElementsByClassName("level-sub"),s=0,c=r.length-1;s<c;){if(c-s<=1){n(a,{id:r[s].dataset.index});break}var o=Math.floor((c-s)/2+s),i=r[o].getBoundingClientRect().top-e.content.offsetTop,l=r[o].getBoundingClientRect().bottom-e.content.offsetTop;if(i<100&&l>0){n(a,{id:r[o].dataset.index});break}l<=0&&(s=o),i>0&&(c=o)}})),N()(f()(e),"renderLevels",(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{onlySelf:!1},a=e.props.UUID,s=n.onlySelf,c=[];return c=s?[t]:q(t),r.a.createElement(ce,{levelObject:t,assets:c,UUID:a})})),N()(f()(e),"renderTitleForLevel",(function(e,t){var n=e.level;return!n||n<1||n>2?null:1===n||2===n||e.isAsset?r.a.createElement("div",{className:"asset-content asset-title level".concat(1===n?1:"-sub"),id:"level".concat(n,"-").concat(t.str),"data-index":"level".concat(n,"-").concat(t.str),style:{display:"".concat(e.show?"":"none")}},1===n?z(e.name):"".concat(t.arr.join("/"))):null})),N()(f()(e),"recursiveRenderLevels",(function(t,n,a,s){if(s.hierarchy){a.hierarchy={},a.hierarchy.str="".concat(s.hierarchy.str,"/").concat(a.name);var c=s.hierarchy.arr.slice();c.push(a.name),a.hierarchy.arr=c}else a.hierarchy={},a.hierarchy.str="".concat(t.name,"/").concat(n,"/").concat(a.name),a.hierarchy.arr=[a.name];return r.a.createElement(r.a.Fragment,{key:a.name},e.renderTitleForLevel(a,a.hierarchy),a.isAsset?e.renderLevels(a,{onlySelf:!0}):null,a.level<2&&a.contains&&a.contains.length>0?a.contains.map((function(r){return e.recursiveRenderLevels(t,n,r,a)})):null,a.level>=2&&a.contains&&a.contains.length>0?e.renderLevels(a):null)})),N()(f()(e),"renderCategory",(function(t,n){return t[n].map((function(a){return e.recursiveRenderLevels(t,n,a,t[n])}))})),N()(f()(e),"colorMode",(function(){var t=e.props,n=t.designAssets,a=t.currentBrand,r="light";if(n&&a){var s=n.find((function(e){return e.name===a}));if(s&&s.info){var c=s.info.find((function(e){return"color-mode"===e.key}));c&&c.value&&"dark"===c.value&&(r="dark")}}return r})),e.handleScroll=Q()(e.handleScroll,500),e}return u()(n,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.category,n=e.contentNeedRescroll,a=e.toggleContentNeedRescroll,r=e.contentScrollPositions,s=r?r.find((function(e){return e.tab===t})).position:null;!0===n&&(this.content.scrollTop=s,a())}},{key:"render",value:function(){var e=this,t=this.props,n=t.designAssets,a=t.currentBrand,s=t.category,c=t.UUID,o=t.isInternal;return r.a.createElement("div",{className:"content ".concat(this.colorMode()),onScroll:this.handleScroll,ref:function(t){e.content=t}},n.map((function(t){return r.a.createElement(r.a.Fragment,{key:t.name},!t[s]||t[s].length<=0||t.name!==a?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"asset-set",id:"assetSet-".concat(t.name,"/").concat(s),style:{display:"".concat(t.show?"":"none")}},r.a.createElement("span",null,t.displayName.includes("Ant Design")&&r.a.createElement("img",{className:"asset-set-logo",src:"https://gw.alipayobjects.com/zos/antfincdn/lOvzKcchVY/antd.png",alt:"Ant Design Logo"}),t.displayName),K(t.info,o)?r.a.createElement(x.a,{placement:"bottomRight",title:"提交反馈意见",arrowPointAtCenter:!0},r.a.createElement("span",{className:"icon"},r.a.createElement("a",{href:K(t.info,o),target:"_blank",onClick:function(){return Object(b.a)("open",[K(t.info,o)])},style:{color:"rgba(0, 0, 0, 0.65)",fontSize:14}},r.a.createElement(I.a,{type:"message"})))):null),e.renderCategory(t,s,c)))})))}}]),n}(r.a.PureComponent),le=function(e){var t=e.onCloseSettingPage;return r.a.createElement("header",null,r.a.createElement("div",{className:"mode",onClick:t},r.a.createElement(I.a,{type:"left",style:{color:"#737373",width:"16px"}})),r.a.createElement("div",{className:"header-title",style:{marginRight:32}},r.a.createElement("h1",null,"设计资产库")))},ue=function(e){var t=e.tabList,n=e.currentTab,a=e.switchTab;return r.a.createElement("div",{className:"tab"},t.map((function(e){return r.a.createElement("div",{key:e.name,className:"".concat(n.name===e.name?"active":""),onClick:function(){return a(e)}},r.a.createElement("span",{style:{useSelect:"none"}},e.displayName))})))},de=(n(192),n(113));n(258);function fe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var me=function(e){h()(n,e);var t=fe(n);function n(e){var a;return i()(this,n),a=t.call(this,e),N()(f()(a),"statusText",(function(e){switch(e){case"available":return"";case"inKitchen":return"已添加";case"updatable":return"有更新";default:return""}})),N()(f()(a),"addOrDeleteBtn",(function(e){return a.isProgressing()?null:e&&"inKitchen"!==e?r.a.createElement(I.a,{type:"plus",className:"btn-icon plus",style:{color:"#1073ee"}}):r.a.createElement(I.a,{type:"minus",className:"btn-icon minus",style:{color:"#000000",opacity:.25}})})),N()(f()(a),"onCancel",(function(){console.log("cancel")})),N()(f()(a),"onClickAddOrDeleteBtn",(function(){var e=a.props,t=e.assetLib,n=e.handleAddLibrary,r=e.handleRemoveLibrary,s=t.status;"available"===s||"inSketch"===s?n(t):"inKitchen"===s?r(t):R.a.error("不可操作")})),N()(f()(a),"isProgressing",(function(){var e=a.props.progressInfo;return e&&e.percent&&"100"!==e.percent})),a.state={progressStatus:"active"},a}return u()(n,[{key:"render",value:function(){var e=this.props,t=e.assetLib,n=e.progressInfo,a=t.displayName,s=t.status,c="active"===this.state.progressStatus?r.a.createElement(x.a,{title:"取消上传",placement:"topRight",arrowPointAtCenter:!0},r.a.createElement(I.a,{className:"btn-cancel-export",onClick:this.onCancel,type:"close-circle",theme:"filled",style:{color:"#000000",opacity:.15,marginLeft:"14px"}})):null;return r.a.createElement("div",{className:"asset-block"},r.a.createElement("div",{className:"left"},r.a.createElement("div",{className:"add-delete-btn ".concat(s),onClick:this.onClickAddOrDeleteBtn},this.addOrDeleteBtn(s)),r.a.createElement("div",{className:"asset-name-text"},a)),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"asset-status ".concat(s," ").concat(this.isProgressing()?"hidden":null)},r.a.createElement("div",{className:"status-text"},this.statusText(s)),r.a.createElement("div",{className:"update-btn"},r.a.createElement(I.a,{type:"sync",style:{color:"#1073ee"}}))),r.a.createElement("div",{className:"progress-area  ".concat(this.isProgressing()?null:"hidden"," ")},r.a.createElement(de.a,{percent:n&&n.percent?parseInt(n.percent,10):parseInt(0,10),size:"small",status:"active",strokeColor:"#1073ee",showInfo:!1}),c)))}}]),n}(r.a.Component),he=function(e){var t=e.libs,n=e.handleAddLibrary,a=e.handleRemoveLibrary,s=e.progressList;return r.a.createElement("div",{className:"asset-list"},t&&0!==t.length?t.map((function(e){return r.a.createElement(me,{key:e.name,assetLib:e,handleAddLibrary:n,handleRemoveLibrary:a,progressInfo:s.find((function(t){return t.libName===e.name}))})})):r.a.createElement("div",null,"暂无组件库"))};function pe(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}var ge=[{displayName:"官方",name:"official"},{displayName:"自定义",name:"custom"}],ye=function(e){h()(n,e);var t=pe(n);function n(e){var a;return i()(this,n),a=t.call(this,e),N()(f()(a),"switchTab",(function(e){var t=a.state.currentTab;e.name!==t.name&&a.setState({currentTab:e})})),N()(f()(a),"customLocalLibs",(function(){var e=a.props.assetLibs,t=a.state.currentTab;return e.filter((function(e){return e.certificate===t.name&&["LocalUser","User"].includes(e.libraryType)}))})),N()(f()(a),"customRemoteLibs",(function(){var e=a.props.assetLibs,t=a.state.currentTab;return e.filter((function(e){return e.certificate===t.name&&["remote","Remote","RemoteUser","RemoteTeam","RemoteThirdParty"].includes(e.libraryType)}))})),N()(f()(a),"customLibsContent",(function(e,t){var n=a.props,s=n.handleAddLibrary,c=n.handleRemoveLibrary,o=n.progressList,i=a.state.currentTab;return t&&t.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"library-type-title"},e),r.a.createElement(he,{type:i.name,libs:t,handleAddLibrary:s,handleRemoveLibrary:c,progressList:o})):null})),a.state={currentTab:ge[0]},a}return u()(n,[{key:"render",value:function(){var e=this.props,t=e.width,n=e.onCloseSettingPage,a=e.assetLibs,s=e.handleAddLibrary,c=e.handleRemoveLibrary,o=e.progressList,i=this.state.currentTab,l=this.customLocalLibs(),u=l&&l.length>0,d=this.customRemoteLibs(),f=d&&d.length>0,m=r.a.createElement("a",{href:"https://www.yuque.com/kitchen/doc/custom-assets",target:"_blank",onClick:function(){return Object(b.a)("open",["https://www.yuque.com/kitchen/doc/custom-assets"])}},"帮助文档");return r.a.createElement("div",{className:"designassets",style:{width:"".concat(t,"px")}},r.a.createElement(le,{onCloseSettingPage:n}),r.a.createElement(ue,{tabList:ge,currentTab:i,switchTab:this.switchTab}),r.a.createElement("div",{className:"setting-content"},"official"===i.name?r.a.createElement(he,{type:i.name,libs:a.filter((function(e){return e.certificate===i.name})),handleAddLibrary:s,handleRemoveLibrary:c,progressList:o}):r.a.createElement(r.a.Fragment,null,u||f?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"custom-guide"},r.a.createElement("p",null,"点击下方「+」，添加你的组件库到设计资产「组件」面板。 "),r.a.createElement("p",null,"当源文件大于 2M 时，可能需要较长加载时间。"),r.a.createElement("p",null," 如有问题，请查看 ",m,"。")),this.customLibsContent("本地组件库",l),this.customLibsContent("远程组件库",d)):r.a.createElement("div",{className:"error-guide"},r.a.createElement("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/2a443xIHrG/Group2.svg",alt:"no library",style:{paddingBottom:"20px"}}),r.a.createElement("p",{style:{width:"284px",textAlign:"center"}},"当前还没有你的组件库。可点击左上角「Sketch-首选项-组件库」进行添加，然后将自动显示在此面板。 如有问题，请查看 ",m,"。")))))}}]),n}(r.a.Component),ve=(n(46),n(18));function be(e){var t=e.toSetting,n=e.sketchVersion;return r.a.createElement("div",{className:"empty-page"},r.a.createElement("img",{className:"logo-image",src:"https://gw.alipayobjects.com/zos/rmsportal/sMoaeOgqQmyUyBuizPhu.png",style:{width:"64px",opacity:.8},alt:"logo"}),n<58?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"当前 Sketch 版本过低"),r.a.createElement("div",{className:"tips"},r.a.createElement("p",null,"Kitchen「设计资产」功能要求 Sketch 版本在 58 及以上，请升级 Sketch 版本后使用。"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"当前未添加设计资产"),r.a.createElement("div",{className:"tips"},r.a.createElement("p",null,"点击下方按钮添加官方或自定义 Sketch 组件库，然后就可一键拖拽使用")),r.a.createElement(ve.a,{className:"add-lib-btn",type:"primary",onClick:t},"立即添加")))}n(68);function Ee(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=v()(e);if(t){var r=v()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return g()(this,n)}}window.pluginCall=b.a;var we=[{displayName:"组件",name:"components"},{displayName:"区块",name:"blocks"},{displayName:"模板",name:"templates"},{displayName:"插画",name:"illustrations"}],Le="inKitchen",Se=we.map((function(e){return e.name}));function ke(e){var t=this.state.assetLibrariesData;console.log("getAssetLibrariesInfo: "),console.log(e),this.setState({assetLibs:e});var n=t.filter((function(t){return e.some((function(e){return e.sourceName===t.name&&e.status===Le}))}));this.updateData(n)}function Ce(e){console.log(" get updateAssetLibrariesData: "),console.log(e);var t=this.state.assetLibrariesData.filter((function(t){return t.name!==e.name}));t.push(e),this.updateData(t),console.log("after setState")}function Ne(e){console.log("handle progress---",e);var t=e.libName,n=e.percent,a=e.success,r=this.state.progressList.slice();(r=r.filter((function(e){return e.libName!==t}))).push({libName:t,percent:n,success:a}),this.setState({progressList:r})}window.addedLibrary=function(e){console.log("added lib ".concat(e)),R.a.success("加载成功",4)},window.removedLibrary=function(e){console.log("removed lib ".concat(e))},document.onkeydown=function(){70===window.event.keyCode&&window.event.metaKey&&document.getElementById("searchInput").focus()};var Re=function(e){h()(n,e);var t=Ee(n);function n(e){var a;i()(this,n),a=t.call(this,e),N()(f()(a),"toggleContentNeedRescroll",(function(){var e=a.state.contentNeedRescroll;a.setState({contentNeedRescroll:!e})})),N()(f()(a),"emptyCurrentAssets",(function(){return we.map((function(e){return{tab:e.name,currentAsset:{id:""}}}))})),N()(f()(a),"switchTab",(function(e){var t=a.state.currentTab;e.name!==t.name&&a.setState({currentTab:e}),a.toggleContentNeedRescroll()})),N()(f()(a),"toggleMode",(function(){window.pluginCall("toggleWidthMode",[]),a.setState((function(e){return{mode:"wide"===e.mode?"narrow":"wide"}}))})),N()(f()(a),"changeCurrentBrands",(function(e,t){var n=a.state.currentBrands.slice();n.find((function(t){return t.tab===e})).currentBrand=t,a.setState({currentBrands:n})})),N()(f()(a),"changeCurrentAsset",(function(e,t){var n=a.state.currentAssets.slice();n.find((function(t){return t.tab===e})).currentAsset=t,a.setState({currentAssets:n})})),N()(f()(a),"setContentScrollPosition",(function(e,t){var n=a.state.contentScrollPositions.slice();n.find((function(t){return t.tab===e})).position=t,a.setState({contentScrollPositions:n})})),N()(f()(a),"getFilteredDataAndCounts",(function(){var e=a.state,t=e.searchValue,n=e.assetLibs,r=e.assetLibrariesData,s=D()(r).filter((function(e){return n.some((function(t){return t.sourceName===e.name&&t.status===Le}))})),c={components:0,blocks:0,templates:0,illustrations:0},o={};return Se.forEach((function(e){o[e]={},r.forEach((function(t){t[e].length>0&&(o[e][t.name]=0)}))})),s.forEach((function(e){Se.forEach((function(n){e[n].forEach((function(a){var r=function e(t,n,a){var r,s,c=0;return t.isAsset&&(t.show=(r=a,s=t.fullName,!r||!r.trim()||s.toLowerCase().includes(r.toLowerCase())),t.show&&(c+=1)),t.contains&&t.contains.length>0&&t.contains.forEach((function(n){c+=e(n,t,a)})),t.show&&(n.show=!0),c}(a,e,t);c[n]+=r,o[n][e.name]+=r}))}))})),{filteredData:s,counts:c,richCounts:o}})),N()(f()(a),"handleSearch",(function(e){(0,a.context.track)("搜索关键词-".concat(e)),a.setState({searchValue:e,currentAssets:a.emptyCurrentAssets()})})),N()(f()(a),"toggleSettingPage",(function(){var e=a.state.isSetting;a.setState({isSetting:!e})})),N()(f()(a),"handleAddLibrary",(function(e){console.log("adding ".concat(e.name)),R.a.loading("正在加载资产，请稍候",4),setTimeout((function(){window.pluginCall("handleAddLibrary",[e])}),1e3)})),N()(f()(a),"handleRemoveLibrary",(function(e){console.log("removing ".concat(e.name)),setTimeout((function(){window.pluginCall("handleRemoveLibrary",[e])}),99)}));var r=a.props,s=r.assetLibrariesData,c=r.assetLibrariesInfo,o=we.map((function(e){return{tab:e.name,position:0}})),l=we.filter((function(e){return!!s.map((function(t){return t[e.name]})).find((function(e){return e&&e.length>0}))})),u=we.map((function(e){var t=s.filter((function(t){return t[e.name]&&t[e.name].length>0})),n="";return t&&t.length>0&&(n=t[0].name),{tab:e.name,currentBrand:n}}));return a.state={mode:"wide",displayedTabs:l,currentTab:l[0]||{},currentBrands:u,currentAssets:a.emptyCurrentAssets(),contentNeedRescroll:!1,contentScrollPositions:o,searchValue:"",isSetting:!1,assetLibs:c,progressList:[],assetLibrariesData:s},window.handleProgress=Ne.bind(f()(a)),window.updateAssetLibrariesInfo=ke.bind(f()(a)),window.updateAssetLibrariesData=Ce.bind(f()(a)),a}return u()(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("searchInput");e&&e.focus()}},{key:"updateData",value:function(e){var t=this.state,n=t.currentTab,a=t.currentBrands,r=we.filter((function(t){return!!e.map((function(e){return e[t.name]})).find((function(e){return e&&e.length>0}))})),s=n;if(r&&0!==r.length){if(!r.some((function(e){return e.name===n.name}))){s=k()(r,1)[0]}}else s={};var c=[];a.forEach((function(e){r.some((function(t){return t.name===e.tab}))?c.push(e):c.push({tab:e.tab,currentBrand:""})})),this.setState({assetLibrariesData:e,displayedTabs:r,currentTab:s,currentBrands:c})}},{key:"render",value:function(){var e=this,t=this.props,n=t.trackData,a=t.isInternal,s=n.cnzzUUID,c=n.appVersion,o=this.state,i=o.mode,l=o.currentTab,u=o.contentNeedRescroll,d=o.currentAssets,f=o.currentBrands,m=o.searchValue,h=o.contentScrollPositions,p=o.displayedTabs,g=o.isSetting,y=o.assetLibs,v=o.assetLibrariesData,b=o.progressList,E=!!m,w="wide"===i?384:288,L="wide"===i,S=this.getFilteredDataAndCounts(),k=S.filteredData,C=S.counts,N=S.richCounts;if(g)return r.a.createElement(ye,{width:w,onCloseSettingPage:this.toggleSettingPage,assetLibs:y,handleAddLibrary:this.handleAddLibrary,handleRemoveLibrary:this.handleRemoveLibrary,progressList:b});if(!v||0===v.length||!l||0===Object.keys(l).length&&l.constructor===Object)return r.a.createElement(be,{sketchVersion:c,toSetting:this.toggleSettingPage});if(E&&0===C[l.name])for(var R=0;R<p.length;R+=1)if(0!==C[p[R].name]){this.switchTab(p[R]);break}var A=l&&l.name?f.find((function(e){return e.tab===l.name})).currentBrand:null,D=y.find((function(e){return e.sourceName===A}));if(!D||D.status!==Le)for(var T=function(t){var n=k[t],a=y.find((function(e){return e.sourceName===n.name}));a&&a.status===Le&&n[l.name]&&n[l.name].length>0&&e.changeCurrentBrands(l.name,n.name)},P=0;P<k.length;P+=1)T(P);if(E&&C[l.name]>0){var x=N[l.name];if(0===x[A]){var I=Object.keys(x).find((function(e){return x[e]>0}));this.changeCurrentBrands(l.name,I)}}return k?r.a.createElement("div",{className:"designassets",style:{width:"".concat(w,"px")}},r.a.createElement(O,{handleSearch:this.handleSearch,onOpenSettingPage:this.toggleSettingPage}),r.a.createElement(U,{tabList:p,currentTab:l,switchTab:this.switchTab,countSearchResult:C,isSearch:E,designAssets:k}),r.a.createElement("div",{className:"main-body"},L&&r.a.createElement(W,{width:96,designAssets:k,category:l.name,currentBrand:f.find((function(e){return e.tab===l.name})).currentBrand,onChangeCurrentBrands:this.changeCurrentBrands,currentAssets:d,toggleContentNeedRescroll:this.toggleContentNeedRescroll,setContentScrollPosition:this.setContentScrollPosition}),r.a.createElement(ie,{designAssets:k,category:l.name,currentBrand:f.find((function(e){return e.tab===l.name})).currentBrand,onChangeCurrentAsset:this.changeCurrentAsset,currentAssets:d,UUID:s,isInternal:a,contentNeedRescroll:u,toggleContentNeedRescroll:this.toggleContentNeedRescroll,contentScrollPositions:h,setContentScrollPosition:this.setContentScrollPosition,assetLibs:y,handleAddLibrary:this.handleAddLibrary,handleRemoveLibrary:this.handleRemoveLibrary}))):void 0}}]),n}(r.a.Component);N()(Re,"contextTypes",{track:P.a.func});var Ae=Re,De=n(47),Te=n(62),Pe=(n(652),Object(De.a)((function(e){return r.a.createElement(Ae,e)}),"资产"));window.init=function(e){if(console.log("data-----"),console.log(e),!window._kitchen_designAssets_isInit){var t=e.isDev;(t="true"===String(t)||"1"===String(t))||Object(Te.a)(),e.isScout?c.a.render(r.a.createElement(L,null),document.getElementById("kitchen-plugin-root")):(window._kitchen_designAssets_isInit=!0,c.a.render(r.a.createElement(Pe,e),document.getElementById("kitchen-plugin-root")))}}},8:function(e,t){e.exports=ReactDOM}});