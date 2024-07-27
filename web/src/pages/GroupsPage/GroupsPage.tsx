import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PageHeader from 'src/components/admin/PageHeader/PageHeader'

const GroupsPage = () => {
  return (
    <>
      <Metadata title="Groups" description="Groups page" />

      <PageHeader
        title="Groups"
        backLink={routes.users()}
        breadcrumbs={[
          { name: 'Users', href: routes.users() },
          { name: 'Groups', href: routes.groups() },
        ]}
      />

      <div className="main-padding">
        <h1>GroupsPage</h1>
        <p>
          Find me in <code>./web/src/pages/GroupsPage/GroupsPage.tsx</code>
        </p>
        <p>
          My default route is named <code>groups</code>, link to me with `
          <Link to={routes.groups()}>Groups</Link>`
        </p>
      </div>
    </>
  )
}

export default GroupsPage
