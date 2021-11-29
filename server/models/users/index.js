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

module.exports = {
    userDetails,
}