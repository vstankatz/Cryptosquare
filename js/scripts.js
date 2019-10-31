var finalProduct = [];
var input = ("I like to wear socks in the morning!");
console.log(input);
var lowerArray = [];
var lowerArray2 = [];
function prepLetters(sentence){
  var lowerSentence = sentence.toLowerCase();
  var re = /[,.!?;'":><%$&*@#1234567890 ]/g;
  lowerSentence.split("")
  return lowerSentence.replace(re, "");
  console.log(lowerSentence);
};

function cryptoGridder(input){
  var prepInput = prepLetters(input);
  lowerArray.push(prepInput);
  console.log(prepInput);
  var row = Math.ceil(Math.sqrt(prepInput.length));
  var column = Math.floor(Math.sqrt(prepInput.length));

  console.log(lowerArray)
  for (var i = 0; i < row; i++) {
    var thisRow = [];
    for (var j = 0; j < column; j++) {
      thisRow.push((lowerArray.length < 1) ? "" :
      lowerArray.shift());
      // console.log(lowerArray);





}
}
console.log(thisRow);

}
  prepLetters(input)

  cryptoGridder(input);













//front end
// $(document).ready(function() {
//
// })
