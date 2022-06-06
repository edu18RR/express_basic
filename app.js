// Usando objeto express
const express = require('express')
const app = express()
const port = 3000 // localhost:3000

//localhost:3000/
app.get('/', (req, res) => {
    res.send('Edu Rangel Bienvenido!')
    })

//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos LaunchX!')
    })

app.get('/node/', (req, res) => {
    const explorer1 = {id: 1, name: "exlorer"} //{objeto de java script}
    const explorer2 = {id: 2, name: "edu"}
    const explorer3 = {id: 3, name: "Vero"}
    const explorer4 = {id: 4, name: "Emm"}
    res.send([explorer1, explorer2, explorer3, explorer4]) //para reflejarse en el servidor es necesario correr node app.js
    })

    // Query Params: Recibir parámetros por la url
// http://localhost:3000/explorers/edu
// req.params = {"explorerName":"edu"}
app.get('/explorers/:explorer', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})


// Con esto inicializamos esta app
app.listen(port, () => {
    console.log('Server is running on port ${port}')
}) //control C para parar o servidor