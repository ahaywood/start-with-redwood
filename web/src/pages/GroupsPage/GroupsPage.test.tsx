import { render } from '@redwoodjs/testing/web'

import GroupsPage from './GroupsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupsPage />)
    }).not.toThrow()
  })
})
