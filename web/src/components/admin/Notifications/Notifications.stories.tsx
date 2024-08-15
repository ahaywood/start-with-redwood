// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Notifications from './Notifications'

const meta: Meta<typeof Notifications> = {
  component: Notifications,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Notifications>

export const Red: Story = {
  args: {
    notificationType: 'red',
  },
}

export const Yellow: Story = {
  args: {
    notificationType: 'yellow',
  },
}

export const Green: Story = {
  args: {
    notificationType: 'green',
  },
}
