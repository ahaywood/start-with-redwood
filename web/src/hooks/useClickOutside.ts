/**
 * Example Usage:
 *
 * import React, { useRef } from 'react';
 * import { useClickOutside } from 'src/hooks/useClickOutside';
 *
 * const myComponent = () => {
 *   const ref = useRef(null);
 *   const handleClose = () => { console.log('close'); };
 *   useClickOutside(handleClose, ref);
 *
 *   return (
 *     <div ref={ref}>
 *       <p>Click outside of me to close</p>
 *     </div>
 *   );
 * }
 */

import { RefObject, useCallback, useEffect } from 'react'

const MOUSE_UP = 'mouseup'

export function useClickOutside(
  handleClose: () => void,
  ref: RefObject<HTMLElement>
) {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (
        ref?.current?.contains &&
        !ref.current.contains(event.target as Node)
      ) {
        handleClose()
      }
    },
    [handleClose, ref]
  )

  useEffect(() => {
    document.addEventListener(MOUSE_UP, handleClick)

    return () => {
      document.removeEventListener(MOUSE_UP, handleClick)
    }
  }, [handleClick])
}
