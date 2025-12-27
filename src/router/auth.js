import express from "express";
import register from "../controllers/register.js";
const auth = express.Router();

auth.get("/test",(req,res)=>{
    res.send("Test");
});
auth.put("/register",register);

export default auth;
