package stepDefinations;



import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import pageObjects.HomePage;

import org.junit.Assert;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


import Cucumber.Automation.Base;

@RunWith(Cucumber.class)
public class MyStepDefinitions {

	
	public WebDriver driver;
	HomePage h;
	
    @Given("^User is on GreenCart landing page$")
    public void user_is_on_greencart_landing_page() throws Throwable {
       driver = Base.getDriver();
       driver.manage().window().maximize();
       
       
    }

    @When("^User searched for \"([^\"]*)\" vegetables$")
    public void user_searched_for_something_vegetables(String strArg1) throws Throwable { 
    	h = new HomePage(driver);
    	h.getSearch().sendKeys(strArg1);
      //driver.findElement(By.xpath("//input[@type='search']")).sendKeys(strArg1);
      Thread.sleep(3000);
    }

    @Then("^\"([^\"]*)\" results are displayed$")
    public void something_results_are_displayed(String strArg1) throws Throwable {
      Assert.assertTrue(driver.findElement(By.cssSelector("h4.product-name")).getText().contains(strArg1));
    }
    
    @And("^Added items to cart$")
    public void added_items_to_cart() throws Throwable {
       driver.findElement(By.cssSelector("a.increment")).click();
       driver.findElement(By.xpath("//button[contains(text(),'ADD TO CART')]")).click();
       
    }

    @And("^User proceeded to checkout for purchase$")
    public void user_proceeded_to_checkout_for_purchase() throws Throwable {
    	driver.findElement(By.cssSelector("a.cart-icon img")).click();
    	driver.findElement(By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]")).click();
    }
    
    @Then("^Verify if selected \"([^\"]*)\" item is present in chekout page$")
    public void verify_if_selected_something_item_is_present_in_chekout_page(String strArg1) throws Throwable {
       Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(strArg1));
    }

    
    @When("^User searched for (.+) vegetable$")
    public void user_searched_for_vegetables(String name) throws Throwable {
    	h = new HomePage(driver);
    	h.getSearch().sendKeys(name);
      //driver.findElement(By.xpath("//input[@type='search']")).sendKeys(strArg1);
      Thread.sleep(3000);
    }
    
    @Then("^Verify if selected (.+) item is present in checkout page$")
    public void verify_if_selected_item_is_present_in_chekout_page(String name) throws Throwable {
    	 Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(name));
    }
    

}