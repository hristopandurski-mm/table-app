/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing Employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
    * Return the employee data.
    *
    * @param req { Object }
    * @param res { Object }
    */
    get: function(req, res) {
        return res.json([
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
            },
            {
                id: 2,
                gender: 'male',
                title: 'Mr.',
                firstName: 'Luid',
                surname: 'Singh',
                dateOfBirth: '16/04/1979',
                age: '36',
                salary: '50,739.00',
                takeHome: '36,754.32',
                incomeTax: '9,698.60',
                nationalInsurance: '4,286.08'
            },
            {
                id: 3,
                gender: 'male',
                title: 'Mr.',
                firstName: 'Mohammed',
                surname: 'John',
                dateOfBirth: '18/05/1992',
                age: '23',
                salary: '26,389.00',
                takeHome: '21,032.00',
                incomeTax: '3,157.80',
                nationalInsurance: '2,199.48'
            },
            {
                id: 4,
                gender: 'male',
                title: 'Mr.',
                firstName: 'Owen',
                surname: 'Humphreys',
                dateOfBirth: '15/05/1972',
                age: '43',
                salary: '31,336.00',
                takeHome: '24,395.68',
                incomeTax: '4,147.20',
                nationalInsurance: '2,199.48'
            },
            {
                id: 5,
                gender: 'female',
                title: 'Ms.',
                firstName: 'Holly',
                surname: 'Gregory',
                dateOfBirth: '31/01/1993',
                age: '22',
                salary: '60,176.00',
                takeHome: '42,227.78',
                incomeTax: '13,473.40',
                nationalInsurance: '4,474.82'
            },
            {
                id: 6,
                gender: 'female',
                title: 'Mrs.',
                firstName: 'Skye',
                surname: 'Lawrence',
                dateOfBirth: '22/06/1979',
                age: '36',
                salary: '42,552.00',
                takeHome: '32,005.86',
                incomeTax: '6,423.80',
                nationalInsurance: '4,122.34'
            },
            {
                id: 7,
                gender: 'male',
                title: 'Mr.',
                firstName: 'Tom',
                surname: 'Carey',
                dateOfBirth: '03/06/1994',
                age: '21',
                salary: '75,316.00',
                takeHome: '51,008.98',
                incomeTax: '19,529.40',
                nationalInsurance: '4,777.62'
            },
            {
                id: 8,
                gender: 'female',
                title: 'Mrs.',
                firstName: 'Katherine',
                surname: 'Goddard',
                dateOfBirth: '20/07/1970',
                age: '45',
                salary: '16,203.00',
                takeHome: '14,105.24',
                incomeTax: '1,120.60',
                nationalInsurance: '977.16'
            },
            {
                id: 9,
                gender: 'female',
                title: 'Ms.',
                firstName: 'Rachel',
                surname: 'Lambert',
                dateOfBirth: '16/09/1987',
                age: '28',
                salary: '17,542.00',
                takeHome: '15,015.76',
                incomeTax: '1,388.40',
                nationalInsurance: '1,137.84'
            },
            {
                id: 10,
                gender: 'male',
                title: 'Mr.',
                firstName: 'Daniel',
                surname: 'Abbott',
                dateOfBirth: '08/12/1972',
                age: '43',
                salary: '31,100.00',
                takeHome: '24,235.20',
                incomeTax: '4,100.00',
                nationalInsurance: '2,764.80'
            },
            {
                id: 11,
                gender: 'male',
                title: 'Mr.',
                firstName: 'Harley',
                surname: 'Hobbs',
                dateOfBirth: '26/01/1988',
                age: '27',
                salary: '37,086.00',
                takeHome: '28,305.68',
                incomeTax: '5,297.20',
                nationalInsurance: '3,483.12'
            },
            {
                id: 12,
                gender: 'female',
                title: 'Ms.',
                firstName: 'Abby',
                surname: 'Hopkins',
                dateOfBirth: '02/07/1976',
                age: '27',
                salary: '37,086.00',
                takeHome: '28,305.68',
                incomeTax: '5,297.20',
                nationalInsurance: '3,483.12'
            },
            {
                id: 13,
                gender: 'female',
                title: 'Ms.',
                firstName: 'Evie',
                surname: 'Horton',
                dateOfBirth: '08/01/1995',
                age: '21',
                salary: '86,390.00',
                takeHome: '57,431.90',
                incomeTax: '23,959.00',
                nationalInsurance: '4,999.10'
            },
            {
                id: 14,
                gender: 'male',
                title: 'Mr.',
                firstName: 'Hayden',
                surname: 'Turnbull',
                dateOfBirth: '15/05/1966',
                age: '49',
                salary: '22,432.00',
                takeHome: '18,340.96',
                incomeTax: '2,366.40',
                nationalInsurance: '1,724.64'
            },
            {
                id: 15,
                gender: 'female',
                title: 'Ms.',
                firstName: 'Grace',
                surname: 'Glover',
                dateOfBirth: '25/10/1996',
                age: '19',
                salary: '78,828.00',
                takeHome: '53,045.94',
                incomeTax: '20,934.20',
                nationalInsurance: '4,847.86'
            },
            {
                id: 16,
                gender: 'male',
                title: 'Dr.',
                firstName: 'Harley',
                surname: 'Andrews',
                dateOfBirth: '18/02/1987',
                age: '28',
                salary: '73,900.00',
                takeHome: '50,187.70',
                incomeTax: '18,963.00',
                nationalInsurance: '4,749.30'
            },
            {
                id: 17,
                gender: 'female',
                title: 'Ms.',
                firstName: 'Victoria',
                surname: 'Norris',
                dateOfBirth: '09/03/1975',
                age: '40',
                salary: '71,432.00',
                takeHome: '48,756.26',
                incomeTax: '17,975.80',
                nationalInsurance: '4,699.94'
            }
        ]);
    }
};

