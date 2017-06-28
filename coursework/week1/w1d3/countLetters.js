function countLetters(sentence){
  var letters = sentence.split(" ").join("").toLowerCase();
  var counter = {};
  for (var i = 0; i < letters.length; i++) {
    var currentLetter = letters[i];
     if (counter[currentLetter] === undefined){
        counter[currentLetter] = 1;
      } else {
        counter[currentLetter]++;
     }
  }
  return counter;
}

console.log(countLetters("lighthouse in the house"));