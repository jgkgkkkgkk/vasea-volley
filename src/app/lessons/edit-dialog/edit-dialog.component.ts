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

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent {
  displayedColumns: string[] = ['id','fist-name','lastName','height','age'];

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}



  onSaveClick() {
    console.log(this.data);
    this.dialogRef.close(this.data);
  }
}
