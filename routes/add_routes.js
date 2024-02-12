const express = require("express")
const addRoutes = express()
const addController = require("../controller/addcontroller")
const bodyParser = require("body-parser")

addRoutes.use(bodyParser.json())
addRoutes.use(bodyParser.urlencoded({ extended: true }))
addRoutes.use(express.json())

addRoutes.post("/add", addController.add)
addRoutes.get('/get', addController.getAll)
addRoutes.get('/getById', addController.getById)
addRoutes.put('/updateID', addController.updateId)
addRoutes.delete('/deleteID', addController.deleteId)


module.exports = addRoutes
