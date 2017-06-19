var myChalk = require('chalk');
var myKirbyDance = require('kirby-dance');



for (var i = 0; i <= 5; i++) {
  var color = myChalk.blue.bgGreen("hello");
  console.log(color);
}

console.log(myChalk.red(myKirbyDance(100)));
