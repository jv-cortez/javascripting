function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var a = i
      found(a);   // execute callback
    }
  }
}


function actionWhenFound(a) {
  console.log("Found Waldo at index " + a +  "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);