

const fs = require('fs')



class Products{
    constructor(){this.db = './products.txt'}

    async save(req,res){
        try{
            
            if (fs.existsSync("./products.txt")){
                const data = await JSON.parse(fs.readFile(this.db, 'utf-8'))
                 const lastProductId = data [data.lenght - 1].id 
                 const newProduct = req.body
                 newProduct.id =  lastProductId
                 data.push(newProduct)
                 const writeFile = await (this.db, JSON.stringify(data))
                 res.status(201).send('El Producto fue Guardado exitosamente')
            }else{
                const data = []
                const newProduct = req.body
                newProduct.id = 1
                data.push(newProduct)
                await fs.writeFile(this.db, JSON.stringify(data))
            }

        } catch (error) {

        }
    }

}


const productsController = new Products ()
module.exports = productsController