const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./router/app');
const port = process.env.PORT || 7777

app.use(cors());
// body parser
app.use(express.json());



app.use('/', routers);



app.listen(port, ()=>{
    console.log(`server run on ${port}`);
})