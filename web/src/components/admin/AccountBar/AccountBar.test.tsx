import { render } from '@redwoodjs/testing/web'

import AccountBar from './AccountBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AccountBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountBar />)
    }).not.toThrow()
  })
})
