import mysql from "mysql2"
const dotenv = require("dotenv").config().parsed
const connection = mysql.createConnection({
    host: dotenv.DB_HOST,
    user: dotenv.DB_USER,
    password: dotenv.DB_PASSWORD,
    database: dotenv.DB_DATABASE,
})

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(
                queryString,
                escapedValues,
                (error, results, field) => {
                    if (error) reject(error)
                    resolve({ results, field })
                }
            )
        }),
    end: () => connection.end(),
}
