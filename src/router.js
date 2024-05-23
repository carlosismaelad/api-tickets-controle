import express from 'express'
import TicketsMiddleware from './middlewares/TicketsMiddleware.js'
import TicketsController from './controllers/ticketsController.js'


const router = express.Router()

const ticketsController = new TicketsController()
const ticketsMiddleware = new TicketsMiddleware()

router.get("/tickets", ticketsController.findAllTickets)
router.get("/ticket/:id", ticketsController.findTicketById)
router.put("/tickets/:id", 
    ticketsMiddleware.analystFieldValidator,
    ticketsMiddleware.clientFieldValidator,
    ticketsMiddleware.descriptionFieldValidator,
    ticketsMiddleware.resolutionDeadlineFieldValidator,
    ticketsMiddleware.imagesFielValidator,
    ticketsController.updateTicket    
)
router.post("/tickets", 
    ticketsMiddleware.analystFieldValidator,
    ticketsMiddleware.clientFieldValidator,
    ticketsMiddleware.descriptionFieldValidator,
    ticketsMiddleware.resolutionDeadlineFieldValidator,
    ticketsMiddleware.imagesFielValidator,
    ticketsController.createNewTicket
)
router.delete("/tickets", ticketsController.deleteTicket)

export default router