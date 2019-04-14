define( [
	"./core",
	"./core/nodeName",
	"./core/toType",
	"./var/isFunction",

	"./event/alias"
], function( jQuery, nodeName, toType, isFunction) {

"use strict";

jQuery.isArray = Array.isArray;
jQuery.bind = jQuery.on;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.type = toType;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

} );
