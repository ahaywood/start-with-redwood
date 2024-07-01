import type { Meta, StoryObj } from '@storybook/react'

import PermissionsPage from './PermissionsPage'

const meta: Meta<typeof PermissionsPage> = {
  component: PermissionsPage,
}

export default meta

type Story = StoryObj<typeof PermissionsPage>

export const Primary: Story = {}
