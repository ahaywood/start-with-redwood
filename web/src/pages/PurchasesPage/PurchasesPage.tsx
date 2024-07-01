import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PurchasesPage = () => {
  return (
    <>
      <Metadata title="Purchases" description="Purchases page" />

      <h1>PurchasesPage</h1>
      <p>
        Find me in <code>./web/src/pages/PurchasesPage/PurchasesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>purchases</code>, link to me with `
        <Link to={routes.purchases()}>Purchases</Link>`
      </p>
    </>
  )
}

export default PurchasesPage
