define("/static/mod/alert/alert.js",function(t){var n=t(":dialog");return{alert:function(t){return new n({title:"提示",width:400,content:'<div class="ui-alert">'+t+"</div>",autoOpen:!0,buttons:{"确定":function(){this.destory()}}})},confirm:function(t,i,e){return new n({title:"提示",width:500,content:'<div class="ui-alert">'+t+"</div>",autoOpen:!0,buttons:{"确定":function(){i(),!e&&this.destory()},"取消":function(){this.destory()}}})}}});