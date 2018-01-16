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
        ];

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

        /* 
        * Iterates through all of the searched employees and parses their calculations data.
        * After it updates the vm.total properties it formats the number again with commas. 
        */
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

        // Event
        $scope.$on('autocompleteChange', function(event, data) {
            vm.searchedEmployee = data;
            vm.updateCalculations();
        });
    };

})();
