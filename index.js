const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let notes =[
    {
        "id":1,
        "content":"Me tengo que ir a clase",
        "important":true
    },

    {
        "id":2,
        "content":"Me tengo que ir a clase",
        "important":true
    },

    {
        "id":3,
        "content":"Comparar patatas",
        "important":false
    }
]

// const app = http.createServer((request ,response) =>{
//     response.writeHead(200 ,{'Content-Type':'application/json'})
//     response.end(JSON.stringify(notes))
// })
app.get('/',(request ,response) =>{
    response.send('<h1>hello word</h1>')
})
//GET ALL NOTES
app.get('/api/notes',(request ,response) =>{
    response.json(notes)
})
//GET NOTE BY ID
app.get('/api/notes/:id',(request ,response) =>{
    const id= Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if(note){
        response.json(note)
    }else{
        response.status(404).end()
    }
})

//DELETE
app.delete('/api/notes/:id',(request ,response) =>{
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id != id)
    response.status(204).end()
})
//POST CREATE NUEVA NOTE
app.post('/api/notes',(request ,response) =>{
  const note = request.body
    const ids = notes.map(note => note.id)
    maxId = Math.max(...ids)
  
  const newNote ={
      id: maxId + 1,
      content:note.content,
      important: typeof note.important !== 'undefined'? note.important:false,
      date: new Date().getDate
  }
  notes = notes.concat(newNote)
  response.status(201).json(newNote)
})

app.use((request ,response)=>{
    response.status(404).json({
    error: 'Not found'
    })
})


const PORT = 3001
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})



