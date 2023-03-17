import React from 'react'
import './Task.css'

const Task = ({ data }) => {
    return (
        <div className='tasks-container'>
            <h2>
                {data.title}
            </h2>
            <h4>
                {
                    data.content
                }
            </h4>
        </div>
    )
}

export default Task