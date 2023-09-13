import React, { useEffect, useState } from 'react';
import './ToDoList.css';
import { todoListManager } from './ToDoListManager';

function ToDoList() {
    const [task, setTask] = useState('');
    const [author, setAuthor] = useState('');
    const [formText, setFormText] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const [editingItem, setEditingItem] = useState(null);

    useEffect(() => {
        const initialList = todoListManager.list();
        setToDoList(initialList);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            task: task,
            author: author,
            formText: formText,
            createdAt: Date.now(),
            completed: false,
        };

        todoListManager.addTodo(newItem);

        const updatedList = todoListManager.list();
        setToDoList(updatedList);

        setTask('');
        setAuthor('');
        setFormText('');
    };

    const handleRemove = (item) => {
        todoListManager.removeTodo(item);
        const updatedList = todoListManager.list();
        setToDoList(updatedList);
    };

    const handleComplete = (item) => {
        item.completed = !item.completed;

        setToDoList((prevList) => {
            const updatedList = prevList.map((todoItem) =>
                todoItem === item ? { ...item } : todoItem
            );
            return updatedList;
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
                return updatedList;
            });

            setTask('');
            setAuthor('');
            setFormText('');
            setEditingItem(null);
        }
    };

    return (
        <div className="todo__container">
            {toDoList.map((data, index) => (
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
                                    {data.completed ? 'Mark Incomplete' : 'Mark Complete'}
                                </button>
                                <button onClick={() => handleRemove(data)} className="todo__item-remove">
                                    Remove
                                </button>
                                <button onClick={() => handleEdit(data)} className="todo__item-edit">
                                    Edit
                                </button>
                            </>
                        )}
                    </div>
                </div>
            ))}
            {editingItem === null && ( // Only render new task input when not in edit mode
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
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ToDoList;
