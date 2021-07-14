import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
       
    },
})
