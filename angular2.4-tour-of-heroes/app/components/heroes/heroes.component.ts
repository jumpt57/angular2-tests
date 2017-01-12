import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../models/hero';
import { HeroDetailComponent } from '../../components/hero-detail/hero-detail.component';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/heroes/heroes.component.html',
    styleUrls: ['./app/components/heroes/heroes.component.css']
})
export class HeroesComponent implements OnInit {

    private heroService: HeroService;
    private router: Router;
    private title: string;
    private hero: Hero;
    private heroes: Hero[];
    private selectedHero: Hero;

    public constructor(heroService: HeroService, router: Router) {
        this.heroService = heroService;
        this.router = router;
        this.hero = {
            id: 1,
            name: 'Windstorm'
        };
    }

    public ngOnInit(): void {
        this.getHeroes();
    }

    private getHeroes(): void {
        this.heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
        });
    }

    public onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    public gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}