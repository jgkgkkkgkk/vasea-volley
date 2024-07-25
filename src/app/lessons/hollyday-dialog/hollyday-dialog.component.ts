import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TeamMember} from "../../models/team-member.model";
import {Team} from "../../models/team.model";
import { Hollyday } from '../../models/hollyday.model';


export interface DialogData {
  hollyday: Hollyday
}

@Component({
  selector: 'app-hollyday-dialog',
  templateUrl: './hollyday-dialog.component.html',
  styleUrls: ['./hollyday-dialog.component.scss']
})
export class HollyDayDialogComponent {
  displayedColumns: string[] = ['id','fist-name','lastName','height','age'];

  constructor(
    public dialogRef: MatDialogRef<HollyDayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}



  onSaveClick() {
    this.dialogRef.close(this.data);
  }
}
