import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonStats } from 'src/app/models/pokemonStats';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon-stats',
  templateUrl: './pokemon-stats.component.html',
  styleUrls: ['./pokemon-stats.component.css']
})
export class PokemonStatsComponent implements OnInit {
  pokemonNumber:number = 0
  pokemonStats:PokemonStats | any

  constructor(private service:PokeAPIService, private activeRoute:ActivatedRoute, private route:Router) {
    this.pokemonStats = {
      name:'',
      id:0,
      sprites: {
        front_default:''
      },
      types:[],
      abilities:[],
      stats:[],
      weight:''
    }
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.pokemonNumber = params['id']
    })

    this.service.getPokemonInformation(this.pokemonNumber).subscribe({
      next: (res) => {
        this.pokemonStats = {
          name:res.name.toUpperCase(),
          id:res.id,
          sprites:res.sprites,
          types:res.types,
          abilities:res.abilities,
          stats:res.stats,
          weight:res.weight
        }
      }
    })
  }

  goBackToMenu() {
    this.route.navigate([''])
  }
}
