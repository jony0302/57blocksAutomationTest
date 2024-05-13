// @ts-check
const { test, expect } = require('@playwright/test');
import * as locatorLogin from "../tests/page-object/login.json"

test('Background - Github Login page', async ({ page }) => {
  await page.goto('https://github.com/login');

  const username = await page.locator(locatorLogin.username);
  const password = await page.locator(locatorLogin.password);
  const forgotPassword = await page.locator(locatorLogin.forgotPassword);
  const SignInPasskey = await page.locator(locatorLogin.SignInPasskey);
  const createAccount = await page.locator(locatorLogin.createAccount);
  const terms = await page.locator(locatorLogin.terms);
  const Privacy = await page.locator(locatorLogin.Privacy);
  const Docs = await page.locator(locatorLogin.Docs);
  const signIn = await page.locator(locatorLogin.signIn);
  const contactSupport = await page.locator(locatorLogin.contactSupport);
  const cookies = await page.locator(locatorLogin.cookies);
  const personalInformation = await page.locator(locatorLogin.personalInformation);


  await expect(username).toBeVisible()
  await expect(password).toBeVisible();
  await expect(forgotPassword).toBeVisible();
  await expect(SignInPasskey).toBeVisible();
  await expect(createAccount).toBeVisible();
  await expect(terms).toBeVisible();
  await expect(Privacy).toBeVisible();
  await expect(Docs).toBeVisible();
  await expect(signIn).toBeVisible();
  await expect(contactSupport).toBeVisible();


});

test('Unsuccessful login with credentials', async ({ page }) => {
  await page.goto('https://github.com/login');

  const username = await page.locator(locatorLogin.username);
  const password = await page.locator(locatorLogin.password);
  const signIn = await page.locator(locatorLogin.signIn);
  const alert = await page.locator(locatorLogin.alert);
  const closeAlert = await page.locator(locatorLogin.closeAlert);

  await username.fill("userName");
  await password.fill("pwd");
  await signIn.click();
  await expect(alert).toBeVisible();
  await expect(alert).toHaveText("Incorrect username or password.")
  await expect(closeAlert).toBeVisible();
  await closeAlert.click();
  await expect(alert).not.toBeVisible();

});

test('Login with empty fields', async ({ page }) => {
  await page.goto('https://github.com/login');

  const username = await page.locator(locatorLogin.username);
  const password = await page.locator(locatorLogin.password);
  const signIn = await page.locator(locatorLogin.signIn);


  //await username.fill("userName");
  //await password.fill("pwd");
  await signIn.click();
  await expect(page).toHaveTitle('Sign in to GitHub · GitHu')

});


test('Successful login with credentials', async ({ page }) => {
  await page.goto('https://github.com/login');

  const username = await page.locator(locatorLogin.username);
  const password = await page.locator(locatorLogin.password);
  const signIn = await page.locator(locatorLogin.signIn);
  const alert = await page.locator(locatorLogin.alert);
  const closeAlert = await page.locator(locatorLogin.closeAlert);

  await username.fill("automationtest57blocks");
  await password.fill("Secret1234**");
  await signIn.click();
  await expect(alert).not.toBeVisible();
  await expect(page).toHaveTitle('GitHub');
});

test.skip('Successful login with Two-factor methods', async ({ page }) => {
  await page.goto('https://github.com/login');

  const username = await page.locator(locatorLogin.username);
  const password = await page.locator(locatorLogin.password);
  const signIn = await page.locator(locatorLogin.signIn);
  const alert = await page.locator(locatorLogin.alert);
  const twoFactor = await page.locator(locatorLogin.twoFactorAuthentication);
  const verify = await page.locator(locatorLogin.verifyButton);

  await username.fill("cardenasgong");
  await password.fill("Secret1234**");
  await signIn.click();
  await expect(page).toHaveTitle('Two-factor authentication · GitHub');
  await expect(alert).not.toBeVisible();
  await expect(page).toHaveTitle('GitHub');
  await twoFactor.fill("THISISTHEKEYTOACCESS");
  await verify.click();
  await expect(alert).not.toBeVisible();
  await expect(page).toHaveTitle('GitHub');

});

test('Unsuccessful login with Two-factor methods', async ({ page }) => {
  await page.goto('https://github.com/login');

  const username = await page.locator(locatorLogin.username);
  const password = await page.locator(locatorLogin.password);
  const signIn = await page.locator(locatorLogin.signIn);
  const alert = await page.locator(locatorLogin.alert);
  const twoFactor = await page.locator(locatorLogin.twoFactorAuthentication);
  const verify = await page.locator(locatorLogin.verifyButton);
  const closeAlert = await page.locator(locatorLogin.closeAlert);

  await username.fill("cardenasgong");
  await password.fill("Deisy100%.");
  await signIn.click();
  await expect(page).toHaveTitle('Two-factor authentication · GitHub');
  await expect(alert).not.toBeVisible();
  await twoFactor.fill("123456");
  await verify.click();
  await expect(alert).toHaveText("Two-factor authentication failed.")
  await expect(closeAlert).toBeVisible();
  await closeAlert.click();
  await expect(alert).not.toBeVisible();
});

