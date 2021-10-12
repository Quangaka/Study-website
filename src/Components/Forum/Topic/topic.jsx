import React from 'react'

import './topic.css'

import { Link } from 'react-router-dom'

const Topic = props => {
    return (
        <div className='topic-card'>
            <div className="topic-card_info">
                <h4 key={props.name}>
                    <Link to={`/forum/${props.name}`}>
                        {props.name} 
                    </Link>
                </h4>
                <h5>Chủ đề: {props.title} Bài viết: {props.post}</h5>
                <h6 noWrap>{props.content}</h6>
            </div>
        </div>
    )
}

export default Topic
