// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import PageHeader from './PageHeader'

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PageHeader>

export const Primary: Story = {
  args: {
    title: 'Home',
  },
}

export const WithBacklink: Story = {
  args: {
    title: 'Home',
    backLink: '/',
  },
}

export const WithBreadcrumbs: Story = {
  args: {
    title: 'Home',
    breadcrumbs: [
      { name: 'Home', href: '/' },
      { name: 'Admin', href: '/admin' },
      { name: 'Users', href: '/admin/users' },
    ],
  },
}
