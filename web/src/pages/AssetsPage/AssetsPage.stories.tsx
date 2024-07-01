import type { Meta, StoryObj } from '@storybook/react'

import AssetsPage from './AssetsPage'

const meta: Meta<typeof AssetsPage> = {
  component: AssetsPage,
}

export default meta

type Story = StoryObj<typeof AssetsPage>

export const Primary: Story = {}
