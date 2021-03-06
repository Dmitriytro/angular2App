import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
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
      .then((response: Response) => response.json().data as Hero[])
      .catch(this.handleError);
  }
  getHero(id: number): Promise<Hero>{
    return this.getHeroes()
      .then(heroes => heroes.find((h: Hero) => h.id === id))

  }
  delete(hero: Hero): Promise<any>{
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete(url,{headers:this.headers})
      .toPromise()
      .then(()=> null)
      .catch(this.handleError);
  }
  save(hero: Hero): Promise<any> {
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url,JSON.stringify(hero),{headers:this.headers})
      .toPromise()
      .then((hero)=>hero)
      .catch(this.handleError);
  }
  create(name: string): Promise<Hero>{
    return this.http.post(this.heroesUrl,JSON.stringify({name:name}),{headers:this.headers})
      .toPromise()
      .then((response: Response) => response.json().data as Hero)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message | error)
  }
}
