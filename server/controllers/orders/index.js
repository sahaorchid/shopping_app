const { addOrder,lastOrder,addOrderProducts,deleteOrder,getOrder } = require('../../models/orders/index')

async function addNewOrder(req,res){
    try{
        const { user_id,products,address,grand_total } = (req.body)
        const result = await addOrder({user_id,address,grand_total})
        const order_id = await lastOrder()
        products.forEach(product =>{
            const result =  addOrderProducts(order_id[0].id,product.id,product.quantity)
        })
        res.json({msg:"success"})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})
    }
}

async function deleteUserOrder(req,res){
    try{
        const id = req.params.id
        console.log(id)
        const result = await deleteOrder(id)
        res.json({msg:"success"})
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})
    }
}

async function getOrderByUserId(req,res){
    try{
        const user_id = req.params.user_id
        const result = await getOrder(user_id)
        res.json(result)
    }catch(err){
        console.log(err)
        res.status(500).json({msg:"error occured"})
    }
}

module.exports = {
    addNewOrder,
    deleteUserOrder,
    getOrderByUserId
}