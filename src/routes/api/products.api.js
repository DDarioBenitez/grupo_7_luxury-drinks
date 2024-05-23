const router = require("express").Router()
const { listApi, createApi, updateApi, deleteApi } = require("../../controllers/api/admin");
const {uploadProducts} = require("../../middlewares/uploadFile")


router.get("/", listApi) 
router.post("/" , uploadProducts.single("image"), createApi)
router.put("/:id", uploadProducts.single("image"), updateApi)
router.delete("/:id", deleteApi)

module.exports = router