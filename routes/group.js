const express = require("express")
const router = express.Router()
const groupsController = require("../controllers/groupsController")

router.get("/createGroup", groupsController.createGroup )



module.exports = router
