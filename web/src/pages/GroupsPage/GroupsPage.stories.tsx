import type { Meta, StoryObj } from '@storybook/react'

import GroupsPage from './GroupsPage'

const meta: Meta<typeof GroupsPage> = {
  component: GroupsPage,
}

export default meta

type Story = StoryObj<typeof GroupsPage>

export const Primary: Story = {}
