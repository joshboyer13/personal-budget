const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = [
    {
        title: "Eat Out",
        budget: 40
    },
    {
        title: "Rent",
        budget: 370
    },
    {
        title: "Groceries",
        budget: 100
    },
];

app.get('/hello',( req, res) => {

    res.send('Hello World!')

});

app.get('/budget',( req, res) => {

    res.json(budget);

});


app.listen(port, () =>{

    console.log('Example app listening at ')

});