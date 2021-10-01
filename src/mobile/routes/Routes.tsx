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

  /** Redirect user to login page
   * if user opens a private page while not signed in
   */
  if (isPrivate && !signed) {
    return <Redirect to="/admin/auth#login" />
  }

  if (signed) {
    if (path === '/admin/auth' || path === '/') {
      return <Redirect to="/admin/home" />
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
