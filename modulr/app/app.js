angular.module("sample", []);


var app = angular.module("modulr", ['sample', 'ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider.state('sample', {
        url: '/sample',
        templateUrl: 'modules/sample/views/sample.view.html'
    })
})