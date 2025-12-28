import express from "express";
import register from "../controllers/register.js";
import login from "../controllers/login.js";
const auth = express.Router();

auth.get("/test",(req,res)=>{
    res.send("Test");
});
auth.post("/register",register);
auth.post("/login",login);

export default auth;
