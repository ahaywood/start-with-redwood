import { render } from '@redwoodjs/testing/web'

import SuperAdminPage from './SuperAdminPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SuperAdminPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SuperAdminPage />)
    }).not.toThrow()
  })
})
