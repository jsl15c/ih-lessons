const express = require('express');

const app = express();

// npm install ejs --save .... needed for express templating
app.set('view engine', 'ejs');

// get static assets from the public folder
app.use(express.static('public'));

// ROUTE
  //  an address (url) you can visit on this application
let visitCount = 0;

app.get('/', (request, response, next) => {
  // anonymous function determines the code that is run when visiting the address
  visitCount++;
  console.log(visitCount + " people(s) have viewed this site.");
  // give connecting device response
  response.render('home.ejs');
});

app.get('/about', (request, response, next) => {
  response.render('about.ejs');
});

app.get('/contact', (request, response, next) => {
  response.render('contact.ejs');
});


// localhost:3000
app.listen(3000);
