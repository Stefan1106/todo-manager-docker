const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// GET all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST new task
router.post("/", async (req, res) => {
    try {
        console.log("REQ BODY:", req.body); // 🔥 shows in docker logs

        const task = new Task({
            title: req.body.title,   // ✅ MUST match frontend
        });

        const saved = await task.save();
        res.status(201).json(saved);
    } catch (err) {
        console.error("ERROR:", err); // 🔥 shows in docker logs
        res.status(500).json({ error: err.message });
    }
});


// PATCH toggle completed
router.patch("/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });

        task.completed = !task.completed;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) return res.status(404).json({ message: "Task not found" });
        res.json(deletedTask);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
