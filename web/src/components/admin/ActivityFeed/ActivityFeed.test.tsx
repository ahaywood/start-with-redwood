import { render } from '@redwoodjs/testing/web'

import ActivityFeed from './ActivityFeed'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActivityFeed', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActivityFeed />)
    }).not.toThrow()
  })
})
