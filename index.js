const express = require('express')

var app = express()

app.get("/admin", (req, res) => {
	res.send("Hello your majesty")
})

app.use((req,res,next)=>{
  console.log("Requested " + req.path)
  next()
})
app.use(express.static('public'))

app.listen(8080)
