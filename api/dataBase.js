import mysql from "mysql"

export const dataBase = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "host12@3401$#999",
    database: "crud"
}) 