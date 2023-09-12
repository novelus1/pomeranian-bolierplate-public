import React, { useEffect, useState } from 'react';
import './style.css';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoForm } from './TodoForm/TodoForm';
import { TodoListManagerInstance } from './TodoForm/TodoForm';
import { ToDoComponent } from './ToDoComponent/ToDoComponent';



export function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [error, setError] = useState([]);
    const [isFormVisible, setFormVisibility] = useState(false);
    const [idForEdit, setIdForEdit] = useState(null);


    function updateTodoList(updatedTodo) {
        setTodoList(
            todoList.map((todo) => {
                if (todo.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return todo;
            })
        );
    }

    const handleFetchTodoData = async (givenId) => {

    };



    return (
        <div className="todo-container">
            <h2 className="todo-container__title">Todo List 2</h2>

            {error && <p>{error}</p>}

            {TodoListManagerInstance.getTodoList().map(item => {
                return <div><ToDoComponent /></div>
            })}

            {isFormVisible && (
                <TodoForm
                    setFormVisibility={setFormVisibility}
                    handleFetchTodoData={handleFetchTodoData}
                    data={todoList.find((todo) => todo.id === idForEdit)}
                    setIdForEdit={setIdForEdit}
                />
            )}

            {!isFormVisible && (
                <>
                    <div className="todo-container__list">
                        {todoList.length > 0 &&
                            todoList.map((todo) => {
                                return (
                                    <TodoItem
                                        todo={todo}
                                        key={todo.id}
                                        handleFetchTodoData={handleFetchTodoData}
                                        setIdForEdit={setIdForEdit}
                                        setFormVisibility={setFormVisibility}
                                        updateTodoList={updateTodoList}
                                    />
                                );
                            })}
                    </div>

                    <button
                        className="big-button"
                        onClick={() => {
                            setFormVisibility(true);
                        }}
                    >
                        DODAJ
                    </button>
                </>
            )}
        </div>
    );
}