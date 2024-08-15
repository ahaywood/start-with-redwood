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

import ActivityFeedItem from './ActivityFeedItem'

const meta: Meta<typeof ActivityFeedItem> = {
  component: ActivityFeedItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ActivityFeedItem>

export const Primary: Story = {
  render: () => {
    return (
      <div className="activity-feed">
        <ul>
          <ActivityFeedItem
            children="Amy Dutton purchased Cabana Components for $97 at 6:25am"
            icon="money"
          />
        </ul>
      </div>
    )
  },
}
