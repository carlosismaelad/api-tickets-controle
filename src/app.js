import express from 'express'
import db from './database/connection.js'

const app = express()

app.use(express.json())


export default app