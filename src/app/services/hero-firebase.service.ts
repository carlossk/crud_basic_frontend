import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Hero } from '../model/Hero';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroFirebaseService{

  constructor(private firestore: AngularFirestore) { }

  getHeros() {
    return this.firestore.collection('heros').snapshotChanges().pipe(map(data => {
      const heroes = [];
      data.forEach((docum: any) => {
       const singleHero = docum.payload.doc.data();
       singleHero.id = docum.payload.doc.id;
        heroes.push(singleHero);
      });

      return heroes;
    }));
  }
  addHero(hero: Hero) {
    let hero2 =  Object.assign({}, hero);
    return this.firestore.collection('heros').add(hero2);
  }
  updateHero(id, hero: Hero) {
    delete hero.id;
    this.firestore.doc('heros/' + id).update(hero);

  }

  deleteHero(hero: Hero) {
    this.firestore.doc('heros/' + hero.id).delete();
  }
}
