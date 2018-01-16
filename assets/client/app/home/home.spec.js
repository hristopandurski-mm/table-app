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