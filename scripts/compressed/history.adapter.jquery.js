/*
 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 @license New BSD License <http://creativecommons.org/licenses/BSD/>
*/
(function(e,g){var d=e.History=e.History||{},f=e.jQuery;if("undefined"!==typeof d.Adapter)throw Error("History.js Adapter has already been loaded...");d.Adapter={bind:function(a,b,c){f(a).bind(b,c)},trigger:function(a,b,c){f(a).trigger(b,c)},extractEventData:function(a,b,c){return b&&b.originalEvent&&b.originalEvent[a]||c&&c[a]||g},onDomLoad:function(a){f(a)}};"undefined"!==typeof d.init&&d.init()})(window);
