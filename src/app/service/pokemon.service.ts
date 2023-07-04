import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseURL = 'https://pokeapi.co/api/v2/'

  constructor(private http: HttpClient) { }

  public getPokemons(){
    return this.http.get(`${this.baseURL}pokemon?limit=151`)
  }

  public getPokemonByUrl(url: string){
    return this.http.get(`${url}`)
  }
}
