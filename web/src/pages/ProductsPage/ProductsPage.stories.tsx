import type { Meta, StoryObj } from '@storybook/react'

import ProductsPage from './ProductsPage'

const meta: Meta<typeof ProductsPage> = {
  component: ProductsPage,
}

export default meta

type Story = StoryObj<typeof ProductsPage>

export const Primary: Story = {}
