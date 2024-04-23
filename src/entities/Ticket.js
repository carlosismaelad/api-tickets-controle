export class Ticket{
    constructor(id, analyst, client, description, createdAt, resolutionDeadline, images) {
        this.id = id;
        this.analyst = analyst;
        this.client = client;
        this.description = description;
        this.createdAt = createdAt;
        this.resolutionDeadline = resolutionDeadline;
        this.images = images || [];
    }
}
