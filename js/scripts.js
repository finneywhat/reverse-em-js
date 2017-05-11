// Back-end (Business Logic)

/* This code will maintain the original position of **most** punctuation marks, e.g. [ Hello, world! ] becomes [ world, Hello! ], but not ellipses (...), or any mark that has a leading white-space, e.g [ there were errors - 120 in total - that needed... ]*/
var splitSentence = function(sentence) {
  var words = sentence.split(" ");
  var count = 0;
  var newArray = [];

  words.forEach(function(word) {
    var indexLastChar = word.length-1;
    if (isSpecChar(word.charAt(indexLastChar))) {
      count+=2;
      newArray.splice(count-1, 0, word.slice(0,indexLastChar));
      newArray.push(word.slice(indexLastChar));
      // console.log(newArray);
    } else {
      count+=1;
      newArray.splice(count-1, 0, word.slice(0, sentence.length-1));
      // console.log(newArray);
    }
  });
  return reverseSentence(newArray);
};

var reverseSentence = function(array) {
  var index = 0;
  var regSpecChar = /[\W]/;
  var reversedArray = [];
  var steps = 0;
//loop through splitSentence array and only push words to new array
  for (var i = array.length - 1; i >= 0; i--) {
    if (regSpecChar.test(array[i]) && array[i].length === 1) {
    } else {
      reversedArray.push(array[i]);
      index+=1;
    }
  };
//loop through splitSentence array and add the punctuation (skipped over in previous for loop) to the reversed array in their original position from the input sentence
  for (var i = 1; i <= array.length-1; i++) {
    if (regSpecChar.test(array[i]) && array[i].length === 1) {
      // reversedArray.splice(i, 0, array[i]);
      steps +=1;
      reversedArray[i-steps] = reversedArray[i-steps] + array[i];
    }
  }
  return reversedArray.join(" ");
};

  var isSpecChar = function(letter) {
    var regEx = /[\W]/;
    if (regEx.test(letter)){
      return true;
    } else {
      return false;
    }
  };
// Front-end (User Interface)
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();

  $('#inputForm').submit(function(event){
    event.preventDefault();
    var inputSentence = $('#userInput').val();

    $('#messageBeforeResults, #before, #hideResult').show();
    $('#messageAfterResults').hide();
    $('#result').empty();
    $('#inputSentence').empty()

    setTimeout(function () {
      $('#inputSentence').text(inputSentence);
      $('#before, #after').toggle();
    }, 1500);

    setTimeout(function () {
      $('#result').append(splitSentence(inputSentence)).show();
      $('#messageBeforeResults, #messageAfterResults').toggle();
    }, 4600);

    window.scrollTo(0, document.body.scrollHeight);
  });

  $('.fa-trash').click(function(){
    $('#result, #inputSentence').empty();
    $('#userInput').val("").focus();
    $('#messageBeforeResults, #messageAfterResults, #before, #after').toggle();
  });
});
