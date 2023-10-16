export type PokemonStats = {
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
    }[],
    abilities:{
        ablility:{
            name:string,
            url:string
        }
    }[],
    stats:{
        base_stat:string,
        effort:string,
        stat:{
            name:string,
            url:string
        }
    }[],
    weight:string
}