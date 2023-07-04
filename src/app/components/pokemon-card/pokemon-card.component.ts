import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent implements OnInit {
  @Input()
  pokemon!: {
    name: string;
    url: string;
  };

  @Input()
  numero!: number;

  constructor(private route: Router) {}

  ngOnInit() {}

  imagemPokemon() {
    const numeroFormatado = this.leadingZero(this.numero);

    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numeroFormatado}.png`;
  }

  leadingZero(str: string | number, size = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }

  pokemonPage(pokemon: any) {
    this.route.navigateByUrl(pokemon.name, { state: { pokemon: pokemon } });
  }
}
