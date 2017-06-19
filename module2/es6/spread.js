const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['puppy', 'kitten', 'bunny'];

// let megaAnimalsArray = [];
//
// reptiles.forEach((myReptile) => {
//   megaAnimalsArray.push(myReptile);
// });
//
// reptiles.forEach((myMammal) => {
//   megaAnimalsArray.push(myMammal);
// });

const megaAnimalsArray = [...reptiles, ...mammals];

console.log(megaAnimalsArray);

let foods = ['cookies', 'sandwiches'];
foods.push('pizza');

let moreFoods = ['ice cream', ...foods, 'pizza'];
