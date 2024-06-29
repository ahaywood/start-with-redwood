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

import ActionBar from './ActionBar'

const meta: Meta<typeof ActionBar> = {
  component: ActionBar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ActionBar>

export const Primary: Story = {}
