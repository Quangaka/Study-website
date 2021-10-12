import React from 'react'
import { useParams } from 'react-router'
import Post from '../Components/Forum/Post/post'
import post from '../assets/JsonData/posts_forum.json'
import { LineElement } from 'chart.js'
import { Avatar, Divider } from '@material-ui/core'
import '../assets/css/index.css'
import { useState } from 'react'

const ForumTopics = () => {
    const { id }: {id: String} = useParams();

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <h1>{id}</h1>
            <input className="search_forum_custom" type='text' placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            <Divider variant="middle" spacing={2}/>
            <div className='card_custom'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h4 style={{marginLeft: 180}}>Tiêu đề</h4>
                    </div>
                    <div className='col-2'>
                            <h4 style={{marginLeft: 45}}>Trả lời</h4>
                    </div>
                    <div className='col'>
                        <h4 style={{marginLeft: 30}}>Lượt xem</h4>
                    </div>
                    <div className='col'>
                        <h4 style={{marginLeft: 65}}>Bài viết cuối</h4>
                    </div>
                </div>
            </div>
            </div>
            <div className='separate'>
                <div className='col-12'>
                        <div className='row'>
                            {
                                post.filter((item) => {
                                    if (searchTerm == "")
                                    {
                                        return item
                                    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                                    {
                                        return item
                                    }
                                }).map((item,index) =>(
                                    <div className="col-12">
                                        <Post
                                            name={item.name}
                                            reply={item.reply}
                                            seen={item.seen}
                                            date={item.date}
                                            user={item.user}
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

export default ForumTopics
