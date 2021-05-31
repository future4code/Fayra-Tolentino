"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(cors_1["default"]());
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
var transactionType;
(function (transactionType) {
    transactionType["PAYYOURSELF"] = "PAYYOURSELF";
    transactionType["INTERNSEND"] = "INTERNSEND";
    transactionType["INTERNRECEV"] = "INTERNRECEV";
    transactionType["PAYBUILD"] = "PAYBUILD";
})(transactionType || (transactionType = {}));
var users = [
    {
        name: "Alice",
        cpf: 78253689080,
        totalValue: 1000,
        birthYear: 1986,
        statement: []
    },
    {
        name: "Hernando",
        cpf: 92491890011,
        totalValue: 1000,
        birthYear: 1996,
        statement: []
    },
];
app.post('/user', function (req, res) {
    try {
        var reqBody = {
            name: req.body.name,
            cpf: req.body.cpf,
            totalValue: req.body.totalValue,
            birthYear: req.body.birthYear,
            statement: req.body.statement
        };
        users.push(reqBody);
        res
            .status(200)
            .send({ message: 'Client criated!' });
        console.table(users);
    }
    catch (error) {
        res
            .status(400)
            .send({ message: error.message });
    }
});
var server = app.listen(process.env.PORT || 3003, function () {
    if (server) {
        var address = server.address();
        console.log("Server is running in http://localhost: " + address.port);
    }
    else {
        console.error("Failure upon starting server.");
    }
});
