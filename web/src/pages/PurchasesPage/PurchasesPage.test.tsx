import { render } from '@redwoodjs/testing/web'

import PurchasesPage from './PurchasesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PurchasesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PurchasesPage />)
    }).not.toThrow()
  })
})
