import { render, screen } from '@redwoodjs/testing/web'

import Avatar from './Avatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Avatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Avatar alt="John Doe" />)
    }).not.toThrow()
  })

  it('renders initials when no src is provided', () => {
    render(<Avatar alt="John Doe" />)
    expect(screen.getByText('J')).toBeInTheDocument()
  })

  it('renders an image when src is provided', () => {
    const src = 'https://picsum.photos/seed/1723748791716/300/300'
    render(<Avatar alt="John Doe" src={src} />)

    // get the image
    const image = screen.getByAltText('John Doe')

    // should exist in the document
    expect(image).toBeInTheDocument()

    // must have the correct src set
    expect(image).toHaveAttribute('src', src)
  })

  it('renders at 32px by default', () => {
    render(<Avatar alt="John Doe" />)
    expect(screen.getByText('J')).toHaveStyle({ height: '32px', width: '32px' })
  })

  it('renders the correct size', () => {
    render(<Avatar alt="John Doe" size={100} />)
    expect(screen.getByText('J')).toHaveStyle({
      height: '100px',
      width: '100px',
    })
  })
})
