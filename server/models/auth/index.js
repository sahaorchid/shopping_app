const { dbConnect } = require('../../utils')

const db = dbConnect()

function userLogin({email,password}){
    const sql = 'select * from users where email=? and password=?'
    return new Promise((resolve, reject)=>{
        db.query(sql,[email,password],(err, res)=>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

function userEmailCheck(email){
    const sql = 'select * from users where email=?'
    return new Promise((resolve, reject)=>{
        db.query(sql,[email],(err, res)=>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

function UserRegister({name,email,address,description,password}){
    const sql = 'insert into users (name,email,address,description,password) values (?,?,?,?,?)'
    return new Promise((resolve, reject) =>{
        db.query(sql,[name,email,address,description,password],(err,res) => {
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

module.exports = {
    userLogin,
    userEmailCheck,
    UserRegister
}