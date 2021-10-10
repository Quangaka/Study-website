import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Courses from '../pages/Courses'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/courses'  component={Courses}></Route>
        </Switch>
    )
}

export default Routes
