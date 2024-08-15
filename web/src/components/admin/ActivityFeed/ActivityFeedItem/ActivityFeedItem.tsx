import type { IconName } from 'public/icons/name.d.ts'

import Icon from '../../Icon/Icon'

interface ActivityFeedItemProps {
  children: React.ReactNode
  icon: IconName
}

const ActivityFeedItem = ({ children, icon }: ActivityFeedItemProps) => {
  return (
    <li className="flex items-start gap-4">
      <div>
        <Icon id={icon} />
      </div>
      <div>{children}</div>
    </li>
  )
}

export default ActivityFeedItem
