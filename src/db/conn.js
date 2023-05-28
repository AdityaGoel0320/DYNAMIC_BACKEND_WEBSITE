let mongoose = require("mongoose")



mongoose.connect("mongodb://localhost:27017/thapaDynamic")
    .then(() => {
        console.log("connected to db")
    })
    .catch((error) => {
        console.log("error in db connection")
    })