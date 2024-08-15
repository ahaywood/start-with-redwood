import { Fragment } from 'react'

import { Link } from '@redwoodjs/router'

export type BreadcrumbType = {
  href: string
  name: string
}

interface Props {
  breadcrumbs: BreadcrumbType[]
}

const Breadcrumbs = ({ breadcrumbs }: Props) => {
  if (breadcrumbs.length === 0) return <div data-testid="breadcrumbs" />
  return (
    <div
      className="flex items-center text-sm font-bold text-submarine"
      data-testid="breadcrumbs"
    >
      <div className="pr-3">/</div>
      {breadcrumbs.map((breadcrumb, index) => (
        <Fragment key={index}>
          <div className="pr-3">
            <Link to={breadcrumb.href} className="hover:text-selectiveYellow">
              {breadcrumb.name}
            </Link>
          </div>
          <div className="pr-3">/</div>
        </Fragment>
      ))}
    </div>
  )
}

export default Breadcrumbs
