import express from "express";
import cors from "cors";
import { AddressInfo } from "net";


const app = express();
app.use(express.json());
app.use(cors());

// type userCount ={
//     name:string,
//     cpf:number,
//     totalValue:number,
//     birthDate:number
// }
    // // Adicionar saldo para sí mesmo
// type payYourself ={
//     valueAdd:number
//     yourselfName:string,
//     yourselfCpf:number,
// }

// // Pagar conta
// type payBuild ={
//     buildValue:number,
//     description:string,
//     payDate:number,
// }

// // Trasferência Interna 
// type internTransaction ={
//     sendValue:number,
//     senderName:string,
//     senderCpf:number,
//     sendDate:string,
//     receiverName:string,
//     receiverCpf:number
// }

enum transactionType {
    PAYYOURSELF = "PAYYOURSELF",
    INTERNSEND = "INTERNSEND", 
    INTERNRECEV = "INTERNRECEV", 
    PAYBUILD = "PAYBUILD"
}

type transaction ={
    receiverName?:string,
    receiverCpf?:number,
    value:number,
    date:number,
    description?:string,
    typeTransaction: transactionType
}

type User ={
    name:string,
    cpf:number,
    totalValue:number,
    birthDate:number,
    statement:transaction[]
}

let users:User[]=[
    {
        name: "Alice",
        cpf: 78253689080,
        totalValue: 1000,
        birthDate:29021986,
        statement:[]
    },
    {
        name: "Hernando",
        cpf: 92491890011,
        totalValue: 1000,
        birthDate:29031996,
        statement:[]
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