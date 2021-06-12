import { Request, Response } from "express"
import { characters } from "../data"


export default function getAllCharacters (req:Request,res:Response){
    res.send(characters)
}