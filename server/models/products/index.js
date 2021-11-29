const utils = require('../../utils')
const db = utils.dbConnect()

function fetcAllhProducts(){
    const sql = 'select * from products'
    return new Promise((resolve, reject) =>{
        db.query(sql,(err,res) => {
            resolve(res)
        })
    })
}

function addProducts({name,description,price,image}){
    const sql = 'insert into products (name,description,price,image) values (?,?,?,?)'
    return new Promise((resolve, reject) =>{
        db.query(sql,[name,description,price,image],(err,res) => {
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

function getProduct(id){
    const sql = 'select * from products where id=?'
    return new Promise((resolve, reject) =>{
        db.query(sql,[id],(err,res) => {
            if(err){
                console.log(err)
            }else{
                resolve(res)
            }
        })
    })
}

function updateProduct({id,name,description,price,image}){
    const sql = 'update products set name=?,description=?,price=?,image=? where id=?'
    return new Promise((resolve, reject) =>{
        db.query(sql,[name,description,price,image,id],(err,res) => {
            if(err){
                console.log(err)
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

function deleteProduct(id){
    const sql = 'delete from products where id=?'
    return new Promise((resolve, reject) =>{
        db.query(sql,[id],(err,res) => {
            if(err){
                console.log(err)
            }else{
                resolve(res)
            }
        })
    })
}

module.exports = {
    fetcAllhProducts,
    addProducts,
    getProduct,
    updateProduct,
    deleteProduct
}