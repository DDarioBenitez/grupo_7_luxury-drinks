const router = require("express").Router()
const { listApi, storeApi, updateApi } = require("../../controllers/api/admin");

/* /api/product */
router.get("/", listApi) 
router.post("/", storeApi)
router.put("/:id", updateApi)


module.exports = router