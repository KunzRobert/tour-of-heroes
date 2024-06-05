import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [FormsModule, UpperCasePipe, HeroDetailComponent],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {}

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroDisplayName(hero: Hero): string {
    return hero.superpowers && hero.superpowers.length > 0
      ? `${hero.name} 💥`
      : hero.name;
  }
}
