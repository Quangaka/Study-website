import React from 'react'

import './jobboard.css'

const Jobboard = props => {
    return (
        <div className='jobboard-card'>
            <div className="jobboard-card__info">
                <h4>{props.job}</h4>
                <span>{props.count}</span>
            </div>
        </div>
    )
}

export default Jobboard
