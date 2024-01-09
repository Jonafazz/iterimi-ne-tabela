const jCoders = {
    'employees': [
        {
            "id": 1,
            "name": 'Ari',
            'position': 'Developer'
        },
        {
            "id": 2,
            "name": 'Neon',
            'position': 'Programer'
        },
        {
            "id": 3,
            "name": 'Argon',
            'position': 'Manager'
        },
        {
            "id": 4,
            "name": 'Kriptoni',
            'position': 'Designer'
        },
        {
            "id": 5,
            "name": 'Ksenoni',
            'position': 'Programer'
        },
        {
            "id": 6,
            "name": 'Radoni',
            'position': 'Programer-beginner'
        }
    ]
};

let shega_tabela_body = document.querySelector('#tabela-employees tbody')

for (let i = 0; i < jCoders.employees.length; i++) {
    let employee = jCoders.employees[i];

    let rreshti = shega_tabela_body.insertRow();

    rreshti.insertCell(0).innerHTML = employee.id;
    rreshti.insertCell(1).innerHTML = employee.name;
    rreshti.insertCell(2).innerHTML = employee.position;
}
//insertRow() - inserton rreshta te ri
// let rreshti = shega_tabela_body.insertRow()

// row.insertCell(0).innerHTML = employee.id;
// row.insertCell(1).innerHTML = employee.name;
// row.insertCell(2).innerHTML = employee.position;