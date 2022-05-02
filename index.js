const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('working')    
})

const port = process.env.port || 3000
app.listen(port, () =>
console.log('listening on port 3000'))