import { Request, Response } from "express"
import { characters } from "../data"


export default function createCharacters (req:Request,res:Response):void{
    //desestruturação para evitar a repetição
    const{name,gender,description} = req.body
    characters.push({
        id:Date.now(),
        name,
        gender,
        description
    })
    res.send()
}