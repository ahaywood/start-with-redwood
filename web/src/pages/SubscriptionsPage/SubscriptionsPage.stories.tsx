import type { Meta, StoryObj } from '@storybook/react'

import SubscriptionsPage from './SubscriptionsPage'

const meta: Meta<typeof SubscriptionsPage> = {
  component: SubscriptionsPage,
}

export default meta

type Story = StoryObj<typeof SubscriptionsPage>

export const Primary: Story = {}
