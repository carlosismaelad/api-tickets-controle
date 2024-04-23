export class Ticket{
    constructor(id, analyst, client, description, resolutionDeadline, createdAt, updatedAt = null, images) {
        this.id = id
        this.analyst = analyst
        this.client = client
        this.description = description
        this.resolutionDeadline = resolutionDeadline
        this.createdAt = createdAt
        this.updatedAt = updatedAt
        this.images = images || []
    }
}
