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

test('workflow quiz game', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await page.waitForLoadState('networkidle')
    const subtitle = await page.getByRole('heading', { level: 2 })
    expect(await subtitle?.innerText()).not.toBeNull()
    expect(await subtitle?.innerText()).not.toBeUndefined()

    const buttons = await page.getByRole('button')

    expect(await buttons?.count()).toBe(4)

    for (let i = 0; i < 4; i++) {
        const firstButton = buttons.first()
        await firstButton.click()

        const lastButton = buttons.last()

        expect(await lastButton?.textContent()).toBe('Next')
        await lastButton.click()
    }

    const resultsTitle = await page.getByRole('heading', { level: 2 })
    expect(await resultsTitle?.textContent()).toBe('Results')

    const TryAgainButton = await page.getByRole('button', { name: 'Try again' })
    expect(await TryAgainButton).toBeTruthy()
    await TryAgainButton.click()
    expect(await buttons.count()).toBe(4)
})
