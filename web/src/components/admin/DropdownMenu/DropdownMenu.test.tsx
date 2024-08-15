import { render, screen, waitFor } from '@redwoodjs/testing/web'

import DropdownMenu from './DropdownMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DropdownMenu', () => {
  const options = [
    { name: 'Option 1', icon: 'account' },
    { name: 'Option 2', icon: 'house' },
    { name: 'Option 3', icon: 'arrowLeft' },
  ]

  it('renders successfully', () => {
    expect(() => {
      render(<DropdownMenu options={options} />)
    }).not.toThrow()
  })

  it('renders the options correctly', () => {
    render(<DropdownMenu options={options} />)
    expect(screen.getByText('Option 1')).toBeInTheDocument()
    expect(screen.getByText('Option 2')).toBeInTheDocument()
    expect(screen.getByText('Option 3')).toBeInTheDocument()
  })

  it('renders the correct icon', () => {
    render(<DropdownMenu options={options} />)
    expect(
      screen.getByText('Option 1').querySelector('svg')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Option 2').querySelector('svg')
    ).toBeInTheDocument()
    expect(
      screen.getByText('Option 3').querySelector('svg')
    ).toBeInTheDocument()
  })

  it('renders the option as a button', () => {
    const optionFunction = jest.fn()
    render(
      <DropdownMenu
        options={[{ name: 'Option 1', handleClick: optionFunction }]}
      />
    )
    expect(optionFunction).not.toHaveBeenCalled()
    const button = screen.getByText('Option 1')
    button.click()
    expect(optionFunction).toHaveBeenCalled()
  })

  it('renders the option as a link', () => {
    render(
      <DropdownMenu options={[{ name: 'Option 1', href: '/something' }]} />
    )
    expect(screen.getByText('Option 1').closest('a')).toHaveAttribute(
      'href',
      '/something'
    )
  })
})
