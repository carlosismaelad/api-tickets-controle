import Ticket from '../entities/Ticket.js'
import db from '../database/connection.js'

class TicketsRepository{

    constructor(){
        this.db = db
    }

    async findAllTickets(){
        try{
            const tickets = await this.db.findAll("SELECT * FROM tickets")
            return tickets ? tickets.map(ticketData => new Ticket(ticketData)) : null
        }catch(error){
            console.log('Houve um error ao listar tickets', error)
            return {error: 'Houve um erro ao listar todos os tickets', message: error.message, success: false}
        }
    }

    async findTicketById(id){
        try{
            const storedTicket = await this.db.oneOrNone("SELECT * FROM tickets WHERE id = $1", id)
            return storedTicket ? new Ticket(storedTicket) : null
        }catch(error){
            console.log('Houve um erro ao buscar o ticket.', error)
            return {error: 'Houve um erro ao buscar o ticket', message: error.message, success: false}
        }
    }

    async updateTicket(ticket){
        try{
            const updatedTicket = await this.db.none("UPDATE tickets SET  analyst = $2, client = $3, description = $4, resolutionDeadline = $5, images = $6, updatedAt = NOW() WHERE id = $1", [
                ticket.id,
                ticket.analyst,
                ticket.client,
                ticket.description,
                ticket.resolutionDeadline,
                ticket.images
            ])
            return updatedTicket
        }catch(error){
            console.log('Houve um erro ao atualizar o ticket.', error)
            return {error: 'Houve um erro ao atualizar o ticket', message: error.message, success: false}
        }
    }

    async createNewTicket(ticket) {
        try{
            const newTicket = await this.db.none("INSERT INTO tickets (id, analyst, client, description, resolutionDeadline, images) VALUES ($1, $2, $3, $4, $5, $6)", [
                ticket.id,
                ticket.analyst,
                ticket.client,
                ticket.description,
                ticket.resolutionDeadline,
                ticket.images
            ]);
            return newTicket
        }catch(error){
            console.log('Houve um erro ao salvar o ticket.', error)
            return {error: 'Houve um erro ao salvar o ticket', message: error.message, success: false}
        }
    }

    async deleteTicket(id){
        try{
            const removedTicket = await this.db.none("DELETE FROM tickets WHERE id = $1", id)
            return removedTicket
        }catch(error){
            console.log('Houve um erro ao excluir o ticket.', error)
            return {error: 'Houve um erro ao excluir o ticket', message: error.message, success: false}            
        }
    }


}

module.exports = TicketsRepository