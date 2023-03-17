import React from 'react'
import './Home.css'
import BoardChiklet from '../../components/boardChiklet/BoardChiklet'

const Home = () => {


    const boards = [
        {
            "id": "1",
            "title": "Board 1",
            "background": "https://i.pinimg.com/564x/6b/0e/a8/6b0ea8b1fba941645b2b16f70f7bc404.jpg"
        },
        {
            "id": "2",
            "title": "Board 2",
            "background": "https://i.pinimg.com/564x/35/f3/45/35f3452eb13e9834fe6f98971e87d4d6.jpg"
        },
        {
            "id": "3",
            "title": "Board 3",
            "background": "https://i.pinimg.com/564x/25/ee/0f/25ee0fdeeb53add89dc1895966726862.jpg"
        }

    ]




    return (
        <div className="home">
            <div className="container">
                <h2>
                    Your Boards
                </h2>
                <div className='boards-list'>
                    {
                        boards.map((board) => <BoardChiklet data={board} key={board.id} />)
                    }
                    {
                        boards.length < 8 ?
                            <div className='board-container'>
                                <div className='boardchiklet'
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderColor: "#cbcbcb"
                                    }}
                                >
                                    Create new Board

                                </div>
                            </div> :
                            null
                    }
                </div>
            </div>
        </div>
    )
}

export default Home