import React, { useState } from "react";
import './TaskItem.css';

function TaskItem({ data, editingItem, handleComplete, handleRemove, handleEdit, handleSaveEdit }) {
    const { task, createdAt, formText, completed } = data;

    const [editedTask, setEditedTask] = useState(task);
    const [editedFormText, setEditedFormText] = useState(formText);
    const [hasContent, setHasContent] = useState(true);

    const maxTitleLength = 30;
    const maxDescriptionLength = 100;

    const handleEditSave = () => {
        if (editedTask.trim().length === 0 && editedFormText.trim().length === 0) {
            setHasContent(false);
            return;
        }

        const updatedItem = {
            ...data,
            task: editedTask,
            formText: editedFormText,
        };

        handleSaveEdit(updatedItem);
    };

    return (
        <div className={`todo__item ${completed ? 'completed-overlay' : ''}`}>
            <div className="todo__item-content">
                {editingItem === data ? (
                    <>
                        <input
                            className="todo__task-input"
                            type="text"
                            placeholder="Edit Task"
                            value={editedTask}
                            onChange={(e) => {
                                if (e.target.value.length <= maxTitleLength) {
                                    setEditedTask(e.target.value);
                                }
                            }}
                            maxLength={maxTitleLength}
                        />
                        <div className="todo__content-wrapper">
                            <input
                                className="todo__content-input"
                                type="text"
                                placeholder="Edit Description"
                                value={editedFormText}
                                onChange={(e) => {
                                    if (e.target.value.length <= maxDescriptionLength) {
                                        setEditedFormText(e.target.value);
                                    }
                                }}
                                maxLength={maxDescriptionLength}
                            />
                            {hasContent === false && (
                                <p className="todo__error-message">Please fill in all the fields</p>
                            )}
                            <button onClick={handleEditSave} className="todo__save-button">Save Edit</button>
                        </div>
                    </>
                ) : (
                    <>
                        <h4>{task}</h4>
                        <p>{formText}</p>
                        <p>Added: {new Date(createdAt).toLocaleString('pl-PL')}</p>
                        <p>Completed: {completed ? 'Yes' : 'No'}</p>
                    </>
                )}
            </div>
            <div className="todo__item-actions">
                {editingItem === data ? (
                    <></>
                ) : (
                    <>
                        <button
                            className="todo__item-complete"
                            onClick={() => handleComplete(data)}
                        >
                        </button>
                        <button onClick={() => handleEdit(data)} className="todo__item-edit">
                        </button>
                        <button onClick={() => handleRemove(data)} className="todo__item-remove">
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default TaskItem;
