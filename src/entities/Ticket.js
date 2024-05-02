import { v4 as uuidv4 } from 'uuid'

class Ticket{
    constructor(analyst, client, description, resolutionDeadline = null, images = null) {
        this.id = uuidv4()
        this.analyst = analyst
        this.client = client
        this.description = description
        this.resolutionDeadline = resolutionDeadline
        this.images = images !== null ? images : []  
    }
}

module.exports = Ticket
