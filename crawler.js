var cheerio = require('cheerio')
var puppeteer = require('puppeteer')

async function crawl ({ code }) {
    
    const response = await fetch()
    const html = await response.text()
    const $ = cheerio.load(html)
    let links = $('span')
        .map((i, span) => span.value).get()
}

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

async function scrapeData(code) {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    
    await page.goto("https://classes.oregonstate.edu")
    await page.type('#crit-keyword', code)
    await page.click('#search-button')

    await delay(5000)

    await page.click(".result__headline")

    await delay (1000)

    let data = await page.evaluate(() => {
        let classTitle = document.querySelector("div.text:nth-child(2)").textContent
        let classDesc =  document.querySelector(".section--description > div:nth-child(2)").textContent

        return {
            title: classTitle,
            desc: classDesc
        }
    })


    await page.screenshot({ path: '1.png', fullPage: true })
    console.log(data)
    await browser.close()
}

scrapeData("CS 290")