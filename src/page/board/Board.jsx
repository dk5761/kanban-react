import React from 'react'
import "./Board.css"
import WorkFlow from '../../components/workflow/WorkFlow'

const Board = () => {

    const board = {
        "workflows": [
            {
                "title": "1st WorkFlow",
                "date": "21st of jan",
                "tasks": [
                    {
                        "title": "Title",
                        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vitae sint laborum repellat fugit alias autem provident mollitia expedita, distinctio dignissimos error placeat illo saepe tenetur iste incidunt, minima repellendus?",
                    },
                    {
                        "title": "Title",
                        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vitae sint laborum repellat fugit alias autem provident mollitia expedita, distinctio dignissimos error placeat illo saepe tenetur iste incidunt, minima repellendus?",
                    }, {
                        "title": "Title",
                        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vitae sint laborum repellat fugit alias autem provident mollitia expedita, distinctio dignissimos error placeat illo saepe tenetur iste incidunt, minima repellendus?",
                    }, {
                        "title": "Title",
                        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga vitae sint laborum repellat fugit alias autem provident mollitia expedita, distinctio dignissimos error placeat illo saepe tenetur iste incidunt, minima repellendus?",
                    }
                ]
            },
            {
                "title": "2nd WorkFlow",
                "date": "21st of Feb",
                "tasks": [
                    {
                        "title": "Title2",
                        "content": "Lorem2 ipsum2 dolor2, sit2 amet 2conse2ctetur adipisi2cing elit2. Fuga vitae sint 2laborum re2pellat fugi2t 2alias autem provident mollitia e2xped2ita, distinct2io2 dignissimos 22error placeat2 illo saepe tenetu2r iste incidunt,2 minima repellendus?",
                    }
                ]
            }

        ]
    }


    return (
        <div className='boardp-container'>
            {
                board.workflows.map((workflow) => {
                    return <WorkFlow data={workflow} />
                })
            }

        </div>
    )
}

export default Board