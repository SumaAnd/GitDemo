package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(  
	    features = "src/test/java/features",
	    glue="stepDefinations",tags="@SeleniumTest",strict=true,monochrome=true,
	    plugin= {"pretty","html:target/Selenium","json:target/Selenium.json","junit:target/selenium.xml"})
public class TestRunner {

}
