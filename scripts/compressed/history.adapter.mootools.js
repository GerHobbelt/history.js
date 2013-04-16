/*
 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 @license New BSD License <http://creativecommons.org/licenses/BSD/>
*/
(function(c,e){var d=c.History=c.History||{},f=c.Element;if("undefined"!==typeof d.Adapter)throw Error("History.js Adapter has already been loaded...");Object.append(f.NativeEvents,{popstate:2,hashchange:2});d.Adapter={bind:function(a,b,c){("string"===typeof a?document.id(a):a).addEvent(b,c)},trigger:function(a,b,c){("string"===typeof a?document.id(a):a).fireEvent(b,c)},extractEventData:function(a,b){return b&&b.event&&b.event[a]||b&&b[a]||e},onDomLoad:function(a){c.addEvent("domready",a)}};"undefined"!==
typeof d.init&&d.init()})(window);
