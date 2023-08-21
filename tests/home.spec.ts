import { expect, test } from '@playwright/test'

test('should have the Country Quiz Game title page', async ({ page }) => {
    await page.goto('http://localhost:5173')
    // const title = page.getByRole('heading', { name: 'utaheotuh' })

    await expect(page).toHaveTitle(/Country Quiz Game/)
    // await expect(page)
})
