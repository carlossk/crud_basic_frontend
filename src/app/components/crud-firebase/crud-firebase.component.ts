import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { HeroFirebaseService } from 'src/app/services/hero-firebase.service';

@Component({
  selector: 'app-crud-firebase',
  templateUrl: './crud-firebase.component.html',
  styleUrls: ['./crud-firebase.component.scss']
})
export class CrudFirebaseComponent implements OnInit {

  hero: Hero;
  heroData: any[] = [];
  constructor(private heroFbService: HeroFirebaseService) {
    this.hero = new Hero();
    heroFbService.getHeros().subscribe(data => {

      this.heroData = data;

    });
  }

  ngOnInit() {
  }
  saveData(){
    this.heroFbService.addHero(this.hero).then(res => {
      console.log(res);
      this.hero= new Hero();
    }).catch(err => console.log(err));
  }
  setHero(hero: any ) {
    this.hero =  Object.assign({}, hero);
  }
  updateData() {
    this.heroFbService.updateHero(this.hero.id, this.hero);
  }
  cancel() {
    this.hero = new Hero();
  }
  deleteData(hero){

    this.heroFbService.deleteHero(hero);
  }

}
