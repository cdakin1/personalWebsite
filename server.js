const express = require('express');
const app = express();

app.use('/public', express.static(`${__dirname}/public`));

app.get('/', function(req, res){
  res.sendFile(`${__dirname}/public/index.html`);
});

app.get('/contact', function(req, res) {
  res.sendFile(`${__dirname}/public/pages/contact.html`)
})

app.get('/about', function(req, res) {
  res.sendFile(`${__dirname}/public/pages/about.html`)
})

app.get('/projects', function(req, res) {
  res.sendFile(`${__dirname}/public/pages/projects.html`)
})

app.listen(8080, () => {
  console.log('listening on 8080');
});
