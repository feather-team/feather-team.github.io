define("/static/common/mod/util/date.js",function(e,t,a){var r=e("/static/common/mod/util/string.js").toPad;a.exports={time:function(){return(new Date).getTime()},date:function(e,t){if(e){var a=new Date,s=[];t&&a.setTime(t);for(var n=0,c=e.length;c>n;n++){var g=e.charAt(n);switch(g){case"Y":g=a.getFullYear();break;case"y":g=String(a.getFullYear()).substring(0,2);break;case"m":g=r(a.getMonth()+1,0,2,!0);break;case"n":g=a.getMonth()+1;break;case"d":g=r(a.getDate(),0,2,!0);break;case"j":g=a.getDate();break;case"D":g=a.getDay()+1;break;case"h":g=r(a.getHours()%12,0,2,!0);break;case"H":g=r(a.getHours(),0,2,!0);break;case"i":g=r(a.getMinutes(),0,2,!0);break;case"s":g=r(a.getSeconds(),0,2,!0);break;case"a":g=a.getHours()-12<0?"am":"pm";break;case"A":g=a.getHours()-12<0?"AM":"PM";break;case"t":g=new Date(a.getFullYear(),a.getMonth()+1,0).getDate()}s.push(g)}return s.join("")}}}});