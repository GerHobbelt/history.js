/*
 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 @license New BSD License <http://creativecommons.org/licenses/BSD/>
*/
(function(e,g){var a=e.History=e.History||{};if("undefined"!==typeof a.Adapter)throw Error("History.js Adapter has already been loaded...");a.Adapter={handlers:{},_uid:1,uid:function(b){return b._uid||(b._uid=a.Adapter._uid++)},bind:function(b,c,f){var d=a.Adapter.uid(b);a.Adapter.handlers[d]=a.Adapter.handlers[d]||{};a.Adapter.handlers[d][c]=a.Adapter.handlers[d][c]||[];a.Adapter.handlers[d][c].push(f);b["on"+c]=function(b,c){return function(d){a.Adapter.trigger(b,c,d)}}(b,c)},trigger:function(b,
c,f){f=f||{};b=a.Adapter.uid(b);var d,e;a.Adapter.handlers[b]=a.Adapter.handlers[b]||{};a.Adapter.handlers[b][c]=a.Adapter.handlers[b][c]||[];d=0;for(e=a.Adapter.handlers[b][c].length;d<e;++d)a.Adapter.handlers[b][c][d].apply(this,[f])},extractEventData:function(b,a){return a&&a[b]||g},onDomLoad:function(a){var c=e.setTimeout(function(){a()},2E3);e.onload=function(){clearTimeout(c);a()}}};"undefined"!==typeof a.init&&a.init()})(window);
