var finalProduct = [];
var input = ("I like to wear socks in the morning!");
console.log(input);

function prepLetters(sentence){
  var lowerSentence = sentence.toLowerCase();
  var re = /[,.!?;'":><%$&*@#1234567890 ]/g;
  return lowerSentence.replace(re, "");

};


function cryptoGridder(input){
  var prepInput = prepLetters(input);
  console.log(prepInput);
  var row = Math.ceil(Math.sqrt(prepInput.length));
  var column = Math.floor(Math.sqrt(prepInput.length));

  for (var i = 0; i < row; i++) {
    var thisRow = [];
    for (var j = 0; j < column; j++) {
      thisRow.push((prepInput.length < 1) ? "" :
      prepInput.shift());





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
