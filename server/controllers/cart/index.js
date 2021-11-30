const { cartDetails,newCartItem,deleteItem } = require('../../models/cart/index')

async function getCartDetails(req,res){
    try{
        const user_id = req.params.user_id
        const result = await cartDetails(user_id)
        res.json(result)
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})
    }
}

async function addNewCartItem(req,res){
    try{
        const user_id = req.params.user_id
        const { product_id,quantity } = req.body
        const result = await newCartItem({product_id,user_id,quantity})
        res.json({msg:"success"})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})
    }
}

async function deleteCartItem(req,res){
    try{
        const id = req.params.cart_id
        const result = await deleteItem(id)   
        res.json({msg:"success"})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})

    }
}

module.exports = {
    getCartDetails,
    addNewCartItem,
    deleteCartItem
}