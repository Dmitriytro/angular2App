import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Hero } from "./hero";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type':'application/json'});
  constructor(private http: Http) { }
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }
  delete(hero: Hero): Promise<any>{
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete(url,{headers:this.headers})
      .toPromise()
      .then(()=> null)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message | error)
  }
}
