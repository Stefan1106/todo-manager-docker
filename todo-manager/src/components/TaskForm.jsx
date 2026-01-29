import React, { useState } from "react";

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input
                type="text"
                value={title}
                placeholder="Enter task..."
                onChange={(e) => setTitle(e.target.value)}
                style={{ padding: "8px", width: "70%" }}
            />
            <button type="submit" style={{ padding: "8px 16px", marginLeft: "10px" }}>
                Add
            </button>
        </form>
    );
};

export default TaskForm;
