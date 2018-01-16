(function() {
    'use strict';

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });

    var app = angular
        .module('app', ['app.home', 'ui.router', 'ngMaterial'])
        .config(function($stateProvider, $locationProvider) {

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });

            $stateProvider.state('home', {
                    url: '/',
                    controller: 'HomeController',
                    templateUrl: 'app/home/home.html',
                    controllerAs: 'vm'
            })
        });
})();
