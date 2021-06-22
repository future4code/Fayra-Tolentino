import { Character } from "../src/types/types"
import { validateCharacter } from "../src/ex1"


// a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "". 

describe('Check empty information for the character',()=>{
    test('should return false',()=>{
        const character :Character ={
            name : '',
            life:1000,
            defence:200,
            strength:500
        }
        const output = validateCharacter(character)
        expect(output).toEqual(false)
    })
})

//b.  Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero. 

describe('Check empty information for the character',()=>{
    test('should return false',()=>{
        const character :Character ={
            name : 'Fayra',
            life:0,
            defence:200,
            strength:500
        }
        const output = validateCharacter(character)
        expect(output).toEqual(false)
    })
})

//c.Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero. 
describe('Check empty information for the character',()=>{
    test('should return false',()=>{
        const character : Character ={
            name : 'Fayra',
            life:1000,
            defence:200,
            strength:0
        }
        const output = validateCharacter(character)
        expect(output).toEqual(false)
    })
})

//d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero. 
describe('Check empty information for the character',()=>{
    test('should return false',()=>{
        const character : Character ={
            name : 'Fayra',
            life:1000,
            defence:0,
            strength:500
        }
        const output = validateCharacter(character)
        expect(output).toEqual(false)
    })
})

//e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo

describe('Check empty information for the character',()=>{
    test('should return false',()=>{
        const character : Character ={
            name : 'Fayra',
            life:1000,
            defence:-100,
            strength:-500
        }
        const output = validateCharacter(character)
        expect(output).toEqual(false)
    })
})

//f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas
describe('Check empty information for the character',()=>{
    test('should return false',()=>{
        const character : Character ={
            name : 'Fayra',
            life:1000,
            defence:100,
            strength:500
        }
        const output = validateCharacter(character)
        expect(output).toEqual(true)
    })
})
