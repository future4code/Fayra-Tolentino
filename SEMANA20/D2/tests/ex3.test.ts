import { Character } from "../src/types/types"
import {performAttack} from '../src/ex3'


describe('Check empty information for the character',()=>{
    test('should return false',()=>{
        const attacker : Character ={
            name : 'Fayra',
            life:1000,
            defence:100,
            strength:500
        }

        const defender : Character ={
            name : 'Psel',
            life:1000,
            defence:50,
            strength:1000
        }

        const output = performAttack(attacker, defender)
        expect(output).toEqual(450)
    })
})
