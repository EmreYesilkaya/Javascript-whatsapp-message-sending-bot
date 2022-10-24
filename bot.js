const puppeteer = require("puppeteer");

async function scrape(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector("[title='ismi buraya giriniz']");
  const target = await page.$("[title='ismi buraya giriniz']");
  await target.click();
  const inp = await page.$(
    "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div.fd365im1.to2l77zo.bbv8nyr4.mwp4sxku.gfz4du6o.ag5g9lrv > p"
  );
  //ilk loop
const max = 50;
//ikinci loop
const hop = 10 
for(let i = 0; i < hop; i++){}
  for (let i = 0; i < max; i++) {
    await inp.type("mesajınızı buraya giriniz");
    await page.keyboard.press("Enter");
  }




  }

scrape("https://web.whatsapp.com");