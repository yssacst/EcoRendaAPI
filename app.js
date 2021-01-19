const express = require('express')
const app = express()
const cors = require('cors')

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.use(cors())
app.use(express.json())

//rotas
app.get('/ray',(req,res)=>{
    res.json({msg:'razamooos'})
})

const estabelecimento = require('./routes/estabelecimentos')
app.use(estabelecimento)
const catadores = require('./routes/catadore')
app.use(catadores)
const doadores = require('./routes/doadores')
app.use(doadores)

// app.listen(4000, () => {
//     console.log('Rodando em: http://localhost:4000/')
// })
app.listen(port);
