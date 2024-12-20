import React, { useContext, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faBan } from '@fortawesome/free-solid-svg-icons';


function TodoEditForm({ id, todoText, handleTodoTextEdit, handleEditCancel }) {

    const [todoTxt, setTodoTxt] = useState(todoText);

    const handleOnChange = (text) => {
        setTodoTxt(text);
    }

    const handleEditSubmit = () => {
        if (todoTxt.trim()) {
            handleTodoTextEdit(id, todoTxt);
            setTodoTxt("");
        }
        else {
            setTodoTxt("");
            return;
        }
    }

    const handleCancel = () => {
        handleEditCancel(id);
        setTodoTxt(todoText);
    }


    return (
        <li key={id} className='flex fled-row flex-wrap border-b-2 border-gray-100 shadow justify-evenly py-3'>
            <form className='flex flex-row gap-5' onSubmit={() => handleEditSubmit()}>
                <div className='flex flex-wrap flex-row space-x-2'>
                    <input type='text' className='outline-none rounded  w-80 h-10 py-1 px-3' value={todoTxt} onChange={(e) => handleOnChange(e.target.value)} />
                </div>
                <div className='space-x-1 flex flex-wrap flex-row content-center'>
                    <button type='submit' className='text-center rounded text-blue-700 p-2 bg-lime-300'>
                        <FontAwesomeIcon icon={faFloppyDisk} className="icon" />
                        <span className='px-1'>Save</span>
                    </button>
                    <button type='button'
                        className='text-center rounded text-blue-700 p-2 bg-gray-300'
                        onClick={handleCancel}>
                        <FontAwesomeIcon icon={faBan} className="icon" />
                        <span className='px-1'>Cancel</span>
                    </button>
                </div>
            </form>
        </li>
    )
}

export default TodoEditForm