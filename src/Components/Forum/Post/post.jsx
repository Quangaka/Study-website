import React from 'react'

import './post.css'

import { Link } from 'react-router-dom'
import { Avatar, Grid, Box } from '@material-ui/core'
import img from '../../../assets/images/tuat.png'

const Post = props => {
    return (
        <div className='container'>
        <div className='post-card'>
            <div className="post-card_info">
                
                    <div className='row'>
                        <div className='col'>
                            <Avatar src={img}/>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h4>
                                        <Link to={`/forum/${props.name_topic}/${props.name}`}>
                                            {props.name} 
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h4>{props.seen}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'>
                            <div className='row'>
                                <div className='col-12'>
                                    <h4>{props.reply}</h4>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                                <h5>{props.user}</h5>
                                <h5>{props.date}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
