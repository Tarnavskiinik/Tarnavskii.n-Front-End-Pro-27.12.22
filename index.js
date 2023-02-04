function pow(x, y) {
    if (y == 1) {
      return x;
    } else {
      return x * pow(x, y - 1);
    }
  }
  
 console.log(pow(5, 3));