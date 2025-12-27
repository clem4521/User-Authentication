import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const conn = await mysql.createConnection({
    host:process.env.HOST,
    user:process.env.CLIENT,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
});


export default conn;
