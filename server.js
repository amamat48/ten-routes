const express = require('express')
const port = 3000

const app = express()

const bye = require('./models/bye')

// Middleware

app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Routes

app.get('/', (req, res) => {
    res.render('Index', {greeting : "Hello!!"})
})

app.get('/french', (req, res) => {
    res.render('Index', {greeting : "Bonjour!! (Hello in French)"})
})

app.get('/mandarin', (req, res) => {
    res.render('Index', {greeting : "你好!!, (Hello in Mandarin)"})
})

app.get('/japanese', (req, res) => {
    res.render('Index', {greeting : "こんにちは!! (Hello in Japanese)"})
})

app.get('/arabic', (req, res) => {
    res.render('Index', {greeting : "مرحبا!! (Hello in Arabic)"})
})

app.get('/brazillian', (req, res) => {
    res.render('Index', {greeting : "Olá!! (Hello in Brazillian)"})
})

app.get('/sapnish', (req, res) => {
    res.render('Index', {greeting : "Hola!! (Hello in Spanish)"})
})

app.get('/dutch', (req, res) => {
    res.render('Index', {greeting : "Hallo!! (Hello in Dutch)"})
})

app.get('/turkish', (req, res) => {
    res.render('Index', {greeting : "Merhaba!! (Hello in Turkish)"})
})

app.get('/bye/:indexOfByeArray', (req, res) => {
    res.render('Show', {
        goodbye: bye[req.params.indexOfByeArray]
    })
})



// Tell express to listen

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})