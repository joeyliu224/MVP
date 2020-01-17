const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const parser = require('body-parser');
const db = require('../db/index.js');
const path = require('path');

app.use(express.static('./dist'))

app.use(parser.json());


app.get('/', (req, res) => res.send('Hello World!'));

app.post('/api/todos',(req,res) => {
  //console.log(req.body)
  db.save(req.body).then(
    () => {res.sendStatus(201)}
  ).catch((err) => {
    res.sendStatus(500)
  });

})

app.get('api/todos',(req,res) => {
  db.retreive('todo').then(
    (data) =>{
      console.log('data:',data)
      res.status(200).send(data);
    }
  ).catch(
    (err) => {
      res.sendStatus(404);
    }
  )
})

app.listen(port, () => console.log(`App listening on port ${port}!`))