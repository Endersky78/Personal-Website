var markdown = require('markdown').markdown

async function getBlogEntries(fs, blogEntries) {
    let dirname = './blog_posts/'
    readEntries(fs, dirname, blogEntries)
}

async function getProjects(fs, projects) {
  let dirname = './projects/'
  readEntries(fs, dirname, projects, true)
}

async function readEntries(fs, dirname, entries, keys=false) {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      console.log("Error reading projects!")
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
        
        if (!keys) {
          entries.push({
            content: parsedContent
          })
        } else {
          entries[filename] = parsedContent
        }
      })
    })
  })
}

module.exports.getBlogEntries = getBlogEntries
module.exports.getProjects = getProjects
