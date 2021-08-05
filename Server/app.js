const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');
const DbService = require('./dbService');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//Routes: 

//create
app.post('/insert', (requesr, response) => {
    
});

//read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
   
    })



//update


//delete

app.listen(process.env.PORT, () => console.log('app is running'));

