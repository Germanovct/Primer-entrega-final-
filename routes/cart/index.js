
const {Router} = require ('express')
const cartController = require('../../controllers/cart/index.js')
const routerCart = new Router()

routerCart.get ('/' , (req,res) => res.send('Ruta carrito'))
routerCart.post ('/' , cartController.addToCart)
routerCart.post ('/' , (req,res) => res.send('Ruta carrito'))
routerCart.delete ('/' , (req,res) => res.send('Ruta carrito'))
routerCart.delete ('/' , (req,res) => res.send('Ruta carrito'))



module.exports = routerCart