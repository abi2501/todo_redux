
import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';


function TodoListItem({ id, todo, handleTodoStatus, handleEnableEdit, handleTodoDelete }) {

    const [todoStatus, setTodoStatus] = useState(todo.isCompleted);


    const handleOnChange = () => {
        setTodoStatus(!todoStatus)
        handleTodoStatus(id);
    }

    return (
        <li key={id} className='flex fled-row flex-wrap border-b-2 border-gray-100 shadow justify-evenly py-3'>
            <div className='grid  col-span-4 sm:grid-cols-2' >
                <div className='flex flex-wrap flex-row space-x-2'>
                    <input type='checkbox' checked={todoStatus} disabled={todo.isCompleted} className='sm:w-5 cursor-pointer' onChange={handleOnChange} />
                    <p className='w-60 content-center break-words'>{todo.todoText}</p>
                </div>
                <div className='space-x-1 ml-auto flex flex-wrap flex-row content-center'>
                    <span className={`text-center rounded text-blue-700 p-2  ${todo.isCompleted ? "bg-green-100" : "bg-yellow-200"}`}>
                        {
                            todo.isCompleted ? "Completed" : "Progress"
                        }
                    </span>
                    {
                        todo.isCompleted ? "" : <button
                            className='bg-red-400 hover:bg-red-500 p-2 text-white rounded'
                            onClick={() => handleEnableEdit(id)}
                        > <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                            <span className='px-1'>Edit</span>
                        </button>
                    }
                    {
                        todo.isCompleted ? "" : <button
                            className='bg-gray-400 hover:bg-gray-500 p-2 text-white rounded'
                            onClick={() => handleTodoDelete(id)} >
                            <FontAwesomeIcon icon={faTrashCan} className="icon" />
                            <span className='px-1'>Delete</span>
                        </button>
                    }
                </div>

            </div>
        </li>
    )
}

export default TodoListItem