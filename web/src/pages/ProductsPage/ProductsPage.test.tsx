import { render } from '@redwoodjs/testing/web'

import ProductsPage from './ProductsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProductsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductsPage />)
    }).not.toThrow()
  })
})
