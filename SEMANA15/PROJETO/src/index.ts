import express from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app = express();
app.use(express.json());
app.use(cors());

type userCount ={
    name:string,
    cpf:number,
    totalValue:number,
    birthDate:number
}

type transactions ={
    senderName:string,
    senderCpf:number,
    sendValue:number,
    sendDate:string
    receiverName:string,
    receiverCpf:number,
}

// let users:User[]=[
let users = [
    {
        name: "Alice",
        cpf: 78253689080,
        totalValue: 1000,
        birthDate:29021986
    },
    {
        name: "Hernando",
        cpf: 92491890011,
        totalValue: 1000,
        birthDate:29031996
    },
    
]

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});