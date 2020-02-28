const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send("hello World");            //Hello World Exercise
})
app.get('/cats',(req, res)=>{           //Routes Exercise
    res.send('Meow');
})
app.get('/dogs',(req, res)=>{           //Routes Exercise
    res.send('Woof');  
})
app.get('cats_and_dogs',(req, res)=>{   //Routes Exercise
    res.send('Living Together');
})

app.get('/greet/:name', (req, res)=>{   //Route Parameters Exercise
    let name = req.param('name');
    res.send(`Hello, ${name}!`);
})

app.get('/year?', (req, res)=>{
    let ageVar = req.param('age');
    let yearBorn = 2020 - parseInt(ageVar);
    res.send(`Your were born in ${yearBorn}`);      //The year you were born Exercise
})






app.listen(2000, ()=>{
    console.log("Listening on port 2000");
})