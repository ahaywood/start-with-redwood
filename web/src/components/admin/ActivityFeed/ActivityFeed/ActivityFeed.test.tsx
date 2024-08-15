import { render, screen, waitFor } from '@redwoodjs/testing/web'

import ActivityFeed from './ActivityFeed'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActivityFeed', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActivityFeed close={() => {}} />)
    }).not.toThrow()
  })

  it('closes correctly', async () => {
    const close = jest.fn()
    render(<ActivityFeed close={close} />)
    expect(close).not.toHaveBeenCalled()
    const button = screen.getByRole('button')
    button.click()
    await waitFor(() => {
      expect(close).toHaveBeenCalled()
    })
  })
})
