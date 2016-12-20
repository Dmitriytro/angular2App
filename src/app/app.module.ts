import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './hero.service';
import { InMemHeroService } from "./in-mem-hero-service";
import './rxjs-extensions';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
      {path:'dashboard',component:DashboardComponent},
      {path:'heroes',component:HeroesComponent},
      {path:'detail/:id',component:HeroDetailComponent}
    ]),
    InMemoryWebApiModule.forRoot(InMemHeroService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
