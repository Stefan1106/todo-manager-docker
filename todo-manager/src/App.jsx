import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { fetchTasks, addTask, toggleTask, deleteTask } from "./services/api";

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await fetchTasks();
                setTasks(data);
            } catch (err) {
                console.error("Failed to fetch tasks:", err);
            }
        };
        loadTasks();
    }, []);

    const handleAddTask = async (title) => {
        try {
            const newTask = await addTask({ title }); // backend generates _id and completed
            setTasks((prev) => [...prev, newTask]);
        } catch (err) {
            console.error("Failed to add task:", err);
        }
    };

    const handleToggleTask = async (taskId) => {
        try {
            const updatedTask = await toggleTask(taskId);
            setTasks((prev) =>
                prev.map((t) => (t._id === taskId ? updatedTask : t))
            );
        } catch (err) {
            console.error("Failed to toggle task:", err);
        }
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId);
        setTasks((prev) => prev.filter((t) => t._id !== taskId));
    };


    return (
        <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center" }}>
            <h1>To-Do Manager</h1>
            <TaskForm onAdd={handleAddTask} />
            <TaskList tasks={tasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} />
        </div>
    );
};

export default App;
