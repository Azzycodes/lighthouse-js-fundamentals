const isOdd = function(num) {
  if (num % 2 == 0) {
    console.log("even")
    return false;
  }
  else if (num % 2 == 1) {
    console.log("odd");
    return true;
  }
}