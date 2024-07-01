import { render } from '@redwoodjs/testing/web'

import CustomersPage from './CustomersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CustomersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomersPage />)
    }).not.toThrow()
  })
})
