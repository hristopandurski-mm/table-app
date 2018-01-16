(function() {
    'use strict';

    angular.module('app.services.employee', []).service('EmployeeService', EmployeeService);

    EmployeeService.$inject = ['$q', '$http'];

    function EmployeeService($q, $http) {
        var self = this;

        self.get = () => {
            var deferred = $q.defer();

            $http({
                method: 'GET',
                url: '/employee/get'
            })
            .then(function(res) {
                return deferred.resolve(res.data);
            })
            .catch(function(err) {
                return deferred.reject(err);
            });

            return deferred.promise;
        };
    };
}());
