package stepdefinitions;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class Loginsteps {

public static WebDriver driver;

    @Given("^I am on FACEBOOK page$")
    public void i_am_on_FACEBOOK_page() throws Throwable {
        System.setProperty("webdriver.gecko.driver","C:\\Users\\chloe\\IdeaProjects\\FACEBOOK\\drivers\\geckodriver.exe");

        driver = new FirefoxDriver();
        driver.get("https://en-gb.facebook.com/login/");
    }

    @When("^I entered my \"([^\"]*)\" and \"([^\"]*)\"$")
    public void i_entered_my_and(String arg1, String arg2) throws Throwable {
        driver.findElement(By.name("email")).sendKeys("kendiddy2004@yahoo.co.uk");
        driver.findElement(By.name("pass")).sendKeys("Heineken274");
    }

    @Then("^click on \"([^\"]*)\" to login into my account$")
    public void click_on_to_login_into_my_account(String arg1) throws Throwable {
        driver.findElement(By.name("login")).click();
    }

}





