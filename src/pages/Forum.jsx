import React from 'react'

import type from '../assets/JsonData/types_forum.json'

import Type from '../Components/Forum/Type/type'

const Forum = () => {
    return (
        <div>
            <div className='separate'>
                <div className='col-12'>
                        <div className='row'>
                            {
                                type.map((item,index) =>(
                                    <div className="col-12">
                                        <Type
                                            name={item.name}
                                        
                                        />
                                    </div>
                                ))
                            }
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Forum
