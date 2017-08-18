const express =  require('express');
const pg = require('./server/db')

const app = express()

const port = 3200

app.listen(port)
console.log(`app listening on ${port}`);
