$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place orders",
  "description": "",
  "id": "search-and-place-orders",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search and place orders for veggies",
  "description": "",
  "id": "search-and-place-orders;search-and-place-orders-for-veggies",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on GreenCart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User searched for \"Cucumber\" vegetables",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 73997712575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 19
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_something_vegetables(String)"
});
formatter.result({
  "duration": 4170594603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "MyStepDefinitions.something_results_are_displayed(String)"
});
formatter.result({
  "duration": 92471572,
  "status": "passed"
});
formatter.after({
  "duration": 479479886,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "search for items and move to checkout page",
  "description": "",
  "id": "search-and-place-orders;search-for-items-and-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on GreenCart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for \u003cName\u003e vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to checkout for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify if selected \u003cName\u003e item is present in checkout page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "search-and-place-orders;search-for-items-and-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 18,
      "id": "search-and-place-orders;search-for-items-and-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 19,
      "id": "search-and-place-orders;search-for-items-and-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 20,
      "id": "search-and-place-orders;search-for-items-and-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "search for items and move to checkout page",
  "description": "",
  "id": "search-and-place-orders;search-for-items-and-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on GreenCart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for Beetroot vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to checkout for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify if selected Beetroot item is present in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 13911009648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_vegetables(String)"
});
formatter.result({
  "duration": 3231600126,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 254903780,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_for_purchase()"
});
formatter.result({
  "duration": 151768094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 19
    }
  ],
  "location": "MyStepDefinitions.verify_if_selected_item_is_present_in_chekout_page(String)"
});
formatter.result({
  "duration": 38700256,
  "status": "passed"
});
formatter.after({
  "duration": 102463662,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "search for items and move to checkout page",
  "description": "",
  "id": "search-and-place-orders;search-for-items-and-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User is on GreenCart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User searched for Brinjal vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User proceeded to checkout for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify if selected Brinjal item is present in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "duration": 9337859878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "MyStepDefinitions.user_searched_for_vegetables(String)"
});
formatter.result({
  "duration": 3190892420,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "duration": 144313027,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_proceeded_to_checkout_for_purchase()"
});
formatter.result({
  "duration": 191563212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 19
    }
  ],
  "location": "MyStepDefinitions.verify_if_selected_item_is_present_in_chekout_page(String)"
});
formatter.result({
  "duration": 41680231,
  "status": "passed"
});
formatter.after({
  "duration": 274852243,
  "status": "passed"
});
});