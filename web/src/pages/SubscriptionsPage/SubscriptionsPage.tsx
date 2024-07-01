import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SubscriptionsPage = () => {
  return (
    <>
      <Metadata title="Subscriptions" description="Subscriptions page" />

      <h1>SubscriptionsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/SubscriptionsPage/SubscriptionsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>subscriptions</code>, link to me with `
        <Link to={routes.subscriptions()}>Subscriptions</Link>`
      </p>
    </>
  )
}

export default SubscriptionsPage
