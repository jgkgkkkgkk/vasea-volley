import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Car} from "../model.car/car.model";
import {Characteristic} from "../model.car/spareparts.model";


@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor(private http: HttpClient,) {}
    getCar(): Observable<Car[]> {
      const dummyCar2: Car[] = [{
      id:1,
      region:'Moldova',
      brand:'Audi',
      price:150000,
      age:8,
    }, {
      id:2,
      region:'Italia',
      brand:'Pegiot',
      price:100000,
      age:15,
    }, {
      id:3,
      region:'Polisa',
      brand:'Tesla',
      price:300000,
      age:5,
    }];
    return of(dummyCar2);
  }

getCharacteristic(id: number): Observable<Characteristic[]> {
  const dummyCharacteristic: Characteristic[] = [{
    carId:1,
  id:1,
  region:'Moldova',
  brand:'Audi',
  price:150000,
  age:8,
}, {
    carId:2,
  id:2,
  region:'Italia',
  brand:'Pegiot',
  price:100000,
  age:15,
}, {
    carId:3,
  id:3,
  region:'Polisa',
  brand:'Tesla',
  price:300000,
  age:5,
}];
  return of(dummyCharacteristic.filter(el => el.carId == id))
}
}


