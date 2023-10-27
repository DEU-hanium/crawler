const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const run = async () => {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options())
    .build();

  try {
    await driver.get(
      "http://crawling-ALB-37796986.ap-northeast-2.elb.amazonaws.com"
    );

    await driver.findElement(By.linkText("Page 1")).click();

    while (true) {
      await driver.findElement(By.linkText("Next Page")).click();
      await driver.sleep(100);
    }
  } catch (e) {
    console.log(e);
  } finally {
    // driver.quit();
  }
};
run();
