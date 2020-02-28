const router = require("express").Router();
const prismic = require("./prismic_api.js")

router.use("/prismic", prismic);

module.exports = router;