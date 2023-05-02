!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.eTrack=e():t.eTrack=e()}(self,(()=>(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);var e,n=function(){function t(t){this.apiKey=t,this.baseURL="https://the-one-api.dev",this.apiVersion="v2"}return t.prototype.config=function(t){this.apiKey=t.apiKey},t.prototype.get=function(t){return e=this,n=void 0,o=function(){var e;return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}(this,(function(n){switch(n.label){case 0:return[4,fetch(this.formatUrl(t),this.getConfig())];case 1:if(!(e=n.sent()).ok)throw new Error(e.statusText);return[4,e.json()];case 2:return[2,n.sent()]}}))},new((r=void 0)||(r=Promise))((function(t,i){function c(t){try{a(o.next(t))}catch(t){i(t)}}function u(t){try{a(o.throw(t))}catch(t){i(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(c,u)}a((o=o.apply(e,n||[])).next())}));var e,n,r,o},t.prototype.getConfig=function(){return{headers:{Authorization:"Bearer ".concat(this.apiKey)}}},t.prototype.formatUrl=function(t){return"".concat(this.baseURL,"/").concat(this.apiVersion,"/").concat(t)},t}(),r=function(){function t(t){this.field=t,this.value=""}return t.prototype.matches=function(t,e){var n=e?"!=":"=";return this.value="".concat(this.field).concat(n).concat(t),this},t.prototype.includes=function(t,e){var n=e?"!=":"=";return this.value="".concat(this.field).concat(n).concat(t),this},t.prototype.exists=function(t){var e=t?"!":"";return this.value="".concat(e).concat(this.field),this},t.prototype.regex=function(t,e){var n=e?"!=":"=";return this.value="".concat(this.field).concat(n).concat(t),this},t.prototype.toString=function(){return this.value},t}(),o=function(){function t(){this.SORT="sort",this.LIMIT="limit",this.PAGE="page",this.OFFSET="offset"}return t.prototype.stringify=function(t){var e,n=new URLSearchParams;this.appendPagination(n,t),this.appendSort(n,t.sort);var r=n.toString();return(null===(e=t.filters)||void 0===e?void 0:e.length)?this.withFilters(r,t.filters):r},t.prototype.formatSort=function(t){var e=t.by,n=t.direction;return"".concat(e,":").concat(n)},t.prototype.appendPagination=function(t,e){e.page&&t.append(this.PAGE,e.page.toString()),e.limit&&t.append(this.LIMIT,e.limit.toString()),e.offset&&t.append(this.OFFSET,e.offset.toString())},t.prototype.appendSort=function(t,e){e&&t.append(this.SORT,this.formatSort(e))},t.prototype.withFilters=function(t,e){var n=e.reduce((function(t,e){return t+e}),"");return t?"".concat(t,"&").concat(n):"".concat(n)},t}(),i=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))},c=function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},u=function(){function t(t){this.client=t}return t.prototype.getById=function(t){return i(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return[4,this.client.get("".concat(this.getResourceName(),"/").concat(t))];case 1:return[2,e.sent()]}}))}))},t.prototype.getList=function(t){return i(this,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return t?[3,2]:[4,this.client.get(this.getResourceName())];case 1:case 3:return[2,e.sent()];case 2:return[4,this.client.get("".concat(this.getResourceName(),"?").concat((new o).stringify(t)))]}}))}))},t}(),a=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resource="movie",e}return a(e,t),e.prototype.getResourceName=function(){return this.resource},e.prototype.getQuotes=function(t,e){return n=this,r=void 0,c=function(){var n;return function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}(this,(function(r){switch(r.label){case 0:return n="".concat(this.resource,"/").concat(t,"/quote").concat(e?"?".concat((new o).stringify(e)):""),[4,this.client.get(n)];case 1:return[2,r.sent()]}}))},new((i=void 0)||(i=Promise))((function(t,e){function o(t){try{a(c.next(t))}catch(t){e(t)}}function u(t){try{a(c.throw(t))}catch(t){e(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(o,u)}a((c=c.apply(n,r||[])).next())}));var n,r,i,c},e}(u),l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),f=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.resource="quote",e}return l(e,t),e.prototype.getResourceName=function(){return this.resource},e}(u),p=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{a(r.next(t))}catch(t){i(t)}}function u(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}a((r=r.apply(t,e||[])).next())}))},h=function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,r&&(o=2&u[0]?r.return:u[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,u[1])).done)return o;switch(r=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,r=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==u[0]&&2!==u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=e.call(t,c)}catch(t){u=[6,t],r=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},y=function(){function t(t){this.apiKey=t,this.client=new n(t),this.movieService=new s(this.client),this.quoteService=new f(this.client)}return t.prototype.movies=function(t){return p(this,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,this.movieService.getList(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.movie=function(t){return p(this,void 0,void 0,(function(){return h(this,(function(e){return[2,this.movieService.getById(t)]}))}))},t.prototype.movieQuotes=function(t,e){return p(this,void 0,void 0,(function(){return h(this,(function(n){return[2,this.movieService.getQuotes(t,e)]}))}))},t.prototype.quotes=function(t){return p(this,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:return[4,this.quoteService.getList(t)];case 1:return[2,e.sent()]}}))}))},t.prototype.quote=function(t){return p(this,void 0,void 0,(function(){return h(this,(function(e){return[2,this.quoteService.getById(t)]}))}))},t.prototype.filter=function(t){return new r(t)},t}();return exports.LiblabLotr=y,t})()));