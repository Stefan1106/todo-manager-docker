import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/tasks", // use backend service name in Docker
});

export const fetchTasks = async () => {
    const res = await API.get("/");
    return res.data;
};

export const addTask = async (task) => {
    const res = await API.post("/", task);
    return res.data;
};

export const toggleTask = async (taskId) => {
    const res = await API.patch(`/${taskId}`);
    return res.data;
};

export const deleteTask = async (taskId) => {
    const res = await API.delete(`/${taskId}`);
    return res.data;
};
