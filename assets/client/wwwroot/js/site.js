(function() {
    'use strict';

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });

    var app = angular
        .module('app', ['app.home', 'ui.router', 'ngMaterial'])
        .config(function($stateProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider.state('home', {
                    url: '/',
                    controller: 'HomeController',
                    templateUrl: 'app/home/home.html',
                    controllerAs: 'vm'
            })
        });
})();

(function() {
    'use strict';

    angular.module('app.home', ['app.services.employee', 'app.components.autocomplete'])
            .controller('HomeController', HomeController);

    HomeController.$inject = ['EmployeeService', '$scope'];

    function HomeController(EmployeeService, $scope) {
        var vm = this;
        
        vm.employees = [];
        vm.totalTakeHome = 0;
        vm.totalIncomeTax = 0;
        vm.totalNationalInsurance = 0;
        vm.headers = [
            'Id',
            'Gender',
            'Title',
            'First Name',
            'Surname',
            'Date of birth',
            'Age',
            'Salary',
            'Take Home',
            'Income Tax',
            'National Insurance'
        ]

        // Get the employee data.
        vm.getEmployees = function() {
            EmployeeService.get()
                .then(function(res){
                    vm.employees = res;
                    vm.searchedEmployee = vm.employees;
                    vm.updateCalculations();
                })
                .catch(function(err){
                    console.log('Error. Unable to fetch the Employee data.')
                });
        };

        vm.updateCalculations = function() {
            vm.totalTakeHome = 0;
            vm.totalIncomeTax = 0;
            vm.totalNationalInsurance = 0;

            vm.searchedEmployee.forEach(function(element) {
                vm.totalTakeHome += parseNumber(element.takeHome);
                vm.totalIncomeTax += parseNumber(element.incomeTax);
                vm.totalNationalInsurance += parseNumber(element.nationalInsurance);
            });

            vm.totalTakeHome = numberWithCommas(vm.totalTakeHome);
            vm.totalIncomeTax = numberWithCommas(vm.totalIncomeTax);
            vm.totalNationalInsurance = numberWithCommas(vm.totalNationalInsurance);
        };

        // Replace all commas with dots in order to calculate the total numbers.
        function parseNumber(num) {
            return parseFloat(num.replace(/,/g, ''));
        };

        // Format the totals back to comma separated numbers.
        function numberWithCommas(x) {
            var parts = x.toFixed(2).toString().split(".");
                
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            
            return parts.join(".");
          }

        vm.$onInit = function() {
            vm.getEmployees();
        };

        // Events
        $scope.$on('autocompleteChange', function(event, data) {
            vm.searchedEmployee = data;
            vm.updateCalculations();
        });
    };

})();

describe('home.ctrl', function() {
    
    beforeEach(module('app.home'));
    
    var controller,
        EmployeeService,
        $scope,
        data = [
            {
                id: 1,
                gender: 'male',
                title: 'Mr.',
                firstName: 'Tom',
                surname: 'Roberts',
                dateOfBirth: '21/04/1986',
                age: '29',
                salary: '59,783.00',
                takeHome: '41,999.84',
                incomeTax: '13,316.20',
                nationalInsurance: '4,466.96'
            }
        ];
    
    beforeEach(inject(function ($rootScope, $controller, _EmployeeService_) {
        $scope = $rootScope.$new();
        EmployeeService = _EmployeeService_;

        controller = $controller('HomeController', {
            $scope: $scope,
            EmployeeService: EmployeeService
        });
    }));

    it('should call getEmployees on init', function () {
        spyOn(controller, 'getEmployees').and.callThrough();

        controller.$onInit();

        expect(controller.getEmployees).toHaveBeenCalled();
    });

    it('should have properties for the total calculations', function() {
        expect(controller.totalTakeHome).toEqual(0);
        expect(controller.totalIncomeTax).toEqual(0);
        expect(controller.totalNationalInsurance).toEqual(0);
    });

    it('should update employees and calculations on autocomplete change', function() {
        spyOn(controller, 'updateCalculations').and.callThrough();

        var subScope = $scope.$new();
        
        subScope.$emit('autocompleteChange', data);

        expect(controller.updateCalculations).toHaveBeenCalled();
        expect(controller.totalNationalInsurance).toEqual('4,466.96');
        expect(controller.totalIncomeTax).toEqual('13,316.20');
        expect(controller.totalTakeHome).toEqual('41,999.84');
    });

    it('should have header values', function() {
        expect(controller.headers).toBeTruthy();
    });
});
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
