import React from 'react'

import statusCards from '../assets/JsonData/status-card-data.json'

import StatusCard from '../Components/status-card/StatusCard'

import jobboard from '../assets/JsonData/jobboard.json'

import Jobboard from '../Components/jobboard/Jobboard'

import Completion from '../Components/completion/Completion'

import completion from '../assets/JsonData/Completion.json'

import { CalendarComponent } from '@syncfusion/ej2-react-calendars'

import { Doughnut } from "react-chartjs-2";



const Dashboard = () => {
    return (
        <div>
            <h2 className='page-header'>
                My courses
            </h2>
            <div className='separate'>
                <div className='col-9'>
                    <div className="col-12">
                        <div className='row'>
                            {
                                statusCards.map((item,index) =>(
                                    <div className="col-4">
                                        <StatusCard
                                            object={item.object}
                                            code={item.code}
                                            lecturer={item.lecturer}
                                        
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='separate'>
                        <div className='col-6'>
                            <div className='row'>
                                {
                                    jobboard.map((item,index) =>(
                                        <div className="col-6">
                                            <Jobboard
                                                job={item.job}
                                                count={item.count}
                                            />
                                        </div>
                                    ))
                                }
                            </div>
                        <div>
                            <div>
                                <div className='card'>
                                <h4>Time Spent for Learning</h4>
                            <Doughnut
                                data={{
                                labels: [
                                    "Homework",
                                    "Video learning",
                                    "Discuss",
                                    "Test"
                                ],
                                datasets: [
                                    {
                                    label: "Population (millions)",
                                    backgroundColor: [
                                        "#76BED0",
                                        "#F7CB15",
                                        "#8C62AA",
                                        "#8AD076",
                                    ],
                                    data: [50, 12.5, 12.5, 25]
                                    }
                                ]
                                }}
                                option={{
                                title: {
                                    display: true,
                                    text: "",
                                }
                                }}
                            />
                                </div>
                            </div>
                          
                        </div>
                    </div>
                        <div className='col-6'>
                            <div className='card full-height'>
                                 <h4>Percent of Courses Completion</h4>
                                 <div className='row'>
                                    {
                                        completion.map((item,index) =>(
                                            <div className="col-12">
                                                <Completion
                                                    nameObject={item.nameObject}
                                                    process={item.process}
                                                />
                                            </div>
                                        ))
                                    }
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col=3'>
                     <div className="col-12">
                            <CalendarComponent/>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
