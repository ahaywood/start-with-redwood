import type { Meta, StoryObj } from '@storybook/react'

import SuperAdminPage from './SuperAdminPage'

const meta: Meta<typeof SuperAdminPage> = {
  component: SuperAdminPage,
}

export default meta

type Story = StoryObj<typeof SuperAdminPage>

export const Primary: Story = {}
