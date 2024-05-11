// @ts-check
const { test, expect } = require('@playwright/test');

test('correct login', async ({ page }) => {
  await page.goto('https://github.com/login');
  await expect(page).toHaveTitle(/Sign in to GitHub · GitHub/);
  
});

