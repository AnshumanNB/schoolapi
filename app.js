const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")
const schoolRoutes = require("./routes/schoolRoutes")

const app = express()

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("School API")
})

app.get("/about",(req, res)=>{
    res.send("Developed by Anshumann Bele")
})

app.use("/", schoolRoutes)

app.listen(process.env.PORT)

async function dB() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.default.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}

dB();