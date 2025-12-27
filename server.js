import express from "express";
import conn from "./src/config/mysqlConfig.js";
import auth from "./src/router/auth.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());
app.use('/api/auth',auth);

app.listen(3000,()=>{
    console.log("server running on port 3000");
});
