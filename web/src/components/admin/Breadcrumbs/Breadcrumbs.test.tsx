import { render, screen } from '@redwoodjs/testing/web'

import Breadcrumbs from './Breadcrumbs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Breadcrumbs', () => {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Admin', href: '/admin' },
    { name: 'Users', href: '/admin/users' },
  ]

  it('renders successfully', () => {
    expect(() => {
      render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    }).not.toThrow()
  })

  it('renders the breadcrumbs correctly', () => {
    render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Admin')).toBeInTheDocument()
    expect(screen.getByText('Users')).toBeInTheDocument()
  })

  it('links to the correct breadcrumbs', () => {
    render(<Breadcrumbs breadcrumbs={breadcrumbs} />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '/')
    expect(screen.getByText('Admin')).toHaveAttribute('href', '/admin')
    expect(screen.getByText('Users')).toHaveAttribute('href', '/admin/users')
  })

  it('renders nothing if there are no breadcrumbs', () => {
    render(<Breadcrumbs breadcrumbs={[]} />)
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument()
    expect(screen.queryByText('/')).not.toBeInTheDocument()
  })
})
