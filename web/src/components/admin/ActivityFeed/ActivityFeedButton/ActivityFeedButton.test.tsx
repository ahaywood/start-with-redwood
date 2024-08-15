import { act } from 'react-dom/test-utils'

import { render, screen } from '@redwoodjs/testing/web'

import ActivityFeedButton from './ActivityFeedButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ActivityFeedButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ActivityFeedButton />)
    }).not.toThrow()
  })

  it('displays the ActivityFeed panel when the button is clicked', () => {
    render(<ActivityFeedButton />)
    expect(screen.queryByText('Activity Feed')).not.toBeInTheDocument()
    const button = screen.getByRole('button')
    act(() => button.click())
    expect(screen.getByText('Activity Feed')).toBeInTheDocument()
  })

  it('does not display notifications by default', () => {
    render(<ActivityFeedButton />)
    const notifications = screen.queryByTestId('notification')
    expect(notifications).not.toBeInTheDocument()
  })

  it('displays unseen notifications', () => {
    render(<ActivityFeedButton unseenNotifications={true} />)
    const notifications = screen.getByTestId('notification')
    expect(notifications).toBeInTheDocument()
  })
})
