$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 3,
  "name": "I want to login into my FACEBOOK account",
  "description": "",
  "id": "i-want-to-login-into-my-facebook-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@googleSearch"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "As a user I want to login into my FACEBOOK account",
  "description": "",
  "id": "i-want-to-login-into-my-facebook-account;as-a-user-i-want-to-login-into-my-facebook-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on FACEBOOK page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I entered my \"email\" and \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "click on \"log in\" to login into my account",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.i_am_on_FACEBOOK_page()"
});
formatter.result({
  "duration": 5350477300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 14
    },
    {
      "val": "password",
      "offset": 26
    }
  ],
  "location": "Loginsteps.i_entered_my_and(String,String)"
});
formatter.result({
  "duration": 349501100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log in",
      "offset": 10
    }
  ],
  "location": "Loginsteps.click_on_to_login_into_my_account(String)"
});
formatter.result({
  "duration": 4575688300,
  "status": "passed"
});
});