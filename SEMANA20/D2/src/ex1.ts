import { Character } from "./types/types"

export const validateCharacter = (character:Character): boolean => {
    if(!character.name || character.life === undefined  ||  character.defence === undefined 
        || !character. strength === undefined)
        {
            return false
        }
    
    if(character.life <=0  ||  character.defence <= 0 || character. strength <= 0){
        return false
    }

    return true
}


