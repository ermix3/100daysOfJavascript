/*
  ***************Function - Random Argument Challenge***************

  Tasks:
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

showDetails('Reda', 23, true) // "Hello Reda, Your Age Is 23, You Are Available For Hire"
showDetails(23, 'Reda', true) // "Hello Reda, Your Age Is 23, You Are Available For Hire"
showDetails(true, 23, 'Reda') // "Hello Reda, Your Age Is 23, You Are Available For Hire"
showDetails(false, 'Reda', 23) // "Hello Reda, Your Age Is 23, You Are Not Available For Hire"


function showDetails(a, b, c) {

    var Name = (typeof(a) == 'string') ? a : (typeof(b) == 'string') ? b : c;
    var Age = (typeof(a) == 'number') ? a : (typeof(b) == 'number') ? b : c;
    var Status = (typeof(a) == 'boolean') ? a : (typeof(b) == 'boolean') ? b : c;

    console.log(
        Status ?
        `Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire` :
        `Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`
    );

}