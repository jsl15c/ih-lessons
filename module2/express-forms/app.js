const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// view files are in views folder
app.set('views', 'views');

// imports the ejs package and allows us to use EJS view files
app.set('view engine', 'ejs');

// hosts all files in public/ folder from localhost:3000
app.use(express.static('public'));

// tells express wen want to use the EJS package
app.use(expressLayouts);

// console.log(information about the connections)
app.use(morgan('dev'));

// tells express that our layout file is "views/layout.ejs"
    // if layout file is called "layout.ejs", this is optional
app.set('layout', 'layout.ejs');

// body parser
app.use(bodyParser.urlencoded({extended:true}));

// define own middleware
app.use((req, res, next) => {
  console.log('My middleware: 🖥🖱');
  req.pizza  = '🍕';
  next();
});


// =============== ROUTES 🤙 ==============
app.get('/', (req, res, next) => {
  res.render('home-view.ejs');
});


// STEP 1 of search form
app.get('/search', (req, res, next) => {
  res.render('search-form-view.ejs');
  console.log('In the /earch route', req.pizza);
});


// STEP 2 of search form submission
app.get('/results', (req, res, next) => {
/*   |       |
     |       ------------------
     -----------              |
               |              |
<form method="get" action="/results">  */
// req.query refers to the data in the "query string"


// (?searchTerm=google&interestingThing=on)
// req.query = {
//    searchTerm:'google',
//    interestThing:'on'
//}
const myTerm = req.query.searchTerm;
const myCheckbox = req.query.interestThing;

if (myCheckbox === 'on') {
  res.render('pizza-results.ejs', {
    theSearch:myTerm,
  });
}
else {
  res.render('results-view.ejs', {
    theSearch:myTerm,
  });
  }
});



// STEP 1 of login form submission
app.get('/login', (req, res, next) => {
// display "views/login-form-view"
  res.render('login-form-view.ejs');
});

app.post('/check-login', (req, res, next) => {

  const userEmail = req.body.emailValue;
  const userPassword = req.body.passwordValue;

  if (userEmail === 'jarrod@me.com' && userPassword === 'abc123') {
    res.render('welcome-view.ejs');
  }
  else {
    res.render('go-away-view.ejs');
  }

});


// ========================================


app.listen(3000);
