/*
  ***************Higher Order Functions Challenge***************

  Tasks:
  ====================================
  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,r,m,i,x,_,S,i,t,e,_,W,o,r,l,d,2,0,M";

let solution = myString
    .split(',')
    .filter(ele => isNaN(ele))
    .map((ele, ind) => ele.length > true ? ele.charAt(ind) : ele)
    .reduce((acc, current) => acc + current)
    .replace(/_/g, ' ').slice(null, -true)



console.log(solution); // Ermix Site World