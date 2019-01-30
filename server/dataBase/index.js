
const mysql = require('mysql')
require('dotenv').config()
const config = JSON.parse(process.env.DATABASE)
console.log(config)
console.log(config)
const con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  insecureAuth: true

})

const query = (sql) => {
  return new Promise((resolve, reject) => {
    con.query(sql, function (err, result) {
      if (err) reject(err)
      resolve(result)
    })
  })
}

module.exports = { query: query }
