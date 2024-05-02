import db from '../database/connection.js'

class TicketsRepository{

    constructor(){
        this.db = db
    }

    async findAll(){
        const tickets = await this.db.findAll("SELECT * FROM tickets")
        return tickets ? tickets.map(ticketData => new Ticket(ticketData)) : null
    }

    async findById(id){
        const storedTicket = await this.db.oneOrNone("SELECT * FROM tickets WHERE id = $1", id)
        return storedTicket ? new Ticket(storedTicket) : null
    }

    async save(ticket) {
        await this.db.none("INSERT INTO tickets (id, analyst, client, description, resolutionDeadline, images) VALUES ($1, $2, $3, $4, $5, $6)", [
            ticket.id,
            ticket.analyst,
            ticket.client,
            ticket.description,
            ticket.resolutionDeadline,
            ticket.images
        ]);
    }
}