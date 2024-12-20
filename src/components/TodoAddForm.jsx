
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function TodoAddForm({ handleTodoAdd }) {

    const [todoText, setTodoText] = useState("");

    const changeHandler = (e) => {
        setTodoText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoText.trim()) {
            handleTodoAdd(todoText);
            setTodoText("")
        }
        else {
            setTodoText("");
            return;
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='flex flex-row flex-wrap  shadow rounded  bg-amber-200 overflow-hidden py-2 justify-center'>
                <input
                    type='text' value={todoText}
                    onChange={(e) => changeHandler(e)}
                    className='outline-none rounded  w-80 h-10 py-1 px-3' placeholder='Add a New Task' />
                <button className='outline-none bg-cyan-600  hover:bg-cyan-500 rounded break-keep text-white px-5' >
                    <FontAwesomeIcon icon={faPlus} className="icon" />
                    <span className='px-1'>Add Task</span></button>
            </div>
        </form>
    )
}

export default TodoAddForm