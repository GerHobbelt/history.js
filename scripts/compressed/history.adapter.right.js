/*
 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 @license New BSD License <http://creativecommons.org/licenses/BSD/>
*/
(function(a,f){var c=a.History=a.History||{},g=a.document,d=a.RightJS.$;if("undefined"!==typeof c.Adapter)throw Error("History.js Adapter has already been loaded...");c.Adapter={bind:function(e,b,a){d(e).on(b,a)},trigger:function(e,b,a){d(e).fire(b,a)},extractEventData:function(a,b){return b&&b._&&b._[a]||f},onDomLoad:function(a){d(g).onReady(a)}};"undefined"!==typeof c.init&&c.init()})(window);
