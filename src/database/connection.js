import pgPromise from 'pg-promise'
import env from 'env-var'

const pgp = pgPromise()

const db = pgp({
  host: env.get('HOST').asString(),
  user: env.get('USER').asString(),
  password: env.get('PASSWORD').asString(),
  port: env.get('PORT').asPortNumber(),
  database: env.get('DATABASE').asString() 
})

module.exports = db

