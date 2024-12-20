import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoListItem from './TodoListItem';
import TodoEditForm from './TodoEditForm';
import TodoAddForm from './TodoAddForm';
import TodoModel from './TodoModel';

function TodoList() {
    const [showModal, setShowModal] = useState({});

    const todoList = useSelector((state) => state.rxTodo.todoList)
    const dispatcher = useDispatch();

    // const todoList = state.todoList

    const handleTodoAdd = (todoText) => {
        dispatcher({
            type: "rxTodo/addTodo",
            payload: { "todoText": todoText },
        });
    }

    const handleTodoStatus = (id) => {
        dispatcher({
            type: "rxTodo/changeTodoStatus",
            payload: { id: id }
        });
    }

    const handleEditEnable = (id) => {
        dispatcher({
            type: "rxTodo/enableEditMode",
            payload: { id: id }
        });
    }

    const handleTodoTextEdit = (id, todoText) => {
        dispatcher({
            type: "rxTodo/editTodoText",
            payload: {
                id: id,
                todoText: todoText
            }
        });
    }

    const handleTodoDelete = (id) => {
        setShowModal({
            state: true,
            id: id,
            todoText: todoList[id].todoText
        });
    }

    const handleModalOpenClose = (id, flag) => {
        if (flag) {
            dispatcher({
                type: "rxTodo/deleteTodo",
                payload: { id: id }
            });
        }
        setShowModal(false);
    }

    return (
        <>
            <TodoAddForm handleTodoAdd={handleTodoAdd} />
            <ul className='h-screen overflow-y-auto'>
                {
                    Object.entries(todoList).reverse().map(([key, todo]) => (
                        todo.editingEnabled
                            ? <TodoEditForm key={key}
                                id={key}
                                todoText={todo.todoText}
                                handleTodoTextEdit={handleTodoTextEdit}
                                handleEditCancel={handleEditEnable} />
                            : <TodoListItem key={key}
                                id={key}
                                todo={todo}
                                handleTodoStatus={handleTodoStatus}
                                handleEnableEdit={handleEditEnable}
                                handleTodoDelete={handleTodoDelete}
                            />
                    ))
                }
            </ul>
            {
                showModal.state
                    ? <TodoModel id={showModal.id}
                        todoText={showModal.todoText}
                        handleOpenClose={handleModalOpenClose} />
                    : ""
            }
        </>
    )
}

export default TodoList
