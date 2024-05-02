import { v4 as uuidv4 } from 'uuid'

class Ticket{
    constructor(analyst, client, description, images, resolutionDeadline, updatedAt) {
        this.id = uuidv4()
        this.analyst = analyst
        this.client = client
        this.description = description
        this.resolutionDeadline = resolutionDeadline
        this.images = images || []  
        this.updatedAt = updatedAt
    }
}

module.exports = Ticket
