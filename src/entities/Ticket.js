export class Ticket{
    constructor(id, analyst, client, description, createdAt, images = null, resolutionDeadline = null, updatedAt = null) {
        this.id = id
        this.analyst = analyst
        this.client = client
        this.description = description
        this.createdAt = createdAt
        this.images = images || []
        this.resolutionDeadline = resolutionDeadline
        this.updatedAt = updatedAt
    }
}
