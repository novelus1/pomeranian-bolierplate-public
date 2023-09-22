import React, { useEffect, useState } from 'react';
import './ToDoList.css';
import { todoListManager } from './ToDoManager/ToDoListManager';
import TaskList from './ToDoTaskList/TaskList';
import SortingButtons from './ToDoSorting/SortingButtons';
import TaskForm from './ToDoTaskForm/TaskForm';

function ToDoList() {
    const [task, setTask] = useState('');
    const [formText, setFormText] = useState('');
    const [toDoList, setToDoList] = useState(todoListManager.list());
    const [editingItem, setEditingItem] = useState(null);
    const [sortDate, setSortDate] = useState('newest');
    const [selectedShowStatus, setSelectedShowStatus] = useState('all');
    const [errorMessage, setErrorMessage] = useState('');

    const maxTitleLength = 30;
    const maxDescriptionLength = 100;


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

        if (!task.trim() && !formText.trim()) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        if (!task || !formText) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        setErrorMessage('');

        const newItem = {
            task: task,
            formText: formText,
            createdAt: Date.now(),
            completed: false,
        };

        if (editingItem) {
            todoListManager.editTodo(editingItem, newItem);
        } else {
            todoListManager.addTodo(newItem);
        }

        const updatedList = todoListManager.list();
        if (updatedList) {
            const sortedList = sortToDoList(updatedList);
            setToDoList(sortedList);
        }

        setTask('');
        setFormText('');
        setEditingItem(null);
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
        setFormText(item.formText);
        setEditingItem(item);
    };

    const handleSaveEdit = (updatedItem) => {
        if (editingItem) {
            if (!updatedItem.task.trim() || !updatedItem.formText.trim()) {
                setErrorMessage('Please fill in all fields');
                return;
            }

            setToDoList((prevList) => {
                const updatedList = prevList.map((todoItem) =>
                    todoItem === editingItem ? updatedItem : todoItem
                );
                const sortedList = sortToDoList(updatedList);
                return sortedList;
            });

            todoListManager.editTodo(editingItem, updatedItem);

            setTask('');
            setFormText('');
            setEditingItem(null);
            setErrorMessage('');
        }
    };

    return (
        <div className='todo__wrapper'>
            <div className="todo__container">
                <SortingButtons
                    sortDate={sortDate}
                    selectedShowStatus={selectedShowStatus}
                    handleSortDateChange={(newSortDate) => setSortDate(newSortDate)}
                    handleShowStatusChange={(newStatus) => setSelectedShowStatus(newStatus)}
                />
                <TaskList
                    toDoList={filterTasksByStatus(sortToDoList(toDoList))}
                    editingItem={editingItem}
                    handleComplete={handleComplete}
                    handleRemove={handleRemove}
                    handleEdit={handleEdit}
                    handleSaveEdit={handleSaveEdit}
                />
                {!editingItem && (
                    <TaskForm
                        task={task}
                        formText={formText}
                        errorMessage={errorMessage}
                        handleSubmit={handleSubmit}
                        handleChange={(field, value) => {
                            if (field === 'task') setTask(value);
                            if (field === 'formText') setFormText(value);
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default ToDoList;