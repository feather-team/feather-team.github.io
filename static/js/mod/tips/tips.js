define("/static/js/mod/tips/tips.js",function(t){function n(t){this.options=i.extend({content:"",timeout:3e3,mask:!1},t||{}),this.init()}var i=t("jquery"),e=(t("mask"),t("dialog"));return n.prototype={init:function(){var t=this,i=t.options;n.destory(),n.instance=t,t.$=new e({autoOpen:!0,mask:i.mask,title:!1,width:!1,content:i.content}),t.$.container.addClass("ui-tips"),"number"==typeof i.timeout&&(t.id=setTimeout(function(){t.destory()},i.timeout))},destory:function(){this.$.destory(),clearTimeout(this.id)}},n.instance=null,n.destory=function(){n.instance&&n.instance.destory()},n.show=function(t,i,e,o){var s=new n({content:t,timeout:i,mask:e});return o&&s.$.container.find(".ui-dialog-content").addClass(o),s},i.each(["success","error","warn","loading"],function(t,i){n[i]=function(t,e,o){return n.show(t,e,o,"ui-tips-"+i)}}),n});