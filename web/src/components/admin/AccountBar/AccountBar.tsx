import { useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { useClickOutside } from 'src/hooks/useClickOutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import Avatar from '../Avatar/Avatar'
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import Icon from '../Icon/Icon'

const AccountBar = () => {
  const { currentUser, logOut } = useAuth()
  const [isDropdownShowing, setIsDropdownShowing] = useState(false)
  const ref = useRef(null)

  const handleClose = () => {
    setIsDropdownShowing(false)
  }
  useClickOutside(handleClose, ref)
  useEscapeKey(handleClose)

  return (
    <div className="mr-6 flex items-center justify-between gap-[14px] pt-9">
      <Avatar alt={currentUser.name} />
      <div className="flex-1 text-sm font-bold">{currentUser.name}</div>
      <div className="relative" ref={ref}>
        <AnimatePresence>
          {isDropdownShowing && (
            <motion.div
              className="absolute bottom-7 right-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <DropdownMenu
                options={[
                  {
                    name: 'My Account',
                    icon: 'account',
                    href: routes.myAccount(),
                  },
                  {
                    name: 'Log out',
                    icon: 'logout',
                    handleClick: () => logOut(),
                  },
                ]}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className={`center rounded-full
            ${
              isDropdownShowing
                ? 'bg-selectiveYellow text-black'
                : 'hover:text-selectiveYellow'
            }
            `}
          onClick={() => setIsDropdownShowing((prevValue) => !prevValue)}
        >
          <Icon id="threeDots" />
        </button>
      </div>
    </div>
  )
}

export default AccountBar
