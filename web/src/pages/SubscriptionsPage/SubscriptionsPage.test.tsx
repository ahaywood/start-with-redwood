import { render } from '@redwoodjs/testing/web'

import SubscriptionsPage from './SubscriptionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SubscriptionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubscriptionsPage />)
    }).not.toThrow()
  })
})
