const { dbConnect } = require('../../utils')

const db = dbConnect()
function userDetails(id){
    return new Promise((resolve, reject) =>{
        const sql = 'select id,name,email,address,description from users where id=?'
        db.query(sql,[id],(err, res) =>{
            if(err){
                reject(err)
            }else{
                resolve(res)
            }
        })
    })
}

function updateDetails({ id,name,email,address,description }){
    const sql = 'update users SET name=?, email=?, address=?, description=? where id=?'
    return new Promise((resolve, reject) =>{
        db.query(sql,[name,email,address,description,id],(err, res) =>{
            if(err){
                reject()
            }else{
                resolve()
            }
        })
    })
}

function updatePassword({ id,password }){
    const sql = 'update users SET password=? where id=?'
    return new Promise((resolve, reject) =>{
        db.query(sql,[password,id],(err, res) =>{
            if(err){
                console.log(err)
                reject()
            }else{
                resolve()
            }
        })
    })
}

module.exports = {
    userDetails,
    updateDetails,
    updatePassword
}