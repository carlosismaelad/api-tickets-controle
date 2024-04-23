import env from 'env-var'

const config = {
    host: env.get('HOST').asString(),
    port: env.get('PORT').asString(),
    user: env.get('USER').asString(),
    password: env.get('PASSWORD').asString(),
    database: env.get('DATABASE').asString()
}

export default config