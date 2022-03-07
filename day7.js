/*
  ***************Loop Challenge***************
  
  Tasks:
  - use 'stop' to get only elements before it.
  - create html stucture for teams admin with list of employee
  - every employee name start with any admin will be in the team. 

*/

let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera']
let myEmployees = [
    'Amgad',
    'Samah',
    'Ameer',
    'Omar',
    'Othman',
    'Amany',
    'Samia',
    'Anwar'
]

// get under 'stop' admins.
myAdmins = myAdmins.slice(0, myAdmins.indexOf('stop') - 1)

var total = `<div>We Have X Admins</div>\n< /hr>`;

for (let admin = 0; admin < myAdmins.length; admin++) {
    const content = `<div>
  "The Admin For Team ${admin + 1} is ${myAdmins[admin]}"
  <h3>Team Members:</h3>
  ${team(myEmployees, myAdmins[admin])}
</div>
</hr>`;
    total += '\n' + content;
}

document.write(total);

// for get the team members.
function team(myEmployees, myAdmin) {
    let teamMember = '',
        n = 1;

    for (let employee of myEmployees)
        if (employee.startsWith(myAdmin.charAt(0))) {
            teamMember += `<p>- ${n} ${employee} </p>\n`;
            n++;
        }
    return teamMember;
}