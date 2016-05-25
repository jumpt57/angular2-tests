import { Component, OnInit  } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero/hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['#/dashboard']">Dashboard</a>
      <a [routerLink]="['#/heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService]
})
@Routes([
  { path: '#/dashboard', component: DashboardComponent },
  { path: '#/detail/:id', component: HeroDetailComponent },
  { path: '#/heroes', component: HeroesComponent }
])
export class AppComponent implements OnInit  {
    constructor(private router: Router) {}
   
    ngOnInit() {
      this.router.navigate(['#/dashboard']);
    }
    
    title = 'Tour of Heroes';
}