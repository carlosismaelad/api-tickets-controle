export class Ticket{
    constructor(id, analyst, client, description, images, resolutionDeadline, createdAt, updatedAt) {
        this.id = id
        this.analyst = analyst
        this.client = client
        this.description = description
        this.createdAt = new Date()
        this.images = images || []
        this.resolutionDeadline = resolutionDeadline
        this.updatedAt = updatedAt
    }
}
