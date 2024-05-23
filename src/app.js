import express from 'express'
import db from './database/connection.js'
import router from './router.js'

const app = express()

app.use(express.json())
app.use(router)


export default app