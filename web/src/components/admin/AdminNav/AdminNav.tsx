import React from 'react'

import Icon from '@startRW/Icon/Icon'

import { Link } from '@redwoodjs/router'

const AdminNav = () => {
  return (
    <div>
      <Link to="home">
        <img src="/images/logomark.svg" alt="RedwoodJS" />
      </Link>

      <nav>
        <h3>
          <Icon id="house" />
          Dashboard
        </h3>

        <h3>Users</h3>
        <ul>
          <li>Groups</li>
          <li>Permissions</li>
        </ul>

        <h3>Purchases</h3>
        <ul>
          <li>Products</li>
          <li>Subscriptions</li>
          <li>Customers</li>
        </ul>

        <h3>Assets</h3>

        <h3>Collections</h3>
        <ul>
          <li>Articles</li>
          <li>Events</li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminNav
