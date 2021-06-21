//criar um programa que verifique se um usuário pode fazer uma compra ou não. Ele deve receber um objeto 
// user (com nome e saldo) e um valor de compra. Caso o saldo seja maior ou igual ao valor de compra você 
// deve retornar um novo usuário (com o mesmo nome e o saldo atualizado depois da compra). Caso contrário,
//retorne undefined

import {config} from 'dotenv'
import { User } from './types/types'

config()


function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
