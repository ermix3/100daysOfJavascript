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