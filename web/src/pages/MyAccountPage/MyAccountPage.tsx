import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MyAccountPage = () => {
  return (
    <>
      <Metadata title="MyAccount" description="MyAccount page" />

      <h1>MyAccountPage</h1>
      <p>
        Find me in <code>./web/src/pages/MyAccountPage/MyAccountPage.tsx</code>
      </p>
      <p>
        My default route is named <code>myAccount</code>, link to me with `
        <Link to={routes.myAccount()}>MyAccount</Link>`
      </p>
    </>
  )
}

export default MyAccountPage
