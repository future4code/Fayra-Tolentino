import { Character } from "./types/types"
import { validateCharacter } from "./ex1"

// export const performAttack = (attacker:Character, defender:Character ): any => {
//     if(!attacker.name || attacker.life === undefined  ||  attacker.defence === undefined || !attacker. strength === undefined)
//         {
//             console.log('Invalid Attacker')
//             return false
//         }
    
//     if(!defender.name || defender.life === undefined  ||  defender.defence === undefined || !defender. strength === undefined)
//         {
//             console.log('Invalid Defender')
//             return false
//         }
    
//     if(attacker.strength > defender.defence){
//         return (attacker.strength - defender.defence)
//     }

//     if(attacker.strength < defender.defence){
//         return `Unable to perform the coup`
//     }
// }

export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defence) {
        defender.life -= attacker.strength - defender.defence;
    }
}






