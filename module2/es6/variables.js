// let and const
  // different ways of declaring variables in different scopes

const jarrod = {
  name:'jarrod',
  age:20
};

jarrod.name = "jrod";

const foods = ['cookie', 'sandwich'];
foods.push('pickle');

let isHungry = true;
let x = 0;

const PI = 3.145;
const oneSecond = 1000;

setTimeout(function() {
  isHungry = true;
  x++;
  x += 8;
}, 3 * 60 * 60 * 1000);

for (let i = 0; i <= 42; i++) {
  let food = 'cookies';
  console.log(food + i);
}

function hello() {
  var name = 'jarrod';
  console.log(name);
}

hello();
