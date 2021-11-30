const mysql = require('mysql')

function dbConnect(){
    const db = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        port:3307,
        password: '',
        database: 'shopping_app'
    })
    
    db.connect()
    return db
}

const db = dbConnect()

function userEmailCheck(email,id){
    if(id){
        const sql = 'select * from users where email=? and id!=?'
        return new Promise((resolve, reject)=>{
            db.query(sql,[email,id],(err, res)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        })

    }else{
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
}

module.exports = {
    dbConnect,
    userEmailCheck
}