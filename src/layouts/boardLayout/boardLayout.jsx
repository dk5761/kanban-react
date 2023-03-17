import React from 'react'
import { Outlet } from 'react-router-dom'
import './BoardLayout.css'

const BoardLayout = () => {
    return (
        <div className='blayout-container'>
            <div className="sidebar">sidebar</div>
            <main>
                <Outlet />
            </main>

        </div>
    )
}

export default BoardLayout