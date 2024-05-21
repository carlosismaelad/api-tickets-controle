import TicketsRepository from '../repository/TicketsRepository.js'
import Ticket from '../entities/Ticket.js'

class TicketsController{

    constructor(){
        this.ticketRepository = new TicketsRepository()
    }

    async findAllTickets(req, res){
        try{
            const tickets = await this.ticketRepository.findAllTickets()
            if(tickets.error){
                return res.status(500).json(tickets)
            }
            res.status(200).json(tickets)
        }catch(error){
            res.status(500).json({error: 'Erro ao listar tickets', message: error.message, success: false})
        }
    }

    async findTicketById(req,res){
        const { id } = req.body
        try{
            const ticket = await this.ticketRepository.findTicketById(id)
            if(tickets.error){
                return res.status(500).json(ticket)
            }
            if(!ticket){
                return res.status(404).json({error: 'Ticket não localizado', success: false})
            }
            res.status(200).json(ticket)
        }catch(error){
            res.status(500).json({error: 'Erro ao localizar ticket', message: error.message, success: false})
        }
    }

    async crateNewTicket(req, res){
        const ticketData = req.body
        try{
            const ticket = new Ticket(ticketData)
            const result = await this.ticketRepository.crateNewTicket(ticket)
            if (result.error) {
                return res.status(500).json(result);
            }
            res.status(201).json(result)
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar o ticket', message: error.message, success: false });
        }
    }

    async updateTicket(req,res){
        const ticketData = req.body
        const { id } = req.body
        try{
            if(!id){
                return res.status(400).json({error: 'O Id do ticket é necessário', success: false})
            }
            ticketData.id = id
            const ticket = new Ticket(ticketData)
            const result = this.ticketRepository.updateTicket(ticket)
            if(result.error){
                return res.status(500).json(result);
            }
            if (!result.success) {
                return res.status(404).json(result);
            }
            res.status(200).json(result)
        }catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar o ticket', message: error.message, success: false });
        }
    }

    async deleteTicket(req, res) {
        const { id } = req.body;
        try {
            if (!id) {
                return res.status(400).json({ error: 'ID do ticket é necessário', success: false });
            }
            const result = await this.ticketsRepository.deleteTicket(id);
            if (result.error) {
                return res.status(500).json(result);
            }
            if (!result.success) {
                return res.status(404).json(result);
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao excluir o ticket', message: error.message, success: false });
        }
    }
}

export default TicketsController


