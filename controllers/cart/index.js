
const fs = require('fs')

class Cart{
    constructor(){this.db = './cart.txt'}

    async addToCart(req, res){
        try{
            
            if (fs.existsSync("./cart.txt")){
                const data = await fs.readFile("./cart.txt", 'utf-8' , async (err, cont) =>{
                 const products =  JSON.parse(fs.readFile("./products.txt", 'utf-8'))
                 const cart =  JSON.parse(fs.readFile("./cart.txt", 'utf-8'))

                 const selectedProd = products.filter(x=> x.id === req.body.id)
                 const prodIndex = products.findIndex(x=> x.id === req.body.id)
                 delete selectedProd.stock
                 selectedProd.quantity = req.body.quantity
                products[prodIndex].stock = req.body.quantity 
                cart.push (selectedProd)
                const writeProds = await ("./producst.txt", JSON.stringify(products))
                const writeCart = await ("./cart.txt", JSON.stringify(cart))

                })
                const array = JSON.parse(cont)
                 const lastProductId = data [data.lenght - 1].id 
                 const newProduct = req.body
                 newProduct.id =  lastProductId
                 data.push(newProduct)
                 const writeFile = await ("./cart.txt", JSON.stringify(array))
                 res.status(201).send('El Producto fue agregado al carrito exitosamente')
            }else{
                const data = []
                const newProduct = req.body
                newProduct.id = 1
                data.push(newProduct)
                await fs.writeFile("./cart.txt", JSON.stringify(data))
            }

        } catch (error) {

        }
    }

    }




const cartController = new Cart ()

module.exports = cartController