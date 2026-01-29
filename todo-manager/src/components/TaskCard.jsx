import React from "react";

const TaskCard = ({ task, onToggle, onDelete }) => {
    return (
        <div
            style={{
                padding: "10px",
                margin: "5px 0",
                border: "1px solid #ccc",
                borderRadius: "5px",
                background: task.completed ? "#d4edda" : "#f8d7da",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <span>{task.title}</span>
            <div>
                <button
                    onClick={() => onToggle(task._id)}
                    style={{ marginRight: "5px" }}
                >
                    {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => onDelete(task._id)} style={{ color: "red" }}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
