parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"TEsj":[function(require,module,exports) {

},{}],"ogHi":[function(require,module,exports) {
var define;
var t;function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(n,r){if("object"==("undefined"==typeof exports?"undefined":e(exports))&&"object"==("undefined"==typeof module?"undefined":e(module)))module.exports=r();else if("function"==typeof t&&t.amd)t([],r);else{var o=r();for(var i in o)("object"==("undefined"==typeof exports?"undefined":e(exports))?exports:n)[i]=o[i]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";n(83);var r=function(t){return t&&t.__esModule?t:{default:t}}(n(41)),o=function(){r.default.addPickerToOtherInputs(),r.default.supportsDateInput()||r.default.addPickerToDateInputs()};o(),document.addEventListener("DOMContentLoaded",function(){o()}),document.querySelector("body").addEventListener("mousedown",function(){o()})},function(t,e,n){t.exports=!n(11)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(9),o=n(32),i=n(25),a=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(4),o=n(13);t.exports=n(1)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(59),o=n(15);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(23)("wks"),o=n(14),i=n(2).Symbol,a="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=a&&i[t]||(a?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(12);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(2),o=n(8),i=n(56),a=n(5),u="prototype",s=function t(e,n,s){var c,l,f,d=e&t.F,p=e&t.G,h=e&t.S,y=e&t.P,m=e&t.B,v=e&t.W,b=p?o:o[n]||(o[n]={}),g=b[u],x=p?r:h?r[n]:(r[n]||{})[u];for(c in p&&(s=n),s)(l=!d&&x&&void 0!==x[c])&&c in b||(f=l?x[c]:s[c],b[c]=p&&"function"!=typeof x[c]?s[c]:m&&l?i(f,r):v&&x[c]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(f):y&&"function"==typeof f?i(Function.call,f):f,y&&((b.virtual||(b.virtual={}))[c]=f,e&t.R&&g&&!g[c]&&a(g,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==e(t)?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){var r=n(38),o=n(16);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(4).f,o=n(3),i=n(7)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(23)("keys"),o=n(14);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(2),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(12);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(2),o=n(8),i=n(18),a=n(27),u=n(4).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||u(e,t,{value:a.f(t)})}},function(t,e,n){e.f=n(7)},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(n(45));e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,r.default)(t,o.key,o)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(12),o=n(2).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(1)&&!n(11)(function(){return 7!=Object.defineProperty(n(31)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(18),o=n(10),i=n(39),a=n(5),u=n(3),s=n(17),c=n(61),l=n(21),f=n(66),d=n(7)("iterator"),p=!([].keys&&"next"in[].keys()),h="keys",y="values",m=function(){return this};t.exports=function(t,e,n,v,b,g,x){c(n,e,v);var M,S,w,O=function(t){if(!p&&t in _)return _[t];switch(t){case h:case y:return function(){return new n(this,t)}}return function(){return new n(this,t)}},D=e+" Iterator",T=b==y,A=!1,_=t.prototype,k=_[d]||_["@@iterator"]||b&&_[b],E=k||O(b),L=b?T?O("entries"):E:void 0,j="Array"==e&&_.entries||k;if(j&&((w=f(j.call(new t)))!==Object.prototype&&w.next&&(l(w,D,!0),r||u(w,d)||a(w,d,m))),T&&k&&k.name!==y&&(A=!0,E=function(){return k.call(this)}),r&&!x||!p&&!A&&_[d]||a(_,d,E),s[e]=E,s[D]=m,b)if(M={values:T?E:O(y),keys:g?E:O(h),entries:L},x)for(S in M)S in _||i(_,S,M[S]);else o(o.P+o.F*(p||A),e,M);return M}},function(t,e,n){var r=n(9),o=n(35),i=n(16),a=n(22)("IE_PROTO"),u=function(){},s="prototype",c=function(){var t,e=n(31)("iframe"),r=i.length;for(e.style.display="none",n(58).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c[s][i[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(u[s]=r(t),n=new u,u[s]=null,n[a]=t):n=c(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(4),o=n(9),i=n(19);t.exports=n(1)?Object.defineProperties:function(t,e){o(t);for(var n,a=i(e),u=a.length,s=0;u>s;)r.f(t,n=a[s++],e[n]);return t}},function(t,e,n){var r=n(38),o=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(3),o=n(6),i=n(55)(!1),a=n(22)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,c=[];for(n in u)n!=a&&r(u,n)&&c.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(c,n)||c.push(n));return c}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";function r(t,e){for(t=String(t),e=e||2;t.length<e;)t="0"+t;return t}function o(t){return null===t?"null":void 0===t?"undefined":"object"!==(void 0===t?"undefined":(0,i.default)(t))?void 0===t?"undefined":(0,i.default)(t):Array.isArray(t)?"array":{}.toString.call(t).slice(8,-1).toLowerCase()}Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(n(48)),a=function(){var t=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g,e=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,n=/[^-+\dA-Z]/g;return function(i,u,s,c){if(1!==arguments.length||"string"!==o(i)||/\d/.test(i)||(u=i,i=void 0),(i=i||new Date)instanceof Date||(i=new Date(i)),isNaN(i))throw TypeError("Invalid date");var l=(u=String(a.masks[u]||u||a.masks.default)).slice(0,4);"UTC:"!==l&&"GMT:"!==l||(u=u.slice(4),s=!0,"GMT:"===l&&(c=!0));var f=s?"getUTC":"get",d=i[f+"Date"](),p=i[f+"Day"](),h=i[f+"Month"](),y=i[f+"FullYear"](),m=i[f+"Hours"](),v=i[f+"Minutes"](),b=i[f+"Seconds"](),g=i[f+"Milliseconds"](),x=s?0:i.getTimezoneOffset(),M=function(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var o=(e-n)/6048e5;return 1+Math.floor(o)}(i),S=function(t){var e=t.getDay();return 0===e&&(e=7),e}(i),w={d:d,dd:r(d),ddd:a.i18n.dayNames[p],dddd:a.i18n.dayNames[p+7],m:h+1,mm:r(h+1),mmm:a.i18n.monthNames[h],mmmm:a.i18n.monthNames[h+12],yy:String(y).slice(2),yyyy:y,h:m%12||12,hh:r(m%12||12),H:m,HH:r(m),M:v,MM:r(v),s:b,ss:r(b),l:r(g,3),L:r(Math.round(g/10)),t:m<12?"a":"p",tt:m<12?"am":"pm",T:m<12?"A":"P",TT:m<12?"AM":"PM",Z:c?"GMT":s?"UTC":(String(i).match(e)||[""]).pop().replace(n,""),o:(x>0?"-":"+")+r(100*Math.floor(Math.abs(x)/60)+Math.abs(x)%60,4),S:["th","st","nd","rd"][d%10>3?0:(d%100-d%10!=10)*d%10],W:M,N:S};return u.replace(t,function(t){return t in w?w[t]:t.slice(1,t.length-1)})}}();a.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},a.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},e.default=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(44)),i=r(n(28)),a=r(n(29)),u=r(n(43)),s=r(n(42)),c=r(n(40)),l=function(){function t(e){var n=this;(0,i.default)(this,t),this.element=e,this.element.setAttribute("data-has-picker",""),this.locale=this.element.getAttribute("lang")||document.body.getAttribute("lang")||"en",this.format=this.element.getAttribute("date-format")||document.body.getAttribute("date-format")||this.element.getAttribute("data-date-format")||document.body.getAttribute("data-date-format")||"yyyy-mm-dd",this.localeText=this.getLocaleText(),(0,o.default)(this.element,{valueAsDate:{get:function(){if(!n.element.value)return null;var t=n.format||"yyyy-mm-dd",e=n.element.value.match(/(\d+)/g),r=0,o={};return t.replace(/(yyyy|dd|mm)/g,function(t){o[t]=r++}),new Date(e[o.yyyy],e[o.mm]-1,e[o.dd])},set:function(t){n.element.value=(0,c.default)(t,n.format)}},valueAsNumber:{get:function(){return n.element.value?n.element.valueAsDate.valueOf():NaN},set:function(t){n.element.valueAsDate=new Date(t)}}});var r=function(t){var e=n.element;e.locale=n.localeText,u.default.attachTo(e)};this.element.addEventListener("focus",r),this.element.addEventListener("mouseup",r),this.element.addEventListener("keydown",function(t){var e=new Date;switch(t.keyCode){case 9:case 27:u.default.hide();break;case 38:n.element.valueAsDate&&(e.setDate(n.element.valueAsDate.getDate()+1),n.element.valueAsDate=e,u.default.pingInput());break;case 40:n.element.valueAsDate&&(e.setDate(n.element.valueAsDate.getDate()-1),n.element.valueAsDate=e,u.default.pingInput())}u.default.sync()}),this.element.addEventListener("keyup",function(t){u.default.sync()})}return(0,a.default)(t,[{key:"getLocaleText",value:function(){var t=this.locale.toLowerCase();for(var e in s.default){var n=e.split("_");if(n.map(function(t){return t.toLowerCase()}),~n.indexOf(t)||~n.indexOf(t.substr(0,2)))return s.default[e]}}}],[{key:"supportsDateInput",value:function(){var t=document.createElement("input");t.setAttribute("type","date");var e="not-a-date";return t.setAttribute("value",e),!(t.value===e)}},{key:"addPickerToDateInputs",value:function(){var e=document.querySelectorAll('input[type="date"]:not([data-has-picker])'),n=e.length;if(!n)return!1;for(var r=0;r<n;++r)new t(e[r])}},{key:"addPickerToOtherInputs",value:function(){var e=document.querySelectorAll('input[type="text"].date-polyfill:not([data-has-picker])'),n=e.length;if(!n)return!1;for(var r=0;r<n;++r)new t(e[r])}}]),t}();e.default=l},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={"en_en-US_en-UK":{days:["Su","Mo","Tu","We","Th","Fr","Sa"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]},"zh_zh-CN":{days:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},"zh-Hans_zh-Hans-CN":{days:["周日","周一","周二","周三","周四","周五","周六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},"zh-Hant_zh-Hant-TW":{days:["週日","週一","週二","週三","週四","週五","週六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},"de_de-DE":{days:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},"nl_nl-NL_nl-BE":{days:["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"],months:["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"],today:"Vandaag",format:"D/M/Y"},"pt_pt-BR":{days:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],months:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],today:"Hoje"},"fr_fr-FR_fr-BE":{days:["Di","Lu","Ma","Me","Je","Ve","Sa"],months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],today:"Aujourd'hui",format:"D/M/Y"},"es_es-VE":{days:["Do","Lu","Ma","Mi","Ju","Vi","Sa"],months:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],today:"Hoy",format:"D/M/Y"},"da_da-dk":{days:["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"],months:["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"],today:"I dag",format:"dd/MM-YYYY"},"ru_ru-RU_ru-UA_ru-KZ_ru-MD":{days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],today:"Сегодня",format:"D.M.Y"},"uk_uk-UA":{days:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"],today:"Cьогодні",format:"D.M.Y"},"sv_sv-SE":{days:["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"],months:["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"],today:"Idag",format:"YYYY-MM-dd"},"test_test-TEST":{days:["Foo","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Foo","February","March","April","May","June","July","August","September","October","November","December"]},ja:{days:["日","月","火","水","木","金","土"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今日",format:"YYYY-MM-dd"}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(28)),i=r(n(29)),a=function(){function t(){var e=this;if((0,o.default)(this,t),window.thePicker)return window.thePicker;this.date=new Date,this.input=null,this.isOpen=!1,this.container=document.createElement("date-input-polyfill"),this.year=document.createElement("select"),t.createRangeSelect(this.year,2006,this.date.getFullYear()),this.year.className="yearSelect",this.year.addEventListener("change",function(){e.date.setYear(e.year.value),e.refreshDaysMatrix()});var n=document.createElement("span");n.className="yearSelect-wrapper",n.appendChild(this.year),this.container.appendChild(n),this.month=document.createElement("select"),this.month.className="monthSelect",this.month.addEventListener("change",function(){e.date.setMonth(e.month.value),e.refreshDaysMatrix()});var r=document.createElement("span");r.className="monthSelect-wrapper",r.appendChild(this.month),this.container.appendChild(r),this.today=document.createElement("button"),this.today.textContent="Today",this.today.addEventListener("click",function(){var t=new Date;e.date=new Date(t.getFullYear()+"/"+("0"+(t.getMonth()+1)).slice(-2)+"/"+("0"+t.getDate()).slice(-2)),e.setInput()}),this.container.appendChild(this.today);var i=document.createElement("table");this.daysHead=document.createElement("thead"),this.days=document.createElement("tbody"),this.days.addEventListener("click",function(t){var n=t.target;if(!n.hasAttribute("data-day"))return!1;var r=e.days.querySelector("[data-selected]");r&&r.removeAttribute("data-selected"),n.setAttribute("data-selected",""),e.date.setDate(parseInt(n.textContent)),e.setInput()}),i.appendChild(this.daysHead),i.appendChild(this.days),this.container.appendChild(i),this.hide(),document.body.appendChild(this.container),this.removeClickOut=function(t){if(e.isOpen){for(var n=t.target,r=n===e.container||n===e.input;!r&&(n=n.parentNode);)r=n===e.container;("date"!==t.target.getAttribute("type")&&!r||!r)&&e.hide()}},this.removeBlur=function(t){e.isOpen&&e.hide()}}return(0,i.default)(t,[{key:"hide",value:function(){this.container.setAttribute("data-open",this.isOpen=!1),this.input&&this.input.blur(),document.removeEventListener("mousedown",this.removeClickOut),document.removeEventListener("touchstart",this.removeClickOut)}},{key:"show",value:function(){var t=this;this.container.setAttribute("data-open",this.isOpen=!0),setTimeout(function(){document.addEventListener("mousedown",t.removeClickOut),document.addEventListener("touchstart",t.removeClickOut)},500),window.onpopstate=function(){t.hide()}}},{key:"goto",value:function(t){var e=this,n=t.getBoundingClientRect();this.container.style.top=n.top+n.height+(document.documentElement.scrollTop||document.body.scrollTop)+3+"px";var r=this.container.getBoundingClientRect(),o=r.width?r.width:280,i=function(){return e.container.className.replace("polyfill-left-aligned","").replace("polyfill-right-aligned","").replace(/\s+/g," ").trim()},a=n.right-o;n.right<o?(a=n.left,this.container.className=i()+" polyfill-left-aligned"):this.container.className=i()+" polyfill-right-aligned",this.container.style.left=a+(document.documentElement.scrollLeft||document.body.scrollLeft)+"px",this.show()}},{key:"attachTo",value:function(t){return!(t===this.input&&this.isOpen||(this.input=t,this.refreshLocale(),this.sync(),this.goto(this.input),0))}},{key:"sync",value:function(){isNaN(Date.parse(this.input.valueAsDate))?this.date=new Date:this.date=t.absoluteDate(this.input.valueAsDate),this.year.value=this.date.getFullYear(),this.month.value=this.date.getMonth(),this.refreshDaysMatrix()}},{key:"setInput",value:function(){var t=this;this.input.valueAsDate=this.date,this.input.focus(),setTimeout(function(){t.hide()},100),this.pingInput()}},{key:"refreshLocale",value:function(){if(this.locale===this.input.locale)return!1;this.locale=this.input.locale,this.today.textContent=this.locale.today||"Today";for(var e=["<tr>"],n=0,r=this.locale.days.length;n<r;++n)e.push('<th scope="col">'+this.locale.days[n]+"</th>");this.daysHead.innerHTML=e.join(""),t.createRangeSelect(this.month,0,11,this.locale.months)}},{key:"refreshDaysMatrix",value:function(){this.refreshLocale();for(var e=this.date.getFullYear(),n=this.date.getMonth(),r=new Date(e,n,1).getDay(),o=new Date(this.date.getFullYear(),n+1,0).getDate(),i=t.absoluteDate(this.input.valueAsDate)||!1,a=i&&e===i.getFullYear()&&n===i.getMonth(),u=[],s=0;s<o+r;++s)if(s%7==0&&u.push("\n          "+(0!==s?"</tr>":"")+"\n          <tr>\n        "),s+1<=r)u.push("<td></td>");else{var c=s+1-r,l=a&&i.getDate()===c;u.push("<td data-day "+(l?"data-selected":"")+">\n          "+c+"\n        </td>")}this.days.innerHTML=u.join("")}},{key:"pingInput",value:function(){var t=void 0,e=void 0;try{t=new Event("input"),e=new Event("change")}catch(n){(t=document.createEvent("KeyboardEvent")).initEvent("input",!0,!1),(e=document.createEvent("KeyboardEvent")).initEvent("change",!0,!1)}this.input.dispatchEvent(t),this.input.dispatchEvent(e)}}],[{key:"createRangeSelect",value:function(t,e,n,r){t.innerHTML="";for(var o=e;o<=n;++o){var i=document.createElement("option");t.appendChild(i);var a=r?r[o-e]:o;i.text=a,i.value=o}return t}},{key:"absoluteDate",value:function(t){return t&&new Date(t.getTime()+60*t.getTimezoneOffset()*1e3)}}]),t}();window.thePicker=new a,e.default=window.thePicker},function(t,e,n){t.exports={default:n(49),__esModule:!0}},function(t,e,n){t.exports={default:n(50),__esModule:!0}},function(t,e,n){t.exports={default:n(51),__esModule:!0}},function(t,e,n){t.exports={default:n(52),__esModule:!0}},function(t,n,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var i=o(r(47)),a=o(r(46)),u="function"==typeof a.default&&"symbol"==e(i.default)?function(t){return e(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":e(t)};n.default="function"==typeof a.default&&"symbol"===u(i.default)?function(t){return void 0===t?"undefined":u(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":u(t)}},function(t,e,n){n(72);var r=n(8).Object;t.exports=function(t,e){return r.defineProperties(t,e)}},function(t,e,n){n(73);var r=n(8).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(76),n(74),n(77),n(78),t.exports=n(8).Symbol},function(t,e,n){n(75),n(79),t.exports=n(27).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(6),o=n(69),i=n(68);t.exports=function(t){return function(e,n,a){var u,s=r(e),c=o(s.length),l=i(a,c);if(t&&n!=n){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(53);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(19),o=n(37),i=n(20);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var a,u=n(t),s=i.f,c=0;u.length>c;)s.call(t,a=u[c++])&&e.push(a);return e}},function(t,e,n){var r=n(2).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(30);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(34),o=n(13),i=n(21),a={};n(5)(a,n(7)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,n,r){var o=r(14)("meta"),i=r(12),a=r(3),u=r(4).f,s=0,c=Object.isExtensible||function(){return!0},l=!r(11)(function(){return c(Object.preventExtensions({}))}),f=function(t){u(t,o,{value:{i:"O"+ ++s,w:{}}})},d=t.exports={KEY:o,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==e(t)?t:("string"==typeof t?"S":"P")+t;if(!a(t,o)){if(!c(t))return"F";if(!n)return"E";f(t)}return t[o].i},getWeak:function(t,e){if(!a(t,o)){if(!c(t))return!0;if(!e)return!1;f(t)}return t[o].w},onFreeze:function(t){return l&&d.NEED&&c(t)&&!a(t,o)&&f(t),t}}},function(t,e,n){var r=n(20),o=n(13),i=n(6),a=n(25),u=n(3),s=n(32),c=Object.getOwnPropertyDescriptor;e.f=n(1)?c:function(t,e){if(t=i(t),e=a(e,!0),s)try{return c(t,e)}catch(t){}if(u(t,e))return o(!r.f.call(t,e),t[e])}},function(t,n,r){var o=r(6),i=r(36).f,a={}.toString,u="object"==("undefined"==typeof window?"undefined":e(window))&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==a.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(o(t))}},function(t,e,n){var r=n(3),o=n(70),i=n(22)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,n){var r=n(24),o=n(15);t.exports=function(t){return function(e,n){var i,a,u=String(o(e)),s=r(n),c=u.length;return s<0||s>=c?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===c||(a=u.charCodeAt(s+1))<56320||a>57343?t?u.charAt(s):i:t?u.slice(s,s+2):a-56320+(i-55296<<10)+65536}}},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(15);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(54),o=n(62),i=n(17),a=n(6);t.exports=n(33)(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(10);r(r.S+r.F*!n(1),"Object",{defineProperties:n(35)})},function(t,e,n){var r=n(10);r(r.S+r.F*!n(1),"Object",{defineProperty:n(4).f})},function(t,e){},function(t,e,n){"use strict";var r=n(67)(!0);n(33)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){"use strict";var o=r(2),i=r(3),a=r(1),u=r(10),s=r(39),c=r(63).KEY,l=r(11),f=r(23),d=r(21),p=r(14),h=r(7),y=r(27),m=r(26),v=r(57),b=r(60),g=r(9),x=r(6),M=r(25),S=r(13),w=r(34),O=r(65),D=r(64),T=r(4),A=r(19),_=D.f,k=T.f,E=O.f,L=o.Symbol,j=o.JSON,C=j&&j.stringify,N="prototype",P=h("_hidden"),F=h("toPrimitive"),J={}.propertyIsEnumerable,H=f("symbol-registry"),I=f("symbols"),R=f("op-symbols"),Y=Object[N],z="function"==typeof L,U=o.QObject,B=!U||!U[N]||!U[N].findChild,W=a&&l(function(){return 7!=w(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=_(Y,e);r&&delete Y[e],k(t,e,n),r&&t!==Y&&k(Y,e,r)}:k,G=function(t){var e=I[t]=w(L[N]);return e._k=t,e},V=z&&"symbol"==e(L.iterator)?function(t){return"symbol"==e(t)}:function(t){return t instanceof L},Z=function t(e,n,r){return e===Y&&t(R,n,r),g(e),n=M(n,!0),g(r),i(I,n)?(r.enumerable?(i(e,P)&&e[P][n]&&(e[P][n]=!1),r=w(r,{enumerable:S(0,!1)})):(i(e,P)||k(e,P,S(1,{})),e[P][n]=!0),W(e,n,r)):k(e,n,r)},K=function(t,e){g(t);for(var n,r=v(e=x(e)),o=0,i=r.length;i>o;)Z(t,n=r[o++],e[n]);return t},q=function(t){var e=J.call(this,t=M(t,!0));return!(this===Y&&i(I,t)&&!i(R,t))&&(!(e||!i(this,t)||!i(I,t)||i(this,P)&&this[P][t])||e)},Q=function(t,e){if(t=x(t),e=M(e,!0),t!==Y||!i(I,e)||i(R,e)){var n=_(t,e);return!n||!i(I,e)||i(t,P)&&t[P][e]||(n.enumerable=!0),n}},X=function(t){for(var e,n=E(x(t)),r=[],o=0;n.length>o;)i(I,e=n[o++])||e==P||e==c||r.push(e);return r},$=function(t){for(var e,n=t===Y,r=E(n?R:x(t)),o=[],a=0;r.length>a;)!i(I,e=r[a++])||n&&!i(Y,e)||o.push(I[e]);return o};z||(s((L=function(){if(this instanceof L)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0);return a&&B&&W(Y,t,{configurable:!0,set:function e(n){this===Y&&e.call(R,n),i(this,P)&&i(this[P],t)&&(this[P][t]=!1),W(this,t,S(1,n))}}),G(t)})[N],"toString",function(){return this._k}),D.f=Q,T.f=Z,r(36).f=O.f=X,r(20).f=q,r(37).f=$,a&&!r(18)&&s(Y,"propertyIsEnumerable",q,!0),y.f=function(t){return G(h(t))}),u(u.G+u.W+u.F*!z,{Symbol:L});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)h(tt[et++]);for(var nt=A(h.store),rt=0;nt.length>rt;)m(nt[rt++]);u(u.S+u.F*!z,"Symbol",{for:function(t){return i(H,t+="")?H[t]:H[t]=L(t)},keyFor:function(t){if(!V(t))throw TypeError(t+" is not a symbol!");for(var e in H)if(H[e]===t)return e},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!z,"Object",{create:function(t,e){return void 0===e?w(t):K(w(t),e)},defineProperty:Z,defineProperties:K,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:$}),j&&u(u.S+u.F*(!z||l(function(){var t=L();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!V(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return"function"==typeof(e=r[1])&&(n=e),!n&&b(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!V(e))return e}),r[1]=e,C.apply(j,r)}}}),L[N][F]||r(5)(L[N],F,L[N].valueOf),d(L,"Symbol"),d(Math,"Math",!0),d(o.JSON,"JSON",!0)},function(t,e,n){n(26)("asyncIterator")},function(t,e,n){n(26)("observable")},function(t,e,n){n(71);for(var r=n(2),o=n(5),i=n(17),a=n(7)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var c=u[s],l=r[c],f=l&&l.prototype;f&&!f[a]&&o(f,a,c),i[c]=i.Array}},function(t,e,n){(t.exports=n(81)()).push([t.id,"date-input-polyfill{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;position:absolute!important;text-align:center;box-shadow:0 3px 10px 1px rgba(0,0,0,.22);cursor:default;z-index:1;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;overflow:hidden;display:block}date-input-polyfill[data-open=false]{visibility:hidden;z-index:-100!important;top:0}date-input-polyfill[data-open=true]{visibility:visible}date-input-polyfill select,date-input-polyfill table,date-input-polyfill td,date-input-polyfill th{background:#fff;color:#000;text-shadow:none;border:0;padding:0;height:auto;width:auto;line-height:normal;font-family:sans-serif;font-size:14px;box-shadow:none;font-family:Lato,Helvetica,Arial,sans-serif}date-input-polyfill button,date-input-polyfill select{border:0;border-radius:0;border-bottom:1px solid #dadfe1;height:24px;vertical-align:top;-webkit-appearance:none;-moz-appearance:none}date-input-polyfill .monthSelect-wrapper{width:55%;display:inline-block}date-input-polyfill .yearSelect-wrapper{width:25%;display:inline-block}date-input-polyfill select{width:100%}date-input-polyfill select:first-of-type{border-right:1px solid #dadfe1;border-radius:5px 0 0 0;-moz-border-radius:5px 0 0 0;-webkit-border-radius:5px 0 0 0}date-input-polyfill button{width:20%;background:#dadfe1;border-radius:0 5px 0 0;-moz-border-radius:0 5px 0 0;-webkit-border-radius:0 5px 0 0}date-input-polyfill button:hover{background:#eee}date-input-polyfill table{border-collapse:separate!important;border-radius:0 0 5px 5px;-moz-border-radius:0 0 5px 5px;-webkit-border-radius:0 0 5px 5px;overflow:hidden;max-width:280px;width:280px}date-input-polyfill td,date-input-polyfill th{width:32px;padding:4px;text-align:center;box-sizing:content-box}date-input-polyfill td[data-day]{cursor:pointer}date-input-polyfill td[data-day]:hover{background:#dadfe1}date-input-polyfill [data-selected]{font-weight:700;background:#d8eaf6}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=f[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],e))}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(c(r.parts[i],e));f[r.id]={id:r.id,refs:1,parts:a}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[i]?n[i].parts.push(a):e.push(n[i]={id:i,parts:[a]})}return e}function i(t,e){var n=h(),r=v[v.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),v.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){t.parentNode.removeChild(t);var e=v.indexOf(t);e>=0&&v.splice(e,1)}function u(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function s(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function c(t,e){var n,r,o;if(e.singleton){var i=m++;n=y||(y=u(e)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(e),r=function(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(e),r=function(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){a(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}var f={},d=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=d(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,m=0,v=[];t.exports=function(t,e){void 0===(e=e||{}).singleton&&(e.singleton=p()),void 0===e.insertAt&&(e.insertAt="bottom");var n=o(t);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var u=n[a];(s=f[u.id]).refs--,i.push(s)}t&&r(o(t),e);for(a=0;a<i.length;a++){var s;if(0===(s=i[a]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete f[s.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r=n(80);"string"==typeof r&&(r=[[t.id,r,""]]),n(82)(r,{}),r.locals&&(t.exports=r.locals)}])});
},{}],"epB2":[function(require,module,exports) {
"use strict";function t(t){var e=$('input[type="date"]').val();new Date(e).getTime()<(new Date).getTime()&&(new Date).toDateString()!==new Date(e).toDateString()?$('input[type="date"]')[0].setCustomValidity("Dato må ikke ligge før dags dato"):$('input[type="date"]')[0].setCustomValidity("");var n=!0;return $("form > ul > li").eq(t).find("input").each(function(){if(!$(this)[0].checkValidity())return $('input[type="submit"]').trigger("click"),n=!1,!1}),n}require("./css.css"),require("./form-styles.css"),require("./input-styles.css"),require("./box-progress.css"),require("./datepicker-polyfill"),"date"!=$('input[type="date"]')[0].type&&$('input[type="date"]').keydown(function(t){return t.preventDefault(),!1}),$("input.last").keydown(function(t){if(9==t.keyCode)return t.preventDefault(),!1}),$(".checkmark-js").on("click",function(t){var e=$(this).parent().find(".hidden-input")[0];e.checked=!e.checked,$(this).html(e.checked?"<span>✓</span>":"")}),$(".radio-list-js li").on("click",function(t){$(".radio-list-js li span").removeClass("radio-toggle"),$(this).find("span").addClass("radio-toggle"),$(".radio-list-js").parent().find(".hidden-input").val($(this).index()+1)}),$("#submit-button").on("click",function(i){i.preventDefault();var r=t(e());if(e()!=n.liLength-1)return!1;r&&alert("Tak for din indmeldelse")}),$(".button-container button").on("click",function(i){var r="next-button"===$(this).attr("id")?1:-1;(!(r>0)||t(e()))&&n.render(e(r))});var e=function(){var t=0;return function(e){var i=t+e;return i<0||i>n.liLength-1||!e?t:t=i}}(),n=function(){var t=$("#form-section form > ul"),e=$("#form-section form > ul > li"),n={updateButtons:function(t){$("#prev-button").finish().animate({opacity:0===t?"0":"1"},"fast"),$("#next-button").finish().animate({opacity:t===e.length-1?"0":"1"},"fast")},animateUl:function(n){t.finish().animate({"margin-left":parseInt(e.outerWidth())*-n})},updateNav:function(t){$("#progress-bar li span").each(function(e){e<t?$(this).addClass("color-animate"):$(this).removeClass("color-animate")})}};return{setWidth:function(){var n=$("form").outerWidth();t.outerWidth(parseInt(n)*e.length+"px"),e.outerWidth(parseInt(n)+"px")},render:function(t){for(var e in n)n[e](t)},get liLength(){return e.length}}}();$(window).on("resize",function(){n.setWidth(),n.render(e())}).trigger("resize");
},{"./css.css":"TEsj","./form-styles.css":"TEsj","./input-styles.css":"TEsj","./box-progress.css":"TEsj","./datepicker-polyfill":"ogHi"}]},{},["epB2"], null)
//# sourceMappingURL=main.5453e38f.map