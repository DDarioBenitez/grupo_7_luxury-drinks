const express = require('express')

const path = require('path')

const app = express();

app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})
app.get('/h', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'))
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

app.get('/registrarse', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/DetalleDeProducto', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/productdetail.html'))
})


app.listen(port, () => console.log(`http://localhost:${port}`))