function fancyCounter() {
  var counter = 0;
  return {
    more: function() {
          counter++;
          return counter;
        },
    less: function() {
          counter--;
          return counter;
        },
    reset: function() {
          counter = 0;
          return counter;
    }
  };

};

function addCounter(){
  return $('<div class="counter"><p class="count">0'
      +'</p><button class="btn more">+</button> '
      +'<button class="btn less">-</button> '
      +'<button class="btn reset">Reset</button> '
      +'<button class="btn delete">Delete</button></div>');
};


$(document).ready(function() {
  $('#new_counter').on('click', function() {
    var cntr = fancyCounter()
    var newThing = addCounter()
    var display = newThing.children('.count')
    $(['more', 'less', 'reset']).each(function(i, x) {
      newThing.children('.' + x).click(function() {
        display.html(cntr[x]())
      })
    })
    newThing.children('.delete').click(function() {
      $(this).closest('.counter').hide();
    });

    $('#counter_list').append(newThing);
  });

});
