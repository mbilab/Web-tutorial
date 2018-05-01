const fs = require('fs')
const mysql = require('mysql')

const connection = mysql.createConnection(JSON.parse(fs.readFileSync('./option.json')))
connection.connect()

connection.query("CREATE TABLE `test` (name VARCHAR(10), age int)")
connection.query("INSERT INTO `test` (`name`, `age`) VALUES ('hohala', '22'), ('hohala', '23'), ('kirayue', '22')")
connection.query("SELECT * FROM  `test` WHERE name='hohala'", (err, results, field) => {
  if (err) return console.log(err)

  console.log(results)
})
connection.query("UPDATE `test` SET age=25 WHERE name='kirayue'")
connection.query("DELETE FROM `test` WHERE name='hohala'")
connection.query("DROP TABLE `test`")

connection.end()
