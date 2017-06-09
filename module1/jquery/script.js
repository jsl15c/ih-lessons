console.log('script.js online');
console.log(jQuery);

$(document).ready(function() {
  // $('a').click(function (event) {
  //   // prevent default behavior of action
  //   event.preventDefault();
  //   var randomNumber = Math.floor(Math.random() * 50) + 1;
  //   $('h1').css('font-size', randomNumber + 'px' );
  // });

  //move dino
  var leftAmount = 0;
  $('#dino-btn').click(function() {
    leftAmount += 60;
    $('#dino').css('left', leftAmount);
  });

// change img src, use variable to track
  var currentState = 'normal';
    $('#img-btn').click(function () {
      if (currentState === 'normal') {
      $('#src-image').prop('src', 'https://media.giphy.com/media/3oKIPsx2VAYAgEHC12/giphy.gif');
      currentState = 'parody';
    }
    else {
      $('#src-image').prop('src', 'https://media.giphy.com/media/xTiTnJ3BooiDs8dL7W/giphy.gif');
      currentState = 'normal';
    }
});

// user input image src
  $("#input-btn").click(function() {
    var pastedImage = $('#image-input').val();
    $('#src-image').prop('src', pastedImage);
  });
});

$(document).ready(function(){
  var currentCount = 0;

  $('#increase-btn').click(function(){
    currentCount += 1;
    $('#count-tag').html(currentCount);
    if (currentCount > 15) {
      $('#hot-tag').addClass('really-hot');
    }
    else if (currentCount > 10) {
      $('#hot-tag').addClass('hot');
    }

    else if (currentCount > 5) {
      $('#hot-tag').addClass('warm');
    }

  });
});
