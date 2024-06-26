import pgPromise from 'pg-promise'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import env from 'env-var'

const pgp = pgPromise()

const db = pgp({
  host: env.get('HOST').asString(),
  user: env.get('USER').asString(),
  password: env.get('PASSWORD').asString(),
  port: env.get('PORT').asPortNumber(),
  database: env.get('DATABASE').asString() 
})


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, "./create-table.sql")
const query = new pgp.QueryFile(filePath)

async function executeQuery(){
  try{
    await db.query(query)
    console.log('Tabela "tickets" criada com sucesso!')
  }catch(error){
    console.error('Erro ao criar a tabela "tickets":', error);
    process.exit(1);
  }  
}

executeQuery()

export default db

