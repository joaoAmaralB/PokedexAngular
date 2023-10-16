import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonData } from '../models/pokemonData';
import { PokemonStats } from '../models/pokemonStats';
import { PokemonList } from '../models/pokemonList';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  baseURL: string = '';
  pokeData: PokemonData | any;
  pokeStats: PokemonStats | any;
  pokeList: PokemonList | any

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeAPI;
  }

  getPokemon(pokemonNumber: string): Observable<PokemonData> {
    this.pokeData = this.http.get<PokemonData>(
      `${this.baseURL}${pokemonNumber}`
    );

    return this.pokeData;
  }

  getPokemonInformation(pokemonNumber: number): Observable<PokemonStats> {
    this.pokeStats = this.http.get<PokemonStats>(
      `${this.baseURL}${pokemonNumber}`
    );

    return this.pokeStats;
  }

  getPokemonList(offset:number): Observable<PokemonList> {
    this.pokeList = this.http.get<PokemonList>(`${this.baseURL}?limit=30&offset=${offset}`)

    return this.pokeList
  }
}
