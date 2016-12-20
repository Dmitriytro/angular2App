import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1, name: 'Windstorm' },
      { id: 2, name: 'Bombasto' },
      { id: 3, name: 'Magneta' },
      { id: 4, name: 'Tornado' },
      { id: 5, name: 'Windstorm2' },
      { id: 6, name: 'Bombasto2' },
      { id: 7, name: 'Magneta2' },
      { id: 8, name: 'Tornado2' }
    ];
    return {heroes};
  }
}
