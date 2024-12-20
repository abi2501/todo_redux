import React from 'react'

function TodoModel({ id, todoText, handleOpenClose }) {

    const todotxt = todoText.length > 0 ? todoText.slice(0, 10) + " ..." : todoText

    return (
        <div key={id} onClick={() => handleOpenClose(id, false)} className="fixed inset-1 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded justify-center shadow-lg max-w-md w-full">
                {/* <h2 className="text-xl font-semibold mb-4">Modal Title</h2> */}
                <p className="mb-4 text-center">Do you want to delete the task {todotxt} ?</p>
                <div className='flex flex-row justify-center space-x-2'>
                    <button
                        onClick={() => handleOpenClose(id, true)}
                        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                        Yes
                    </button>
                    <button
                        onClick={() => handleOpenClose(id, false)}
                        className="px-4 py-2 text-white bg-gray-400 hover:bg-gray-500 rounded">
                        No
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoModel