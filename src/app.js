let express = require("express")
let app = express();
let PORT = process.env.PORT || 3000;
let path = require("path")
let hbs = require("hbs")





app.use(express.urlencoded({ extended: false }))
// database connection
require("./db/conn")


// user model importing

let User = require("./model/userMessage")

// // static website path and setting up
// let x = path.join(__dirname  ,  "../public")
// console.log(x)
// let static_website_path = path.join(x) ; 
// app.use(express.static(static_website_path))



// linking bootstrap and jquery
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")))
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")))
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")))




// // to set hbs to use in dynamic website
// app.set("view engine" , "hbs")

// setting path for using template folder
app.set("view engine", "hbs")
let template_path = path.join(__dirname, "../templates/views")
app.set("views", template_path)


// setting to partials
let partials_path = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partials_path)

// routing
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})



app.post("/contact", async (req, res) => {
    try {


        let userData = new User(req.body)
        await userData.save();
        res.status(200).render("index")

    } catch (error) {
        // res.status(500).send("error in sving the contact form")
        res.status(500).send(error)
    }
})


// running of this file
app.listen(PORT, (req, res) => {
    console.log(`running at port = ${PORT}`)
})