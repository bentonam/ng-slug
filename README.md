# ng-slug

This is a Angular JS factory for generating slugs ( URL friendly strings ).  The following steps are performed when generating a slug:

1. Convert the string to lowercase
2. Optionally remove a string or Regex supplied
3. Convert all `àáâäå` characters to an ascii `a`
4. Convert all `çĉ` characters to an ascii `c`
5. Convert all `éèêë` characters to an ascii `e`
6. Convert all `ĝ` characters to an ascii `g`
7. Convert all  `ĥ` characters to an ascii `h`
8. Convert all `ïíîì` characters to an ascii `i`
9. Convert all  `ĵ` characters to an ascii `j`
10. Convert all  `ñ` characters to an ascii `n`
11. Convert all `ôöõøöòó` characters to an ascii `o`
12. Convert all `šŝ` characters to an ascii `s`
13. Convert all `üûùúŭû` characters to an ascii `u`
14. Convert all `ýÿ` characters to an ascii `y`
15. Convert all  `ž` characters to an ascii `z`
16. Remove any HTML entities i.e. `&nbsp;`
17. Replace `&` with the word `and`
17. Replace `+` characters with a space
18. Remove all remaining characters that are not alpha-numeric, a space or a dash
19. Trim the string
20. Replace one or more spaces with a `-`
21. Replace two or more dashes with a single `-`
22. Optionally strip duplicate strings in the slug



## Installing

Install via bower

`bower install https://github.com/bentonam/ng-slug.git`

Require it into your application (after Angular)

	<script src="angular.min.js"></script>
	<script src="ng-slug.min.js"></script>
	
## Usage

Add the module as a dependency to your app

	// set the app
	var app = angular.module( "yourApp", [ "ngSlug" ] );

Inject it into your controller

	app.controller( "SomeController"", function( $scope, $slug ) {
		$scope.input = "";
		$scope.slugged_input = "";

		$scope.slugIt = function(){
			$scope.slugged_input = $slug.generate( $scope.input );
		};
		
	} );

## Methods

### generate

The `generate` method is used to take any string and generate a friendly version that is all lowercase with spaces for dashes and with all non-alphanumeric characters removed.. 

- `@input` The string to generate the slug for
- `@remove` A string or regex to remove from the slug
- `@allowdups` Whether or not to allow duplicate strings in the slug
