import { render, screen } from '@redwoodjs/testing/web'

import Notifications from './Notifications'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Notifications', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Notifications notificationType="red" />)
    }).not.toThrow()
  })

  it('displays a red notification', () => {
    render(<Notifications notificationType="red" />)
    expect(screen.getByTestId('notification')).toHaveClass('bg-darkPastelRed')
  })

  it('displays a yellow notification', () => {
    render(<Notifications notificationType="yellow" />)
    expect(screen.getByTestId('notification')).toHaveClass('bg-selectiveYellow')
  })

  it('displays a green notification', () => {
    render(<Notifications notificationType="green" />)
    expect(screen.getByTestId('notification')).toHaveClass('bg-java')
  })
})
