import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const CustomersPage = () => {
  return (
    <>
      <Metadata title="Customers" description="Customers page" />

      <h1>CustomersPage</h1>
      <p>
        Find me in <code>./web/src/pages/CustomersPage/CustomersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>customers</code>, link to me with `
        <Link to={routes.customers()}>Customers</Link>`
      </p>
    </>
  )
}

export default CustomersPage
