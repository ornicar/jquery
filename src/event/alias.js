define( [
	"../core",

	"../event",
	"./trigger"
], function( jQuery ) {

"use strict";

jQuery.each( [ "focus", "click", "change", "select", "submit" ],
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

} );
