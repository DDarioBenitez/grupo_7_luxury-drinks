const router = require("express").Router()
const { listApi } = require("../../controllers/api/admin");


router.get("/", listApi) 

module.exports = router