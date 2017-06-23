const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// view files are in views folder
app.set('views', 'views');

// imports the ejs package and allows us to use EJS view files
app.set('view engine', 'ejs');

// hosts all files in public/ folder from localhost:3000
app.use(express.static('public'));

// tells express wen want to use the EJS package
app.use(expressLayouts);

// tells express that our layout file is "views/layout.ejs"
    // if layout file is called "layout.ejs", this is optional
app.set('layout', 'layout.ejs');




// =============== ROUTES 🤙 ==============
app.get('/', (req, res, next) => {
  res.render('home-view.ejs');
});


// STEP 1 of search form
app.get('/search', (req, res, next) => {
  res.render('search-form-view.ejs');
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


// ========================================


app.listen(3000);
