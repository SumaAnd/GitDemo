Feature: Search and place orders

@SeleniumTest
Scenario: Search and place orders for veggies
Given User is on GreenCart landing page
When User searched for "Cucumber" vegetables
Then "Cucumber" results are displayed

@SeleniumTest
Scenario Outline: search for items and move to checkout page
Given User is on GreenCart landing page
When User searched for <Name> vegetable
And Added items to cart
And User proceeded to checkout for purchase
Then Verify if selected <Name> item is present in checkout page
	
Examples:
|Name|
|Beetroot|
|Brinjal|