const express = require('express');
const app = express();

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]


// app.use(express.static(__dirname + '/public/'));

app.get('/',(request,response)=>{

  response.send('<h1>Hi Carsdfj<h1>')
})
app.get('/api/notes',(request,response)=>{

  response.json(notes)
})
app.listen('3005', function() {
  console.log('Servidor web escuchando en el puerto 3005');
});