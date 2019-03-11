export class Hero{

   name: string;
   real_name: string;
   super_power: string;
   biography: string;
   id:number;

  constructor(){




  }

  fillData(id: number , name: string, real_name: string, super_power: string, biography: string){
      this.id = id;
      this.name = name;
      this.real_name = real_name;
      this.super_power = super_power;
      this.biography = biography;
  }
}
