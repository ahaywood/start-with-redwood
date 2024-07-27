import { Form } from '@redwoodjs/forms'
import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import ActionBar from 'src/components/admin/ActionBar/ActionBar'
import Icon from 'src/components/admin/Icon/Icon'
import PageHeader from 'src/components/admin/PageHeader/PageHeader'
import SearchBar from 'src/components/admin/SearchBar/SearchBar'

const UsersPage = () => {
  return (
    <>
      <Metadata title="Users" description="Users page" />

      <PageHeader
        title="Manage Users"
        backLink={routes.dashboard()}
        breadcrumbs={[{ name: 'Users', href: routes.users() }]}
      />

      <div className="main-padding">
        <div className="mb-8 flex items-center justify-between">
          {/* search bar */}
          <Form className="flex-1">
            <SearchBar placeholder="Search for a Specific User" />
          </Form>

          {/* add a new user button */}
          <button className="button solid primary shorter">+ User</button>
        </div>

        {/* users table */}
      </div>

      {/* action buttons */}
      <ActionBar>
        <>
          <button className="button text no-padding">Cancel</button>
          <button className="button solid destructive short">
            <Icon id="trash" />
            Delete
          </button>
        </>
      </ActionBar>
    </>
  )
}

export default UsersPage
