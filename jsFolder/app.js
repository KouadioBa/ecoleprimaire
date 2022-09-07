// create constant
const sqlite3 = require('sqlite3')
const dbName = 'student.db'

// Opening Database
let db = new sqlite3.Database(dbName, err => {
    if (err)
        throw err
    console.log('Database started on' + ' ' + dbName)
})

// Create table
// const sql = 'CREATE TABLE eleve(id INTEGER PRIMARY KEY AUTOINCREMENT, firstname VARCHAR(100), name VARCHAR(100), age NUMBER(10))'
// db.run(sql, err => {
//     if (err)
//         throw err
//     console.log('The table as created')
// })

// insert on Database
// const sql = 'INSERT INTO eleve(firstname,name,age) values(?,?,?)'
// db.run(sql,["michael", "naingoran", "24"], err => {
//     if (err)
//         throw err
//     console.log('The one row as created')
// })

// delete the one line on table
// const sql = "DELETE FROM eleve WHERE id = '2'"
// db.run(sql, err => {
//     if (err)
//         throw err
//     console.log('One data is deleted on table')
// })

// view data list
const sql = 'SELECT*FROM eleve'

db.all(sql, [], (err, rows) => {
    rows.forEach((row) => {
        console.log(row)
    })
})

// Database closed
db.close(err =>{
    if(err)
        throw err
    console.log('Database closed')
})