const express = require('express')

const path = require('path')

const app = express();

app.use(express.static('public'));

const port= 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})


app.listen(port,() => console.log(`http://localhost:${port}`))