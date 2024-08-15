import { routes } from '@redwoodjs/router'
import { render, screen } from '@redwoodjs/testing/web'

import AdminNav from './AdminNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminNav', () => {
  beforeEach(() => {
    mockCurrentUser({
      id: '123',
      name: 'Amy Dutton',
      email: 'testemail@hello.com',
    })
  })

  it('renders successfully', () => {
    expect(() => {
      render(<AdminNav />)
    }).not.toThrow()
  })

  it('navigates to the dashboard page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Dashboard')).toHaveAttribute(
      'href',
      routes.dashboard()
    )
  })

  it('navigates to the users page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Users')).toHaveAttribute('href', routes.users())
  })

  it('navigates to the groups page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Groups')).toHaveAttribute('href', routes.groups())
  })

  it('navigates to the permissions page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Permissions')).toHaveAttribute(
      'href',
      routes.permissions()
    )
  })

  it('navigates to the purchases page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Purchases')).toHaveAttribute(
      'href',
      routes.purchases()
    )
  })

  it('navigates to the products page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Products')).toHaveAttribute(
      'href',
      routes.products()
    )
  })

  it('navigates to the subscriptions page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Subscriptions')).toHaveAttribute(
      'href',
      routes.subscriptions()
    )
  })

  it('navigates to the customers page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Customers')).toHaveAttribute(
      'href',
      routes.customers()
    )
  })

  it('navigates to the assets page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Assets')).toHaveAttribute('href', routes.assets())
  })

  it('navigates to the collections page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Collections')).toHaveAttribute(
      'href',
      routes.dashboard()
    )
  })

  it('navigates to the articles page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Articles')).toHaveAttribute(
      'href',
      routes.dashboard()
    )
  })

  it('navigates to the events page', () => {
    render(<AdminNav />)
    expect(screen.getByText('Events')).toHaveAttribute(
      'href',
      routes.dashboard()
    )
  })
})
