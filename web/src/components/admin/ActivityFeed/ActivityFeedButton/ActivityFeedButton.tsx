import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Icon from '../../Icon/Icon'
import Notifications from '../../Notifications/Notifications'
import ActivityFeed from '../ActivityFeed/ActivityFeed'

interface ActivityFeedButtonProps {
  unseenNotifications?: boolean
}

const ActivityFeedButton = ({
  unseenNotifications = false,
}: ActivityFeedButtonProps) => {
  const [isActivityFeedShowing, setIsActivityFeedShowing] = useState(false)

  const toggleActivityFeed = () => {
    setIsActivityFeedShowing((prevValue) => !prevValue)
  }

  return (
    <>
      <button className="relative" onClick={toggleActivityFeed}>
        <Icon id="activity" />
        {unseenNotifications && (
          <div className="absolute -bottom-[2px] -right-[2px]">
            <Notifications notificationType="red" />
          </div>
        )}
      </button>
      <AnimatePresence>
        {isActivityFeedShowing && (
          <motion.div
            initial={{
              x: '550px',
              position: 'fixed',
              top: 0,
              right: 0,
              zIndex: 1000,
            }}
            animate={{ x: 0 }}
            exit={{ x: '550px' }}
          >
            <ActivityFeed close={() => setIsActivityFeedShowing(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ActivityFeedButton
