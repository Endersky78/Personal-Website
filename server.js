var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')
var crawler = require('./crawler')

var app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var port = process.env.PORT || 8000

const classesTaken = [
  { code: 'CS 161', date: "Winter 2021" },
  { code: 'CS 162', date: "Spring 2021" },
  { code: 'CS 261', date: "Fall 2021" },
  { code: 'CS 271', date: "Winter 2022" },
  { code: 'CS 290', date: "Spring 2022" },
]

const classData = []

async function getClassData() {
  for (let i = 0; i < classesTaken.length; i++) {
    let data = await crawler.scrapeData(classesTaken[i].code)
    classData.push({
      title: data.title,
      desc: data.desc,
      code: classesTaken[i].code,
      date: classesTaken[i].date
    })
  }
}

getClassData()

app.get('/', (req, res) => {
  res.status(200).render('index')
})

app.get('/projects', (req, res) => {
  res.status(200).render('projects')
})

app.get('/experience', (req, res) => {
  res.status(200).render('experience', {
    classes: classData
  })
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