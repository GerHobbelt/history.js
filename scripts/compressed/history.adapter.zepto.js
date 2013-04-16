/*
 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 @license New BSD License <http://creativecommons.org/licenses/BSD/>
*/
(function(c,f){var a=c.History=c.History||{},d=c.Zepto;if("undefined"!==typeof a.Adapter)throw Error("History.js Adapter has already been loaded...");a.Adapter={bind:function(e,b,a){(new d(e)).bind(b,a)},trigger:function(e,a){(new d(e)).trigger(a)},extractEventData:function(a,b){return b&&b[a]||f},onDomLoad:function(a){new d(a)}};"undefined"!==typeof a.init&&a.init()})(window);
