-- Cria a tabela tickets se ela não existir
CREATE TABLE IF NOT EXISTS tickets (
    id UUID PRIMARY KEY,
    analyst VARCHAR(255) NOT NULL,
    client VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    resolutionDeadline TIMESTAMP,
    images TEXT[],
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP,
    acttive BOOLEAN
)