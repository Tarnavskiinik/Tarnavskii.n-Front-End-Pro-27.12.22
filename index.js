 const arr = [0, 1, 2, 3, 4, 5];
 const removeElement = (arr, value) => {
     return arr.filter(el => el !== value);
   }
   console.log(removeElement(arr, 2))
