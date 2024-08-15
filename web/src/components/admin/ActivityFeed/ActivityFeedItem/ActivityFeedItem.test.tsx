import { render } from '@redwoodjs/testing/web'

import ActivityFeedItem from './ActivityFeedItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActivityFeedItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActivityFeedItem />)
    }).not.toThrow()
  })
})
