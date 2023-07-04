import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css'],
})
export class PokemonPageComponent implements OnInit {
  @Input()
  pokemon!: {
    name: string;
    url: string;
  };

  qualquercoisa = new BehaviorSubject<any>(null);

  constructor(private pokemonService: PokemonService, private route: Router) {
    this.pokemon = this.route.getCurrentNavigation()?.extras.state?.['pokemon'];
  }
  ngOnInit() {
    console.log(this.pokemon);
    this.pokemonService.getPokemonByUrl(this.pokemon.url).subscribe((x) => {
      console.log(x);
    });
  }
}
