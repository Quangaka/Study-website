import React from 'react'

import './completion.css'
import ProgressBar from "@ramonak/react-progress-bar";

const Completion = props => {
    return (
        <div className='Completion-card' >
            <div className="Completion__info">
                <h4>{props.nameObject}</h4>              
                <ProgressBar  completed={props.process}  height='10px' labelAlignment='outside' labelColor='#9066C5' bgColor='#9066C5' baseBgColor='#C4C4C4'  />
            </div>
        </div>
    )
}

export default Completion
