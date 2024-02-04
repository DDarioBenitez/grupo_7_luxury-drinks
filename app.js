const express = require('express')

const path = require('path')

const app = express();

app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
})
app.get('/detail', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productDetail.html'))
})
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productCart.html'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register'))
})



app.listen(port, () => console.log(`http://localhost:${port}`))