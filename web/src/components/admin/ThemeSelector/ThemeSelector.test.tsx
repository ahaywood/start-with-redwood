import { render } from '@redwoodjs/testing/web'

import ThemeSelector from './ThemeSelector'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThemeSelector', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThemeSelector />)
    }).not.toThrow()
  })
})
