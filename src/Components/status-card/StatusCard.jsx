import React from 'react'

import './statuscard.css'

const StatusCard = props => {
    return (
        <div className='status-card'>
            <div className="status-card__info">
                <h4>{props.object}</h4>
                <h5>{props.code}</h5>
                <h6>{props.lecturer}</h6>

            </div>
        </div>
    )
}

export default StatusCard
