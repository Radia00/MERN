var arr = [12, 34, 45, 23, 6, 78, 54, 90];
var evens = arr.filter(function(x) {
  if (x % 2 === 0 || x === 0) {
    return true;
  }
})
console.log("Filtered Even Numbers:",evens);
