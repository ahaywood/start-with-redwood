import { act } from 'react-dom/test-utils'

import { screen, render, waitFor } from '@redwoodjs/testing/web'
import { mockCurrentUser } from '@redwoodjs/testing/web'

import AccountBar from './AccountBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AccountBar', () => {
  beforeEach(() => {
    mockCurrentUser({
      id: '123',
      name: 'Amy Dutton',
      email: 'testemail@hello.com',
    })
  })

  it('renders successfully', () => {
    expect(() => {
      render(<AccountBar />)
    }).not.toThrow()
  })

  it("displays the user's name", () => {
    render(<AccountBar />)
    expect(screen.getByText('Amy Dutton')).toBeInTheDocument()
  })

  it('displays the dropdown menu', async () => {
    render(<AccountBar />)
    const button = screen.getByRole('button')

    expect(screen.queryByText('My Account')).not.toBeInTheDocument()
    expect(screen.queryByText('Log out')).not.toBeInTheDocument()

    // click on the button
    act(() => {
      button.click()
    })
    // check if the dropdown menu is displayed
    await waitFor(() => {
      expect(screen.getByText('My Account')).toBeInTheDocument()
      expect(screen.getByText('Log out')).toBeInTheDocument()
    })
  })
})
