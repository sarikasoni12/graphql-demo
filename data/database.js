import mysql from "mysql2"
const connection = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    // port: 3306,
    database: "db",
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
