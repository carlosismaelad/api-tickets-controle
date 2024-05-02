import pgPromise from 'pg-promise'
import join from 'node:path'
import env from 'env-var'

const pgp = pgPromise()

const db = pgp({
  host: env.get('HOST').asString(),
  user: env.get('USER').asString(),
  password: env.get('PASSWORD').asString(),
  port: env.get('PORT').asPortNumber(),
  database: env.get('DATABASE').asString() 
})

const filePath = join(__dirname, "create-table.sql")
const query = new pgp.QueryFile(filePath)
db.query(query)

module.exports = db

