var app = angular.module( "exampleApp", [ "ngSlug" ] );

app.controller("AppCtrl", function( $scope, $slug ){
	$scope.input = "Your Friendly URL String!";
	$scope.remove = "String";
	$scope.dups = true;
	$scope.slug = "";

	$scope.slugIt = function(){
		$scope.slug = $slug.generate( $scope.input, $scope.remove, $scope.dups );
	};

	$scope.slugIt();
});