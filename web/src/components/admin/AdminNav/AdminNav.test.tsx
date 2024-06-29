import { render } from '@redwoodjs/testing/web'

import AdminNav from './AdminNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminNav />)
    }).not.toThrow()
  })
})
