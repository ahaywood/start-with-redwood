import { render, screen } from '@redwoodjs/testing/web'

import PageHeader from './PageHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PageHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageHeader title="Home" />)
    }).not.toThrow()
  })

  it('renders the correct title', () => {
    render(<PageHeader title="Home" />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders the back link', () => {
    render(<PageHeader title="Home" backLink="/" />)
    const backLink = screen.getByTestId('backLink')
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/')
  })

  it('renders breadcrumbs', () => {
    render(<PageHeader title="Home" breadcrumbs={[]} />)
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument()
  })
})
