import { Component } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent {

  constructor( private pokemonService: PokemonService, private route: ActivatedRoute){
  }

}
