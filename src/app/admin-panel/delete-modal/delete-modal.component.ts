import {Component, Inject} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {MainService} from "../../services/main.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogDataContainer} from "../schedule-form/schedule-form.component";

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.scss'
})
export class DeleteModalComponent {

  constructor(private formBuilder: FormBuilder,
              private mainService: MainService,
              public dialogRef: MatDialogRef<DeleteModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogDataContainer) {
  }

  closeWindow(): void {
    this.dialogRef.close();
  }

  deleteSchedule(id: number): void {
    this.mainService.deleteSchedule(id).subscribe(data => {
      this.data.parent.loadData();
      this.closeWindow();
    });
  }

}
