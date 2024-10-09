const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const app = express(); // This is a predefined function.

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

const PORT = process.env.port | 3000; // This will not change in the scope of this file.

const pass = 5;

console.log(x);

var x = 345;

for (let i=0; i< pass; i++) { // For locally scoped variables
    setTimeout( () => {console.log(i)}, 1000);
}

clearTimeout();

app.get('/kamlesh', (req,res,next) => {
    res.send(`Hi Sonu`);
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});