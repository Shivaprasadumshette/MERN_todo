const mongoose = require("mongoose");

const Todo = mongoose.Schema(
    {
        "id": {
            type: Number,
            require: true
        },
        "tasks": {
            type: String,
            require: true,
            maxlength: 50,
        }
    }
)


module.exports=mongoose.model("Todo",Todo);