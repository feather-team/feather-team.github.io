define("/static/common/mod/util/number.js",function(e,t,r){var n=e("/static/common/mod/util/string.js");r.exports={format:function(e){return e?n.reverse(n.reverse(e).replace(/\d{3}/g,"$&,")).replace(/^,/,""):0},toInt:function(e){return e=parseInt(e),isNaN(e)?0:e}}});