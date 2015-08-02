angular
.module( "ngSlug", [] )
.factory( "$slug", [ function() {
	var self = this;
	self.generate = function( input, remove, allowdups ) {
		var slug = input;
		remove = remove || ""; // ensure remove has a value
		allowdups = typeof allowdups === "boolean" ? allowdups : true; // ensure allowdups has a boolean value
		if( Array.isArray( slug ) ) { // if the input is an array loop over the array and call generate
			for(var i = 0; i < slug.length; i++){
				slug[i] = self.generate( slug[i], remove, allowdups );
			}
			return slug;
		}
		else{ // the input is a string
			remove = new RegExp( "(" + ( remove || "" ) + ")", "gi" ); // make remove a regex
			try{
				slug = decodeURIComponent( slug ); // try to decode the string
			}
			catch(e){
				slug = unescape( slug ); // if the decode failed just unescape it
			}
			slug = slug
					.toLowerCase() // convert the string to lowercase
					.replace( remove, "" ) // allows additional words / phrases to be removed in the slug
					.replace( /[àáâäå]/g, "a" ) // convert to ascii "a"
					.replace( /[çĉ]/g, "c" ) // convert to ascii "c"
					.replace( /[éèêë]/g, "e" ) // convert to ascii "c"
					.replace( /ĝ/g, "g" ) // convert to ascii "g"
					.replace( /ĥ/g, "h" ) // convert to ascii "h"
					.replace( /[ïíîì]/g, "i" ) // convert to ascii "i"
					.replace( /ĵ/g, "j" ) // convert to ascii "j"
					.replace( /ñ/g, "n" ) // convert to ascii "n"
					.replace( /[ôöõøöòó]/g, "o" ) // convert to ascii "o"
					.replace( /[šŝ]/g, "s" ) // convert to ascii "s"
					.replace( /[üûùúŭû]/g, "u" ) // convert to ascii "u"
					.replace( /[ýÿ]/g, "u" ) // convert to ascii "y"
					.replace( /ž/g, "z" ) // convert to ascii "z"
					.replace( /&[#A-zA-Z0-9]+;/gi, "" ) // remove HTML Entities
					.replace( /&/gi, " and " ) // replace standalone ampersands with the word and
					.replace( /\+/g, " ") // replace all +'s with a space
					.replace( /[^A-Za-z0-9- ]+/gi, "" ) // remove all Non-AlphaNumeric Characters except for Spaces or Dashes
					.trim() // remove leading and trailing spaces
					.replace( /\s+/g, "-" ) // replace 1 or more spaces with a single -
					.replace( /-+/g, "-" ); // replace 2 or more dashes with a single -
		}
		return allowdups ? slug : ( function( str ) {
			var cleaned = [];
			str = str.split( "-" );
			for(var i = 0, cnt = str.length; i < cnt; i++){ // loop over each part of the slug
				cleaned.indexOf( str[i] ) === -1 && cleaned.push( str[i] );
			}
			return cleaned.join( "-" );
		} ) ( slug );
	};
	return self;
} ] );