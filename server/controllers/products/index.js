const { fetcAllhProducts,addProducts,getProduct,updateProduct,deleteProduct } = require('../../models/products/index.js')

async function getAllProductsDetails(req,res){
    const result = await fetcAllhProducts()
    res.status(200).json(result)
}

async function addNewProducts(req,res){
    try{
        const {name,description,price,image} = req.body
        const result = await addProducts({name,description,price,image})
        res.status(200).json({msg:"success"})
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}

async function getProductById(req,res){
    const id = req.params.id
    const result = await getProduct(id)
    res.json(result)
}

async function updateProductById(req,res){
    try{
        const id = req.params.id
        const {name,description,price,image} = req.body
        const result = await updateProduct({id,name,description,price,image})
        res.status(200).json({msg:"success"})
    }catch{
        res.status(500).json({msg:"error occured"})
    }
}

async function deleteProductById(req,res){
    try{
        const id = req.params.id
        const result = await deleteProduct(id)
        res.json({msg:"success"})
    }catch{
        res.status(500).send({msg:"error occured"})
    }
}

module.exports = {
    getAllProductsDetails,
    addNewProducts,
    getProductById,
    updateProductById,
    deleteProductById
}