import { render } from '@redwoodjs/testing/web'

import Icon from './Icon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Icon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Icon id="account" />)
    }).not.toThrow()
  })

  it('correctly renders the account icon', () => {
    expect(render(<Icon id="account" />)).toMatchSnapshot()
  })

  it('correctly renders the activity icon', () => {
    expect(render(<Icon id="activity" />)).toMatchSnapshot()
  })

  it('correctly renders the arrowCircleRight icon', () => {
    expect(render(<Icon id="arrowCircleRight" />)).toMatchSnapshot()
  })

  it('correctly renders the arrowLeft icon', () => {
    expect(render(<Icon id="arrowLeft" />)).toMatchSnapshot()
  })

  it('correctly renders the bell icon', () => {
    expect(render(<Icon id="bell" />)).toMatchSnapshot()
  })

  it('correctly renders the chevronDown icon', () => {
    expect(render(<Icon id="chevronDown" />)).toMatchSnapshot()
  })

  it('correctly renders the chevronUp icon', () => {
    expect(render(<Icon id="chevronUp" />)).toMatchSnapshot()
  })

  it('correctly renders the close icon', () => {
    expect(render(<Icon id="close" />)).toMatchSnapshot()
  })

  it('correctly renders the desktop icon', () => {
    expect(render(<Icon id="desktop" />)).toMatchSnapshot()
  })

  it('correctly renders the dollarSign icon', () => {
    expect(render(<Icon id="dollarSign" />)).toMatchSnapshot()
  })

  it('correctly renders the email icon', () => {
    expect(render(<Icon id="email" />)).toMatchSnapshot()
  })

  it('correctly renders the expand icon', () => {
    expect(render(<Icon id="expand" />)).toMatchSnapshot()
  })

  it('correctly renders the eye icon', () => {
    expect(render(<Icon id="eye" />)).toMatchSnapshot()
  })

  it('correctly renders the eyeHidden icon', () => {
    expect(render(<Icon id="eyeHidden" />)).toMatchSnapshot()
  })

  it('correctly renders the gear icon', () => {
    expect(render(<Icon id="gear" />)).toMatchSnapshot()
  })

  it('correctly renders the group icon', () => {
    expect(render(<Icon id="group" />)).toMatchSnapshot()
  })

  it('correctly renders the help icon', () => {
    expect(render(<Icon id="help" />)).toMatchSnapshot()
  })

  it('correctly renders the house icon', () => {
    expect(render(<Icon id="house" />)).toMatchSnapshot()
  })

  it('correctly renders the image icon', () => {
    expect(render(<Icon id="image" />)).toMatchSnapshot()
  })

  it('correctly renders the lock icon', () => {
    expect(render(<Icon id="lock" />)).toMatchSnapshot()
  })

  it('correctly renders the logout icon', () => {
    expect(render(<Icon id="logout" />)).toMatchSnapshot()
  })

  it('correctly renders the money icon', () => {
    expect(render(<Icon id="money" />)).toMatchSnapshot()
  })

  it('correctly renders the moon icon', () => {
    expect(render(<Icon id="moon" />)).toMatchSnapshot()
  })

  it('correctly renders the pencil icon', () => {
    expect(render(<Icon id="pencil" />)).toMatchSnapshot()
  })

  it('correctly renders the search icon', () => {
    expect(render(<Icon id="search" />)).toMatchSnapshot()
  })

  it('correctly renders the send icon', () => {
    expect(render(<Icon id="send" />)).toMatchSnapshot()
  })

  it('correctly renders the settings icon', () => {
    expect(render(<Icon id="settings" />)).toMatchSnapshot()
  })

  it('correctly renders the shield icon', () => {
    expect(render(<Icon id="shield" />)).toMatchSnapshot()
  })

  it('correctly renders the speech icon', () => {
    expect(render(<Icon id="speech" />)).toMatchSnapshot()
  })

  it('correctly renders the sun icon', () => {
    expect(render(<Icon id="sun" />)).toMatchSnapshot()
  })

  it('correctly renders the threeDots icon', () => {
    expect(render(<Icon id="threeDots" />)).toMatchSnapshot()
  })

  it('correctly renders the trash icon', () => {
    expect(render(<Icon id="trash" />)).toMatchSnapshot()
  })

  it('correctly renders the user icon', () => {
    expect(render(<Icon id="user" />)).toMatchSnapshot()
  })

  it('correctly renders the xCircle icon', () => {
    expect(render(<Icon id="xCircle" />)).toMatchSnapshot()
  })
})
