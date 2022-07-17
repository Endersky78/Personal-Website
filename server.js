var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')

var app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.status(200).render('index')
})

app.get('/experience', (req, res) => {
  res.status(200).render('experience')
})

app.get('/resume', (req, res) => {
  res.status(200).render('resume')
})

app.use(express.static('public'))

app.get('*', function (req, res) {
  //res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, function () {
  console.log("== Server is listening on port", port)
});