import { render } from '@redwoodjs/testing/web'

import AssetsPage from './AssetsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AssetsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AssetsPage />)
    }).not.toThrow()
  })
})
