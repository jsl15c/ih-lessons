console.log('script.js online');
console.log(jQuery);

$(document).ready(function() {
  $('a').click(function (event) {
    // prevent default behavior of action
    event.preventDefault();
    var randomNumber = Math.floor(Math.random() * 50) + 1;
    $('h1').css('font-size', randomNumber + 'px' );
  });

  var leftAmount = 0;
  $('#dino-btn').click(function() {
    leftAmount += 60;
    $('#dino').css('left', leftAmount);
  });

  $('#img-btn').click(function () {
    $('#src-image').prop('src', 'https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif');
  });
});
