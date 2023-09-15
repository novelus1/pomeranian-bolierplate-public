import React, { useEffect, useState } from 'react';
import './ToDoList.css';
import { todoListManager } from './ToDoListManager';

function ToDoList() {
    const [task, setTask] = useState('');
    const [author, setAuthor] = useState('');
    const [formText, setFormText] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [sortDate, setSortDate] = useState('newest');
    const [selectedShowStatus, setSelectedShowStatus] = useState('all');
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        const initialList = todoListManager.list();
        if (initialList) {
            const sortedList = sortToDoList(initialList);
            setToDoList(sortedList);
        }
    }, []);

    const sortToDoList = (list) => {
        return list.slice().sort((a, b) => {
            if (sortDate === 'newest') {
                return b.createdAt - a.createdAt;
            } else if (sortDate === 'oldest') {
                return a.createdAt - b.createdAt;
            }
        });
    };

    const filterTasksByStatus = (list) => {
        if (selectedShowStatus === 'completed') {
            return list.filter((item) => item.completed);
        } else if (selectedShowStatus === 'uncompleted') {
            return list.filter((item) => !item.completed);
        }
        return list;
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task || !author || !formText) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        setErrorMessage('');

        const newItem = {
            task: task,
            author: author,
            formText: formText,
            createdAt: Date.now(),
            completed: false,
        };

        todoListManager.addTodo(newItem);

        const updatedList = todoListManager.list();
        if (updatedList) {
            const sortedList = sortToDoList(updatedList);
            setToDoList(sortedList);
        }

        setTask('');
        setAuthor('');
        setFormText('');
    };

    const handleRemove = (item) => {
        todoListManager.removeTodo(item);
        const updatedList = todoListManager.list();
        if (updatedList) {
            const sortedList = sortToDoList(updatedList);
            setToDoList(sortedList);
        }
    };

    const handleComplete = (item) => {
        item.completed = !item.completed;

        setToDoList((prevList) => {
            const updatedList = prevList.map((todoItem) =>
                todoItem === item ? { ...item } : todoItem
            );
            const sortedList = sortToDoList(updatedList);
            return sortedList;
        });

        todoListManager.editTodo(item, item);
    };

    const handleEdit = (item) => {
        setTask(item.task);
        setAuthor(item.author);
        setFormText(item.formText);
        setEditingItem(item);
    };

    const handleSaveEdit = () => {
        if (editingItem) {
            const updatedItem = {
                ...editingItem,
                task: task,
                author: author,
                formText: formText,
            };

            todoListManager.editTodo(editingItem, updatedItem);

            setToDoList((prevList) => {
                const updatedList = prevList.map((todoItem) =>
                    todoItem === editingItem ? updatedItem : todoItem
                );
                const sortedList = sortToDoList(updatedList);
                return sortedList;
            });

            setTask('');
            setAuthor('');
            setFormText('');
            setEditingItem(null);
        }
    };

    return (
        <div className="todo__container">
            <div className="todo__sorting-buttons">
                <button onClick={() => setSortDate(sortDate === 'newest' ? 'oldest' : 'newest')}>
                    {sortDate === 'newest' ? 'Sort by Oldest' : 'Sort by Newest'}
                </button>
                <select
                    value={selectedShowStatus}
                    onChange={(e) => setSelectedShowStatus(e.target.value)}
                >
                    <option value="all">Show All</option>
                    <option value="completed">Show Completed</option>
                    <option value="uncompleted">Show Uncompleted</option>
                </select>
            </div>
            {toDoList ? (
                filterTasksByStatus(sortToDoList(toDoList)).map((data, index) => (
                    <div
                        key={index}
                        className={`todo__item ${data.completed ? 'completed-overlay' : ''}`}
                    >
                        <div className="todo__item-content">
                            <h4>{data.task}</h4>
                            <span>{data.author}</span>
                            <p>{new Date(data.createdAt).toLocaleString('pl-PL')}</p>
                            <p>{data.formText}</p>
                            <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
                        </div>
                        <div className="todo__item-actions">
                            {editingItem === data ? (
                                <div className="todo__edit-form-wrapper">
                                    <form onSubmit={handleSaveEdit}>
                                        <div className="todo__task-wrapper">
                                            <input
                                                className="todo__task-input"
                                                type="text"
                                                placeholder="Edit Task"
                                                value={task}
                                                onChange={(e) => setTask(e.target.value)}
                                            />
                                        </div>
                                        <div className="todo__author-wrapper">
                                            <input
                                                className="todo__author-input"
                                                type="text"
                                                placeholder="Edit Author"
                                                value={author}
                                                onChange={(e) => setAuthor(e.target.value)}
                                            />
                                        </div>
                                        <div className="todo__content-wrapper">
                                            <input
                                                className="todo__content-input"
                                                type="text"
                                                placeholder="Edit Text"
                                                value={formText}
                                                onChange={(e) => setFormText(e.target.value)}
                                            />
                                            <button type="submit">Save Edit</button>
                                        </div>
                                    </form>
                                </div>
                            ) : (
                                <>
                                    <button
                                        className="todo__item-complete"
                                        onClick={() => handleComplete(data)}
                                    >
                                    </button>
                                    <button onClick={() => handleRemove(data)} className="todo__item-remove">
                                    </button>
                                    <button onClick={() => handleEdit(data)} className="todo__item-edit">
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading or no data available</p>
            )}
            {editingItem === null && (
                <div className="todo__form-wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="todo__task-wrapper">
                            <label className="todo__task-field">Task</label>
                            <input
                                className="todo__task-input"
                                type="text"
                                placeholder="Task"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </div>
                        <div className="todo__author-wrapper">
                            <label className="todo__author-field">Author</label>
                            <input
                                className="todo__author-input"
                                type="text"
                                placeholder="Author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                        <div className="todo__content-wrapper">
                            <label className="todo__content-field">Text</label>
                            <input
                                className="todo__content-input"
                                type="text"
                                placeholder="Text"
                                value={formText}
                                onChange={(e) => setFormText(e.target.value)}
                            />
                            <p className="todo__error-message">{errorMessage}</p>
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ToDoList; 