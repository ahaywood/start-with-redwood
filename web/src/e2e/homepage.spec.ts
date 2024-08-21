import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:8910/')
  await expect(page.getByRole('heading', { name: 'HomePage' })).toBeVisible()
})
