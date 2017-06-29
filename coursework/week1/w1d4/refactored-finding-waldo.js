function findWaldo(arr, found){
  arr.forEach(function(item, i){
    if (item === "Waldo") {
      found(i);   // execute callback
    }
  })
}
// var anArray = ["Alice", "Bob", "Waldo", "Winston"];

// arr.forEach(findWaldo(arr, found)){
//   if (arr[i] === "Waldo") {
//     found();   // execute callback
//   }
// };


function actionWhenFound(i) {
  console.log("Found Waldo at index " + i +  "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);