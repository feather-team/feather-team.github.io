var require,define;!function(e,t){function n(e){return"[object Array]"==Object.prototype.toString.call(e)}function r(e){return e?n(e)?e:[e]:[]}function o(e,t){if(n(e))for(var r=0;r<e.length;r++)t(e[r],r);else for(var r in e)t(e[r],r)}function i(e,t){if(e=r(e),e.indexOf)return e.indexOf(t)>-1;for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1}function c(e){return"function"==typeof e}function a(e,t,n,r){if(a.cache[e])return void(console&&console.log("module "+e+" is exists!"));var o=this;o.modulename=e,o.callback=t,o.depths=a.getDeps(n),o.needLoadDepth=o.depths.length,o.notices=(a.noticesCache[e]||{}).notices||[],o.exports={},o.execed=!1,o.use=r,o.init()}a.prototype={init:function(){var e=this;a.cache[e.modulename]=e,e.needLoadDepth?e.loadDepths():e.complete()},loadDepths:function(){var e=this;e.status=a.loadStatus.LOADDEPTH,o(e.depths,function(t){a.load(t,e.modulename)})},receiveNotice:function(){--this.needLoadDepth||this.complete()},noticeModule:function(e){var t=this;if(e){if(t.status!=a.loadStatus.LOADED)return t.notices.push(e);a.cache[e].receiveNotice()}else o(t.notices,function(e){a.cache[e].receiveNotice()}),t.notices.length=0},complete:function(){var e=this;e.status=a.loadStatus.LOADED,e.use&&e.exec(),e.noticeModule()},exec:function(){var t=this;if(!t.execed&&(t.execed=!0,c(t.callback))){var n;(n=t.callback.call(e,a.require,t.exports,t))&&(t.exports=n)}}},a.loadStatus={LOADDEPTH:1,LOADED:2},a.cache={},a.noticesCache={},a.loadingSource={},a.loadedSource={},a.mapSource={},a.load=function(e,n){function r(){l||(!f.readyState||/loaded|complete/.test(f.readyState))&&(f.onload=f.onerror=f.onreadystatechange=null,a.loadedSource[u]=l=1,a.loaded(u))}var o,i;if(o=a.cache[e])return o.noticeModule(n);if(i=a.noticesCache[e])return i.notices.push(n);a.noticesCache[e]={notices:[n]};var c,u=a.getFullPath(e);if((c=a.mapSource[u])||(c=a.mapSource[u]=[]),c.push(e),a.loadingSource[u])a.loadedSource[u]&&a.init(e);else{a.loadingSource[u]=1;var s=/\.css$/.test(e),l=0,d=+navigator.userAgent.replace(/.*(?:Apple|Android)WebKit\/(\d+).*/,"$1")<536,f=t.createElement(s?"link":"script"),p="onload"in f;if(s?(f.rel="stylesheet",f.type="text/css",f.href=u):(f.type="text/javascript",f.src=u),f.onload=f.onerror=f.onreadystatechange=r,f.charset=require.config.charset,t.getElementsByTagName("head")[0].appendChild(f),s&&(d||!p))var h=setTimeout(function(){return f.sheet?(clearTimeout(h),r()):void setTimeout(arguments.callee)})}},a.loaded=function(e){var t=a.mapSource[e];o(t,function(e){a.init(e)}),t.length=0},a.init=function(e){!a.cache[e]&&new a(e)},a.require=function(e){var t=a.cache[a.getPath(e)];return t.exec(),t.exports},a.getPath=function(e){if(/:\/\//.test(e))return e;var t=require.config,n=t.baseurl||"";return o(t.rules||[],function(t){e=e.replace(t[0],t[1])}),n&&"/"!=e.charAt(0)&&(e=n.replace(/\/+$/,"")+"/"+e),e.replace(/\/+/g,"/")},a.getFullPath=function(e){var t=require.config,n=t.map||{},r=t.domain||"";for(var o in n)if(n.hasOwnProperty(o)&&i(n[o],e)){e=o;break}return/:\/\//.test(e)?e:r+e},a.getDeps=function(e){var t=[];return o(r(e),function(e){e=a.getPath(e),t.push(e),t.push.apply(t,a.getDeps(require.config.deps[e]))}),t};var u=0;require=a.require,require.version="1.0.1",require.config={domain:"",baseurl:"",rules:[],charset:"utf-8",deps:{},map:{}},require.async=function(t,n){new a("_r_"+u++,function(){var i=[];o(r(t),function(e){i.push(a.require(e))}),c(n)&&n.apply(e,i)},t,!0)},require.mergeConfig=function(e){var t=require.config;o(e,function(e,c){var a=t[c];"map"==c?o(e,function(e,n){var c=a[n];c?o(r(e),function(e){!i(c,e)&&c.push(e)}):c=e,t.map[n]=c}):"deps"==c?o(e,function(e,t){a[t]=e}):n(e)?a.push.apply(a,e):a=e})},define=function(e,t,n){e=a.getPath(e),n=n||require.config.deps[e],new a(e,t,n)}}(window,document);