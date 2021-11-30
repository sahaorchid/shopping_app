const { dbConnect } = require('../../utils')

const db = dbConnect()
function cartDetails(id){
    return new Promise((resolve, reject) =>{
        const sql = 'select cart.id,cart.product_id,products.name,cart.quantity,products.price,products.image from ((cart inner join products on cart.product_id = products.id) inner join users on cart.user_id = users.id) where users.id=?'
        db.query(sql,[id],(err, res) =>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

async function newCartItem({ product_id,user_id,quantity }){
    console.log({ product_id,user_id,quantity })
    const sql = 'insert into cart (product_id,user_id,quantity) values(?,?,?)'
    return new Promise((resolve, reject) =>{
        db.query(sql,[product_id,user_id,quantity],(err, res) =>{
            if(err){
                reject()
            }else{
                resolve()
            }
        })
    })
}

function deleteItem(id){
    const sql = 'delete from cart where id=?'
    return new Promise((resolve, reject) =>{
        db.query(sql,[id],(err, res) =>{
            if(err){
                reject()
            }else{
                console.log(res)
                resolve()
            }
        })
    })
}


module.exports = {
    cartDetails,
    newCartItem,
    deleteItem   
}