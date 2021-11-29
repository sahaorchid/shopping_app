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

module.exports = {
    dbConnect
}