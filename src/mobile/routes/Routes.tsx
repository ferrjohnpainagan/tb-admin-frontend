import { sign } from 'crypto'
import React, { useState, useEffect } from 'react'
import { Route, RouteComponentProps, Redirect } from 'react-router-dom'
import { IPage, IRoute } from "../../interfaces"


const Routes: React.FC<IRoute> = ({
  component: Component,
  path,
  isPrivate
}) => {

  const [signed, setSigned] = useState(false)

  useEffect(() => {
    setSigned(false)
  }, [])

  if (isPrivate && !signed) {
    return <Redirect to="/auth#login" />
  }

  if (signed) {
    if (path === '/auth' || path === '/') {
      return <Redirect to="/" />
    }
  }

  return (
    <>
      <Route render={(props: RouteComponentProps<any>) => (
        <Component {...props} />
      )} />
    </>
  )
}

export default Routes
