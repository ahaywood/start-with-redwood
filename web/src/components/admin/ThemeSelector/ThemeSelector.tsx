import { useRef, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { useClickOutside } from 'src/hooks/useClickOutside'
import { useEscapeKey } from 'src/hooks/useEscapeKey'

import DropdownMenu from '../DropdownMenu/DropdownMenu'
import Icon from '../Icon/Icon'

const ThemeSelector = () => {
  const [isDropdownShowing, setIsDropdownShowing] = useState(false)
  const themeSelectorRef = useRef(null)

  useClickOutside(() => {
    setIsDropdownShowing(false)
  }, themeSelectorRef)

  useEscapeKey(() => {
    setIsDropdownShowing(false)
  })

  const toggleDropdown = () => {
    setIsDropdownShowing((prevState) => !prevState)
  }

  return (
    <div className="relative inline-block" ref={themeSelectorRef}>
      <button onClick={toggleDropdown}>
        <Icon id="moon" />
      </button>
      <AnimatePresence>
        {isDropdownShowing && (
          <motion.div
            className="absolute right-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <DropdownMenu
              options={[
                {
                  name: 'System',
                  icon: 'desktop',
                  handleClick: () => console.log('Desktop'),
                },
                {
                  name: 'Dark',
                  icon: 'moon',
                  handleClick: () => console.log('Dark Mode'),
                },
                {
                  name: 'Light',
                  icon: 'sun',
                  handleClick: () => console.log('Light Mode'),
                },
              ]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ThemeSelector
