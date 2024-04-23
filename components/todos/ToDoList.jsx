import React, { useState } from 'react';
import ToDoListItem from './ToDoListItem';

const ToDoList = ({ tasks }) => {
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            tasks.push({ task: newTask, category: 'General' });
            setNewTask('');
        }
    };

    const handleEditTask = (index, updatedTask) => {
        // Update the task at the specified index
        tasks[index] = updatedTask;
    };

    const handleDeleteTask = (index) => {
        // Remove the task at the specified index
        tasks.splice(index, 1);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <ToDoListItem
                        key={index}
                        task={task.task}
                        category={task.category}
                        onDelete={() => handleDeleteTask(index)}
                        onEdit={(updatedTask) => handleEditTask(index, updatedTask)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
