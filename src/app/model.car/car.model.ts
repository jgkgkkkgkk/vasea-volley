export class Car{
  id:number;
  region:string;
  brand:string;
  price:number;
  age:number;
  constructor(characteristic:Car) {
    this.id=characteristic.id;
    this.region=characteristic.region;
    this.brand=characteristic.brand;
    this.price=characteristic.price;
    this.age=characteristic.age;
  }
}
