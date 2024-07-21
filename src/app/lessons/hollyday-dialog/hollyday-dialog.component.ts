import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeamMember} from "../../models/team-member.model";
import {Team} from "../../models/team.model";


export interface PeriodicElement {
  id:number
  firstName: string;
  lastName: string;
  height: number;
  age: number;
}

export interface DialogData {
  team: Team,
  members: TeamMember[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,firstName:'vasia', lastName: 'Hydrogen' ,height: 150,age:15,},
  {id:2,firstName:'petia', lastName: 'Hydrogen' ,height: 150,age:15,},
  {id:3,firstName:'ddd', lastName: 'Hydrogen' ,height: 150,age:15,},
  {id:4,firstName:'fff', lastName: 'Hydrogen' ,height: 150,age:15,},
  {id:5,firstName:'ss', lastName: 'Hydrogen' ,height: 150,age:15,},
  {id:6,firstName:'gg', lastName: 'Hydrogen' ,height: 150,age:15,},

];

@Component({
  selector: 'app-hollyday-dialog',
  templateUrl: './hollyday-dialog.component.html',
  styleUrls: ['./hollyday-dialog.component.scss']
})
export class HollyDayDialogComponent {
  displayedColumns: string[] = ['id','fist-name','lastName','height','age'];
  dataSource = ELEMENT_DATA;

  constructor(
    public dialogRef: MatDialogRef<HollyDayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}



  onSaveClick() {
    this.dialogRef.close(this.data);
  }
}
