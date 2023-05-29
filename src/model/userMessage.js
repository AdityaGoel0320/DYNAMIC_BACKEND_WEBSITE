let mongoose = require("mongoose")

let validator = require("validator")



let userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
        },
        email: {
            type: String,
            required: true,
            // validate(value) {
            //     if (!validate.isEmail(value)) {
            //         throw new Error("invlaid email id")
            //     }
            // }
        },
        phone: {
            type: Number,
            required: true,
            min: 10
        },
        message: {
            type: String,
            required: true,
            minLength: 3,
        },
        date: {
            type: Date,
            default: Date.now(),
        }
    }
)


// model creation


let User = new mongoose.model("User", userSchema)


module.exports = User; 