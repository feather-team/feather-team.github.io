define("/static/common/mod/util/lib/base64.js",function(t,e){!function(){function t(t){this.message=t}var r="undefined"!=typeof e?e:this,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=new Error,t.prototype.name="InvalidCharacterError",r.btoa||(r.btoa=function(e){for(var r,n,a=String(e),i=0,c=o,d="";a.charAt(0|i)||(c="=",i%1);d+=c.charAt(63&r>>8-i%1*8)){if(n=a.charCodeAt(i+=.75),n>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");r=r<<8|n}return d}),r.atob||(r.atob=function(e){var r=String(e).replace(/=+$/,"");if(r.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,a,i=0,c=0,d="";a=r.charAt(c++);~a&&(n=i%4?64*n+a:a,i++%4)?d+=String.fromCharCode(255&n>>(-2*i&6)):0)a=o.indexOf(a);return d})}()});