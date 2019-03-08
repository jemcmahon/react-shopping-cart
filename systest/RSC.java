import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import com.applitools.eyes.selenium.Eyes;
import com.applitools.eyes.RectangleSize;

public class RSC {

    public static void main(String[] args) {

        WebDriver driver = new FirefoxDriver(); // ChromeDriver

        Eyes eyes = new Eyes();
        eyes.setApiKey(System.getenv("APPLITOOLS_API_KEY"));

        try {
            eyes.open(driver, "RSC Java", "RSC Selenium Flow 1", new RectangleSize(500, 700));
            driver.get("http://localhost:3000/");
            eyes.checkWindow("Home");
            driver.findElement(By.cssSelector(".filters-available-size:nth-child(3) .checkmark")).click();
            eyes.checkWindow("Size Small");

            driver.findElement(By.cssSelector(".shelf-item__buy-btn")).click();
            eyes.checkWindow("Cart Open");

            driver.findElement(By.cssSelector(".float-cart__close-btn")).click();
            eyes.checkWindow("Cart Closed");

            driver.findElement(By.cssSelector(".filters-available-size:nth-child(4) .checkmark")).click();
            eyes.checkWindow("Size S & M");

            driver.findElement(By.cssSelector(".shelf-item:nth-child(2) > .shelf-item__buy-btn")).click();
            eyes.checkWindow("Cart Open 2");

            driver.findElement(By.xpath("//div[@id='root']/div/div[2]/div[2]/div/div")).click();
            eyes.checkWindow("Cart Delete");

            driver.findElement(By.cssSelector(".shelf-item__del")).click();
            eyes.checkWindow("Cart Delete 2");

            Thread.sleep(1); // placeholder
            eyes.close();
        } catch(InterruptedException e){
            System.out.println("Main thread interrupted");
        } finally {
            driver.quit();
            eyes.abortIfNotClosed();
        }
    }
}

// vim:ts=4 sts=4 sw=4 et
