import React from 'react'

import type { IconName } from 'public/icons/name.d.ts'

import Icon from '../Icon/Icon'

interface Props {
  options: {
    handleClick?: () => void
    href?: string
    name: string
    icon?: IconName
  }[]
}

const DropdownMenu = ({ options }: Props) => {
  return (
    <div className="rounded-md border-1 border-java bg-black px-[18px] py-4">
      <ul className="">
        {options.map((option, index) => (
          <li className="mb-3 last-of-type:mb-0" key={index}>
            <MenuOption href={option.href} handleClick={option.handleClick}>
              {option.icon && (
                <span className="text-submarine">
                  <Icon id={option.icon} />
                </span>
              )}
              {option.name}
            </MenuOption>
          </li>
        ))}
      </ul>
    </div>
  )
}

const MenuOption = ({
  children,
  href = '',
  handleClick = () => {},
}: {
  children: React.ReactNode
  href?: string
  handleClick?: () => void
}) => {
  // if href exists then return a link
  if (href !== '') {
    return (
      <a
        href={href}
        className="flex items-center justify-start gap-3 whitespace-nowrap text-sm hover:text-selectiveYellow"
      >
        {children}
      </a>
    )
  }
  // else return a button
  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-start gap-3 whitespace-nowrap text-sm hover:text-selectiveYellow"
    >
      {children}
    </button>
  )
}

export default DropdownMenu
