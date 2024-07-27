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

import SearchBar from './SearchBar'

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SearchBar>

export const Primary: Story = {
  args: {
    onChange: () => console.log('Changing Text'),
    placeholder: 'Search for a Specific User',
  },
}
