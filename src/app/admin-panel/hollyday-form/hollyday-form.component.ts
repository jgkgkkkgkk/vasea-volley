import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../../services/main.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hollyday } from '../../models/hollyday.model';



export interface DialogDataContainer {
  data: any,
  parent: any;
}

@Component({
  selector: 'app-hollyday-form',
  templateUrl: './hollyday-form.component.html',
  styleUrl: './hollyday-form.component.scss'
})
export class HollydayFormComponent implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    'id': [null],
    'name': [null, Validators.required],
    'description': [null, Validators.required],
    'date': [null, Validators.required],
    'location': [null, Validators.required],

  });

  constructor(private formBuilder: FormBuilder,
    private mainService: MainService,
    public dialogRef: MatDialogRef<HollydayFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataContainer) { }



  ngOnInit() {
    this.setFormData();
  }

  setFormData(): void {
    this.formGroup.patchValue({
      id: this.data.data ? this.data.data.id : null,
      lastname: this.data.data ? this.data.data.lastname : null,
      firstname: this.data.data ? this.data.data.firsname : null,
      height: this.data.data ? this.data.data.height : null,
      age: this.data.data ? this.data.data.age : null
    });
  }


  onSubmit(hollyday: Hollyday) {
    if (this.data.data) {
      this.mainService.editHollyday(hollyday.id, hollyday).subscribe(data => {
        this.data.parent.loadData();
        this.dialogRef.close();
      });
    } else {
      this.mainService.addHollyday(hollyday).subscribe(data => {
        this.data.parent.loadData();
        this.dialogRef.close();
      });
    }
  }

  getButtonText(): String {
    return this.data.data ? 'Сохранить' : 'Добавить';
  }
}


