import app from './app.js'
import config from './config.js'

const PORT = config.port

app.listen(PORT, () => console.log(`Server is running on URL http://localhost:${PORT}`))