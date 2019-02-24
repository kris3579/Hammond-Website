'use strict';

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

// Routes

app.get('/', (req, res) => {
  homePage(req, res);
});

app.get('/contact', (req, res) => {
  contactPage(req, res);
});

app.get('/shows', (req, res) => {
  showsPage(req, res);
});

app.get('/about', (req, res) => {
  aboutPage(req, res);
});

app.get('*', (req, res) => {
  noPageError(res);
});

// Rendering functions for routes

function homePage(req, res) {
  res.render('master', {
    'thisPage': 'partials/home.ejs',
    'thisPageTitle': 'Home'
  });
}

function contactPage(req, res) {
  res.render('master', {
    'thisPage': 'partials/contact.ejs',
    'thisPageTitle': 'Contact'
  });
}

function showsPage(req, res) {
  res.render('master', {
    'thisPage': 'partials/shows.ejs',
    'thisPageTitle': 'Shows'
  });
}

function aboutPage(req, res) {
  res.render('master', {
    'thisPage': 'partials/about.ejs',
    'thisPageTitle': 'About'
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
