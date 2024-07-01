import type { Meta, StoryObj } from '@storybook/react'

import CustomersPage from './CustomersPage'

const meta: Meta<typeof CustomersPage> = {
  component: CustomersPage,
}

export default meta

type Story = StoryObj<typeof CustomersPage>

export const Primary: Story = {}
