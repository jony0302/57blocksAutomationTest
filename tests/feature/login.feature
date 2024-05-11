Feature: Login Github

  User has a front to log in the application

  Background:
    Given Github Login page

  @login
  Scenario: Successful login
    When The User types the correct username "<username>" and password "<password>"
    And I click on the Sign in button
    Then The user successfully logs in

  Examples:
    | username     | password        |
    | automationtest57blocks | correctpassword1|
    | automationtest57blocks@hotmail.com | correctpassword2|

  Scenario: Unsuccessful login
    When The User types the incorrect username "<username>" and password "<password>"
    And I click on the Sign in button
    Then An error message is displayed indicaating that the couldn't sign in

  Examples:
    | username    | password          |
    | CorrectUser | incorrectpassword |
    | IncorretUser| incorrectpasswordt|

  Scenario: Login with empty fields
    When I leave the username and password fields empty
    And I click on the login button
    Then I should see an error message saying "Please fill in all fields"

  Scenario: Login with locked account
    When I enter my username "lockedUser" and my password "securePassword"
    And I click on the login button
    Then I should see an error message saying "Your account has been locked. Please contact the administrator"
