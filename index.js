 let myArray = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
     let result = 0;
     let sum = [];
     for (let i = 0; i < myArray.length; i++){
         if(myArray[i] > 0){
            result += myArray[i]
            sum.push(myArray[i])
         }
    }
   console.log(result , sum.length);

   //

// function max(myArray){
//     let maxNumb = myArray[0];
//     for(let num of myArray){
//         if(maxNumb<num){
//             maxNumb = num
//         }
//     }
//     return maxNumb;
// }
// console.log(max(myArray))
// console.log(myArray.indexOf(maxNumb))

min = myArray[0];
max = min;
for (i = 1; i < myArray.length; ++i) {
    if (myArray[i] > max) max = myArray[i];
    else if (myArray[i] < min) min = myArray[i];
}
console.log(max, myArray.indexOf(max));

console.log(min , myArray.indexOf(min));

//
let neg = [];
for (let i = 0; i < myArray.length; i++){
    if(myArray[i] < 0){
        neg.push(myArray[i])
    }
}
console.log(neg.length)
//
function calc(myArray) {
    let count = Object.create(null);
  
    for (let x of myArray) {
      count[x] = ~count[x] + 1;
    }
  
    return a.length - Object.keys(count).filter(x => count[x]>1).length;
  }
  console.log(count[x]);

