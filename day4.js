/*
  ***************String Challenge***************
 
  Tasks:
  - Create a function checkSpeed(speed)
  - Some condition following:
    - SpeedLimit: 70
    - Every 5km after speedLimit -> +1points
    - After 12points will be -> 'Licence suspended'

*/
function checkSpeed(speed) {
    const speedLimit = 70,
        kmPerPoint = 5;
    let points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (speed < speedLimit + kmPerPoint) return 'ok';
    if (points > 12) return 'Licence suspended';
    return `points: ${points}`
}
console.log(checkSpeed(50))
console.log(checkSpeed(70))
console.log(checkSpeed(72))
console.log(checkSpeed(75))
console.log(checkSpeed(95))
console.log(checkSpeed(130))
console.log(checkSpeed(135))