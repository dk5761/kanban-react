import React from 'react'
import './BoardChiklet.css'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

const BoardChiklet = ({
    data
}) => {

    const navigate = useNavigate()

    return (
        <div className="board-container">
            <div className='boardchiklet'
                style={{
                    backgroundImage: `url(${data.background})`
                }}

                onClick={() => navigate(`boards/${data.id}`)}
            >
                <div className='title' >
                    {
                        data.title
                    }
                </div>

            </div>
        </div>
    )
}

export default BoardChiklet