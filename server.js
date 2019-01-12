'use strict';

require('dotenv').config();
const express = require('express');
const PORT = 8080;
const app = express();

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => console.log('Server is up on ', PORT));

app.set('view engine', 'ejs');

// routes

app.get('/', (req, res) => {
  homePage(req, res);
});

app.get('/about', (req, res) => {
  aboutUs(req, res);
});

app.get('*', (req, res) => {
  noPageError(res);
});

// route functions

function homePage(req, res) {
  res.render('master', {
    'thisPage': 'partials/home.ejs',
    'thisPageTitle': 'Home'
  });
}

function aboutUs(req, res) {
  res.render('master', {
    'thisPage': 'partials/about.ejs',
    'thisPageTitle': 'About Us'
  });
}

function noPageError(res, err) {
  if (err) {
    console.log(err);
  }
  res.render('master', {
    'thisPage': 'partials/error',
    'thisPageTitle': 'Page Not Found'
  });
}