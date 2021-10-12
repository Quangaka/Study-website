import React from 'react'

import './Layout.css'

import Topnav from '../Topnav/TopNav'
import Sidebar from '../Sidebar/Sidebar'
import Routes from '../Routes'
import Login from '../../pages/Login/Login'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const layout = () => {
    return (
        <Router>
            <Switch>
            <Route render={(props) => (
                <div className='layout'>
                    <Sidebar {...props}/>     
                    <div className="layout__content">
                        <Topnav/>
                        <div className="layout__content-main">
                           <Routes/>
                        </div>
                    </div>
                </div>
            )}>

            </Route>
            <Route path="">
                <Login/>
            </Route>
            </Switch>
        </Router>
    )
}

export default layout
