import { render } from '@redwoodjs/testing/web'

import WhatsNew from './WhatsNew'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WhatsNew', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WhatsNew />)
    }).not.toThrow()
  })
})
