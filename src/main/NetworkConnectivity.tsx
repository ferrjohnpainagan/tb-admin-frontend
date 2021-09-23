import React from 'react'
import { IComponentProps } from "./interface"

const NetworkConnectivity: React.FC<IComponentProps> = (props) => {
  return (
    <div>
      {/* Will render a default component when user has no connection upon accessing the app */}
      {navigator.onLine ? (props.children) : (<div>
        No Connection
      </div>)}
    </div>
  )
}

export default NetworkConnectivity
