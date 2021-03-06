import express, { Request, Response } from "express";
import knex from 'knex';
import cors from 'cors';
import { AddressInfo } from 'net';
import connection from './connection';

const app = express();

app.use(express.json());
app.use(cors());


// const updateActor = async (id: string, salary: number): Promise<any> => {
//     await connection("Actor")
//         .update({
//         salary: salary,
//         })
//     .where("id", id);
// };

// app.put ("/users/update-salary",async(req:Request,res:Response)=>{
//     try{
//         const salary= req.params.salary
//         console.log(await groupByGender(salary))
//         res.end()
//     }catch(error){
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
// })


// app.put("/users/update-salary/:id",async(req:Request,res:Response)=>{
//     try{
        
//         const actorData ={
//             name:req.body.name,
//             salary:req.body.salary,
//             birth_date: req.body.birth_date,
//             gender:req.body.gender
//         }
//         await connection('Actor_Table').update(actorData).where({id:req.params.id})
//     }catch(error){
//         console.log(error.message)
//         res.status(500).send("Unexpected error")
//     }
    
// })

app.put("/users/update-salary/:id",async(req:Request,res:Response)=>{
    try{
        
        const actorData ={
            salary:req.body.salary
        }
        await connection('Actor_Table').update(actorData).where({id:req.params.id})
        res.send(actorData)
    }catch(error){
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
    
})






const groupByGender = async(gender:string):Promise<any>=>{
    const  result =await connection.raw(`
        SELECT COUNT(*), gender from Actor_Table GROUP BY gender
    `)
    return result [0] [0]
}

app.get("/users/group-by-gender",async(req:Request, res:Response)=>{
    try{
        const gender = req.params.gender
        console.log(await groupByGender(gender))
        res.end()
    }catch(error){
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
    
})

const getActorByName =async(name:string):Promise<any> =>{
    const result =await connection.raw(`
    SELECT * FROM Actor_Table WHERE name = '${name}'
    `)
    return result [0] [0]
}
app.get("/users/:name",async(req:Request, res:Response)=>{
    try{
        const name = req.params.name
        console.log(await getActorByName(name))
        res.end()
    }catch (error){
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

const getActorById =async(id:string):Promise<any> =>{
    const result =await connection.raw(`
    SELECT * FROM Actor_Table WHERE id = '${id}'
    `)
    return result [0] [0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        // let actorResponse = console.log(await getActorById(id))
        // res.send(`Your actor is ${actorResponse}`) -> Pq deu undefined
        console.log(await getActorById(id))
        res.end()
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})



const server = app.listen(process.env.PORT||3003,()=>{
    if(server){
        const address = server.address()as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    }else {
        console.error(`Failure upon starting server.`);
    }
});