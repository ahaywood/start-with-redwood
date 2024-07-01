import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PermissionsPage = () => {
  return (
    <>
      <Metadata title="Permissions" description="Permissions page" />

      <h1>PermissionsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PermissionsPage/PermissionsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>permissions</code>, link to me with `
        <Link to={routes.permissions()}>Permissions</Link>`
      </p>
    </>
  )
}

export default PermissionsPage
