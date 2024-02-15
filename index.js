const express = require("express")
const app = express()
const port = 3000;

require("./db/connection")
app.use(express.json())
const authRoutes = require("./routes/add_routes");
console.log("Get All ma aaviyu ")

app.use("/Books", authRoutes)

app.listen(port, () => {
    console.log("Server start at port no :" + port)
})
