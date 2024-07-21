import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Car} from "../model.car/car.model";
import {Characteristic} from "../model.car/spareparts.model";




export interface PeriodicElement {
  id: number;
  region: string;
  brand: string;
  price: number;
  age: number;
}

  export interface DialogData {
  car:Car,
    characteristic:Characteristic[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,region:'Moldova', brand: 'Audi' ,price: 150000,age:8,},
  {id:1,region:'Rumimia', brand: 'Porshe' ,price: 2500000,age:5,},
  {id:1,region:'Italia', brand: 'Pegiot' ,price: 100000,age:15,},
  {id:1,region:'Polisa', brand: 'Tesla' ,price: 300000,age:5,},
  {id:1,region:'Russia', brand: 'Vaz' ,price: 15000,age:25,},


];





@Component({
  selector: 'table-pagination-example',
  styleUrl: 'table-pagination-example.css',
  templateUrl: 'table-pagination-example.html',


})
export class TablePaginationExample  {
  displayedColumns: string[] = ['id','region','brand','price','age'];
  dataSource = ELEMENT_DATA;

  constructor(
  public dialogRef: MatDialogRef<TablePaginationExample>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
) {}



  onSaveClick() {
    this.dialogRef.close(this.data);
  }
}

