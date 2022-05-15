const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { PORT } = require("./config");

app.listen(PORT, () => {
    console.log("Server ready...")
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


fs.readdir(path.join(__dirname, "src", "routes"), (err, files) => {
    if(!err){
        files.forEach(file => {
            const routePath = path.join(__dirname, "src", "routes", file);
            const Route = require(routePath);
            
            if(Route.path && Route.router) app.use(Route.path, Route.router);
        })
    }
})