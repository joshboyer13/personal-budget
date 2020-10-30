const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = 3000;


const budgetModel = require("./public/models/budget_Schema")
let url = 'mongodb://localhost:27017/budgetChart';

app.use(bodyParser.json());
app.use(cors());

app.use('/', express.static('public'));

app.get('/hello',( req, res) => {

    res.send('Hello World!')

});

app.get('/budget',( req, res) => {

    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to the database")
        budgetModel.find({})
            .then((data)=>{
                
                res.json(data);
                mongoose.connection.close()
            })
            .catch((err) => {
                console.log("An Error")
            });

    })
    .catch((connectionError) => {
        console.log("connection Error .find")
    })

    
    //res.sendFile('budget-data.json', { root: __dirname });

});

app.post("/addbudget",(req, res) => {
    console.log("Entered Adding")
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
            var addedBudget= new budgetModel({
                id: req.body.id,
                label: req.body.label,
                value: req.body.value,
                color: req.body.color
        });
        console.log(addedBudget)
        console.log("Connected to the database and created new budget")
        
        budgetModel.insertMany(addedBudget)
            
            .then((data)=>{

                
                res.json(data);
                mongoose.connection.close();
            })
            .catch((adderr) => {
                console.log("Adding Error")
            })

    })
    .catch((connectionError) => {
        console.log("Connection Error .add")
    })


});




app.listen(port, () =>{

    console.log('Example app listening at ')

});

