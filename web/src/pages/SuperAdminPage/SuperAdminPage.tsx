import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SuperAdminPage = () => {
  return (
    <>
      <Metadata title="SuperAdmin" description="SuperAdmin page" />

      <h1>SuperAdminPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/SuperAdminPage/SuperAdminPage.tsx</code>
      </p>
      <p>
        My default route is named <code>superAdmin</code>, link to me with `
        <Link to={routes.superAdmin()}>SuperAdmin</Link>`
      </p>
    </>
  )
}

export default SuperAdminPage
