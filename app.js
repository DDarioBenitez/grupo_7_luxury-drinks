const express = require('express')

const path = require('path')

const app = express();

app.use(express.static('public'));

const port= 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/registrarse', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})


app.listen(port,() => console.log(`http://localhost:${port}`))