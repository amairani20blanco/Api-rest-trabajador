const express = require('express')
const app = express()
const bodyparser=require("body-parser")
const router=require("./routes");
app.use("/api",router)
console.log("escuchando en el puerto 3000");  
app.listen(3000)