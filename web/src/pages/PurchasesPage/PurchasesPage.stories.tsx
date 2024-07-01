import type { Meta, StoryObj } from '@storybook/react'

import PurchasesPage from './PurchasesPage'

const meta: Meta<typeof PurchasesPage> = {
  component: PurchasesPage,
}

export default meta

type Story = StoryObj<typeof PurchasesPage>

export const Primary: Story = {}
