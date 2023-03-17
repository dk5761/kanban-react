import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {

    const auth = true;

    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout