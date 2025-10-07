import {Router} from "express" //desestructuracion de {Routes}

const router = Router()

var artistas = ["Van Gog", "Bethoven", "Mozart", "Chopin", "Vivaldi"]
router.get("/", (req, res)=>{
    res.render("home", {artistas})
})


router.get("/info/:c/:texto", (req, res)=>{
    var c = req.params.c
    var texto = req.params.texto
    console.log(c)
    res.render("info",{c, texto})
})

//ruta de contacto
router.get("/contactanos", (req, res)=>{
    res.render("contactanos")
})

export default router