const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const app = express();


// imports the ejs package and allows us to use separate view files
app.set('view engine', 'ejs');

// views folder files in templates folder
app.set('views', 'templates');

// hosts all the files inside the public folder from localhost:3000
app.use(express.static('public'));

// tells express we want to use EJS layouts package
app.use(expressLayouts);

// tells express that our layout file is "templates/may-master-layout.ejs"
app.set('layout', 'my-master-layout.ejs');

// local variables of views - default value
app.locals.myTitle = 'Express Views';

// ROUTES
app.get('/', (req, res, next) => {
  const myName = 'Jarrod';
  const myAge = 20;
  // send home-template.ejs to the browser
  res.render(
    'home-template.ejs', // 1st arg --> name of view file
    {
      viewName: myName, // 2nd arg --> object to transfer vriables to the view
      viewAge: myAge
    }
  );
});

const bookList = [
  'Dune',
  'Lord of the Rings',
  'Harry Potter',
  'The Martian',
  'Elon Musk',
  'Necronomicon',
  'Eloquent JavaScript'
];

app.get('/books', (req, res, next) => {
  res.render('books-view.ejs', {
    booksForView: bookList
  });
});

const accomplishmentsList = [
  {award:'Best TA 21 and under', type:'performance', person:'Kevin'},
  {award:'Coolest Swiss Person in the Class', type:'personality', person:'Daniel'},
  {award:'Most Slices of Pizza Eaten', type:'strength', person:'Nik'},
  {award:'Most Beautiful Former Cook', type:'looks', person:'Josh'},
  {award:'Best Last Name', type:'name', person:'Darren'}
];

app.get('/accomplishments', (reg, res, next) => {
  const randomIndex = Math.floor(Math.random() * accomplishmentsList.length);

  res.render('accomplishments-view.ejs', {
    accomplishmentsForView:accomplishmentsList,
    featuredAccomplishment:accomplishmentsList[randomIndex],
    myTitle:'Accomplishments'
  });
});




app.listen(3000);
