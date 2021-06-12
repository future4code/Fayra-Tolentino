import { character, movie, GENDER } from "./types/types"

export let movies: movie []=[
    {
        id:1,
        title : 'O auto da compadecida',
        year:2000
    },
    {
        id:2,
        title : 'Se eu fosse você 1',
        year:2017
    }
]

export let characters: character []= [
    {
        id: 1,
        name: "Storm",
        gender: GENDER.FEMALE
        },
    {
        id: 2,
        name: "Deadpool",
        gender: GENDER.OTHER,
        description:"Sexy motherf***"
    }
]