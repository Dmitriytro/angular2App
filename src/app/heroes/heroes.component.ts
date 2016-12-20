import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private heroes: Hero[];
  private selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void{
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes)
  }
  onSelect(hero): void{
    this.selectedHero = hero;
  }
  goDetails(): void{
    this.router.navigate(['/detail',this.selectedHero.id])
  }
  delete(hero): void{
    this.heroService.delete(hero)
      .then(()=> {this.heroes = this.heroes.filter(h => h!==hero)})
  }
  add(name:string): void{
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then((hero)=> {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }
}
