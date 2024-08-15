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

import DropdownMenu from './DropdownMenu'

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DropdownMenu>

export const Primary: Story = {
  args: {
    options: [{ name: 'Option 1' }, { name: 'Option 2' }, { name: 'Option 3' }],
  },
}

export const WithIcons: Story = {
  args: {
    options: [
      { name: 'Option 1', icon: 'account' },
      { name: 'Option 2', icon: 'house' },
      { name: 'Option 3', icon: 'arrowLeft' },
    ],
  },
}
