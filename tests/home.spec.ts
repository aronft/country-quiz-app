import { expect, test } from '@playwright/test'

import { configEnv } from '../src/utils/config-env'

test('should have the Country Quiz Game title page', async ({ page }) => {
    await page.goto('http://localhost:5173')

    await expect(page).toHaveTitle(/Country Quiz Game/)
})

test('should have h1 with country quiz name', async ({ page }) => {
    await page.goto('http://localhost:5173')
    const title = await page.$('h1')
    expect(await title?.innerText()).toBe('COUNTRY QUIZ')
})

test('should show options after fetch', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await page.waitForLoadState('networkidle')
    const subtitle = await page.$('h2')
    console.log(await subtitle?.innerHTML())
    expect(await subtitle?.innerText()).not.toBeNull()
    expect(await subtitle?.innerText()).not.toBeUndefined()
})
