const express = require('express')
const { getAllProductsDetails,addNewProducts,getProductById,updateProductById,deleteProductById } = require('../../controllers/products/index.js')

const productsRoute = express.Router()

productsRoute.get('/products',getAllProductsDetails)
productsRoute.post('/products',addNewProducts)
productsRoute.get('/products/:id',getProductById)
productsRoute.put('/products/:id',updateProductById)
productsRoute.delete('/products/:id',deleteProductById)

module.exports = productsRoute