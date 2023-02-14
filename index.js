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
function createArray(){
  const res = [];
  const len = +prompt('Enter arr lenght');
 
  for(let i =0; i < len; i++){
    const len2 = +prompt('Enter your');
    res[i] = []
    for(let j = 0; j < len2; j++){
      res[i][j] = prompt('Enter num');
    }
   }
  return res
 }

 console.log(createArray())
//4
function clearChar(str, chars){
  for(const char of chars){
    str = str.replace(RegExp(char, 'g'), '')
  }

  return str;
}

const str = prompt('Enter your text');
let chars = prompt('Enter your char. Separate ","');
chars = chars.split(',');

console.log(clearChar(str, chars))
