const bodyparser = require('body-parser')
const express = require("express")
const path = require('path')
const app = express()

var PORT = process.env.port || 4000

app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/", function(req, res){
  res.render("sampleForm")
});

app.post('/saveData', (req, res) => {
  console.log("Using Body-parser: ", req.body.fullname)
  console.log("Using Body-parser: ", req.body.email)
})

app.listen(PORT, function(error){
  if (error) throw error
  console.log("server created successfully on PORT", PORT)
})