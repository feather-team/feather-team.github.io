define("/static/mod/util/util.js",function(e,t,r){var n=e("/static/mod/util/lib/md5.js"),a=r.exports={object:{get:function(e,t){if(e[t])return e[t];t=t.split(".");for(var r=0,n=t.length,a=e;n>r;r++)if(a=a[t[r]],null==a)return null;return a},set:function(e,t,r){if("undefined"==typeof r)e=t;else{t=t.split(".");for(var n=0,a=t.length-1,i=e;a>n;n++){var s=t[n];"object"==typeof i[s]&&i[s]||(i[s]={}),i=i[s]}i[t[n]]=r}}},number:{format:function(e){return e?a.string.reverse(a.string.reverse(e).replace(/\d{3}/g,"$&,")).replace(/^,/,""):0}},string:{toPad:function(e,t,r,n){var a="";for(e=String(e),t=String(t),r-=e.length;r-->0;)a+=t;return 1==n?a+e:e+a},pad:function(e,t,r,n){return this.toPad(e,t,r,n)},nl2br:function(e){return String(e||"").replace(/[\r\n]/g,"<br />")},empty:function(e){return/^\s*$/.test(e)},toInt:function(e){return e=parseInt(e),isNaN(e)?0:e},reverse:function(e){return String(e).split("").reverse().join("")},md5:function(e,t){return e=n.MD5(String(e)).toString(),t?this.md5(this.reverse(e)+t):e}},date:{time:function(){return(new Date).getTime()},date:function(e,t){if(e){var r=new Date,n=[],i=a.string.toPad;t&&r.setTime(t);for(var s=0,u=e.length;u>s;s++){var o=e.charAt(s);switch(o){case"Y":o=r.getFullYear();break;case"y":o=String(r.getFullYear()).substring(0,2);break;case"m":o=i(r.getMonth()+1,0,2,!0);break;case"n":o=r.getMonth()+1;break;case"d":o=i(r.getDate(),0,2,!0);break;case"j":o=r.getDate();break;case"D":o=r.getDay()+1;break;case"h":o=i(r.getHours()%12,0,2,!0);break;case"H":o=i(r.getHours(),0,2,!0);break;case"i":o=i(r.getMinutes(),0,2,!0);break;case"s":o=i(r.getSeconds(),0,2,!0);break;case"a":o=r.getHours()-12<0?"am":"pm";break;case"A":o=r.getHours()-12<0?"AM":"PM";break;case"t":o=new Date(r.getFullYear(),r.getMonth()+1,0).getDate()}n.push(o)}return n.join("")}}}}});