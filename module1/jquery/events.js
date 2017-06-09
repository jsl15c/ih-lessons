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
