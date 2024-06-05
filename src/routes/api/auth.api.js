const router = require("express").Router()
const { editUserApi,updateApi } = require("../../controllers/api/auth");

/* /api/auth */
router.get("/", editUserApi)
router.post("/", updateApi)


module.exports = router