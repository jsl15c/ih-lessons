// Async function: Does something that you wait for
// Callback function: a notification in javascript
  // when an async function finishes

// count = 0;
//
// function timesUp () {
//   count += 1;
//   console.log('10 second');
// }
//
// setTimeout(timesUp,10000);    // callback function
//
// setTimeout(function(){    // anonymous (async) function
//   count += 1;
//   console.log('3 second');
// }, 3000);
//
// console.log('FINISHES FIRST');
// console.log(count);

var timerId = setTimeout(function() {
  console.log('after 5 seconds');
},5000);

var count = 0;

function everySecond() {
  count += 1;
  console.log('hello ' + count);

  if (count >= 45) {
    clearInterval(intervalId);
  }
}

var intervalId  = setInterval(everySecond, 1000);

var setId = setInterval(function(){
  console.log('clear after 5 seconds');
  clearInterval(setId);
},5000);
