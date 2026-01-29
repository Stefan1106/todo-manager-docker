const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true } // automatically adds createdAt and updatedAt
);

module.exports = mongoose.model("Task", taskSchema);
