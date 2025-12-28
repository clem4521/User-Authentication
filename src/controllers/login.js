import bcrypt from "bcryptjs";
import conn from "../config/mysqlConfig.js";
import dotenv from "dotenv";

dotenv.config();

function login(req,res){
	const {email,password} = req.body;
	
	const data = `
	    SELECT email,password FROM user WHERE email = ?
	`;
	try{
	    conn.connect();
	    conn.query(data,[email],async(error,results)=>{
			if(!results[0]){
			    return res.send("Invaild Email");
			}
			
		    const isMatch = await bcrypt.compare(password,results[0].password);
		    
		    if(!isMatch){
			    return res.send("Invaild Password");
			};
			
			res.send("Vaild Password");
		});
	}catch(error){
		console.error(error);
	};
	
};

export default login;
