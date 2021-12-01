const { dbConnect } = require('../../utils')

const db = dbConnect()
function addOrder({user_id,address,grand_total}){
    return new Promise((resolve, reject) =>{
        const sql = 'insert into orders (user_id,grand_total,address) values (?,?,?)'
        db.query(sql,[user_id,grand_total,address],(err, res) =>{
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

function lastOrder(){
    return new Promise((resolve, reject) =>{
        const sql = 'select id from orders order by id desc limit 1'
        db.query(sql,(err, res) =>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

function addOrderProducts(order_id,product_id,quantity){
    return new Promise((resolve, reject) =>{
        const sql = 'insert into order_products (order_id,product_id,quantity) values (?,?,?)'
        db.query(sql,[order_id,product_id,quantity],(err, res) =>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

function deleteOrder(id){
    return new Promise((resolve, reject) =>{
        const sql = 'delete from orders where id=?'
        const sql_prod = 'delete from order_products where order_id=?'
        db.query(sql,[id],(err, res) =>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })

        db.query(sql_prod,[id],(err, res) =>{
            console.log(id)
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

function getOrder(user_id){
    return new Promise((resolve, reject) =>{
        const sql = 'select * from orders inner join order_products on orders.id = order_products.order_id where orders.user_id=?'
        db.query(sql,[user_id],(err, res) =>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

module.exports = {
    addOrder,
    lastOrder,
    addOrderProducts,
    deleteOrder,
    getOrder
}