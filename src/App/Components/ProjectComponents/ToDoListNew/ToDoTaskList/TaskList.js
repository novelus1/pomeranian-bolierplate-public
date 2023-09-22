import React from 'react';
import TaskItem from '../ToDoTaskItem/TaskItem';

function TaskList({
  toDoList,
  editingItem,
  handleComplete,
  handleRemove,
  handleEdit,
  handleSaveEdit,
}) {
  return (
    <div>
      {toDoList ? (
        toDoList.map((data, index) => (
          <TaskItem
            key={index}
            data={data}
            editingItem={editingItem}
            handleComplete={handleComplete}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
            handleSaveEdit={handleSaveEdit}
          />
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default TaskList;
