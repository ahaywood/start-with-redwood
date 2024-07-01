import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AssetsPage = () => {
  return (
    <>
      <Metadata title="Assets" description="Assets page" />

      <h1>AssetsPage</h1>
      <p>
        Find me in <code>./web/src/pages/AssetsPage/AssetsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>assets</code>, link to me with `
        <Link to={routes.assets()}>Assets</Link>`
      </p>
    </>
  )
}

export default AssetsPage
