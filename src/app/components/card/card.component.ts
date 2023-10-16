import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon?:PokemonData | any
  @Input()
  pokemonName:string = ""

  constructor(private service:PokeAPIService) {
    this.pokemon = {
      name:'',
      id:0,
      sprites: {
        front_default:''
      },
      types:[]
    }
  }
  
  ngOnInit(): void {
    this.service.getPokemon(this.pokemonName).subscribe({
      next: (res) => {
        console.log(res)
        
        this.pokemon = {
          id: res.id,
          name: res.name.toUpperCase(),
          sprites: res.sprites,
          types: res.types
        }
      },
      error: (err) => console.log(err)
    })
  }
}
