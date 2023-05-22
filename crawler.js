var puppeteer = require('puppeteer')

function toUpperCamelCase(str) {
    return str.toLowerCase().split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}

async function LookForCode(code) {
  const maxRetries = 3
  let retries = 0
  let data = null

  while (retries <= maxRetries && data == null) {
    retries++
    try {
      data = await scrapeData(code)
    } catch (error) {
      console.log(error)
      await new Promise(resolve => setTimeout(resolve, 1000)) // wait a second before retrying
    }
  }

  if (data == null) {
    console.error(`Failed to scrape data after {maxRetries} retries`)
  } else {
    return data
  }
}

async function scrapeData(code) {
    const browser = await puppeteer.launch({
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ],
      headless: true
    })
    const page = await browser.newPage()
    
    await page.goto("https://classes.oregonstate.edu")
    await page.type('#crit-keyword', code)
    await page.click('#search-button')

    await page.waitForSelector(".result__headline")

    await page.click(".result__headline")

    await page.waitForSelector("div.text:nth-child(2)")

    let data = await page.evaluate(() => {
        let classTitle = document.querySelector("div.text:nth-child(2)").textContent
            .toLowerCase().split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ').replace('Ii', "II")
        let classDesc =  document.querySelector(".section--description > div:nth-child(2)").textContent.replace('Lec/lab/rec.', '').trim()

        return {
            title: classTitle,
            desc: classDesc
        }
    })

    console.log(`== Finished grabbing ${code}`)

    return data
}

module.exports = { LookForCode }
