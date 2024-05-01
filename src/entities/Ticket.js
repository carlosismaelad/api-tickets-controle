import { v4 as uuidv4 } from 'uuid'

export class Ticket{
    constructor(id, analyst, client, description, images, resolutionDeadline, createdAt, updatedAt) {
        this.id = uuidv4()
        this.analyst = analyst
        this.client = client
        this.description = description
        this.createdAt = new Date()
        this.images = images || []
        this.resolutionDeadline = resolutionDeadline
        this.updatedAt = updatedAt
    }
}
