import { expect, test } from '@playwright/test'

test('should have the Country Quiz Game title page', async ({ page }) => {
    await page.goto('http://localhost:5173')

    await expect(page).toHaveTitle(/Country Quiz Game/)
})

test('should have h1 with country quiz name', async ({ page }) => {
    await page.goto('http://localhost:5173')
    const title = await page.$('h1')
    expect(await title?.innerText()).toBe('COUNTRY QUIZ')
})
