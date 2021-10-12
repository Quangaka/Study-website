import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Courses from '../pages/Courses'
import Forum from '../pages/Forum'
import ForumTopics from '../pages/ForumTopics'
import ForumPost from '../pages/ForumPost'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}></Route>
            <Route path='/courses'  component={Courses}></Route>
            <Route path='/forum'  exact component={Forum}></Route>
            <Route path='/forum/:id' exact component={ForumTopics}></Route>
            <Route path='/forum/:id/:name' component={ForumPost}></Route>
        </Switch>
    )
}

export default Routes
