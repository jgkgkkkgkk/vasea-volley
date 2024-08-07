import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MainService } from "../../services/main.service";
import { Schedule } from "../../models/schedule.model";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogData } from "../../lessons/edit-dialog/edit-dialog.component";

export interface DialogDataContainer {
  data: any,
  parent: any;
}

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrl: './schedule-form.component.scss'
})
export class ScheduleFormComponent {
  formGroup: FormGroup = this.formBuilder.group({
    'id': [null],
    'day': [null, Validators.required],
    'time': [null, Validators.required],
    'teacher': [null, Validators.required],
  });

  constructor(private formBuilder: FormBuilder,
    private mainService: MainService,
    public dialogRef: MatDialogRef<ScheduleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataContainer) { }

  ngOnInit() {
    this.setFormData();
  }

  setFormData(): void {
    this.formGroup.patchValue({
      id: this.data.data ? this.data.data.id : null,
      day: this.data.data ? this.data.data.day : null,
      time: this.data.data ? this.data.data.time : null,
      teacher: this.data.data ? this.data.data.teacher : null,
    });
  }

  onSubmit(schedule: Schedule) {
    if (this.data.data) {
      this.mainService.editSchedule(schedule.id, schedule).subscribe(data => {
        console.log(this.data.parent);
        this.data.parent.loadData();
        this.dialogRef.close();
      })
    } else {
      this.mainService.addSchedule(schedule).subscribe(data => {
        this.data.parent.loadData();
        this.dialogRef.close();
      });
    }
  }
  
  getButtonText(): String {
    return this.data.data ? 'Сохранить' : 'Добавить';
  }
}
