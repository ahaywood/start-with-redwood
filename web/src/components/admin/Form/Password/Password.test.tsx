import { render } from '@redwoodjs/testing/web'

import Password from './Password'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Password', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Password />)
    }).not.toThrow()
  })
})
