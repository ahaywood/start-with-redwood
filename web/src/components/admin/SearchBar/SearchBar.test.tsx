import { render, screen, fireEvent } from '@redwoodjs/testing/web'

import SearchBar from './SearchBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SearchBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SearchBar
          placeholder="Search for a Specific User"
          onChange={() => {}}
        />
      )
    }).not.toThrow()
  })

  it('displays the placeholder text correctly', () => {
    render(
      <SearchBar placeholder="Search for a Specific User" onChange={() => {}} />
    )
    expect(
      screen.getByPlaceholderText('Search for a Specific User')
    ).toBeInTheDocument()
  })

  it('runs handles the change event', () => {
    const onChange = jest.fn()
    render(
      <SearchBar placeholder="Search for a Specific User" onChange={onChange} />
    )
    const input = screen.getByPlaceholderText('Search for a Specific User')
    expect(input).toBeInTheDocument()
    expect(onChange).not.toHaveBeenCalled()
    fireEvent.change(input, { target: { value: 'John Doe' } })
    expect(onChange).toHaveBeenCalled()
  })
})
