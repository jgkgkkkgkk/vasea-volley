import {Component, OnInit} from '@angular/core';
import {Car} from "../model.car/car.model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {YService} from "../service.car/y.service";
import {TablePaginationExample} from "../table/table-pagination-example";



@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
})
export class TrainingComponent implements OnInit{


  public characteristic:any;
  public cars:Car[];

  constructor(private yService: YService,
              public dialog: MatDialog,

  ) {


  }
  ngOnInit(): void {
    this.yService.getCar().subscribe(data => {
      this.cars = data;
    });

  }

  onCarClick(car:any) {
    this.yService.getCharacteristic(car.id).subscribe(data => {
      this.characteristic = data;
      this.dialog.open(TablePaginationExample, {
        data: {
          car: car,
          characteristic: data
        }
      });
    });
  }
}
