const router=require("express").Router()
router.get("/", (req, res)=>{
    res.json("{mensaje:'todos'}")
})
router.get("/:id", (req,res)=>{})
router.get("/search", (req,res)=>{})
router.put("/:id", (req,res)=>{})
router.post("/:id", (req,res)=>{})
module.exports=router;