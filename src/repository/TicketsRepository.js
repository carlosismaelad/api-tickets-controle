import Ticket from '../entities/Ticket.js'
import db from '../database/connection.js'

class TicketsRepository{

    constructor(){
        this.db = db
    }

    async findAllTickets(){
        try{
            const tickets = await this.db.manyOrNone("SELECT * FROM tickets WHERE active = true")
            return tickets ? tickets.map(ticketData => new Ticket(ticketData)) : []
        }catch(error){
            return {error: 'Houve um erro ao listar todos os tickets', message: error.message, success: false}
        }
    }

    async findTicketById(id){
        try{
            const storedTicket = await this.db.oneOrNone("SELECT * FROM tickets WHERE id = $1 and active = true", id)
            return storedTicket ? new Ticket(storedTicket) : null
        }catch(error){
            console.log('Houve um erro ao buscar o ticket.', error)
            return {error: 'Houve um erro ao buscar o ticket', message: error.message, success: false}
        }
    }

    async updateTicket(ticket){
        try{
            const result = await this.db.result("UPDATE tickets SET  analyst = $2, client = $3, description = $4, active = $5, resolutionDeadline = $6, images = $7, updatedAt = NOW() WHERE id = $1", [
                ticket.id,
                ticket.analyst,
                ticket.client,
                ticket.description,
                ticket.active,
                ticket.resolutionDeadline,
                ticket.images
            ])
            if (result.rowCount > 0) {
                return { success: true, message: 'Ticket atualizado com sucesso' };
            } else {
                return { success: false, message: 'Nenhum ticket foi atualizado' };
            }
        }catch(error){
            console.log('Houve um erro ao atualizar o ticket.', error)
            return {error: 'Houve um erro ao atualizar o ticket', message: error.message, success: false}
        }
    }

    async createNewTicket(ticket) {
        try{
            const result = await this.db.result("INSERT INTO tickets (id, analyst, client, description, active, resolutionDeadline, images) VALUES ($1, $2, $3, $4, $5, $6, $7)", [
                ticket.id,
                ticket.analyst,
                ticket.client,
                ticket.description,
                ticket.active = true,
                ticket.resolutionDeadline,
                ticket.images
            ]);
            if (result.rowCount > 0) {
                return { success: true, message: 'Ticket criado com sucesso', ticket };
            } else {
                return { success: false, message: 'Nenhum ticket foi criado' };
            }
        }catch(error){
            console.log('Houve um erro ao salvar o ticket.', error)
            return {error: 'Houve um erro ao salvar o ticket', message: error.message, success: false}
        }
    }

    async deleteTicket(id){
        try{
            const result = await this.db.result("UPDATE tickets SET active = false WHERE id = $1", id)
            if (result.rowCount > 0) {
                return { success: true, message: 'Ticket excluído com sucesso' };
            } else {
                return { success: false, message: 'Nenhum ticket foi excluído' };
            }
        }catch(error){
            console.log('Houve um erro ao excluir o ticket.', error)
            return {error: 'Houve um erro ao excluir o ticket', message: error.message, success: false}            
        }
    }


}

export default TicketsRepository