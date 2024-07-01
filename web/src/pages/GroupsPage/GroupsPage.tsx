import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const GroupsPage = () => {
  return (
    <>
      <Metadata title="Groups" description="Groups page" />

      <h1>GroupsPage</h1>
      <p>
        Find me in <code>./web/src/pages/GroupsPage/GroupsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>groups</code>, link to me with `
        <Link to={routes.groups()}>Groups</Link>`
      </p>
    </>
  )
}

export default GroupsPage
