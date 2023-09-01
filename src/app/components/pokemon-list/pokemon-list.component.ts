import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  subscription: Subscription = new Subscription();
  limit: number = 20;

  _pokemons: BehaviorSubject<any> = new BehaviorSubject(new Array)
  pokemons$: Observable<any> = this._pokemons.asObservable();

  ngOnInit(): void {
    this.getAllPokemons()
  }

constructor( private pokemonService: PokemonService, private route: Router){}

  getAllPokemons() {
    this.subscription.add(this.pokemonService.getPokemons(this.limit).subscribe({
      next: data => {
        this._pokemons.next(data)
        console.log(data)
      }
    }))
  }

}
