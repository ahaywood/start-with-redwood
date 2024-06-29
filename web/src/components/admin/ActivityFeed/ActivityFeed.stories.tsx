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

import ActivityFeed from './ActivityFeed'

const meta: Meta<typeof ActivityFeed> = {
  component: ActivityFeed,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ActivityFeed>

export const Primary: Story = {}
