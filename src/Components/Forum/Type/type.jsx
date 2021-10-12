import { Button } from '@material-ui/core'
import React from 'react'
import { ExpandMore,ExpandLess } from '@material-ui/icons'
import useCollapse from 'react-collapsed'

import './type.css'
import Topic from '../Topic/topic'
import topic from '../../../assets/JsonData/topics_forum.json'

const Type = props => {
    const [isExpanded, setExpanded] = React.useState(false);

    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    return (
        <div className='type-card'>
            <div className="type-card_info">
                <h4>{props.name}</h4>   
                <Button {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                        })}>
                            {isExpanded ? <ExpandMore/> : <ExpandLess/>}
                </Button>
                <div className='separate' {...getCollapseProps()}>
                    <div className='col-12'>
                        <div className='row'>
                        {
                            topic.map((item, index) => (
                                <div className='col-6'>
                                    <Topic name = {item.name}
                                        title = {item.title}
                                        post = {item.post}
                                        content = {item.content}/>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Type
