(function() {
    'use strict';

    angular.module('app.components.autocomplete', []).component('autocompleteComponent', {
        templateUrl: 'app/shared/components/autocomplete/autocomplete.component.html',
        controller: autocompleteComponentController,
        controllerAs: 'vm',
        bindings: {
            employees: '<'
        }
    });

    autocompleteComponentController.$inject = ['$scope'];
    function autocompleteComponentController($scope) {
        var vm = this;
        
        vm.isDisabled = false;

        // Add 'value' and 'display' properties to the employees array objects.
        function mutateEmployees() {
            var mutated = angular.copy(vm.employees);

            return mutated.map(function(x){
                x.value = x.firstName.toLowerCase() + ' ' + x.surname.toLowerCase();
                x.display = x.firstName + ' ' + x.surname;

                return x;
            });
        }
    
        // Create filter function for a query string.
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);
    
            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };
        }

        vm.$onInit = function() {
            vm.data = mutateEmployees();
        };
    
        vm.querySearch = function(query) {
            var results = query ? vm.data.filter( createFilterFor(query) ) : vm.data;

            return results;
        }
    
        /*
        * Send the selected employee data to the home controller
        * through the emitted event.
        *
        * @param item (Object)
        */
        vm.selectedItemChange = function(item) {
            var selectedEmployee;

            if (!item) {
                selectedEmployee = vm.employees;
            }
            else {
                selectedEmployee = vm.employees.filter(function(obj) {
                    if (obj.id === item.id) {
                        return true;
                    }
                });
            }
            

            $scope.$emit('autocompleteChange', selectedEmployee);
        }
    }
})();
