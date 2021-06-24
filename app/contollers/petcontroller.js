let pet=require("../models/pets");
let catalogo=require("../../db/catalogo");
module.exports={
    listar:(req,res)=>{
        res.json("{mensaje: 'todas los trabajadores',pets:"+catalogo.listar()+"}")
    },
    buscar:(req,res)=>{
        res.json("{mensaje:'buscar un trabajador',id:"+req.params.id+"}")
    },
    borrar:(req,res)=>{
        res.json("{mensaje:'se elimino un trabajador',id:"+req.params.id+"}")
    },
    agregar:(req, res)=>{
        console.log(req.body)
        let  nombre=req.body.nombre;
        let genero=req.body.genero;
        let trabajador= new pet(nombre,genero);
        catalogo.agregar(trabajador);
        res.json("{mensaje:'se agrego un nuevo trabajador',name:"+req.body.nombre+"}")
    },
    modificar:(req,res)=>{
        console.log(req.body)
        res.json("{mensaje:'se modifico',id:"+req.params.id+"}")
    }
}