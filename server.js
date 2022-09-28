var path = require('path')
var express = require('express')
var exphbs = require('express-handlebars')
var crawler = require('./crawler')
var markdown = require('markdown').markdown
var fs = require('fs')

var app = express()

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

var port = process.env.PORT || 8000

const classesTaken = [
  { code: 'CS 361', date: "Fall 2022"},
  { code: 'CS 344', date: "Fall 2022"},
  { code: 'CS 340', date: "Fall 2022"},
  { code: 'CS 290', date: "Spring 2022" },
  { code: 'CS 271', date: "Winter 2022" },
  { code: 'CS 261', date: "Fall 2021" },
  { code: 'CS 162', date: "Spring 2021" },
  { code: 'CS 161', date: "Winter 2021" },
]

const classData = []
var blogEntries = []

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

  console.log("Finished loading class data.")
}

async function getBlogEntries() {
  let dirname = './blog_posts/'
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      console.log("Error reading blog posts directory!")
      return
    }

    filenames.forEach((filename) => {
      fs.readFile(dirname + filename, 'utf-8', (err, content) => {
        if (err) {
          console.error("Error reading markdown file!")
          return
        }

        let parsedContent = markdown.toHTML(content)

        console.log("Parsed " + filename)

        blogEntries.push({
          content: parsedContent
        })
      })
    })
  })
}

getClassData()
getBlogEntries()

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

app.get('/blog', (req, res) => {
  res.status(200).render('blog', {
    blogs: blogEntries
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