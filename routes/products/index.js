
const {Router} = require ('express')
const productsController = require('../../controllers/products/index.js')
const routerProducts = new Router()


routerProducts.get ('/' , (req,res) => res.send('Ruta productos'))
routerProducts.post ('/' , () => productsController.save)
routerProducts.put ('/' , (req,res) => res.send('Ruta productos'))
routerProducts.delete ('/' , (req,res) => res.send('Ruta productos'))



module.exports = routerProducts