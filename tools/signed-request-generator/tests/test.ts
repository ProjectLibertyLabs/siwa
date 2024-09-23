import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});

test('can see wallet button when I add a url', async ({ page }) => {
	await page.goto('/');
	page.locator('#callbackUri').fill('http://localhost:3000');
	await expect(page.getByText('Connect to Wallet')).toBeVisible();
});

test('can see an output  when I add a url and signature data', async ({ page }) => {
	await page.goto('/');
	page.locator('#callbackUri').fill('http://localhost:3000');
	page.locator('#signerPublicKey').fill('f6cL4wq1HUNx11TcvdABNf9UNXXoyH47mVUwT59tzSFRW8yDH');
	page.locator('#signature').fill('0xabcd');
	await expect(page.getByText('Mainnet/Production URL')).toBeVisible();
	await expect(page.getByText('Signed Request (JSON)')).toBeVisible();
});
