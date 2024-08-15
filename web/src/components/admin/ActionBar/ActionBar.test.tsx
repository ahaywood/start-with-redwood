import { render } from '@redwoodjs/testing/web'

import ActionBar from './ActionBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActionBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ActionBar>
          <p>Something</p>
        </ActionBar>
      )
    }).not.toThrow()
  })
})
