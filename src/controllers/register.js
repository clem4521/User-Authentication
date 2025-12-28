import bcrypt from "bcryptjs";
import conn from "../config/mysqlConfig.js";
import dotenv from "dotenv";

dotenv.config();

function register(req,res){
	const {username,email,password} = req.body;
	const saltRounds = process.env.SALTROUNDS;
	const data = `
	    INSERT INTO user(username,email,password) VALUES (?,?,?)
	`;
	try{
		bcrypt.hash(password,saltRounds,(error,hash)=>{
		    if(error){
			    console.error(error);
			    return;
			};
			
			conn.connect();
			conn.query(data,[username,email,hash],(error,results)=>{
			    if(error){
			        console.error(error);
			        res.status(500).json({"error":error});
			        return;
			    };
			    res.send("Account was successfully created");
			});
			conn.end();
		});
	}catch(error){
		console.error(error);
	}
	
};

export default register;
