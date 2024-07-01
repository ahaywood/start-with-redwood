import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SupportPage = () => {
  return (
    <>
      <Metadata title="Support" description="Support page" />

      <h1>SupportPage</h1>
      <p>
        Find me in <code>./web/src/pages/SupportPage/SupportPage.tsx</code>
      </p>
      <p>
        My default route is named <code>support</code>, link to me with `
        <Link to={routes.support()}>Support</Link>`
      </p>
    </>
  )
}

export default SupportPage
