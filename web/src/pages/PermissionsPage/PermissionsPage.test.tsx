import { render } from '@redwoodjs/testing/web'

import PermissionsPage from './PermissionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PermissionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PermissionsPage />)
    }).not.toThrow()
  })
})
