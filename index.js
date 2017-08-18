const express =  require('express');
const pg = require('./server/config')
const bodyParser = require('body-parser')

const app = express()
const port = 3200

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: false
}))


app.get('/api/users', (req, res) => {
  pg('revkit_backend')
  .select()
  .from('users')
  .then(data => {
    console.log(data);
    res.json(data)
  })
})

app.get('/api/favorites', (req, res) => {
  pg('revkit_backend')
  .select()
  .from('favorites')
  .then(data => {
    console.log(data);
    res.json(data)
  })
})

app.post('/api/favorites', (req, res) => {
  pg('favorites')
  .insert(req.body)
  .returning('*')
  .then((data) => {
    res.json(data)
  })
})






app.listen(port)
console.log(`app listening on ${port}`);
