import { render } from '@redwoodjs/testing/web'

import NotificationCount from './NotificationCount'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotificationCount', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationCount count={5} />)
    }).not.toThrow()
  })

  it('renders the count correctly', () => {
    const { getByText } = render(<NotificationCount count={5} />)
    expect(getByText('5')).toBeInTheDocument()
  })
})
