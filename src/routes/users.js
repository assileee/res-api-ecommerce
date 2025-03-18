const express = require("express")
const router = express.Router()

router.get('/',(req,res) => {
    res.send('Users page')
});

router.post("/", (req,res)=>{
    console.log(req.body)
    res.send("you have reached the post request!!")
})

module.exports = router;