import { Request, Response } from "express"
import { characters } from "../data"



export default function deleteCharacters (req:Request,res:Response):void{
    //desestruturação para evitar a repetição
    const {id} = req.params 

    // deletar parâmetros pelo id

    const index : number =characters.findIndex(
        character => character.id == Number(id)
    )

    //condição para não deletar números repetidos 
    if(index > -1){
        characters.splice(index,1)
    }
    res.send()
}