import { Link } from '@redwoodjs/router'

import ActivityFeedButton from '../ActivityFeed/ActivityFeedButton/ActivityFeedButton'
import Breadcrumbs, { BreadcrumbType } from '../Breadcrumbs/Breadcrumbs'
import Icon from '../Icon/Icon'
import Notifications from '../Notifications/Notifications'
import ThemeSelector from '../ThemeSelector/ThemeSelector'

interface Props {
  backLink?: string
  title: string
  breadcrumbs?: BreadcrumbType[]
}

const PageHeader = ({ backLink = '', title, breadcrumbs = [] }: Props) => {
  return (
    <div className="border-b-1 border-montana pr-mainRight pt-4">
      <div className="relative mb-3 flex justify-between pl-mainLeft">
        {backLink && (
          <Link
            to={backLink}
            className="absolute left-5 hover:text-selectiveYellow"
            data-testid="backLink"
          >
            <Icon id="arrowLeft" />
          </Link>
        )}
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <ul className="top-nav">
          <li>
            <ThemeSelector />
          </li>
          <li>
            {/* activity */}
            <ActivityFeedButton />
          </li>
          <li>
            {/* help */}
            <button>
              <Icon id="help" />
            </button>
          </li>
          <li>
            {/* support messages */}
            <button className="relative">
              <Icon id="speech" />
              <div className="absolute -bottom-[2px] -right-[2px]">
                <Notifications notificationType="red" />
              </div>
            </button>
          </li>
          <li>
            <button className="relative">
              <Icon id="bell" />
              <div className="absolute -bottom-[2px] -right-[2px]">
                <Notifications notificationType="red" />
              </div>
            </button>
          </li>
        </ul>
      </div>
      <h1 className="mb-8 pl-mainLeft font-serif text-[42px] font-bold tracking-tight">
        {title}
      </h1>
    </div>
  )
}

export default PageHeader
