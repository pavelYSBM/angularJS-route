myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/page1");
    $stateProvider
        .state('page1', {
            url: "/page1",
            templateUrl: "partials/page1.html"
        })
        .state('page1.list', {
            url: "/list",
            templateUrl: "partials/page1.list.html",
            controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('page2', {
            url: "/page2",
            templateUrl: "partials/page2.html"
        })
        .state('page2.list', {
            url: "/list",
            templateUrl: "partials/page2.list.html",
            controller: function($scope) {
                $scope.things = ["A", "Set", "Of", "Things"];
            }
        })
});