import React from 'react'

import './Layout.css'

import Topnav from '../Topnav/TopNav'
import Sidebar from '../Sidebar/Sidebar'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'

const layout = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    )
}

export default layout
