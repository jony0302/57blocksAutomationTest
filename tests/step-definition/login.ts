import { Given, When, Then } from "@cucumber/cucumber";


Given('Github Login page', async () => {
    // Code to navigate to the GitHub login page
    console.log('Navigating to the GitHub login page');
});

When('The User types the correct username {string} and password {string}', async (username, password) => {
    // Code to type username and password into input fields
    console.log(`Typing username: ${username}, password: ${password}`);
});

When('I click on the Sign in button', async () => {
    // Code to simulate clicking on the Sign in button
    console.log('Clicking on the Sign in button');
});

Then('The user successfully logs in', async () => {
    // Code to verify that the user has successfully logged in
    console.log('Verifying successful login');
});