var app = angular.module('myApp', []);

app.controller('ParseController', function($scope, $parse) {
	$scope.person = {
		name: "Dave Sharples",
		occupation: "Designer"
	};

	$scope.$watch('expr', function(newVal, oldVal, scope) {
		if (newVal !== oldVal) {
			//set up parsefun
			var parseFun = $parse(newVal);
			//get value
			$scope.parsedValue = parseFun(scope);
		}
	});
});

app.controller('AddingController', function($scope) {
	$scope.counter = {
		current: 0,
		max: 0,
		min: 0
	};
	$scope.add = function(amount) { 
		$scope.counter.current += amount; 
		if ($scope.counter.max < $scope.counter.current) {
			$scope.counter.max = $scope.counter.current;
		}
	};
	$scope.subtract = function(amount) { 
		$scope.counter.current -= amount;
		if ($scope.counter.min > $scope.counter.current) {
			$scope.counter.min = $scope.counter.current;
		} 
	};
});

app.controller('ParentController', function($scope) {
	$scope.person = {greeted: false};
});

app.controller('ChildController', function($scope) {
	$scope.sayHello = function() {
		$scope.person.name = "Dave Sharples";
		$scope.person.greeted = true;
	}
});

