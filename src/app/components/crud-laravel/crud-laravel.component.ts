import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/Hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-crud-laravel',
  templateUrl: './crud-laravel.component.html',
  styleUrls: ['./crud-laravel.component.scss']
})
export class CrudLaravelComponent implements OnInit {

  hero: Hero;
  heroData: any = [];
  constructor(private herosService: HeroService) {
    this.herosService.getHeros().subscribe(data => {
      console.log(data);
      this.heroData = data;
    });
  }

  ngOnInit() {
    this.hero = new Hero();
  }
  saveData() {
    console.log(this.hero);
    this.herosService.addhero(this.hero).subscribe(data=>{
      this.heroData.push(data);
      this.hero = new Hero();
    });
  }
  setHero(hero:any){
    this.hero =  Object.assign({}, hero);
  }
  updateData(){
    this.herosService.updateHero(this.hero.id,this.hero).subscribe(data=>{

      console.log(data);
      this.heroData[this.findByID(this.hero.id)]=data;
      this.hero= new Hero();
    });
  }
  findByID(id:number){
    let position = -1;
    this.heroData.forEach((element,key) => {
      if(element.id === id){
        position=key;
      }
    });
    return position;
  }
  cancel(){
    this.hero = new Hero();

  }
  deleteData(hero: Hero) {
    this.herosService.deleteByID(hero.id).subscribe(data =>{

      this.heroData.splice(this.findByID(hero.id), 1);
    });
  }

}
