// use snapcat
//        |
//  name of database

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/snapcat');

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: {type: String, required:true},
  breed: {type: String},
  age: {type:Number, default:0}
});


// collection name from the model name
  // 'Cat' -> 'cats' -> db.cats.find()
const Cat = mongoose.model(
  'Cat', // name of model
  catSchema
  // schema object
);

//  CRUD operations (mongoose version)
  //  Create
const myKitty = new Cat({
  name: 'Sam',
  breed:'Tuxedo Cat',
  age:14,
  favoriteToy:'Water Glass' // field is ignored - not in schema
});
myKitty.save((err) => {
  if (err) {
    console.log('Could not save new entry');
  }
  else {
    console.log('Saved new entry');
  }
});
// CALLBACK called when save is finished - receives one parameter
// db.cats.insertOne({name: 'Sam' });

// db.cats.insertOne({name: 'Nala'})
Cat.create(
  {
    name: 'Nala',
    breed:'Part Lion',
    age:1,
    personality:'sassy' // field is ignored - not in schema
  },
  (err) => {
  if (err) {
    console.log('Could not save new entry');
  }
  else {
    console.log('Saved new entry');
  }
});


// db.cats.find();
Cat.find((err, catResults) => {
  if (err) {
    console.log('error');
  }
  else {
    console.log('all the cats');
    catResults.forEach((cat) => {
      console.log(cat);
    });
  }
});

Cat.find(
  {name: 'Nala'},         // 1st arg: criteria object
  {_id: 0},               // 2nd arg: projection object
  (err, nalaResults) => { // 3rd ard: callback that runs when finished
    if (err) {
      console.log('error');
    }
    else {
      console.log('🐱 '.repeat(4));
      nalaResults.forEach((cat) => {
        console.log('🐱 ' + cat.name + '🐱');
      });
      console.log('🐱 '.repeat(4));
    }
});
