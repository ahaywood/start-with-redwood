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

import { AuthContext } from '@redwoodjs/auth'

import AccountBar from './AccountBar'

const meta: Meta<typeof AccountBar> = {
  component: AccountBar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof AccountBar>

export const Primary: Story = {
  render: () => {
    mockCurrentUser({
      id: '123',
      name: 'Amy Dutton',
      email: 'testemail@hello.com',
    })
    return <AccountBar />
  },
}
