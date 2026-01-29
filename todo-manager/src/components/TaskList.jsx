import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onToggle, onDelete }) => {
    if (tasks.length === 0) return <p>No tasks yet!</p>;

    return (
        <div>
            {tasks.map((task) => (
                <TaskCard
                    key={task._id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete} // pass delete function
                />
            ))}
        </div>
    );
};

export default TaskList;
