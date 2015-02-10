define("/static/common/mod/slide/slide.js",function(t,n,i){var e=t("common:jquery"),o=i.exports=function(t){this.options=e.extend({time:1e3,dom:null,cps:1,noGap:!1,easing:null,mode:"horizontal",before:function(){},after:function(){}},t||{}),this.init()};o.prototype={init:function(){var t=this;t.index=0,t.isRuning=!1,t._start=0,t.mode=o.getMode(t.options.mode),t.dom=e(t.options.dom),!/absolute|fixed/.test(t.dom.css("position"))&&t.dom.css("position","relative"),this.refresh()},refresh:function(){var t=this,n=t.options,i=o.DATA_CLONE;if(t.children=t.dom.children().filter(function(){return null==this.getAttribute(i)}),n.noGap){t.dom.children("["+i+"]").remove();var e=t.children.clone().prependTo(t.dom).attr(i,"");e.clone().appendTo(t.dom),t._start=t.children.length}t.max=t.getMaxIndex(),t.count=t.max+1,t.all=t.dom.children(),t.dom.css(t.mode,t.getTargetValue(t.index))},to:function(t,n,i){var e=this;if(!e.isRuning&&(i||e.index!=t))if(e.options.noGap)e._index=t,e.index=t%e.count,e.index<0&&(e.index=e.count+t),e.start(t,n);else{if(0>t||t>e.max)return;e.start(e.index=t,n)}},start:function(t,n){var i=this,e=i.options,o={};o[i.mode]=i.getTargetValue(t),i.isRuning=!0,e.before&&e.before.call(i),i.dom.animate(o,n||e.time,e.easing,function(){t!=i.index&&i.dom.css(i.mode,i.getTargetValue(i.index)),i.isRuning=!1,e.after&&e.after.call(i)})},stop:function(){this.dom.stop(),this.isRuning=!1},pause:function(){this.stop()},resume:function(){this.start(null!=this._index?this._index:this.index)},toNext:function(){this.to(this.index+1)},toPrev:function(){this.to(this.index-1)},toFirst:function(){this.to(0)},toLast:function(){this.to(this.max)},isFirst:function(){return 0==this.index},isLast:function(){return this.index==this.max},getMaxIndex:function(){var t=this;return Math.ceil(t.children.length/t.options.cps)-1},getChildren:function(t){var n=this;return n.all.eq(n._start+t*n.options.cps)},getTargetValue:function(t){return-this.getChildren(t).position()[this.mode]}},e.extend(o,{DATA_CLONE:"data-slide-clone",getMode:function(t){return"horizontal"==t?"left":"top"}})});