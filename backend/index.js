const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const app = express();

app.use(express.json());
app.use(cors({origin:true}))

// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
//   });


app.post('/authenticate',async(req,res)=>{
    const {username} = req.body;

    try{
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, firstname: username},
            {headers: {"private-key": "0d8f04c2-80f1-4535-864f-0367893f0f1d" }}
        )
        return res.status(r.status).json(r.data)
    } 
    catch(e) {
        return res.status(e.response.status).json(e.response.data)
    }

});




app.listen(5000, ()=>{
    console.log('server is listening on port 5000');
})