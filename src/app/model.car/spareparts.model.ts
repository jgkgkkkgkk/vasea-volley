export class Characteristic {
  carId:number
  id:number;
  region:string;
  brand:string;
  price:number;
  age:number;

  constructor(training:Characteristic) {
  this.id=training.id;
  this.carId=training.carId;
  this.region=training.region;
  this.brand=training.brand;
  this.price=training.price;
  this.age=training.age;
  }
}
