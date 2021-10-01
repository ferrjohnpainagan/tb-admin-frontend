import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import Route from './Routes'

import AuthContainer from '../features/auth/containers/Main'
import HomeContainer from "../features/home/containers/Main"

const index = () => {
  return (
    <Switch>
      <Route path="/admin/auth" component={AuthContainer} name="Auth" exact={false} isPrivate={false} />
      <Route path="/admin/home" component={HomeContainer} name="Home" exact={false} isPrivate={true} />
      <Redirect to="/admin/home" exact={true} />
    </Switch>
  )
}

export default index
