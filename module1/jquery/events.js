console.log(jQuery);

$(document).ready(function() {
  $('#my-checkbox').change(function() {
    var isChecked = $('#my-checkbox').prop('checked');

    if (isChecked) {
      $('#pizza-img').fadeIn(300);
      $('body').toggleClass('dance');
    }
    else {
      $('#pizza-img').fadeOut(300);
      $('body').toggleClass('dance');
    }
  });
});

$(document).ready(function() {
  $('#food-dropdown').change(function() {
    var selectedFood = $('#food-dropdown').val();

    if (selectedFood === 'Meatball Pizza') {
      $('#pizza-label').html('Great choice!');
    }
    else if (selectedFood === 'Margherita Pizza') {
      $('#pizza-label').html('So much cheese!');
    }
    else if (selectedFood === 'Pepperoni Pizza') {
      $('#pizza-label').html('Not bad..');
    }
    else  {
      $('#pizza-label').html('Safe but boring choice');
    }
  });
});

$(document).ready(function () {
  // keydown, keyup, or keypress
  $(document).keydown(function (event) {
    event.preventDefault();
    // up arrow key
    if (event.which === 38) {
      alert('up key!');
    }
    // right arrow key
    else if (event.which === 39) {
      alert('right key!');
    }
    // down arrow key
    else if (event.which === 40) {
      alert('down kewhichy!');
    }
    // right arrow key
    else if (event.which === 37) {
      alert('left key!');
    }
  });
});
