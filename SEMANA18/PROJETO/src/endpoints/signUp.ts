import express, {Express, Request, Response} from 'express'
import {connection} from '../connection'
import {User} from '../types/types'

const app: Express = express()

export default async function SignUp(req:Request,res:Response){
    try{
        const bodyRequisition = req.body
        const newUser:User ={
            UserName:bodyRequisition.UserName,
            UserEmail:bodyRequisition.UserEmail,
            UserPassword: bodyRequisition.UserPassword
        }

        if(!newUser.UserName){
            throw new Error ('Please complete user name')
        }

        if(!newUser.UserEmail){
            throw new Error ('Please complete user email')
        }

        if(!newUser.UserPassword){
            throw new Error ('Please complete user password')
        }

        if (newUser.UserPassword.length < 6) {
            throw new Error("Your password must have at least 6 characters")
        }

        if (newUser.UserEmail.indexOf("@") === -1) {
            throw new Error("Invalid email address")
        }

        await connection('UserCooknu').insert(newUser)
        res.status(200).send(`User ${newUser.UserName} created successfully! `)
    }
    
    catch(error){
        res.status(400).send({message:error.message})
        console.log({message:error.message})
    }
}