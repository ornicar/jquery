define( [
	"./core",
	"./core/nodeName",
	"./var/isWindow"
], function( jQuery, nodeName, isWindow ) {

"use strict";

jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isWindow = isWindow;

} );
