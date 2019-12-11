const { Builder, By, Key, util } = require("selenium-webdriver");

async function googling() 
    {
    // buka browser
    let driver = await new Builder().forBrowser("firefox").build();
    let assert = require("assert")
    try 
    {
        // buka url web jeruk
        await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
        // isi input text buat id & password
        await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms");
        await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms");
        await driver.findElement(By.id("btnLogin")).click();

        // cari tulisan "Welcome Admin"
        const cekText = await driver.findElement(By.xpath("//li")).getText();
        assert.equal(cekText, "Welcome Admin", "Test Text Fail");
        console.log("Test Berhasil");
    } 
    catch (error) 
    {
        // kalau gagal
        console.log("Test Gagal");
    }
}
googling();