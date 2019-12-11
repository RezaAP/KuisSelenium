const { Builder, By, Key, util } = require("selenium-webdriver");

async function googling() 
{
  //buka browser
  let driver = await new Builder().forBrowser("firefox").build();
  let assert = require("assert")
  try
  {
    // buka url google
    await driver.get("https://demo.1crmcloud.com/login.php");
    // isi inputan id dan password 
    await driver.findElement(By.id("login_user")).sendKeys("admin");
    await driver.findElement(By.id("login_pass")).sendKeys("admin");
    // login
    await driver.findElement(By.id("login_button")).click();
    await driver.sleep(5000);
    // cari gambar untuk di klik
    await driver.findElement(By.className("default-avatar")).click();
    const text = await driver.findElement(By.xpath("/html/body/div[7]/div/div[3]/div/form/div[2]/div/div/div[2]/div/div[1]/div[1]/h3")).getText();
    // cari tulisan admin
    assert.equal(text, "Administrator", "Tes Fail");
    // jika sukses
    console.log("Test Success");
  }
  catch
  {
    // kalau gagal
    console.log("Test Gagal");
  }
  
}

googling();
