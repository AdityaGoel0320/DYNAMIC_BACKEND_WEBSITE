let express = require("express")
let app = express();
let PORT = process.env.PORT || 3000;
let path = require("path")
let hbs = require("hbs")

// database connection
require("./db/conn")



// // static website path and setting up
// let x = path.join(__dirname  ,  "../public")
// console.log(x)
// let static_website_path = path.join(x) ; 
// app.use(express.static(static_website_path))



// linking bootstrap and jquery
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")))




// to set hbs to use in dynamic website
app.set("view engine" , "hbs")


// routing
app.get("/", (req, res) => {
    res.render("index")
})



// running of this file
app.listen(PORT, (req, res) => {
    console.log(`running at port = ${PORT}`)
})