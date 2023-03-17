import React from 'react'
import "./WorkFlow.css"
import Task from '../tasks/Task'

const WorkFlow = ({ data }) => {
    return (
        <div className='workflow-container'>
            <div className="workflow-content">
                <h2>
                    {data.title}
                </h2>
                <hr />
                <span></span>
                <div className='workflow-tasks'>
                    {
                        data.tasks.map((task) => {
                            return <Task data={task} />
                        })
                    }
                </div>
                <div className="add-workflow">
                    <div className='add-cont'>
                        <div className="add-plus">
                            <svg xmlns="http://www.w3.org/2000/svg" fill={"#cbcbcb"} viewBox="0 0 24 24" strokeWidth={1.5}
                                height={"28px"} width={"28px"}
                                stroke="#8f8f8f" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>

                        </div>
                        <h4>
                            Add a task
                        </h4>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default WorkFlow