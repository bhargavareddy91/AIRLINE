const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const AirlineRoute = require('./airline.route.js');
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api",AirlineRoute);

mongoose.connect("mongodb+srv://gajjalabhargav09:Bhargava2004@cluster0.wena3rg.mongodb.net/Airline_B?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to database!");
    app.listen(5000,() => {
        console.log('Server is running on port 5000');
    });
})
.catch(()=>{
    console.log("Connection failed!");
});











