var puppeteer = require('puppeteer')

function toUpperCamelCase(str) {
    return str.toLowerCase().split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}

async function scrapeData(code) {
    const browser = await puppeteer.launch({ headless: true })
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

    return data
}

module.exports = { scrapeData }