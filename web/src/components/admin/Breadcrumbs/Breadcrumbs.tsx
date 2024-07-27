import { Fragment } from 'react'

import { Link } from '@redwoodjs/router'

export type BreadcrumbType = {
  name: string
  href: string
}

interface Props {
  breadcrumbs: BreadcrumbType[]
}

const Breadcrumbs = ({ breadcrumbs }: Props) => {
  if (breadcrumbs.length === 0) return <div />
  return (
    <div className="flex items-center text-sm font-bold text-submarine">
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
