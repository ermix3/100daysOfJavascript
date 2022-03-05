/*
  ***************If Condition Challenge***************
  
  Tasks:
  - Write Condition With Ternary If Syntax
*/
let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log('10 To 40');
} else if (a > 40) {
    console.log('> 40');
} else {
    console.log('Unknown');
}
// Write Previous Condition With Ternary If Syntax
a < 10 ?
    console.log(10) :
    a >= 10 && a <= 40 ?
    console.log('10 To 40') :
    a > 40 ?
    console.log('> 40') :
    console.log('Unknown');

/*********************Other Test*************************/
let title = 'Ermix For Digital'

// W Position May Change
// if ('????' === 'F') {
//     console.log('Good')
// }
if (title[title.indexOf('F')] === 'F') {
    console.log('Good')
}
// if ('????' !== 'string') {
//     console.log('Good')
// }
if (title.length !== 'string') {
    console.log('Good')
}
// if ('????' === 'number') {
//     console.log('Good')
// }
if (title.length === 'number') {
    console.log('Good')
}
// if ('????' === 'ElzeroElzero') {
//     console.log('Good')
// }
if (title.slice(0, 5).repeat(2) === 'ErmixErmix') {
    console.log('Good')
}

/*********************Switch Challenge*************************/
/*
  Switch Challenge
  Tasks:
  - Write Condition With Ternary If Syntax
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === 'IT' || job === 'Support') {
    salary = 6000
} else if (job === 'Developer' || job === 'Designer') {
    salary = 7000
} else {
    salary = 4000
}
// task => if To switch
switch (job) {
    case 'Manager':
        salary = 8000
        break
    case 'IT':
    case 'Support':
        salary = 6000
        break
    case 'Developer':
    case 'Designer':
        salary = 7000
        break
    default:
        salary = 4000
        break
}
/*
  If Challenge
*/

let holidays = 0;
let money = 0;

switch (holidays) {
    case 0:
        money = 5000;
        console.log(`My Money is ${money}`);
        break;
    case 1:
    case 2:
        money = 3000;
        console.log(`My Money is ${money}`);
        break;
    case 3:
        money = 2000;
        console.log(`My Money is ${money}`);
        break;
    case 4:
        money = 1000;
        console.log(`My Money is ${money}`);
        break;
    case 5:
        money = 0;
        console.log(`My Money is ${money}`);
        break;
    default:
        money = 0;
        console.log(`My Money is ${money}`);
}

// task => switch to if
if (holidays == 0) {
    money = 5000
    console.log(`My Money is ${money}`)
} else if (holidays == 1 || holidays == 2) {
    money = 3000
    console.log(`My Money is ${money}`)
} else if (holidays == 3) {
    money = 2000
    console.log(`My Money is ${money}`)
} else if (holidays == 4) {
    money = 1000
    console.log(`My Money is ${money}`)
} else if (holidays == 5) {
    money = 0
    console.log(`My Money is ${money}`)
} else {
    money = 0
    console.log(`My Money is ${money}`)
}