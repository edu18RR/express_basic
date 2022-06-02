// Usando objeto express
const express = require('express')
const app = express()
const port = 3000 // localhost:3000

app.get('/', (req, res) => {
    res.send('Edu Rangel Bienvenido!')
    })

//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos LaunchX!')
    })

app.listen(port, () => {
    console.log('Server is running')
}) //control C para parar o servidor