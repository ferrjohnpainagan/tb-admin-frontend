import React, { useEffect, useState } from 'react'
import { IDimension } from "./interface"
import mediaQueries from '../utils/mediaQueries'
import Mobile from "../mobile/routes"

import NetworkComponent from './NetworkConnectivity'

const Main: React.FC<any> = ({ component: Component, signed, ...props }) => {

  const useWindowSize = (): IDimension => {
    const isClient = typeof window === 'object'

    /** @returns {object} {width: client's window width in px, height: client's window height in px} */
    const getSize = (): IDimension => {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      }
    }

    const [windowSize, setWindowSize] = useState<IDimension>(getSize)

    useEffect((): Boolean | any => {
      if (!isClient) {
        return false
      }

      const handleResize = (): void => {
        setWindowSize(getSize())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
  }

  const size = useWindowSize()

  return (
    <div>
      <NetworkComponent>
        {/* Will dynamically display the Desktop or Mobile pages according to the client window dimensions*/}
        {size?.width >= mediaQueries.sm ? "Desktop" : <Mobile />}
      </NetworkComponent>
    </div>
  )
}

export default Main
