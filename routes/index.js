const router = require("express").Router();
const mailchimp = require("./api/mailchimp");

// Server test 
// router.use("/", (req, res) =>{
//     res.send("Server is Working");
// })


router.use("/mailchimp", mailchimp)


module.exports = router;