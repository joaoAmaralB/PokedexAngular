import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonList } from 'src/app/models/pokemonList';
import { PokeAPIService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  pokemonList: PokemonList | any
  pokemonOffset:number = 0

  constructor(private router: Router, private service: PokeAPIService) {}

  ngOnInit(): void {
    this.service.getPokemonList(this.pokemonOffset).subscribe({
      next: (res) => {
        this.pokemonList = res.results
      },
      error: (err) => console.log(err)
      
    })
  }

  navigateToPokemonDetail(pokemonNumber:number) {
    this.router.navigate(['/pokemon-stats', pokemonNumber])
  }

  nextPage() {
    if (this.pokemonOffset < 1292) {
      this.pokemonOffset += 30
      this.service.getPokemonList(this.pokemonOffset).subscribe({
        next: (res) => {
          this.pokemonList = res.results
        },
        error: (err) => console.log(err)
      })
    }
  }

  backPage() {
    if (this.pokemonOffset >= 30) {
      this.pokemonOffset -= 30
      this.service.getPokemonList(this.pokemonOffset).subscribe({
        next: (res) => {
          this.pokemonList = res.results
        },
        error: (err) => console.log(err)
        
      })
    }
  }
}
