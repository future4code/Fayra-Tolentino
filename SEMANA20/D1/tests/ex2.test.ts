import { User } from '../src/types/types'
import performPurchase from '../src/ex1'


// a. Faça um teste com um usuário com o saldo maior do que o valor de compra

describe('Testing if balance is greater than purchase',()=>{
    test('should return user if the balance is greater than the purchase amount',()=>{
        const user: User = {
            name: "Fayra",
            balance: 1000
        }
        const output = performPurchase(user ,200)
        expect(output).toEqual({
            name: "Fayra",
            balance: 800
        })
    })
})


	
	

// b. Faça um teste com um usuário com o saldo igual ao valor de compra

// c. Faça um teste com um usuário com o saldo menor do que o valor de compra
