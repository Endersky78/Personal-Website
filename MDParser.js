var markdown = require('markdown').markdown

async function getBlogEntries(fs, blogEntries) {
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

module.exports.getBlogEntries = getBlogEntries