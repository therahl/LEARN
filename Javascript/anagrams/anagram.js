function isAnagram(word, list) {
  var sortedWord = word.toLowerCase().split('').sort().join('');
  var words = [];
  var anagrams = [];

  //split and sort each word in the list array into new array
  for(i=0;i<list.length;i++) {
    words.push(list[i].toLowerCase().trim().replace(/\s/g,'').split('').sort().join(''));
  };

  //test each item in words array for match against word and return the match
  for(i=0;i<list.length;i++) {
    if(sortedWord === words[i]) {
      anagrams.push(list[i].trim());
    }
  };
  return anagrams;
};


//begin interactive
$(document).ready(function() {
  var dictionary = [];
    $('#test').on('click',function() {
      var span = $(this).closest('.container').find('span');
      var word = $('input:text').val().trim();
      var list = $('textarea').val().split('\n');
      var anagrams = isAnagram(word, list);

      span.hide();
      if (anagrams.length > 1 && word.length > 0) {
        span.text("The anagrams of " + word + " are " + anagrams + ".").fadeIn('slow');
      } else if(anagrams.length == 1&& word.length > 0) {
        span.text("The anagram of " + word + " is " + anagrams + ".").fadeIn('slow');
      } else {
        span.text("No anagrams found").fadeIn('slow');
      }
    });

    // AJAX get dictionary file on page load and convert to array
    $.get('/dictionary.txt', function(response) {
      ddictionary = response.split('\n');
    });

    $('#dictionary').on('click',function() {
      var word = $('input:text').val().trim();
      var anagrams = isAnagram(word, dictionary);
      var span = $(this).closest('.container').find('span');

      span.hide();
      // span.text("This button does nothing.").fadeIn('slow');
      if (anagrams.length > 1 && word.length > 0) {
        span.text("The anagrams of " + word + " are " + anagrams + ".").fadeIn('slow');
      } else if(anagrams.length == 1&& word.length > 0) {
        span.text("The anagram of " + word + " is " + anagrams + ".").fadeIn('slow');
      } else {
        span.text("No anagrams found").fadeIn('slow');
      }
    });
});
