var gulp = require( "gulp" );
var uglify = require( "gulp-uglify" );
var rename = require( "gulp-rename" );

gulp.task( "default", [ "compress", "watch" ] );

gulp.task( "compress", function() {
	return gulp.src( "src/*.js" )
			.pipe( gulp.dest( "dist" ) )
    		.pipe( uglify() )
    		.pipe(
    			rename( {
	    			extname: ".min.js"
	    		} )
	    	)
			.pipe( gulp.dest( "dist" ) );
} );

gulp.task( "watch", function() {
	gulp.watch( "src/*js", [ "compress" ] );
});