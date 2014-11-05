var app = angular.module('app', [
    'app.authentication',
    'app.navigation',
    'app.home',
    'app.about',
    'ngMaterial',
    'ngRoute'
]);

app.run(['$route', '$q', '$rootScope',
    function ($route, $q, $rootScope) {
    }
]);
