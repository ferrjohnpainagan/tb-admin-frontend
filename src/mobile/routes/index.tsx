import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Routes'

import AuthContainer from '../features/auth/containers/Main'
import HomeContainer from "../features/home/containers/Main"

const index = () => {
  return (
    <Switch>
      <Route path="/auth" component={AuthContainer} name="Auth" exact={false} isPrivate={false} />
      <Route path="/" component={HomeContainer} name="Auth" exact={false} isPrivate={true} />
    </Switch>
  )
}

export default index
