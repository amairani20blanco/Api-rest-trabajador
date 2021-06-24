const router=require("express").Router()
let petcontollers=require("../contollers/petcontroller");
router.get("/", (req, res)=>{
    petcontollers.listar(req,res)
})
router.get("/:id", (req,res)=>{
   petcontollers.buscar(req,res);    
})
router.delete("/:id", (req,res)=>{
   petcontollers.borrar(req,res);
})
router.post("/", (req,res)=>{
   petcontollers.agregar(req,res)
})
router.put("/:id",(req,res)=>{
   petcontollers.modificar(req,res)
})
module.exports=router;