export type PokemonData = {
    name:string,
    id:number,
    sprites: {
        front_default:string
    },
    types:{
        slot:string,
        type:{
            name:string,
            url:string
        }
    }[]
}