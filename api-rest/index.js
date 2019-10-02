'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT  || 3000

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// app.get('/hola/:name', (req, res) =>{
//     res.send({message: `Hola ${req.params.name}!`})
// })

app.get('/api/product', (req, res) =>{
    res.send(200, {products: []})

})
app.get('/api/product/:productId', (req, res)=>{
    
})

app.post('/api/product/', (req, res)=>{
    console.log(req.body)
    res.status(200).send( {message: 'El producto se ha recibidio'})

})

app.put('/api/product/:productId', (req, res)=>{

})

app.delete('/api/product/:productId', (req, res)=>{
    
})

app.listen(port, () => {
    console.log(`API REST correindo en http://localhost:${port}`)
})