define("/static/mod/class/class.js",function(t,n,e){function i(t,n,e){return o.each(n,function(n,r){return r instanceof o||r.nodeType?void(t[n]=r):void(e&&p(r)||null==r||(t[n]=o.isArray(r)?i([],r):r.constructor==Object?i({},r):r))}),t}var o=t(":jquery"),p=o.isFunction;e.exports=function(t){var n,e=function(){var t=this;t.options={},i(t,r,!0),t.initialize.apply(t,arguments)},r=e.prototype;return(n=t.extend)&&(e.$parent=n,i(r,n.prototype),i(r,{$depth:e,parent:function(){var t=this;t.$depth=t.$depth.$parent,t.parent=t.$depth?t.$depth.prototype.parent:null,t.$depth.prototype.initialize.apply(t,arguments),t.$depth=e,t.parent=arguments.callee}}),o.each(n.prototype,function(t,n){p(n)&&-1==o.inArray(t,["parent","$depth"])&&(r.parent[t]=n)})),delete t.extend,i(r,t),r.initialize||(r.initialize=function(){}),r.setOptions||(r.setOptions=function(t){i(this.options,t)}),r.constructor=e,e}});