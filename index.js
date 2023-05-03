const express = require("express");
const app = express();

app.get('/topish', (req , res)=>{
 res.send(`ufouf`)
})

app.listen(3002,()=>{
console.log("backend ishladi");
});

