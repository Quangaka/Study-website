import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Courses from '../pages/Courses'
import Login from '../pages/Login/Login'
import OnlineLearning from '../pages/OnlineLearning/OnlineLearning'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path='/dashboard' exact component={Dashboard}></Route>
            <Route path='/courses'  component={Courses}></Route>
            <Route path='/onlinelearning' component={OnlineLearning}></Route>
        </Switch>
    )
}

export default Routes
