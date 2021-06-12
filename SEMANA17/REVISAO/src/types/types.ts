export type movie = {
    id:number,
    title:string,
    year: number
}

export enum GENDER {
    FEMALE  = 'FEMALE',
    MALE = 'MALE',
    OTHER = 'OTHER'
}

export type character = {
    id: number
    name: string
    gender: GENDER
    description?: string
}
