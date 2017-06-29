function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found();   // execute callback
    }
  }
}


function actionWhenFound() {
  function itIsHim (element) {
    return element === "Waldo";
  }
  var indexNumber = ["Alice", "Bob", "Waldo", "Winston"].findIndex(itIsHim)
  console.log("Found Waldo at index " + indexNumber +  "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);