// Back-end
  /* This version does not keep punctuation in its original position within the sentence when reversed - the punctuation mark is moved along with the word that it immediately follows, e.g. Hello, world! becomes world! Hello, */
// var reverseSentence = function(sentence) {
//   // Create a variable to hold the final, reversed sentence that will be returned
//   var newSentence = "";
//   // Create a variable to hold a regular expression that will find any white-space (" ")
//   var regWhiteSpace = /[\s]/;
//   // Create a counter to identify the index where the previous white-space was encountered and the slice occurred
//   var count;
//   for (var i = 0 ; i <= sentence.length - 1 ; i++) {
//     // Iterate over input sentence, starting at index 0 - if the character at index i is a white-space, slice a substring from the input sentence starting at the value of the count variable and ending at the current index. Set the newSentence variable equal to this most-recent substring plus the previous value. Next, set the value of count equal to the current index, which is the index of the white-space just found. Finally, increase the index by one (i++) and repeat.
//     if (sentence.charAt(i).match(regWhiteSpace)) {
//       newSentence = sentence.slice(count,i) + " " + newSentence;
//       count = i;
//     }
//   };
//   // The return statement prepends the final word in the input sentence to the nearly complete reversed sentence.
//   return (sentence.slice(count, sentence.length) + " " + newSentence);
// };
//
// // Front-end
// $(document).ready(function(){
//   $('#inputForm').submit(function(event){
//     event.preventDefault();
//     var inputSentence = $('#userInput').val();
//     $('#messageBeforeResults, #hideResult').show();
//     $('#messageAfterResults').hide();
//     $('#result').empty();
//     $('#inputSentence').empty()
//     setTimeout(function () {
//       $('#inputSentence').text(inputSentence);
//     }, 1000);
//     setTimeout(function () {
//       $('#result').append(reverseSentence(inputSentence)).show();
//       $('#messageBeforeResults, #messageAfterResults').toggle();
//     }, 4600);
//   });
// });
