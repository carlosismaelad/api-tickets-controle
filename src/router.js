import express from 'express'
import ticketsController from './controllers/ticketsController.js' 
import TicketsMiddleware from './middleware/ticketsMiddleware.js'

const router = express.Router()
