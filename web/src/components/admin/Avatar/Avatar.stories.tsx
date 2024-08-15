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

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Primary: Story = {
  args: {
    alt: 'John Doe',
    src: 'https://picsum.photos/seed/1723748791716/300/300',
    size: 100,
  },
}

export const InitialsOnly: Story = {
  args: {
    alt: 'John Doe',
    size: 100,
  },
}
