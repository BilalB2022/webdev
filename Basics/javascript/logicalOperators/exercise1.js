// find person who is employee
var persons =
    [{
        "username": "employee-tbuy0"
    }, {
        "username": "hupham1"
    }, {
        "username": "ugottelier2"
    }, {
        "username": "employee-lbrager3"
    }, {
        "username": "laugustin4"
    }, {
        "username": "psagerson5"
    }, {
        "username": "employee-lgregoletti6"
    }, {
        "username": "jgiovanazzi7"
    }, {
        "username": "employee-tstefi8"
    }, {
        "username": "dbleby9"
    }]

    persons.map((singlePerson) => {
        console.log(singlePerson.username.includes('employee'));
    })