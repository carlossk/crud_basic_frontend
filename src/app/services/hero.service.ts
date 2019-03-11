import { Injectable } from '@angular/core';
import { Hero } from '../model/Hero';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heros: Hero[];
  constructor(private http: HttpClient) {

   }
   getQuery(resource: string, method: string, data?: any) {
    const url = `http://localhost:8000/api/${resource}`;
    const headers = new HttpHeaders({

    });
    switch (method){
      case 'get':
      console.log(method);
      return this.http.get(url, { headers });
      break;
      case 'post':
      console.log(method);

      return this.http.post(url, data);
      break;
      case 'put':
      console.log(method);

      return this.http.put(url, data);
      break;
      case 'delete':
      console.log(method);

      return this.http.delete(url, { headers });
      break;


    }

  }

  getHeros() {
    return this.getQuery('hero', 'get');
  }
  addhero(hero: Hero) {
    return this.getQuery('hero', 'post',hero);
  }
  updateHero(id: number, hero: any) {
    return this.getQuery('hero/' + id, 'put', hero);
  }
  getHeroByID( id: number){
    return this.getQuery('hero/' + id, 'get');

  }
  deleteByID( id: number){
    return this.getQuery('hero/' + id, 'delete');

  }

}
