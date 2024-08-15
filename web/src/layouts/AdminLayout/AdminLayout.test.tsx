import { render } from '@redwoodjs/testing/web'

import AdminLayout from './AdminLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminLayout', () => {
  beforeEach(() => {
    mockCurrentUser({
      id: '123',
      name: 'Amy Dutton',
      email: 'testemail@hello.com',
    })
  })

  it('renders successfully', () => {
    expect(() => {
      render(<AdminLayout />)
    }).not.toThrow()
  })
})
