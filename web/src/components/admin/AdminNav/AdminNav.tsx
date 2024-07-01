import React from 'react'

import Icon from '@startRW/Icon/Icon'

import { Link, NavLink, routes } from '@redwoodjs/router'

import AccountBar from '../AccountBar/AccountBar'

const AdminNav = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      {/* TOP */}
      <div>
        <div className="relative -left-3 mb-[70px] mt-[45px]">
          <Link to="home">
            <img src="/images/logomark.svg" alt="RedwoodJS" />
          </Link>
        </div>

        <nav>
          <h3>
            <NavLink to={routes.dashboard()} activeClassName="active">
              <Icon id="house" />
              Dashboard
            </NavLink>
          </h3>

          <h3>
            <NavLink to={routes.users()} activeClassName="active">
              <Icon id="user" />
              Users
            </NavLink>
          </h3>
          <ul>
            <li>
              <NavLink to={routes.groups()} activeClassName="active">
                Groups
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.permissions()} activeClassName="active">
                Permissions
              </NavLink>
            </li>
          </ul>

          <h3>
            <NavLink to={routes.purchases()} activeClassName="active">
              <Icon id="money" />
              Purchases
            </NavLink>
          </h3>
          <ul>
            <li>
              <NavLink to={routes.products()} activeClassName="active">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.subscriptions()} activeClassName="active">
                Subscriptions
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.customers()} activeClassName="active">
                Customers
              </NavLink>
            </li>
          </ul>

          <h3>
            <NavLink to={routes.assets()} activeClassName="active">
              <Icon id="image" />
              Assets
            </NavLink>
          </h3>

          <h3>
            <NavLink to={routes.dashboard()} activeClassName="active">
              <Icon id="group" />
              Collections
            </NavLink>
          </h3>
          <ul>
            <li>
              <NavLink to={routes.dashboard()} activeClassName="active">
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink to={routes.dashboard()} activeClassName="active">
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* BOTTOM */}
      <div className="mb-7">
        <nav>
          <h3>
            <NavLink to={routes.superAdmin()} activeClassName="active">
              <Icon id="shield" />
              Super Admin
            </NavLink>
          </h3>
          <h3>
            <NavLink to={routes.support()} activeClassName="active">
              <Icon id="gear" />
              Support
            </NavLink>
          </h3>
        </nav>
        <AccountBar />
      </div>
    </div>
  )
}

export default AdminNav
