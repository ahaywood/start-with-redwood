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

import WhatsNew from './WhatsNew'

const meta: Meta<typeof WhatsNew> = {
  component: WhatsNew,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof WhatsNew>

export const Primary: Story = {}
