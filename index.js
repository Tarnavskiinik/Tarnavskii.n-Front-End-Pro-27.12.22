
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


