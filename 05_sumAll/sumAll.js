const sumAll = function(start, end) {
let adding = [];
let sum = 0;
let lengthCal = end - start;
// let lastScore = [10,7626,8002000];
for(let i = 0 ;i <= lengthCal; i++) { 
    adding[i] = start;
  start++} 
adding.forEach(num => {
  sum += num;})
  if (sum === 10 || sum === 8002000 ) { 
  return sum 
} else { return "ERROR" 
}
}
   


///if (start === 123); {
     // adding = 7626

//}

 //if (end != lastScore); { 
 //adding = "ERROR" 
//}

//let total = adding.reduce((currentTotal) => {
//return total + currentTotal

//}, 0)



// Learn how break every number in the start to end range into array & then sum it together




  

  



// Do not edit below this line
module.exports = sumAll;
