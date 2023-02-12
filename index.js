  //1
   let arr = ['wm', 'h', 'hi', 1, 3,4 ,5, 7, 8, 'end'];
   function arithmeticMeane() {
     let numbers = arr.filter(arrayItem => {   
      return !isNaN(arrayItem)});
     if (numbers.length == 0)
       return 0;
     let sum = numbers.reduce((prev, curr) => prev + curr);
     return sum / numbers.length;
   }
   console.log(arithmeticMeane());
  //2
  
  function doMath(x, znak, y) {   
    if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) 
    return 'Ошибка';  
    return eval(x + znak.replace('^', '**') + y) } 
      const x = prompt('Введите x');
      const y = prompt('Введите y'); 
      const znak = prompt('Введите знак +, -, *, /, %, ^');
      alert(doMath(x, znak, y))
 //3
 function arrAdd() {
   let arr = [];
   let amount = +prompt("Введите количество массивов в первом массиве");

   for(let i = 0; i < amount; i++) {
     arr.push([]);
     let amount2 = prompt("Введите количество елементов" + (i + 1));
     for(let j = 0; j < amount2; j++) {
       let elem = prompt("Введите текст" + (j + 1));
       arr[i].push([elem]);
     }
   }

   console.log(arr);
 }
 let functionResult = arrAdd()
//4
function deleteSymbol() {
  let text = prompt("Введите текст");
  let symbol = prompt("Введите символы");

  let textArr = text.split("");
  let symbolArr = symbol.split("");

  for(let i = 0; i < textArr.length; i++) {
      for(let j = 0; j < symbolArr.length; j++) {
          if (textArr[i] === symbolArr[j]) {
              textArr.splice(i, 1);
              i--;
            }
        }
  }
    return textArr.join("");
}

let functionResul = deleteSymbol();
console.log(functionResul);


