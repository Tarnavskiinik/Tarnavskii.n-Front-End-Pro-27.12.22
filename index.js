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


min = myArray[0];
max = min;
for (i = 1; i < myArray.length; ++i) {
    if (myArray[i] > max) max = myArray[i];
    else if (myArray[i] < min) min = myArray[i];
}
console.log(max, myArray.indexOf(max));

console.log(min , myArray.indexOf(min));


 let neg = [];
 for (let i = 0; i < myArray.length; i++){
     if(myArray[i] < 0){
         neg.push(myArray[i])
     }
 }
console.log(neg.length , neg)

// //  


const filter = myArray => myArray.filter(item => item % 2 !== 0)
console.log(filter(sum));

//


// 
var rep=[];
for(i in sum){

if (rep[sum[i]]!=undefined) {
    (rep[sum[i]]++)
}else {
    (rep[sum[i]]=1)
}
}
console.log(rep);
//
const countItems = {}; 
for (const item of sum) {

  countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}
const ress = Object.keys(countItems).filter((item) => countItems[item] > 1);
console.dir(ress.length);
//
let num = 0;
let num2 = 0;
for (let i = 0; i < sum.length; i++){
    if(sum[i] % 2 === 0){
        num += sum[i];
    }else{
        num2 += sum[i];
    }
    
}
console.log(num);
console.log(num2);
//

 let res = sum.reduce((acc, rec) => acc * rec);
 console.log(res);

 //

let lui = 1;
for (let i = 0; i < sum.length; i++){
    lui = lui * sum[i]
}
console.log(lui)

//

let mux = myArray[0];
let maxi = 0;
for (let i = 1; i < myArray.length; i++) {
  if (myArray[i] > mux) {
    mux = myArray[i];
    myArray[maxi] = 0;
    maxi = i;
  } else {
    myArray[i] = 0;
  }
}

console.log(myArray);