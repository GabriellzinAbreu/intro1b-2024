const express = require('express')

const PORT = 3001

const app =  express()

app.get('/', (requisicao, resposta) => {
    resposta.send(
        'Esta rodando com nodemon'
    
    )
})
.post('/teste', (requisicao, resposta) => {
    resposta.send(
        'Teste Nodemon REQ'
    )
})
//http://localhost:3001/teste


app.listen(PORT, () =>{
    console.log(
        'Express esta rodando na porta:' + PORT
    )
})