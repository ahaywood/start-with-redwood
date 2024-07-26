import { render } from '@redwoodjs/testing/web'

import Notifications from './Notifications'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Notifications', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Notifications />)
    }).not.toThrow()
  })
})
